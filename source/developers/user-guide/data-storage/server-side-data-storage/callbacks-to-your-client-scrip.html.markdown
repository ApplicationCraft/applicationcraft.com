---
title: "Callbacks to your Client Scripts"
active_menu_item: developers
class_name: developers
full_width: true
---


It is important to understand how your SSJ scripts handle callbacks to your client side scripts. In order to incorporate proper error handling on the client side, when you call your SSJ script using app.callSSJ() the second parameter is the callback function. Take a look at this client side event handler that is taken from our example.

    // Add a New Customer
    function handler_btnNew_onClick(mouseev){
    // Prepare an object to pass to the SSJ function
    p = {action:"AddCustomer",
    data:{CompanyName:app.getValue("txtCompany"),
    country:app.getValue("txtCountry")}
    };
    // Call the SSJ script
    app.callSSJ("acDemoWS", function(error, data) {
    if(error) {
    app.showMessage("Error", "Error : " + data);
    }
    else {
    refreshList();
    //app.setValue()
    app.showMessage("Success", "New Customer added successfully");
    }
    }, [p]);
    }
   

This shows how a new customer is being added by calling the acDemoWS() SSJ function. When the SSJ script calls back, you get error information back for you to handle.

As described in the [next section](error_handling.htm) , you can let AC handle the errors for you or you can build your own server side error handler.

However, when your SSJ script returns, whatever you return gets passed back to the client side callback automatically. You should return a single value that will appear as the second parameter in your callback. The first parameter is the error status (true or false).

To call back with simple information, return a simple variable. If you want to pass back more complex information, then pack it into an object.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/88rEQc8Itvk?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview on coding up your server side javascript calls [2:53]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/qY9M8bP9b70?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Coding up client/server side javascript calls [7:24]

