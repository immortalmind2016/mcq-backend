(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(21),o=n.n(s),i=(n(47),n(48),n(49),n(96)),u=n(9),d=n(15),j=n(7),l=n(97),O=n(98),b=n(14),h=n.n(b),x=n(18);!function(e){e[e.CREATE_STUDENT=0]="CREATE_STUDENT",e[e.LOADING=1]="LOADING",e[e.Q_LOADING=2]="Q_LOADING",e[e.GET_QUESTION=3]="GET_QUESTION",e[e.ANSWER_QUESTION=4]="ANSWER_QUESTION",e[e.NEXT_QUESTION=5]="NEXT_QUESTION",e[e.SUBMIT_EXAM=6]="SUBMIT_EXAM"}(a||(a={}));var v=n(19),f=n.n(v),p="",m=p,E=n(25),N=n.n(E),I=n(2);var w=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(u.b)(),o=Object(j.e)(),i=Object(u.c)((function(e){return e.student}));return console.log("studentStatestudentStatestudentState ",i),Object(c.useEffect)((function(){i.name&&o.push("/exam")}),[i.name]),Object(I.jsxs)(I.Fragment,{children:[i.loading&&Object(I.jsx)("div",{className:"overlay",children:Object(I.jsx)(N.a,{type:"Oval",color:"#00BFFF",height:100,width:100})}),Object(I.jsxs)(l.a,{onSubmit:function(e){var t;e.preventDefault(),s({type:a.LOADING}),s((t=n,function(){var e=Object(x.a)(h.a.mark((function e(n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(m,"/api/student"),{name:t});case 2:c=e.sent,n((r=c.data,{type:a.CREATE_STUDENT,payload:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(I.jsxs)(l.a.Group,{controlId:"formBasicEmail",children:[Object(I.jsx)(l.a.Label,{children:"Your name"}),Object(I.jsx)(l.a.Control,{value:n,onChange:function(e){var t=e.target.value;r(t)},placeholder:"Enter Name"}),Object(I.jsx)(l.a.Text,{className:"text-muted",children:"We'll never share your data with anyone else."})]}),Object(I.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit and start"})]})]})},S=function(){var e=Object(u.c)((function(e){return e.student})),t=Object(u.c)((function(e){return e.exam}));return Object(I.jsxs)("div",{className:"navbar",children:[Object(I.jsxs)("h5",{children:["Welcome ",Object(I.jsx)("strong",{children:null===e||void 0===e?void 0:e.name})]}),t.questionIndex<=t.maxQuestionsNo&&Object(I.jsxs)("h6",{children:["Question ",t.questionIndex," of ",t.maxQuestionsNo]})]})},T=p,y=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(n){var c,r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(T,"/api/question?alreadyUsedIds=").concat(JSON.stringify(e)));case 2:c=t.sent,r=c.data.answers.map((function(e,t){return{index:t,value:e}})),s={description:c.data.description,answers:r,correctAnswerIndex:c.data.correctAnswerIndex,id:c.data.id},n((o=s,{type:a.GET_QUESTION,payload:o}));case 6:case"end":return t.stop()}var o}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e,t,n){return function(c){var r;c((r={questionId:e,correctAnswerIndex:t,answerIndex:n},{type:a.ANSWER_QUESTION,payload:r}))}},_=n(8),U=function(e){var t=e.description,n=e.answers,a=e.change;return Object(I.jsxs)("div",{className:"question",children:[Object(I.jsx)("h3",{children:t}),Object(I.jsx)("div",{className:"q-options mb-3",children:n&&n.map((function(e,t){return Object(I.jsx)(l.a.Check,Object(_.a)(Object(_.a)({},0==t&&{defaultChecked:!0}),{},{onChange:a,name:"answerOption",type:"radio",id:String(e.index),label:"".concat(e.value)}),"".concat(e.value,"-").concat(t))}))})]})},A=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),o=Object(d.a)(s,2),i=o[0],l=o[1],b=Object(c.useState)(!0),v=Object(d.a)(b,2),p=v[0],m=v[1],E=Object(c.useState)(0),w=Object(d.a)(E,2),S=w[0],_=w[1],A=Object(u.b)(),Q=Object(u.c)((function(e){return e.exam})),D=Object(j.e)(),C=Object(u.c)((function(e){return e.student}));Object(c.useEffect)((function(){if(i){var e=Q.currentQuestion;e&&(e.answers=function(e){for(var t=new Set;t.size!==e.length;){var n=Math.floor(Math.random()*e.length);t.add(e[n])}return Array.from(t)}(e.answers),r(e),_(e.answers[0].index),m(!1),l(!1))}var t,n;Q.questionIndex>Q.maxQuestionsNo&&A((t=C.id,n=Q.answers,function(){var e=Object(x.a)(h.a.mark((function e(c){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(T,"/api/exam"),{studentId:t,answers:n});case 2:r=e.sent,c({type:a.SUBMIT_EXAM,payload:r.data.score});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[Q.currentQuestion]),Object(c.useEffect)((function(){C.name?A(y(Q.alreadyUsedIds)):D.push("/")}),[]);return Object(I.jsxs)("div",{children:[p&&Object(I.jsxs)("div",{className:"overlay",children:["  ",Object(I.jsx)(N.a,{type:"Oval",color:"#00BFFF",height:100,width:100})]}),Q.questionIndex>Q.maxQuestionsNo&&Object(I.jsx)("div",{className:"overlay",children:-1==Q.score?"Caclulating your score...":Object(I.jsxs)("div",{children:["Your score is : ",Object(I.jsx)("h3",{children:Q.score})]})}),n&&Object(I.jsxs)(I.Fragment,{children:["    ",Object(I.jsx)(U,{description:n.description,change:function(e){_(Number(e.currentTarget.id))},answers:n.answers,correctAnswerIndex:0}),Object(I.jsx)(O.a,{onClick:function(){A({type:a.NEXT_QUESTION}),m(!0),l(!0),A(y(Q.alreadyUsedIds));var e=null===n||void 0===n?void 0:n.id,t=null===n||void 0===n?void 0:n.correctAnswerIndex;A(g(e,t,S))},variant:"success",children:"Next"})," "]})]})};var Q=function(){var e=Object(u.c)((function(e){return e.student}));return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(i.a,{children:[Object.keys(e).length>1&&Object(I.jsx)(S,{}),Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)("div",{className:"student-form",children:[Object(I.jsx)(j.a,{path:"/",component:w,exact:!0}),Object(I.jsx)(j.a,{path:"/exam",component:A,exact:!0})]})})]})})},D=n(20),C=n(42),M=n(32),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.c,q=Object(D.d)(Object(D.b)({student:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case a.CREATE_STUDENT:return Object(_.a)(Object(_.a)({},e),{},{name:n.name,id:n.id,loading:!1});case a.LOADING:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});default:return e}},exam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,alreadyUsedIds:[],questionIndex:1,maxQuestionsNo:5,currentQuestion:null,score:-1,answers:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case a.GET_QUESTION:return Object(_.a)(Object(_.a)({},e),{},{alreadyUsedIds:[].concat(Object(M.a)(e.alreadyUsedIds),[n.id]),loading:!1,currentQuestion:n});case a.ANSWER_QUESTION:return Object(_.a)(Object(_.a)({},e),{},{answers:[].concat(Object(M.a)(e.answers),[n])});case a.NEXT_QUESTION:return Object(_.a)(Object(_.a)({},e),{},{questionIndex:e.questionIndex+1});case a.SUBMIT_EXAM:return Object(_.a)(Object(_.a)({},e),{},{score:n});default:return e}}}),{},k(Object(D.a)(C.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(94);var G=n(23);o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(u.a,{store:q,children:Object(I.jsx)(G.a,{children:Object(I.jsx)(Q,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[95,1,2]]]);
//# sourceMappingURL=main.b43d290a.chunk.js.map