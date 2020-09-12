const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const _ = require("lodash");
const userProfile = require("../models/userProfile");

const transport = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "anushreepm13@gmail.com",
    pass: "U9pGdEN3tM0bRJLA",
  },
});

exports.signUp = (req, res) => {
  console.log("hello");
  const { username, email, password } = req.body;
  console.log(req.body);

  userProfile.findOne({ email }).exec((err, user) => {
    console.log(user);

    if (err) {
      return res.status(401).json({
        succes: false,
        message: "unable to fetch data from server",
        error: "user",
      });
    }

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exists!!",
        error: "exist",
      });
    }

    const token = jwt.sign(
      { username, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "100m",
      }
    );

    console.log(token);
    const activateLink = `${process.env.CLIENT_URL}/auth/activate/${token}`;

    const emailData = {
      to: [
        {
          address: email,
          username,
        },
      ],
      from: {
        address: process.env.EMAIL_FROM,
        name: "Anu",
      },
      subject: "Account Activation Link",
      html: `
        <div>
          <h1>Please use the following link to activate the account.</h1>
          <a href="${activateLink}" target="_blank">
            ${activateLink}
          </a>
          <hr />
          <p>This email contains sensitive information</p>
          <a href="${process.env.CLIENT_URL}" target="_blank">
            ${process.env.CLIENT_URL}
          </a>
        </div>
      `,
    };

    transport.sendMail(emailData, (err, info) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "error while sending mail",
          error: err,
        });
      }

      res.json({
        success: true,
        message: `Email has been successfully sent to ${email}. Follow the instructions in the email to activate your account.`,
      });
    });
  });
};

exports.activateAccount = (req, res) => {
  const { token } = req.params;

  if (token) {
    return jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "The link has expired.",
          error: "linkexpire",
        });
      }

      const { username, email, password } = jwt.decode(token);

      const newUser = new userProfile();

      newUser.email = email;
      newUser.username = username;
      newUser.password = password;

      userProfile.findOne({ email }).exec((err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "unable to fetch data from server",
            error: "db",
          });
        }

        if (user) {
          return res.status(400).json({
            success: true,
            message: "Email already activated, please login",
            error: "exist",
          });
        }
        true;
        newUser.save((err, userData) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: "Error while saving data in to db",
              error: "db",
            });
          }

          return res.json({
            success: true,
            message: `Succesfully activated account, please login to your account`,
          });
        });
      });
    });
  }

  return res.status(401).json({
    success: false,
    message: "The token is invalid",
    error: "token",
  });
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;

  // AuthLogger.setLogData(req.body);
  // AuthLogger.info("Request recieved at auth/signin", req.body);
  userProfile.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "unable to fetch data from server",
        error: "db",
      });
    }
    if (!user) {
      // AuthLogger.error("User with the email specified doesn't exist.");

      return res.status(400).json({
        success: false,
        message: "User with the email specified doesn't exist.",
        error: "user",
      });
    }

    if (user.authenticate(password) === false) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
        error: "password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { _id, username, role, email } = user;

    return res.json({
      success: true,
      data: {
        token,
        user: {
          _id,
          username,
          email,
        },
      },
      message: "Signed in successfully",
    });
  });
};
exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  userProfile.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User doesn't exist.",
      });
    }

    const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_RESET_PASSWORD,
      {
        expiresIn: "100m",
      }
    );

    const link = `${process.env.CLIENT_URL}/auth/reset-password/${token}`;

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Password Reset Link",
      html: `
        <h1>Please use the following link to reset your password:</h1>
        <a href="${link}" target="_blank">${link}</a>
      `,
    };

    return userProfile
      .updateOne({ resetPasswordLink: token })
      .exec((err, success) => {
        if (err) {
          return res.status(400).json({
            error: "There was an error in saving the reset password link",
          });
        }

        transport
          .sendMail(emailData)
          .then(() => {
            return res.json({
              message: `Email has been successfully sent to ${email}`,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              error: "There was an error in sending the email.",
            });
          });
      });
  });
};
exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    return jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      (err) => {
        if (err) {
          return res.status(400).json({
            error: "Expired link. Try again.",
          });
        }

        userProfile.findOne({ resetPasswordLink }).exec((err, user) => {
          if (err || !user) {
            return res.status(400).json({
              error: "Somethig went wrong. Try later",
            });
          }

          const updateFields = {
            password: newPassword,
            resetPasswordLink: "",
          };

          user = _.extend(user, updateFields);

          user.save((err) => {
            if (err) {
              return res.status(400).json({
                error: "error in resetting the password",
              });
            }

            return res.json({
              message: "Great! The password has reset.",
            });
          });
        });
      }
    );
  }

  return res.status(400).json({
    error: "We have not received the reset password link",
  });
};
