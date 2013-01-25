---
old_url: cacheimage.htm
title: "cacheImage()"
active_menu_item: developers
class_name: developers
full_width: true
---


string **cacheImage** (url);

## Parameters

<table>
<tr>
<td width="170">
{string} url

</td>
<td width="1">
</td>
<td width="710">
The specified URL

</td>
</tr>
</table>

## Description

This function will return local path for the specified url. As Web App the function will return the url passed to parameter. As a Native App it will return the local path.

If you want an image to be included in the App Build that is not using the [Image](/developers/documentation/product-guide/widget-properties-events/common/image/), (e.g. showing images in the [Mobile List](/developers/documentation/product-guide/widget-properties-events/mobile/list/) widget) use app.cacheImage function and as you Build your app the image will be included in the Build.

Please note that it is not possible to use variables as cacheImage parameter, only direct url, no string concat or any other action is allowed 

Correct use is: 

	var imagePath = app.cacheImage("http://youdomain.applicationcraft.com/yourresource_path"); 

Incorrect use:

	var img = "http://youdomain.applicationcraft.com/your_resource_path"; 
	var imagePath = app.cacheImage(img); 
    
or 

	app.cacheImage("http://youdomain.applicationcraft.com/"+ your_resource_path)

## Example

    var imgUrl = app.cacheImage("http://www.google.ru/images/swxa.png")

   
