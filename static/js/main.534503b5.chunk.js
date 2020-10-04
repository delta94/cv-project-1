(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{57:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(62),a(15)),c=a(16),m=a(20),s=a(19),u=a(100),d=a(98),h=a(103),g=a(97),E=a(4),b=a(26),p=a(10),v=a(68),f=a(105),y=a(104),C=a(101),x=function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"2rem 1rem 2.2rem 1rem",maxWidth:"600px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},container:{margin:"0"}}};var j=Object(E.a)(x,{withTheme:!0})((function(e){var t=e.fName,a=e.lName,n=e.email,r=e.phone,l=e.handleChange,o=e.handleSubmit,c=e.classes;return i.a.createElement("form",{onSubmit:o,className:c.root},i.a.createElement(f.a,{className:c.avatar}),i.a.createElement(g.a,{container:!0,spacing:3,className:c.container},i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement(C.a,{required:!0,id:"fName",name:"fName",label:"First name",value:t,onChange:l,color:"secondary",fullWidth:!0,autoComplete:"given-name"})),i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement(C.a,{required:!0,id:"lName",name:"lName",label:"Last name",value:a,onChange:l,color:"secondary",fullWidth:!0,autoComplete:"family-name"})),i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement(C.a,{required:!0,id:"email",name:"email",label:"Email",value:n,onChange:l,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement(C.a,{required:!0,id:"phone",name:"phone",label:"Phone Number",value:r,onChange:l,color:"secondary",fullWidth:!0}))),i.a.createElement(y.a,{type:"submit",variant:"contained",color:"secondary",size:"small"},"Submit"))})),S=function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"2rem 1rem 1.4rem 1rem",textAlign:"center",maxWidth:"600px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}},k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fName:"John",lName:"Smith",email:"john.smith@email.com",phone:"(620) 454-1799",isEditing:!1},n.toggleEdit=n.toggleEdit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.toggleEdit()}},{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){var e=this.state,t=e.fName,a=e.lName,n=e.email,r=e.phone,l=e.isEditing,o=this.props.classes;return i.a.createElement(i.a.Fragment,null,l?i.a.createElement(j,{fName:t,lName:a,email:n,phone:r,handleChange:this.handleChange,handleSubmit:this.handleSubmit}):i.a.createElement("div",{className:o.root},i.a.createElement(f.a,{className:o.avatar}),i.a.createElement(v.a,{component:"h1",variant:"h4",gutterBottom:!0},t," ",a),i.a.createElement(v.a,{variant:"subtitle2"},"Email"),i.a.createElement(v.a,{gutterBottom:!0},n),i.a.createElement(v.a,{variant:"subtitle2"},"Phone Number"),i.a.createElement(v.a,{gutterBottom:!0},r),i.a.createElement(y.a,{variant:"outlined",color:"secondary",size:"small",onClick:this.toggleEdit},"Edit")))}}]),a}(n.Component),O=Object(E.a)(S,{withTheme:!0})(k),D={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0rem 1rem 2.2rem 1rem",maxWidth:"600px"},container:{margin:"0 0 1rem 0"}};var N=Object(E.a)(D)((function(e){var t=e.school,a=e.title,n=e.date,r=e.handleChange,l=e.handleSubmit,o=e.classes;return i.a.createElement("form",{onSubmit:l,className:o.root},i.a.createElement(v.a,{component:"h1",variant:"h5"},"Edit Education"),i.a.createElement(g.a,{container:!0,spacing:3,className:o.container},i.a.createElement(g.a,{item:!0,xs:12,sm:12},i.a.createElement(C.a,{required:!0,id:"school",name:"school",label:"School",value:t,onChange:r,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:8,sm:8},i.a.createElement(C.a,{required:!0,id:"title",name:"title",label:"Title",value:a,onChange:r,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:4,sm:4},i.a.createElement(C.a,{required:!0,id:"date",name:"date",label:"Date",value:n,onChange:r,color:"secondary",fullWidth:!0}))),i.a.createElement(y.a,{type:"submit",variant:"contained",color:"secondary",size:"small"},"Submit"))})),W={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"0 1rem 2rem 1rem",textAlign:"center",maxWidth:"600px"}},w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={school:"Massachusetts Institute of Technology",title:"Software Engineering",date:"2019",isEditing:!1},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.toggleEdit=n.toggleEdit.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.toggleEdit()}},{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){var e=this.state,t=e.school,a=e.title,n=e.date,r=e.isEditing,l=this.props.classes;return i.a.createElement(i.a.Fragment,null,r?i.a.createElement(N,{school:t,title:a,date:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit}):i.a.createElement("div",{className:l.root},i.a.createElement(v.a,{component:"h1",variant:"h5",gutterBottom:!0},"Education"),i.a.createElement(v.a,{variant:"subtitle2"},"School"),i.a.createElement(v.a,{gutterBottom:!0},t),i.a.createElement(v.a,{variant:"subtitle2"},"Title of Study"),i.a.createElement(v.a,{gutterBottom:!0},a),i.a.createElement(v.a,{variant:"subtitle2"},"Class"),i.a.createElement(v.a,{gutterBottom:!0},n),i.a.createElement(y.a,{variant:"outlined",color:"secondary",size:"small",onClick:this.toggleEdit},"Edit")))}}]),a}(n.Component),B=Object(E.a)(W)(w),q={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 1rem 0.4rem 1rem",maxWidth:"600px"},container:{margin:"0 0 1rem 0"}};var I=Object(E.a)(q)((function(e){var t=e.company,a=e.position,n=e.tasks,r=e.startDate,l=e.endDate,o=e.handleChange,c=e.handleSubmit,m=e.classes;return i.a.createElement("form",{onSubmit:c,className:m.root},i.a.createElement(v.a,{component:"h1",variant:"h5"},"Edit Experience"),i.a.createElement(g.a,{container:!0,spacing:3,className:m.container},i.a.createElement(g.a,{item:!0,xs:6,sm:6},i.a.createElement(C.a,{required:!0,id:"company",name:"company",label:"Company",value:t,onChange:o,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:3,sm:3},i.a.createElement(C.a,{required:!0,id:"startDate",name:"startDate",label:"Start Date",value:r,onChange:o,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:3,sm:3},i.a.createElement(C.a,{required:!0,id:"endDate",name:"endDate",label:"End Date",value:l,onChange:o,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:12,sm:12},i.a.createElement(C.a,{required:!0,id:"position",name:"position",label:"Position",value:a,onChange:o,color:"secondary",fullWidth:!0})),i.a.createElement(g.a,{item:!0,xs:12,sm:12},i.a.createElement(C.a,{required:!0,id:"tasks",name:"tasks",label:"Tasks",value:n,onChange:o,color:"secondary",fullWidth:!0}))),i.a.createElement(y.a,{type:"submit",variant:"contained",color:"secondary",size:"small"},"Submit"))})),T={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"0 1rem",textAlign:"center",maxWidth:"600px"}},z=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={company:"Dell Technologies",position:"Front-End Developer",tasks:"Determining the structure and design of web pages. Developing features to enhance the user experience. Ensuring web design is optimized for smartphones",startDate:"01/2017",endDate:"03/2020",isEditing:!1},n.toggleEdit=n.toggleEdit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.toggleEdit()}},{key:"render",value:function(){var e=this.state,t=e.company,a=e.position,n=e.tasks,r=e.startDate,l=e.endDate,o=e.isEditing,c=this.props.classes;return i.a.createElement(i.a.Fragment,null,o?i.a.createElement(I,{company:t,position:a,tasks:n,startDate:r,endDate:l,handleChange:this.handleChange,handleSubmit:this.handleSubmit}):i.a.createElement("div",{className:c.root},i.a.createElement(v.a,{component:"h1",variant:"h5",gutterBottom:!0},"Experience"),i.a.createElement(v.a,{variant:"subtitle2"},"Company"),i.a.createElement(v.a,{gutterBottom:!0},t),i.a.createElement(v.a,{variant:"subtitle2"},"Start Date - End Date"),i.a.createElement(v.a,{gutterBottom:!0},r," - ",l),i.a.createElement(v.a,{variant:"subtitle2"},"Position"),i.a.createElement(v.a,{gutterBottom:!0},a),i.a.createElement(v.a,{variant:"subtitle2"},"Tasks"),i.a.createElement(v.a,{gutterBottom:!0},n),i.a.createElement(y.a,{variant:"outlined",color:"secondary",size:"small",onClick:this.toggleEdit},"Edit")))}}]),a}(n.Component),F=Object(E.a)(T)(z),P=a(99);var J=function(){return i.a.createElement(v.a,{variant:"body2",align:"center"},i.a.createElement(P.a,{color:"inherit",href:"https://github.com/JCarlosLucio/cv-project"},"By Lucio")," ",(new Date).getFullYear(),".")},A=function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},info:{backgroundColor:"white"},paper:{margin:e.spacing(1,0),display:"flex",flexDirection:"column",alignItems:"center"}}},L=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(g.a,{container:!0,component:"main",className:e.root},i.a.createElement(u.a,null),i.a.createElement(g.a,{item:!0,xs:3,sm:4,md:5,className:e.image}),i.a.createElement(g.a,{item:!0,xs:9,sm:8,md:7,className:e.info,component:d.a,elevation:6,square:!0},i.a.createElement(g.a,{container:!0,component:"section",className:e.paper},i.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(O,null)),i.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(B,null)),i.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12},i.a.createElement(F,null)),i.a.createElement(h.a,{mt:3},i.a.createElement(J,null)))))}}]),a}(n.Component),M=Object(E.a)(A,{withTheme:!0})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.534503b5.chunk.js.map