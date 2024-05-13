import{i,s as d}from"./assets/vendor-1d1bb5a2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=a=>a.reduce((s,{tags:t,webformatURL:o,largeImageURL:e,likes:r,views:n,comments:l,downloads:u})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
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
    `,""),p="33935915-442e02dd22c1a8a84f5950f15",m="https://pixabay.com/api/",h=a=>{const s=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}/?${s}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})},y=document.querySelector(".form-search"),c=document.querySelector(".gallery"),g=document.querySelector(".loader");function v(a){a.preventDefault();const s=a.target.elements.searchWords.value.trim();if(s==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",h(s).then(t=>{t.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=f(t.hits),new d(".gallery a",{captionsData:"alt",captionsDelay:250}),builder.refresh()}).finally(()=>{g.classList.add("display-none")})}y.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
