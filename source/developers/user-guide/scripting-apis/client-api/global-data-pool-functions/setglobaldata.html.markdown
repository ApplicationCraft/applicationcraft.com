---
title: "setGlobalData()"
active_menu_item: developers
class_name: developers
full_width: true
---


ret = **setGlobalData** (varName, data)

## Parameters

<table>
<tr>
<td width="134">
{string} varName

</td>
<td width="20">
</td>
<td width="750">
The name to assign to the Pool Variable

</td>
</tr>
<tr>
<td width="134">
{any type} data

</td>
<td width="20">
</td>
<td width="750">
The data to save to varName

</td>
</tr>
</table>
## Description

This stores any data to the Global Data Pool. The data can then be recalled at any point and from any App within the current browser session. Any Apps spawned or switched to will have access to it.

Read up on [getAppSnapshot()](../app-functions/getappsnapshot) and [setAppSnapshot()](../app-functions/setappsnapshot) for useful example of storing an entire App snapshot to the Global Data Pool.

## See Also

 - [switchApp()](../app-functions/switchapp)

 - [getGlobalData()](getglobaldata)

 - [clearGlobalData()](clearglobaldata)

 - [getAppSnaphot()](../app-functions/getappsnapshot)

 - [setAppSnapshot()](../app-functions/setappsnapshot)

