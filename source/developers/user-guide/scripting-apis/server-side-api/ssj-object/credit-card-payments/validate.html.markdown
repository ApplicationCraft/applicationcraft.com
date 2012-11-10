---
title: "zooz.validate()"
active_menu_item: developers
class_name: developers
full_width: true
---


isValid **ssj.zooz.validate** (transactionId)

## Parameters

<table>
<tr>
<td width="181">
{string} transactionId

</td>
<td width="18">
</td>
<td width="681">
The transactionId that is passed in from the client

</td>
</tr>
</table>
## Return Value

## Returns a boolean variable indicating whether it was successfully validated or not.

## Description

Once the payment() function has been called successfully, a token is returned which is then returned back to the client App. The client App should then immediately call an SSJ function that makes the ssj.zooz.validate() call.

Please refer to the [sample application](../../../../product-guide/advanced-features/credit-card-payment-processing/) to see a comprehensive example.

## Example

This function should be called when you have populated your server a

    function@zooz_validate(token)@{
        var tokens = ssj.zooz.validate(token, params, isSandbox);
        return tokens;
    }
     
     
   

