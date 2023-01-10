"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[3],{487:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3400),a=t(9823),i=t(2065),o=t(184);function s(e){var n=e.size,t=e.handleClick;return(0,o.jsx)(r.Z,{size:n,sx:{color:"black",bgcolor:(0,i.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:t,children:(0,o.jsx)(a.Z,{size:n})})}s.defaultProps={size:"small"}},4700:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(9439),a=t(2791),i=t(5646),o=t(3400),s=t(9823),c=t(3767),l=t(1428),u=t(890),d=t(184);function f(e){var n=e.message;return!0===e.error?(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(s.Z,{fontSize:"small",color:"error"}),(0,d.jsx)(u.Z,{children:n})]}):(0,d.jsxs)(c.Z,{direction:"row",spacing:2,justifyContents:"space-between",alignItems:"center",children:[(0,d.jsx)(l.Z,{fontSize:"small",color:"success"}),(0,d.jsx)(u.Z,{children:n})]})}function h(e){var n=e.snackBarOpen,t=e.message,c=e.onClose,l=e.error,u=(0,a.useState)(n),h=(0,r.Z)(u,2),m=h[0],x=h[1],p=(0,a.useState)(t),Z=(0,r.Z)(p,2),g=Z[0],j=Z[1];(0,a.useEffect)((function(){return x(n)}),[n]),(0,a.useEffect)((function(){return j(t)}),[t]);var b=function(){x(!1),j(null),c()},v=(0,d.jsx)(o.Z,{size:"small","aria-label":"close",color:"inherit",onClick:b,children:(0,d.jsx)(s.Z,{fontSize:"small"})});return(0,d.jsx)(i.Z,{open:m,autoHideDuration:3e3,onClose:b,message:(0,d.jsx)(f,{message:g,error:l}),action:v,anchorOrigin:{vertical:"top",horizontal:"center"}})}h.defaultProps={error:!1}},4125:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){var n=new Date(e);if(e){var t=n.toLocaleDateString("en-in",{day:"numeric",month:"long",year:"numeric"});o(t)}else o(null)}]}},1619:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];return[i,o,function(e){return o(e.target.value)}]}},2168:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(2791);function i(e){var n=(0,a.useState)(e),t=(0,r.Z)(n,2),i=t[0],o=t[1];(0,a.useEffect)((function(){return o(e)}),[e]);return[i,o,function(e){o(e.target.value)}]}},8003:function(e,n,t){t.d(n,{Z:function(){return fe}});var r=t(7762),a=t(4165),i=t(5861),o=t(9439),s=t(2791),c=t(7689),l=t(6151),u=t(533),d=t(1428),f=t(7394),h=t(890),m=t(3767),x=t(5574),p=t(7621),Z=t(9585),g=t(9504),j=t(4721),b=t(4554),v=t(1133),k=t(5397),y=t(3400),C=t(487),w=t(1065),S=t(8894),z=t(184),E=(0,S.yP)((0,S.bH)((0,S.p6)(w.ZP)));function I(e){var n=e.ind,t=e.images,r=e.handleNext,a=e.handleStepChange,i=(0,s.useState)(n),c=(0,o.Z)(i,2),l=c[0],u=c[1],d=(0,s.useState)(0),f=(0,o.Z)(d,2),h=f[0],m=f[1],x=(0,s.useState)(null),p=(0,o.Z)(x,2),Z=p[0],g=p[1];(0,s.useEffect)((function(){u(n)}),[n]),(0,s.useEffect)((function(){h<t.length?g("none"):g("flex")}),[h]);var j=function(){return m((function(e){return e+1}))};return(0,z.jsx)(E,{index:l,onChangeIndex:a,enableMouseEvents:!0,animateTransitions:!0,interval:1e4,onClick:r,style:{backgroundColor:"muted.main"},slideRenderer:function(e){var n=e.index,r=e.key,a=function(e,n){var t=e%n;return t<0?t+n:t}(n,t.length),i=(t[a].images?t[a].images.map((function(e){var n=e.src,t=e.width;return"".concat(n," ").concat(t,"w")})):[]).join(",");return(0,z.jsx)(b.Z,{component:"img",onLoad:j,sx:{display:{display:Z},justifyContents:"center",width:"100%",bgcolor:"#1c1c1c"},src:t[a].src,srcSet:i,style:{display:"block",boxSizing:"content-box",cursor:"pointer",objectFit:"contain",height:"100vh"},alt:t[a].src},r)}})}function P(e){var n=e.handleClick;return(0,z.jsx)(y.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",right:0,transform:"translate(0%, -50%)"},children:(0,z.jsx)(k.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function D(e){var n=e.handleClick;return(0,z.jsx)(y.Z,{edge:"start",color:"primary","aria-label":"close",onClick:n,sx:{position:"absolute",top:"50%",left:0,transform:"translate(0%, -50%)"},children:(0,z.jsx)(v.Z,{sx:{color:"button.main",fontSize:"4.5rem"}})})}function M(e){var n=e.open,t=e.title,r=e.date,a=e.images,i=e.index,o=e.handleNext,s=e.handleBack,c=e.handleClose,l=e.handleChange;return(0,z.jsxs)(x.Z,{open:n,fullScreen:!0,children:[(0,z.jsx)(I,{images:a,ind:i,handleNext:o,handleStepChange:l}),(0,z.jsx)(Z.Z,{title:t,subheader:r,sx:{position:"absolute",top:10,left:10,bgcolor:"button.main",borderRadius:3,padding:1}}),(0,z.jsx)(D,{handleClick:s}),(0,z.jsx)(P,{handleClick:o}),(0,z.jsx)(C.Z,{size:"large",handleClick:c})]})}I.defaultProps={ind:0},M.defaultProps={index:0};var R=t(9113),U=t(7254),T=t(9906),O=t(5130),L=t(1286),F=t(2168);function B(e){var n=e.editable,t=e.text,r=e.handleTitleUpdate,a=(0,F.Z)(t),i=(0,o.Z)(a,3),c=i[0],l=i[1],u=i[2],d=(0,s.useState)(n),f=(0,o.Z)(d,2),x=f[0],p=f[1],Z=(0,s.useState)(!1),g=(0,o.Z)(Z,2),j=g[0],b=g[1];return(0,s.useEffect)((function(){p(n),l(t),b(!1)}),[n]),x||j?x&&!j?(0,z.jsxs)(m.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,z.jsx)(h.Z,{variant:"h6",children:c}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){return b(!0)}})]}):x&&j?(0,z.jsxs)(m.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start"},spacing:2,children:[(0,z.jsx)(U.Z,{id:"standard-basic",size:"small",label:"Title",onChange:u,variant:"standard",defaultValue:c,sx:{maxWidth:"200px"}}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(c),b(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){l(t),b(!1)}})]}):void 0:(0,z.jsx)(h.Z,{variant:"h6",children:c})}var H=t(1413),Y=t(8239),A=t(6571),N=t(41),q=t(4125);function W(e){var n=e.editable,t=e.prevDate,r=e.handleDateUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),f=d[0],x=d[1],p=(0,q.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],j=Z[1],b=Z[2];return(0,s.useEffect)((function(){l(n),j(t),x(!1)}),[n,t]),c||f?c&&!f?(0,z.jsxs)(m.Z,{direction:"row",sx:{alignItems:"center"},spacing:2,children:[(0,z.jsx)(h.Z,{children:g}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){return x(!0)}})]}):c&&f?(0,z.jsxs)(m.Z,{direction:"row",sx:{alignItems:"flex-end",justifyContent:"flex-start",mt:3},spacing:2,children:[(0,z.jsx)(A._,{dateAdapter:N.H,children:(0,z.jsx)(Y.M,{label:"Memory Date",value:g,onChange:b,placeholder:"dd/MM/yyyy",inputFormat:"dd/MM/yyyy",maxDate:new Date,renderInput:function(e){return(0,z.jsx)(U.Z,(0,H.Z)({readOnly:!0,required:!0},e))}})}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(g),x(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){j(t),x(!1)}})]}):void 0:(0,z.jsx)(h.Z,{children:g})}var X=t(1747),K=t(1619);function V(e){var n=e.editable,t=e.prevStory,r=e.handleStoryUpdate,a=(0,s.useState)(n),i=(0,o.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(!1),d=(0,o.Z)(u,2),f=d[0],x=d[1],p=(0,K.Z)(t),Z=(0,o.Z)(p,3),g=Z[0],v=Z[1],k=Z[2],y=(0,s.useRef)();return(0,s.useEffect)((function(){l(n),v(t),x(!1)}),[n,t]),c||f?c&&!f?(0,z.jsxs)(m.Z,{direction:"column",spacing:2,children:[(0,z.jsxs)(m.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,z.jsx)(h.Z,{sx:{color:"muted.main"},children:"Edit Story"}),(0,z.jsx)(L.Z,{fontSize:"medium",onClick:function(){x(!0)}})]}),(0,z.jsx)(j.Z,{sx:{width:1}}),(0,z.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})]}):c&&f?(0,z.jsxs)(m.Z,{direction:"column",spacing:2,children:[(0,z.jsxs)(m.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,z.jsx)(h.Z,{sx:{color:"muted.main"},children:"Editing Story"}),(0,z.jsx)(T.Z,{fontSize:"medium",onClick:function(){r(g),x(!1)}}),(0,z.jsx)(O.Z,{fontSize:"medium",onClick:function(){v(t),x(!1)}})]}),(0,z.jsx)(j.Z,{sx:{width:1}}),(0,z.jsx)(b.Z,{sx:{p:2,m:1,my:2,border:1,borderColor:"primary.main",bgcolor:"input.background",minHeight:"70vh",borderRadius:5,width:"90%"},onClick:function(){return y.current.focus()},children:(0,z.jsx)(X.Z,{autoFocus:!0,"aria-label":"minimum height",placeholder:"Tell your story...",value:g,onChange:k,style:{width:"100%",minHeight:"184px",maxHeight:"70vh",boxSizing:"border-box",paddingTop:"5px",border:0,overflow:"auto",outline:"none",resize:"vertical",borderRadius:5,"&:focus":{border:0}},ref:y})})]}):void 0:(0,z.jsx)(h.Z,{style:{whiteSpace:"pre-wrap"},children:g})}var _=t(5987),G=t(5684),J=t(7262),Q=t(5523),$=t(7247),ee=t(2913),ne=t(9823),te=t(2065),re=["alt","style"],ae=["alt","style"];function ie(e){var n=e.children,t=e.onClick,r=e.name,a=e.updateOp;return(0,z.jsx)(l.Z,{id:r,variant:"contained",component:"label",onClick:t,sx:{color:a===r?"button.main":"muted.main",borderRadius:5,backgroundColor:a===r?"primary.main":"button.main",padding:"6px 8px","&:hover":{color:a===r?"button.main":"muted.main",backgroundColor:a===r?"primary.main":"button.main"}},children:n})}function oe(e){var n=e.handleChange,t=e.onClick,r=e.updateOp;return(0,z.jsxs)(ie,{onClick:t,name:"add",updateOp:r,children:[(0,z.jsx)("input",{type:"file",hidden:!0,multiple:!0,accept:"image/*",onChange:n}),(0,z.jsx)(ee.Z,{sx:{fontSize:"1.5rem"}}),"Add"]})}function se(e){var n=e.images,t=e.handlePhotoClick,r=e.renderPhoto,a=(0,s.useState)(null),i=(0,o.Z)(a,2),c=i[0],l=i[1];return(0,s.useEffect)((function(){var e=0,t=0;n.forEach((function(n){n.height>n.width?t+=1:e+=1})),l(e>t?"rows":"columns")}),[n]),r?(0,z.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2,renderPhoto:r}):(0,z.jsx)(G.Z,{layout:c,photos:n,onClick:t,spacing:2})}function ce(e){var n=e.editable,t=e.images,r=e.handlePhotoClick,a=e.handleThumbnailUpdate,i=e.deleteImage,c=e.addImage,u=(0,s.useState)(n),d=(0,o.Z)(u,2),f=d[0],x=d[1],p=(0,s.useState)(null),Z=(0,o.Z)(p,2),g=Z[0],j=Z[1],b=(0,s.useState)(null),v=(0,o.Z)(b,2),k=v[0],C=v[1],w=function(e){j(g===e?null:e)};(0,s.useEffect)((function(){x(n),j(null)}),[n]);var S=(0,z.jsxs)(m.Z,{direction:"row",spacing:2,children:[(0,z.jsx)(oe,{handleChange:c,onClick:function(){return w("add")},updateOp:g}),(0,z.jsxs)(ie,{onClick:function(){return w("delete")},name:"delete",updateOp:g,children:[(0,z.jsx)($.Z,{sx:{fontSize:"1.5rem"}}),"Delete"]}),(0,z.jsx)(ie,{onClick:function(){return w("thumbnail")},name:"thumbnail",updateOp:g,children:"Set Thumbnail"})]}),E=(0,z.jsx)(m.Z,{direction:"row",children:(0,z.jsxs)(h.Z,{variant:"h6",color:"muted.main",children:["Images:",t.length]})});return f?f&&"delete"===g?(0,z.jsxs)(m.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,a=r.alt,o=r.style,s=(0,_.Z)(r,re);return(0,z.jsxs)(l.Z,{component:"div",children:[(0,z.jsx)("img",(0,H.Z)({alt:a,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,z.jsx)(y.Z,{size:"medium",sx:{color:"black",bgcolor:(0,te.Fq)("#fff",.4),position:"absolute",top:10,right:12},onClick:function(){return function(e){var n=t.find((function(n){return n.alt===e}));i(n)}(a)},children:(0,z.jsx)(ne.Z,{size:"medium"})})]})}})]}):f&&"thumbnail"===g?(0,z.jsxs)(m.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r,renderPhoto:function(e){var n=e.layout,r=e.imageProps,i=r.alt,o=r.style,s=(0,_.Z)(r,ae);return(0,z.jsxs)(l.Z,{component:"div",children:[(0,z.jsx)("img",(0,H.Z)({alt:i,style:(0,H.Z)((0,H.Z)({},o),{},{width:n.width,padding:0})},s)),(0,z.jsx)(Q.Z,{control:(0,z.jsx)(J.Z,{}),label:"",checked:i===k,onChange:function(){return function(e){C(e);var n=t.find((function(n){return n.alt===e}));a(n)}(i)},sx:{pr:1,position:"absolute",bgcolor:(0,te.Fq)("#fff",.6),color:"black",borderRadius:"0px 5px 5px 0px",borderColor:"secondary.main",borderLeft:0,bottom:20,left:15}})]})}})]}):f&&"add"===g||f&&!g?(0,z.jsxs)(m.Z,{direction:"column",spacing:2,sx:{p:2},children:[E,S,(0,z.jsx)(se,{images:t,handlePhotoClick:r})]}):void 0:(0,z.jsx)(se,{images:t,handlePhotoClick:r})}se.defaultProps={renderPhoto:null},ie.defaultProps={onClick:function(){}};var le=t(5899),ue=t(4700);function de(e){return!1===e.preview?(0,z.jsx)(m.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:(0,z.jsx)(u.Z,{href:"/",underline:"none",children:(0,z.jsxs)(l.Z,{variant:"contained",component:"label",sx:{color:"primary.main",backgroundColor:"button.main",padding:"6px 8px",boxShadow:0,"&:hover":{backgroundColor:"button.main"}},children:[(0,z.jsx)(f.Z,{size:"medium",sx:{paddingRight:1}}),(0,z.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Memories"})]})})}):null}function fe(e){var n=e.memTitle,t=e.memDate,u=e.memStory,f=e.memImages,v=e.bucket,k=e.memoryID,y=e.authURL,C=e.preview,w=(0,s.useState)(!1),S=(0,o.Z)(w,2),E=S[0],I=S[1],P=(0,s.useState)(!1),D=(0,o.Z)(P,2),U=D[0],T=D[1],O=(0,s.useState)(0),L=(0,o.Z)(O,2),F=L[0],H=L[1],Y=(0,s.useState)(n),A=(0,o.Z)(Y,2),N=A[0],q=A[1],X=(0,s.useState)(t),K=(0,o.Z)(X,2),_=K[0],G=K[1],J=(0,s.useState)(u),Q=(0,o.Z)(J,2),$=Q[0],ee=Q[1],ne=(0,s.useState)(f),te=(0,o.Z)(ne,2),re=te[0],ae=te[1],ie=(0,s.useState)(null),oe=(0,o.Z)(ie,2),se=oe[0],fe=oe[1],he=(0,s.useState)(null),me=(0,o.Z)(he,2),xe=me[0],pe=me[1],Ze=(0,s.useState)([]),ge=(0,o.Z)(Ze,2),je=ge[0],be=ge[1],ve=(0,s.useState)(null),ke=(0,o.Z)(ve,2),ye=ke[0],Ce=ke[1],we=(0,s.useState)([]),Se=(0,o.Z)(we,2),ze=Se[0],Ee=Se[1],Ie=(0,s.useState)(!1),Pe=(0,o.Z)(Ie,2),De=Pe[0],Me=Pe[1],Re=(0,s.useState)(null),Ue=(0,o.Z)(Re,2),Te=Ue[0],Oe=Ue[1],Le=(0,s.useState)(null),Fe=(0,o.Z)(Le,2),Be=Fe[0],He=Fe[1],Ye=(0,s.useState)(null),Ae=(0,o.Z)(Ye,2),Ne=Ae[0],qe=Ae[1],We=(0,s.useState)(!1),Xe=(0,o.Z)(We,2),Ke=Xe[0],Ve=Xe[1],_e=re.length;(0,s.useEffect)((function(){return q(n)}),[n]),(0,s.useEffect)((function(){return G(t)}),[t]),(0,s.useEffect)((function(){return ee(u)}),[u]),(0,s.useEffect)((function(){return ae(f)}),[f]);var Ge=function(e,n){pe(e),qe(n)},Je=function(e,n,t){401===e.status?Ge("You have been logged out. Please login to continue.",!0):403===e.status?Ge("You do not have permissions to do this operation.",!0):Ge("Unknown error occured while ".concat(n),!0),t(e.status)},Qe=function(e){fe(!0),Ve(e)},$e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryDetails(v,y,k,n,t);case 3:return(r=e.sent).ok?Ge("Memory ".concat(n," updated successfully"),!1):Je(r,"updating ".concat(n),Qe),fe(!0),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),en=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryImage(v,y,k,"thumbnail",n);case 3:return(t=e.sent).ok?(Ge("Thumbnail updated successfully",!1),fe(!0)):Je(t,"updating thumbnail",Qe),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(re.length>1)){e.next=8;break}return e.next=4,le.Z.updateMemoryImage(v,y,k,"delete",n);case 4:(t=e.sent).ok?(Ge("Memory image deleted successfully",!1),ae(re.filter((function(e){return e.title!==n.title})))):Je(t,"deleting image",Qe),e.next=9;break;case 8:Ge("Atleast 1 image is needed for memory. Unable to delete",!0);case 9:return fe(!0),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),tn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.Z.updateMemoryImage(v,y,k,"add",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),rn=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(je.entries()),e.prev=1,i=(0,a.Z)().mark((function e(){var n,r,i,s,c,l,u,d,f,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)(t.value,2),r=n[0],i=n[1],s=(0,o.Z)(i,3),c=s[0],l=s[1],u=s[2],e.next=4,tn(c).then((function(e){return e.ok?e.text():(Je(e,"adding image",Qe),"")}));case 4:return d=e.sent,f={key:"memories/".concat(k,"/images/").concat(c.name),src:u,alt:c.name,title:c.name,width:c.width,height:c.height,images:[]},e.next=8,fetch(d,{body:l,method:"PUT"});case 8:(h=e.sent).ok?(Oe("Images uploaded: ".concat(r+1," / ").concat(ye," ")),ae((function(e){return e.concat([f])}))):(He("Error while uploading memory image"),Ee((function(e){return e.concat([c.name])})),Je(h,"deleting image",Qe));case 10:case"end":return e.stop()}}),e)})),n.s();case 4:if((t=n.n()).done){e.next=8;break}return e.delegateYield(i(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),n.e(e.t1);case 13:return e.prev=13,n.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je.length>0&&(Me(!0),Oe("Preparing images for upload....")),je.length!==ye){e.next=9;break}return e.next=4,rn();case 4:ze.length>0?He("Error while uploading ".concat(ze.length," images")):He("".concat(je.length," image(s) uploaded successfully")),Ee([]),Ce(null),be([]),setTimeout((function(){Me(!1),He(null),Oe(null)}),3e3);case 9:case"end":return e.stop()}}),e)}))),[je]);var an=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target.files&&(t=Array.from(n.target.files),Ce(t.length),re.length+t.length<=15?(t.forEach((function(e){var n=new Image;n.onload=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(t){var r,i,o,s,c,l,u,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.target.naturalHeight,i=t.target.naturalWidth,o=e.size/1048576,s=e.name,c=[500,1e3,1500].map((function(e){return{height:e,width:Math.ceil(e*i/r)}})),l=Date.now(),u="".concat(l,"-").concat(s),d=[{name:u,size:o,height:r,width:i,images:c},e,t.target.src],be((function(e){return e.concat([d])}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),n.src=URL.createObjectURL(e)})),t.map((function(e){return URL.revokeObjectURL(e)}))):(Ge("Unable to add ".concat(t.length," images. Maximum images allowed per memory is 15"),!0),fe(!0)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),on=(0,z.jsx)(B,{editable:U,text:N,handleTitleUpdate:function(e){$e("title",e)&&q(e)}}),sn=(0,z.jsx)(W,{editable:U,prevDate:_,handleDateUpdate:function(e){$e("date",e)&&G(e)}}),cn=(0,z.jsx)(V,{editable:U,prevStory:$,handleStoryUpdate:function(e){$e("story",e)&&ee(e)}}),ln=(0,z.jsx)(ce,{editable:U,images:re,handlePhotoClick:function(e,n,t){I(!0),H(t)},handleThumbnailUpdate:en,deleteImage:nn,addImage:an}),un=(0,z.jsxs)(l.Z,{variant:"contained",component:"label",onClick:function(){return T(!1)},sx:{color:"primary.main",borderRadius:5,backgroundColor:"button.main",padding:"6px 8px"},children:[(0,z.jsx)(d.Z,{size:"medium",sx:{paddingRight:1}}),(0,z.jsx)(h.Z,{variant:"body1",color:"muted.main",children:"Edit"})]});return 401===Ke&&!1===se?(0,z.jsx)(c.Fg,{to:"/login"}):(0,z.jsxs)(z.Fragment,{children:[U?(0,z.jsx)(m.Z,{direction:"row",justifyContent:"flex-start",sx:{backgroundColor:"button.main",paddingX:2,paddingY:1},children:un}):(0,z.jsx)(de,{preview:C}),(0,z.jsx)(b.Z,{component:"div",sx:{backgroundColor:"button.main",margin:U?"5px":0},children:(0,z.jsx)(R.Z,{header:on,subheader:sn,photoLayout:ln,storyLayout:cn,memoryID:k,bucket:v,authURL:y,handleEditClick:function(){return T(!0)},preview:C})}),(0,z.jsx)(M,{open:E,title:N,date:_,images:re,index:F,handleNext:function(){H((function(e){return(e+1)%_e}))},handleBack:function(){H((function(e){return(e-1+_e)%_e}))},handleClose:function(){return I(!1)},handleChange:function(e){return H(e)}}),(0,z.jsx)(ue.Z,{snackBarOpen:se,message:xe,onClose:function(){fe(!1),pe(null),qe(null)},error:Ne}),(0,z.jsx)(x.Z,{open:De,fullWidth:!0,sx:{p:1},children:(0,z.jsxs)(p.Z,{sx:{maxWidth:1,p:1},children:[(0,z.jsx)(Z.Z,{title:"Adding Images",sx:{textAlign:"center"}}),(0,z.jsx)(j.Z,{}),(0,z.jsxs)(g.Z,{children:[(0,z.jsx)(h.Z,{variant:"h6",sx:{color:"muted.main"},children:Te}),(0,z.jsx)(m.Z,{justifyContent:"center",sx:{py:2},children:(0,z.jsx)(h.Z,{variant:"h5",children:Be})})]})]})})]})}fe.defaultProps={memTitle:"Memory Title",memDate:"Memory Date",memStory:"Memory Text"}},9113:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(4165),a=t(9439),i=t(5861),o=t(2791),s=t(7689),c=t(7621),l=t(9585),u=t(4554),d=t(2898),f=t(4721),h=t(3967),m=t(5193),x=t(3400),p=t(1286),Z=t(184);function g(){return(0,Z.jsxs)(u.Z,{sx:{alignItems:"center"},onClick:function(){},children:[(0,Z.jsx)(x.Z,{"aria-label":"update",sx:{bgcolor:"form.input"},onClick:function(){},children:(0,Z.jsx)(p.Z,{})}),"Edit"]})}var j=t(4700),b=t(7247);function v(){return(0,Z.jsxs)(u.Z,{sx:{alignItems:"center"},children:[(0,Z.jsx)(x.Z,{"aria-label":"delete",sx:{bgcolor:"form.input"},children:(0,Z.jsx)(b.Z,{})}),"Delete"]})}var k=t(5422),y=t(3786),C=t(5574),w=t(6151),S=t(890),z=t(3767),E=t(5661);function I(e){var n=e.confirm,t=e.handleCallback,r=e.handleCloseCallback,i=e.title,s=e.message,c=(0,o.useState)(n),l=(0,a.Z)(c,2),d=l[0],f=l[1];(0,o.useEffect)((function(){return f(n)}),[n]);var h=function(){f(!1),r()};return(0,Z.jsxs)(C.Z,{open:d,sx:{backgroundColor:"faded.black"},children:[(0,Z.jsx)(E.Z,{children:i}),(0,Z.jsxs)(u.Z,{sx:{p:2},children:[(0,Z.jsx)(S.Z,{sx:{pb:2},children:s}),(0,Z.jsxs)(z.Z,{spacing:2,direction:"row",children:[(0,Z.jsx)(w.Z,{variant:"contained",onClick:h,children:"Cancel"}),(0,Z.jsx)(w.Z,{variant:"outlined",onClick:function(){h(),t()},children:"OK"})]})]})]})}function P(e){var n=e.deleteItem,t=e.updateItem,r=e.snackBar,i=e.confirmMessage,s=e.handleDeleteObject,c=e.handleEditClick,l=(0,o.useState)(!1),u=(0,a.Z)(l,2),f=u[0],h=u[1],m=(0,o.useState)(null),x=(0,a.Z)(m,2),p=x[0],g=x[1],j=Boolean(p),b=function(){return g(null)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d.Z,{onClick:function(e){return g(e.currentTarget)}}),(0,Z.jsxs)(k.Z,{id:"basic-menu",anchorEl:p,open:j,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},sx:{borderRadius:"10px"},children:[(0,Z.jsx)(y.Z,{onClick:function(){c(),b()},children:t}),(0,Z.jsx)(y.Z,{onClick:function(){h(!0),b()},children:n})]}),(0,Z.jsx)(I,{title:"Delete Memory",confirm:f,handleCallback:s,handleCloseCallback:function(){return h(!1)},message:i}),r]})}var D=t(5899);function M(){return(M=(0,i.Z)((0,r.Z)().mark((function e(n,t,a,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.Z.deleteMemory(n,t,a);case 3:o=e.sent,i(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function R(e){var n,t=e.header,r=e.subheader,i=e.photoLayout,x=e.storyLayout,p=e.bucket,b=e.memoryID,k=e.authURL,y=e.handleEditClick,C=e.preview,w=(0,o.useState)(null),S=(0,a.Z)(w,2),z=S[0],E=S[1],I=(0,o.useState)(null),D=(0,a.Z)(I,2),R=D[0],U=D[1],T=(0,o.useState)(null),O=(0,a.Z)(T,2),L=O[0],F=O[1],B=(0,h.Z)();n=(0,m.Z)(B.breakpoints.down("lg"))?"":"vertical-scroll";var H=function(e,n){U(e),F(n)},Y=function(e){"ok"===e.status?H("Memory deleted successfully",!1):H("Error while deleting memory",!0),E(!0)},A=(0,Z.jsx)(j.Z,{snackBarOpen:z,message:R,onClose:function(){E(!1),U(null),F(null)},error:L}),N=C?(0,Z.jsx)(d.Z,{}):(0,Z.jsx)(P,{confirmMessage:"Do you want to delete this memory?",snackBar:A,handleDeleteObject:function(){!function(e,n,t,r){M.apply(this,arguments)}(p,k,b,Y)},deleteItem:(0,Z.jsx)(v,{}),updateItem:(0,Z.jsx)(g,{}),handleEditClick:y});return!1===z?(0,Z.jsx)(s.Fg,{to:"/memories",replace:!0}):(0,Z.jsxs)(c.Z,{sx:{boxShadow:0,bgcolor:"button.main",p:1},children:[(0,Z.jsx)(l.Z,{title:t,subheader:r,action:N}),(0,Z.jsx)(f.Z,{}),(0,Z.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",xs:"column"},height:{lg:"72vh"},my:1},children:[(0,Z.jsx)(u.Z,{sx:{width:{lg:"70%",xs:"100%"},overflowY:"scroll",borderRadius:5},className:n,children:i}),(0,Z.jsx)(u.Z,{sx:{width:{lg:"30%",sx:"100%"},overflowY:"scroll",mt:{lg:0,xs:2},p:{lg:1},px:1},className:n,children:x})]})]})}}}]);
//# sourceMappingURL=3.c6e29097.chunk.js.map