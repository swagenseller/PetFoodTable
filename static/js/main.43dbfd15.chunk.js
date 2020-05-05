(this.webpackJsonpdatagrid=this.webpackJsonpdatagrid||[]).push([[0],{30:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(5),i=n.n(o),s=n(12),r=n(20),c=n(14),d=n(15),u=n(19),p=n(18),m=n(21),h=n.n(m),w=(n(36),n(16)),E=n(42),R=n(43),b=function(e){return"edit"===e.title?l.a.createElement(E.a.Footer,null,l.a.createElement(R.a,{variant:"secondary",onClick:e.onClose},"cancel"),l.a.createElement(R.a,{variant:"primary",onClick:e.edit},"Edit")):"delete"===e.title?l.a.createElement(E.a.Footer,null,l.a.createElement(R.a,{variant:"secondary",onClick:e.onClose},"cancel"),l.a.createElement(R.a,{variant:"danger",onClick:e.delete},"delete")):null},f=n(41),g=function(e){var t=null;return"edit"===e.title?t=l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{variant:"primary"},"Name:"),l.a.createElement("input",{type:"text",maxLength:"100",minLength:"1",name:"name",value:e.selectRow.name,onChange:e.handleChange})),l.a.createElement("li",null,l.a.createElement("span",null,"Brand:"),l.a.createElement("input",{type:"text",maxLength:"100",minLength:"1",name:"brand",value:e.selectRow.brand,onChange:e.handleChange})),l.a.createElement("li",null,l.a.createElement("span",null,"Pet:  "),l.a.createElement("input",{type:"text",maxLength:"10",minLength:"1",name:"pet",value:e.selectRow.pet,onChange:e.handleChange})),l.a.createElement("li",null,l.a.createElement("span",null,"Price:"),l.a.createElement("input",{type:"number",step:"0.01",max:"999.99",min:"0",name:"price",value:e.selectRow.price,onChange:e.handleChange}))):"delete"===e.title&&(t=l.a.createElement(f.a,{striped:!0,bordered:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Brand Name"),l.a.createElement("th",null,"Food For"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.selectRow.name),l.a.createElement("td",null,e.selectRow.brand),l.a.createElement("td",null,e.selectRow.pet),l.a.createElement("td",null,e.selectRow.price))))),l.a.createElement(E.a.Body,null,l.a.createElement("p",null,e.message),t)},C=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onClose=function(){a.props.onResponse()},a.delete=function(){a.props.onDelete(a.props.rowToEdit,a.props.iRowToEdit)},a.edit=function(){var e=Object.create(a.state.selectRow);a.props.onEdit(a.props.rowToEdit,a.props.iRowToEdit,e)},a.state={title:"",message:null,selectRow:a.props.selectRow},a.handleChange=a.handleChange.bind(Object(w.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setTitle()}},{key:"handleChange",value:function(e){var t=Object(r.a)({},this.state).selectRow,n=e.target,a=n.name,l=n.value;t[a]=l,this.setState({selectRow:t})}},{key:"setTitle",value:function(){console.log(this.state.selectRow),"edit"===this.props.title?this.setState({title:"Edit Row",message:null}):"delete"===this.props.title&&this.setState({title:"Delete Row",message:"Are you sure you want to delete this row?"})}},{key:"render",value:function(){return i.a.createPortal(l.a.createElement("aside",null,l.a.createElement(E.a,{show:this.props.isOpen,onHide:this.onClose},l.a.createElement(E.a.Header,{closeButton:!0,onClick:this.onClose},l.a.createElement(E.a.Title,null,this.state.title)),l.a.createElement(g,{title:this.props.title,selectRow:this.state.selectRow,handleChange:this.handleChange,message:this.state.message}),l.a.createElement(b,{onClose:this.onClose,edit:this.edit,delete:this.delete,title:this.props.title}))),document.body)}}]),n}(a.Component),v=(n(26),[{key:"edit",name:"",width:100,editable:!0,sortable:!1},{key:"name",name:"Name",editable:!0,sortable:!0,sortDescendingFirst:!0},{key:"brand",name:"Brand Name",sortable:!0,editable:!0},{key:"pet",name:"Food For",editable:!0,sortable:!0},{key:"price",name:"Price",editable:!0,sortable:!0}]),O=[{name:"minichunks",brand:"Lambs",pet:"dogs",price:3},{name:"HE Thinks he is people",brand:"Archer",pet:"ocelots",price:20},{name:"Wilderness",brand:"Blue Beef",pet:"dogs",price:7},{name:"carrots",brand:"N/A",pet:"rabbits",price:2},{name:"Shrimpy Shrimp",brand:"Venus",pet:"cats",price:6},{name:"sea flakes",brand:"Krill",pet:"fish",price:3}],y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onGridRowsUpdated=function(e){var t=e.fromRow,n=e.toRow,l=e.updated;a.setState((function(e){for(var a=e.rows.slice(),o=t;o<=n;o++)a[o]=Object(r.a)({},a[o],{},l);return a}))},a.getCellActions=function(e,t){var n=[{icon:l.a.createElement("span",{className:"primary"},"Edit"),callback:function(){var e=a.state.rows.indexOf(t),n=a.state.initialRows.indexOf(t);a.setState({isOpen:!0,selectRow:t,rowToEdit:e,iRowToEdit:n,title:"edit"})}},{icon:l.a.createElement("span",{className:"danger"}," Delete "),callback:function(){var e=a.state.rows.indexOf(t),n=a.state.initialRows.indexOf(t);a.setState({isOpen:!0,selectRow:t,rowToEdit:e,iRowToEdit:n,title:"delete"})}}];return"edit"===e.key?n:null},a.sortRows=function(e,t){var n=Object(s.a)(a.state.rows);return"NONE"===t?a.state.initialRows:Object(s.a)(n).slice().sort((function(n,a){if("string"===typeof n[e]){if("ASC"===t)return n[e].toUpperCase()>a[e].toUpperCase()?1:-1;if("DESC"===t)return n[e].toUpperCase()<a[e].toUpperCase()?1:-1}else if("number"===typeof n[e]){if("ASC"===t)return n[e]>a[e]?1:-1;if("DESC"===t)return n[e]<a[e]?1:-1}}))},a.parseRows=function(e){var t=a.state.rows[e];return console.log(t),t},a.onResponse=function(){a.setState({isOpen:!1,selectRow:null,rowToEdit:null,iRowToEdit:null,title:""})},a.onDelete=function(e,t){var n=Object(s.a)(a.state.rows);n.splice(e,1);var l=Object(s.a)(a.state.initialRows);l.splice(t,1),a.setState({rows:n,initialRows:l}),a.onResponse()},a.onEdit=function(e,t,n){var l=Object(s.a)(a.state.rows);l[e]=n,a.setState({rows:l}),a.onResponse()},a.state={rows:O,initialRows:O,isOpen:!1,selectRow:null,rowToEdit:null,iRowToEdit:null,title:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h.a,{columns:v,rowGetter:function(t){return e.state.rows[t]},rowsCount:this.state.rows.length,onGridRowsUpdated:this.onGridRowsUpdated,enableCellsSelect:!0,getCellActions:this.getCellActions,onGridSort:function(t,n){return e.setState({rows:e.sortRows(t,n)})}}),this.state.isOpen&&l.a.createElement(C,{isOpen:this.state.isOpen,onResponse:this.onResponse,selectRow:this.state.selectRow,rowToEdit:this.state.rowToEdit,iRowToEdit:this.state.iRowToEdit,onDelete:this.onDelete,title:this.state.title,onEdit:this.onEdit}))}}]),n}(l.a.Component),k=document.querySelector("#root");i.a.render(l.a.createElement(y,null),k)}},[[30,1,2]]]);
//# sourceMappingURL=main.43dbfd15.chunk.js.map