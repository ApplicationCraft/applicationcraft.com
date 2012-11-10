---
title: "Page Transition Effects"
active_menu_item: developers
class_name: developers
full_width: true
---


Page transition effects are a way of animating the movement when you change pages.

There are two ways to specify the transition effects

 - Page Transition property - this App property allows you to set the default page transition. This applies to all page transitions throughout your App. It can be overridden using API pageXxxx() functions.

 - pageXxxx() API functions - this gives you a higher level of control and allows you to call functions like [pageNext()](../../scripting-apis/client-api/page-functions/pagenext) where you can specify a) the effect and b) the direction of the effect (forwards or backwards). Please note that using 'reverse' transitions can sometimes be slightly slower.

To enable consistent performance, we would recommend you use the Mobile & Desktop effects if your app is targeted for mobile devices

**Mobile & Desktop:**

 - Slide - new page slides in from the right

 - Fade - new page fades in and old one out

**Desktop Only:**

 - Slide Up - new page slides up from the bottom

 - Slide Down - new page slides down from above

 - Pop - new page pops out of the middle of the page

 - Flip - current page flips over to reveal new page

On lower-powered phones, the effects may not be great so bear this in mind before choosing to use any effects.

**See Also:**

 - [Mobile Transition Mode](mobile-transition-mode.htm)

