---
old_url: printing_strategies.htm
title: "Printing Strategies"
active_menu_item: developers
class_name: developers
full_width: true
---


On the whole, printing should be pretty straightforward, you will either be printing an empty app or an app with its variable data fields included in the printout.

Another thing you will consider is what to do while you wait for the printing to happen. These are possible things you can do

 - Nothing at all (not friendly for wait times)

 - Show the Twirly Thing before the [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp) call and hide it from the callback function

 - Use isPrinting() in your code to check whether printing is still happening. This approach allows the user to carry on elsewhere in the app and handle the printing whenever it is ready

 - Use the standard javascript function setTimeout() to check the status in combination with isPrinting().

For code examples, please go to the [Printing Examples](/developers/documentation/product-guide/advanced-features/printing/printing-examples) topic.

**Important:** do not try to use window.open(url) with in the printApp() callback function. It will not work. Take the url and activate a link on the screen or store it in a global and when a button is pressed, use window.open(url) at that point.

