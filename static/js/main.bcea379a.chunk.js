(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/dog1.50f02411.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},49:function(e,t,a){e.exports=a(87)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(38),c=a.n(r),l=(a(54),a(3)),i=a(4),o=a(6),u=a(5),m=a(7),d=(a(55),a(39)),h=a.n(d);a(56);var p=function(){return s.a.createElement("header",{className:"App-header row"},s.a.createElement("div",{className:"col-lg-2"}),s.a.createElement("div",{className:"col-lg-8 d-flex justify-content-center"},s.a.createElement("img",{src:h.a,alt:"logo"})),s.a.createElement("div",{className:"col-lg-2"}))},g=(a(57),a(17)),f=a(13),b=a.n(f),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.sites.map((function(e){var t=b()();return s.a.createElement("li",{className:"nav-item",key:t},s.a.createElement(g.b,{to:e.toLowerCase().replace(/\s/g,""),className:"item"},e))}));return s.a.createElement("nav",{className:"App-navbar navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0  mx-auto text-center"},e))}}]),t}(n.Component),k=(a(65),a(24)),E=a.n(k),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App-about mt-5 fadeIn"},s.a.createElement("div",{className:"row mx-auto mb-5"},s.a.createElement("div",{className:"col-lg-6 col-sm-12 col-centered "},s.a.createElement("img",{src:E.a,alt:"about",className:"img-fluid"})),s.a.createElement("div",{className:"col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2"},s.a.createElement("h3",null,"Every component still needs some styling"),s.a.createElement("p",null,"Work in progress"))),s.a.createElement("div",{className:"row mx-auto mb-5"},s.a.createElement("div",{className:"col-lg-6 col-sm-12 col-centered "},s.a.createElement("img",{src:E.a,alt:"about",className:"img-fluid"})),s.a.createElement("div",{className:"col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2"},s.a.createElement("h3",null,"Every component still needs some styling"),s.a.createElement("p",null,"Work in progress"))))}}]),t}(n.Component),j=a(19),y=a(20),w=a.n(y),N=a(25),x=a(8),T=a(42),S=a.n(T),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("img",{src:this.props.src,alt:this.props.id,className:"".concat(this.props.classes," img-fluid")})}}]),t}(n.Component),D=(a(83),a(43)),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={images:[],isLoading:!0},a.getImages=a.getImages.bind(Object(x.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getImages();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImages",value:function(){var e=Object(N.a)(w.a.mark((function e(){var t,a,n,s=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),t=[],a=0;case 3:if(t.length===this.props.perPage){e.next=11;break}return e.next=6,S.a.get("https://source.unsplash.com/random?sig=".concat(a));case 6:n=e.sent,a++,t.push({url:n.request.responseURL,id:b()()}),e.next=3;break;case 11:t=[].concat(Object(j.a)(this.state.images),Object(j.a)(t)),this.setState({images:t},(function(){return s.setState({isLoading:!1})}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=[],t=0,a=0;a<this.state.images.length/3;a++){e.push([]);for(var n=0;n<3;n++){var r=b()();a%3===0&&(1===n?(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-6 col-sm-12 col-centered img-fluid app-img",key:r})),t++):(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-3 col-sm-12 col-centered img-fluid app-img",key:r})),t++)),a%3===1&&(1===n||2===n?(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-3 col-sm-12 col-centered img-fluid app-img",key:r})),t++):(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-6 col-sm-12 col-centered img-fluid app-img",key:r})),t++)),a%3===2&&(2===n?(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-6 col-sm-12 col-centered img-fluid app-img",key:r})),t++):(e[a].push(s.a.createElement(C,{src:this.state.images[t].url,id:r,classes:"col-lg-3 col-sm-12 col-centered img-fluid app-img",key:r})),t++))}}return s.a.createElement("div",{className:"Gallery pt-3 fadeIn"},this.state.isLoading?s.a.createElement("div",{className:"col-lg-12 col-centered loader"},s.a.createElement(D.a,{size:15,sizeUnit:"vh"})):e.map((function(e){var t=b()();return s.a.createElement("div",{key:t,className:"row fadeIn"},e)})),!this.state.isLoading&&s.a.createElement("div",{className:"row mt-3 mb-3 fadeIn"},s.a.createElement("button",{onClick:this.getImages,className:"load col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},"Get More")))}}]),t}(n.Component),L=a(14),P=(a(84),a(46)),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={editing:!1,taskText:a.props.text},a.toggleEdit=a.toggleEdit.bind(Object(x.a)(a)),a.handleEdit=a.handleEdit.bind(Object(x.a)(a)),a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleDelete=a.handleDelete.bind(Object(x.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggleEdit",value:function(){this.setState({editing:!0})}},{key:"handleChange",value:function(e){this.setState({taskText:e.target.value})}},{key:"handleEdit",value:function(e){e.preventDefault(),this.props.update(this.props.id,this.state.taskText),this.setState({editing:!1})}},{key:"handleDelete",value:function(e){this.props.delete(this.props.id)}},{key:"render",value:function(){var e=this.state.editing?s.a.createElement("form",{onSubmit:this.handleEdit,className:"taskForm"},s.a.createElement("input",{value:this.state.taskText,onChange:this.handleChange,name:"editTask"}),s.a.createElement("button",null,"Submit!")):s.a.createElement("div",{className:"task-content"},s.a.createElement("div",{className:"task-text"},s.a.createElement("p",null,this.state.taskText)),s.a.createElement("div",{className:"task-buttons"},s.a.createElement("button",{onClick:this.toggleEdit},"Edit"),s.a.createElement("button",{onClick:this.handleDelete},"Delete")));return s.a.createElement("div",{className:"Task"},e)}}]),t}(n.Component);a(85);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={tasks:JSON.parse(window.localStorage.getItem("tasks")||"[]"),newTask:"Walk a dog"},a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleNewTask=a.handleNewTask.bind(Object(x.a)(a)),a.updateTask=a.updateTask.bind(Object(x.a)(a)),a.deleteTask=a.deleteTask.bind(Object(x.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({newTask:e.target.value})}},{key:"handleNewTask",value:function(e){var t=this;e.preventDefault();var a=b()(),n={text:this.state.newTask,id:a};""===n.text?alert("Don't add empty tasks! :("):this.setState((function(e){return{tasks:[].concat(Object(j.a)(e.tasks),[n]),newTask:""}}),(function(){return window.localStorage.setItem("tasks",JSON.stringify(t.state.tasks))}))}},{key:"updateTask",value:function(e,t){var a=this,n=this.state.tasks.map((function(a){return a.id===e?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{text:t}):a}));this.setState({tasks:n},(function(){return window.localStorage.setItem("tasks",JSON.stringify(a.state.tasks))}))}},{key:"deleteTask",value:function(e){var t=this,a=this.state.tasks.filter((function(t){return t.id!==e}));this.setState({tasks:a},(function(){return window.localStorage.setItem("tasks",JSON.stringify(t.state.tasks))}))}},{key:"render",value:function(){var e,t=this;try{e=this.state.tasks.map((function(e){return s.a.createElement(A,{text:e.text,id:e.id,key:e.id,update:t.updateTask,delete:t.deleteTask})}))}catch(a){localStorage.clear()}return s.a.createElement("div",{className:"ToDoList fadeIn"},s.a.createElement("div",{className:"list-container"},s.a.createElement("div",{className:"list-tasks"},s.a.createElement("div",{className:"list-header"},"To-Do List"),e),s.a.createElement("form",{onSubmit:this.handleNewTask,className:"taskForm"},s.a.createElement("input",{placeholder:"Do shopping",name:"newTask",value:this.state.newTask,onChange:this.handleChange}),s.a.createElement("button",null,"Add!"))))}}]),t}(n.Component),G=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement(v,{sites:this.props.sites}),s.a.createElement("div",{className:"container-fluid"},s.a.createElement(L.d,null,s.a.createElement(L.b,{exact:!0,path:"/about",render:function(){return s.a.createElement(O,null)}}),s.a.createElement(L.b,{exact:!0,path:"/gallery",render:function(){return s.a.createElement(I,{perPage:9})}}),s.a.createElement(L.b,{exact:!0,path:"/TodoList",render:function(){return s.a.createElement(W,null)}}),s.a.createElement(L.b,{exact:!0,path:"/option4"}),s.a.createElement(L.b,{component:function(){return s.a.createElement("div",null,"404 Not found ",s.a.createElement(L.a,{to:"/about"}))}}))))}}]),t}(n.Component);G.defaultProps={sites:["About","Gallery","TodoList","Option 4"]};var z=G;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);c.a.render(s.a.createElement(g.a,{basename:"/website"},s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.bcea379a.chunk.js.map