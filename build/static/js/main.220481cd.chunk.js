(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),u=n(17),r=n.n(u),i=(n(22),n(4)),o=(n(8),n(0)),s=function(e){return Object(o.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(o.jsxs)("div",{children:["Name: ",Object(o.jsx)("input",{value:e.personValue,onChange:e.onPersonChange,required:"required"})]}),Object(o.jsxs)("div",{children:["Number: ",Object(o.jsx)("input",{value:e.numberValue,onChange:e.onNumberChange,required:"required"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{name:"submit",type:"submit",children:"add"})})]})},l=function(e){return Object(o.jsx)("p",{className:"inline",children:"".concat(e.name," - ").concat(e.number)})},j=function(e){var t=e.filtered;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" Filter "}),"Search: ",Object(o.jsx)("input",{className:"inline",value:e.filterValue,onChange:e.onFilterChange}),t?t.map((function(e){return Object(o.jsx)("p",{children:"".concat(e.name," - ").concat(e.number," ")},e.id)})):Object(o.jsx)("p",{children:"Loading..."})]})},d=n(3),b=n.n(d),m="/api/persons",f=function(e){return b.a.get(m+"?name_like=".concat(e)).then((function(e){return e.data}))},h=function(e){return b.a.post(m,e).then((function(e){return e.data}))},O=function(e){return b.a.delete(m+"/".concat(e)).then((function(e){return e.data}))},p=function(e){var t=e.tag,n=e.message;return null===t?Object(o.jsx)("div",{}):"Success"===t?Object(o.jsx)("div",{className:"notification success",children:"".concat(n)}):"Error"===t?Object(o.jsx)("div",{className:"notification",children:Object(o.jsxs)("p",{className:"error",children:[" ",n.error," "]})}):void 0},g=function(e){return Object(o.jsx)("button",{className:"delete",onClick:function(){window.confirm("Are sure you want to delete ".concat(e.name,"?"))&&O(e.id).then((function(){var t={contactName:e.name,tag:"Success",message:"succesfully deleted!"};e.updateNotif(t),setTimeout((function(){e.updateNotif(null)}),5e3)})).catch((function(){var t={contactName:e.name,tag:"Error",message:"was already deleted to the server!"};e.updateNotif(t),setTimeout((function(){e.updateNotif(null)}),5e3)}))},children:"Delete"})};var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(null),r=Object(i.a)(u,2),d=r[0],m=r[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),v=x[0],N=x[1],S=Object(c.useState)(""),C=Object(i.a)(S,2),k=C[0],w=C[1],y=Object(c.useState)(null),E=Object(i.a)(y,2),V=E[0],q=E[1],T=Object(c.useState)(null),F=Object(i.a)(T,2),P=F[0],D=F[1];return Object(c.useEffect)((function(){b.a.get("/api/persons").then((function(e){var t=e.data;a(t)}))}),[n]),Object(c.useEffect)((function(){""===V&&q(null),f(V).then((function(e){m(e)}))}),[V]),Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{filterValue:V,onFilterChange:function(e){q(e.target.value)},filtered:d}),P?Object(o.jsx)(p,{tag:P.tag,message:P.message,contactName:P.contactName}):null,Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(s,{onSubmit:function(e){e.preventDefault(),h({name:v,number:k}).then((function(e){return a(n.concat(e))})).then((function(){D({contactName:v,tag:"Success",message:"succesfully added!"}),setTimeout((function(){D(null)}),5e3)})).catch((function(e){var t={tag:"Error",message:e.response.data};D(t),setTimeout((function(){D(null)}),1e4)})),N(""),w("")},personValue:v,onPersonChange:function(e){return N(e.target.value)},numberValue:k,onNumberChange:function(e){return w(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(o.jsxs)("div",{classname:"margin-bottom-10px",children:[Object(o.jsx)(l,{name:e.name,number:e.number}),Object(o.jsx)(g,{id:e.id,name:e.name,updateNotif:function(e){return D(e)}})]},e.id)}))]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.220481cd.chunk.js.map