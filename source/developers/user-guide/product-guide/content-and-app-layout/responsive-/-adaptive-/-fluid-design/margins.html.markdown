---
title: "Margins"
active_menu_item: developers
class_name: developers
full_width: true
---


Margins are relevant for widgets inside Vertical and Horizontal layout mode containers (and pages). Without any margins, widgets are placed directly on top (or next to for horizontal mode) of one another. You cannot drag these around as you can in Absolute mode.

If you want to add some space between them, then you use the margins.

![lyt-margins](/img/docs/lyt-margins.zoom76.png)

You should note that margins have a couple of quirks due to the underlying way HTML works. The main issue is that if you have two neighbouring containers and one has the 'Align in Container' property set to Centered and the next one set to Left, you will find that the Top Margin of the lower widget does not work. If they are both set to Centered alignment they will work fine. You should then set the Bottom Margin of the first widget and it will work.

Another approach you can use is to use a Panel Container as a spacer, although this should rarely be necessary.

You should note that if you add a left margin, this can potentially push the widget beyond the right edge of the widget's container (or page). To correct for this, you should reduce the % Width property to a value less than 100%.

An alternative approach to using margins sometimes is to set a Percentage Width (in the Sizes property) and then set Align in Container to Centered.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/98TbMBiOSGc?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Widget Alignment [2:36]
