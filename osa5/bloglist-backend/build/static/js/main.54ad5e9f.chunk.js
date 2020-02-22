(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=n(3),o=n.n(c),i=n(5),s=n(2),m=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(s.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"},m=function(){c(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:m},e.showButtonLabel)),r.a.createElement("div",{style:i,className:"togglableContent"},e.children,r.a.createElement("button",{onClick:m},e.hideButtonLabel)))}));m.displayName="Togglable";var b=m,g=n(0),f=function(e){var t=e.blog;return g.createElement("div",{className:"blog"},t.title," ",t.author,g.createElement(b,{showButtonLabel:"view",hideButtonLabel:"hide"},g.createElement("div",null,t.url,g.createElement("br",null),"likes ",t.likes,g.createElement("br",null),t.user?t.user.name:"")))},p=function(e){var t=e.createBlog,n=Object(a.useState)(""),l=Object(s.a)(n,2),u=l[0],c=l[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],b=i[1],g=Object(a.useState)(""),f=Object(s.a)(g,2),p=f[0],v=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"create new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:u,author:m,url:p}),c(""),b(""),v("")}},r.a.createElement("div",null,"title:",r.a.createElement("input",{type:"text",value:u,name:"Title",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement("div",null,"author",r.a.createElement("input",{type:"text",value:m,name:"Author",onChange:function(e){var t=e.target;return b(t.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"text",value:p,name:"URL",onChange:function(e){var t=e.target;return v(t.value)}})),r.a.createElement("button",{type:"submit"},"create")))},v=n(4),d=n.n(v),E=null,h=function(){return d.a.get("/api/blogs").then((function(e){return e.data}))},w=function(e){var t={headers:{Authorization:E}};return d.a.post("/api/blogs",e,t).then((function(e){return e.data}))},O=function(e){E="bearer ".concat(e)},j={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),c=Object(s.a)(u,2),m=c[0],g=c[1],v=Object(a.useState)(""),d=Object(s.a)(v,2),E=d[0],y=d[1],S=Object(a.useState)(null),k=Object(s.a)(S,2),x=k[0],B=k[1],C=r.a.createRef();Object(a.useEffect)((function(){h().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);B(t)}}),[]);var L=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.login({username:m,password:E});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),O(n.token),B(n),g(""),y(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),document.write("<br>wrong credentials"),console.log("login failed");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return x?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"blogs"),x.name," logged in",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedUser"),B(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b,{showButtonLabel:"new blog",hideButtonLabel:"cancel",ref:C},r.a.createElement(p,{createBlog:function(e){C.current.toggleVisibility(),w(e).then((function(e){l(n.concat(e))}))}})),r.a.createElement("br",null),r.a.createElement("br",null),n.map((function(e){return r.a.createElement(f,{key:e.id,blog:e})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"log in to application"),r.a.createElement("form",{onSubmit:L},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:m,name:"Username",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:E,name:"Password",onChange:function(e){var t=e.target;return y(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.54ad5e9f.chunk.js.map