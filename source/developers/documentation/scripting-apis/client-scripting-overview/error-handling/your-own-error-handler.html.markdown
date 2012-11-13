---
title: "Your Own Error Handler"
active_menu_item: developers
class_name: developers
full_width: true
---


To build your own error handler, all you need to do is to use the onError() App Event. This will fire whenever an uncaught error is encountered and you can handle the error as you wish.

You can also suppress Application Craft error messages by returning false from this event. Returning nothing or true will result in Application Craft displaying the error message.

Obviously, you can use the alert() function to display your errors but a nicer way is to build your own error page in your App. The best way of doing this is to use the [app.showPagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/showpagepopup) to display your error in your error handling page and display it over the current page.

The advantage of this approach is that it will fit in with the design of your App and is also very quick and easy to set up.

## httpRequest() Error Handling

Because [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) is makes asynchronous AJAX calls, Application Craft will never handle the error automatically. This is the responsibility of the [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) callback function.

## Example

This function shows the error handler catching the error and simply displaying the error message the page that will be displayed with [showPagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/showpagepopup)

    function handler_application_onError(error){
        app.setValue('lblError', error.message);   // Display the error message in a label on the error page
        return(false);  // suppress Application Craft's popup message box
    }
   

