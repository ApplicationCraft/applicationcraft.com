---
title: "getPlatformInfo()"
active_menu_item: developers
class_name: developers
full_width: true
---


platformInfo **getPlatformInfo** ()

## Parameters
There are no parameters.


## Description
This returns an object with detailed information about the current browser platform. 

All platforms return the following data in the object

- platform - platform name (see [getPlatform()](/developers/documentation/scripting-apis/client-api/app-functions/getplatform))
- browser - browser name, (Chrome|Safari|Mobile Safari|Opera|Firefox|Explorer|etc)
- version - browser version
- isNative - is application executing as a native app
     
... iOS returns the following additional data

- iOSVersion - iOS Version
- isIPad - true if running on iPad
- isIPhone - true is running on iPhone
- isOldIPhone - true if running on an iPhone earlier than the iPhone 3GS (some functions not supported)

... and Android returns the following additional data

- androidVersion - Android Version

## See Also

 - [getPlatform()](/developers/documentation/scripting-apis/client-api/app-functions/getplatform)

