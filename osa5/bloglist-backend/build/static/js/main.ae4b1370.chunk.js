(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),c=n.n(u),l=n(2),o=n.n(l),i=n(4),s=n(3),p=n(0),m=function(e){var t=e.blog;return p.createElement("div",null,t.title," ",t.author)},f=n(5),b=n.n(f),v=function(){return b.a.get("/api/blogs").then((function(e){return e.data}))},g={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),p=l[0],f=l[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),h=d[0],E=d[1],j=Object(a.useState)(null),O=Object(s.a)(j,2),w=O[0],x=O[1];Object(a.useEffect)((function(){v().then((function(e){return u(e)}))}),[]);var y=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.login({username:p,password:h});case 4:n=e.sent,x(n),f(""),E(""),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return w?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"blogs"),w.name," logged in",n.map((function(e){return r.a.createElement(m,{key:e.id,blog:e})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"log in to application"),r.a.createElement("form",{onSubmit:y},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:p,name:"Username",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:h,name:"Password",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ae4b1370.chunk.js.map