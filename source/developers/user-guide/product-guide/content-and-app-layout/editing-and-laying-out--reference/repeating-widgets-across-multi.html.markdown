---
title: "Repeating Widgets Across Multiple Pages"
active_menu_item: developers
class_name: developers
full_width: true
---


This feature is a real time saver when building things like backgrounds and menus that should repeat across many Pages in your App.

## Menu Example

Let's say you want to build a really nice menu bar for your 10 Page App. In this case, you really do not want to build it, then Copy and Paste it across every Page in your App so that every time you make a minor change, you have to make the change on the 10 other Pages.

Instead, just design it once and then look for the Repeat property in the Layout section of the Property Pane.

![repeat\_dialog](/img/docs/repeat_dialog.zoom78.png)

Change the Repeat State drop-down to Repeat. Underneath, you will now see another drop-down labeled "Repeat Type". You have three options:

 - All - the Widget will be repeated on all Pages in your App

 - Include - the Widget will not be repeated unless specifically included in the Page list below

 - Exclude - the Widget will be repeated on all Pages by default unless specifically excluded in the Page list below

Note: Widgets that are contained within other container widgets on a page cannot be repeated. Select the container widget that is on the 'page' to repeat. To identify the appropriate container see [Right Click Parent Container Selection](../responsive-/-adaptive-/-fluid-design/right-click-parent-container-s)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/3vpuYfz_Da8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Repeating Widgets across multiple pages [1:00]
