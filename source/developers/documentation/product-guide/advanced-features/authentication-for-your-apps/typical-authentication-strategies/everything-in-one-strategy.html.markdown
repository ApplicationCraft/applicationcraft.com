---
old_url: everything_in_one_strategy.htm
title: "Everything in One Strategy"
active_menu_item: developers
class_name: developers
full_width: true
---


With this approach, the first page in your App will be the Signin page. You will then write a simple script in the On Success event that moves to the main page once authentication is successful.

To do this, select the Signin Widget (described in more detail [here](/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/sign-in) ), then at the bottom of the property bar click on the Events tab.

![authentication-events-tab](/img/docs/authentication-events-tab.png)

Click on the On Success event and Select Javascript on the right side

![authentication-onsuccess](/img/docs/authentication-onsuccess.png)

Add the script command 'app.pageJump('Home Page'); into the event (or whatever page name is appropriate)

![authentication-onsuccess-code](/img/docs/authentication-onsuccess-code.png)

You can also manage the On Failure event by displaying a message or using the [showPagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/showpagepopup) command.

