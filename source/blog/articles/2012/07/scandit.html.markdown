---
title: Scandit Partnership - Enterprise quality barcode scanning in AC
date: 2012-07-09
tags: scandit barcode scanning
---


If you take the compute power of a modern mobile phone or tablet and add in the high-res camera you end up with a highly intelligent, customizable barcode scanner. The ease with which you can build apps using Application Craft combined with the high quality, plug-and-play nature of the Scandit barcode scanner SDK opens up a plethora of barcode oriented applications.

![Scandit](/img/blog/scandit-logo.png "Scandit barcode scanning")

High quality, real world barcode recognition is not an easy thing to do well. Barcodes are not always in perfect condition, lighting conditions can vary as can the camera angle and distance. There are several products and libraries available that handle barcode scanning with varying degrees of success. After looking at most of these, we feel that the Scandit barcode scanner SDK offers the most accurate recognition when faced with real-world challenges, which is why we are pleased to announce our partnership with Scandit as well as a new Scandit ‘widget’ for Application Craft.
 
##Hello World of Barcode Apps 
Application Craft can be used to build both highly complex and extremely simple web and mobile applications. Let's look at the simplest end of the scale and show just how easy the app + barcode process can be. There's a quick video below and a step-by-step version below that.
 
<a href="http://www.youtube.com/v/Qjt3pkZXJn8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&" target="_blank">Play Video [4:25]</a>

###1. Drag the Scandit widget onto the page
Having created a new App in the Application Craft Console,  you enter IDE and locate the Scandit Widget in the Toolbox in the left pane. One minute later you have your UI ready.

![Scandit](/img/blog/scandit-1.png "Scandit barcode scanning drag")

<sup>Drag toolbox widgets onto the page to create a simple app. Notice the Scandit widget in the Toolbox pane on the left.</sup>

![Scandit](/img/blog/scandit-2.png "Scandit barcode scanning widget properties")

<sup>The Scandit widget displays as a button but if you want to trigger a scan other than from a button press you can just make a one line API call.</sup>

 
###2. Set the widget’s properties
Next, we select the widget and look across to the Property Bar on the right hand side. Here we can customize all important properties such as 

 - your Scandit App Key
 - the text strings that appear to the user when scanning
 - colors of target boxes
 - whether the phone beeps or vibrates after a successful scan
 - whether to allow regular 1D codes (normal barcodes) and/or 2D barcodes (QR and other codes)

![Scandit](/img/blog/scandit-3.png "Scandit barcode widget properties")

<sup>The Scandit widget's properties are shown on the right hand side.</sup>
 
###3. Customize your AC Events
The last step in the setup process is to customize the 2 Application Craft Events provided by the Scandit widget

 - onSuccess - a barcode was successfully read and you are passed the type of barcode as parameter 1 and the actual barcode value in parameter 2; you would normally then display this value in a field elsewhere in your App.
 - onFail - usually called when the user presses ‘Cancel’ in the scanning window

![Scandit](/img/blog/scandit-4.png "Scandit barcode widget events")

<sup>The Scandit Widget's events are shown in the right pane. Notice onSuccess and onFail at the bottom.</sup>


![Scandit](/img/blog/scandit-5.png "Scandit barcode event code")

<sup>Here we can see how we have simply configured the onSuccess event to write the scanned code into the two text fields in our App.</sup>


###4. Build your App
With most Application Craft Apps, you can now simply run your App directly from the IDE. However, because the Scandit component is a binary component that is not part of HTML5, we need to build a Phonegap/Cordova App. Application Craft supports Phonegap/Cordova fully, allowing all Phonegap properties to be customized if you want.

![Scandit](/img/blog/scandit-6.png "Scandit barcode phonegap settings")

<sup>The Phonegap properties within the AC IDE. You don't have to set anything, but this gives you complete control if you want it.</sup>

![Scandit](/img/blog/scandit-7.png "Scandit barcode build phonegap")

Phonegap/Cordova apps can be built with a single click without the need for manual compilation. From October 2012 we are adding support for Phonegap/Cordova plugins, too.</sup>
 
###Finally
As of July 10 2012 you can now also access a wealth of UPC-based product data via Scandit’s new Product API. More information about Scandit, including technical support documentation, can be found on the Scandit site.