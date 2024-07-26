import{B as v,s as g,o as a,c as s,m as o,r as c,a as l,b as d,d as y,e as w,w as k,f as p,g as r,u,h as m,t as b}from"./app-BT67MAIW.js";import{u as $}from"./books-B5J2zA5Q.js";var B=function(n){var t=n.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},x={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},C=v.extend({name:"card",theme:B,classes:x}),S={name:"BaseCard",extends:g,style:C,provide:function(){return{$pcCard:this,$parentInstance:this}}},i={name:"Card",extends:S,inheritAttrs:!1};function z(e,n,t,h,f,A){return a(),s("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),s("div",o({key:0,class:e.cx("header")},e.ptm("header")),[c(e.$slots,"header")],16)):l("",!0),d("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),s("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),s("div",o({key:0,class:e.cx("title")},e.ptm("title")),[c(e.$slots,"title")],16)):l("",!0),e.$slots.subtitle?(a(),s("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[c(e.$slots,"subtitle")],16)):l("",!0)],16)):l("",!0),d("div",o({class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content")],16),e.$slots.footer?(a(),s("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[c(e.$slots,"footer")],16)):l("",!0)],16)],16)}i.render=z;const E={class:"flex md:flex-row flex-col gap-x-10 mt-4 lg:mx-96 md:mx-52"},N=d("img",{alt:"user header",src:"https://www.comunidadbaratz.com/wp-content/uploads/Sabes-cuales-son-los-libros-mas-vendidos-de-2017-a-traves-de-Internet-en-Espana.jpg"},null,-1),V={class:"m-0 text-9xl text-center text-blue-500"},L=d("img",{alt:"user header",src:"https://www.comunidadbaratz.com/wp-content/uploads/2023/04/Libros-mas-prestados-2022-bibliotecas-publicas-Espana.jpg"},null,-1),j={class:"m-0 text-9xl text-center text-blue-500"},P={__name:"DashBoard",setup(e){const n=$(),t=y({books:0,loanedBooks:0});return w(()=>{n.getTotalBooks()}),k(()=>{t.books=n.total.books,t.loanedBooks=n.total.loanedBooks}),(h,f)=>(a(),s("div",E,[p(u(i),{style:{width:"25rem",overflow:"hidden"}},{header:r(()=>[N]),title:r(()=>[m("Libros Registrados")]),content:r(()=>[d("p",V,b(t.books),1)]),_:1}),p(u(i),{style:{width:"25rem",overflow:"hidden"},class:""},{header:r(()=>[L]),title:r(()=>[m("Libros Prestados Actualmente")]),content:r(()=>[d("p",j,b(t.loanedBooks),1)]),_:1})]))}};export{P as default};
