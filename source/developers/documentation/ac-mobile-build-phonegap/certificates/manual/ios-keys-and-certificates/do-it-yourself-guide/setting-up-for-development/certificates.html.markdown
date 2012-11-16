---
title: "Create Development Certificate"
active_menu_item: developers
class_name: developers
full_width: true
---


After logging in, you should first of all click on the Certificates link on the left. You should see the following screen.

![iosa-cert-1](/img/docs/iosa-cert-1.zoom67.png)

## Install the WWDR Intermediate Certificate on your PC

Download and install the WWDR Intermediate Certificate by clicking on the link underneath the (empty) table of certificates. Once this has been downloaded, you should double click it or open it. At this point, your Keychain app will appear. Click on the Certificates category on the left and you should see it installed as shown below.

![iosa-cert-2](/img/docs/iosa-cert-2.zoom70.png)

## Create iOS Development Certificate

Back in the iOS Provisioning Portal in your browser, click on the Request Certificate button. The instructions provided there should be pretty clear and are shown below with some minor edits for clarity

 - In your Applications folder, open the Utilities folder and launch Keychain Access.

 - From the Keychain Menu at the top of the screen, choose Keychain Access \> Certificate Assistant \> Request a Certificate from a Certificate Authority.

 - A window will pop-up. Ignore any warning at this point

 - In the User Email Address field, enter your email address

 - In the Common Name field, enter your name

 - In the Request is group, select the Saved to disk option

 - Click Continue.


 - The Certificate Assistant saves a Certificate Signing Request (CSR) file to your Desktop. The file is called CertificateSigningRequest.certSigningRequest
     

Now go back to the Portal in the browser and upload the CSR file as follows

 - If not already selected (which it should be) click the Development tab at the top of the central pane.

 - Click on the Choose File button and uploaded the CSR file that was just created

You will see it says 'Pending issuance'. Refresh the browser page and you should see it issued as shown below.

![iosa-cert-3](/img/docs/iosa-cert-3.zoom67.png)

