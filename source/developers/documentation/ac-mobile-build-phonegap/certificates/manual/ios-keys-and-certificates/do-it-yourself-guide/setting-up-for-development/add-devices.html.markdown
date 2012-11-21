---
old_url: add_devices.htm
title: "Add Devices"
active_menu_item: developers
class_name: developers
full_width: true
---


Next, you will need to add test devices to your iOS Portal. You can only run your development Apps on devices that have been added in this way. You can add up to 100 of these, which should be plenty.

## Select the Devices section

Do this by clicking on 'Devices' in the left hand side. You will initially see this empty list.

![iosa-devices-1](/img/docs/iosa-devices-1.zoom67.png)

## Add a Device

If you have XCode available (Apples compiler) - and most of you will not have it, or will not want to have it - then you can add a device from XCode. However, the easy way is to add it manually.

To get the ID of the device, you should connect your iPhone, iPad, or iPod Touch to your PC and then start up iTunes. Click on the device name in the left pane. You should then see the following screen

![iosa-devices-2](/img/docs/iosa-devices-2.zoom68.png)

Click on the Serial Number label (circled above) and you will see it change to the following screen.

![iosa-devices-3](/img/docs/iosa-devices-3.zoom82.png)

To copy the UDID number (40 characters) you should go to the iTunes Edit menu and select Copy Identifier (UDID).

![iosa-devices-4](/img/docs/iosa-devices-4.zoom68.png)

Back in the iOS Portal, Click on the Add Devices button to add a new device. Enter the Device name and then paste in the UDID you just copied form iTunes. Finally, click Submit and you will see your device successfully added as shown below.

