---
title: "Using one Login App for all Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


Once you have built a Login App, it can be reused across any of your Apps to authenticate Users. This saves a lot of time when building multiple Apps that all require a common User Authentication.

Let's say you have already built your authentication App and you then build other App called 'Reporting'  that requires authentication before the user can be access it. With the App properties selected for the 'Reporting' App, you select the Login Form property within the General section of the property bar.

You must also add the User Group "Authenticated Users" to the App Permissions in the Console.

You choose your authentication App from the dialog. Now, whenever someone tries to access the 'Reporting' App, AC will check to see whether the user is already logged on. If not, the authentication App will be started and typically, the Signin page will be shown first. If the User does not yet have an Account, they can move to a Signup page that creates the account for them.

Once signed it, the Authentication App knows to redirect back to the App that referred the User.

## See Also:

 - [Sign In](../sign-in)

 - [Sign Up](../sign-up)

