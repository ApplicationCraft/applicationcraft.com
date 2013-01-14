---
title: "Getting Started"
active_menu_item: developers
class_name: developers
full_width: true
---

Once you are signed up for an account with Intercom, you will create a new Application. 

![intercom.io new application](/img/docs/iio-new-app.png)

You will see that you will be asked to select a platform. Select 'Other'.

Next, you will need to activate your App. There are two ways you can do this 

![intercom.io new application](/img/docs/iio-activate.png)

You can now either

- follow the instructions you are shown, but you will need to have a web site you can plug this into, or
- most Application Craft users would want to follow the steps below.

1. Copy all of the code you see in Intercom screen (Step 2 of 2) shown above into a file called ac-intercom.js
1. Remove both sets of script tags carefully.
1. From the AC Console, go to the Resources tab and create a new Resource called Intercom Bootstrap (exact name not important)
1. Make sure you select the 'Upload' option, select Document as the type and then upload your .js file
1. Once the Resource has been created, right click on the URL and open it in a new tab so you can copy the URL.
1. Open your AC App, select the App properties and locate the 'Preload Files' property. Add the URL you got in the previous step to the list.
1. Run your App in **Live Mode**, not preview.
1. At this point, back in the Intercom console, you should see that your App is activated,
1. **Important** now remove the Preload Files entry. You no longer want this and it must be removed as you will be using the API to call the Intercom servers.

If you now look at the main Intercom screen, you should se just one user present.

Now we will look at the AC-Intercom API.

