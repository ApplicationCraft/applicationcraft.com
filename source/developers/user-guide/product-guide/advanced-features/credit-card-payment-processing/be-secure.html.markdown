---
title: "Be Secure!"
active_menu_item: developers
class_name: developers
full_width: true
---


This section explains why the client/server side approach to payment processing should be followed in a specific way, rather than doing slightly simpler approaches that might work but run the risk of hackers being able to get your products for any amount they choose to pay.

The key thing in all these cases is to make sure you do the following.

## Calculate the order amount on the server

Let's say you have a shopping cart and you maintain the contents on the client App rather than the server. This is fine, but when it comes to paying, you should make sure that you re-calculate the total on the server. So, for each item you have, pass in a product ID and then fetch the price from the server. This way it is not possible to set an arbitrary price on the client side.

If you maintain the shopping cart contents on the server then this is not an issue.

## Use the [ssj.zooz.validate()](../../../scripting-apis/server-side-api/ssj-object/credit-card-payments/validate) ) function properly

This function validates the Transaction ID that is passed back from the payment and avoids people hacking the callback function. If [zooz.validate()](../../../scripting-apis/server-side-api/ssj-object/credit-card-payments/validate) returns true, then you know it is safe to ship your products. So, make sure that you only carry out the instruction to ship here and not on the client.
