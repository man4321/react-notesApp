(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],{106:function(t,e,a){},107:function(t,e,a){},134:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a(0),o=a.n(r),c=a(10),i=a.n(c),s=a(41),l=(a(106),a(14)),j=(a.p,a(107),a(28)),d=a(60),b=a(177),u=a(180),p=a(183),x=a(182),h=a(184),m=Object(b.a)({root:{minWidth:200,maxWidth:400,margin:"16px",padding:"8px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)","&:hover":{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",opacity:"1",transition:"transform 0.3s ease"}},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function O(t){var e=t.index,a=t.title,r=t.text,o=t.marked,c=t.id,i=t.deleteNote,s=t.updateNote,l=m();l.bullet;return Object(n.jsxs)(u.a,{className:l.root,style:o?{backgroundColor:"Highlight"}:{backgroundColor:"white"},children:[Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(d.a,{className:l.title,color:"textSecondary",gutterBottom:!0,children:["Note ",e]}),Object(n.jsx)(d.a,{variant:"h6",component:"p",children:a}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.a,{variant:"subtitle1",children:r})]}),Object(n.jsxs)(p.a,{style:{justifyContent:"center"},children:[Object(n.jsx)(h.a,{size:"small",color:"secondary",variant:"contained",onClick:function(){return i(c)},children:"Delete"}),Object(n.jsx)(h.a,{size:"small",color:"primary",variant:"contained",onClick:function(){return s(c,{text:r,title:a,marked:o})},children:o?"Unmark":"mark"})]})]})}var f=a(59),g=a(185),v=a(195),w=Object(b.a)({root:{minWidth:275,margin:"10px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},form:{display:"flex",flexDirection:"column",padding:"10px"},action:{justifyContent:"center"},text:{margin:"10px"}});function k(t){var e=Object(r.useState)({title:"",text:"",hideShow:!1}),a=Object(f.a)(e,2),o=a[0],c=a[1],i=w();i.bullet;return Object(n.jsxs)(u.a,{className:i.root,variant:"outlined",children:[Object(n.jsx)(x.a,{children:Object(n.jsxs)("form",{className:i.form,onMouseOver:function(){c(Object(l.a)(Object(l.a)({},o),{},{hideShow:!0}))},onMouseLeave:function(){c(Object(l.a)(Object(l.a)({},o),{},{hideShow:""!=o.title||""!=o.text}))},children:[Object(n.jsx)(v.a,{autoComplete:"off",onChange:function(t){!function(t){c(Object(l.a)(Object(l.a)({},o),{},{title:t.target.value}))}(t)},value:o.title,className:i.text,label:o.hideShow?"Title":"take a note...",variant:"outlined",id:"custom-css-outlined-input"}),Object(n.jsx)(g.a,{hidden:!o.hideShow,value:o.text,onChange:function(t){!function(t){c(Object(l.a)(Object(l.a)({},o),{},{text:t.target.value}))}(t)},className:i.text,"aria-label":"minimum height",rowsMin:5,placeholder:"Text"})]})}),Object(n.jsx)(p.a,{className:i.action,children:Object(n.jsx)(h.a,{disabled:""===o.text&&""===o.title,variant:"contained",color:"primary",onClick:function(){t.action(o),c(Object(l.a)(Object(l.a)({},o),{},{text:"",title:"",hideShow:!1}))},children:"Add Note"})})]})}var N=a(31),y=a.n(N),S=a(48),C=a(49),D=a.n(C),F="CREATE_NOTE",T="SHOW_FULL_FORM";function B(t){return function(){var e=Object(S.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t.title,text:t.text,marked:!1},e.next=3,D.a.post("https://notes-application-297406-default-rtdb.firebaseio.com/notes.json",n);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function A(){return function(){var t=Object(S.a)(y.a.mark((function t(e){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://notes-application-297406-default-rtdb.firebaseio.com/notes.json");case 2:a=t.sent,e({type:F,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function M(){return function(t){t({type:T})}}function P(t){return function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("https://notes-application-297406-default-rtdb.firebaseio.com/notes/".concat(t,".json"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function W(t,e){return function(){var a=Object(S.a)(y.a.mark((function a(n){var r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={marked:!e.marked,text:e.text,title:e.title},a.next=3,D.a.put("https://notes-application-297406-default-rtdb.firebaseio.com/notes/".concat(t,".json"),r);case 3:a.sent;case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()}var L=a(58),E=a(38),z=240,R=Object(b.a)((function(t){return{root:{display:"flex"},drawer:Object(j.a)({},t.breakpoints.up("sm"),{width:z,flexShrink:0}),appBar:Object(j.a)({},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(z,"px)"),marginLeft:z}),menuButton:Object(j.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),toolbar:t.mixins.toolbar,drawerPaper:{width:z},content:{flexGrow:1,padding:t.spacing(3)},notes:{display:"flex",flexWrap:"wrap",flexDirection:"row",margin:"32px"}}}));var U=Object(L.b)((function(t){return{notesData:t.notesData,showTextForm:t.showTextForm}}),(function(t){return Object(E.b)({createNote:B,showAction:M,deleteNote:P,updateNote:W,getAllNotes:A},t)}))((function(t){var e=R();return Object(r.useEffect)((function(){t.getAllNotes()}),[A,t.notesData]),Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(k,{action:t.createNote,showAction:t.showAction,showTextForm:t.showTextForm}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.a,{variant:"h3",children:"Your Notes"}),Object(n.jsx)("hr",{}),t.notesData&&Object.keys(t.notesData).length?Object(n.jsx)("div",{className:e.notes,children:Object.values(t.notesData).map((function(e,a){return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(O,{index:a+1,title:e.title,text:e.text,marked:e.marked,id:Object.keys(t.notesData)[a],deleteNote:t.deleteNote,updateNote:t.updateNote})},a)}))}):Object(n.jsx)(d.a,{variant:"subtitle1",children:"Nothing to show! use above function to add notes..."})]})})),_=a(192),G=a(191),H=a(187),I=a(198),J=a(197),Y=a(194),q=a(87),K=a.n(q),Q=a(88),V=a.n(Q),X=a(186),Z=a(188),$=a(189),tt=a(190),et=a(89),at=a.n(et),nt=a(193),rt=a(15),ot=240,ct=Object(b.a)((function(t){return{root:{display:"flex"},drawer:Object(j.a)({},t.breakpoints.up("sm"),{width:ot,flexShrink:0}),appBar:Object(j.a)({},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(ot,"px)"),marginLeft:ot}),menuButton:Object(j.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),toolbar:t.mixins.toolbar,drawerPaper:{width:ot},content:{flexGrow:1,padding:t.spacing(3)},notes:{display:"flex",flexWrap:"wrap",flexDirection:"row",margin:"32px"}}}));var it=function(t){var e=t.window,a=ct(),r=Object(rt.a)(),c=o.a.useState(!1),i=Object(f.a)(c,2),l=i[0],j=i[1],b=function(){j(!l)},u=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(H.a,{}),Object(n.jsxs)(X.a,{children:[Object(n.jsxs)(Z.a,{button:!0,children:[Object(n.jsx)($.a,{children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(tt.a,{children:Object(n.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"indianred"},children:"Notes application"})})]}),Object(n.jsxs)(Z.a,{button:!0,children:[Object(n.jsx)($.a,{children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(tt.a,{children:Object(n.jsx)(s.b,{to:"/profile",style:{textDecoration:"none",color:"indianred"},children:"Profile"})})]})]}),Object(n.jsx)(H.a,{})]}),p=void 0!==e?function(){return e().document.body}:void 0;return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(G.a,{}),Object(n.jsx)(_.a,{position:"fixed",className:a.appBar,children:Object(n.jsxs)(nt.a,{children:[Object(n.jsx)(Y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:b,className:a.menuButton,children:Object(n.jsx)(at.a,{})}),Object(n.jsx)(d.a,{variant:"h6",noWrap:!0,children:"Notes"})]})}),Object(n.jsxs)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:[Object(n.jsx)(J.a,{smUp:!0,implementation:"css",children:Object(n.jsx)(I.a,{container:p,variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:l,onClose:b,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:u})}),Object(n.jsx)(J.a,{xsDown:!0,implementation:"css",children:Object(n.jsx)(I.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:u})})]}),Object(n.jsxs)("main",{className:a.content,children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)("div",{children:t.children})]})]})},st=a(12),lt=Object(b.a)({root:{minWidth:275,padding:"8px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{},pos:{marginBottom:12},media:{height:"400px"}});function jt(){var t=lt();return Object(n.jsxs)(u.a,{className:t.root,variant:"outlined",children:[Object(n.jsx)(d.a,{className:t.title,variant:"h3",children:"About me"}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)("img",{src:"../../manohar.jpeg",className:t.media}),Object(n.jsx)(d.a,{className:t.title,variant:"h6",children:"Created by Manohar Seervi"})]})]})}var dt=function(t){return Object(n.jsx)(it,Object(l.a)(Object(l.a)({},t),{},{children:Object(n.jsxs)(st.c,{children:[Object(n.jsx)(st.a,{path:"/",exact:!0,component:U}),Object(n.jsx)(st.a,{path:"/profile",exact:!0,component:jt})]})}))},bt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),o(t),c(t)}))},ut={notesData:[],showTextForm:!1};var pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(l.a)(Object(l.a)({},t),{},{notesData:e.payload});case T:return Object(l.a)(Object(l.a)({},t),{},{showTextForm:!t.showTextForm});default:return t}},xt=a(90),ht=Object(E.c)(pt,Object(E.a)(xt.a));i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(L.a,{store:ht,children:Object(n.jsx)(s.a,{children:Object(n.jsx)(dt,{})})})}),document.getElementById("root")),bt()}},[[134,1,2]]]);
//# sourceMappingURL=main.b9acb419.chunk.js.map