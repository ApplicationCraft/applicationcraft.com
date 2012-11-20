---
title: "Create a Provisioning Profile"
active_menu_item: developers
class_name: developers
full_width: true
---


The last thing you need to do is to create a Development Provisioning Profile.

![iosa-prov-0](/img/docs/iosa-prov-0.zoom73.png)

This is a file that is needed by [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) or by [PhoneGap:Build](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/) as shown above.

![iosa-prov-1](/img/docs/iosa-prov-1.zoom68.png)

Initially, you will have an empty Provisioning Profile list. Click on the New Profile button to create a new one.

![iosa-prov-2](/img/docs/iosa-prov-2.zoom68.png)

You now need to complete the small form. Enter a name for your Profile. You should select the Certificates and Devices that are associated with this Profile. If you have just started, you will only see one of each. You should also select the App associated with this Profile. As described in the previous section, you can create an App ID that is valid for multiple Apps.

![iosa-prov-3](/img/docs/iosa-prov-3.zoom67.png)

Once you click the submit button, you will see your Profile marked as 'Pending'. Just refresh the page and it should be available immediately. You can now click on the Download button to download your Provisioning Profile, which will be called something like General_Dev_Profile.mobileprovision.

This can now be installed into [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) or PhoneGap Build as shown in the screenshot at the top of this page.

If you are using features such as Push Notifications, then you will need to have a dedicated App ID for any App that needs to receive them.

In most cases, you can now use this Provisioning Profile for multiple Apps along with the P12 Certificate create earlier on.
