import{b as u,C as g,v as _,o as s,f as o,h as e,t as d,F as h,l as b,i as x,w as k,p as f,j as v,q as y}from"./entry.bb66115f.js";const w=""+new URL("shape.b3812e7e.png",import.meta.url).href,L=""+new URL("shape-dark.ce66f7d4.png",import.meta.url).href,N={class:"pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('~/assets/images/home/page-title.png')] bg-center bg-cover relative"},V={class:"container mx-auto"},j={class:"grid"},B={class:"col-span-12"},C={class:"text-center text-white"},R={class:"mb-4 text-[26px]"},T={class:"page-next"},A={class:"inline-block","aria-label":"breadcrumb text-center"},F={class:"flex flex-wrap justify-center text-sm font-medium uppercase"},S={key:0,class:"bx bxs-chevron-right align-middle px-2.5"},U=e("img",{src:w,alt:"",class:"absolute block bg-cover -bottom-0 dark:hidden"},null,-1),q=e("img",{src:L,alt:"",class:"absolute hidden bg-cover -bottom-0 dark:block"},null,-1),E={__name:"breadcrumbs",props:{pageTitle:{type:String,default:"Alphajiri Jobs"},items:{type:Array,default:()=>[]}},setup(a){const r=u(),c=a,p=g(()=>t=>t===c.items.length-1);return _(r,()=>{const t=c.items.find(n=>n.to===r.path);t&&t.action&&t.action()}),(t,n)=>{const m=y;return s(),o("section",N,[e("div",V,[e("div",j,[e("div",B,[e("div",C,[e("h3",R,d(a.pageTitle),1),e("div",T,[e("nav",A,[e("ol",F,[(s(!0),o(h,null,b(a.items,(i,l)=>(s(),o("li",{key:l},[x(m,{to:i.to},{default:k(()=>[f(d(i.label)+" ",1),p.value(l)?v("",!0):(s(),o("i",S))]),_:2},1032,["to"])]))),128))])])])])])])]),U,q])}}};export{E as _};