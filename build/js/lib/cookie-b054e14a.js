/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function o(e){return decodeURIComponent(e.replace(a," "))}var a=/\+/g,r=e.cookie=function(a,s,l){if(s!==n){if(l=e.extend({},r.defaults,l),null===s&&(l.expires=-1),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return s=r.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(a),"=",r.raw?s:encodeURIComponent(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=r.raw?i:o,h=t.cookie.split("; "),p=0,f=h.length;f>p;p++){var m=h[p].split("=");if(d(m.shift())===a){var g=d(m.join("="));return r.json?JSON.parse(g):g}}return null};r.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document);