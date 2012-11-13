---
title: "clearGlobalData()"
active_menu_item: developers
class_name: developers
full_width: true
---


variable **clearGlobalData** (optional varName)

## Parameters

<table>
<tr>
<td width="134">
{string} varName

</td>
<td width="20">
</td>
<td width="750">
The name of the variable to retrieve from the Global Data Pool. If no variable name is specified, then it will clear all variables.

</td>
</tr>
</table>
## Description

When you call this function, all trace of the variable will be removed from the Global Data Pool. Subsequent getGlobalData() calls will return an error if the same variable name is used again (unless re-created using setGlobalData()).

## See Also

 - [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp)
 - [setGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/setglobaldata)
 - [getGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/getglobaldata)

