(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{1315:function(e,t){},1317:function(e,t,n){"use strict";n.r(t);var r=n(8),s=n(20),c=n(2),a=n.n(c),i=n(77),o=n.n(i),u=(n(144),n(27)),d=n(14),j=n(24),l=n(16),b=n(9),p=n(29),O=n(85),f=["body"];function h(e){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(r.a)().mark((function e(t){var n,s,c,a,i,o,u,d=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(n=d.length>1&&void 0!==d[1]?d[1]:{}).body,c=Object(O.a)(n,f),a={"Content-Type":"application/json"},i=Object(p.a)(Object(p.a)({method:s?"POST":"GET"},c),{},{headers:Object(p.a)(Object(p.a)({},a),c.headers)}),s&&(i.body=JSON.stringify(s)),e.prev=4,e.next=7,window.fetch(t,i);case 7:return u=e.sent,e.next=10,u.json();case 10:if(o=e.sent,!u.ok){e.next=13;break}return e.abrupt("return",{status:u.status,data:o,headers:u.headers,url:u.url});case 13:throw new Error(u.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:o));case 19:case"end":return e.stop()}}),e,null,[[4,16]])}))),m.apply(this,arguments)}h.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(e,Object(p.a)(Object(p.a)({},t),{},{method:"GET"}))},h.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(e,Object(p.a)(Object(p.a)({},n),{},{body:t}))};var x=Object(b.d)("notifications/fetchNotifications",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var s,c,a,i,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.getState,c=w(s()),a=Object(l.a)(c,1),i=a[0],o=i?i.date:"",e.next=6,h.get("/fakeApi/notifications?since=".concat(o));case 6:return u=e.sent,e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(b.f)({name:"notifications",initialState:[],reducers:{allNotificationsRead:function(e,t){e.forEach((function(e){e.read=!0}))}},extraReducers:function(e){e.addCase(x.fulfilled,(function(e,t){e.push.apply(e,Object(j.a)(t.payload)),e.forEach((function(e){e.isNew=!e.read})),e.sort((function(e,t){return t.date.localeCompare(e.date)}))}))}}),g=v.reducer,y=v.actions.allNotificationsRead,w=function(e){return e.notifications},N=n(22),S=n(3),P=function(){var e,t=Object(N.d)(),n=Object(N.e)(w).filter((function(e){return!e.read})).length;return n>0&&(e=Object(S.jsx)("span",{className:"badge",children:n})),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("nav",{children:Object(S.jsxs)("section",{children:[Object(S.jsx)("h1",{children:"Redux Essentials Example"}),Object(S.jsxs)("div",{className:"navContent",children:[Object(S.jsxs)("div",{className:"navLinks",children:[Object(S.jsx)(u.b,{to:"/",children:"Home"}),Object(S.jsx)(u.b,{to:"/users",children:"Users"}),Object(S.jsxs)(u.b,{to:"/notifications",children:["Notifications ",e]}),Object(S.jsx)(u.b,{to:"/news",children:"News"})]}),Object(S.jsx)("button",{className:"button",onClick:function(){t(x())},children:"Refresh Notifications"})]})]})}),Object(S.jsx)(d.a,{})]})},I=n(42),k=n(134),A=n(30),C=Object(k.a)({reducerPath:"api",baseQuery:Object(A.d)({baseUrl:"/fakeApi"}),tagTypes:["Post"],endpoints:function(e){return{getPosts:e.query({query:function(){return"/posts"},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return["Post"].concat(Object(j.a)(e.map((function(e){return{type:"Post",id:e.id}}))))}}),getPost:e.query({query:function(e){return"/posts/".concat(e)},providesTags:function(e,t,n){return[{type:"Post",id:n}]}}),addNewPost:e.mutation({query:function(e){return{url:"/posts",method:"POST",body:e}},invalidatesTags:["Post"]}),editPost:e.mutation({query:function(e){return{url:"/posts/".concat(e.id),method:"PATCH",body:e}},invalidatesTags:function(e,t,n){return[{type:"Post",id:n.id}]}}),addReaction:e.mutation({query:function(e){var t=e.postId,n=e.reaction;return{url:"posts/".concat(t,"/reactions"),method:"POST",body:{reaction:n}}},invalidatesTags:function(e,t,n){return[{type:"Post",id:n.postId}]}})}}}),T=C.useGetPostsQuery,E=C.useGetPostQuery,F=C.useAddNewPostMutation,q=C.useEditPostMutation,R=C.useAddReactionMutation,L=Object(b.e)(),U=L.getInitialState(),M=C.injectEndpoints({endpoints:function(e){return{getUsers:e.query({query:function(){return"/users"},transformResponse:function(e){return L.setAll(U,e)}})}}}),D=(M.useGetUsersQuery,M.endpoints.getUsers.select()),K=Object(I.a)(D,(function(e){return e.data})),G=L.getSelectors((function(e){var t;return null!==(t=K(e))&&void 0!==t?t:U})),J=G.selectAll,Q=G.selectById,B=function(e){var t=e.userId,n=Object(N.e)((function(e){return Q(e,t)}));return Object(S.jsxs)("span",{children:["by ",n?n.name:"unknown author"]})},Y=n(108),H=n(109),z=function(e){var t=e.timestamp,n="";if(t){var r=Object(Y.a)(t),s=Object(H.a)(r);n="".concat(s," ago")}return Object(S.jsxs)("span",{title:t,children:["\xa0 ",Object(S.jsx)("i",{children:n})]})},V=Object(b.e)({sortComparer:function(e,t){return t.date.localeCompare(e.date)}}),W=V.getInitialState({status:"idle",error:null}),X=Object(b.d)("posts/fetchPosts",Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/fakeApi/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),Z=Object(b.d)("posts/addNewPost",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/fakeApi/posts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=Object(b.f)({name:"posts",initialState:W,reducers:{postEdited:function(e,t){var n=t.payload,r=n.id,s=n.title,c=n.content,a=e.entities[r];a&&(a.title=s,a.content=c)},reactionAdded:function(e,t){var n=t.payload,r=n.postId,s=n.reactionName,c=e.entities[r];c&&c.reactions[s]++}},extraReducers:function(e){e.addCase(X.pending,(function(e,t){e.status="loading"})).addCase(X.fulfilled,(function(e,t){e.status="succeeded",V.upsertMany(e,t.payload)})).addCase(X.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(Z.fulfilled,V.addOne)}}),_=V.getSelectors((function(e){return e.posts})),ee=_.selectAll,te=(_.selectById,_.selectIds,Object(I.a)([ee,function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.user===t}))})),$.actions),ne=(te.postAdded,te.postEdited,te.reactionAdded,$.reducer,{thumbsUp:"\ud83d\udc4d",heart:"\u2764\ufe0f",eyes:"\ud83d\udc40"}),re=function(e){var t=e.post,n=R(),r=Object(l.a)(n,1)[0];return Object(S.jsx)(S.Fragment,{children:Object.entries(ne).map((function(e){var n=Object(l.a)(e,2),s=n[0],c=n[1];return Object(S.jsxs)("button",{className:"muted-button reaction-button",onClick:function(){return function(e,t){r({postId:e,reaction:t})}(t.id,s)},children:[c," ",t.reactions[s]]},s)}))})},se=function(e){var t=e.text,n=void 0===t?"":t,r=e.size,s=void 0===r?"5em":r,c=n?Object(S.jsx)("h4",{children:n}):null;return Object(S.jsxs)("div",{className:"spinner",children:[c,Object(S.jsx)("div",{className:"loader",style:{height:s,width:s}})]})},ce=n(89),ae=n.n(ce),ie=function(e){var t=e.post;return Object(S.jsxs)("article",{className:"post-excerpt",children:[Object(S.jsx)("h3",{children:t.title}),Object(S.jsx)(B,{userId:t.user}),Object(S.jsx)(z,{timestamp:t.date}),Object(S.jsx)("p",{className:"post-content",children:t.content.substring(0,100)}),Object(S.jsx)(u.b,{to:"posts/".concat(t.id),className:"button muted-button",children:"View "}),Object(S.jsx)(u.b,{to:"editPost/".concat(t.id),className:"button muted-button",children:"Edit "}),Object(S.jsx)(re,{post:t})]},t.id)},oe=function(e){var t,n=e.isAddPostLoading,r=T(),s=r.data,a=void 0===s?[]:s,i=r.isLoading,o=r.isFetching,u=r.isSuccess,d=r.isError,b=r.error,p=Object(c.useMemo)((function(){return Object(j.a)(a).sort((function(e,t){return t.date.localeCompare(e.date)}))}),[a]),O=F(),f=Object(l.a)(O,2),h=(f[0],f[1].isLoading);if(i)t=Object(S.jsx)(se,{text:"Loading..."});else if(u){var m=p.map((function(e){return Object(S.jsx)(ie,{post:e},e.id)})),x=ae()("posts-container",{disabled:n||o});t=Object(S.jsx)("div",{className:x,children:m})}else d&&(t=Object(S.jsx)("div",{children:b}));return Object(S.jsxs)("section",{className:"posts-list",children:[Object(S.jsx)("h2",{children:"Posts"}),Object(S.jsx)("p",{children:"isAddNewPostLoading:".concat(h)}),t]})},ue=function(e){var t=e.setIsAddPostLoading,n=Object(N.e)(J),a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],u=i[1],d=Object(c.useState)(""),j=Object(l.a)(d,2),b=j[0],p=j[1],O=Object(c.useState)(""),f=Object(l.a)(O,2),h=f[0],m=f[1],x=F(),v=Object(l.a)(x,2),g=v[0],y=v[1].isLoading;Object(c.useEffect)((function(){t(y)}),[y]);var w=[o,b,h].every(Boolean)&&!y,P=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!w){e.next=15;break}return e.prev=2,e.next=5,g({title:o,content:b,user:h}).unwrap();case 5:u(""),p(""),m(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Failed to save the post:",e.t0);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[2,10,13,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:"Add a New Post"}),Object(S.jsxs)("form",{onSubmit:P,children:[Object(S.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(S.jsx)("input",{id:"postTitle",type:"text",placeholder:"Your title",value:o,onChange:function(e){return u(e.target.value)}}),Object(S.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),Object(S.jsxs)("select",{id:"postAuthor",value:h,onChange:function(e){m(e.target.value)},children:[Object(S.jsx)("option",{value:""}),n.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(S.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(S.jsx)("textarea",{id:"Content",placeholder:"Your post",value:b,onChange:function(e){return p(e.target.value)}}),Object(S.jsx)("input",{type:"submit",value:"Save Post"})]})]})},de=function(){var e,t=Object(d.r)().postId,n=E(t),r=n.data,s=n.isFetching,c=n.isSuccess;return s?e=Object(S.jsx)(se,{text:"Loading..."}):c&&(e=Object(S.jsxs)("article",{className:"post",children:[Object(S.jsx)("h2",{children:r.title}),Object(S.jsx)(B,{userId:r.userId}),Object(S.jsx)(z,{timestamp:r.date}),Object(S.jsx)("p",{className:"post-content",children:r.content}),Object(S.jsx)(u.b,{to:"/editPost/".concat(t),className:"button muted-button",children:"Edit "})]})),Object(S.jsx)("section",{children:e})},je=function(){Object(N.d)();var e=Object(d.p)(),t=Object(d.r)().postId,n=E(t),a=n.data,i=n.isFetching,o=n.isSuccess,u=q(),j=Object(l.a)(u,1)[0],b=Object(c.useState)(""),p=Object(l.a)(b,2),O=p[0],f=p[1],h=Object(c.useState)(""),m=Object(l.a)(h,2),x=m[0],v=m[1];Object(c.useEffect)((function(){o&&(f(a.title),v(a.content))}),[o]);var g,y=function(){var n=Object(s.a)(Object(r.a)().mark((function n(s){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),!O||!x){n.next=5;break}return n.next=4,j({id:t,title:O,content:x});case 4:e("/posts/".concat(t));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i?g=Object(S.jsx)(se,{text:"Loading..."}):o&&(g=Object(S.jsxs)("form",{onSubmit:function(e){return y(e)},children:[Object(S.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(S.jsx)("input",{id:"postTitle",type:"text",placeholder:"Your title",value:O,onChange:function(e){return f(e.target.value)}}),Object(S.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(S.jsx)("textarea",{id:"Content",placeholder:"Your post",value:x,onChange:function(e){return v(e.target.value)}}),Object(S.jsx)("input",{type:"submit",value:"Save Post"})]})),Object(S.jsx)("section",{children:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h2",{children:"Edit Post"}),g]})})},le=function(){var e=Object(N.e)(J);return Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:"Users"}),Object(S.jsx)("ul",{children:e.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(u.b,{to:"/users/".concat(e.id),children:e.name})},e.id)}))})]})},be=function(){var e=Object(d.r)().userId,t=Object(N.e)((function(t){return Q(t,e)})),n=Object(c.useMemo)((function(){return Object(I.a)((function(e){return e.data}),(function(e,t){return t}),(function(e,t){var n;return null!==(n=e.filter((function(e){return e.user===t})))&&void 0!==n?n:[]}))}),[]),r=T(void 0,{selectFromResult:function(t){return{postsForUser:n(t,e)}}}).postsForUser.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(u.b,{to:"/posts/".concat(e.id),children:e.title})},e.id)}));return Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:t.name}),Object(S.jsx)("ul",{children:r})]})},pe=function(){var e=Object(N.d)(),t=Object(N.e)(w),n=Object(N.e)(J);Object(c.useLayoutEffect)((function(){e(y())}));var r=t.map((function(e){var t=Object(Y.a)(e.date),r=Object(H.a)(t),s=n.find((function(t){return t.id===e.user}))||{name:"Unknown User"},c=ae()("notification",{new:e.isNew});return Object(S.jsxs)("div",{className:c,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("b",{children:s.name})," ",e.message]}),Object(S.jsx)("div",{title:e.date,children:Object(S.jsxs)("i",{children:[r," ago"]})})]},e.id)}));return Object(S.jsxs)("section",{className:"notificationsList",children:[Object(S.jsx)("h2",{children:"Notifications"}),r]})},Oe=Object(b.d)("news/fetchNews",Object(s.a)(Object(r.a)().mark((function e(){var t,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://newsapi.org/v2/top-headlines?apiKey=549ee6eebb9f4f26b1c705374588091a&country=au");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.articles);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),fe=Object(b.f)({name:"news",initialState:{value:[]},reducers:{},extraReducers:function(e){e.addCase(Oe.fulfilled,(function(e,t){e.value=t.payload}))}}),he=function(e){return e.news.value},me=fe.reducer,xe=function(){var e=Object(N.e)(he);return console.log(e),Object(S.jsx)("section",{className:"posts-list",children:e.map((function(e,t){return Object(S.jsxs)("article",{className:"post-excerpt",children:[Object(S.jsx)("h2",{children:Object(S.jsx)("a",{href:e.url,children:e.title})}),Object(S.jsxs)("p",{children:[e.author," - published at - ",e.publishedAt]})]},t)}))})},ve=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(ue,{setIsAddPostLoading:r}),Object(S.jsx)(oe,{isAddPostLoading:n})]})};var ge,ye=function(){return Object(S.jsx)(u.a,{basename:"/Redux-RTK-RTKQ",children:Object(S.jsxs)(d.d,{children:[Object(S.jsxs)(d.b,{path:"/",element:Object(S.jsx)(P,{}),children:[Object(S.jsx)(d.b,{index:!0,element:Object(S.jsx)(ve,{})}),Object(S.jsx)(d.b,{path:"posts/:postId",element:Object(S.jsx)(de,{})}),Object(S.jsx)(d.b,{path:"editPost/:postId",element:Object(S.jsx)(je,{})}),Object(S.jsx)(d.b,{path:"users",element:Object(S.jsx)(le,{})}),Object(S.jsx)(d.b,{path:"users/:userId",element:Object(S.jsx)(be,{})}),Object(S.jsx)(d.b,{path:"notifications",element:Object(S.jsx)(pe,{})}),Object(S.jsx)(d.b,{path:"news",element:Object(S.jsx)(xe,{})})]}),Object(S.jsx)(d.b,{path:"*",element:Object(S.jsx)(se,{text:"Not found"})})]})})},we=n(5),Ne=Object(b.b)({reducer:Object(we.a)({notifications:g,news:me},C.reducerPath,C.reducer),middleware:function(e){return e().concat(C.middleware)}}),Se=n(39),Pe=n(81),Ie=n(34),ke=n(45),Ae=n.n(ke),Ce=n(107),Te=n.n(Ce),Ee=n(138),Fe=n(139),qe=["id"],Re=2e3,Le=Te()(),Ue=localStorage.getItem("randomTimestampSeed");function Me(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Le()*(t-e+1))+e}Ue?ge=new Date(Ue):(Ue=(ge=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",Ue)),Le=Te()(Ue),Object(Fe.setRandom)(Le),Ae.a.seed(ge.getTime());for(var De,Ke=function(e){return e[Me(0,e.length-1)]},Ge=Object(Ie.factory)({user:{id:Object(Ie.primaryKey)(b.o),firstName:String,lastName:String,name:String,username:String,posts:Object(Ie.manyOf)("post")},post:{id:Object(Ie.primaryKey)(b.o),title:String,date:String,content:String,reactions:Object(Ie.oneOf)("reaction"),comments:Object(Ie.manyOf)("comment"),user:Object(Ie.oneOf)("user")},comment:{id:Object(Ie.primaryKey)(String),date:String,text:String,post:Object(Ie.oneOf)("post")},reaction:{id:Object(Ie.primaryKey)(b.o),thumbsUp:Number,hooray:Number,heart:Number,rocket:Number,eyes:Number,post:Object(Ie.oneOf)("post")}}),Je=function(){var e=Ae.a.name.firstName(),t=Ae.a.name.lastName();return{firstName:e,lastName:t,name:"".concat(e," ").concat(t),username:Ae.a.internet.userName()}},Qe=0;Qe<3;Qe++)for(var Be=Ge.user.create(Je()),Ye=0;Ye<3;Ye++){var He=(De=Be,{title:Ae.a.lorem.words(),date:Ae.a.date.recent(7).toISOString(),user:De,content:Ae.a.lorem.paragraphs(),reactions:Ge.reaction.create()});Ge.post.create(He)}var ze=function(e){return Object(p.a)(Object(p.a)({},e),{},{user:e.user.id})},Ve=[Se.e.get("/fakeApi/posts",(function(e,t,n){var r=Ge.post.getAll().map(ze);return t(n.delay(Re),n.json(r))})),Se.e.post("/fakeApi/posts",(function(e,t,n){var r=e.body;if("error"===r.content)return t(n.delay(Re),n.status(500),n.json("Server error saving this post!"));r.date=(new Date).toISOString();var s=Ge.user.findFirst({where:{id:{equals:r.user}}});r.user=s,r.reactions=Ge.reaction.create();var c=Ge.post.create(r);return t(n.delay(Re),n.json(ze(c)))})),Se.e.get("/fakeApi/posts/:postId",(function(e,t,n){var r=Ge.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(Re),n.json(ze(r)))})),Se.e.patch("/fakeApi/posts/:postId",(function(e,t,n){var r=e.body,s=(r.id,Object(O.a)(r,qe)),c=Ge.post.update({where:{id:{equals:e.params.postId}},data:s});return t(n.delay(Re),n.json(ze(c)))})),Se.e.get("/fakeApi/posts/:postId/comments",(function(e,t,n){var r=Ge.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(Re),n.json({comments:r.comments}))})),Se.e.post("/fakeApi/posts/:postId/reactions",(function(e,t,n){var r=e.params.postId,s=e.body.reaction,c=Ge.post.findFirst({where:{id:{equals:r}}}),a=Ge.post.update({where:{id:{equals:r}},data:{reactions:Object(p.a)(Object(p.a)({},c.reactions),{},Object(we.a)({},s,c.reactions[s]+=1))}});return t(n.delay(Re),n.json(ze(a)))})),Se.e.get("/fakeApi/notifications",(function(e,t,n){var r=_e(void 0,Me(1,5),Ge);return t(n.delay(Re),n.json(r))})),Se.e.get("/fakeApi/users",(function(e,t,n){return t(n.delay(Re),n.json(Ge.user.getAll()))}))],We=Pe.setupWorker.apply(void 0,Ve),Xe=new Ee.Server("ws://localhost"),Ze=function(e,t){!function(e,t){e.send(JSON.stringify(t))}(e,{type:"notifications",payload:_e(t,Me(1,5),Ge)})};Xe.on("connection",(function(e){e,e.on("message",(function(t){var n=JSON.parse(t);if("notifications"===n.type){var r=n.payload;Ze(e,r)}}))}));var $e=["poked you","says hi!","is glad we're friends","sent you a gift"];function _e(e,t,n){var r,s=new Date;e?r=Object(Y.a)(e):(r=new Date(s.valueOf())).setMinutes(r.getMinutes()-15);var c=Object(j.a)(Array(t)).map((function(){var e=Ke(n.user.getAll()),t=Ke($e);return{id:Object(b.o)(),date:Ae.a.date.between(r,s).toISOString(),message:t,user:e.id}}));return c}function et(){return(et=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.start({onUnhandledRequest:"bypass"});case 2:Ne.dispatch(M.endpoints.getUsers.initiate()),Ne.dispatch(Oe()),o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(N.a,{store:Ne,children:Object(S.jsx)(ye,{})})}),document.getElementById("root"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){et.apply(this,arguments)}()},144:function(e,t,n){}},[[1317,1,2]]]);
//# sourceMappingURL=main.4468c092.chunk.js.map