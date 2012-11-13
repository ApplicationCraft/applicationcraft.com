---
title: "Payment Parameters"
active_menu_item: developers
class_name: developers
full_width: true
---


The following parameters are available to be inserted into the params object for the [ssj.zooz.payment()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/credit-card-payments/payment) function.

<table>
<tr>
<td width="215">
  <strong>Parameter</strong>

</td>
<td width="13">
</td>
<td width="89">
  <strong>Max Length</strong>

</td>
<td width="19">
</td>
<td width="174">
  <strong>Comments</strong>

</td>
</tr>
<tr>
<td width="215">
currencyCode

</td>
<td width="13">
</td>
<td width="89">
3

</td>
<td width="19">
</td>
<td width="174">
ISO country codes

</td>
</tr>
<tr>
<td width="215">
user.idNumber

</td>
<td width="13">
</td>
<td width="89">
10

</td>
<td width="19">
</td>
<td width="174">
ID of user

</td>
</tr>
<tr>
<td width="215">
user.firstName

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
user.lastName

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
user.phone.countryCode

</td>
<td width="13">
</td>
<td width="89">
3

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
user.phone.phoneNumber

</td>
<td width="13">
</td>
<td width="89">
20

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
user.email

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
user.additionalDetails

</td>
<td width="13">
</td>
<td width="89">
400

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.number

</td>
<td width="13">
</td>
<td width="89">
100

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.additionalDetails

</td>
<td width="13">
</td>
<td width="89">
200

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.items(i).id

</td>
<td width="13">
</td>
<td width="89">
100

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.items(i).name

</td>
<td width="13">
</td>
<td width="89">
200

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.items(i).quantity

</td>
<td width="13">
</td>
<td width="89">
</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.items(i).price

</td>
<td width="13">
</td>
<td width="89">
</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
invoice.items(i).additionalDetails

</td>
<td width="13">
</td>
<td width="89">
200

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
billingAddress.street

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
billingAddress.city

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
billingAddress.state

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
billingAddress.country

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
<tr>
<td width="215">
billingAddress.zipCode

</td>
<td width="13">
</td>
<td width="89">
50

</td>
<td width="19">
</td>
<td width="174">
</td>
</tr>
</table>

Refer to the [Server Side Code](/developers/user-guide/product-guide/advanced-features/credit-card-payment-processing/server-side-code) chapter of the [Credit Card Payment Processing](/developers/user-guide/product-guide/advanced-features/credit-card-payment-processing/) chapter to see example code.

