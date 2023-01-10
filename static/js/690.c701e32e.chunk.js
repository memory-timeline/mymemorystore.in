"use strict";(self.webpackChunkprelaunch=self.webpackChunkprelaunch||[]).push([[690],{1001:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2169),a=n(9504),i=n(9585),o=n(890),s=n(6608),c=n(184);function l(e){var t=e.imageSrc,n=e.imageSrcSet,a=e.title,i=e.handleImageLoad;return(0,c.jsx)(r.Z,{component:"img",src:t,srcSet:n,alt:a,sx:{borderColor:"muted.main",borderRadius:4,textAlign:"center",objectFit:"cover",height:{lg:270,sm:220,xs:170}},onLoad:i})}function u(e){var t=e.title,n=e.date;return(0,c.jsx)(a.Z,{children:(0,c.jsx)(i.Z,{disableTypography:!0,title:(0,c.jsx)(o.Z,{noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",width:{xs:"calc(75%)",sm:"calc(100%)"},fontWeight:600},children:t}),subheader:(0,c.jsx)(o.Z,{sx:{color:"muted.main"},children:n}),sx:{padding:0,color:"faded.black"}})})}function d(e){var t=e.title,n=e.date,r=e.thumbnailImage,a=e.thumbnailImageSrcSet,i=e.handleClick,o=e.handleImageLoad;return(0,c.jsxs)(s.Z,{handleClick:i,children:[(0,c.jsx)(l,{imageSrc:r,imageSrcSet:a,title:t,handleImageLoad:o}),(0,c.jsx)(u,{title:t,date:n})]})}u.defaultProps={title:"Memory Thumbnail Image",date:"Memory Date"},l.defaultProps={title:"Memory Thumbnail Image",imageSrc:"",imageSrcSet:"",handleImageLoad:function(){}},d.defaultProps={thumbnailImageSrcSet:"",handleImageLoad:function(){}}},6608:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7621),a=n(6647),i=n(184);function o(e){var t=e.handleClick,n=e.children;return(0,i.jsx)(a.Z,{onClick:t,children:(0,i.jsx)(r.Z,{elevation:0,sx:{bgcolor:"#fff",borderRadius:5,border:"2px solid gray",color:"black",position:"relative",height:{lg:350,sm:300,xs:250},"&:hover":{border:3,borderColor:"secondary.main",elevation:0}},children:n})})}},1690:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(4165),a=n(9439),i=n(5861),o=n(2791),s=n(1889),c=n(4554),l=n(3402),u=n(8806),d=n(7689),h=n(1001),m=n(5193),f=n(890),g=n(8054),p=n(6608),v=n(184);function x(){var e=(0,d.s0)(),t=(0,m.Z)((function(e){return e.breakpoints.down("md")}));return(0,v.jsx)(s.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsxs)(p.Z,{handleClick:function(){e("/memory/create")},children:[(0,v.jsx)(f.Z,{variant:t?"body1":"h5",color:"button.main",sx:{p:1,color:"secondary.main",bgcolor:"primary.main",borderRadius:"0px 10px 10px 0px",borderColor:"secondary.main",position:"absolute",bottom:15,left:0},children:"Create a memory"}),(0,v.jsx)(g.Z,{sx:{position:"absolute",border:3,borderRadius:"50%",fontSize:"7.5rem",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"muted.main"}})]})},"creatememory")}function b(e){var t=e.handleMoreClick;return(0,v.jsx)(s.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsx)(p.Z,{handleClick:t,children:(0,v.jsx)(f.Z,{variant:"h5",sx:{p:2,color:"secondary.main",bgcolor:"primary.main",borderRadius:{md:10,xs:"50%"},borderColor:"secondary.main",position:"absolute",bottom:"50%",left:"50%",transform:"translate(-50%, +50%)",textAlign:"center"},children:"Load More"})})},"creatememory")}function Z(e){var t=e.memories,n=e.handleMoreClick,r=e.nextToken,a=e.handleImageLoad,i=(0,d.s0)(),o=t.sort((function(e,t){return e.memory_id>t.memory_id?1:-1}));return(0,v.jsxs)(s.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,v.jsx)(x,{}),o.map((function(e){return(0,v.jsx)(s.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsx)(h.Z,{title:e.title,date:e.date,thumbnailImage:e.photo.src,thumbnailImageSrcSet:(t=e.photo,(t.images?t.images.map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})):[]).join(",")),handleClick:function(){var t;i("/memory/".concat((t=e).memory_id),{state:t})},handleImageLoad:a})},e.title);var t})),r&&(0,v.jsx)(b,{handleMoreClick:n})]})}Z.defaultProps={memories:[]};var y=n(5899),C=n(7846);function k(e,t,n,r,a){return w.apply(this,arguments)}function w(){return w=(0,i.Z)((0,r.Z)().mark((function e(t,n,a,i,o){var s,c,l,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>5&&void 0!==u[5]?u[5]:"",e.prev=1,e.next=4,y.Z.getMemories(t,n,s);case 4:if(!(c=e.sent)){e.next=13;break}if(!c.memories){e.next=13;break}return o(c.memories),e.next=10,Promise.all(y.Z.getThumbnails(t,n,c.memories));case 10:l=e.sent,a(l),i(c.next_continuation_token||"");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),w.apply(this,arguments)}function j(e){var t=e.bucket,n=e.authURL,r=(0,o.useState)(""),i=(0,a.Z)(r,2),d=i[0],m=i[1],f=(0,o.useState)([]),g=(0,a.Z)(f,2),p=g[0],b=g[1],y=(0,o.useState)([]),w=(0,a.Z)(y,2),j=w[0],S=w[1],M=(0,o.useState)(0),R=(0,a.Z)(M,2),A=R[0],I=R[1],P=(0,o.useState)(null),L=(0,a.Z)(P,2),N=L[0],H=L[1],T=function(){I((function(e){return e+1}))},V=function(e){return m(e)},F=function(e){S((function(t){return t.concat(e)}))},_=function(e){b((function(t){return t.concat(e)}))};return(0,o.useEffect)((function(){k(t,n,F,V,_,d)}),[]),(0,o.useEffect)((function(){return function(){var e=(0,v.jsx)(u.Z,{children:(0,v.jsx)(Z,{memories:j,nextToken:d,handleMoreClick:function(){return k(t,n,F,V,_,d)},handleImageLoad:T})});H(e)}()}),[j,d]),j.length===p.length&&A>=p.length?N:(0,v.jsxs)(u.Z,{children:[(0,v.jsxs)(s.ZP,{container:!0,sx:{bgcolor:"button.main",py:1},justifyContent:"left",alignItems:"flex-start",children:[(0,v.jsx)(x,{}),p.map((function(e){return(0,v.jsx)(s.ZP,{item:!0,lg:3,md:4,xs:6,sx:{p:1},children:(0,v.jsx)(h.Z,{title:(0,v.jsx)(l.Z,{type:"rectangular",sx:{width:"60%"}}),date:(0,v.jsx)(l.Z,{type:"rectangular",sx:{width:"50%"}}),thumbnailImage:C,handleClick:function(){}})},e)}))]}),(0,v.jsx)(c.Z,{component:"div",sx:{display:"none"},children:N})]})}},8054:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");t.Z=o},6647:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(4942),a=n(7462),i=n(3366),o=n(2791),s=n(8182),c=n(4419),l=n(3736),u=n(7630),d=n(5878),h=n(1217);function m(e){return(0,h.Z)("MuiCardActionArea",e)}var f=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),g=n(7479),p=n(184),v=["children","className","focusVisibleClassName"],x=(0,u.ZP)(g.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(t,"&:hover .".concat(f.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(t,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),t})),b=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),Z=o.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardActionArea"}),r=n.children,o=n.className,u=n.focusVisibleClassName,d=(0,i.Z)(n,v),h=n,f=function(e){var t=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},m,t)}(h);return(0,p.jsxs)(x,(0,a.Z)({className:(0,s.Z)(f.root,o),focusVisibleClassName:(0,s.Z)(u,f.focusVisible),ref:t,ownerState:h},d,{children:[r,(0,p.jsx)(b,{className:f.focusHighlight,ownerState:h})]}))}))},3402:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(168),a=n(3366),i=n(7462),o=n(2791),s=n(8182),c=n(2554),l=n(4419),u=n(1572),d=n(2065),h=n(7630),m=n(3736),f=n(5878),g=n(1217);function p(e){return(0,g.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,x,b,Z,y,C,k,w,j=n(184),S=["animation","className","component","height","style","variant","width"],M=(0,c.F4)(y||(y=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,c.F4)(C||(C=x||(x=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,u.Wy)(t.shape.borderRadius)||"px",a=(0,u.YL)(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(k||(k=b||(b=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),M)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,c.iv)(w||(w=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(n.vars||n).palette.action.hover)})),I=o.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,c=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,f=n.style,g=n.variant,v=void 0===g?"text":g,x=n.width,b=(0,a.Z)(n,S),Z=(0,i.Z)({},n,{animation:o,component:d,variant:v,hasChildren:Boolean(b.children)}),y=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,s={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,l.Z)(s,p,t)}(Z);return(0,j.jsx)(A,(0,i.Z)({as:d,ref:t,className:(0,s.Z)(y.root,c),ownerState:Z},b,{style:(0,i.Z)({width:x,height:h},f)}))}))},7846:function(e,t,n){e.exports=n.p+"static/media/image-loading.b17d2768891dfe3ceb9d.gif"}}]);
//# sourceMappingURL=690.c701e32e.chunk.js.map