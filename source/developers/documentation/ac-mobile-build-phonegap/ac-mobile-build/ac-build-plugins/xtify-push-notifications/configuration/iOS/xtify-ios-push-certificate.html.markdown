---
title: "Create a Push Certificate for iOS"
active_menu_item: developers
class_name: developers
full_width: true
---

You have probably used more bad language in the last few minutes than normal. If you got your App built OK, then this last phase is normally not quite so painful. 

Back in the Apple Developer Portal, locate your App in the App ID section and click on 'Configure' so you see the next screen. If you don't see this screen, then you may already be at the next stage.

![xtify ios enable](/img/docs/xtify-app-id-configure.png)

Check 'Enable for Apple Push Notification Service'.

![xtify ios enable](/img/docs/xtify-app-id-enable.png)

Click 'Configure' (on the Development Push SSL line initially until your App is ready for proper deployment). You can now configure certificates for Development as well as Distribution. 

Please follow these steps very carefully. Any deviation will result in prolonged pain.

##Generate a Certificate Request
There are 2 ways to do this. If you are a Mac user, you can follow the steps in the iOS Developer Portal. In this case, we will leave it up to you to get a Certiticate generated. Make sure you retain **and do not lose** the .P12 certificate in the process.

If you want to let Application Craft help you, then ...

1. Press the Continue button in the iOS Developer Portal
1. Refer to the [iOS Certificate Generation chapter](/developers/documentation/ac-mobile-build-phonegap/certificates/wizard/certgen-ios/) but don't go start just yet
1. In Step 1, we recommend you include **APS Cert** somewhere in the Display Name field so you recognize this as an Push Certificate file. You should **never** use this certificate to actually build your App as it is only used for Push Notifications.
1. Complete the other fields and be asbolutely sure to remember your password.
1. In Step 2, Point 1, you are asked to download the Certificate Signing Request, so do this now.
1. Back in the iOS Developer Portal, press the Continue button and you will be asked to upload a file. Select the file you just downloaded and press the Generate button. You have now done Step 2, Point 2.
![xtify ios enable](/img/docs/xtify-ios-pushcert-generate.png)
1. Once the iOS Portal has finished importing the Certificate Signing Request, you will see a screen indicating it is finished. Press Continue and you will see a Certificate ready to download. 
1. For Step 2, Point 4, download this certificate (you can also download it later) and upload it (Step 3, Point 5) into AC Mobile Build.
1. In Application Craft, click on Next and you will be shown Step 3. Press the Close button and you are done.

##Get the P12 Certificate
You now need to retrieve the P12 certificate from Application Craft. This file is the one that is needed by Xtify. Save it securely (it is a private key) and remember the password associated wth it.

1. Next to the Certificate in the dropdown list in Application Craft you will see a button 'i'. Press this and the following dialog will appear.
![xtify ios enable](/img/docs/xtify-aps-cert-12.png)
1. Click on the Download Link in the last row. This is your P12 file.
1. Store this somewhere safe and remember the password!
1. At this point, you can delete the Certificate from Application Craft as you now have downloaded your P12 file.







