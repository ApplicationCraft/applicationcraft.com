/*! Responsive Carousel - v0.1.0 - 2012-10-23
* https://github.com/filamentgroup/responsive-carousel
* Copyright (c) 2012 Filament Group, Inc.; Licensed MIT, GPL */
/*
 * responsive-carousel
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
!function(e){var t="carousel",n="."+t,i="data-transition",o=t+"-item",a=t+"-active",r=t+"-in",s=t+"-out",l=t+"-nav",c=function(){for(var e,t="webkit Moz O Ms".split(" "),n=!1;t.length;)if(e=t.shift()+"Transition",void 0!==e in document.documentElement.style&&e in document.documentElement.style!=!1){n=!0;break}return n}(),d={_create:function(){e(this).trigger("beforecreate."+t)[t]("_init")[t]("_addNextPrev").trigger("create."+t)},_init:function(){var n=e(this).attr(i);return n||(c=!1),e(this).addClass(t+" "+(n?t+"-"+n:"")+" ").children().addClass(o).first().addClass(a)},next:function(){e(this)[t]("goTo","+1")},prev:function(){e(this)[t]("goTo","-1")},goTo:function(n){var l=e(this),d=l.attr(i),u=" "+t+"-"+d+"-reverse";e(this).find("."+o).removeClass([s,r,u].join(" "));var h=e(this).find("."+a),p=h.index(),f=(0>p?0:p)+1,m="number"==typeof n?n:f+parseFloat(n),g=e(this).find(".carousel-item").eq(m-1),v="string"==typeof n&&!parseFloat(n)||m>f?"":u;g.length||(g=e(this).find("."+o)[v.length?"last":"first"]()),c?l[t]("_transitionStart",h,g,v):(g.addClass(a),l[t]("_transitionEnd",h,g,v)),l.trigger("goto."+t,g)},update:function(){return e(this).children().not("."+l).addClass(o),e(this).trigger("update."+t)},_transitionStart:function(n,i,o){var a=e(this);i.one(navigator.userAgent.indexOf("AppleWebKit")>-1?"webkitTransitionEnd":"transitionend otransitionend",function(){a[t]("_transitionEnd",n,i,o)}),e(this).addClass(o),n.addClass(s),i.addClass(r)},_transitionEnd:function(t,n,i){e(this).removeClass(i),t.removeClass(s+" "+a),n.removeClass(r).addClass(a)},_bindEventListeners:function(){var n=e(this).bind("click",function(i){var o=e(i.target).closest("a[href='#next'],a[href='#prev']");o.length&&(n[t](o.is("[href='#next']")?"next":"prev"),i.preventDefault())});return this},_addNextPrev:function(){return e(this).append("<nav class='"+l+"'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>Prev</a><a href='#next' class='next' aria-hidden='true' title='Next'>Next</a></nav>")[t]("_bindEventListeners")},destroy:function(){}};e.fn[t]=function(n,i,o,a){return this.each(function(){return n&&"string"==typeof n?e.fn[t].prototype[n].call(this,i,o,a):e(this).data(t+"data")?e(this):(e(this).data(t+"active",!0),e.fn[t].prototype._create.call(this),void 0)})},e.extend(e.fn[t].prototype,d),e(function(){e(n)[t]()})}(jQuery),/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t,i=t+"-no-transition",o=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,a={_dragBehavior:function(){var t,a=(e(this),{}),r=function(i){var o=i.touches||i.originalEvent.touches,r=e(i.target).closest(n);"touchstart"===i.type&&(t={x:o[0].pageX,y:o[0].pageY}),o[0]&&o[0].pageX&&(a.touches=o,a.deltaX=o[0].pageX-t.x,a.deltaY=o[0].pageY-t.y,a.w=r.width(),a.h=r.height(),a.xPercent=a.deltaX/a.w,a.yPercent=a.deltaY/a.h,a.srcEvent=i)},s=function(t){r(t),e(t.target).closest(n).trigger("drag"+t.type.split("touch")[1],a)};e(this).bind("touchstart",function(t){e(this).addClass(i),s(t)}).bind("touchmove",function(e){r(e),s(e),o||(e.preventDefault(),window.scrollBy(0,-a.deltaY))}).bind("touchend",function(t){e(this).removeClass(i),s(t)})}};e.extend(e.fn[t].prototype,a),e(n).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t,i=t+"-active",o=t+"-item",a=function(e){return Math.abs(e)>4},r=function(e,n){var i=e.find("."+t+"-active"),a=i.prevAll().length+1,r=0>n,s=a+(r?1:-1),l=e.find("."+o).eq(s-1);return l.length||(l=e.find("."+o)[r?"first":"last"]()),[i,l]};e(n).live("dragmove",function(t,n){if(a(n.deltaX)){var i=r(e(this),n.deltaX);i[0].css("left",n.deltaX+"px"),i[1].css("left",n.deltaX<0?n.w+n.deltaX+"px":-n.w+n.deltaX+"px")}}).live("dragend",function(t,n){if(a(n.deltaX)){var o=r(e(this),n.deltaX),s=Math.abs(n.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){o[0].add(o[1]).css("left","")}),s?(o[0].removeClass(i).css("left",n.deltaX>0?n.w+"px":-n.w+"px"),o[1].addClass(i).css("left",0)):(o[0].css("left",0),o[1].css("left",n.deltaX>0?-n.w+"px":n.w+"px"))}})}(jQuery),/*
 * responsive-carousel pagination extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t+"[data-paginate]",i=t+"-pagination",o=t+"-active-page",a={_createPagination:function(){var n,o=e(this).find("."+t+"-nav"),a=e(this).find("."+t+"-item"),r=e("<ol class='"+i+"'></ol>");o.find("."+i).remove();for(var s=0,l=a.length;l>s;s++)n=s+1,r.append("<li><a href='#"+n+"' title='Go to slide "+n+"'>"+n+"</a>");o.addClass(t+"-nav-paginated").find("a").first().after(r)},_bindPaginationEvents:function(){e(this).bind("click",function(n){var o=e(n.target).closest("a"),a=o.attr("href");o.closest("."+i).length&&a&&(e(this)[t]("goTo",parseFloat(a.split("#")[1])),n.preventDefault())}).bind("goto."+t,function(t,n){var a=n?e(n).index():0;e(this).find("ol."+i+" li").removeClass(o).eq(a).addClass(o)}).trigger("goto."+t)}};e.extend(e.fn[t].prototype,a),e(n).live("create."+t,function(){e(this)[t]("_createPagination")[t]("_bindPaginationEvents")}).live("update."+t,function(){e(this)[t]("_createPagination")})}(jQuery),/*
 * responsive-carousel autoplay extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e,t){var n="carousel",i="."+n,o=4e3,a={play:function(){var t=e(this),i=t.attr("data-interval"),a=parseFloat(i)||o;return t.data("timer",setInterval(function(){t[n]("next")},a))},stop:function(){clearTimeout(e(this).data("timer"))},_bindStopListener:function(){return e(this).bind("mousedown",function(){e(this)[n]("stop")})},_initAutoPlay:function(){var i=e(this).attr("data-autoplay");i!==t&&i!==!1&&e(this)[n]("_bindStopListener")[n]("play")}};e.extend(e.fn[n].prototype,a),e(i).live("create."+n,function(){e(this)[n]("_initAutoPlay")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t,i=t+"-active",o=t+"-item",a=function(e){return Math.abs(e)>4},r=function(e,n){var i=e.find("."+t+"-active"),a=i.prevAll().length+1,r=0>n,s=a+(r?1:-1),l=e.find("."+o).eq(s-1);return l.length||(l=e.find("."+o)[r?"first":"last"]()),[i,l]};e(n).live("dragmove",function(t,n){if(a(n.deltaX)){var i=r(e(this),n.deltaX);i[0].css("left",n.deltaX+"px"),i[1].css("left",n.deltaX<0?n.w+n.deltaX+"px":-n.w+n.deltaX+"px")}}).live("dragend",function(t,n){if(a(n.deltaX)){var o=r(e(this),n.deltaX),s=Math.abs(n.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){o[0].add(o[1]).css("left","")}),s?(o[0].removeClass(i).css("left",n.deltaX>0?n.w+"px":-n.w+"px"),o[1].addClass(i).css("left",0)):(o[0].css("left",0),o[1].css("left",n.deltaX>0?-n.w+"px":n.w+"px"))}})}(jQuery),/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t,i=t+"-no-transition",o=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,a={_dragBehavior:function(){var t,a=(e(this),{}),r=function(i){var o=i.touches||i.originalEvent.touches,r=e(i.target).closest(n);"touchstart"===i.type&&(t={x:o[0].pageX,y:o[0].pageY}),o[0]&&o[0].pageX&&(a.touches=o,a.deltaX=o[0].pageX-t.x,a.deltaY=o[0].pageY-t.y,a.w=r.width(),a.h=r.height(),a.xPercent=a.deltaX/a.w,a.yPercent=a.deltaY/a.h,a.srcEvent=i)},s=function(t){r(t),e(t.target).closest(n).trigger("drag"+t.type.split("touch")[1],a)};e(this).bind("touchstart",function(t){e(this).addClass(i),s(t)}).bind("touchmove",function(e){r(e),s(e),o||(e.preventDefault(),window.scrollBy(0,-a.deltaY))}).bind("touchend",function(t){e(this).removeClass(i),s(t)})}};e.extend(e.fn[t].prototype,a),e(n).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",n="."+t,i=t+"-active",o=t+"-top",a=t+"-item",r=function(e){return e>-1&&0>e||1>e&&e>0},s=function(e,n){var i=e.find("."+t+"-active"),o=i.prevAll().length+1,r=0>n,s=o+(r?1:-1),l=e.find("."+a).eq(s-1);return l.length||(l=e.find("."+a)[r?"first":"last"]()),[i,l]};e(n).live("dragstart",function(){e(this).find("."+o).removeClass(o)}).live("dragmove",function(t,n){if(r(n.xPercent)){var i=s(e(this),n.deltaX),a=180*n.xPercent,l=Math.abs(n.xPercent)>.5;i[0].css("-webkit-transform","rotateY("+a+"deg)"),i[1].css("-webkit-transform","rotateY("+((a>0?-180:180)+a)+"deg)"),i[l?1:0].addClass(o),i[l?0:1].removeClass(o)}}).live("dragend",function(t,n){if(r(n.xPercent)){var a=s(e(this),n.deltaX),l=Math.abs(n.xPercent)>.5;l?(a[0].removeClass(i),a[1].addClass(i)):(a[0].addClass(i),a[1].removeClass(i)),a[0].add(a[1]).removeClass(o).css("-webkit-transform","")}})}(jQuery);