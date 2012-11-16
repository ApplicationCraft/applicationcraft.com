---
title: "switchApp()"
active_menu_item: developers
class_name: developers
full_width: true
---


**switchApp** (appID, pageName, instanceId, twirlyThing, inputParams);

<table>
<tr>
<td width="170">
{string} appID

</td>
<td width="1">
</td>
<td width="710">
The ID (not the name) of the App you want to switch to. This can be found either a) in the Console with the App selected in the App list or b) in the designer's App Id property in the Advanced property group

</td>
</tr>
<tr>
<td width="170">
{string} pageName

</td>
<td width="1">
</td>
<td width="710">
The name of the page that should display first

</td>
</tr>
<tr>
<td width="170">
{string} instanceId

</td>
<td width="1">
</td>
<td width="710">
Supply this parameter if you want a specific Instance ID to be loaded into the App

</td>
</tr>
<tr>
<td width="170">
{object} twirlyThing

</td>
<td width="1">
</td>
<td width="710">
Twirly Thing (hourglass) object (see below)

</td>
</tr>
<tr>
<td width="170">
{object} inputParams

</td>
<td width="1">
</td>
<td width="710">
  You can pass any number of parameters into your App this way. These can be read using <a href="/developers/documentation/scripting-apis/client-api/app-functions/getinputparameter">getInputParameters()</a> . Object described below.

</td>
</tr>
<tr>
<td width="170">
{object} Object

</td>
<td width="1">
</td>
<td width="710">
If you also want to specify a) the page to auto skip to and b) an Instance to load, you use the object as described below

</td>
</tr>
</table>

Or

**switchApp** (objParameters);


<table>
<tr>
<td width="170">
{object} objParameters

</td>
<td width="1">
</td>
<td width="710">
       {appId: "1235-12341-1234", 
        pageName: "page1", 
        formInstanceId: "1234-12354-1234", 
        twirlyThing:{bgColor: "silver"}, // full twirlyThing object described below
        inputParams: inputParams}  // inputParams object described below
</td>
</tr>
</table>

## twirlyThing Object

You can control the hourglass appearance using the following object

	{state:true,
	 text:"text",
	 textColor:"000000",
	 bgColor:"ffffff,
	 opacity:100
	}

## inputParams Object

This object is used to pass parameters in the same way as you would pass them in the querystring.

	{someParam1: "someValue", 
     someParam2: 123
     someParamN: paramN
    }

## Description - Simple Switch

This function is used to switch from the current App to the APP specified by the appID string. You only supply a single parameter.

 `app.switchApp('7eb99414-8584-4fbe-a9ba-3fa8d3f50df6');`

## Description - Detailed Switch

If you want to specify not just the App to switch to but also the Page within that App that should be displayed and/or the App Instance that should be loaded, then you should supply the following object.

 `app.switchApp({appId: "6ec70b3b-4cdb-468d-b0bc-0e6230aa771c", pageName: "my page", formInstance:'7eb99414-8584-4fbe-a9ba-3fa8d3f50df6'});`

You must always specify the appId but can then specify either the pageName or the formInstance or both.

## Parameter Passing

There are two ways to pass parameters between Apps.

 - [Global Data Pool](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/) - This allows data to be passed between Apps as well as restoring data when you eventually switch back to the App that was switched away from.

 - switchApp() parameters - this may be preferable in some circumstances where you are not going to modify the values and inspect them later (in which case the Global Data Pool is better).

## Important

If you are using switchApp() in Mobile Native apps, you must define the 'child' apps as Linked Apps. See [App Properties](/developers/documentation/product-guide/widget-properties-events/app-properties)

## See Also

 - [parentApp()](/developers/documentation/scripting-apis/client-api/app-functions/parentapp)
 - [childApp()](/developers/documentation/scripting-apis/client-api/app-functions/childapp)
 - [Embedding Apps within Apps](/developers/documentation/product-guide/advanced-features/embedding-apps-within-apps/)
 - [Embed App Widget](/developers/documentation/product-guide/widget-properties-events/advanced/embed-app)
 - [Global Data Pool](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/pUY3PXct_wk?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Switching between Apps seamlessly and the Global Data Store [2:17]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/ITkE2fsTOiI?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) The switchApp() debugging trick [2:22]
