---
title: "Checking that a Settings Record Exists"
active_menu_item: developers
class_name: developers
full_width: true
---


For completeness sake, our Tutorial App covers the situation where a User might have been created by an Administrator in the Console rather than by the Signup App. In this case, when the User signs in, there would be no Instance to store the settings. So, upon a successful login, we check to see if the Instance exists. If it doesn't, we create it there and then.

We have set up a query to do this, so the [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata) function is able to query the 'Signup Signin' App.

![Auth\_CheckUser](/img/docs/auth_checkuser.zoom95.png)

