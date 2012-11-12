---
title: "Sign Up"
active_menu_item: developers
class_name: developers
full_width: true
---


What if the person accessing the authentication App does not yet have a user account? AC's Signup functionality allows you to manage this process also and usually without needing to write any code.

From the screenshot in previous Signin topic, you will see that the App has a 'Signup' button. This simply skips to the Signup page within the App, which will handle the signup process. The example below shows the Signup page from the 'Signup Signin' Tutorial.

![authentication-signup](/img/docs/authentication-signup.png)

The key Widget in this case is the Signup Widget, which is the "Sign Up" button in the screenshot. Here is a closer look at the key properties

![authentication-signup-props](/img/docs/authentication-signup-props.png)

The following properties are the main ones that should be configured

 - Login Widget (required)  - points to a Text Widget in the App that should contain the email address of the user. This will be used as the login user name.

 - Password Widget (required) - points to the Password Widget that defines the User Account password

 - User Name (required) - each User Account has a full name that clearly identifies the user within the AC Console. This is not the name that the user will sign in with (which is Login Widget).

 - Min Chars (required) - this specified a minimum number of characters that the password should have.

 - Confirm Widget (optional) - points to a second Password Widget so that the system can verify that the password is correctly entered

 - Confirm Info (optional) - points to a Label Widget so AC can display any password mismatch errors in this label

 - Confirm Colors (optional) - if there are any password errors, you can optionally specify the colors for a) correctly matching password or b) mismatches passwords. These are applied once the Signup button is pressed.

 - Captcha Widget - if you include a Captcha Widget in your App, then you can specify this Widget so AC can perform a Captcha validation (which executes on the server)

When the Signup button is pressed, AC will first of all perform all necessary validations for the Captcha and password confirmation. It will also detect if the requested login name already exists. If everything is ok, it will then create the new User Account.

## See Also

 - [Sign Up Properties](/developers/user-guide/product-guide/widget-properties-events/authentication/authsign-up)

 - [Storing User Account Details in the App](storing_user_account_details_i.htm)

 - [Signin](/developers/user-guide/product-guide/widget-properties-events/authentication/authsign-in)

 - [Password](/developers/user-guide/product-guide/advanced-features/authentication-for-your-apps/password)

