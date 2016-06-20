/* ==========================================================
 * bootstrap-affix.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(e){"use strict";var t=function(t,i){this.options=e.extend({},e.fn.affix.defaults,i),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t,i=e(document).height(),n=this.$window.scrollTop(),o=this.$element.offset(),a=this.options.offset,r=a.bottom,s=a.top,l="affix affix-top affix-bottom";"object"!=typeof a&&(r=s=a),"function"==typeof s&&(s=a.top()),"function"==typeof r&&(r=a.bottom()),t=null!=this.unpin&&n+this.unpin<=o.top?!1:null!=r&&o.top+this.$element.height()>=i-r?"bottom":null!=s&&s>=n?"top":!1,this.affixed!==t&&(this.affixed=t,this.unpin="bottom"==t?o.top-n:null,this.$element.removeClass(l).addClass("affix"+(t?"-"+t:"")))}};var i=e.fn.affix;e.fn.affix=function(i){return this.each(function(){var n=e(this),o=n.data("affix"),a="object"==typeof i&&i;o||n.data("affix",o=new t(this,a)),"string"==typeof i&&o[i]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),i=t.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),t.affix(i)})})}(window.jQuery);