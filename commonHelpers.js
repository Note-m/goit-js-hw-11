import{i,s as d}from"./assets/vendor-1d1bb5a2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f=a=>a.reduce((t,{tags:r,webformatURL:n,largeImageURL:e,likes:s,views:o,comments:l,downloads:u})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${n}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${o}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${l}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${u}</span>
        </div>
    </div>
</li>
    `,""),p="33935915-442e02dd22c1a8a84f5950f15",m="https://pixabay.com/api/",h=a=>{const t=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}/?${t}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},y=document.querySelector(".form-search"),c=document.querySelector(".gallery"),g=document.querySelector(".loader");function v(a){a.preventDefault();const t=a.target.elements.searchWords.value.trim();if(t==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",h(t).then(r=>{r.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=f(r.hits),new d(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(r=>console.log(r)).finally(()=>{g.classList.add("display-none")})}y.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
