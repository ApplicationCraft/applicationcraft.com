---
title: "Client Side Code"
active_menu_item: developers
class_name: developers
full_width: true
---


You should also refer to the [Server Side Code](server-side-code) section.

    // This value was specified by you in your Zooz portal
    var AppId = 'com.yourdomain.paymentname';
    function handler_actionBtn1_onClick(mouseev){
    // This data shows a simulated shopping cart
    // It is hard-coded for demo purposes
    var orderDetails = {
    email: 'someone@somewhere.com',
    firstName: 'John',
    lastName: 'Smith'
    };
    var cartItems = [];
    cartItems[0] = {
    prodID : 'AB123',
    quantity : 3,
    name : 'Pen'
    };
    cartItems[1] = {
    prodID : 'DE321',
    quantity : 20,
    name : 'Pencil'
    };
    // Now call the SSJ function passing in Order details and (if applicable)
    // shopping cart contents
    app.callSSJ("zooz_payment", function(error, result){
    // The SSJ function should return a token that you now pass to the Zooz on the client
    // This is where the actual payment screen will appear to the user
    zoozStartCheckout({
    token : result,                        // Session token recieved from server
    uniqueId : AppId,                // unique ID as registered in the developer portal
    isSandbox : true,                // true = Sandbox environment
    completeCallBackFunc : transactionComplete  // callback function from Zooz after payment attempt
    });
    }, [orderDetails, cartItems]);
    }
    function transactionComplete(response) {
    // Zooz returns a string, so we will convert it into an object
    response = JSON.parse(response);
    // Now check the status code
    if (response.statusCode === 0) {
    // If you want to avoid any risk of price manipulation, you MUST call an SSJ function to validate
    // You should handle the release of your product on the server and not the client.
    app.callSSJ('zooz_validate', function(error, result){
    // Now you can report any errors to the end-user
    if (!error)
    if (result) {
    app.setData('lblTransactionStatus', 'Transaction successful');
    }
    else {
    app.setData('lblTransactionStatus', 'Fake transaction attemped');
    }
    else {
    app.setData('lblTransactionStatus', 'Error approving payment');
    }
    },[response.transactionID]);
    }
    else {
    app.setData('lblTransactionStatus', 'Communication error');
    }
    }
    // You must load the Zooz library either as shown below ...
    // Or by adding 'https://app.zooz.com/mobile/js/zooz-ext-web.js' to the preload property of your App
    $.getScript('https://app.zooz.com/mobile/js/zooz-ext-web.js',
    function() {
    app.setData('labelScriptStatus', 'JS loaded');
    }
    );
   

