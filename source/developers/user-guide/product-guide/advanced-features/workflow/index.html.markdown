---
title: "Workflow"
active_menu_item: developers
class_name: developers
full_width: true
---


## At the time of writing, Workflow is still in alpha. Please contact [support@applicationcraft.com](mailto:support@applicationcraft.com) if you require more information or assistance .

The [Client API](../../../scripting-apis/client-api/index) section describes the complete set of [workflow functions](../../../scripting-apis/client-api/workflow-functions/index) .

Workflow is a set of client side API functions that allows you to do the following

 - Collect data relating to some object, action or business process

 - Define Roles involved specifically with that process

 - Define Workflow Stages relating to that process

 - Send notifications to people when something within your App / process has changed or an event has occurred

 - Assign app instances to a role, person or group so that these instances can appear in a task list for that person or those people who are involved with that instance

A typical example of a Workflow App is an approval process. Below is a typical scenario that can very quickly and easily be implemented using Application Craft

 - An employee requests a new PC

 - The requests is routed to that person's manager (done using a lookup, for example)

 - Once approved by the Manager, it is routed to the Financial Controller (a Role that is mapped to a Person)

 - If the purchase amount is greater than \$5,000 then it is routed to the CFO

At any stage during this process, the App can be designed so that all instance assignments can be reported on. This makes task list management very easy.

