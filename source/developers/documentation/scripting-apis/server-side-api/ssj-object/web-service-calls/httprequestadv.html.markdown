---
title: "httpRequestAdv()"
active_menu_item: developers
class_name: developers
full_width: true
---


{boolean} || {object} **httpRequestAdv** (url, type, optional params, optional dataType, optional header, optional specialParams)

## Parameters

<table>
<tr>
<td width="199">
{string} url

</td>
<td width="10">
</td>
<td width="671">
the URL of the Web Service

</td>
</tr>
<tr>
<td width="199">
{string} type

</td>
<td width="10">
</td>
<td width="671">
GET,POST,PUT or DELETE

</td>
</tr>
<tr>
<td width="199">
{object array} params

</td>
<td width="10">
</td>
<td width="671">
parameters that should be passed to the Web Service

</td>
</tr>
<tr>
<td width="199">
{string} dataType

</td>
<td width="10">
</td>
<td width="671">
'json', 'xml', 'xmldom', 'html', 'string', this indicates the type of data that will be returned; AC will automatically convert this back to a  Javascript object. If you are expecting XML data back, be sure to read the explanation on this parameter below.

</td>
</tr>
<tr>
<td width="199">
{object array} header

</td>
<td width="10">
</td>
<td width="671">
an array of header name / header value objects

</td>
</tr>
<tr>
<td width="199">
{object} specialParams

</td>
<td width="10">
</td>
<td width="671">
this parameter allows you to pass through special, advanced parameters to the underlying JQuery API, most notably a) specifying the timeout period and b) ignoring the network state check.

</td>
</tr>
</table>

{boolean} || {string] **httpRequestAdv** (url, type, optional params, optional dataType, optional header, optional specialParams)

## Parameters

<table>
<tr>
<td width="199">
{string} url

</td>
<td width="10">
</td>
<td width="671">
the URL of the Web Service

</td>
</tr>
<tr>
<td width="199">
{string} type

</td>
<td width="10">
</td>
<td width="671">
GET,POST,PUT or DELETE

</td>
</tr>
<tr>
<td width="199">
{object array} params

</td>
<td width="10">
</td>
<td width="671">
parameters that should be passed to the Web Service

</td>
</tr>
<tr>
<td width="199">
{string} dataType

</td>
<td width="10">
</td>
<td width="671">
'json', 'xml', 'xmldom', 'html', 'string', this indicates the type of data that will be returned; AC will automatically convert this back to a  Javascript object. If you are expecting XML data back, be sure to read the explanation on this parameter below.

</td>
</tr>
<tr>
<td width="199">
{object array} header

</td>
<td width="10">
</td>
<td width="671">
an array of header name / header value objects

</td>
</tr>
<tr>
<td width="199">
{object} specialParams

</td>
<td width="10">
</td>
<td width="671">
this parameter allows you to pass through special, advanced parameters to the underlying JQuery API, most notably a) specifying the timeout period and b) ignoring the network state check.

</td>
</tr>
</table>

**Important:** Note that httpRequestAdv() on the server does runs synchronously and so no callback is called, unlike the client side equivalent. Code execution will pause until data (or an error) is returned.

## Returns

Returns false if an error was encountered otherwise the following object is returned.

    { 
        ResponseCode: 200, 
        Headers: {content-Type: ....},
        Content: // content object or text
    }
   

## Description

Performs an AJAX call and returns more comprehensive content than [httpRequest()](/developers/documentation/scripting-apis/server-side-api/ssj-object/web-service-calls/httprequest2) . Please refer to [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) in the client API for full documentation.

[ssj.getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror) should be used if you want to get full error information where httpRequest() returns false.

## See Also

 - [ssj.httpRequest()](/developers/documentation/scripting-apis/server-side-api/ssj-object/web-service-calls/httprequest2)
 - [ssj.getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

