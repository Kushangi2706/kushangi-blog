(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(10),i=n.n(a),r=(n(19),n(11)),o=n(12),c=n(14),l=n(13),u=(n(20),n(0)),h=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Hello, Welcome to my blog!"}),Object(u.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"}),Object(u.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})},d=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"About Me"}),Object(u.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"}),Object(u.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})},m=n(5),p=function(e){var t=e.articals;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(m.b,{to:"/artical-page/".concat(e.name),children:Object(u.jsx)("h3",{children:e.title})},t)}))})},b=[{name:"learn-react",title:"the fastest way to learn",content:["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.","The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters","as opposed to using 'Content here, content here","making it look like readable English. ","Many desktop publishing packages and web page editors now use Lorem Ipsum as ","their default model text","and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ","Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]},{name:"learn-node",title:"Learn Node",content:["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.","The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters","as opposed to using 'Content here, content here","making it look like readable English. ","Many desktop publishing packages and web page editors now use Lorem Ipsum as ","their default model text","and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ","Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]},{name:"my-thoughts-on-resumes",title:"My Thoughts On Resumes",content:["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.","The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters","as opposed to using 'Content here, content here","making it look like readable English. ","Many desktop publishing packages and web page editors now use Lorem Ipsum as ","their default model text","and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ","Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."]}],j=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"ArticalList Here"}),Object(u.jsx)(p,{articals:b})]})},f=n(6),g=n.n(f),x=n(7),O=n(4),v=function(e){var t=e.comments;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(u.jsxs)("div",{className:"comment",children:[Object(u.jsx)("h4",{children:e.username}),Object(u.jsx)("p",{children:e.text})]},t)}))]})},y=function(e){var t=e.articalName,n=e.upvotes,s=e.setArticalInfo,a=function(){var e=Object(x.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articals/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"upvote-section",children:[Object(u.jsx)("button",{onClick:function(){return a()},children:"Add Upvote"}),Object(u.jsxs)("p",{children:["This page has been upvoted ",n," times."]})]})},k=function(e){var t=e.articalName,n=e.setArticalInfo,a=Object(s.useState)(""),i=Object(O.a)(a,2),r=i[0],o=i[1],c=Object(s.useState)(""),l=Object(O.a)(c,2),h=l[0],d=l[1],m=function(){var e=Object(x.a)(g.a.mark((function e(){var s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articals/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:r,text:h}),headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,n(a),o(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"add-comment-form",children:[Object(u.jsx)("h3",{children:"Add a Comment"}),Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("label",{children:["Comment:",Object(u.jsx)("textarea",{rows:"4",cols:"50",value:h,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsx)("button",{onClick:function(){return m()},children:"Add Comment"})]})},w=n(2),I=function(){var e=Object(w.g)().name,t=b.find((function(t){return t.name===e})),n=Object(s.useState)({upvotes:0,comments:[]}),a=Object(O.a)(n,2),i=a[0],r=a[1];if(Object(s.useEffect)((function(){var t=function(){var t=Object(x.a)(g.a.mark((function t(){var n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/articals/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,r(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),!t)return Object(u.jsx)("h1",{children:"Artical Doesn't exist."});var o=b.filter((function(t){return t.name!==e}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{children:[t.title," Page Here"]}),Object(u.jsx)(y,{articalName:e,upvotes:i.upvotes,setArticalInfo:r}),Object(u.jsx)("div",{children:t.content.map((function(e,t){return Object(u.jsx)("p",{children:e},t)}))}),Object(u.jsx)(v,{comments:i.comments}),Object(u.jsx)(k,{articalName:e,setArticalInfo:r}),Object(u.jsx)("h3",{children:"Other Articals:"}),Object(u.jsx)(p,{articals:o})]})},L=function(){return Object(u.jsx)("h1",{children:"404 Not Found."})},A=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(m.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(m.b,{to:"/about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(m.b,{to:"/artical-list",children:"Articals"})})]})})},C=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)(m.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(A,{}),Object(u.jsx)("div",{id:"page-body",children:Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{path:"/",element:Object(u.jsx)(h,{})}),Object(u.jsx)(w.a,{path:"/about",element:Object(u.jsx)(d,{})}),Object(u.jsx)(w.a,{path:"/artical-list",element:Object(u.jsx)(j,{})}),Object(u.jsx)(w.a,{path:"/artical-page/:name",element:Object(u.jsx)(I,{})}),Object(u.jsx)(w.a,{path:"*",element:Object(u.jsx)(L,{})})]})})]})})}}]),n}(s.Component),N=C;n(23);i.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c42d7ef7.chunk.js.map