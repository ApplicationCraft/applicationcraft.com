---
title: "Absolute and Relative Layout"
active_menu_item: developers
class_name: developers
full_width: true
---


The next key thing to understand is how widgets are displayed once you drop them into a page or container. This is controlled by the 'Layout' property that is available for all container widgets (this includes the page itself).

This property applies to any Container, including the Page itself. As you can have multiple Containers on a page (nested or not) you can easily mix different Layout modes.

## Absolute Mode

If you drop a widget into a container whose Layout property is set to Absolute, then you can position that widget to the nearest pixel within its Container. Just drag it around with the mouse or use the arrow keys to nudge it one pixel at a time. You can also, once you have clicked and held the mouse button, press the shift key to drag to the nearest. This overrides the snap-to-grid feature if enabled.

As you will see in a moment, Vertical or Horizontal Layout modes will result in widgets relocating relative to one another. Widgets inside and Absolute mode Container, however, will maintain their absolute positions, no matter what.

The screenshot below shows widgets inside the white box that are all in a fixed (absolute) position. The White box itself is the Container.

![Absolute](/img/docs/absolute.zoom74.png)

This is great where you are trying to achieve precise layout control but if you want to have widgets resizing themselves depending upon the device size or orientation then you will need to understand Vertical and Horizontal Layout modes also.

## Vertical and Horizontal : Relative Layout Modes

If the page or container is set to Vertical mode (we will discuss horizontal in a moment) then any widget that is dropped into that container will automatically be snapped to the left edge of the container and will be immediately above or below the other widgets (if there are any).

You can move the widget's position relative to the other either by dragging with the mouse or by using the up and down arrow keys.

![VerticalStack](/img/docs/verticalstack.zoom74.png)

Some widgets (label, text etc.) will have content that forces the widget's height to change depending on the width of the device screen. A very narrow display will require more height in order to show all of its content. With Vertical layout mode, as each widget is rendered by Application Craft, it forces the widgets below it down the page. If you used the same widgets in absolute mode, your content would be truncated.

## Horizontal Mode Containers

Horizontal mode works in a similar way except that Widgets in that containers will line up next to each other rather then beneath one another. If there is not enough horizontal space to accommodate all the Containers, then they will wrap underneath.

If you care about Responsive Design (and you should) then you will find yourself using a Container in horizontal mode with further containers within it, one representing each quasi-column in your page.

![MixedContainers](/img/docs/mixedcontainers.zoom95.png)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/pHaov7DW4kM?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview [4:30]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/IN3cVOS34mo?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Layout Modes [2:47]

