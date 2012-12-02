---
old_url: httprequest.htm
title: "httpRequest()"
active_menu_item: developers
class_name: developers
full_width: true
---


int **httpRequest** (url, type, callback, optional params, optional dataType, optional header, optional specialParams)

## Parameters

<table>
<tr>
<td width="300">
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
GET or POST

</td>
</tr>
<tr>
<td width="199">
{callback function} callback

</td>
<td width="10">
</td>
<td width="671">
the callback function that is invoked to deal with the response

</td>
</tr>
<tr>
<td width="199">
{object} params

</td>
<td width="10">
</td>
<td width="671">
any parameters, passed to the Web Service containing a key/value pair for each parameter

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
{object} header

</td>
<td width="10">
</td>
<td width="671">
any headers, described as a key/value pair for each header specified

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

##The Web Service Wizard
Before we get into detail about this method, make sure you take a look at the [Web Service Wizard](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/web-service-wizard). This is a big help and lets you generate the necessary code to copy and paste into your editor.

![WebTest1](/img/docs/webtest1.zoom82.png)

## Description
`httpRequest()` calls a Web Service at the specified URL and can pass a parameter list, HTTP headers and the indicated 'verb' (GET, POST, UPDATE, DELETE). You also specify a callback function that should be called to process the returned data. If the call returns XML data, then you may want to call the [XML2OBJ()](/developers/documentation/scripting-apis/client-api/conversion-functions/xml2json) function that converts the data into a Javascript object.

The 'params' parameter is passed a simple object consisting of parameter name / parameter value pairs. These parameters will be automatically appended to the URL if type="GET".

Do NOT escape any strings as we take care of this automatically.

AC will convert returned data into a Javascript object.

**Important** : if an httpRequest() timeout error occurs, then it will not fire the global error handler (App On Error event). You have to handle the timeout error manually within the callback function by inspecting the error parameter (see below).

## dataType Parameter

It is important that you use this parameter correctly as it determine the format that data is returned to you in the callback function.

 - **json** -the data returned by the web service is pure json

 - **xml** - the browser returns data as XML. Application Craft will automatically convert this into a javascript object when it is passed to the callback function.

 - **xmldom** -  the browser returns data as an XML DOM object. Note, that if the returned data is XML string data, then you should use the 'xml' option described above.

 - **string** - the data returned as a string.

 - **html** - (deprecated) same as html

## Callback Function

callbackFunction(data, error, httpResponseHeaders);

<table>
<tr>
<td width="178">
{string} retData

</td>
<td width="11">
</td>
<td width="706">
the data returned by the web service. This will automatically be converted to an object if JSON was returned. Otherwise you will need to use the XML2OBJ() function (if XML) or handle it manually (if anything weird).

</td>
</tr>
<tr>
<td width="178">
{boolean} error

</td>
<td width="11">
</td>
<td width="706">
whether an error occurs

</td>
</tr>
<tr>
<td width="178">
{object} httpRequest

</td>
<td width="11">
</td>
<td width="706">
Object containing http request object. Typically required for advanced usage.

</td>
</tr>
</table>
If you want to handle timeout errors resulting from httpRequest() calls then you must use the callback function. If there is no Network available at all, then it will generate an error immediately. A timeout error will be generated after the default timeout or the timeout value specified within [networkTimeout()](/developers/documentation/scripting-apis/client-api/app-functions/setnetworktimeout).

## Getting Response Headers
There may be cases where the API returns data in http headers. An example of this is shown below in the second example (Rackspace Authentication). The callback function receives the response body in the httpResponse callback function parameter and the headers can be queried with

- `httpResponse.getResponseHeader('headerName')` - returns header value for the specified header name
- `httpResponse.getAllResponseHeaders()` - returns the entire header as a string

## Special Parameters
There are some advanced parameters that are passed through to the underlying JQuery API, which handles our Ajax requests. Please refer to the [jquery parameter documention](http://api.jquery.com/jQuery.ajax/) for a list of all jquery supported parameters.

    // set the timeout value to 20 seconds before an error is thrown
    {timeout: 20000} 

    // Needed by some some 3rd party APIs for traditional "shallow" serializtion
    // Refer to the [qjeury docs](http://api.jquery.com/jQuery.param/) for details
    {traditional: true} 

    // suppress network state checking before httpRequest() is called
    {ignoreNetworkState: true}  

    // true - request to another domain will be sent directly; false (default) - request to another domain will be sent to the Application Craft proxy.
    {crossdomain:true} 

On the whole, you should not need to supply these other for very special situations. You can include several special parameters in one object.


## More about Special Parameter {ignoreNetworkState: true}
This parameter should not generally be used, but it can sometimes be useful to developer wanting to work around situations where the network state (connection) is misreported. AC checks the network state (connectivity) and if it is not available or is 'unknown' then it will return with an error immediately without making the AJAX call. There have been situations where there is a network connection but this state is reported as 'unknown' and so AC will not make the call. By using this parameter, you tell AC to make the call anyway.

More information on this can be found here : [http://docs.phonegap.com/en/1.6.1/cordova\_connection\_connection.md.html\#Connection](http://docs.phonegap.com/en/1.6.1/cordova_connection_connection.md.html#Connection)

## Example : Google Geocoding

    function handler_btnGet_onClick(mouseev){
        app.httpRequest("http://maps.google.com/maps/api/geocode/json", "GET", function(
            if (error === false){
                app.setValue("lbladdress", data.results[0].formatted_address);
                app.setProperty("gmap", "longitude", data.results[0].geometry.location.lng);
                app.setProperty("gmap", "latitude", data.results[0].geometry.location.lat);         
            } else {
                app.showMessage("AJAX Error", "Cannot locate it");
            }
        }, {address: app.getData("txtZIP"), sensor:"false"} , "json" );
    }

This example calls the Google Geocoding API. It passes in a lat/lng coordinate and gets back locality information in the data parameter

## Example : Rackspace Cloud Servers API Authentication using Headers


    function handler_btnTest_onClick(mouseev){ 
       __headers = {'X-Auth-User' : 'rackspaceUserName','X-Auth-Key' : 'rackspaceApiKey'};    
       app.httpRequest('https://auth.api.rackspacecloud.com/v1.0', 'GET', 
        function( data, error, httpResponse){
                   var __token = httpResponse.getResponseHeader('X-Auth-Token');
                   var __headers = {'X-Auth-Token' : __token, 'Content-Type' : 'application/json'};
                   var __servers = httpResponse.getResponseHeader('X-Server-Management-Url');
        }, undefined, undefined, __headers, {timeout: 20000});
    }


This example shows how headers are used to provide authentication information and the necessary token used for subsequent calls are then extracted. Atypically, this call does not receive any data in the callback which is why the dataType parameter was left undefined. Normally, we would not recommend implementing authentication via the client side App due to security considerations but we have included this as a genuine working example showing the use of headers.

## See Also

 - [Crossdomain Handling](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/common-usage-examples/crossdomain-issues)
 - [Data Conversion Functions](/developers/documentation/scripting-apis/client-api/conversion-functions/)
 - [Extending Application Craft](/developers/documentation/extending-ac/)
 - [Wizard](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/web-service-wizard)

