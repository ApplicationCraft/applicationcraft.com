---
old_url: setproperty.htm
title: "setProperty()"
active_menu_item: developers
class_name: developers
full_width: true
---


int **setProperty** (widget, propertyName, value)

## Parameters

<table>
<tr>
<td width="175">
  { <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-list-parameters">wlist</a> }

</td>
<td width="14">
</td>
<td width="691">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="175">
{string} propertyName

</td>
<td width="14">
</td>
<td width="691">
name of the property whose value you want to set

</td>
</tr>
<tr>
<td width="175">
{string} value

</td>
<td width="14">
</td>
<td width="691">
the value to set the property to

</td>
</tr>
</table>
## Description

Use this property to set a property value from the specified Widget. The property name can be derived from the property name in the Property Bar of the Designer for the selected Widget. To determine the property name, hover over the property name and the actual property name will be shown. In most cases this may be similar to the main property name. The property name is not case sensitive.

For example, 'BG Color' should be specified as 'bgcolor' or 'BGColor'.

The page 'BG Image' property should be specified as 'backgroundimage' or 'backgroundImage'

![properties](/img/docs/properties.png)

You can also check the available properties for a specific widget using [debugProperties()](/developers/documentation/scripting-apis/client-api/app-functions/debugproperties)

    app.setProperty('myTextBox', 'color', '#ffffff');
    app.setProperty(['myTextBox', 'myOtherTextBox'], 'color', '#ffffff');
    obj = app.w('myTextBox');
    app.setProperty(obj, 'color', '#ffffff'); // shows how a Widget object can be passed
   

## See Also

 - [getProperty()](/developers/documentation/scripting-apis/client-api/widget-functions/getproperty)
 - [visible()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/visible)
 - [readOnly](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/readonly)
 - [enabled()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/enabled)
 - [\_widget](/developers/documentation/scripting-apis/client-api/objects-titbits/ref-widget)
 - [Widget Object](/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object)
 - [debugProperties()](/developers/documentation/scripting-apis/client-api/app-functions/debugproperties)
 - [Viewing Widget Properties](/developers/documentation/scripting-apis/client-scripting-overview/debugging-ac-scripts/viewing-widget-properties)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/t-MozAiRF0Q?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Automated & Javascript Drill Down [4:59]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]
