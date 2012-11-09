---
title: "zoozStartCheckout()"
active_menu_item: developers
class_name: developers
full_width: true
---


## IMPORTANT : this is a client side method and NOT an SSJ API method but is included here as it is an integral part of the payment process.

void zoozStartCheckout (objTransaction)

Parameters

<table>
<tr>
<td width="181">
{object} objTransaction

</td>
<td width="18">
</td>
<td width="681">
An object as described below

</td>
</tr>
</table>

The object passed to zoozStartsCheckout() should look like this

    {
    token : result,                // Session token recieved from server
    uniqueId : AppId,                // unique ID as registered in the developer portal
    isSandbox : true,                // true = Sandbox environment
    completeCallBackFunc : transactionComplete  // callback function from Zooz after payment attempt
    }
   

Description

## This is called from your client code and initiates the payment process. The user can then enter card details and complete the payment. Once it is complete, a callback function is called where you can validate the payment and begin the fulfillment process.

Please refer to the [sample application](../../../../product-guide/advanced-features/credit-card-payment-processing/index.htm) to see a comprehensive payment example.

Example

This function should be called when you have populated your server a

    zoozStartCheckout({
    token : result,                // Session token recieved from server
    uniqueId : AppId,                // unique ID as registered in the developer portal
    isSandbox : true,                // true = Sandbox environment
    completeCallBackFunc : transactionComplete  // callback function from Zooz after payment attempt
    });
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
   

