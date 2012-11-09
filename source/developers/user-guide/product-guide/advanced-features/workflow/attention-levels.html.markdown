---
title: "Attention Levels"
active_menu_item: developers
class_name: developers
full_width: true
---


When you are working with workflowed instances, it can be useful to see how urgent an instance is for a given assignment. An Attention Level can be specified in the assignment function [assignInstance()](../../../scripting-apis/client-api/workflow-functions/assigninstance) so that when you report on workflow instances, you can

 - see the urgency of an instance

 - order your reports by the Attention Level

An attention level of 0 means indicates that the assignment does not require any special attention. You can then assign a higher integer value (any value you like) to indicate increased importance or urgency.

When you are looking at your Assignments in the Console or in a Report, you can then sort or filter based on the attention level.

See Also:

 - [assignInstance()](../../../scripting-apis/client-api/workflow-functions/assigninstance)

