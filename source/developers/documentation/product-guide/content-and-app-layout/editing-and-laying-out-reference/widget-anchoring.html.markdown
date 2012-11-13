---
title: "Anchoring"
active_menu_item: developers
class_name: developers
full_width: true
---


This feature is only available for Containers (or Pages) in Absolute layout mode. Generally speaking, its use is to be somewhat discouraged as you can usually accomplish most flexible layout designs using [Vertical / Horizontal](/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout) modes and [Adaptive Layouts](/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/adaptive-layout-rules) .

## Anchoring

Each Widget has an Anchor property. If you click on it, you will see a pop-up rectangle appear with for possible locations you can select. It is possible to select a number of these four Anchor points.

![Anchorpoint\_dialog](/img/docs/anchorpoint_dialog.zoom49.png)

The dialog is effective but needs some getting used to. What you need to ask yourself is the following "as the windows size changes, which Widget edge should remain "anchored" and which ones are "unanchored" and therefore free to move?

By default, the top and left edges are anchored. This means that the top left corner of the Widget will remain in the same place whereas its width and height are free to change in proportion to the change in size of the browser window.

If you anchor a Widget to the right hand side, then as the page is resized it will remain fixed relative to the right hand side, so the Widget will move. Also if the Widget is anchored to the bottom edge, it will remain fixed relative to the bottom edge, and will also move as the page is resized.

