---
old_url: how_to_deploy_apps_to_your_own.htm
title: "How to deploy Apps to your own server"
active_menu_item: developers
class_name: developers
full_width: true
---


On the [Apps](/developers/documentation/product-guide/the-console/console-tabs/applications) console screen is the Download action button.

![Download](/img/docs/download.zoom68.png)

This will download the app source code to your PC within a zip file. Extract the contents of this zip and copy/move them to the required location on your own webserver.  Reference the index.html file to access the app.

Please note that due to security limitations, the App [uploadFile()](/developers/documentation/scripting-apis/client-api/app-functions/uploadfile/) function or the following widgets cannot be used in apps deployed to your own servers: Common [Upload Button](/developers/documentation/product-guide/widget-properties-events/common/upload-button2/), Mobile [Upload Button](/developers/documentation/product-guide/widget-properties-events/mobile/upload-button) and Advanced [File Upload](/developers/documentation/product-guide/widget-properties-events/advanced/file-upload/)

If deploying to an IIS webserver you may need to configure the server to allow the return of \*.json files. It is not enabled by default. For more information see [http://stackoverflow.com/questions/332988/get-iis6-to-serve-json-files-inc-post-get](http://stackoverflow.com/questions/332988/get-iis6-to-serve-json-files-inc-post-get)

