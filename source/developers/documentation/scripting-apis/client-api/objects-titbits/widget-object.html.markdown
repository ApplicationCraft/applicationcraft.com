---
title: "Widget Object"
active_menu_item: developers
class_name: developers
full_width: true
---


Each Widget is an AC object. In most cases, you do not need to access this, but for Repeaters and other Containers, it can be very useful.  A Widget Object can also be passed as a parameter to most Widget functions instead of a string.

The following table shows various ways of accessing the Widget Object.

<table>
<tr>
<td width="219">
    <strong><a href="/developers/documentation/scripting-apis/client-api/objects-titbits/ref-widget">_widget</a></strong>

</td>
<td width="19">
</td>
<td width="642">
The _widget variable is available within every Application Craft Event and is the object of the Widget, Page or App that triggered the event.

</td>
</tr>
<tr>
<td width="219">
  <strong>app.w('widgetName')</strong>

</td>
<td width="19">
</td>
<td width="642">
Finds any Widget in the entire App with the specified name.

</td>
</tr>
<tr>
<td width="219">
  <strong>pageObj.w('widgetName')</strong>

</td>
<td width="19">
</td>
<td width="642">
Assuming that pageObj is a Page Widget, this locates the specified Widget and returns its Widget object.

</td>
</tr>
<tr>
<td width="219">
  <strong>containerObj.w('widgetName')</strong>

</td>
<td width="19">
</td>
<td width="642">
If containerObj is an AC Container Widget, it returns a Widget object within that container with the specified name. Read more about this here, as it is very useful for Repeater Grids.

</td>
</tr>
</table>
There are several methods and properties available within the Widget object. Please refer to the [Widget Object Functions](/developers/documentation/scripting-apis/client-api/widget-object-functions/) chapter for a complete list of functions.

