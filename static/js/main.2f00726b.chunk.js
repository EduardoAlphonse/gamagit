(this.webpackJsonpgamagit=this.webpackJsonpgamagit||[]).push([[0],{35:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),i=n.n(c),s=n(11),l=n(2),o=n(9),u=n.n(o),d=n(13),j=n(8),p=(n(35),n(0));function h(e){var t=e.image,n=e.username;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{}),Object(p.jsx)("img",{src:t,alt:n})]}),Object(p.jsx)("div",{className:"user-info",children:Object(p.jsx)("p",{className:"username",children:n})})]})}var b=n(28),f=n.n(b).a.create({baseURL:"https://api.github.com",headers:{Accept:"application/vnd.github.v3+json"}});n(55);function m(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(j.a)(c,2),l=i[0],o=i[1];function b(){return(b=Object(d.a)(u.a.mark((function e(t){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,f.get("/search/users?q=".concat(n));case 5:r=e.sent,a=r.data,c=a.items.map((function(e){return{id:e.id,image:e.avatar_url,username:e.login}})),o(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{id:"page-container",children:Object(p.jsxs)("div",{id:"page-content",children:[Object(p.jsx)("header",{className:"search-header",children:Object(p.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(p.jsx)("input",{type:"text",placeholder:"github_username",onChange:function(e){a(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:Object(p.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n&&"filled",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2541 3.64642C6.60481 3.64642 3.64645 6.60479 3.64645 10.2541C3.64645 13.9034 6.60481 16.8618 10.2541 16.8618C13.9035 16.8618 16.8618 13.9034 16.8618 10.2541C16.8618 6.60479 13.9035 3.64642 10.2541 3.64642ZM1.64645 10.2541C1.64645 5.50022 5.50024 1.64642 10.2541 1.64642C15.008 1.64642 18.8618 5.50022 18.8618 10.2541C18.8618 12.2708 18.1683 14.1254 17.0068 15.5927L23.3536 21.9394L21.9393 23.3536L15.5926 17.0069C14.1254 18.1683 12.2707 18.8618 10.2541 18.8618C5.50024 18.8618 1.64645 15.008 1.64645 10.2541Z",fill:"#B2B2B2"})})})]})}),l.length?Object(p.jsx)("main",{className:"user-cards-container",children:l.map((function(e){return Object(p.jsx)(s.b,{to:"/user/".concat(e.username),children:Object(p.jsx)(h,{image:e.image,username:e.username})},e.id)}))}):Object(p.jsx)("main",{className:"empty-content",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5101 1.79291L2.51008 11.7929V13.2071L12.5101 23.2071L13.9243 21.7929L5.6314 13.5H22.4899V11.5H5.6314L13.9243 3.20712L12.5101 1.79291Z",fill:"#333333"})}),Object(p.jsx)("h1",{children:"Comece procurando um usu\xe1rio"})]})})]})})}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.95283 4.5C3.95283 2.84315 5.29598 1.5 6.95283 1.5H18.0472C19.704 1.5 21.0472 2.84314 21.0472 4.5V20.5C21.0472 22.1569 19.704 23.5 18.0472 23.5H6.95283C5.29598 23.5 3.95283 22.1569 3.95283 20.5V4.5ZM6.95283 3.5C6.40055 3.5 5.95283 3.94772 5.95283 4.5V20.5C5.95283 21.0523 6.40055 21.5 6.95283 21.5H18.0472C18.5995 21.5 19.0472 21.0523 19.0472 20.5V4.5C19.0472 3.94772 18.5995 3.5 18.0472 3.5H6.95283ZM13.045 7.33611L17.5018 11.7929V13.2071L13.045 17.6639L11.6308 16.2497L14.3805 13.5H8.20527V11.5H14.3805L11.6308 8.75032L13.045 7.33611Z",fill:"#333333"});function x(e,t){var n=e.title,a=e.titleId,c=g(e,["title","titleId"]);return r.createElement("svg",O({width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,v)}var w=r.forwardRef(x);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.52831 4.5C3.52831 2.84315 4.87146 1.5 6.52831 1.5H13.8491C15.5059 1.5 16.8491 2.84315 16.8491 4.5V6.49998H18.4717C20.1285 6.49998 21.4717 7.84313 21.4717 9.49998V20.5C21.4717 22.1568 20.1285 23.5 18.4717 23.5H11.1509C9.49409 23.5 8.15095 22.1568 8.15095 20.5V18.5H6.52831C4.87146 18.5 3.52831 17.1568 3.52831 15.5V4.5ZM10.1509 18.5V20.5C10.1509 21.0522 10.5987 21.5 11.1509 21.5H18.4717C19.024 21.5 19.4717 21.0522 19.4717 20.5V9.49998C19.4717 8.9477 19.024 8.49998 18.4717 8.49998H16.8491V15.5C16.8491 17.1568 15.5059 18.5 13.8491 18.5H10.1509ZM6.52831 3.5C5.97603 3.5 5.52831 3.94772 5.52831 4.5V15.5C5.52831 16.0523 5.97603 16.5 6.52831 16.5H13.8491C14.4013 16.5 14.8491 16.0523 14.8491 15.5V4.5C14.8491 3.94772 14.4013 3.5 13.8491 3.5H6.52831Z",fill:"#333333"});function H(e,t){var n=e.title,a=e.titleId,c=C(e,["title","titleId"]);return r.createElement("svg",y({width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,N)}var V=r.forwardRef(H);n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.63957 7.73489C1.63957 6.07804 2.98272 4.73489 4.63957 4.73489H20.3604C22.0173 4.73489 23.3604 6.07804 23.3604 7.73489V17.2651C23.3604 18.9219 22.0173 20.2651 20.3604 20.2651H4.63958C2.98272 20.2651 1.63957 18.9219 1.63957 17.2651V7.73489ZM4.63957 6.73489C4.08729 6.73489 3.63957 7.18261 3.63957 7.73489V8.48394H21.3604V7.73489C21.3604 7.18261 20.9127 6.73489 20.3604 6.73489H4.63957ZM21.3604 10.4839H10.0399V18.2651H20.3604C20.9127 18.2651 21.3604 17.8174 21.3604 17.2651V10.4839ZM8.03986 18.2651V10.4839H3.63957V17.2651C3.63957 17.8174 4.08729 18.2651 4.63958 18.2651H8.03986Z",fill:"#333333"});function E(e,t){var n=e.title,a=e.titleId,c=L(e,["title","titleId"]);return r.createElement("svg",_({width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,R)}var M=r.forwardRef(E),k=(n.p,n(61),{visit:Object(p.jsx)(w,{}),copy:Object(p.jsx)(V,{}),website:Object(p.jsx)(M,{})});function Z(e){var t=e.title,n=e.href,r=e.icon,a=e.onClick;return Object(p.jsx)(p.Fragment,{children:n?Object(p.jsxs)("a",{"data-valor":n,href:n,className:"repository-button ".concat("website"===r&&"homepage"),target:"_blank",rel:"noreferrer",children:[t,k[r]]}):Object(p.jsxs)("button",{className:"repository-button",onClick:a,children:[t,k[r]]})})}n(62);function S(e){var t=e.children,n=e.name,r=e.updated_at,a=e.language,c=e.html_url,i=e.clone_url,s=e.homepage,l=r.slice(0,10).split("-"),o=Object(j.a)(l,3),u=o[0],d=o[1],h=o[2];return Object(p.jsxs)("div",{className:"repository-card-container",children:[Object(p.jsxs)("div",{className:"body",children:[Object(p.jsxs)("div",{className:"title-and-description",children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{className:"description",children:t})]}),Object(p.jsxs)("div",{className:"last-update-and-language",children:[Object(p.jsxs)("p",{className:"update",children:["\xdaltima atualiza\xe7\xe3o: ",Object(p.jsx)("span",{className:"data",children:"".concat(h,"/").concat(d,"/").concat(u)})]}),a&&Object(p.jsx)("span",{className:"tag",children:a})]})]}),Object(p.jsxs)("footer",{children:[Object(p.jsx)(Z,{title:"Repo",icon:"visit",href:c}),Object(p.jsx)(Z,{title:"Clonar",icon:"copy",onClick:function(){var e=document.querySelector(".input-to-copy");e.value=i,e.select(),document.execCommand("copy")}}),s&&Object(p.jsx)(Z,{title:"Website",icon:"website",href:s})]})]})}n(63);function B(){var e=Object(r.useState)({}),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(j.a)(c,2),o=i[0],b=i[1],m=Object(l.f)().username;return Object(r.useEffect)((function(){!function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users/".concat(m));case 2:t=e.sent,n=t.data,r={image:n.avatar_url,username:m,name:n.name,public_repos:n.public_repos,public_gists:n.public_gists,following:n.following,followers:n.followers},a(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m]),Object(r.useEffect)((function(){!function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users/".concat(m,"/repos?per_page=100&sort=updated"));case 2:t=e.sent,n=t.data,r=n.map((function(e){var t=!!e.homepage;console.log("hasHomepage",t);var n=t&&!e.homepage.includes("http")?"https://".concat(e.homepage):e.homepage;return console.log("homepage",n),{id:e.id,name:e.name,description:e.description,updated_at:e.updated_at,language:e.language,homepage:n,clone_url:e.clone_url,html_url:e.html_url}})),b(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m]),Object(p.jsx)("div",{id:"page-container",children:Object(p.jsxs)("div",{id:"page-content",children:[Object(p.jsxs)("header",{className:"user-header",children:[Object(p.jsxs)("div",{className:"user-info-card",children:[Object(p.jsx)(h,{image:n.image,username:n.username}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("p",{children:["reposit\xf3rios: ",Object(p.jsx)("span",{className:"data",children:n.public_repos})]}),Object(p.jsxs)("p",{children:["gists: ",Object(p.jsx)("span",{className:"data",children:n.public_gists})]}),Object(p.jsxs)("p",{children:["seguidores: ",Object(p.jsx)("span",{className:"data",children:n.followers})]}),Object(p.jsxs)("p",{children:["seguindo: ",Object(p.jsx)("span",{className:"data",children:n.following})]}),Object(p.jsxs)("p",{children:["websites:\xa0",Object(p.jsx)("span",{className:"data",children:o.filter((function(e){return e.homepage})).length})]})]})]}),Object(p.jsx)("div",{className:"options",children:Object(p.jsx)(s.b,{className:"back-button",to:"/",children:Object(p.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5101 1.79291L2.51008 11.7929V13.2071L12.5101 23.2071L13.9243 21.7929L5.6314 13.5H22.4899V11.5H5.6314L13.9243 3.20712L12.5101 1.79291Z",fill:"#333333"})})})})]}),Object(p.jsx)("section",{className:"repositories",children:o.map((function(e){return Object(p.jsx)(S,{name:e.name,updated_at:e.updated_at,language:e.language,html_url:e.html_url,clone_url:e.clone_url,homepage:e.homepage,children:e.description},e.id)}))}),Object(p.jsx)("input",{className:"input-to-copy"})]})})}n(64);var I=function(){return Object(p.jsx)(s.a,{basename:"/gamagit",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(p.jsx)(l.a,{path:"/user/:username",component:B})]})})};n(65);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.2f00726b.chunk.js.map