---
title: "Network Availability Handling"
active_menu_item: developers
class_name: developers
full_width: true
---


One of the issues that needs handling in mobile Apps especially is how your App should behave if there is no network connection available.

Application Craft makes the following things available in order to help you tackle this gracefully

Setting Default Timeout Value

By default, Application Craft sets the Network Timeout value to be 40 seconds. You can override this value using [app.networkTimeout()](../client-api/app-functions/setnetworktimeout) .

Overriding the Timeout Value for one httpRequest() Call

When you make AJAX calls with httpRequest(), it will use the default Network Timeout value. However, you can override this value as described in the specialParams parameter of the [httpRequest()](../client-api/soap-restful-ajax-calls/httprequest) function.

Handling Timeout Errors

If the timeout value is exceeded, then Application Craft will trigger an error for all situations except httpRequest() calls. If you have defined an App On Error event, then this will be fired. You can prevent Application Craft generating its own error message as described in the [Your Own Error Handler](error-handling/your-own-error-handler) chapter.

For [httpRequest()](../client-api/soap-restful-ajax-calls/httprequest) calls, you will need to handle the timeout error within its callback function.

Checking Online Status

If your App is running as a Native App, then you can query the online status using isNativeAppOnline() function.
