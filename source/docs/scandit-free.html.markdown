---
title: Scandit Free
---

This plugin is used in conjunction with the [Scandit Button](../../../Widget%20Properties%20&%20Events/Beta/scandit_button.htm) widget to allow you to scan barcodes in your apps without requiring lots of code.

Simple configure your [Scandit Button](../../../Widget%20Properties%20&%20Events/Beta/scandit_button.htm) widget and set the onSuccess/onFail events, and then enable this plugin and build your app.

See [Scandit Widget](../../../Advanced%20&%20Important%20Widgets/Scandit%20Widget/index.htm)

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

![Scandit](../../../../../../../../markdown/images/scandit.zoom83.png)

Scandit Button Configurations

## Example AC Events

    function handler\_Scandit\_onSuccess(type, value) {
      app.setValue('ScanType',type);
      app.setValue('ScanValue',value);
    }
    function handler\_Scandit\_onFail(error){
      alert(error);
    }

You can also use the functions of the Scandit Free Plugin without using the Scandit Button widget.

Link to the complete documentation for this plugin is available here [https://github.com/ApplicationCraft/ScanditUniversalJS](https://github.com/ApplicationCraft/ScanditUniversalJS)

## Example

  window.plugins.ScanditSDK.scan(
  
  onSuccessfucntion(),
  
  onFailFucntion(),
  
  application\_key,
  
  [options]
  
  );

<table>
<tr>
<td width="182">
application\_key

</td>
<td width="20">
</td>
<td width="740">
Your Scandit App Key. Get your key here: [http://www.scandit.com/product-api](http://www.scandit.com/product-api)

</td>
</tr>
<tr>
<td width="182">
options

</td>
<td width="20">
</td>
<td width="740">
Available options: (description see - [https://github.com/ApplicationCraft/ScanditUniversalJS)](https://github.com/ApplicationCraft/ScanditUniversalJS))

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
      function (value, type){
        alert(type + "::" + value);
      }, function (error){
        alert(error);
    }, "trJvMl1GEeGVLDvgFHhgRr8i0rpdRhHhmxskD/fkrP0",
    {vibrate : true, beep : true, torch : true});

## See Also:
 - [ZXing Bar Code Scanner](zxing_bar_code_scanner.htm)
