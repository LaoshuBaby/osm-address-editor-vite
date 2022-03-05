var $=Object.defineProperty,N=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var I=(n,o,e)=>o in n?$(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,w=(n,o)=>{for(var e in o||(o={}))F.call(o,e)&&I(n,e,o[e]);if(S)for(var e of S(o))G.call(o,e)&&I(n,e,o[e]);return n},L=(n,o)=>N(n,A(o));import{j as k,r as t,d as g,o as q,p as z,c as P,M as B,t as J,a as K,m as D,S as T,L as C,G as W,R as V,b as X}from"./vendor.ac304dd1.js";const Y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}};Y();const r=k.exports.jsx,h=k.exports.jsxs,Q=()=>{const[n,o]=t.exports.useState(!1);t.exports.useEffect(()=>{o(g.exports.isLoggedIn())},[]);const e=t.exports.useCallback(()=>{(async()=>(await g.exports.login({mode:"popup",clientId:"q9sRK4UuNqv3_HLE8E7m2-wUAKS3XJSFWb9apehpAqE",scopes:["read_prefs","write_api","write_notes"],redirectUrl:window.location.href.replace(window.location.hash,"")}),o(g.exports.isLoggedIn()),window.location.reload()))()},[]),a=t.exports.useCallback(()=>{(async()=>(g.exports.logout(),o(!1)))()},[]);return r("div",{children:n?r("button",{onClick:a,children:"logout"}):r("button",{onClick:e,children:"login"})})};const Z=()=>{const[n,o]=t.exports.useState(!1),[e,a]=t.exports.useState(void 0);return t.exports.useEffect(()=>{o(g.exports.isLoggedIn())},[]),t.exports.useEffect(()=>{!n||(async()=>{const s=await g.exports.getUser("me");a(s)})()},[n]),r("div",{children:e?r("img",{src:e.img.href,alt:e.display_name,title:e.display_name}):r("img",{})})},ee=()=>{const[n,o]=t.exports.useState(!1),[e,a]=t.exports.useState(void 0);return t.exports.useEffect(()=>{o(g.exports.isLoggedIn())},[]),t.exports.useEffect(()=>{!n||(async()=>{const s=await g.exports.getUser("me");a(s)})()},[n]),h("div",{style:{zIndex:100,position:"relative",display:"flex",flexDirection:"row",backgroundColor:"rgba(0, 255, 255, 0.8)"},children:[h("div",{children:[r("h1",{style:{display:"inline",margin:"0px"},children:"OSM address editor"}),e?h("span",{style:{marginLeft:"10px"},children:["Hi ",e==null?void 0:e.display_name,", You have"," ",e==null?void 0:e.changesets.count," changesets."]}):r("span",{style:{marginLeft:"10px"},children:"Please logged in as OSM user."})]}),h("div",{style:{display:"flex",flex:1,justifyContent:"end"},children:[r(Z,{}),r(Q,{})]})]})},oe=()=>({fetchOverpass:t.exports.useCallback(async(o,e)=>{var m;console.log("overpass: loading...");let a="[out:json]";a+=`[timeout:25];
`,a+='way["building"="yes"]',a+=`(around:${300},${o},${e});
`,a+="out meta geom;",console.log(a);const l=await(await fetch(`https://lz4.overpass-api.de/api/interpreter?data=${encodeURIComponent(a)}`,{})).json();console.log(l),console.log("overpass: ",l.elements.length);const p=q(l);console.log("overpass geojson raw: ",p);for await(const u of p.features){if(u.properties||(u.properties={}),u.geometry.type==="Polygon"){const f=z(u.geometry.coordinates);var y=P(f);u.properties.center=y.geometry.coordinates}const d=u.properties.uid;if(d){let f=localStorage.getItem(d+"-icon");if(f===null){const x=await g.exports.getUser(d);((m=x.img)==null?void 0:m.href)?(f=x.img.href,localStorage.setItem(d+"-icon",x.img.href)):localStorage.setItem(d+"-icon","")}u.properties.userIconHref=f||""}}return console.log("overpass geojson converted: ",p),console.log("overpass: loaded."),p},[])}),te={id:"buildings-layer-fill",type:"fill",source:"buildings-source",paint:{"fill-color":"pink","fill-opacity":.4},filter:["==","$type","Polygon"]},se={id:"buildings-layer-icon",type:"symbol",source:"buildings-source",layout:{"icon-image":["coalesce",["image",["get","userIconHref"]],["image","fallbackImage"]]}};function re(){const[n,o]=t.exports.useState({}),e=t.exports.useRef(null),[a,s]=t.exports.useState({type:"FeatureCollection",features:[]}),[l,p]=t.exports.useState("auto"),[y,m]=t.exports.useState(),[u,d]=t.exports.useState(!1),{fetchOverpass:f}=oe();t.exports.useEffect(()=>{setTimeout(()=>{var i;console.log(window.location.hash),window.location.hash.endsWith("/0/0")&&(console.log("geolocateControlRef trigger"),(i=e.current)==null||i.trigger())},500)},[]);const x=t.exports.useCallback(i=>{const c=i.target.getCenter();(async()=>{if(!u){d(!0);const v=await f(c.lat,c.lng);s(v),d(!1)}})()},[]),M=t.exports.useCallback(i=>{o(i.viewState)},[]),j=t.exports.useCallback(i=>{o(i.viewState);const c=i.viewState;(async()=>{if(!u){d(!0);const v=await f(c.latitude,c.longitude);s(v),d(!1)}})()},[]),O=t.exports.useCallback(()=>p("pointer"),[]),E=t.exports.useCallback(()=>p("auto"),[]),H=t.exports.useCallback(i=>{const{features:c,point:{x:v,y:R}}=i,b=c&&c[0];m(b?{feature:b,x:v,y:R}:void 0)},[]),U=t.exports.useCallback(i=>{const c=i.features&&i.features[0];window.alert(JSON.stringify(c,null,2))},[]),_=t.exports.useMemo(()=>a.features.map((i,c)=>i.properties?r(B,{longitude:i.properties.center[0],latitude:i.properties.center[1],anchor:"bottom",children:i.properties.userIconHref.length>0?r("img",{src:i.properties.userIconHref,style:{width:"30px",height:"30px"}}):r("span",{dangerouslySetInnerHTML:{__html:J(i.properties.user||"noname",30)}})},`marker-${c}`):null),[a]);return h("div",{children:[r(ee,{}),h("div",{style:{zIndex:1,position:"absolute",top:0,left:0,height:"100vh",width:"100vw"},children:[r("div",{style:{position:"absolute",top:"50%",left:"50%",width:"5px",height:"5px",background:"rgba(0, 0, 0, 0.5)"}}),h(K,L(w({},n),{onMove:M,onMoveEnd:j,onLoad:x,interactiveLayerIds:["buildings-layer-fill"],onClick:U,onMouseEnter:O,onMouseLeave:E,onMouseMove:H,cursor:l,mapLib:D,hash:!0,style:{width:"100%",height:"100%"},mapStyle:"https://raw.githubusercontent.com/geoloniamaps/basic/gh-pages/style.json",children:[h(T,{id:"buildings-source",type:"geojson",data:a,children:[r(C,w({},te)),r(C,w({},se))]}),_,y&&r("div",{className:"tooltip",style:{zIndex:10,background:"rgba(255, 255, 255, 0.7)",padding:"5px",width:"250px",position:"absolute",left:y.x+5,top:y.y+5},children:r("pre",{children:JSON.stringify(y.feature.properties,null,2)})}),r(W,{ref:e,showUserLocation:!0,showAccuracyCircle:!1,trackUserLocation:!0,positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{zoom:17},position:"bottom-right"})]}))]})]})}V.render(r(X.StrictMode,{children:r(re,{})}),document.getElementById("root"));
