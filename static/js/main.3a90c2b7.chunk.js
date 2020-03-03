(this["webpackJsonpworking-management-app"]=this["webpackJsonpworking-management-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),r=a.n(s),o=(a(14),a(1)),c=a(2),i=a(4),m=a(3),u=a(5),d=(a(15),a(6)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onClickAddFormTitle=function(){a.props.onClickAddFormTitle()},a.onChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l))},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state)},a.onClear=function(){a.props.onClickAddFormTitle()},a.state={id:"",name:"",status:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.taskEditing;e&&this.setState({id:e.id,name:e.name,status:e.status})}},{key:"componentWillReceiveProps",value:function(e){e&&e.taskEditing?this.setState({id:e.taskEditing.id,name:e.taskEditing.name,status:e.taskEditing.status}):e&&!e.taskEditing&&this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){var e=this.state;return l.a.createElement("div",null,l.a.createElement("div",{className:"panel panel-warning"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title",onClick:this.onClickAddFormTitle}," ",""===e.id?"Add Working":"Update Working")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("span",{className:"label label-info ft-size"},"Name")),l.a.createElement("input",{type:"text",className:"form-control mt-5px",name:"name",value:e.name,onChange:this.onChange}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("span",{className:"label label-info ft-size"},"Status")),l.a.createElement("select",{className:"form-control mt-5px",name:"status",value:e.status,onChange:this.onChange},l.a.createElement("option",{value:!0},"Active"),l.a.createElement("option",{value:!1},"DeActive")),l.a.createElement("br",null)),l.a.createElement("button",{type:"submit",className:"btn btn-success mr-2 up-si"},"Save"),l.a.createElement("button",{type:"button",className:"btn btn-warning up-si",onClick:this.onClear},"Cancel")))))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onClickAddFormBtn=function(){a.props.onClickAddFormBtn()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn btn-primary btn-add",onClick:this.onClickAddFormBtn},"ADD Working"))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l))},a.onSearchKeyWord=function(){a.props.onSearchKeyWord(a.state.searchKeyWord)},a.state={searchKeyWord:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"col-xs-8 col-sm-8 col-md-8 col-lg-8 pd-r-0"},l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control he-30",placeholder:"Enter key word...",required:"required",name:"searchKeyWord",value:this.state.searchKeyWord,onChange:this.onChange})),l.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4 pd-l-0"},l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary he-30",onClick:this.onSearchKeyWord},"Find")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSortTable=function(e,t){a.setState({sort:{by:e,value:t}}),a.props.onSortTable(e,t)},a.state={sort:{by:"",value:0}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.sort;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle he-30",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},l.a.createElement("a",{className:"name"===t.by&&1===t.value?"dropdown-item sort-item-selected":"dropdown-item",onClick:function(){e.onSortTable("name",1)}},"Name A-Z"),l.a.createElement("a",{className:"name"===t.by&&-1===t.value?"dropdown-item sort-item-selected":"dropdown-item",onClick:function(){e.onSortTable("name",-1)}},"Name Z-A"),l.a.createElement("hr",null),l.a.createElement("a",{className:"status"===t.by&&1===t.value?"dropdown-item sort-item-selected":"dropdown-item",onClick:function(){e.onSortTable("status",1)}},"Status Active"),l.a.createElement("a",{className:"status"===t.by&&-1===t.value?"dropdown-item sort-item-selected":"dropdown-item",onClick:function(){e.onSortTable("status",-1)}},"Status DeActive"))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onChangeStatus=function(){a.props.onChangeStatus(a.props.task.id)},a.onDeleteItem=function(){a.props.onDeleteItem(a.props.task.id)},a.onUpdateItem=function(){a.props.onUpdateItem(a.props.task.id)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.task,n=t.index;return l.a.createElement("tr",null,l.a.createElement("td",{className:"al-ct"},n+1),l.a.createElement("td",{className:"ov-hd"},a.name),l.a.createElement("td",{className:"al-ct"},l.a.createElement("span",{className:!0===a.status?"label label-success":"label label-danger",onClick:this.onChangeStatus},!0===a.status?"Active":"DeActive")),l.a.createElement("td",{className:"al-ct"},l.a.createElement("button",(e={className:"align-item",type:"submit"},Object(d.a)(e,"className","btn btn-warning mr-2"),Object(d.a)(e,"onClick",this.onUpdateItem),e),"Update"),l.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:this.onDeleteItem},"Delete")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l)),a.props.onFilter("filterName"===n?l:a.state.filterName,"filterStatus"===n?l:a.state.filterStatus)},a.state={filterName:"",filterStatus:"-1"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map((function(t,a){return l.a.createElement(v,{key:t.id,index:a,task:t,onChangeStatus:e.props.onChangeStatus,onDeleteItem:e.props.onDeleteItem,onUpdateItem:e.props.onUpdateItem})}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",{className:"align-header-table"},l.a.createElement("tr",null,l.a.createElement("th",null,"STT"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Task"))),l.a.createElement("tbody",null,l.a.createElement("tr",{className:"he-header"},l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"form-control he-30",placeholder:"Filter name",name:"filterName",value:this.state.filterName,onChange:this.onChange})),l.a.createElement("td",null,l.a.createElement("select",{id:"input",className:"form-control",name:"filterStatus",value:this.state.filterStatus,onChange:this.onChange},l.a.createElement("option",{value:-1},"All"),l.a.createElement("option",{value:0},"Avtive"),l.a.createElement("option",{value:1},"DeActive"))),l.a.createElement("td",null)),t)))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onClickAddFormTitle=function(){a.setState({formAddActive:!1})},a.onClickAddFormBtn=function(){a.state.formAddActive?a.setState({taskEditing:null}):a.setState({formAddActive:!0,taskEditing:null})},a.onSubmit=function(e){var t=a.state.tasks;("true"===e.status?e.status=!0:e.status=!1,a.setState({formAddActive:!1}),e&&""===e.id)?(e.id=a.generateID(),t.push(e)):t[a.findIndexOfID(e.id)]=e;a.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},a.onChangeStatus=function(e){var t=a.state.tasks,n=a.findIndexOfID(e);t[n].status=!t[n].status,a.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},a.findIndexOfID=function(e){for(var t=a.state.tasks,n=0;n<t.length;n++)if(t[n].id===e)return n;return-1},a.onDeleteItem=function(e){var t=a.state.tasks,n=a.findIndexOfID(e);-1!==n&&(a.onClickAddFormTitle(),t.splice(n,1),a.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},a.onUpdateItem=function(e){var t=a.state.tasks[a.findIndexOfID(e)];a.setState({taskEditing:t}),!1===a.state.formAddActive&&a.setState({formAddActive:!0})},a.onFilter=function(e,t){a.setState({filter:{name:e,status:parseInt(t)}})},a.onSearchKeyWord=function(e){a.setState({searchKeyWord:e})},a.onSortTable=function(e,t){a.setState({sort:{by:e,value:parseInt(t)}})},a.state={tasks:[],formAddActive:!1,taskEditing:null,filter:{name:"",status:-1},searchKeyWord:"",sort:{by:"",value:0}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){localStorage&&localStorage.getItem("tasks")&&this.setState({tasks:JSON.parse(localStorage.getItem("tasks"))})}},{key:"generateID",value:function(){return this.rdS()+"-"+this.rdS()+this.rdS()+"-"+this.rdS()+"-"+this.rdS()+this.rdS()+this.rdS()}},{key:"rdS",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.formAddActive,n=e.taskEditing,s=e.filter,r=e.searchKeyWord,o=e.sort;"name"===o.by?t.sort((function(e,t){return e.name>t.name?o.value:e.name<t.name?-o.value:0})):t.sort((function(e,t){return e.status>t.status?-o.value:e.status<t.status?o.value:0})),localStorage.setItem("tasks",JSON.stringify(t)),s&&(s.name&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(s.name.toLowerCase())}))),t=t.filter((function(e){return-1!==s.status?e.status===(1!==s.status):e}))),r&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));var c=this.state.formAddActive?l.a.createElement(h,{onClickAddFormTitle:this.onClickAddFormTitle,onSubmit:this.onSubmit,taskEditing:n}):l.a.createElement("div",null);return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"header-style"},"Working Management"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},c),l.a.createElement("div",{className:a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},l.a.createElement(p,{onClickAddFormBtn:this.onClickAddFormBtn}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},l.a.createElement(f,{onSearchKeyWord:this.onSearchKeyWord})),l.a.createElement("div",{className:"col-xs-2 col-sm-2 col-md-2 col-lg-2"},l.a.createElement(b,{onSortTable:this.onSortTable}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},l.a.createElement(E,{tasks:t,onChangeStatus:this.onChangeStatus,onDeleteItem:this.onDeleteItem,onUpdateItem:this.onUpdateItem,onFilter:this.onFilter})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3a90c2b7.chunk.js.map