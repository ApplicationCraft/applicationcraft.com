---
title: "getProperty()"
active_menu_item: developers
class_name: developers
full_width: true
---


{string} **getProperty** (widget, propertyName)

## Parameters

<table>
<tr>
<td width="158">
{string | object} widget

</td>
<td width="20">
</td>
<td width="702">
the Name or GUID of the Widget. This can be either a string or a widget object as available from [\_widget](/developers/user-guide/scripting-apis/client-api/objects-titbits/ref-widget) or other [widget object](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-object) functions.

</td>
</tr>
<tr>
<td width="158">
{string} propertyName

</td>
<td width="20">
</td>
<td width="702">
name of the property whose value you want to retrieve

</td>
</tr>
</table>
## Description

Use this property to get a property value from the specified Widget. The property name can be derived from the property name in the Property Bar of the Designer for the selected Widget. To determine the property name, hover over the property name and the actual property name will be shown. In most cases this may be similar to the main property name. The property name is not case sensitive.

For example, 'BG Color' should be specified as 'bgcolor' or 'BGColor'.

The page 'BG Image' property should be specified as 'backgroundimage' or 'backgroundImage'

![properties](/img/docs/properties.png)

You can also check the available properties for a specific widget using [debugProperties()](/developers/user-guide/scripting-apis/client-api/app-functions/debugproperties)

## Example

    app.getProperty('myTextBox', 'color');
    obj = app.w('myTextBox');
    app.getProperty(obj, 'color'); // this is the functional equivalent, but shows how a Widget object can be passed
   

## See Also

 - [setProperty()](/developers/user-guide/scripting-apis/client-api/widget-functions/setproperty)
 - [\_widget](/developers/user-guide/scripting-apis/client-api/objects-titbits/ref-widget)
 - [Widget Object](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-object)
 - [debugProperties()](/developers/user-guide/scripting-apis/client-api/app-functions/debugproperties)
 - [Viewing Widget Properties](/developers/user-guide/scripting-apis/client-scripting-overview/debugging-ac-scripts/viewing-widget-properties)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]

