(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),o=n(2),c=n.n(o),i=n(4),s=n(3),m=n(0),p=function(e){var t=e.blog;return m.createElement("div",null,t.title," ",t.author)},f=n(5),g=n.n(f),b=function(){return g.a.get("/api/blogs").then((function(e){return e.data}))},v={login:function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),o=Object(s.a)(l,2),m=o[0],f=o[1],g=Object(a.useState)(""),d=Object(s.a)(g,2),E=d[0],w=d[1],h=Object(a.useState)(null),O=Object(s.a)(h,2),j=O[0],S=O[1];Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);S(t)}}),[]);var y=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:m,password:E});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),S(n),f(""),w(""),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return j?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"blogs"),j.name," logged in",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedUser"),S(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("br",null),n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"log in to application"),r.a.createElement("form",{onSubmit:y},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:m,name:"Username",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:E,name:"Password",onChange:function(e){var t=e.target;return w(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))};l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8bdb7c8c.chunk.js.map