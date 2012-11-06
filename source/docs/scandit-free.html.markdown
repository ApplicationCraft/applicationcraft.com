---
title: Scandit Free
active_submenu: 
active_submenu_item:
---

[Top](../../../../quick_start_guide_for_content_.htm)
[Previous](mailto_plugin.htm) [Next](zxing_bar_code_scanner.htm)

* * * * *

 - This plugin is used in conjunction with the [Scandit
 - Button](../../../../Widget%20Properties%20&%20Events/Beta/scandit_button.htm)
 - widget to allow you to scan barcodes in your apps without requiring lots
 - of code.

Simple configure your [Scandit
Button](../../../../Widget%20Properties%20&%20Events/Beta/scandit_button.htm)
widget and set the onSuccess/onFail events, and then enable this plugin
and build your app.

See [Scandit
Widget](../../../../Advanced%20&%20Important%20Widgets/Scandit%20Widget/index.htm)

Plugin Name

\

The name of the plugin - Scandit Free

Enabled

\

True/False(default). Select True to use a plugin in your app

Show 'not native' warning

\

True(default)/False. If True will present a message to users if the app
is not being run as a Native App.

![Scandit](../../../../markdown/images/scandit.zoom83.png)

Scandit Button Configurations

Example AC Events

function handler\_Scandit\_onSuccess(type, value){

app.setValue('ScanType',type);

app.setValue('ScanValue',value);

}

function handler\_Scandit\_onFail(error){

alert(error);

}

You can also use the functions of the Scandit Free Plugin without using
the Scandit Button widget.

Link to the complete documentation for this plugin is available here
[https://github.com/ApplicationCraft/ScanditUniversalJS](https://github.com/ApplicationCraft/ScanditUniversalJS)

Example

    window.plugins.ScanditSDK.scan(
      onSuccessfucntion(),
      onFailFucntion(),
      application\_key,[options]
    );

application\_key

\

Your Scandit App Key. Get your key here:
[http://www.scandit.com/product-api](http://www.scandit.com/product-api)

options

\

Available options: (description see -
[https://github.com/ApplicationCraft/ScanditUniversalJS)](https://github.com/ApplicationCraft/ScanditUniversalJS))

  --- -----------------------
  •   1DScanning true/false
  --- -----------------------

  --- -----------------------
  •   2DScanning true/false
  --- -----------------------

  --- -----------------
  •   scanningHotspot
  --- -----------------

  --- ------
  •   beep
  --- ------

  --- ---------
  •   vibrate
  --- ---------

  --- --------------------------------
  •   showMostLikelyUIBarcodeElement
  --- --------------------------------

  --- --------
  •   uiFont
  --- --------

  --- -----------------------------------
  •   textForMostLikelyBarcodeUIElement
  --- -----------------------------------

  --- --------------------------
  •   textForInitialScanScreen
  --- --------------------------

  --- --------------------------------
  •   textForBarcodePresenceDetected
  --- --------------------------------

  --- ----------------------------------
  •   textForBarcodeDecodingInProgress
  --- ----------------------------------

  --- ------------------------------
  •   searchBarActionButtonCaption
  --- ------------------------------

  --- ------------------------------
  •   searchBarCancelButtonCaption
  --- ------------------------------

  --- --------------------------
  •   searchBarPlaceholderText
  --- --------------------------

  --- ----------------------
  •   toolBarButtonCaption
  --- ----------------------

  --- -----------------
  •   viewfinderColor
  --- -----------------

  --- ------------------------
  •   viewfinderDecodedColor
  --- ------------------------

  --- ---------------------------
  •   minSearchBarBarcodeLength
  --- ---------------------------

  --- ---------------------------
  •   maxSearchBarBarcodeLength
  --- ---------------------------

  --- -------------------
  •   automaticShutDown
  --- -------------------

Example

window.plugins.ScanditSDK.scan(

function (value, type){

alert(type + "::" + value);

}, function (error){

alert(error);

}, "trJvMl1GEeGVLDvgFHhgRr8i0rpdRhHhmxskD/fkrP0",

{vibrate : true, beep : true, torch : true}

);

See Also:

  --- ------------------------------------------------------
  •   [ZXing Bar Code Scanner](zxing_bar_code_scanner.htm)
  --- ------------------------------------------------------

