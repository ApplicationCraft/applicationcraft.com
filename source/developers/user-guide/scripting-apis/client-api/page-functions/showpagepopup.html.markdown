---
title: "showPagePopup()"
active_menu_item: developers
class_name: developers
full_width: true
---


## showPagePopup ()

Parameters

<table>
<tr>
<td width="141">
{string} pageName

</td>
<td width="11">
</td>
<td width="728">
the Page Name, Page Number or  Page GUID of the page to display.

</td>
</tr>
</table>

Description

You can display any AC page as a popup dialog. This allows you to create modal dialogs that can appear over the current page rather than switch away from the current page to the new page.

To control the appearance of popup pages, you may want to set the Page's border and border radius properties.

The page events On Page Show will be called after showPagePopup() to allow you to initialize any fields within the dialog. You use [closePagePopup()](closepagepopup) to remove the page dialog.

See Also:

 - [pageJump()](pagejump)

 - [pageNext()](pagenext)

 - [pagePrevious()](pageprevious)

 - [pageBack()](pageback)

 - [closePagePopup()](closepagepopup)

