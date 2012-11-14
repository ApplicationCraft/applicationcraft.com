---
title: "iOS Certificate Generation"
active_menu_item: developers
class_name: developers
full_width: true
---

##Create your Apple Developer Account
You need to do this first before you go any further. Please refer to the [Apple Accounts](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/apple-accounts) section for details on how to do this.

##Ready to go ...
With your uploaded App selected, as shown below, you will see a button labelled 'Create P12'. You should press this to get going.

![acmb ac console](http://localhost:4567/img/docs/certgen-ios-0.png)

##Step 1
![acmb ios certificate generator](/img/docs/certgen-ios-1.png)

In the first screen, you should enter the fields as shown. Be sure to note your password or you will need to restart the entire process. Press Next when you are done. At this point, a 'Certificate Signing Request' file will be generated.

##Step 2
![acmb ios certificate generator](/img/docs/certgen-ios-2.png)

On the above screen, you should carefully follow the steps listed. 

Item 2 asks you to upload your certificate to the Developer Portal. In the screenshot below you will see the screen where you manage your personal Certificate. 

![acmb ios certificate](/img/docs/iosa-cert-1.zoom67.png)

You should press the 'Request Certificate' button. Ignore the download part but this is where you upload (item 3.) your Certificate Signing Request' file. You then follow the steps within the Apple Developer Portal until you see the following screen.

![acmb ios certificate](/img/docs/iosa-cert-3.zoom67.png)

At this point, you can download the Certificate by pressing the 'Download' button and finally upload the CER file into Application Craft. 

##Step 3 - Finished
You are now done, and the Certificate will have been added to the drop-down list of Certificates in the main Console screen.

![acmb ios certificate generator](/img/docs/certgen-ios-3.png)

