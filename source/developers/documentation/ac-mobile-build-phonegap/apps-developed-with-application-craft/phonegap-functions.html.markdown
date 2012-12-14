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

Using Phonegap Device API function to gather and display device information.

	function handler_DeviceInfo_onPageShow(){
      if(!app.isNativeApp()) {
          app.alert('This App is running as a Web App, so device functions are not accessible');
          return;
      }    
      var networkState = navigator.network.connection.type, states={};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.NONE]     = 'No network connection';
      var dData=[];dData.push('<p><strong>Device Info</strong><br>' + device.name + '</p>');
      dData.push('<p><b>Phonegap Version</b><br>' + device.phonegap + '</p>');
      dData.push('<p><b>Device Platform</b><br>' + device.platform + '</p>');
      dData.push('<p><b>Device ID</b><br>' +  device.uuid + '</p>');
      dData.push('<p><b>Device Version</b><br>' + device.version + '</p>');
      dData.push('<p><b>Connection type</b><br>' + states[networkState] + '</p>');
      data = [];
      for(var i = dData.length-1; i > -1; --i ) {
          var d = {};
          d.label = dData[i];
          data.push(d);
      }
      var map = {'label': 'label'};
      app.populateWidget('lstDeviceInfo', data, map);
     }

