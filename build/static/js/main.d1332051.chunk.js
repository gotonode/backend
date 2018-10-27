(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(43)},22:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),s=(n(22),n(15)),c=n(11),i=n(12),u=n(14),m=n(13),f=n(16),h=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"mark not important":"mark important",r="";return e.important?r+="important":r+="not-important",o.a.createElement("li",null,o.a.createElement("span",{className:r},e.content)," ",o.a.createElement("small",null,"(",o.a.createElement("span",{className:"toggle-importance",onClick:n},a),")"))},d=n(2),p=n.n(d),g="https://backend2018.herokuapp.com/notes",b={getAll:function(){var t=p.a.get(g),e={id:1e4,content:"Doesn't exist (this is a test item)",date:"1970",important:!0};return t.then(function(t){return t.data.concat(e)})},create:function(t){return p.a.post(g,t).then(function(t){return t.data})},update:function(t,e){return p.a.put("".concat(g,"/").concat(t),e).then(function(t){return t.data})}},v=2e3,w=function(t){var e=t.message;return null===e||0===e.length?null:o.a.createElement("div",{id:"error"},e)},N=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(m.a)(e).call(this,t))).eventHandler=function(t){console.log("Promise fulfilled."),n.setState({notes:t})},n.addNote=function(t){if(t.preventDefault(),0!==n.state.newNote.trim().length){var e={content:n.state.newNote,date:(new Date).toISOString(),important:Math.random()>.5};b.create(e).then(function(t){n.setState({notes:n.state.notes.concat(t),newNote:""})})}else alert("Please write something.")},n.toggleVisible=function(){n.setState({showAll:!n.state.showAll})},n.handleNoteChange=function(t){return n.setState({newNote:t.target.value})},n.toggleImportanceOf=function(t){return function(){var e=n.state.notes.find(function(e){return e.id===t}),a=Object(s.a)({},e,{important:!e.important});console.log("Need to toggle importance of note ".concat(e.id,".")),b.update(t,a).then(function(e){var a=n.state.notes.filter(function(e){return e.id!==t});n.setState({notes:a.concat(e)})}).catch(function(e){n.setState({notes:n.state.notes.filter(function(e){return e.id!==t}),errorMessage:"Note ".concat(t," has already been deleted from the server.")}),setTimeout(function(){n.setState({errorMessage:null})},v)})}},n.state={notes:[],showAll:!0,newNote:"",errorMessage:null},console.log("Constructor called."),n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log("Mount."),b.getAll().then(this.eventHandler)}},{key:"render",value:function(){var t=this,e=this.state.showAll?this.state.notes:this.state.notes.filter(function(t){return!0===t.important}),n=!0===this.state.showAll?"only important notes":"all notes";return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(w,{message:this.state.errorMessage}),o.a.createElement("ul",null,e.map(function(e){return o.a.createElement(h,{key:e.id,note:e,toggleImportance:t.toggleImportanceOf(e.id)})})),o.a.createElement("form",{onSubmit:this.addNote},o.a.createElement("input",{value:this.state.newNote,onChange:this.handleNoteChange}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save note"),o.a.createElement("button",{onClick:this.toggleVisible,className:"btn btn-secondary"},"Show ",n)))}}]),e}(o.a.Component);l.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.d1332051.chunk.js.map