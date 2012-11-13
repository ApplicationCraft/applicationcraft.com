---
title: "Accessing User Data in/from other Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


Assuming you have a dedicated App for handling authentication, any other Apps that use it will often require access to user information about that user. In many cases, you might also have a user settings page in your authentication app (although it can just as well be in another App) where additional user details are stored.

There are two main ways to get access to user data.

## Accessing Standard User Data

Application Craft automatically loads standard user information once the Signin process is completed. The user related fields available are

 - [User.Login] - the authenticated user's Login name, usually an email address

 - [User.Id] - this is a globally unique id of the authenticated user

 - [User.Name] - this is the Full Name of the authenticated user

 - [User.Parameters.\<Parameter Group\>.\<Parameter Name\>] - this allows you to retrieve custom Parameter data from the authenticated user. Customer User Parameters are [explained in this section](/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/user-parameters/) .

You would normally access this data in one of two ways

 - From Javascript using the app.getEnvValue() function

 - From the Expression Editor

## Global Data Store

A nice way of passing data between Apps is to use the Global Data Store. The Global Data Store is a temporary place to store any data you like that exists as long as the browser is open. As soon as the browser is closed, all information will be lost.

You would use this strategy if you have certain important user specific settings that are stored on a Settings page within your authentication App. Once the authentication has been verified, the Signin Widget's On Success event would be called. At that point, you can get data from the settings Widgets and put them into the Global Data Store. Other Apps can then query it.

This strategy is described in more detail in the 'Adding a Settings Page' topic.

## Accessing User Parameters

Application Craft also provides a way of creating customized parameter groups for users ( [User Parameter Groups](/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/user-parameters/) ). This allows you to effectively create any additional parameters your application may require. Our Tutorial App actually uses this approach as described earlier in the [Adding a Settings Page](/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/adding-a-settings-page/) chapter.

To access a User Parameter, you use the [app.userParameterGet()](/developers/documentation/scripting-apis/client-api/app-functions/userparameterget) function.

