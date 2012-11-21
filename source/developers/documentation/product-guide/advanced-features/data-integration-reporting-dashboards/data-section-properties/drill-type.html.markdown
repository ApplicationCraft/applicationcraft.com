---
old_url: drill_type.htm
title: "Drill Type"
active_menu_item: developers
class_name: developers
full_width: true
---


This indicates how a Widget should behave when it is clicked on and results in a Drill Down operation.

 - Default means that the Widget's appearance does not change

 - Self means that the Widget itself should redraw in a drilled down state (meaning that it would be the only value shown). The user can click on the segment again to remove the drill down filter and restore the other segments.

 - Call Out results in the selected items within that single Widget being "Called Out" (pie segments are offset from the unselected ones). This is useful for multi-select drill down operations on the same Widget.

![Piecharts](/img/docs/piecharts.zoom71.png)

