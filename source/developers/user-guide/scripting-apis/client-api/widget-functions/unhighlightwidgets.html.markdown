---
title: "unhighlightWidgets()"
active_menu_item: developers
class_name: developers
full_width: true
---


**unhighlightWidgets** (optional widget)

## Parameters

<table>
<tr>
<td width="230">
{ [wlist](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-list-parameters) }

</td>
<td width="22">
</td>
<td width="740">
Widget identifier - string, string array, object or object array

</td>
</tr>
</table>

## Description

This enables you to remove the highlighting from any fields in your App, normally used in conjunction with [highlightWidgets()](/developers/user-guide/scripting-apis/client-api/widget-functions/highlightwidgets) . If you do not pass in any array, then all highlighted Widgets will be unhighlighted.

## Example

    app.unhighlightWidgets(["timeColor", "shapeColor"]);   // remove highlighting from widgets in array
    app.unhighlightWidgets(["timeColor"]);                 // remove highlighting from a single widget
    app.unhighlightWidgets();                            // remove all highlighting from all widgets
     
   

## See Also

 - [checkMandatory()](/developers/user-guide/scripting-apis/client-api/widget-functions/checkmandatory)
 - [highlightWidgets()](/developers/user-guide/scripting-apis/client-api/widget-functions/highlightwidgets)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]
