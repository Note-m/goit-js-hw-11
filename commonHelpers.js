import{i,s as p}from"./assets/vendor-1d1bb5a2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const m=a=>a.reduce((t,{tags:r,webformatURL:n,largeImageURL:e,likes:s,views:o,comments:u,downloads:f})=>t+`<li class="photo-container">
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
            <span class="info">${u}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${f}</span>
        </div>
    </div>
</li>
    `,""),h="33935915-442e02dd22c1a8a84f5950f15",y="https://pixabay.com/api/",g=a=>{const t=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}/?${t}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},d=document.querySelector(".form-search"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function v(a){a.preventDefault();const t=a.target.elements.searchWords.value.trim();if(t==="")return i.error({message:"Sorry, there are no images matching your search query. Please try again!"});c.innerHTML="",l.classList.remove("display-none"),g(t).then(r=>{r.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=m(r.hits),new p(".gallery a",{captionsData:"alt",captionsDelay:250}),builder.refresh()}).catch(r=>console.log(r)).finally(()=>{l.classList.add("display-none"),d.reset})}d.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
