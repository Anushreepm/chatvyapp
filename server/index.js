const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/.env" });
const router = require("./router");

connectDB();

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const authroutes = require("./Routes/authroutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(router);

app.use("/auth", authroutes);
app.use("/", router);
io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

server.listen(process.env.NODE_PORT || 5000, () =>
  console.log(`Server has started at ${process.env.NODE_PORT}`)
);
