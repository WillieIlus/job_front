import{_ as v}from"./breadcrumbs.15c6863e.js";import{s as b,k as x,e as _,r as g,f as l,i,h as e,F as n,l as k,u as o,t as s,m as y,o as d,w,p as f,q as P}from"./entry.bb66115f.js";import{u as C}from"./categories.e4722b82.js";const N={class:"main-content"},T={class:"page-content"},B={class:"py-20"},S={class:"container mx-auto"},V=y('<div class="grid grid-cols-12 gap-y-10 lg:gap-10"><div class="col-span-12 lg:col-span-6 lg:col-start-4"><div class="mb-5 text-center"><h4 class="mt-2 text-gray-900 text-22 dark:text-white">Explore Jobs by Categories</h4><p class="mt-2 text-gray-500 dark:text-gray-300">Dive into diversity: Your dream job awaits in every category.</p></div></div></div>',1),$={class:"grid grid-cols-12 gap-y-5 md:gap-8"},j={class:"mt-4 rounded bg-gray-50 dark:bg-neutral-700"},D={class:"px-4 py-2 bg-white rounded dark:bg-neutral-600"},E={class:"px-2 py-1 rounded bg-sky-500/20 text-11 text-sky-500 ltr:float-right rtl:float-left"},F={class:"pb-20"},L={class:"container mx-auto"},R={class:"grid grid-cols-12"},q={class:"col-span-12 lg:col-span-8 lg:col-start-3"},H={class:"text-center"},J={class:"flex justify-center gap-3 mt-8"},M=["disabled"],Y=["disabled"],te={__name:"index",setup(z){const t=C(),{categories:A,loading:G,error:I,paginatedCategories:c,totalPages:K,currentPage:O,setCurrentPage:Q}=b(t);x(),_(()=>{t.fetchCategories()});const h=g([{label:"Home",to:"/"},{label:"Categories",to:"/categories"}]),u=g("Categories");return(U,a)=>{const p=v,m=P;return d(),l(n,null,[i(p,{items:h.value,pageTitle:u.value},null,8,["items","pageTitle"]),e("div",N,[e("div",T,[e("section",B,[e("div",S,[V,e("div",$,[(d(!0),l(n,null,k(o(c),(r,W)=>(d(),l("div",{key:r.id,class:"col-span-12 md:col-span-6 xl:col-span-4"},[e("ul",j,[e("li",D,[i(m,{to:`/categories/${r.slug}`,class:"text-gray-900 dark:text-white"},{default:w(()=>[f(s(r.name)+" ",1),e("span",E,s(r.job_count),1)]),_:2},1032,["to"])])])]))),128))])])]),e("section",F,[e("div",L,[e("div",R,[e("div",q,[e("div",H,[e("div",J,[e("button",{class:"btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20",onClick:a[0]||(a[0]=r=>o(t).setCurrentPage(o(t).currentPage-1)),disabled:o(t).currentPage===1},"Previous",8,M),e("span",null,s(o(t).currentPage)+" / "+s(o(t).totalPages),1),e("button",{class:"btn border group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 group-data-[theme-color=violet]:border-violet-500 group-data-[theme-color=sky]:border-sky-500 group-data-[theme-color=red]:border-red-500 group-data-[theme-color=green]:border-green-500 group-data-[theme-color=pink]:border-pink-500 group-data-[theme-color=blue]:border-blue-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 group-data-[theme-color=violet]:hover:text-white group-data-[theme-color=sky]:hover:text-white group-data-[theme-color=red]:hover:text-white group-data-[theme-color=green]:hover:text-white group-data-[theme-color=pink]:hover:text-white group-data-[theme-color=blue]:hover:text-white hover:ring group-data-[theme-color=violet]:hover:ring-violet-500/20 group-data-[theme-color=sky]:hover:ring-sky-500/20 group-data-[theme-color=green]:hover:ring-green-500/20 group-data-[theme-color=pink]:hover:ring-pink-500/20 group-data-[theme-color=blue]:hover:ring-blue-500/20",onClick:a[1]||(a[1]=r=>o(t).setCurrentPage(o(t).currentPage+1)),disabled:o(t).currentPage===o(t).totalPages},"Next",8,Y)])])])])])])])])],64)}}};export{te as default};
