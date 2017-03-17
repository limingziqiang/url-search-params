/*! (C) WebReflection Mit Style License */
var URLSearchParams=URLSearchParams||function(){"use strict";function e(e){var n,r,i,s,o,u,c=Object.create(null);this[a]=c;if(!e)return;if(typeof e=="string"){e.charAt(0)==="?"&&(e=e.slice(1));for(s=e.split("&"),o=0,u=s.length;o<u;o++)i=s[o],n=i.indexOf("="),-1<n?f(c,l(i.slice(0,n)),l(i.slice(n+1))):i.length&&f(c,l(i),"")}else if(t(e))for(o=0,u=e.length;o<u;o++)i=e[o],f(c,i[0],i[1]);else for(r in e)f(c,r,e[r])}function f(e,n,r){n in e?e[n].push(""+r):e[n]=t(r)?r:[""+r]}function l(e){return decodeURIComponent(e.replace(i," "))}function c(e){return encodeURIComponent(e).replace(r,o)}function h(){try{return!!Symbol.iterator}catch(e){return!1}}var t=Array.isArray,n=e.prototype,r=/[!'\(\)~]|%20|%00/g,i=/\+/g,s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},o=function(e){return s[e]},u=h(),a="__URLSearchParams__:"+Math.random();n.append=function(t,n){f(this[a],t,n)},n.delete=function(t){delete this[a][t]},n.get=function(t){var n=this[a];return t in n?n[t][0]:null},n.getAll=function(t){var n=this[a];return t in n?n[t].slice(0):[]},n.has=function(t){return t in this[a]},n.set=function(t,n){this[a][t]=[""+n]},n.forEach=function(t,n){var r=this[a];Object.getOwnPropertyNames(r).forEach(function(e){r[e].forEach(function(r){t.call(n,r,e,this)},this)},this)},n.keys=function(){var t=[];this.forEach(function(e,n){t.push(n)});var n={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return u&&(n[Symbol.iterator]=function(){return n}),n},n.values=function(){var t=[];this.forEach(function(e){t.push(e)});var n={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return u&&(n[Symbol.iterator]=function(){return n}),n},n.entries=function(){var t=[];this.forEach(function(e,n){t.push([n,e])});var n={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return u&&(n[Symbol.iterator]=function(){return n}),n},u&&(n[Symbol.iterator]=n.entries),n.toJSON=function(){return{}},n.toString=function w(){var e=this[a],t=[],n,r,i,s;for(r in e){i=c(r);for(n=0,s=e[r];n<s.length;n++)t.push(i+"="+c(s[n]))}return t.join("&")};var p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,v=function(e){function t(t,r){n.append.call(this,t,r),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function r(t){n.delete.call(this,t),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function i(t,r){n.set.call(this,t,r),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}return function(e,n){return e.append=t,e.delete=r,e.set=i,p(e,"_usp",{configurable:!0,writable:!0,value:n})}},m=function(e){return function(t,n){return p(t,"_searchParams",{configurable:!0,writable:!0,value:e(n,t)}),n}},g=function(t){var r=t.append;t.append=n.append,e.call(t,t._usp.search.slice(1)),t.append=r},y=function(e,t){if(!(e instanceof t))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+t.name)},b=function(t){var n=t.prototype,r=d(n,"searchParams"),i=d(n,"href"),s=d(n,"search"),o;!r&&s&&s.set&&(o=m(v(s)),Object.defineProperties(n,{href:{get:function(){return i.get.call(this)},set:function(e){var t=this._searchParams;i.set.call(this,e),t&&g(t)}},search:{get:function(){return s.get.call(this)},set:function(e){var t=this._searchParams;s.set.call(this,e),t&&g(t)}},searchParams:{get:function(){return y(this,t),this._searchParams||o(this,new e(this.search.slice(1)))},set:function(e){y(this,t),o(this,e)}}}))};return b(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&b(URL),e}();