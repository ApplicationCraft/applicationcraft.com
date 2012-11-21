---
old_url: pagejump.htm
title: "pageJump()"
active_menu_item: developers
class_name: developers
full_width: true
---


**pageJump** (pageName, optional transition, optional isReverse)

## Parameters

<table>
<tr>
<td width="164">
{string} pageName

</td>
<td width="12">
</td>
<td width="717">
the Page Name, Page Number or  Page GUID of the page to display.

</td>
</tr>
<tr>
<td width="164">
{string} transition

</td>
<td width="12">
</td>
<td width="717">
  A string indicating the type of transition effect. You can find the <a href="/developers/documentation/scripting-apis/client-api/page-functions/page-transitions">available transition values here</a> .

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

Jumps to the specified Page in the App.

If this is all you are using in an Event function and you are using a Button, Image, Label or Shape Widget, then you may want to set the 'Page Jump' property of the Widget instead. This removes the need to use a script at all.

You can also specify page transitions using the optional parameters. This offers sliding and other effects as commonly seen in Native apps. Please refer to [Page Transitions](/developers/documentation/scripting-apis/client-api/page-functions/page-transitions) for valid transition strings and examples.

## Example

    app.pageJump('Intro');      // jump to page 'Intro'
    app.pageJump('Intro','flip');    // jump to page 'Intro' using the 'flip' transition effect
    app.pageJump('Intro;,'flip',true);  // jump to page 'Intro' using the reverse 'flip' transition effect
   

## See Also

 - [pageBack()](/developers/documentation/scripting-apis/client-api/page-functions/pageback)
 - [pageNext()](/developers/documentation/scripting-apis/client-api/page-functions/pagenext)
 - [pagePrevious()](/developers/documentation/scripting-apis/client-api/page-functions/pageprevious)
 - [showPagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/showpagepopup)
 - [closePagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/closepagepopup)

