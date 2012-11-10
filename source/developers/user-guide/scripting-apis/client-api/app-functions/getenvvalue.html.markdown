---
title: "getEnvValue()"
active_menu_item: developers
class_name: developers
full_width: true
---


{string} **getEnvValue** (VariableName)

## Parameters

<table>
<tr>
<td width="149">
{string} VariableName

</td>
<td width="22">
</td>
<td width="709">
the name of the environment variable you want to retrieve.

</td>
</tr>
</table>
## Description

Environment information is sometimes useful if you want your App to be able to identify information that lies outside the Widget data. The following variables are supported currently. You should enter them inside square brackets as shown below.

 - [Form.Widgets.\<widgetName\>] - specify the simple Widget name as shown in the Widget property 'Name'

 - [Session.Id] - the ID of the browser session

 - [Instance.Id] = the ID of currently running Instance (must have been saved to have an Instance ID)

 - [User.Login] - the authenticated user's Login name, usually an email address

 - [User.Id] - this is a globally unique id of the authenticated user

 - [User.Name] - this is the Full Name of the authenticated user

 - [User.Parameters.\<Parameter Group\>.\<Parameter Name\>] - this allows you to retrieve custom Parameter data from the authenticated user. Customer User Parameters are [explained in this section](../../../product-guide/the-console/console-tabs/more/account-variables/user-parameters/) .

**Workflow** See also: [Workflow Functions](../workflow-functions/)

 - [Stage.Id] - this is the Id of the Stage of your App

 - [Stage.Name] - this is the Name of the Stage of your App

 - [Stage.Title] - this is the Title of the Stage of your App

 - [Stage.Description] - this is the Description of the Stage of your App.

## **Example**

    app.getEnvValue("[User.Login]"); //get the authenticated users Login 
    var myUrl = app.getInstanceURL(app.getEnvValue("[Instance.Id]")); //get the Instance URL
   

## See Also

 - [userParameterGet()](userparameterget.htm)

 - [Custom User Parameters](../../../product-guide/the-console/console-tabs/more/account-variables/user-parameters/)

