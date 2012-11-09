---
title: "mobileSMS()"
active_menu_item: developers
class_name: developers
full_width: true
---


## mobileSMS (number)

Parameters

<table>
<tr>
<td width="193">
{string} number

</td>
<td width="17">
</td>
<td width="670">
enter the Telephone number to send SMS to (optional)

</td>
</tr>
</table>

Description

This will invoke the devices SMS program, and if optional number entered that will be pre populated.

Label widgets, Image widget and Mobile Action button have a 'Link' property where you can also invoke the devices SMS program,

Example

    app.mobileSMS("07784355515");
   

See Also:

 - [mobileDial()](mobiledial)

 - [mobileEmail()](mobileemail)

 - [Label (Common)](../../../widget-properties-events/common/label)

 - [Image](../../../widget-properties-events/common/image)

 - [Action Button (Mobile)](../../../widget-properties-events/mobile/mobaction-button)

 - [Label (Mobile)](../../../widget-properties-events/mobile/moblabel)

