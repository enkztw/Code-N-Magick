!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e){return e[Math.floor(Math.random()*e.length)]},o=27,c=13,u={name:["Иван","Хуан Себастьян","Мария","Кристоф Виктор","Юлия","Люпита","Вашингтон"],surname:["да Марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"],coat:["rgb(101, 137, 164)","rgb(241, 43, 107)","rgb(146, 100, 161)","rgb(56, 159, 117)","rgb(215, 210, 55)","rgb(0, 0, 0)"],eyes:["black","red","blue","yellow","green"]},l=document.querySelector(".setup"),i=l.querySelector(".setup-wizard"),a=document.querySelector(".setup-open"),d=l.querySelector(".setup-close"),s=document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item"),f=document.querySelector(".setup-similar-list"),y=i.querySelector(".wizard-coat"),p=function(){l.classList.remove("hidden"),document.addEventListener("keydown",b)};p();var m=function(){l.classList.add("hidden")},b=function(e){e.keyCode===o&&m()};a.addEventListener("click",p),a.addEventListener("keydown",function(e){e.keyCode===c&&p()}),d.addEventListener("click",m);y.addEventListener("click",function(){var e;e=0,++e===u.coat.length&&(e=0),y.style.fill=u.coat[0],console.log(0)});for(var v,g,S=document.createDocumentFragment(),q=0;q<4;q++)S.appendChild((v=u,g=void 0,(g=s.cloneNode(!0)).querySelector(".setup-similar-label").textContent="".concat(n(v.name)," ").concat(n(v.surname)),g.querySelector(".wizard-coat").style.fill=n(v.coat),g.querySelector(".wizard-eyes").style.fill=n(v.eyes),g));f.appendChild(S)}]);