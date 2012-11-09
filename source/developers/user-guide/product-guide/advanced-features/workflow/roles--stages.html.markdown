---
title: "Roles & Stages"
active_menu_item: developers
class_name: developers
full_width: true
---


Workflow relies heavily on using

 - User Roles - to assign people to roles specific to this process or app (you don't have to use roles, see below)

 - Workflow Stages - to define the different logical states an instance of a process (app) can have

Roles

Roles are associated with that process and that process alone. You can assign one or more Persons and Groups to that role. You do not have to define Roles if your assignments and notifications involve individuals or groups. However, try to avoid assignments to a Person as this is if a person leaves, it can impact the process negatively. Better is to define a Role and then assign a person to that Role. This way, if the person leaves, you simply add the new Person to the Role, at which point the existing assignments are automatically applied to the new Person. You can then remove the Person who left and the process is still properly mapped to a responsible Person.

You should be careful not to confuse Roles with Groups. A Group defines a collection of people in a Position (or a position occupied by a single person) that is more or less constant across an organization and across all processes or apps.

Roles are defined on the Users Roles tab (right side of the Console) for the selected App. Each Role has two fields that must be entered

 - Name - this is the free text name of the Role and will appear in listings, queries etc.

 - ID - this is a user definable, Javascript friendly name that does not contain spaces or the usual control characters or symbols. This ID is used from Workflow functions that reference a Role. It will be automatically created when you first enter the Name but any alterations will not modify the ID. You should be careful not to change the ID once your App is live as it will invalidate any calls that reference that ID.

![WFUserRoles](/img/docs/wfuserroles.png)

Stages

A Stage is the logical state that an individual app instance (record) is in at any one time. An instance must be assigned a Stage and only one Stage can be assigned at a time.

Stages are defined within the Designer. Open up your App and then, on the bottom of the screen next to the Designer and Code buttons, you will find the Workflow button. Refer to the next section for details on how to define Stages from the Workflow diagram.

