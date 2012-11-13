---
title: "fetchDataPage()"
active_menu_item: developers
class_name: developers
full_width: true
---


**fetchDataPage** (relativePageString)

**fetchDataPage** (relativePageNumber)

## Parameters

<table>
<tr>
<td width="226">
{string} relativePageString

</td>
<td width="10">
</td>
<td width="644">
'next', 'previous', 'last' or 'first'

</td>
</tr>
<tr>
<td width="226">
{integer} relativePageNumber

</td>
<td width="10">
</td>
<td width="644">
Fetch page 'n'

</td>
</tr>
</table>
## Description

Grids and Repeater Containers that are connected to Data Views fetch pages of data from the server. The size of the data page is specified in the 'Elements per Page' property of the Widget.

In order to fetch another or a previous page of data, you use the fetchDataPage() function. The easiest way to do this is the use the string values shown in the relativePageString parameter description shown above.

If you are using a Repeater Container then you should be aware of the [drawNextPage()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) and [isAllDataDrawn()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn) functions. See the [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) function for a general description of Repeater Container usage with these functions.

## Example

    app.w('grid1').fetchDataPage('next');
    app.w('repeaterContainer').fetchDataPage(3);
   

## See Also

 - [getViewData()](/developers/user-guide/scripting-apis/client-api/data-view-functions/getviewdata)
 - [drawNextPage()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage)
 - [isAllDataDrawn()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn)
 - [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Bq6PinoEIA8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Managing Large Lists, Repeater Contents & Data Paging [4:25]
