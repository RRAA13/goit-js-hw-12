import{a as q,S as M,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const R="55892968-2783f46f7c6177191ee022395",B="https://pixabay.com/api/",$=15;async function f(e,o){return(await q.get(B,{params:{key:R,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:$}})).data}const A=new M(".gallery a",{captionsData:"alt",captionDelay:250});function g(){return document.querySelector(".gallery")}function m(){return document.querySelector(".loader")}function p(){return document.querySelector(".load-more")}function h(e){const o=g(),s=e.map(({largeImageURL:c,webformatURL:t,tags:r,likes:i,views:S,comments:w,downloads:E})=>`
<li class="gallery-item">
  <a href="${c}">
    <img
      src="${t}"
      alt="${r}"
      class="gallery-image"
    />
  </a>

  <div class="info">
    <p><b>Likes:</b> ${i}</p>
    <p><b>Views:</b> ${S}</p>
    <p><b>Comments:</b> ${w}</p>
    <p><b>Downloads:</b> ${E}</p>
  </div>
</li>
`).join("");o.insertAdjacentHTML("beforeend",s),A.refresh()}function O(){const e=g();e.innerHTML=""}function y(){var e;(e=m())==null||e.classList.add("is-visible")}function b(){var e;(e=m())==null||e.classList.remove("is-visible")}function L(){var e;(e=p())==null||e.classList.add("is-visible")}function u(){var e;(e=p())==null||e.classList.remove("is-visible")}const v=document.querySelector(".form"),_=document.querySelector(".load-more");let l="",a=1,d=0;const P=15;v.addEventListener("submit",x);_.addEventListener("click",G);async function x(e){if(e.preventDefault(),l=e.currentTarget.elements.searchText.value.trim(),!!l){a=1,O(),u(),y();try{const o=await f(l,a);if(d=o.totalHits,!o.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits),Math.ceil(d/P)>1?L():(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error loading images",position:"topRight"})}finally{b(),v.reset()}}}async function G(){a+=1,y(),u();try{const e=await f(l,a);h(e.hits);const o=Math.ceil(d/P);a>=o?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L(),T()}catch{n.error({message:"Error loading images",position:"topRight"})}finally{b()}}function T(){const e=document.querySelector(".gallery-item");if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
