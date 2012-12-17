---
old_url: phonegap_functions.htm
title: "PhoneGap API Functions"
active_menu_item: developers
class_name: developers
full_width: true
---


If your App is running as a Native App (these features are not accessible for apps running on devices as regular web apps) and you need access to device features, such as

 - GPS

 - Accelerometer

 - Camera

 - Compass

 - File System

 - Storage

 - Audio

 - Contacts

Then you need to access PhoneGap functions. The full documentation is available at 
<a href="http://docs.phonegap.com/" target="_blank">http://docs.phonegap.com</a>

**Example**

Using Phonegap Camera API function to take a picture and write it to an Image widget.

	function handler_btnSnap_onClick(mouseev){
    	if(!app.isNativeApp()) {
        	app.alert('This App is running as a Web App, so device functions are not accessible');
        return;
    	} 
    
    navigator.camera.getPicture(function(imageURL) {
        app.setValue('image', imageURL);
        alert('image done');
    	}, onFail, { quality: 40, 
                  destinationType : Camera.DestinationType.FILE_URI});  
	}
