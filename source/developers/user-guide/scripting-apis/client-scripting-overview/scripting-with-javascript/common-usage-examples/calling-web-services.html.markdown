---
title: "Calling Web Service APIs"
active_menu_item: developers
class_name: developers
full_width: true
---


Application Craft lets you call SOAP and RESTful Web Services in a way that looks to remove as much complexity as possible. When considering how to consume Web Services, there are generally 3 possible approaches you could consider

 - Call Web Service directly : if you are going to call this web service from one place in one App then this is quick and simple. You can use this approach also in many places from many Apps but you should consider the other approaches as well. AC includes Web Client API Extensions. This allows you to make API calls to any 3rd party API.

 - Extend the Application Craft 'app' object : this lets you hide some complexity from the users by embedding this into your extension (Javascript). You add your Javascript extension to the AC system on the server and you then can use your own functions, such as app.myLibrary.callFunction(parameter\_list). This does not take up a lot more time than calling Web Services directly from your scripts, but for more complex calls, you can keep your AC script much cleaner as the messy code is hidden within the extension.

 - Write your own Widget : this is the Rolls-Royce approach. It requires most work up front, but once built, your App designers will thank you as there is often no code at all for the App designer. All code is contained within the Widget and you access it using properties. You Web Service can be called, processed and then the results can be mapped using a simple mapping dialog (Application Craft provides one of these as standard).

This chapter shows all of these approaches being used. If you want to know how to build AC system extensions, then [Extending Application Craft](/developers/user-guide/adding-widgets-and-api-methods/) and [Widget Extensions](/developers/user-guide/adding-widgets-and-api-methods/adding-your-own-widgets-to-application-craft/) are described within the Developer Guides.

## See Also

[Extending Application Craft](/developers/user-guide/adding-widgets-and-api-methods/)

[Widget Extensions](/developers/user-guide/adding-widgets-and-api-methods/adding-your-own-widgets-to-application-craft/)

