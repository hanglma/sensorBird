(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();function d(t){const n=Math.round(t.alpha*1e3)/1e3,c=Math.round(t.beta*1e3)/1e3,i=Math.round(t.gamma*1e3)/1e3;document.getElementById("datenAlpha").innerHTML=n.toString(),document.getElementById("datenBeta").innerHTML=c.toString(),document.getElementById("datenGamma").innerHTML=i.toString(),document.getElementById("kompass").style.transform="rotate("+n+"deg)"}function u(t){const n=Math.round(t.accelerationIncludingGravity.x*1e3)/1e3,c=Math.round(t.accelerationIncludingGravity.y*1e3)/1e3,i=Math.round(t.accelerationIncludingGravity.z*1e3)/1e3;document.getElementById("accelX").innerHTML=n.toString(),document.getElementById("accelY").innerHTML=c.toString(),document.getElementById("accelZ").innerHTML=i.toString()}window.onload=function(){window.addEventListener("deviceorientation",d,!1),window.addEventListener("devicemotion",u,!1),window.addEventListener("keypress",m)};let a=document.getElementById("character"),r=document.getElementById("block");function m(t){(t="Space")&&((a==null?void 0:a.classList.contains("animate"))==!1&&(a.classList.add("animate"),setTimeout(function(){a.classList.remove("animate")},550),console.log(t)),s==!0&&window.location.reload())}let s=!1;setInterval(function(){let t=parseInt(window.getComputedStyle(a).getPropertyValue("top")),n=parseInt(window.getComputedStyle(r).getPropertyValue("left"));n>40&&n<60&&t>=130&&(s=!0,r==null||r.setAttribute("style","animation: none"),r==null||r.setAttribute("style","display: none"),document.getElementById("lose").innerHTML="YOU LOSE :(")},10);
