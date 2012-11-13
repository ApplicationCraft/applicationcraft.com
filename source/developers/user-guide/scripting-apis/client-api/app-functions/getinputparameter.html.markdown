---
title: "getInputParameters()"
active_menu_item: developers
class_name: developers
full_width: true
---


data **getInputParameters** (optional paramName)

## Parameters

<table>
<tr>
<td width="167">
{string or object} data

</td>
<td width="15">
</td>
<td width="698">
the data returned by getInputParameter()

</td>
</tr>
<tr>
<td width="167">
{string} paramName

</td>
<td width="15">
</td>
<td width="698">
The name of the querystring parameter to extract or it can be omitted to return the querystring as an object

</td>
</tr>
</table>
## Description

This function is used to read data from the query string. You should supply the name of the query string parameter which is then returned. If you do not supply a parameter, the entire query string is returned as an object.

There are two primary ways to pass in querystring data

 - in the URL

 - the waInitForm() function if you have Embedded your App in a web page

## Example

Let's assume that the following querystring has been passed in either of the two following ways (which are equivalent)

Querystring

    http://subdomain.website.com?id=12&id=14&text=test test test&num=54"
    <script src="http://ac-dev.applicationcraft.com//live/userlive.js" type="text/javascript"></script>
    <script type="text/javascript">
       waInitForm("2e5a47be-9c85-4ad4-8f47-108cb2986268", 
         757, 811, "id=12&id=14&text=test test test&num=54");
    </script>
    <script src="http://ac-dev.applicationcraft.com//live/userlive.js" type="text/javascript"></script>
    <script type="text/javascript">
       waInitForm("2e5a47be-9c85-4ad4-8f47-108cb2986268", 
         757, 811, "{id:[12,14], text:"test test test", num:54}");
    </script>
    var num = app.getInputParameters("num");
    var myIDs = app.getInputParameters("id");   // returns an array [12,14] 
    var qstring =  app.getInputParameters();   // returns the complete querystring
   

Embed Script in a Web Page Using Querystring format

additionally, you can pass in data in a JSON format

In all the above cases, you can read data as follows

## See Also

 - [Passing data to Apps in the query string](/developers/user-guide/product-guide/advanced-features/passing-parameters-into-apps/passing-data-to-apps-in-the-qu)
 - [Passing in data with Embedded Apps and Javascript](/developers/user-guide/product-guide/advanced-features/passing-parameters-into-apps/passing-in-data-with-embedded)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Riyw8suv0hc?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Embedding in a Web Page [2:16]

