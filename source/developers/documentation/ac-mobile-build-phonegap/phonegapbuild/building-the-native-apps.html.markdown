---
old_url: building_the_native_apps.htm
title: "Building your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


In order to use PhoneGap:Build, you will need to create a PhoneGap account. [Click here](https://build.phonegap.com/) to access the site and set up your account. Register using the Adobe ID option.

Once you have successfully created your PhoneGap:Build account, follow these steps

 - Go to the Application Craft Console and hover over the 'More' tab. From the popup drop-down list, select 'Account'.

 - Select the ['PhoneGap Parameters'](/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/phonegap-parameters) from the list

 - Enter the email address and password for your PhoneGap:Build account.

You are now ready to create your Native Apps.

 - Select an App and click the 'PhoneGap' button on the bottom pane.

 - You will see a screen like the one below

![mobile-pre-build](/img/docs/mobile-pre-build.zoom70.png)

If you have not created done this before, then only the one marked 'Web' will be available and have a QR-Code displayed.

 - Press the Build/Rebuild button to start the build process. Application Craft will now call PhoneGap:Build in the background and the build will run asynchronously.

 - You can close the window now and open it later. The build process can take anywhere between 2 and 5 minutes depending on the server load. As soon as each platform native App is built, you will see it appear in the window.

 - The build is then deleted from your PhoneGap:Build account.

 - Any errors will be reported. In the event of errors you can Download your app and then log into your PhoneGap:Build account to build from the index.html file of your downloaded app. The app will not then be deleted on completion and any errors detected can be investigated.

 - iOS and Blackberry will not be available until you have registered an appropriate certificate and profile in your PhoneGap:Build account. See [https://build.phonegap.com/docs/ios-builds](https://build.phonegap.com/docs/ios-builds) for more information.
 
 - Phonegap no longer store your certificate passwords indefinitely and to build you may need to 'unlock' your key. See [Key Management](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/key-management/).

