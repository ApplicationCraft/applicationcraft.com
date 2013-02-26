---

title: "buildHttpStr()"
active_menu_item: developers
class_name: developers
full_width: true
---


*string* **buildHttpStr** (queryData [, numericPrefix [, separator ]])

## Parameters

<table>
<tr>
<td width="186">
numericPrefix


</td>
<td width="11">
</td>
<td width="683">
The prefix for arrays

</td>
</tr>
<tr>
<td width="186">
separator

</td>
<td width="11">
</td>
<td width="683">
The arguments separator

</td>
</tr>
</table>



## Description

If you are passing parameters to a webservice as an object map, the library can send the request as multipart form data. This function generates a URL-encoded query string from the associative array provided that can then be passed to the webservice.

## See Also

[parseHttpStr()](/developers/documentation/scripting-apis/server-side-api/ssj-object/web-service-calls/parsehttpstr)
     
   
