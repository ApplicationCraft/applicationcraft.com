---
title: "scrollTo()"
active_menu_item: developers
class_name: developers
full_width: true
---


**scrollTo** (date)

## Parameters

<table>
<tr>
<td width="166">
{date object} date

</td>
<td width="1">
</td>
<td width="740">
Scrolls the timeline display, locating the specified date in the center of the timeline area.

</td>
</tr>
</table>
## Description

Does what it says.

## Example

This example reads the date object contained by the 'dtGoto' widget and scrolls to that date

    app.w('timeline1').scrollTo(app.getValue('dtGoto'));
   

## See Also

 - [fitData()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/timeline/fitdata)

 - [scroll()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/timeline/scroll)

 - [Timeline Events](/developers/user-guide/scripting-apis/client-api/widget-object-functions/timeline/eventstimeline)

 - [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

 - [Working with the Timeline Widget](/developers/user-guide/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

