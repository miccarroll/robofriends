(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),i=t(3),o=t.n(i),s=(t(13),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))}),c=t(4),l=t(5),h=t(7),m=t(6),u=function(e){var n=e.name,t=e.email,r=e.id;return Object(a.jsxs)("div",{className:"cardCont",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:t})]})},d=function(e){var n=e.robots;return Object(a.jsx)("div",{className:"cardsCont",children:n.map((function(e,t){return Object(a.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email},n[t].id)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){var n=e.searchChange;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"searchBox",onChange:n,type:"search",placeholder:"search robots"})})},f=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},p=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){var t=e.state.robots.filter((function(e){return e.name.toLowerCase().includes(n.target.value.toLowerCase())}));e.setState({filteredRobots:t})},e.state={filteredRobots:b,robots:b},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https //jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"mainCont",children:[Object(a.jsx)("h1",{children:"RoboFriends"}),Object(a.jsx)(j,{searchChange:this.onSearchChange}),Object(a.jsx)(f,{children:Object(a.jsx)(d,{robots:this.state.filteredRobots})})]})}}]),t}(r.Component);o.a.render(Object(a.jsx)(p,{}),document.getElementById("root")),s()}},[[14,1,2]]]);
//# sourceMappingURL=main.821baaf0.chunk.js.map