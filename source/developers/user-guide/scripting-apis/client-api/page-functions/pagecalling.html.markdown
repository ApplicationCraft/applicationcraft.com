---
title: "pageCalling()"
active_menu_item: developers
class_name: developers
full_width: true
---


**pageCalling** (optional transition, optional isReverse)

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

Deprecated - please use pageBack() instead.

## Description

This function had some limitations and is deprecated since pageBack() fully implements back behavior.

You can also specify page transitions using the optional parameters. This offers sliding and other effects as commonly seen in Native apps. Please refer to [Page Transitions](/developers/user-guide/scripting-apis/client-api/page-functions/page-transitions) for valid transition strings and examples.

## See Also

 - [pageJump()](/developers/user-guide/scripting-apis/client-api/page-functions/pagejump)
 - [pageNext()](/developers/user-guide/scripting-apis/client-api/page-functions/pagenext)
 - [pagePrevious()](/developers/user-guide/scripting-apis/client-api/page-functions/pageprevious)
 - [showPagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/showpagepopup)
 - [closePagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/closepagepopup)

