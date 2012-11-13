---
title: Scandit Partnership - Enterprise quality barcode scanning in AC
old_url: "/blog/722-scandit-partnership-enterprise-quality-barcode-scanning-application-craft"
date: 2012-07-09
tags: barcode, scanning
class_name: blog
full_width: true
image: blog/scandit-logo.png
---


If you take the compute power of a modern mobile phone or tablet and add in the high-res camera you end up with a highly intelligent, customizable barcode scanner. The ease with which you can build apps using Application Craft combined with the high quality, plug-and-play nature of the Scandit barcode scanner SDK opens up a plethora of barcode oriented applications.

High quality, real world barcode recognition is not an easy thing to do well. Barcodes are not always in perfect condition, lighting conditions can vary as can the camera angle and distance. There are several products and libraries available that handle barcode scanning with varying degrees of success. After looking at most of these, we feel that the Scandit barcode scanner SDK offers the most accurate recognition when faced with real-world challenges, which is why we are pleased to announce our partnership with Scandit as well as a new Scandit ‘widget’ for Application Craft.
 
##Hello World of Barcode Apps 
Application Craft can be used to build both highly complex and extremely simple web and mobile applications. Let's look at the simplest end of the scale and show just how easy the app + barcode process can be. There's a quick video below and a step-by-step version below that.
 
<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/Qjt3pkZXJn8" width="560"></iframe>

###1. Drag the Scandit widget onto the page

Having created a new App in the Application Craft Console,  you enter IDE and locate the Scandit Widget in the Toolbox in the left pane. One minute later you have your UI ready.
 
###2. Set the widget’s properties

Next, we select the widget and look across to the Property Bar on the right hand side. Here we can customize all important properties such as 

 - your Scandit App Key
 - the text strings that appear to the user when scanning
 - colors of target boxes
 - whether the phone beeps or vibrates after a successful scan
 - whether to allow regular 1D codes (normal barcodes) and/or 2D barcodes (QR and other codes)
 
###3. Customize your AC Events

The last step in the setup process is to customize the 2 Application Craft Events provided by the Scandit widget

 - onSuccess - a barcode was successfully read and you are passed the type of barcode as parameter 1 and the actual barcode value in parameter 2; you would normally then display this value in a field elsewhere in your App.
 - onFail - usually called when the user presses ‘Cancel’ in the scanning window


###4. Build your App

With most Application Craft Apps, you can now simply run your App directly from the IDE. However, because the Scandit component is a binary component that is not part of HTML5, we need to build a Phonegap/Cordova App. Application Craft supports Phonegap/Cordova fully, allowing all Phonegap properties to be customized if you want.


## Finally
As of July 10 2012 you can now also access a wealth of UPC-based product data via Scandit’s new Product API. More information about Scandit, including technical support documentation, can be found on the Scandit site.