---
old_url: soaprequest2.htm
title: "soapRequest()"
active_menu_item: developers
class_name: developers
full_width: true
---


int **soapRequest** (wsdl, method, params)

## Parameters

<table>
<tr>
<td width="186">
{string} wsdl

</td>
<td width="11">
</td>
<td width="683">
link to WSDL service description

</td>
</tr>
<tr>
<td width="186">
{string} method

</td>
<td width="11">
</td>
<td width="683">
The Web Service Method (function name)

</td>
</tr>
<tr>
<td width="186">
{Json Array} params

</td>
<td width="11">
</td>
<td width="683">
this contains all parameters that should be passed to the Web Service

</td>
</tr>
</table>

## Returns

Returns false if an error was encountered otherwise data content is returned.

## Description

This function passes a parameter list params to the indicated SOAP method at the specified URL. This function returns data synchronously, unlike the [client API soapRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/soaprequest) method, which uses a callback.

Because SOAP provides more information that a RESTful call, AC is able to convert the returned SOAP XML directly into a JSON object. This means that you do not need to call the [XML2OBJ()](/developers/documentation/scripting-apis/client-api/conversion-functions/xml2json) function afterwards.

## Example

    function handler_application_onAppStarted(){
        ws = "http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl";
        var data = ssj.soapRequest(ws, "GetCityForecastByZIP", {ZIP : "94102"}); 
    }

##Debugging

To assist debugging there are 2 functions available
     
    ssj.__lastSoapRequest() // Allows you to get the generated XML for the request
    ssj.__lastSoapResponse()// Allows you to get the raw XML output from the server response

## Example 
    
    function mySoapRequest(){
        ws = "http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl"; // url to wsdl MUST be here
        var data = ssj.soapRequest(ws, "GetCityForecastByZIP", {ZIP : "94102"}); 
    return {data: data, rawRequest: ssj.__lastSoapRequest(), rawResponse: __lastSoapResponse()};
    }
   




