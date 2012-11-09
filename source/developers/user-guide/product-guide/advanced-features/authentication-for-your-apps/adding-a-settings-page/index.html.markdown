---
title: "Adding a Settings Page"
active_menu_item: developers
class_name: developers
full_width: true
---


If you want to store additional information about your user, then you can add a page in your App or simply add more fields to the Signup page as required. The 'Signup Signin' Tutorial has an example of a settings page. Having a settings page will require you to write a few lines of code to manage the storage of this data. This is described below and in the Tutorial App.

Other Apps can switch to this settings page directly, bypassing the Signup and Signin pages completely. When the settings have been modified, the user can be sent back to the App it came from.

User Parameter Groups

If you have only a handful of parameters, then a good way of storing these parameters is to just use [User Parameters](../../../the-console/console-tabs/more/account-variables/user-parameters/index.htm) . These allow you to define new User Parameters within the Console. You can access these using the [userParameterGet()](../../../../scripting-apis/client-api/app-functions/userparameterget.htm) and [userParameterSet()](../../../../scripting-apis/client-api/app-functions/userparameterset.htm) functions. This is fast and easy as any Apps can access the parameters of the authenticated user without the need to store data in an App Instance.

Instance Storage

If you have lots of parameters, then the best way to store these is using an App Instance. It requires a little more code but is very flexible.

Both

You can also mix the two methods. We have used both in the 'Signup Signin' Tutorial App in fact. It can very easily be used as a complete template for most authentication situations you will encounter. The rest of this Chapter discusses both the User Parameter Groups and Instance Storage in more detail.

The Tutorial Example

We will look at a comprehensive example of how your settings page can be accesses, which is taken from the Tutorial. The App 'Signin Signup App' is the App that is accessed post authentication.

This is a summary of everything than happens in our Tutorial App.

 - The 'Signup Signin' App runs and show the login page

 - If the User needs to Signup, then the user is taken to the page and signs up

 - After a successful Signup, a storage Instance is created that will contain custom user settings

 - After a successful Signin, the App checks to see if a storage Instance already exists or not. If it doesn't it creates one.

 - The user is then taken to the main App 'Signup Signin App'

 - The user can press the 'Settings' button to be taken to the Settings page of the 'Signup Signin' App.

 - Settings can be modified, saved or canceled

