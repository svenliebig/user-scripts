// ==UserScript==
// @name         Stash Linker
// @namespace    https://github.com/Sly321/
// @version      0.2.3
// @description  You can click on import links to go the file.
// @author       Sven Liebig
// @match        http://stash.schuetze.infra/projects/*.java
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/Sly321/user-scripts/master/stash/build/min.user.js
// ==/UserScript==
!function(){"use strict";function e(e){var t=/senbjw|isbj|eud|schule|verwalt_berlin/g,n=/javax.faces|java.util|javax.annotation|java.io|java.beans/g;return!(!e.match(t)&&!e.match(n))}function t(){return Array.prototype.filter.call(document.querySelectorAll(".cm-keyword"),function(t){if("import"===t.innerHTML&&e(a(t.parentElement)))return t}).map(function(e){return e.parentElement.classList.add("import-row"),e.parentElement.onclick=function(e){f(a(e.target))},e.parentElement})}function n(e){var t,n;t=document.querySelector("head"),t&&(n=document.createElement("style"),n.type="text/css",n.innerHTML=e,t.appendChild(n))}var a,r,o,c,l,u,s,i,h,d,v,p,m,f,g="https://docs.oracle.com/javaee/7/api/",j="https://docs.oracle.com/javase/7/docs/api/",b="https://docs.oracle.com/javase/7/docs/api/",w="https://docs.oracle.com/javase/7/docs/api/";f=function(e){e+=".java";var t=window.location.pathname.split("/"),n=t[4];switch(n){case"eud-schule":return p(t,e);case"schultraegerportal":return v(t,e);default:return m(t,e)}},v=function(e,t){var n=/schule\/service\//g;if(t.match(!1));else{if(!t.match(n))return m(t);console.log("schultraegerportal-services"),e[6]="schultraegerportal-services"}var a=e.slice(0,e.indexOf("java")+1);return window.location.pathname=a.join("/")+"/"+t,!0},p=function(e,t){var n=/stp\/shared\/schule/g,a=/schule\/web\/controller|schule\/web\/converter|schule\/web\/filter|schule\/web\/job|schule\/web\/servlet|schule\/web\/table|schule\/web\/user|schule\/web\/validator/g,r=/schule\/converter\/|schule\/dto\/|schule\/enums\/|schule\/model\/|schule\/shared\/|schule\/util\//g,o=/schule\/service\//g;if(t.match(n))console.log("stp-shared-schule link"),e[4]="stp-shared-schule",e.splice(6,1);else if(t.match(a))console.log("webapp link"),e[6]="eud-schule-webapp";else if(t.match(r))console.log("model link"),e[6]="eud-schule-model";else{if(!t.match(o))return m(t);console.log("eud-schule-services"),e[6]="eud-schule-services"}var c=e.slice(0,e.indexOf("java")+1);return window.location.pathname=c.join("/")+"/"+t,!0},m=function(e){var t=/javax\/faces\//g,n=/javax\/annotation\//g,a=/java\/util\//g,o=/java\/io\//g,c=/java\/beans\//g,l="https://www.google.de/search?q=";return e.match(t)?l=u(e):e.match(a)?l=i(e):e.match(n)?l=s(e):e.match(o)?l=h(e):e.match(c)?l=d(e):l+=e,r(l)},u=function(e){return console.log("javax builder"),l(g,e,3)},s=function(e){return console.log("javax annot. builder"),l(g,e,2)},i=function(e){return console.log("java util. builder"),l(w,e,2)},h=function(e){return console.log("java io builder"),l(b,e,2)},d=function(e){return console.log("java bean builder"),l(j,e,2)},l=function(e,t,n){return e+o(c(t),n)},c=function(e){e=e.split("/");var t=e.length-1;return e[t]=e[t].replace(".java",".html"),e},o=function(e,t){return e.slice(0,t).join("/")+"/"+e.slice(t,e.length).join(".")},r=function(e){var t=window.open(e,"_blank");return t.focus(),!0},a=function(e){return null===e.querySelector(".cm-variable")&&(e=e.parentElement),Array.prototype.map.call(e.querySelectorAll(".cm-variable"),function(e){return e.innerHTML}).join("/")},document.addEventListener("DOMContentLoaded",function(){n(".import-row { background: #f0f0f0; } .import-row:hover { text-decoration: underline; color: blue; cursor: pointer; } ");var e=t();console.log(e)})}();