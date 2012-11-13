---
title: "Mobile Navigation Bar"
active_menu_item: developers
class_name: developers
full_width: true
---


This is used as a way of navigating around an App or for triggering other actions. In most cases, you will want to place this widget in a [Mobile Toolbar](/developers/documentation/product-guide/advanced-important-widgets/important-mobile-widgets/mobile-toolbar) widget, which can be fixed in position to the bottom or top of the screen.

You should also be aware of the [Repeat](/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) property which allows you to repeat your Toolbars and Navigation Bars across multiple App pages.

As with all Mobile widgets, the styling is taken care of by the [Mobile Theme](/developers/documentation/product-guide/mobile-apps-sites/mobile-themes) system, and you have the normal Themes available.

![mob-navbar-black](/img/docs/mob-navbar-black.png)

Black Theme with Images

![mob-navbar-blue](/img/docs/mob-navbar-blue.png)

Blue Theme with Images

![mob-navbar-plain-1](/img/docs/mob-navbar-plain-1.png)

Blue Theme without images

![mob-navbar-plain-multi](/img/docs/mob-navbar-plain-multi.png)

Black Theme wrapped automatically over 3 lines

Buttons can have images if required, as you can see from the above examples. If you include more buttons than there is room for on a single line then they wrap over multiple lines.

You add items to the Navbar using the Items property in the toolbar. When you click on this, you will see the following dialog.

![mob-navbar-items](/img/docs/mob-navbar-items.zoom83.png)

This can also be populated dynamically from code using either [app.setData()](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/mobile-list) or [app.populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) .

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/BelIr0vzxlU?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Designing a Mobile UI [2:57]

