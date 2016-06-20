/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function o(e){return e}function n(e){return decodeURIComponent(e.replace(a," "))}var a=/\+/g,r=e.cookie=function(a,s,l){if(s!==i){if(l=e.extend({},r.defaults,l),null===s&&(l.expires=-1),"number"==typeof l.expires){var c=l.expires,d=l.expires=new Date;d.setDate(d.getDate()+c)}return s=r.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(a),"=",r.raw?s:encodeURIComponent(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var u=r.raw?o:n,h=t.cookie.split("; "),p=0,f=h.length;f>p;p++){var g=h[p].split("=");if(u(g.shift())===a){var m=u(g.join("="));return r.json?JSON.parse(m):m}}return null};r.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document);