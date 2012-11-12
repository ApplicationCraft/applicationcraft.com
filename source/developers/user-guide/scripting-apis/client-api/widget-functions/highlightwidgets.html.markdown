---
title: "highlightWidgets()"
active_menu_item: developers
class_name: developers
full_width: true
---


**highlightWidgets** (widget, optional highlightColor, optional highlightOpacity)

## Parameters

<table>
<tr>
<td width="202">
{ [wlist](../objects-titbits/widget-list-parameters) }

</td>
<td width="11">

</td>
<td width="667">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="202">
{string} highlightColor

</td>
<td width="11">

</td>
<td width="667">
optional, enter the required highlight color. If left blank then the App property 'Highlight color' will be used.

</td>
</tr>
<tr>
<td width="202">
{integer} highlightOpacity

</td>
<td width="11">

</td>
<td width="667">
optional, enter the required highlight opacity. If left blank then the App property 'Highlight opacity' will be used.

</td>
</tr>
</table>
## Description

This enables you to highlight any fields in your App. A common reason for doing this is validations. If you have performed a validation in your code and it determines that the respondent's attention needs drawing to one or more particular Widgets, then this function highlights the Widgets specified in the array.

Highlighting color and opacity do not need to be specified. If the color parameters are not supplied, then AC will use the App properties 'Highlight Color' and 'Highlight Opacity'

Please note: The highlighting is handled with CSS shadow. This is set to render outside the widget but the outside shadow isn't included in  the widget's (element's) size and so if your widget is in a container some of the outside elements can be hidden by the container. If you add a small (3-5px) margin to the widget it will ensure that the outside shadow lies within the container, or alternatively set a small padding to the container

## Example

    app.highlightWidgets(["timeColor", "shapeColor"], "#22ff22", 40);
     
    app.highlightWidgets(["timeColor"]);
   

or

.

## See Also

 - [checkMandatory()](checkmandatory)

 - [unhighlightWidgets()](unhighlightwidgets)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]
