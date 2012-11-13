---
title: "checkMandatory()"
active_menu_item: developers
class_name: developers
full_width: true
---


{string array} **checkMandatory** (ValidationType, optional widgets, optional highlightColor, optional highlightOpacity)

## Parameters

<table>
<tr>
<td width="178">
{integer} ValidationType

</td>
<td width="16">
</td>
<td width="686">
1 (Form Widgets), 2 (Widgets Array) or 3 (Both)

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="16">
</td>
<td width="686">
Use 1 to check all fields where Mandatory widget property is set to 'true'. It will ignore any widgets supplied in the widgets parameter.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="16">
</td>
<td width="686">
Use 2 if you want to pass in an array of Widget ID strings in the second parameter; this will ignore/override the Mandatory property set on any widgets and only check the widgets listed in second parameter.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="16">
</td>
<td width="686">
Use 3 if you wish to perform a combination of 1 and 2 simultaneously.

</td>
</tr>
<tr>
<td width="178">
  { <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-list-parameters">wlist</a> } widgets

</td>
<td width="16">
</td>
<td width="686">
optional, If 2 or 3 is passed in the ValidationType parameter, Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="178">
{string} highlightColor

</td>
<td width="16">
</td>
<td width="686">
optional, Select the color you wish to show on fields not completed. If left blank then the App property 'Highlight color' will be used.

</td>
</tr>
<tr>
<td width="178">
{integer} highlightOpacity

</td>
<td width="16">
</td>
<td width="686">
optional, Select the opacity of the color. If left blank then the App Property 'Highlight opacity' will be used

</td>
</tr>
</table>
## Returns

This function returns a string array of Widget Names that failed the check. If all Widgets are correctly completed, then the array will be empty and you can test, for example, using if(retArray.length\>0 ). This allows you to build specific error handling logic.

## Description

This enables you to check for completion of any fields that are required. The precise behavior depends on the ValidationType parameter. This function can be called at any point such as changing from one page to the next where you want to ensure that data is correctly entered before moving to the next page. Another important place is just before data is submitted.

If you want to perform more complex validations then you can also use the [highlightWidgets()](/developers/documentation/scripting-apis/client-api/widget-functions/highlightwidgets) function to highlight any Widgets that require attention.

Please note: The highlighting is handled with CSS shadow. This is set to render outside the widget but the outside shadow isn't included in  the widget's (element's) size and so if your widget is in a container some of the outside elements can be hidden by the container. If you add a small (3-5px) margin to the widget it will ensure that the outside shadow lies within the container, or alternatively set a small padding to the container

## Example

    // Check that the email field has been filled
    var valid = app.checkMandatory(2, "txtEmail");
     
    // Check that all fields specified in the array have been filled in
    var valid = app.checkMandatory(2, ["txtFirstName", "txtLastName", "txtEmail", "timeRegion"], undefined, 100);
     
    // valid is an array containing any widgets that failed the test
    if(valid.length>0) {
        app.showMessage("Please complete all required fields.", "Validation Error");
    }
   

## See Also

 - [highlightWidgets()](/developers/documentation/scripting-apis/client-api/widget-functions/highlightwidgets)
 - [unhighlightWidgets()](/developers/documentation/scripting-apis/client-api/widget-functions/unhighlightwidgets)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]
