---
title: "soapRequest()"
active_menu_item: developers
class_name: developers
full_width: true
---


int **soapRequest** (url, method, params, callback, optional specialParams)

## Parameters

<table>
<tr>
<td width="186">
{string} url

</td>
<td width="11">
</td>
<td width="683">
the URL of the Web Service

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
{object} params

</td>
<td width="11">
</td>
<td width="683">
this contains all parameters that should be passed to the Web Service

</td>
</tr>
<tr>
<td width="186">
{Callback Function} callback

</td>
<td width="11">
</td>
<td width="683">
the callback function that is invoked to deal with the response

</td>
</tr>
<tr>
<td width="186">
{object} specialParams

</td>
<td width="11">
</td>
<td width="683">
this parameter allows you to pass through special, advanced parameters to the SOAP request library,

</td>
</tr>
</table>

## Description

This function passes a parameter list params to the indicated SOAP method at the specified URL. Returned data will be passed asynchronously to the specified callback function. Because SOAP provides more information that a RESTful call, AC is able to convert the returned SOAP XML directly into a JSON object. This means that you do not need to call the [XML2OBJ()](../conversion-functions/xml2json) function afterwards.

## Special Parameters

There are some advanced parameters that are passed through to the SOAP library. On the whole, you should not need to supply these other for very special situations. The example parameter object shown in the example below you might find useful.

    {timeout: 20000} // set the timeout value to 20 seconds before an error is thrown
    {traditional: true} // we have had to use this when calling some 3rd party APIs (SalesForce for example).
    {ignoreNetworkState: true}  // suppress network state checking before httpRequest() is called
    {crossdomain:true} // true - request to another domain will be sent directly; false (default) - request to another domain will be sent to acgo proxy.
    {tagNamespace: true/false} //  false by default. true to put namespace to request tag instead of soap:Envelope. 
    function processForecast(data, error, httpResponse) {
                     console.log(data);
    }
     
    function handler_application_onAppStarted(){
        ws = "http://wsf.cdyne.com/WeatherWS/Weather.asmx";
        app.soapRequest(ws, "GetCityForecastByZIP", {ZIP : "94102"} , processForecast); 
    }
   

## Example

## **See Also**

 - [Wizard](web-service-wizard.htm)

