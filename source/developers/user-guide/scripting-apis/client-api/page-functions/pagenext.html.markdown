---
title: "pageNext()"
active_menu_item: developers
class_name: developers
full_width: true
---


**pageNext** (optional transition, optional isReverse)

## Parameters

<table>
<tr>
<td width="164">
{string} transition

</td>
<td width="12">
</td>
<td width="717">
A string indicating the type of transition effect. You can find the [available transition values here](page-transitions) .

</td>
</tr>
<tr>
<td width="164">
{boolean} isReverse

</td>
<td width="12">
</td>
<td width="717">
If true, it reverses the direction of the transition. So, if you are moving back to a page rather than forward to one, you would set this to true.

</td>
</tr>
</table>

## Description

Jumps to the next sequential Page in the App.

If this is all you are using in an Event function and you are using a Button, Image, Label or Shape Widget, then you may want to set the 'Page Jump' property of the Widget instead. This removes the need to use a script at all.

You can also specify page transitions using the optional parameters. This offers sliding and other effects as commonly seen in Native apps. Please refer to [Page Transitions](page-transitions) for valid transition strings and examples.

## Example

    app.pageNext();  // go to next page
    app.pageNext('flip');    // go to next page using the 'flip' transition effect
    app.pageNext('flip',true);  // go to next page using the reverse 'flip' transition effect
     
   

## See Also

 - [pageBack()](pageback)

 - [pageJump()](pagejump)

 - [pagePrevious()](pageprevious)

 - [showPagePopup()](showpagepopup)

 - [closePagePopup()](closepagepopup)

