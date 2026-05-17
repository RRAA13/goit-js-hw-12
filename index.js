import{a as E,S as B,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const M="55892968-2783f46f7c6177191ee022395",R="https://pixabay.com/api/",$=15;async function f(e,r){return(await E.get(R,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:$}})).data}const A=new B(".gallery a",{captionsData:"alt",captionDelay:250});function m(){return document.querySelector(".gallery")}function g(){return document.querySelector(".loader")}function p(){return document.querySelector(".load-more")}function y(e){const r=m(),n=e.map(({largeImageURL:a,webformatURL:t,tags:o,likes:i,views:w,comments:P,downloads:q})=>`
<li class="gallery-item">
  <a href="${a}">
    <img
      src="${t}"
      alt="${o}"
      class="gallery-image"
    />
  </a>

  <div class="info">
    <p><b>Likes:</b> ${i}</p>
    <p><b>Views:</b> ${w}</p>
    <p><b>Comments:</b> ${P}</p>
    <p><b>Downloads:</b> ${q}</p>
  </div>
</li>
`).join("");r.insertAdjacentHTML("beforeend",n),A.refresh()}function O(){const e=m();e.innerHTML=""}function h(){var e;(e=g())==null||e.classList.add("is-visible")}function b(){var e;(e=g())==null||e.classList.remove("is-visible")}function L(){var e;(e=p())==null||e.classList.add("is-visible")}function u(){var e;(e=p())==null||e.classList.remove("is-visible")}const v=document.querySelector(".form"),_=document.querySelector(".load-more");let c="",s=1,d=0;const S=15;v.addEventListener("submit",x);_.addEventListener("click",G);async function x(e){if(e.preventDefault(),c=e.currentTarget.elements.searchText.value.trim(),!!c){s=1,O(),u(),h();try{const r=await f(c,s);if(d=r.totalHits,!r.hits.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits),d>S?L():u()}catch{l.error({message:"Something went wrong",position:"topRight"})}finally{b(),v.reset()}}}async function G(){s+=1,h(),u();try{const e=await f(c,s);y(e.hits);const r=Math.ceil(d/S);s>=r?(u(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L(),T()}catch{l.error({message:"Error loading more images",position:"topRight"})}finally{b()}}function T(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
