---
title: "setStage()"
active_menu_item: developers
class_name: developers
full_width: true
---


setStage (stageName)

## Parameters

<table>
<tr>
<td width="228">
{string} stageName

</td>
<td width="9">
</td>
<td width="643">
The name of the Stage to change to; must be a Stage defined within the [Workflow diagram](../../../product-guide/advanced-features/workflow/workflow-diagram) .

</td>
</tr>
</table>
## Description

This sets the Stage for your App.

The Stage is actually an internal property of the App Instance (record). The Stage name you specify here will not persist until you save the Instance using [instanceCreate()](../instance-data-functions/instancecreate) , [instanceUpdate()](../instance-data-functions/instancesave) or use a submit button widget.

An error will be triggered if you specify an invalid stage name as soon as you call setStage() and again once the instance is saved.

## See Also

 - [getStage()](getstage.htm)

