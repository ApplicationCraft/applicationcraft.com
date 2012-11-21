---
old_url: sizes_property_dialog.htm
title: "'Sizes' Property Dialog"
active_menu_item: developers
class_name: developers
full_width: true
---


This property is located in each widget's Layout property section, just beneath the X and Y properties. This is an extremely important property to understand, especially when doing adaptive/responsive layout work.

## Absolute Mode

If a widget is inside an Absolute mode Container (or Page), then there is not too much to worry about. The size you see on screen will remain unchanged as the browser window changes size, or as it appears on different device screens.

## Vertical and Horizontal Modes

If a widget is within a Container in Vertical or Horizontal mode, then the widget can be made to change size in response to the size of the display width and height. It is here that the Sizes property comes into its own.

 - Percent Width - this is the really powerful property. If set to anything other than 0, the widget will occupy the indicated percentage of its parent container's width. The [video](http://www.applicationcraft.com/mobile-application/developer-center/training-videos) tutorial is strongly recommended to help really understand this.

 - Min Width - this is the minimum width that the widget can have. The Percent Width property dictates the widget's actual size, but this will not be allowed to fall below Min Width.

 - Max Width - this is the same principle as Min Width.

 - Width - widget width if Percent Width is not used.

 - Height - the height as shown in the designer. This also can be thought of as the Minimum Height below which it will not shrink.

![lyt-sizes](/img/docs/lyt-sizes.zoom84.png)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Pbe0umQVyCE?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) The 'Sizes' property explained [2:27]

