(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),r=a(13),o=a(2),c=a(0),u=a.n(c),s=a(14),i=function(e){var t=e.name;return u.a.createElement("h1",null,"Hello ",t,"!")},f=(a(22),a(15)),m=a.n(f),p=function(e){var t=u.a.useState(null),a=Object(o.a)(t,2),n=a[0],c=a[1],s=u.a.useState(0),f=Object(o.a)(s,2),p=f[0],h=f[1],b=u.a.useState(0),d=Object(o.a)(b,2),g=d[0],E=d[1],v=u.a.useState(0),j=Object(o.a)(v,2),O=(j[0],j[1]),S=u.a.useState(0),y=Object(o.a)(S,2),w=y[0],k=y[1],M=u.a.useState(!1),A=Object(o.a)(M,2),C=A[0],I=A[1],x=u.a.useState(Math.random()),B=Object(o.a)(x,2),J=B[0],U=B[1],F=new FileReader;u.a.useEffect((function(){console.log(n),n&&(F.readAsArrayBuffer(n),F.onload=function(){F.result;O(F.result),k(new Uint8Array(F.result))})}),[n]),u.a.useEffect((function(){var e=setInterval(Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(p+1),t=-1,n&&(t=Math.min(g+900,w.length)),console.log(t),g<t&&!C?(m.a.post("http://localhost:8000/pauseable",{name:n.name,start:g,file:w.subarray(g,t)}).then((function(e){console.log(e),E(t)})).catch((function(e){return console.log(e)})),console.log({name:n.name,start:g,file:w.subarray(g,t)})):g==t&&(alert("file upload complete"),c(null),E(0),O(null),k(null),U(Math.random()));case 5:case"end":return e.stop()}}),e)}))),1e4);return function(){return clearInterval(e)}}),[g,p,n]);return u.a.useEffect((function(){console.log(C)}),[C]),u.a.createElement("div",null,u.a.createElement(i,{name:"this.state.name"}),u.a.createElement("p",null,"Start editing to see some magic happen :)"),u.a.createElement("input",{type:"file",onChange:function(e){c(e.target.files[0])},key:J}),n?u.a.createElement("div",null," ",u.a.createElement("button",{name:"pause",onClick:function(){I(!C)}}," Pause ")," ",u.a.createElement("p",null," ",Math.floor(g/w.length*1e4)/100," % Upload Complete ")," "):"")};Object(s.render)(u.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.97f909cb.chunk.js.map