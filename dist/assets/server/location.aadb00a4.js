import{F as s,j as o,a as n}from"../static/jsx-runtime-fc04c7af.js";import"../static/index-4683034e.js";const d={stream:{$id:"shoes-location1",fields:["id","uid","meta","name","description"],filter:{entityTypes:["ce_shoes"]},localization:{locales:["en"],primary:!1}}},g=({document:e})=>e.slug?e.slug:`${e.locale}/${e.address.region}/${e.address.city}/${e.address.line1}-${e.id.toString()}`,p=({document:e})=>[`index-old/${e.id.toString()}`],h=({relativePrefixToRoot:e,path:i,document:t})=>({title:t.name,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"meta",attributes:{name:"description",content:t.description}},{type:"link",attributes:{rel:"icon",type:"image/x-icon",href:s}}]}),f=({relativePrefixToRoot:e,path:i,document:t})=>{const{name:a,description:r}=t;return o(n,{children:[a,r]})};export{d as config,f as default,h as getHeadConfig,g as getPath,p as getRedirects};
