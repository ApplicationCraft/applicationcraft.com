---
old_url: gatrack.htm
title: "gaTrack()"
active_menu_item: developers
class_name: developers
full_width: true
---


**gaTrack** ();

<table>
<tr>
<td width="142">
{string} strTrackCode

</td>
<td width="15">
</td>
<td width="723">
A tracking code that is passed to Google Analytics

</td>
</tr>
</table>

## Description

Calls Google Analytics with the specified tracking code. It uses the account wide GA Account ID or the App's own GA Account ID.

Refer to the [Google Analytics](/developers/documentation/product-guide/advanced-features/google-analytics/) section for more information on how to set up GA support.

## Example

Call the following code anywhere within your code.

    app.gaTrack('myCode');  
   

