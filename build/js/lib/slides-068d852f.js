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
!function(e){var t="carousel",i="."+t,o="data-transition",n=t+"-item",a=t+"-active",r=t+"-in",s=t+"-out",l=t+"-nav",c=function(){for(var e,t="webkit Moz O Ms".split(" "),i=!1;t.length;)if(e=t.shift()+"Transition",e in document.documentElement.style!==void 0&&e in document.documentElement.style!=!1){i=!0;break}return i}(),d={_create:function(){e(this).trigger("beforecreate."+t)[t]("_init")[t]("_addNextPrev").trigger("create."+t)},_init:function(){var i=e(this).attr(o);return i||(c=!1),e(this).addClass(t+" "+(i?t+"-"+i:"")+" ").children().addClass(n).first().addClass(a)},next:function(){e(this)[t]("goTo","+1")},prev:function(){e(this)[t]("goTo","-1")},goTo:function(i){var l=e(this),d=l.attr(o),u=" "+t+"-"+d+"-reverse";e(this).find("."+n).removeClass([s,r,u].join(" "));var h=e(this).find("."+a),p=h.index(),f=(0>p?0:p)+1,g="number"==typeof i?i:f+parseFloat(i),m=e(this).find(".carousel-item").eq(g-1),v="string"==typeof i&&!parseFloat(i)||g>f?"":u;m.length||(m=e(this).find("."+n)[v.length?"last":"first"]()),c?l[t]("_transitionStart",h,m,v):(m.addClass(a),l[t]("_transitionEnd",h,m,v)),l.trigger("goto."+t,m)},update:function(){return e(this).children().not("."+l).addClass(n),e(this).trigger("update."+t)},_transitionStart:function(i,o,n){var a=e(this);o.one(navigator.userAgent.indexOf("AppleWebKit")>-1?"webkitTransitionEnd":"transitionend otransitionend",function(){a[t]("_transitionEnd",i,o,n)}),e(this).addClass(n),i.addClass(s),o.addClass(r)},_transitionEnd:function(t,i,o){e(this).removeClass(o),t.removeClass(s+" "+a),i.removeClass(r).addClass(a)},_bindEventListeners:function(){var i=e(this).bind("click",function(o){var n=e(o.target).closest("a[href='#next'],a[href='#prev']");n.length&&(i[t](n.is("[href='#next']")?"next":"prev"),o.preventDefault())});return this},_addNextPrev:function(){return e(this).append("<nav class='"+l+"'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>Prev</a><a href='#next' class='next' aria-hidden='true' title='Next'>Next</a></nav>")[t]("_bindEventListeners")},destroy:function(){}};e.fn[t]=function(i,o,n,a){return this.each(function(){return i&&"string"==typeof i?e.fn[t].prototype[i].call(this,o,n,a):e(this).data(t+"data")?e(this):(e(this).data(t+"active",!0),void e.fn[t].prototype._create.call(this))})},e.extend(e.fn[t].prototype,d),e(function(){e(i)[t]()})}(jQuery),/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",i="."+t,o=t+"-no-transition",n=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,a={_dragBehavior:function(){var t,a=(e(this),{}),r=function(o){var n=o.touches||o.originalEvent.touches,r=e(o.target).closest(i);"touchstart"===o.type&&(t={x:n[0].pageX,y:n[0].pageY}),n[0]&&n[0].pageX&&(a.touches=n,a.deltaX=n[0].pageX-t.x,a.deltaY=n[0].pageY-t.y,a.w=r.width(),a.h=r.height(),a.xPercent=a.deltaX/a.w,a.yPercent=a.deltaY/a.h,a.srcEvent=o)},s=function(t){r(t),e(t.target).closest(i).trigger("drag"+t.type.split("touch")[1],a)};e(this).bind("touchstart",function(t){e(this).addClass(o),s(t)}).bind("touchmove",function(e){r(e),s(e),n||(e.preventDefault(),window.scrollBy(0,-a.deltaY))}).bind("touchend",function(t){e(this).removeClass(o),s(t)})}};e.extend(e.fn[t].prototype,a),e(i).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",i="."+t,o=t+"-active",n=t+"-item",a=function(e){return Math.abs(e)>4},r=function(e,i){var o=e.find("."+t+"-active"),a=o.prevAll().length+1,r=0>i,s=a+(r?1:-1),l=e.find("."+n).eq(s-1);return l.length||(l=e.find("."+n)[r?"first":"last"]()),[o,l]};e(i).live("dragmove",function(t,i){if(a(i.deltaX)){var o=r(e(this),i.deltaX);o[0].css("left",i.deltaX+"px"),o[1].css("left",i.deltaX<0?i.w+i.deltaX+"px":-i.w+i.deltaX+"px")}}).live("dragend",function(t,i){if(a(i.deltaX)){var n=r(e(this),i.deltaX),s=Math.abs(i.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){n[0].add(n[1]).css("left","")}),s?(n[0].removeClass(o).css("left",i.deltaX>0?i.w+"px":-i.w+"px"),n[1].addClass(o).css("left",0)):(n[0].css("left",0),n[1].css("left",i.deltaX>0?-i.w+"px":i.w+"px"))}})}(jQuery),/*
 * responsive-carousel pagination extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e,t){var i="carousel",o="."+i+"[data-paginate]",n=i+"-pagination",a=i+"-active-page",r={_createPagination:function(){var t,o=e(this).find("."+i+"-nav"),a=e(this).find("."+i+"-item"),r=e("<ol class='"+n+"'></ol>");o.find("."+n).remove();for(var s=0,l=a.length;l>s;s++)t=s+1,r.append("<li><a href='#"+t+"' title='Go to slide "+t+"'>"+t+"</a>");o.addClass(i+"-nav-paginated").find("a").first().after(r)},_bindPaginationEvents:function(){e(this).bind("click",function(t){var o=e(t.target).closest("a"),a=o.attr("href");o.closest("."+n).length&&a&&(e(this)[i]("goTo",parseFloat(a.split("#")[1])),t.preventDefault())}).bind("goto."+i,function(t,i){var o=i?e(i).index():0;e(this).find("ol."+n+" li").removeClass(a).eq(o).addClass(a)}).trigger("goto."+i)}};e.extend(e.fn[i].prototype,r),e(o).live("create."+i,function(){e(this)[i]("_createPagination")[i]("_bindPaginationEvents")}).live("update."+i,function(){e(this)[i]("_createPagination")})}(jQuery),/*
 * responsive-carousel autoplay extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e,t){var i="carousel",o="."+i,n=4e3,a={play:function(){var t=e(this),o=t.attr("data-interval"),a=parseFloat(o)||n;return t.data("timer",setInterval(function(){t[i]("next")},a))},stop:function(){clearTimeout(e(this).data("timer"))},_bindStopListener:function(){return e(this).bind("mousedown",function(){e(this)[i]("stop")})},_initAutoPlay:function(){var o=e(this).attr("data-autoplay");o!==t&&o!==!1&&e(this)[i]("_bindStopListener")[i]("play")}};e.extend(e.fn[i].prototype,a),e(o).live("create."+i,function(){e(this)[i]("_initAutoPlay")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",i="."+t,o=t+"-active",n=t+"-item",a=function(e){return Math.abs(e)>4},r=function(e,i){var o=e.find("."+t+"-active"),a=o.prevAll().length+1,r=0>i,s=a+(r?1:-1),l=e.find("."+n).eq(s-1);return l.length||(l=e.find("."+n)[r?"first":"last"]()),[o,l]};e(i).live("dragmove",function(t,i){if(a(i.deltaX)){var o=r(e(this),i.deltaX);o[0].css("left",i.deltaX+"px"),o[1].css("left",i.deltaX<0?i.w+i.deltaX+"px":-i.w+i.deltaX+"px")}}).live("dragend",function(t,i){if(a(i.deltaX)){var n=r(e(this),i.deltaX),s=Math.abs(i.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){n[0].add(n[1]).css("left","")}),s?(n[0].removeClass(o).css("left",i.deltaX>0?i.w+"px":-i.w+"px"),n[1].addClass(o).css("left",0)):(n[0].css("left",0),n[1].css("left",i.deltaX>0?-i.w+"px":i.w+"px"))}})}(jQuery),/*
 * responsive-carousel touch drag extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",i="."+t,o=t+"-no-transition",n=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,a={_dragBehavior:function(){var t,a=(e(this),{}),r=function(o){var n=o.touches||o.originalEvent.touches,r=e(o.target).closest(i);"touchstart"===o.type&&(t={x:n[0].pageX,y:n[0].pageY}),n[0]&&n[0].pageX&&(a.touches=n,a.deltaX=n[0].pageX-t.x,a.deltaY=n[0].pageY-t.y,a.w=r.width(),a.h=r.height(),a.xPercent=a.deltaX/a.w,a.yPercent=a.deltaY/a.h,a.srcEvent=o)},s=function(t){r(t),e(t.target).closest(i).trigger("drag"+t.type.split("touch")[1],a)};e(this).bind("touchstart",function(t){e(this).addClass(o),s(t)}).bind("touchmove",function(e){r(e),s(e),n||(e.preventDefault(),window.scrollBy(0,-a.deltaY))}).bind("touchend",function(t){e(this).removeClass(o),s(t)})}};e.extend(e.fn[t].prototype,a),e(i).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),/*
 * responsive-carousel touch drag transition
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
function(e){var t="carousel",i="."+t,o=t+"-active",n=t+"-top",a=t+"-item",r=function(e){return e>-1&&0>e||1>e&&e>0},s=function(e,i){var o=e.find("."+t+"-active"),n=o.prevAll().length+1,r=0>i,s=n+(r?1:-1),l=e.find("."+a).eq(s-1);return l.length||(l=e.find("."+a)[r?"first":"last"]()),[o,l]};e(i).live("dragstart",function(t,i){e(this).find("."+n).removeClass(n)}).live("dragmove",function(t,i){if(r(i.xPercent)){var o=s(e(this),i.deltaX),a=180*i.xPercent,l=Math.abs(i.xPercent)>.5;o[0].css("-webkit-transform","rotateY("+a+"deg)"),o[1].css("-webkit-transform","rotateY("+((a>0?-180:180)+a)+"deg)"),o[l?1:0].addClass(n),o[l?0:1].removeClass(n)}}).live("dragend",function(t,i){if(r(i.xPercent)){var a=s(e(this),i.deltaX),l=Math.abs(i.xPercent)>.5;l?(a[0].removeClass(o),a[1].addClass(o)):(a[0].addClass(o),a[1].removeClass(o)),a[0].add(a[1]).removeClass(n).css("-webkit-transform","")}})}(jQuery);