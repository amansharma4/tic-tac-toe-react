(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(13),a(7)),i=a(1),u=a(2),s=a(3),m=a(4),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleForm=function(t){t.preventDefault();var a=t.target.player.value;e.props.player(a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){e.handleForm(t)}},r.a.createElement("label",null,"Player X",r.a.createElement("input",{type:"radio",name:"player",value:"X"})),r.a.createElement("label",null,"Player O",r.a.createElement("input",{type:"radio",name:"player",value:"O"})),r.a.createElement("input",{type:"submit",value:"Start"}))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCLick=function(e){var t=n.state,a=t.board,r=t.player,l=t.winner;if(!a[e]&&!l&&r){var c=a;c[e]=r,n.setState({board:c,player:"X"===r?"O":"X"}),n.checkWinner()}},n.checkWinner=function(){for(var e=n.state.player,t=[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]],a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),l=r[0],c=r[1],i=r[2],u=n.state.board;u[l]&&u[l]===u[c]&&u[l]===u[i]&&(alert("Player ".concat(e," won")),n.setState({winner:n.state.player}))}},n.setPlayer=function(e){n.setState({player:e})},n.state={board:Array(9).fill(null),player:null,winner:null},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.board.map((function(t,a){return r.a.createElement("div",{className:"box",key:a,onClick:function(){return e.handleCLick(a)}},t)}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement(p,{player:this.setPlayer}),r.a.createElement("div",{className:"board"},t))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.54f195ff.chunk.js.map