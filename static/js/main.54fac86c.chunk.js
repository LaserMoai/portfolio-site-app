(this["webpackJsonpportfolio-site-app"]=this["webpackJsonpportfolio-site-app"]||[]).push([[0],{17:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(12),o=n.n(a),r=(n(17),n(2)),l=n(3),d=n.n(l),s=n(5),b=n.n(s),h=n(0),m=function(){var e=Object(i.useState)("John Smith"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),o=Object(r.a)(a,2),s=o[0],m=o[1];return Object(h.a)("div",{css:{display:"flex",alignItems:"center",marginTop:8},children:Object(h.a)(d.a,{helperText:!s&&Object(h.a)(l.HelperText,{css:{fontSize:14,color:"#eb5757 !important"},children:"Can't contain special characters"}),trailingIcon:Object(h.a)(b.a,{role:"button",icon:s?"check_circle":"cancel"}),css:{height:"48px !important"},children:Object(h.a)(l.Input,{value:n,onChange:function(e){m(/^[A-Z a-z\u0410-\u042f\u0430-\u044f0-9-]*$/.test(e.currentTarget.value)),c(e.currentTarget.value)},isValid:s,css:{fontSize:"2.5em",fontWeight:500}})})})},u=function(e){var t=e.location,n=e.onLocationChange,c=Object(i.useState)(t),a=Object(r.a)(c,2),o=a[0],s=a[1];return Object(h.a)("div",{children:Object(h.a)(d.a,{trailingIcon:Object(h.a)(b.a,{role:"button",icon:"check_circle"}),children:Object(h.a)(l.Input,{value:o,onKeyDown:function(e){"Enter"===e.key&&n(o)},onBlur:function(){o&&n(o)},onChange:function(e){s(e.currentTarget.value)}})})})},p=n(7),f=function(e){var t=e.skills,n=e.onSkillsChange,c=Object(i.useState)(!1),a=Object(r.a)(c,2),o=a[0],s=a[1],m=Object(i.useState)(""),u=Object(r.a)(m,2),f=u[0],g=u[1],j=Object(i.useRef)(null),O=function(){n([].concat(Object(p.a)(t),[{id:t.length,name:f,years:0}]))},v=function(){if(j){var e=j.current.inputElement;e&&e.focus()}};return Object(h.b)("div",{css:{display:"flex","> div":{"&:not(.mdc-text-field)":{color:"#ffffff",backgroundColor:"#333333",fontSize:".875em",padding:".3em .6em",borderRadius:4,"&:last-of-type":{fontSize:"1.3em",padding:"0 .3em"},"&:hover":{backgroundColor:"#666666"}},"&:not(:first-of-type)":{marginLeft:".5em"}}},children:[t.map((function(e,i){return Object(h.b)("div",{css:{position:"relative","&:hover .material-icons":{display:"block"}},children:[e.name,Object(h.a)(b.a,{role:"button",icon:"cancel",onClick:function(){n([].concat(Object(p.a)(t.slice(0,i)),Object(p.a)(t.slice(i+1,t.length))))},css:{color:"#eb5757",backgroundColor:"#ffffff",fontSize:"1.4em",position:"absolute",top:-11,right:-11,borderRadius:"50%",cursor:"pointer",display:"none"}})]},e.id)})),Object(h.a)(d.a,{trailingIcon:Object(h.a)(b.a,{role:"button",icon:"check_circle"}),css:{display:!o&&"none"},children:Object(h.a)(l.Input,{value:f,ref:j,onKeyDown:function(e){"Enter"===e.key&&(O(),s(!1),g(""))},onBlur:function(){f&&O(),s(!1),g("")},onChange:function(e){return e.currentTarget&&g(e.currentTarget.value)}})}),Object(h.a)("div",{onClick:function(){s(!0),setTimeout(v,0)},css:{display:o&&"none",cursor:"pointer"},children:"+"})]})},g=n.p+"static/media/subject.7e0d0373.png",j=n.p+"static/media/reload-icon.56adb455.svg",O=function(e){var t=e.skills,n=e.onSkillsChange,i=e.location,c=e.onLocationChange;return Object(h.a)("div",{css:{background:"#f0f1f3",paddingTop:"2.5em",paddingBottom:"1em"},children:Object(h.b)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center","@media all and (min-width: 768px)":{flexDirection:"row",alignItems:"flex-start"}},children:[Object(h.b)("div",{css:{marginRight:"1.5em",position:"relative","&:before":{content:"''",position:"absolute",top:3,left:3,right:3,bottom:9,borderRadius:"50%"},"&:hover:before":{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"},"&:hover .photo-icon":{opacity:1}},children:[Object(h.a)("img",{src:g,alt:"Subject"}),Object(h.a)("div",{className:"photo-icon",css:{position:"absolute",top:10,right:10,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",backgroundColor:"#3483CC",opacity:0,cursor:"pointer"},children:Object(h.a)("img",{src:j,alt:""})})]}),Object(h.b)("div",{css:{"> *:not(:last-child)":{marginBottom:14}},children:[Object(h.a)(m,{}),Object(h.a)(u,{location:i,onLocationChange:c}),Object(h.a)("div",{children:"\ud83c\uddec\ud83c\udde7 English"}),Object(h.a)(f,{skills:t,onSkillsChange:n})]}),Object(h.b)("a",{href:"./",onClick:window.print,css:{order:-1,marginLeft:0,display:"flex",alignItems:"center","@media all and (min-width: 768px)":{order:0,marginLeft:"auto"},svg:{color:"#b3bac0"},"&:hover svg":{color:"#EB5757"},"&:active svg":{color:"#c74343"}},children:[Object(h.a)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",css:{display:"block",marginRight:".5em"},children:Object(h.a)("path",{d:"M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z",fill:"currentColor"})}),"Print\xa0this\xa0page"]})]})})},v=function(e){var t=e.skill,n=(e.index,e.onYearsValueChange),c=Object(i.useState)(!1),a=Object(r.a)(c,2),o=a[0],s=a[1],b=Object(i.useState)(t.years),m=Object(r.a)(b,2),u=m[0],p=m[1],f=Object(i.useRef)(null),g=function(){if(f){var e=f.current.inputElement;e&&e.focus()}};return Object(h.b)("li",{children:[Object(h.a)("strong",{css:{marginRight:".5em"},children:t.name}),o?Object(h.a)(d.a,{children:Object(h.a)(l.Input,{type:"number",lang:"ru",step:"0.1",value:u,ref:f,onKeyDown:function(e){"Enter"===e.key&&(s(!1),n(u))},onBlur:function(e){s(!1),n(u)},onChange:function(e){return p(e.currentTarget.value)},css:{maxWidth:50}})}):Object(h.a)("span",{lang:"ru",onClick:function(){p(t.years),s(!0),setTimeout(g,0)},className:"link",css:{borderBottom:"1px dashed #3483CC",cursor:"pointer","&:hover, &:active":{borderBottomColor:"transparent"}},children:"".concat(t.years," year").concat(1!==t.years?"s":"")})]},t.id)},x=n.p+"static/media/opening-quote.ab3aca3c.svg",C=n.p+"static/media/closing-quote.be6b51bc.svg",y=function(e){var t=e.text,n=e.maxWidth;return Object(h.a)("div",{css:{display:"flex",justifyContent:"center"},children:Object(h.a)("blockquote",{css:{maxWidth:n,textAlign:"center",position:"relative","&:before":{content:"url(".concat(x,")"),position:"absolute",top:-15,left:-45},"&:after":{content:"url(".concat(C,")"),position:"absolute",bottom:-15,right:-45}},children:t})})},k=function(e){var t=e.skills,n=e.onSkillsChange,i=e.location,c={listStyleType:"none",paddingLeft:0,li:{display:"flex",":not(:first-of-type)":{marginTop:".7em"},"&:before":{content:"'\u2013'",marginRight:".5em"}}};return Object(h.a)("div",{css:{paddingTop:"2.5em",paddingBottom:"2.5em"},children:Object(h.b)("div",{css:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:25,"@media all and (min-width: 768px) and (max-width: 1280px)":{gridTemplateColumns:"repeat(2, 1fr)"},"@media all and (min-width: 1280px)":{gridTemplateColumns:"repeat(4, 1fr)"}},children:[Object(h.b)("div",{children:[Object(h.a)("h2",{children:"Portfolio"}),Object(h.b)("ul",{css:c,children:[Object(h.a)("li",{children:Object(h.a)("a",{href:"./",children:"Bootstrap 4 Material Design (Sample Link)"})}),Object(h.a)("li",{children:Object(h.a)("a",{href:"./",children:"Modern JavaScript stack"})}),Object(h.a)("li",{children:Object(h.a)("a",{href:"./",children:"Datepicker for twitter bootstrap"})}),Object(h.a)("li",{children:Object(h.a)("a",{href:"./",children:"Fast and reliable Bootstrap widgets in Angular"})})]})]}),Object(h.b)("div",{children:[Object(h.a)("h2",{children:"Experience"}),Object(h.a)("ul",{css:c,children:t.map((function(e,i){return Object(h.a)(v,{skill:e,index:i,onYearsValueChange:function(e){var c=Object(p.a)(t);c[i].years=+e,n(c)}})}))})]}),Object(h.b)("div",{children:[Object(h.a)("h2",{children:"Sample code"}),Object(h.b)("div",{css:{display:"flex",backgroundColor:"#f0f1f2",padding:"1em",borderRadius:8,fontSize:".75em"},children:[Object(h.b)("div",{css:{fontFamily:"'Roboto Mono', monospace",color:"#787979",marginRight:"1em",lineHeight:1.66},children:["1.",Object(h.a)("br",{}),"2.",Object(h.a)("br",{}),"3.",Object(h.a)("br",{}),"4.",Object(h.a)("br",{}),"5.",Object(h.a)("br",{}),"6.",Object(h.a)("br",{})]}),Object(h.a)("div",{children:Object(h.a)("pre",{css:{margin:0},children:Object(h.b)("code",{css:{fontFamily:"'Roboto Mono', monospace",lineHeight:1.66},children:["<",Object(h.a)("span",{css:{color:"#FF0000"},children:"div"}),"\xa0",Object(h.a)("span",{css:{color:"#aa3637"},children:"class"}),"='",Object(h.a)("span",{css:{color:"#299429"},children:"golden-grid"}),"'> ",Object(h.a)("br",{}),"\xa0\xa0\xa0\xa0<",Object(h.a)("span",{css:{color:"#FF0000"},children:"div"}),"\xa0",Object(h.a)("span",{css:{color:"#aa3637"},children:"style"}),"='",Object(h.a)("span",{css:{color:"#299429"},children:"grid-area:"})," ",Object(h.a)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(h.a)("span",{css:{color:"#299429"},children:"11\xa0/\xa01\xa0/\xa0span\xa010\xa0/\xa0span"})," ",Object(h.a)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(h.a)("span",{css:{color:"#299429"},children:"12;"}),"'> ",Object(h.a)("br",{}),"\xa0\xa0\xa0\xa0</",Object(h.a)("span",{css:{color:"#FF0000"},children:"div"}),"> ",Object(h.a)("br",{}),"</",Object(h.a)("span",{css:{color:"#FF0000"},children:"div"}),"> ",Object(h.a)("br",{})]})})})]})]}),Object(h.b)("div",{children:[Object(h.a)("h2",{children:"Availability"}),"Full-time",Object(h.a)("h3",{children:"Preferred environment"}),"GitHub, Mac OS X"]}),Object(h.b)("div",{children:[Object(h.a)("h2",{css:{marginTop:0,marginBottom:"2em"},children:"The most amazing..."}),Object(h.a)(y,{text:"The only true wisdom is in knowing you know nothing...",maxWidth:220})]}),Object(h.b)("div",{children:[Object(h.a)("h2",{css:{marginTop:0,marginBottom:"2em"},children:"In clients I look for..."}),Object(h.a)(y,{text:"There is only one good, knowledge, and one evil, ignorance.",maxWidth:180})]}),Object(h.a)("div",{css:{gridColumn:"1 / span 1","@media all and (min-width: 768px) and (max-width: 1280px)":{gridColumn:"1 / span 2"},"@media all and (min-width: 1280px)":{gridColumn:"3 / span 2"}},children:Object(h.a)("iframe",{css:{border:0,width:"100%",height:200},loading:"lazy",allowfullscreen:!0,src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyAD8OciY2iU6Cl3ghbq4SwyaeX9O1d8ZOY&q=".concat(encodeURIComponent(i))})})]})})};n(26),n(27);var w=function(){var e=Object(i.useState)("Portand, Oregon, USA"),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([{id:0,name:"PHP",years:6},{id:2,name:"JavaScript",years:4.5},{id:1,name:"Ruby",years:2}]),o=Object(r.a)(a,2),l=o[0],d=o[1],s=function(e){d(e.sort((function(e,t){return t.years-e.years})))};return Object(h.b)("div",{css:{fontFamily:"'Roboto', sans-serif",h2:{fontSize:"1.5em",fontWeight:500},h3:{fontSize:"1.25em",fontWeight:500},"a, .link":{color:"#3483CC",textDecorationLine:"none","&:hover":{color:"#EB5757"},"&:active":{color:"#c74343"}},"> *":{display:"flex",justifyContent:"center",paddingLeft:"2em",paddingRight:"2em","> *":{"@media all and (min-width: 768px) and (max-width: 1280px)":{width:600},"@media all and (min-width: 1280px)":{width:1130}}},".mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea)":{height:24,backgroundColor:"transparent","&.mdc-text-field--focused":{".mdc-text-field__icon":{color:"#33c127 !important"}},"&.mdc-text-field--invalid":{".mdc-text-field__icon":{color:"#eb5757 !important"}},"&:not(.mdc-text-field--focused)":{".mdc-text-field__input":{borderBottomColor:"transparent !important"}},"&.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input":{padding:0},"&.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input":{borderBottomColor:"#eb5757"},".mdc-text-field__input":{backgroundColor:"transparent","&:hover":{backgroundColor:"#e2e3e3"}},".mdc-text-field__icon":{fontSize:"1.1em",top:"50%",bottom:"initial",transform:"translateY(-50%)",color:"transparent !important"}},".mdc-text-field .mdc-line-ripple":{backgroundColor:"#000000"},".mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple":{backgroundColor:"#EB5757"}},children:[Object(h.a)(O,{skills:l,onSkillsChange:s,location:n,onLocationChange:c}),Object(h.a)(k,{skills:l,onSkillsChange:s,location:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},T=n(4);o.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(w,{})}),document.getElementById("root")),S()}},[[28,1,2]]]);
//# sourceMappingURL=main.54fac86c.chunk.js.map