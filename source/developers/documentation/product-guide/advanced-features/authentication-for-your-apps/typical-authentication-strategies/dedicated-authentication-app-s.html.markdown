---
old_url: dedicated_authentication_app_s.htm
title: "Dedicated Authentication App Strategy"
active_menu_item: developers
class_name: developers
full_width: true
---


This approach requires no code at all. There are two ways to manage the process

  1.   The way into the App is via the authentication App itself and you set the 'Login Redirection' property to redirect the user to the main App once successfully authenticated

  2.   A user may access one of the other Apps in your overall App. In this case, those Apps all have the 'Login App set to point to the authentication App. If the user is not already authenticated, it will first redirect to the authentication App before allowing them in.

The following sections describe this process in more detail as well as how to configure the Signin ad Signup Apps.

