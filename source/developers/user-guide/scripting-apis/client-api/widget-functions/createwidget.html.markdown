---
title: "createWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


**createWidget** ('containerName', 'widgetClassName', position, defaultProps);

<table>
<tr>
<td width="168">
{string}containerName

</td>
<td width="20">
</td>
<td width="692">
The container into which the widget will be created

</td>
</tr>
<tr>
<td width="168">
(string)widgetClassName

</td>
<td width="20">
</td>
<td width="692">
The class name available in property bar for example TextMobile, WiziCore\_UI\_TextWidget

</td>
</tr>
<tr>
<td width="168">
position

</td>
<td width="20">
</td>
<td width="692">
The position the widget will be created in the container (Vertical or Horizontal layout mode). -1 or undefined add as last item

</td>
</tr>
<tr>
<td width="168">
(object)defaultProps

</td>
<td width="20">
</td>
<td width="692">
Create the object with defined properties: {name: 'my\_cool\_name', width: 200, height: 500}, Note: the name will be changed dynamically if widget with this name exists

</td>
</tr>
</table>

## Description

Allows you to dynamically create widgets in your app.

If container is in Vertical or Horizontal layout mode:

<table>
<tr>
<td width="175">
**Position**

</td>
<td width="14">
</td>
<td width="691">
</td>
</tr>
<tr>
<td width="175">
undefined or -1

</td>
<td width="14">
</td>
<td width="691">
The widget will be created at the end of the existing stack of widgets (at the bottom for Vertical Layout, at the right for Horizontal Layout)

</td>
</tr>
<tr>
<td width="175">
0

</td>
<td width="14">
</td>
<td width="691">
The widget will be created at the top of the existing stack of widgets (at the top for Vertical Layout, at the left for Horizontal Layout)

</td>
</tr>
<tr>
<td width="175">
1

</td>
<td width="14">
</td>
<td width="691">
The widget will be created after the first widget in the existing stack (below the top widget for Vertical layout, to the right of the left hand widget for Horizontal Layout)

</td>
</tr>
<tr>
<td width="175">
2

</td>
<td width="14">
</td>
<td width="691">
The widget will be created after the second widget in the existing stack

</td>
</tr>
<tr>
<td width="175">
etc

</td>
<td width="14">
</td>
<td width="691">
etc

</td>
</tr>
</table>

If the container is in Absolute Layout mode, use {x:100,y:100} in defaultProps parameter to create the widget with x/y coords of 100

Due to differences between the GoogleMap V2 Api (used in the Google Map widget) and the GoogleMap V3 Api (used in the [Google V3 Maps Widget](../../../product-guide/advanced-important-widgets/google-v3-maps-widget/) that can cause conflicts, do not use createWidget() for both widgets in the same app.

Please note that dynamically created widgets can't use the Repeat property

( [Repeating Widgets Across Multiple Pages](../../../product-guide/content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) ) and can't be used as fields in the schema.

## Example

    /* Create a widget with width of 50px, height 100px 
    at the bottom of the stack of widgets in a container set to Vertical Layout mode */
    var widget = app.createWidget('page1', 'WiziCore_UI_TextWidget',undefined, {width:50,height: 100});
     
    /* Create a widget with width of 75px, height 50px 
    at the top of the stack of widgets in a container set to Vertical Layout mode */
    var widget = app.w('page1').createWidget('WiziCore_UI_TextWidget',0, {width:75,height: 50}  
     
    /* Create a widget with width of 75px, height 50px 
    3rd in the stack of existing widgets in a container set to Vertical Layout mode */
    var widget = app.w('page1').createWidget('WiziCore_UI_TextWidget',2, {width:75,height: 50}  
     
    /* Create a widget with width of 75px, height 50px 
    at the location of x=50, y=100 in a container set to Absolute Mode */
    var widget = app.w('page1').createWidget('WiziCore_UI_TextWidget',undefined, {x:50, y:100, width:75,height: 50}  
     
    //To get the name of the created widget use: 
    var name = widget.name();
   

## See Also

 - [deleteWidget()](deletewidget.htm)

 - [Absolute and Relative Layout](../../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/absolute-and-relative-layout)

