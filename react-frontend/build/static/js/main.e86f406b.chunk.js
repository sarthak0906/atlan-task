(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},22:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n.n(a),c=n(14),u=n(2),r=n(0),o=n.n(r),s=n(15),i=function(e){var t=e.name;return o.a.createElement("h1",null,"Hello ",t,"!")},f=(n(22),n(4)),m=n.n(f),p=function(e){var t=o.a.useState(null),n=Object(u.a)(t,2),a=n[0],r=n[1],s=o.a.useState(0),f=Object(u.a)(s,2),p=f[0],b=f[1],h=o.a.useState(0),d=Object(u.a)(h,2),g=d[0],E=d[1],v=o.a.useState(0),j=Object(u.a)(v,2),O=(j[0],j[1]),S=o.a.useState(0),y=Object(u.a)(S,2),k=y[0],w=y[1],A=o.a.useState(!1),C=Object(u.a)(A,2),M=C[0],I=C[1],x=o.a.useState(Math.random()),B=Object(u.a)(x,2),J=B[0],R=B[1],F=new FileReader;o.a.useEffect((function(){console.log(a),a&&(F.readAsArrayBuffer(a),F.onload=function(){F.result;O(F.result),w(new Uint8Array(F.result))})}),[a]),o.a.useEffect((function(){var e=setInterval(Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(p+1),t=-1,a&&(t=Math.min(g+900,k.length)),console.log(t),g<t&&!M?(m.a.post("/pauseable",{name:a.name,start:g,file:k.subarray(g,t)}).then((function(e){console.log(e),E(t)})).catch((function(e){return console.log(e)})),console.log({name:a.name,start:g,file:k.subarray(g,t)})):g==t&&(alert("file upload complete"),r(null),E(0),O(null),w(null),R(Math.random()));case 5:case"end":return e.stop()}}),e)}))),1e3);return function(){return clearInterval(e)}}),[g,p,a]);return o.a.useEffect((function(){console.log(M)}),[M]),o.a.createElement("div",null,o.a.createElement(i,{name:"Atlan"}),o.a.createElement("p",null,"Select a file to see the magic ;)"),o.a.createElement("input",{type:"file",onChange:function(e){r(e.target.files[0])},key:J}),a?o.a.createElement("div",null,o.a.createElement("button",{name:"pause",onClick:function(){I(!M)}}," ",M?"Resume":"Pause"," "),o.a.createElement("button",{onClick:function(){m.a.get("/cancel/"+a.name).then((function(){alert("file upload canceled"),r(null),E(0),O(null),w(null),R(Math.random())})).catch((function(e){console.log(e)}))}}," Cancel ")):"")};Object(s.render)(o.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e86f406b.chunk.js.map