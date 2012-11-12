---
title: "Sign In"
active_menu_item: developers
class_name: developers
full_width: true
---


Below is a screenshot of an App 'Signup Signin' being built in the AC IDE. An authenticating App typically has two pages on it. One for handling the Signin and the other for the Signup.

The Signin Page uses the following

 - A Text Widget where the user will enter their User name.

 - A  Password Widget  (located in the Authentication toolbox section within the left hand toolbar)

 - A Signin Widget (located in the Authentication toolbox section within the left hand toolbar)

![authentication-signin](/img/docs/authentication-signin.png)

To configure the Signin button Widget, you should select it and then configure the following properties

 - select the Login Widget property - then select the text field that will contain the user name the User will login with

 - select the Password Widget  property - then select the Password Widget that contains the password to use for the login

 - Remember Me Widget - points to a Checkbox Widget that tells that system to plant a Cookie so that the User Name is remembered the next time the user accesses your authentication App.

 - You will probably want to configure the 'Login Redirection' if you want to switch to another App when the authentication was successful.

## Login Widget On Success and On Failure Events

When the User clicks the Signin Widget, AC will authenticate and then call one of the following Widget Events

 - On Success()

 - On Failure()

If the authentication App was called by another App, whose 'Login Form' property was set, then the User will be automatically redirected back to that App if successfully authenticated. However, if the authentication App was the first App to be loaded, then you can either

 - Set the 'Login Redirection' property to tell it to immediately load another App which would be the standard or home page within your overall application. In this case you do not need to use the On Success event at all (and is therefore simpler)

or you can use Javascript to manage the redirection within the On Success event

 - Move to another Page within the same App - just use the [app.pageJump()](../../../scripting-apis/client-api/page-functions/pagejump) function

 - Switch to another App - use [app.switchApp()](../../../scripting-apis/client-api/app-functions/switchapp)

## Example Code

Here is an example of a typical function that would be called after a successful login Note that the App GUID of the App being switched to can be retrieved by locating that App in the Console. The ID is on the right hand side.

    function handler_btnSignin_onSuccess(login, token){
        app.setGlobalData("UserInstId", token); // pass the Instance ID to other Apps via the Global Data Pool
        app.switchApp("f1000334-62b3-4f03-b26a-cef2d2608eba");  // Switch to another App  
    }
   

## See Also

 - [Sign In Properties](../../../widget-properties-events/authentication/authsign-in)

 - [Signup Widget](sign-up)

