---
title: "Debugging"
active_menu_item: developers
class_name: developers
full_width: true
---


We provide a number of ways of getting debug information to your client side browser tools.

 - console.log (var) - this is a standard javascript function that is used to write simple object data to the client debug console

 - console.dir (object) - this is also a standard javascript function that allows you to write more complex javascript objects to the console.

 - logging - the client and server APIs both have API methods for managing application logging; this allows your apps to write data to a database log table. Logging has a variety of useful applications, just one of which is debugging. More about [logging here](../../product-guide/advanced-features/logging-support/index) .

## Note : console.log() and console.var() can only be called from server side methods and NOT server side events.

Real Time Debugging using Browser Tools

The standard debugging methods (See [Debugging AC Scripts)](../client-scripting-overview/debugging-ac-scripts/index) can be used running your app in Live Mode. Open your app from the Live option, and then start your debugging tool in the normal manner.

Pro subscription users can debug SSJ scripts while previewing the app, selecting SSJ Debug (using Chrome Developer Tools)

This should be considered to be in a Beta state until mention of it is removed from the documentation.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/2Ok6kj9S_Xs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Debugging Server Side Javascript [2:18]

