(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{7228:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/champion-gallery",function(){return t(1341)}])},1341:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var i=t(7297),r=t(5893),o=t(7294),c=t(5675),a=t.n(c),s=t(9521),l=t(4529),u=t(1381);let d=n=>({counterChampion:0,ownedChampions:[],increaseCounter:()=>{n(n=>{n.counterChampion=n.counterChampion+1})},decreaseCounter:()=>{n(n=>{n.counterChampion=n.counterChampion-1})},updateOwnedChampion:e=>{n(n=>{n.ownedChampions.push(e)})}}),h=(0,l.Ue)((0,u.n)(d));function p(){let n=(0,i.Z)(["\n  position: relative;\n  border: solid red;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  p {\n    width: 100%;\n    text-align: center;\n    background-color: #00000080;\n    font-size: 1.3rem;\n    position: absolute;\n    top: 0;\n    z-index: 2;\n  }\n\n  button {\n    position: absolute;\n    bottom: 1em;\n    width: 60%;\n    height: 10%;\n    z-index: 2;\n  }\n"]);return p=function(){return n},n}function f(n){let{champion:e}=n,[t,i]=(0,o.useState)(!1),[c,s]=h(n=>[n.increaseCounter,n.decreaseCounter]),l="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/".concat(e.key,"/").concat(e.skins[0].id,".jpg");return"/champion-tiles/".concat(e.key,"/").concat(e.key,"000.jpg"),(0,r.jsxs)(m,{children:[(0,r.jsx)("p",{children:e.name}),t?(0,r.jsx)(a(),{src:l,height:250,width:250,alt:"".concat(e.id," default tile"),priority:!0}):(0,r.jsx)(a(),{src:l,height:250,width:250,alt:"".concat(e.id," default tile"),style:{filter:"grayscale(100%)"},priority:!0}),(0,r.jsx)("button",{type:"button",onClick:t?function(){i(!1),s()}:function(){i(!0),c()},children:t?"Remove":"Collect"})]})}let m=s.ZP.li.withConfig({componentId:"sc-c84ffa5b-0"})(p());var x=t(9008),j=t.n(x),g=t(1664),w=t.n(g);function y(n){let{children:e}=n;return(0,r.jsxs)("header",{children:[(0,r.jsx)("h1",{children:e}),(0,r.jsx)(w(),{href:"/",children:"← Home"})]})}function C(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n\n  h2 {\n    text-align: center;\n  }\n\n  p {\n    text-align: center;\n  }\n\n  div {\n    border: solid rgb(var(--foreground-rgb));\n    padding: 0.5rem;\n  }\n\n  ul {\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    gap: 1rem;\n  }\n"]);return C=function(){return n},n}function b(){let[n]=h(n=>[n.counterChampion]),[e,t]=(0,o.useState)([]),[i,c]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async function(){try{let n=await fetch("/versions.json");if(!n.ok)throw Error("Network error! status: ".concat(n.status));let e=await n.json();t(e);let i=await fetch("/championFull.json");if(!i.ok)throw Error("Network error! status: ".concat(i.status));let r=await i.json();try{c(Object.values(r.data).sort((n,e)=>n.name<e.name?-1:n.name>e.name?1:0))}catch(n){console.error("Error handling JSON:",n)}}catch(n){console.error("Error fetching data:",n)}})()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j(),{children:[(0,r.jsx)("title",{children:"Champion Gallery"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(y,{children:"Champion Gallery"}),(0,r.jsxs)(k,{children:[(0,r.jsx)("h2",{children:"Champions"}),(0,r.jsxs)("h3",{children:["Version: ",e[0]]}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"".concat(n," of ").concat(i.length)})}),(0,r.jsx)("ul",{children:i.map(n=>(0,r.jsx)(f,{champion:n},n.id))})]})]})}let k=s.ZP.main.withConfig({componentId:"sc-8b71bbcc-0"})(C())}},function(n){n.O(0,[504,774,888,179],function(){return n(n.s=7228)}),_N_E=n.O()}]);