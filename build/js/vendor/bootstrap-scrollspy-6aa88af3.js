/* =============================================================
 * bootstrap-scrollspy.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
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
 * ============================================================== */
!function(e){"use strict";function t(t,i){var n,o=e.proxy(this.process,this),a=e(e(t).is("body")?window:t);this.options=e.extend({},e.fn.scrollspy.defaults,i),this.$scrollElement=a.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(n=e(t).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t,i=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),o=/^#\w/.test(n)&&e(n);return o&&o.length&&[[o.position().top+i.$scrollElement.scrollTop(),n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=i-this.$scrollElement.height(),o=this.offsets,a=this.targets,r=this.activeTarget;if(t>=n)return r!=(e=a.last()[0])&&this.activate(e);for(e=o.length;e--;)r!=a[e]&&t>=o[e]&&(!o[e+1]||t<=o[e+1])&&this.activate(a[e])},activate:function(t){var i,n;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parent("li").addClass("active"),i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")}};var i=e.fn.scrollspy;e.fn.scrollspy=function(i){return this.each(function(){var n=e(this),o=n.data("scrollspy"),a="object"==typeof i&&i;o||n.data("scrollspy",o=new t(this,a)),"string"==typeof i&&o[i]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);