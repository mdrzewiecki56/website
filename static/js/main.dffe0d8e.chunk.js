(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/dog1.50f02411.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},40:function(e,t,a){e.exports=a(97)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),m=(a(45),a(6)),o=a(7),l=a(9),i=a(8),u=a(10),p=(a(46),a(35)),d=a.n(p);a(47);var g=function(){return r.a.createElement("header",{className:"App-header row"},r.a.createElement("div",{className:"col-lg-2"}),r.a.createElement("div",{className:"col-lg-8 d-flex justify-content-center"},r.a.createElement("img",{src:d.a,alt:"logo"})),r.a.createElement("div",{className:"col-lg-2"}))},h=(a(48),a(12)),b=a(15),f=a.n(b),E=function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.sites.map((function(e){var t=f()();return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement(h.c,{to:e.toLowerCase().replace(/\s/g,""),className:"item"},e))}));return r.a.createElement("nav",{className:"App-navbar navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0  mx-auto text-center"},e))}}]),t}(n.Component),v=(a(56),a(18)),j=a.n(v),O=function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-about mt-5"},r.a.createElement("div",{className:"row mx-auto mb-5"},r.a.createElement("div",{className:"col-lg-6 col-sm-12 col-centered "},r.a.createElement("img",{src:j.a,alt:"about",className:"img-fluid"})),r.a.createElement("div",{className:"col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2"},r.a.createElement("h3",null,"Heading 1"),r.a.createElement("p",null,"Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum"))),r.a.createElement("div",{className:"row mx-auto mb-5"},r.a.createElement("div",{className:"col-lg-6 col-sm-12 col-centered "},r.a.createElement("img",{src:j.a,alt:"about",className:"img-fluid"})),r.a.createElement("div",{className:"col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2"},r.a.createElement("h3",null,"Heading 2"),r.a.createElement("p",null,"Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum"))),r.a.createElement("div",{className:"row mx-auto mb-5"},r.a.createElement("div",{className:"col-lg-6 col-sm-12 col-centered "},r.a.createElement("img",{src:j.a,alt:"about",className:"img-fluid"})),r.a.createElement("div",{className:"col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2"},r.a.createElement("h3",null,"Heading 3"),r.a.createElement("p",null,"Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum"))))}}]),t}(n.Component),L=a(23),N=a(16),y=a.n(N),w=a(22),k=a(17),x=a(38),C=a.n(x),I=function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{src:this.props.src,alt:this.props.id,className:"app-img mb-5"})}}]),t}(n.Component),A=a(39),P=a.n(A),B=(a(94),a(95),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={images:[],isLoading:!0},a.getImages=a.getImages.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getImages();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImages",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t,a,n,r=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),t=[],a=0;case 3:if(t.length===this.props.perPage){e.next=11;break}return e.next=6,C.a.get("https://source.unsplash.com/random?sig=".concat(a));case 6:n=e.sent,a++,t.push({url:n.request.responseURL,id:f()()}),e.next=3;break;case 11:t=[].concat(Object(L.a)(this.state.images),Object(L.a)(t)),this.setState({images:t},(function(){return r.setState({isLoading:!1})}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=[],t=0,a=0;a<this.state.images.length/3;a++){e.push([]);for(var n=0;n<3;n++){var c=f()();1===n?(e[a].push(r.a.createElement("div",{key:c,className:"col-lg-6 col-sm-12 col-centered"},r.a.createElement(h.b,{to:"/img".concat(c)},r.a.createElement(I,{src:this.state.images[t].url,id:c})))),t++):(e[a].push(r.a.createElement("div",{key:c,className:"col-lg-3 col-sm-12 col-centered"},r.a.createElement(h.b,{to:"/img".concat(c)},r.a.createElement(I,{src:this.state.images[t].url,id:c})))),t++)}}return r.a.createElement("div",{className:"Gallery pt-5"},this.state.isLoading?r.a.createElement("div",{className:"col-lg-12 col-centered"},r.a.createElement(P.a,{type:"Puff",color:"#00BFFF",height:250,width:250})):e.map((function(e){var t=f()();return r.a.createElement("div",{key:t,className:"row"},e)})),!this.state.isLoading&&r.a.createElement("button",{onClick:this.getImages},"Get More!"))}}]),t}(n.Component)),F=a(13),G=function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(E,{sites:this.props.sites}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(F.d,null,r.a.createElement(F.b,{exact:!0,path:"/about",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(F.b,{exact:!0,path:"/gallery",render:function(){return r.a.createElement(B,{perPage:9})}}),r.a.createElement(F.b,{exact:!0,path:"/option3"}),r.a.createElement(F.b,{exact:!0,path:"/option4"}),r.a.createElement(F.b,{component:function(){return r.a.createElement("div",null,"404 Not found ",r.a.createElement(F.a,{to:"/about"}))}}))))}}]),t}(n.Component);G.defaultProps={sites:["About","Gallery","Option 3","Option 4"]};var H=G;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96);s.a.render(r.a.createElement(h.a,{basename:"/website"},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.dffe0d8e.chunk.js.map