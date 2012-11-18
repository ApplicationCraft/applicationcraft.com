---
title: "Scandit Free"
active_menu_item: developers
class_name: developers
full_width: true
---


This plugin is used in conjunction with the [Scandit Button](/developers/documentation/product-guide/widget-properties-events/beta/scandit-button) widget to allow you to scan barcodes in your apps without requiring lots of code.

Simple configure your [Scandit Button](/developers/documentation/product-guide/widget-properties-events/beta/scandit-button) widget and set the onSuccess/onFail events, and then enable this plugin and build your app.

See [Scandit Widget](/developers/documentation/product-guide/advanced-important-widgets/scandit-widget/)

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

 - In your index.html include `ScanditSDK.js`

 - In your config.xml add `<gap:plugin name="ScanditSDKFree" version="1.0.0" /\>`

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "1.0.0"

 - Cordova 2.0.0 or later use "2.0.0"

## Apps Developed with Application Craft

<table>
<tr>
<td width="182">
Plugin Name

</td>
<td width="20">
</td>
<td width="740">
The name of the plugin - Scandit Free

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="20">
</td>
<td width="740">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="182">
Show 'not native' warning

</td>
<td width="20">
</td>
<td width="740">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
</table>

![Scandit](/img/docs/scandit.zoom83.png)

Scandit Button Configurations

**Example AC Events**

    function handler_Scandit_onSuccess(value, type){
        app.setValue('ScanValue',value);
        app.setValue('ScanType',type);        
    }
     
     
    function handler_Scandit_onFail(error){
        alert(error);        
    }
You can also use the functions of the Scandit Free Plugin without using the Scandit Button widget.

Link to the complete documentation for this plugin is available here [https://github.com/ApplicationCraft/ScanditUniversalJS](https://github.com/ApplicationCraft/ScanditUniversalJS)

## Example     
    window.plugins.ScanditSDK.scan(
    onSuccessfunction(),
    onFailFunction(),
    application_key,
    [options]
    );
     
   



<table>
<tr>
<td width="182">
application_key

</td>
<td width="20">
</td>
<td width="740">
  Your Scandit App Key. Get your key here: <a href="http://www.scandit.com/product-api">http://www.scandit.com/product-api</a>

</td>
</tr>
<tr>
<td width="182">
options

</td>
<td width="20">
</td>
<td width="740">
  Available options: (description see - <a href="https://github.com/ApplicationCraft/ScanditUniversalJS)">https://github.com/ApplicationCraft/ScanditUniversalJS)</a>

 - 1DScanning true/false

 - 2DScanning true/false

 - scanningHotspot

 - beep

 - vibrate

 - showMostLikelyUIBarcodeElement

 - uiFont

 - textForMostLikelyBarcodeUIElement

 - textForInitialScanScreen

 - textForBarcodePresenceDetected

 - textForBarcodeDecodingInProgress

 - searchBarActionButtonCaption

 - searchBarCancelButtonCaption

 - searchBarPlaceholderText

 - toolBarButtonCaption

 - viewfinderColor

 - viewfinderDecodedColor

 - minSearchBarBarcodeLength

 - maxSearchBarBarcodeLength

 - automaticShutDown

</td>
</tr>
</table>

## Example

    window.plugins.ScanditSDK.scan(
        function (value, type){
            alert(type + "::" + value);
        }, function (error){
            alert(error);
        }, "trJvMl1GEeGVLDvgFHhgRr8i0rpdRhHhmxskD/fkrP0", 
        {vibrate : true, beep : true, torch : true}
    );
     
     
   

## See Also

 - [ZXing Bar Code Scanner](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/zxing-bar-code-scanner)
