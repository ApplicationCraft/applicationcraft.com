---
old_url: mobileemail.htm
title: "mobileEmail()"
active_menu_item: developers
class_name: developers
full_width: true
---


**mobileEmail** (object)

## Parameters

<table>
<tr>
<td width="193">
{string} object

</td>
<td width="17">
</td>
<td width="670">
You can enter the recipients email address, subject and/or body to send to (optional)

</td>
</tr>
</table>
## Description

This will invoke the devices Email program, and if optional details are entered they will be pre populated.

Label widgets, Image widget and Mobile Action button have a 'Link' property where you can also invoke the devices Email program

## Example

    app.mobileEmail("someone@email.com");
    app.mobileEmail("someon@email.com?subject=ASubject&body=SomeText");
     
   

## See Also

 - [mobileDial()](/developers/documentation/scripting-apis/client-api/app-functions/mobiledial)
 - [mobileSMS()](/developers/documentation/scripting-apis/client-api/app-functions/mobilesms)
 - [Label (Common)](/developers/documentation/product-guide/widget-properties-events/common/label)
 - [Image](/developers/documentation/product-guide/widget-properties-events/common/image)
 - [Action Button (Mobile)](/developers/documentation/product-guide/widget-properties-events/mobile/mobaction-button)
 - [Label (Mobile)](/developers/documentation/product-guide/widget-properties-events/mobile/moblabel)

