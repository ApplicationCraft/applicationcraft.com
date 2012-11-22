---
old_url: server_side_code.htm
title: "Server Side Code"
active_menu_item: developers
class_name: developers
full_width: true
---


    // If true, then you can test your payments. Use the following card details for testing
    // Card : 4580-4580-4580-4580
    // Expiry : any date (01/15) in the future
    // CV Code : any 3 digit number
    var isSandbox = true;
    var zoozID = 'com.yourdomain.paymentname';
    var zoozKey = 'e1292f95-4d26-4e78-a884-0da072a99f9c';
     
    function calcPayment(objDetails, cartItems) {
     
        // This is hard-coded to keep the example simple. In reality you should now get the 
        // product prices for your cart items from the server side to avoid hacking of the price
        // You must use the precise format shown below for invoice items
        // You do not have to provide any of these parameters if you don't want to
        var obj = {
            'invoice.number': 55,
            'invoice.additionalDetails': 'My Mega Invoice',
            'invoice.items(0).id': 'AB123',
            'invoice.items(0).name': 'Pen',
            'invoice.items(0).quantity': '3',
            'invoice.items(0).price': '4.50',
            'invoice.items(1).id': 'DE321',
            'invoice.items(1).name': 'Pencil',
            'invoice.items(1).quantity': '20',
            'invoice.items(1).price': '0.30'
        };
        // This is a hard-coded value but should be calculated on the server side in most cases
        // based on the shopping cart items.
        // If your App is for your own use only (for taking payments over the phone, for example)
        // then you could pass in the amount directly from the client
        obj.amount = 19.50;
        obj.currencyCode = 'USD';
        
        // Add the Payee details
        obj.firstname = objDetails.firstName;
        obj.lastName = objDetails.lastName;
        obj.email = objDetails.email;
        
        // This is a value you specified within your Zooz portal
        obj.ZooZUniqueID = zoozID;
        // This AppKey is also from the Zooz portal
        obj.ZooZAppKey = zoozKey;
        
        return obj;
    }
     
    // Your SSJ function that initiates the payment process
    function zooz_payment(objDetails, cartItems) {
        // the params object will contain all the order details you pass to Zoom
        params = calcPayment(objDetails, cartItems);
        var token = ssj.zooz.payment(params, isSandbox);
        return token;
    }
     
    // This function is where you complete your processing
    // It is important to inspect the result and only release your order/product if it is confirmed as valid
    function zooz_validate(transactionId) {
        var obj = {
            ZooZUniqueID : zoozID,
            ZooZAppKey : zoozKey
        };
        var isValid = ssj.zooz.validate(transactionId, obj, isSandbox);
        if(isValid) {
            // At this point you know everything is cleared and validated as safe
            // So you can ship your product etc.
        }
        return isValid;
    }
   

