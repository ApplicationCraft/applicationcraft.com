---
title: "Process Overview"
active_menu_item: developers
class_name: developers
full_width: true
---


There is a specific payment flow that ensures a secure payment process. The basic presumption (and requirement) is that you have certain functions executed on the client side of the App and the rest on the server side (SSJ).

The reason that there is this split between the client and server side scripts is to ensure security. There are further things you should consider if you want to make things even more secure. These are discussed in the [Be Secure!](/developers/documentation/product-guide/advanced-features/credit-card-payment-processing/be-secure) chapter.

The following function is the client side function that might be called when a button is pressed to initiate the payment.

## Important

You must have created an account in the Zooz portal and created an App. You get your App ID and App Key from the portal which you need within your code. You should understand how [Application Craft Server Side Javascripting](/developers/documentation/scripting-apis/server-side-scripting-overview/) works before you proceed.

## Process Flow

**[Client] A Pay button is pressed**

At this point you may be tracking the order details in your App rather than the server. If this is the case, then package up the person/company details any invoice line items (if applicable) and pass these to the Server. If the order details are maintained on the server, then don't worry about passing these over.

**[SSJ] Calculate the payment amount**

Don't do this in the Client App as it is hackable. If you have a shopping cart then re-fetch the prices from a pricing table for each item and recalculate the total. If you were tracking the order on the server then you don't have to worry about this as you will get the details from the server.

**[SSJ] Assemble the invoice details**

There are various mandatory parameters (AppID, AppKey) that must be passed in. There are also a lot of [optional parameters](/developers/documentation/product-guide/advanced-features/credit-card-payment-processing/payment-parameters) that can be used to provide full invoice details etc.

**[SSJ] Call [ssj.zooz.payment()](/developers/documentation/scripting-apis/server-side-api/ssj-object/credit-card-payments/payment)**

This is where you initiate the payment process. Your code gets a token back which is used as the return value in your SSJ function. This triggers the Client Side callback.

**[Client] Call [zoozStartCheckout()](/developers/documentation/scripting-apis/server-side-api/ssj-object/credit-card-payments/zoozstartcheckout)**

This initiates the actual payment process where the user will be asked to enter credit card details etc. You specify a callback function that gets called once it completes.

**[Client] Call SSJ function to validate the transaction**

Your callback function should transfer control to an SSJ script where you validate the payment. You must pass in your transaction id so it can be correctly validated.

**[SSJ] Call [ssj.zooz.validate()](/developers/documentation/scripting-apis/server-side-api/ssj-object/credit-card-payments/validate)**

Your SSJ function gets the transaction id and you now call [ssj.zooz.validate()](/developers/documentation/scripting-apis/server-side-api/ssj-object/credit-card-payments/validate) . If it returns true, then you know it is good to proceed with the order fulfillment. You should only fulfill if you get a valid response. You return the valid (or invalid) response so your client receives a callback and you can inform the customer of completion or of any errors.

**[Client] Tell user of success or failure**

Inform the user of success or of errors.
