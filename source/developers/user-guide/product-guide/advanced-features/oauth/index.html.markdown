---
title: "oAuth"
active_menu_item: developers
class_name: developers
full_width: true
---


Implementing oAuth can be painful as you need to have components on both the client and server sides. To remove as much pain as possible, we have implemented the server side components in the Application Craft platform. We have added explicit support for individual platforms such as Twitter, Facebook and Dropbox with more to follow.

If you explicit oAuth support for a different platform, please contact [support@applicationcraft.com](mailto:support@applicationcraft.com) .

The general process works as follows.

  1.   From your client code, you call app.oAuthSignIn() to initiate the oAuth authentication procedure

  2.   If you want to make an API call to the 3rd party service, then from you client code you call an SSJ function, which is where you actually carry out up the API call to that service using ssj.oAuthRequest()

  3.   The SSJ function will then callback to the client function where you can process the returned data.

It's that simple.

If all you want to  do is authenticate someone, then you don't need to do steps 2 and 3.

The following sections go into more detail and give code examples.

