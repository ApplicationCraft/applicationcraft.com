---
title: Accepting Credit Card Payments in AC Apps
author: Freddy May
old_url: "/blog/820-accepting-credit-card-payments-ac-apps"
date: 2012-10-09
tags: credit card, payments
class_name: blog
full_width: true
image: blog/zooz-blog.png
---

Application Craft has added a really easy way for developers to accept credit card payments in their mobile and desktop apps - easy for both the developer and the users of your app.

It handles not just the payment but can also send detailed invoices. The money from the transaction is managed by Zooz and can be paid directly to your bank (most countries are supported) or to a Payoneer account.

## Zooz

We have integrated Zooz into the Application Craft backend, so as a developer you can just get on with building an app and you don't have to worry about the deeper technical details. All you need to do is to sign up with Zooz, register your app within Zooz and you're ready to get started.

## What the user sees ...

![](/img/blog/zooz-blog-2.png "Payments in your mobile or desktop app and invoice generated")

At some point, a user will press a button within your app when s/he is ready to pay. At this point, a very nice 'n' easy screen will appear (see below) and credit card details are entered.  The user is then shown a confirmation screen (an app screen) and and invoice is sent.

## What the developer does ...
If you want full details on coding your payments app, please click to see the relevant section in the User Guide. For those not familiar with Application Craft yet, all code (client and server) is written in the browser based IDE and is regular javascript.

This is a brief summary of how it works. [SSJ] means it is being executed as a server-side Javascript.

  - [Client] A 'Pay' button is pressed
    Pass control to your SSJ script.
 
  - [SSJ] Prepare the payment details
    You can prepare invoice details on the client but to be secure, it should be done on the server.
 
  - [SSJ] Call `ssj.zooz.payment()`
    This is where you initiate the payment process. Your code gets a token back which is passed back to the client.
 
  - [Client] Call `zoozStartCheckout()`
    This initiates the actual payment process where the user will be asked to enter credit card details etc. You specify a callback function is called once it completes.
 
  - [Client] Call SSJ function to validate the transaction
    Your callback function should transfer control to an SSJ script where you validate the payment. You pass in the Zooz transaction id so it can be correctly validated.
 
  - [SSJ] Call `ssj.zooz.validate()`
    This is a final security measure to safeguard against hacking. If it returns true, then you know it is good to proceed with the order fulfillment. 
 
  - [Client] Tell user of success or failure
    Inform the user of success or of errors.

The code samples below show how payments are handled. Click to see the relevant section in the User Guide if you want to copy and paste code.
 
## Client-side code

    // This value was specified by you in your Zooz portal
    var AppId = 'com.yourdomain.yourpayment';

    function handler_actionBtn1_onClick(mouseev){
      // You may want to pass shopping cart items and order
      // details from the client. Or you may have stored this on
      // the server
      orderDetails = getOrderDetails();    
      cartItems = getCartItems();

      // Now call the SSJ function passing in Order details and
      // (if applicable) shopping cart contents
      app.callSSJ("zooz_payment", function(error, result){
        // The SSJ function should return a token that you now
        // pass to the Zooz on the client. This is where the
        // actual payment screen will appear to the user
        zoozStartCheckout({
          // Session token received from server
          token: result,
          // unique ID as registered in the developer portal
  	      uniqueId: AppId,
          // true = Sandbox environment
          isSandbox : true,
          // callback function from Zooz after payment attempt
          completeCallBackFunc: transactionComplete
        });
      }, [orderDetails, cartItems]);       
    }

    function transactionComplete(response) {
      // Zooz returns a JSON string, so we will convert it into an 
      // object
      response = JSON.parse(response);

      if (response.statusCode === 0) {
        // If you want to avoid any risk of price manipulation, you
        // MUST call an SSJ function to validate. You should handle
        // the release of your product on the server and not the
        // client.
        app.callSSJ('zooz_validate', function(error, result){
          // Now you can report any errors to the end-user
          if (!error)
            if (result) {
              app.setData('lblTransactionStatus', 'Transaction successful');
            } else {
              app.setData('lblTransactionStatus', 'Fake transaction attempted');
            }
          else {
            app.setData('lblTransactionStatus', 'Error approving payment');
          }
        }, [response.transactionID]);
      }
      else {
        app.setData('lblTransactionStatus', 'Communication error');
      }
    }

##Server-side code

    // If true, then you can test your payments. Use the following
    // card details for testing:
    //   Card : 4580-4580-4580-4580
    //   Expiry : any date (01/15) in the future
    //   CV Code : any 3 digit number
    var isSandbox = true;
    var zoozID = 'com.yourdomain.yourpayment';
    var zoozKey = 'e1424295-4d26-4e78-a884-0da424299f9c';

    // Your SSJ function that initiates the payment process
    function zooz_payment(objDetails, cartItems) {
      // the params object will contain all the order details you
      // pass to Zoom
      params = calcPayment(objDetails, cartItems);
      return ssj.zooz.payment(params, isSandbox);
    }

    // This function is where you complete your processing
    // It is important to inspect the result and only release your
    // order/product if it is confirmed as valid.
    function zooz_validate(transactionId) {
      var obj = {
        ZooZUniqueID : zoozID,
        ZooZAppKey : zoozKey
      };
      var isValid = ssj.zooz.validate(transactionId, obj, isSandbox);
      if (isValid) {
        // At this point you know everything is cleared and
        // validated as safe. So you can ship your product etc.
      }
      return isValid;
    }
 