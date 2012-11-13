---
title: "ssj object"
active_menu_item: developers
class_name: developers
full_width: true
---


The ssj object is the server side equivalent of the app object and contains utility functions that run purely on the server side.

You will find some functions with direct equivalents on the server such as getViewData() and httpRequest(). In many of these functions you will find a callback function as a parameter. When running on the server, there are no callbacks and so that parameter should be completely omitted (not left blank) and you will get the result as the return value of the function itself.

## In This Section:

 - [Web Service Calls](/developers/user-guide/scripting-apis/server-side-api/ssj-object/web-service-calls/)
 - [Security](/developers/user-guide/scripting-apis/server-side-api/ssj-object/security/)
 - [Database](/developers/user-guide/scripting-apis/server-side-api/ssj-object/database/)
 - [Credit Card Payments](/developers/user-guide/scripting-apis/server-side-api/ssj-object/credit-card-payments/)
 - [Data Preparation](/developers/user-guide/scripting-apis/server-side-api/ssj-object/data-preparation)
 - [oAuth](/developers/user-guide/scripting-apis/server-side-api/ssj-object/oauth/)
 - [Miscellaneous](/developers/user-guide/scripting-apis/server-side-api/ssj-object/miscellaneous/)

