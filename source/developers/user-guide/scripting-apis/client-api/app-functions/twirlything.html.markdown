---
title: "twirlyThing()"
active_menu_item: developers
class_name: developers
full_width: true
---


**twirlyThing** (widget, optional state,optional text, optional textColor, optional bgColor, optional opacity);

## Parameters

<table>
<tr>
<td width="155">
{ [wlist](../objects-titbits/widget-list-parameters) } widget

</td>
<td width="15">
</td>
<td width="710">
This is a Widget Object ( **not** widget name) that should be locked and 'twirled'

</td>
</tr>
<tr>
<td width="155">
{boolean} state

</td>
<td width="15">
</td>
<td width="710">
If true, it shows the twirly thing hourglass. False hides it.

</td>
</tr>
<tr>
<td width="155">
{string} text

</td>
<td width="15">
</td>
<td width="710">
Include a text message below the hourglass

</td>
</tr>
<tr>
<td width="155">
{string} textColor

</td>
<td width="15">
</td>
<td width="710">
Color of the text

</td>
</tr>
<tr>
<td width="155">
{string} bgColor

</td>
<td width="15">
</td>
<td width="710">
Background Color

</td>
</tr>
<tr>
<td width="155">
{integer} opacity

</td>
<td width="15">
</td>
<td width="710">
Opacity

</td>
</tr>
</table>
## Description

This shows/hides the "twirly thing" hourglass and can be applied to any Widget object, including the entire app object. The object specified is then locked, so user interaction is prevented. You can unlock and hide the hourglass by setting the state parameter to false.

You do not need to use twirlyThing() explicitly when data is being loaded from a View. This is handled automatically by AC.

## Example

    app.twirlyThing(app,@true);@@//@locks@down@the@entire@App@and@shows@the@twirly@thing@hourglass.
    app.twirlyThing(app,@false);@@//@unlocks@down@the@entire@App@and@removes@the@twirly@thing@hourglass.
    app.twirlyThing('ListboxName',@true);@@//@Locks@down@just@the@listbox@Widget@named@'ListboxName'
    app.twirlyThing(myListboxObj',@true);@@//@Locks@down@just@the@listbox@widget@object
     
    function@handler_actionBtn_onClick(mouseev){
     app.twirlyThing(app, true);
     
        setTimeout(function(){
            app.pageJump("page2");
        }, 100);
        
    }
     
     
    function@handler_page2_onPageShow(){
        app.twirlyThing(app, false);    
    }
     
   

Example usage to show twirly thing between page navigation

**See Also:**

 - [Twirly Thing/Hourglass](../../../product-guide/advanced-features/twirly-thing/hourglass/)

