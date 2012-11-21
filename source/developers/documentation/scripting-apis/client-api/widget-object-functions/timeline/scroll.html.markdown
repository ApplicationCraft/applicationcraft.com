---
old_url: scroll.htm
title: "scroll()"
active_menu_item: developers
class_name: developers
full_width: true
---


**scroll** (days)

## Parameters

<table>
<tr>
<td width="166">
{integer} days

</td>
<td width="1">
</td>
<td width="740">
Scroll forward or backward (negative integer) the specified number of days.

</td>
</tr>
</table>
## Description

This will scroll the timeline display area the specified number of days.

## Example

    app.w('timeline1').scroll(7);    // scroll forward one week
    app.w('timeline1').scroll(-7);   // scroll backwards one week
   

## See Also

 - [fitData()](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/fitdata)
 - [scrollTo()](/developers/documentation/scripting-apis/client-api/useful-browser-functions/scrollto)
 - [Timeline Events](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/eventstimeline)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [Working with the Timeline Widget](/developers/documentation/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

