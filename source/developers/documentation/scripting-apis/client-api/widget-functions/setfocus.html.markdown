---
title: "setFocus()"
active_menu_item: developers
class_name: developers
full_width: true
---


{string} **setFocus** (widget)

## Parameters

<table>
<tr>
<td width="158">
{string | object} widget

</td>
<td width="20">
</td>
<td width="702">
    the Name or GUID of the Widget. This can be either a string or a widget object as available from <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/ref-widget">\_widget</a> or other <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object">widget object</a> functions.

</td>
</tr>
</table>
## Description

Use this property to set the focus to a specified widget on the page

## Example

    app.setFocus('myTextBox');
     
     
    app.setFocus('TxtTicketNotes'); 
    setCursorEnd(app.w('TxtTicketNotes').base().find('textarea')[0]);
    }
    function setCursorEnd(elem) {
        pos = elem.value.length;
        if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
        elem.scrollTop = 999999;
     
   

If you want to focus on a text/text area widget and also scroll to the end of existing content in that widget:

