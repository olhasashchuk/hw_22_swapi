(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function c(){const r=document.querySelector(".js--input").value.split("/",2),n=r[0].trim(),o=r[1].trim(),e=await(await fetch(`https://swapi.dev/api/${n}/${o}/`,{method:"GET"})).json();console.log(e),document.querySelector("pre").innerHTML=JSON.stringify(e,null,2),document.querySelector(".controller-item").innerText=`${n}`,document.querySelector(".id-item").innerText=`${o}`}function l(){const r=document.querySelector(".js--spinner");r.style.display="block"}function u(){const r=document.querySelector(".js--spinner");r.style.display="none"}document.querySelector("button").addEventListener("click",async()=>{l();try{await c()}finally{u()}});
