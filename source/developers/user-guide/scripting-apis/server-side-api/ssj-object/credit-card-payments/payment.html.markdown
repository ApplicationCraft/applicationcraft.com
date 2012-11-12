---
title: "zooz.payment()"
active_menu_item: developers
class_name: developers
full_width: true
---


token **ssj.zooz.payment** (params, isSandbox)

## Parameters

<table>
<tr>
<td width="181">
{object} params

</td>
<td width="18">
</td>
<td width="681">
A set of mandatory an optional parameters required by the Zooz platform

</td>
</tr>
<tr>
<td width="181">
{boolean} isSandbox

</td>
<td width="18">
</td>
<td width="681">
If true, then test payments will be made in test mode (see below)

</td>
</tr>
</table>
## Return Value

Returns a token (synchronously) that should be passed back to the client side callback function.

## Description

This function must be called when you are ready to process a payment. You will get back a token that should be passed back to the client App by returning the token form your SSJ function.

Please refer to the [sample application](/developers/user-guide/product-guide/advanced-features/credit-card-payment-processing/) to see a comprehensive example and overview of the entire process.

## Example

This function should be called when you have populated your server a

    function zooz_payment() {
        var token = ssj.zooz.payment(params, isSandbox);
        return token;
    }
   

