---
old_url: adding_images_by_dialog.htm
title: "Adding Images by Dialog"
active_menu_item: developers
class_name: developers
full_width: true
---


This is the easiest way to add images. A helper dialog allows you to add in images and the corresponding thumbnails and thumbnail text. If you don't have thumbnails then use the full images.

However, if you don't need the tiled display, then you can select 'Swipe' mode where one image will be shown and users can swipe within the  widget to show the other images, or alternatively simply not bother about the thumbnails and hide the Photoswipe widgets until you need to browser the full images. At this point, you use the app. [showGallery()](/developers/documentation/scripting-apis/client-api/widget-object-functions/photoswipe/showgallery) method and show the widget just in time. Or you can jump to a page which has the Photoswipe widget on it, calling [showGallery()](/developers/documentation/scripting-apis/client-api/widget-object-functions/photoswipe/showgallery) first.

![swipe-item-dialog](/img/docs/swipe-item-dialog.zoom71.png)
