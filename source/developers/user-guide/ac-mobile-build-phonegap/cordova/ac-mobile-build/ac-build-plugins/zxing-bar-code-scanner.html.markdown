---
title: "ZXing Bar Code Scanner"
active_menu_item: developers
class_name: developers
full_width: true
---


ZXing Bar Code Scanner allows you to scan barcodes and can be used as the alternative for the [Scandit Free](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/scandit-free) Plugin.

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

 - In your index.html include barcodescanner.js

 - In your config.xml add \<gap:plugin name="ChildBrowser" version="1.0.0" /\>

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
The name of the plugin - ZXing Bar Code Scanner

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="20">
        
      

</td>
<td width="740">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="182">
Show 'not native' warning

</td>
<td width="20">
        
      

</td>
<td width="740">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
<tr>
<td width="182">
Documentation

</td>
<td width="20">
        
      

</td>
<td width="740">
Link to documentation for this plugin: [https://github.com/phonegap/phonegap-plugins/tree/master/Android/BarcodeScanner\#using-the-plugin](https://github.com/phonegap/phonegap-plugins/tree/master/Android/BarcodeScanner#using-the-plugin)

</td>
</tr>
</table>

**Description**

The following barcode types are currently supported

<table>
<tr>
<td width="182">
QR\_CODE

</td>
</tr>
<tr>
<td width="182">
DATA\_MATRIX

</td>
</tr>
<tr>
<td width="182">
UPC\_E

</td>
</tr>
<tr>
<td width="182">
UPC\_A

</td>
</tr>
<tr>
<td width="182">
EAN\_8

</td>
</tr>
<tr>
<td width="182">
EAN\_13

</td>
</tr>
<tr>
<td width="182">
CODE\_128

</td>
</tr>
<tr>
<td width="182">
CODE\_39

</td>
</tr>
<tr>
<td width="182">
CODE\_93

</td>
</tr>
<tr>
<td width="182">
CODABAR

</td>
</tr>
<tr>
<td width="182">
ITF

</td>
</tr>
<tr>
<td width="182">
RSS14

</td>
</tr>
<tr>
<td width="182">
PDF417

</td>
</tr>
<tr>
<td width="182">
RSS\_EXPANDED

</td>
</tr>
</table>

This plugin creates the object

    window.plugins.barcodeScanner
    scan(result, error)
   

with the method .

When a successful scan has completed, the result is passed as an object with text, format and cancelled properties.

<table>
<tr>
<td width="182">
text

</td>
<td width="20">
</td>
<td width="740">
text representation of the barcode data

</td>
</tr>
<tr>
<td width="182">
format

</td>
<td width="20">
        
      

</td>
<td width="740">
the type of barcode detected

</td>
</tr>
<tr>
<td width="182">
cancelled

</td>
<td width="20">
        
      

</td>
<td width="740">
whether or not the user cancelled the scan

</td>
</tr>
</table>

## **Example**

    window.plugins.barcodeScanner.scan( function(result) {
            alert("We got a barcode\n" +
                      "Result: " + result.text + "\n" +
                      "Format: " + result.format + "\n" +
                      "Cancelled: " + result.cancelled);
        }, function(error) {
            alert("Scanning failed: " + error);
        }
    );
     
   

## **See Also**

 - [Scandit Free](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/scandit-free)

