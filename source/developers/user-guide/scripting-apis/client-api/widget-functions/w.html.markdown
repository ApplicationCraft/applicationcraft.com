---
title: "w()"
active_menu_item: developers
class_name: developers
full_width: true
---


object w(widgetName)

## Parameters

<table>
<tr>
<td width="149">
{string} widgetName

</td>
<td width="12">
</td>
<td width="719">
the name of the Widget to locate

</td>
</tr>
</table>
## Description

This function locates the specified Widget within the App if used as app.w('myWidget'). It returns the Widget object.

However, you can also use it as follows

    myContainer = app.w("myRepeater");
    widgetObject = myContainer.w("textField");
   

In this case, you can see how the w() function can be used to locate a Widget inside a Container Widget.

## See Also

 - [User Parameters](/developers/user-guide/product-guide/the-console/console-tabs/more/account-variables/user-parameters/)
 - [userParameterSet()](/developers/user-guide/scripting-apis/client-api/app-functions/userparameterset)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/3rAyD-f30ic?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Repeater Container Overview  [5:04]
