---
title: "prop()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **prop** (propName, optional propValue)

## Parameters

<table>
<tr>
<td width="169">
{various} result

</td>
<td width="17">
</td>
<td width="694">
Returns the property as a variable or object

</td>
</tr>
<tr>
<td width="169">
{string} propName

</td>
<td width="17">
</td>
<td width="694">
The name of the property. See below for correct way to format property names

</td>
</tr>
<tr>
<td width="169">
{various} propValue

</td>
<td width="17">
</td>
<td width="694">
The variable or object that contains the property value to be applied

</td>
</tr>
</table>
## Description

The prop() function should be used to get or set a Widget property. It is used as an alternative to app.getProperty() or app.setProperty(). You might choose to use widgetObj.prop() when you are working with a Widget object rather than at the App level.

To determine the property name, look in the property bar and remove any spaces. The property name is not case sensitive. For example, 'BG Color' should be specified as 'bgcolor' or 'BGColor'.

## See Also

 - [getProperty()](../../widget-functions/getproperty)

 - [setProperty()](../../widget-functions/setproperty)

