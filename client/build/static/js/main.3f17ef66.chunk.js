(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{186:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},188:function(e,t,a){e.exports=a.p+"static/media/Homepageimage.f5bd719b.jpg"},191:function(e,t,a){e.exports=a(420)},196:function(e,t,a){},230:function(e,t){},233:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){},307:function(e,t){},309:function(e,t){},32:function(e,t,a){e.exports={homepage:"Homepage_homepage__3siX8",image:"Homepage_image__32TRR",desc:"Homepage_desc__2gGUc",title:"Homepage_title__2uL0p",btn:"Homepage_btn__2pEJT",login:"Homepage_login__1J3u6"}},323:function(e,t){},325:function(e,t){},353:function(e,t){},355:function(e,t){},356:function(e,t){},362:function(e,t){},364:function(e,t){},382:function(e,t){},385:function(e,t){},401:function(e,t){},404:function(e,t){},420:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(29),o=a.n(c),l=(a(196),a(190)),i=a(3),m=a(183),u=a.n(m),p=a(184),g=a.n(p),d=a(62),E=a.n(d),f=(a(233),function(e){var t=e.users;return s.a.createElement("div",{className:"textContainer"},t?s.a.createElement("div",null,s.a.createElement("h3",null,"Active people:"),s.a.createElement("div",{className:"activeContainer"},s.a.createElement("h2",null,t.map((function(e){var t=e.name;return s.a.createElement("div",{key:t,className:"activeItem"},t,s.a.createElement("img",{alt:"Online Icon",src:E.a}))}))))):null)}),b=a(185),v=a.n(b),h=(a(281),a(91)),O=a.n(h),j=function(e){var t=e.message,a=t.text,n=t.user,r=!1,c=e.name.trim().toLowerCase();return n===c&&(r=!0),r?s.a.createElement("div",{className:"messageContainer justifyEnd"},s.a.createElement("p",{className:"sentText pr-10"},c),s.a.createElement("div",{className:"messageBox backgroundBlue"},s.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(a)))):s.a.createElement("div",{className:"messageContainer justifyStart"},s.a.createElement("div",{className:"messageBox backgroundLight"},s.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(a))),s.a.createElement("p",{className:"sentText pl-10 "},n))},N=(a(282),function(e){var t=e.messages,a=e.name;return s.a.createElement(v.a,{className:"messages"},t.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(j,{message:e,name:a}))})))}),A=a(186),w=a.n(A),S=(a(283),function(e){var t=e.room;return s.a.createElement("div",{className:"infoBar"},s.a.createElement("div",{className:"leftInnerContainer"},s.a.createElement("img",{className:"onlineIcon",src:E.a,alt:"online icon"}),s.a.createElement("h3",null,t),s.a.createElement("div",{className:"appName"},s.a.createElement("h2",null,"Chatvy"),s.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac"))),s.a.createElement("div",{className:"rightInnerContainer"},s.a.createElement("a",{href:"/join"},s.a.createElement("img",{src:w.a,alt:"close icon"}))))}),C=(a(284),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),s.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),x=(a(285),function(e){var t=e.location,a=Object(r.useState)(""),c=Object(i.a)(a,2),o=c[0],m=c[1],p=Object(r.useState)(""),d=Object(i.a)(p,2),E=d[0],b=d[1],v=Object(r.useState)(""),h=Object(i.a)(v,2),O=h[0],j=h[1],A=Object(r.useState)(""),w=Object(i.a)(A,2),x=w[0],y=w[1],k=Object(r.useState)([]),I=Object(i.a)(k,2),P=I[0],R=I[1],T="https://murmuring-retreat-64873.herokuapp.com/";Object(r.useEffect)((function(){var e=u.a.parse(t.search),a=e.name,r=e.room;n=g()(T),b(r),m(a),n.emit("join",{name:a,room:r},(function(e){e&&alert(e)}))}),[T,t.search]),Object(r.useEffect)((function(){n.on("message",(function(e){R((function(t){return[].concat(Object(l.a)(t),[e])}))})),n.on("roomData",(function(e){var t=e.users;j(t)}))}),[]);return s.a.createElement("div",{className:"outerContainer"},s.a.createElement("div",{className:"container"},s.a.createElement(S,{room:E}),s.a.createElement(N,{messages:P,name:o}),s.a.createElement(C,{message:x,setMessage:y,sendMessage:function(e){e.preventDefault(),x&&n.emit("sendMessage",x,(function(){return y("")}))}})),s.a.createElement(f,{users:O}))}),y=a(13);a(286);function k(e){var t=e.history,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],o=n[1],l=Object(r.useState)(""),m=Object(i.a)(l,2),u=m[0],p=m[1];return s.a.createElement("div",{className:"joinOuterContainer"},s.a.createElement("div",{className:"dashboard-logout",onClick:function(e){return t.push("/")}},"Logout"),s.a.createElement("div",{className:"joinInnerContainer"},s.a.createElement("h1",{className:"heading"},"Join"),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return o(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return p(e.target.value)}})),s.a.createElement(y.b,{onClick:function(e){return c&&u?null:e.preventDefault()},to:"/chat?name=".concat(c,"&room=").concat(u)},s.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var I=a(188),P=a.n(I),R=a(32),T=a.n(R);function B(){return s.a.createElement("div",{className:T.a.homepage},s.a.createElement("div",null,s.a.createElement("h1",{className:T.a.title},"Welcome to ",s.a.createElement("br",null)," chatvu."),s.a.createElement("div",{className:T.a.desc},s.a.createElement("p",null,"Join the conversation"),s.a.createElement("p",null,"Start using chatvu today.")),s.a.createElement(y.b,{to:"/signup"},s.a.createElement("button",{className:"btn ".concat(T.a.btn)},"Sign up")),s.a.createElement(y.b,{to:"/signin"},s.a.createElement("button",{className:"btn btn-outline ".concat(T.a.login)},"Login"))),s.a.createElement("img",{src:P.a,className:T.a.image,alt:"chat Image"}))}var H=a(5),_=a(24),D=a.n(_),F=a(38),U=a(9),J=a(64),W=a.n(J),L=function(){if("undefined"!==window)return!!function(e){if("undefined"!==window)return W.a.get(e)}("token")&&(!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")))},M=function(e){var t;t="token","undefined"!==window&&W.a.remove(t,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},G=(a(52),Object(H.e)((function(e){var t=e.children,a=e.match,n=e.history,c=function(e){return a.path===e?{color:"#000"}:{color:"#fff"}};return s.a.createElement(r.Fragment,null,s.a.createElement("ul",{className:"nav nav-tabs bg-primary"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(y.b,{to:"/",className:"nav-link",style:c("/")},"Home")),!L()&&s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"nav-item"},s.a.createElement(y.b,{to:"/signin",className:"nav-link",style:c("/signin")},"Signin")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(y.b,{to:"/signup",className:"nav-link",style:c("/signup")},"Signup"))),L()&&s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"nav-item"},s.a.createElement(y.b,{to:"/Signin",className:"nav-link",style:c("/Signin")},"Signin")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){M((function(){n.push("/")}))}},"Signout")))),s.a.createElement("div",{className:"container"},t))})),a(21)),Q=a.n(G);var Y=function(e){var t=e.history,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],o=n[1],l=Object(r.useState)(""),m=Object(i.a)(l,2),u=m[0],p=m[1],g=Object(r.useState)(),d=Object(i.a)(g,2),E=d[0],f=d[1],b=Object(r.useState)(""),v=Object(i.a)(b,2),h=v[0],O=v[1],j=function(){var e=Object(F.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},e.next=4,Q.a.post("/auth/signin",t,a);case 4:n=e.sent,console.log(n.data),f(n.data.success),O(n.data.message),N(),e.next=18;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data),f(e.t0.response.data.success),O(e.t0.response.data.message),N(),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){!1===E&&""!==h&&U.b.error(h,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(r.useEffect)((function(){E?t.push("/join"):!1===E&&""!==h&&U.b.error(h,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[E,h]),s.a.createElement(s.a.Fragment,null,s.a.createElement(U.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),s.a.createElement("div",{className:"login-page"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"/home.png",alt:"homepage"})),s.a.createElement("div",{className:"login-header"},"Enter details for login"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation();var t={email:c,password:u};j(t),console.log(t),o(""),p("")},className:"signin-container"},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),s.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your Email",value:c,onChange:function(e){return o(e.target.value)}}),s.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputPassword1"},"Password"),s.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Enter your Password",value:u,onChange:function(e){return p(e.target.value)}})),s.a.createElement("div",{className:"forgot-password"},s.a.createElement("a",{href:"http://localhost:3000/auth/forgot-password",target:"_blank"},"forgot password ?")),s.a.createElement("div",{className:"signin-button"},s.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Signin"))),s.a.createElement("br",null)))};var K=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],m=o[1],u=Object(r.useState)(""),p=Object(i.a)(u,2),g=p[0],d=p[1],E=Object(r.useState)(""),f=Object(i.a)(E,2),b=f[0],v=f[1],h=Object(r.useState)(),O=Object(i.a)(h,2),j=O[0],N=O[1],A=Object(r.useState)(""),w=Object(i.a)(A,2),S=w[0],C=w[1],x=function(){var e=Object(F.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},e.next=4,Q.a.post("/auth/signup",t,a);case 4:n=e.sent,console.log(n.data),N(n.data.success),C(n.data.message),y(),e.next=18;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data),N(e.t0.response.data.success),C(e.t0.response.data.message),y(),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){j?U.b.success(S,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):!1===j&&""!==S&&U.b.error(S,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return Object(r.useEffect)((function(){j?U.b.success(S,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):!1===j&&""!==S&&U.b.error(S,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[j,S]),s.a.createElement(s.a.Fragment,null,s.a.createElement(U.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),s.a.createElement("div",{className:"signup-page"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"/home.png",alt:"homepage"})),s.a.createElement("div",{className:"login-header"},"Enter details for Signup"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),x({username:a,email:l,password:g}),n(""),m(""),d(""),v("")},className:"signup-container"},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputName1"},"User Name"),s.a.createElement("input",{type:"User Name",class:"form-control",id:"exampleInputName1",placeholder:"Enter your Name",value:a,onChange:function(e){return n(e.target.value)},required:!0})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),s.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your Email",value:l,onChange:function(e){return m(e.target.value)},required:!0})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputPassword1"},"Password"),s.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Enter your Password",value:g,onChange:function(e){return d(e.target.value)}})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"exampleInputPassword1"},"Confirm Password"),s.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Enter your Password",value:b,onChange:function(e){return v(e.target.value)}})),s.a.createElement("div",{className:"signin-button"},s.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Signin")))))};var q=function(e){var t=e.history,a=e.match.params.token,n=Object(r.useState)(),c=Object(i.a)(n,2),o=c[0],l=c[1],m=Object(r.useState)(""),u=Object(i.a)(m,2),p=u[0],g=u[1],d=function(){var e=Object(F.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,{headers:{"Content-Type":"application/json"}},e.next=4,Q.a.post("/auth/activate/".concat(a));case 4:t=e.sent,l(t.data.success),g(t.data.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),l(e.t0.response.data.success),g(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),console.log(o,p),s.a.createElement("div",{className:"activate-account-main"},s.a.createElement("div",{className:"activate-account ".concat(o)},o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,p),s.a.createElement("button",{onClick:function(){return t.push("/signin")}},"login")),!o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,p),s.a.createElement("button",{onClick:function(){return t.push("/signup")}},"signup"))))},V=a(63),X=a(7),Z="Request password reset link",z=function(e){e.history;var t=Object(r.useState)({email:"",buttonText:Z}),a=Object(i.a)(t,2),n=a[0],c=a[1],o=n.email,l=n.buttonText,m=function(e){e.preventDefault(),c(Object(X.a)(Object(X.a)({},n),{},{buttonText:"Submitting"})),Q.a.post("/auth/forgot-password",{email:o}).then((function(e){console.log("FORGOT PASSWORD SUCCESS",e),U.b.success(e.data.message),c(Object(X.a)(Object(X.a)({},n),{},{buttonText:Z}))})).catch((function(e){console.log("FORGOT PASSWORD ERROR",e.response.data),U.b.error(e.response.data.error),c(Object(X.a)(Object(X.a)({},n),{},{buttonText:Z}))}))};return s.a.createElement("div",{className:"login-page"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:"/home.png",alt:"homepage"})),s.a.createElement(U.a,null),s.a.createElement("h1",{className:"p-5 text-center"},"Forgot password"),function(){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"text-muted"},"Email"),s.a.createElement("input",{r:!0,onChange:(e="email",function(t){c(Object(X.a)(Object(X.a)({},n),{},Object(V.a)({},e,t.target.value)))}),value:o,type:"email",className:"form-control"})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary",onClick:m},l)));var e}())},$=a(189),ee=a.n($),te=function(e){var t=e.match,a=Object(r.useState)({name:"",token:"",newPassword:"",buttonText:"Reset password"}),n=Object(i.a)(a,2),c=n[0],o=n[1];Object(r.useEffect)((function(){var e=t.params.token,a=ee.a.decode(e).name;e&&o((function(t){return Object(X.a)(Object(X.a)({},t),{},{name:a,token:e})}))}),[t.params.token]);var l=c.name,m=c.token,u=c.newPassword,p=c.buttonText,g=function(e){o(Object(X.a)(Object(X.a)({},c),{},{newPassword:e.target.value}))},d=function(e){e.preventDefault(),o(Object(X.a)(Object(X.a)({},c),{},{buttonText:"Submitting"})),Q.a.post("/auth/reset-password",{newPassword:u,resetPasswordLink:m}).then((function(e){console.log("RESET PASSWORD SUCCESS",e),U.b.success(e.data.message),o(Object(X.a)(Object(X.a)({},c),{},{buttonText:"Done"}))})).catch((function(e){console.log("RESET PASSWORD ERROR",e.response.data),U.b.error(e.response.data.error),o(Object(X.a)(Object(X.a)({},c),{},{buttonText:"Reset password"}))}))};return s.a.createElement("div",{className:"login-page"},s.a.createElement(U.a,null),s.a.createElement("h1",{className:"p-5 text-center"},"Hey ",l,", Type your new password"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"text-muted"},"New Password"),s.a.createElement("input",{onChange:g,value:u,type:"password",className:"form-control",placeholder:"Type new password",required:!0})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-primary",onClick:d},p))))},ae=function(){return s.a.createElement(y.a,null,s.a.createElement(H.a,{path:"/",exact:!0,component:B}),s.a.createElement(H.a,{path:"/join",exact:!0,component:k}),s.a.createElement(H.a,{path:"/chat",component:x}),s.a.createElement(H.a,{path:"/signin",exact:!0,component:Y}),s.a.createElement(H.a,{path:"/signup",exact:!0,component:K}),s.a.createElement(H.a,{path:"/auth/activate/:token",component:q}),s.a.createElement(H.a,{path:"/auth/forgot-password",exact:!0,component:z}),s.a.createElement(H.a,{path:"/auth/reset-password/:token",exact:!0,component:te}))};o.a.render(s.a.createElement(ae,null),document.getElementById("root"))},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="}},[[191,1,2]]]);
//# sourceMappingURL=main.3f17ef66.chunk.js.map