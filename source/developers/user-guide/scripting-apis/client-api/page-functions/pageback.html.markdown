---
title: "pageBack()"
active_menu_item: developers
class_name: developers
full_width: true
---


**pageBack** (optional transition, optional isReverse)

## Parameters

<table>
<tr>
<td width="164">
{string} transition

</td>
<td width="12">
</td>
<td width="717">
A string indicating the type of transition effect. You can find the [available transition values here](/developers/user-guide/scripting-apis/client-api/page-functions/page-transitions) .

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

Jumps to the Page in the App that the current page was called from. Works in the same way as the back button in your browser.

If this is all you are using in an Event function and you are using a Button, Image, Label or Shape Widget, then you may want to set the 'Page Jump' property of the Widget instead. This removes the need to use a script at all.

You can also specify page transitions using the optional parameters. This offers sliding and other effects as commonly seen in Native apps. Please refer to [Page Transitions](/developers/user-guide/scripting-apis/client-api/page-functions/page-transitions) for valid transition strings and examples.

## Example

    app.pageBack();
    app.pageBack('flip');    // go back using the 'flip' transition effect
    app.pageBack('flip',true);  // go back using the reverse 'flip' transition effect
   

## See Also

 - [pageJump()](/developers/user-guide/scripting-apis/client-api/page-functions/pagejump)

 - [pageNext()](/developers/user-guide/scripting-apis/client-api/page-functions/pagenext)

 - [pagePrevious()](/developers/user-guide/scripting-apis/client-api/page-functions/pageprevious)

 - [showPagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/showpagepopup)

 - [closePagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/closepagepopup)

 - [Back Button Pressed event](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mobile-native-app-events)

