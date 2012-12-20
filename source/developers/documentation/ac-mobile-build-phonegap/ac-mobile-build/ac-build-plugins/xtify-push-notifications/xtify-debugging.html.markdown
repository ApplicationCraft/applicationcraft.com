---
title: "Debugging your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---

Debugging Native Apps is always trickier than with Web Apps. However, there are lots of good tips and tricks available in the [debugging chapter](/developers/documentation/scripting-apis/client-scripting-overview/debugging-ac-scripts/native-apps/).

One extra thing that is useful when debugging Push Notifications is to be able to watch certain objects remotely using the Weinre debugger (explain in the [debugging chapter](/developers/documentation/scripting-apis/client-scripting-overview/debugging-ac-scripts/native-apps/)).

Adding the following code to your App will allow you to remotely inspect the value of data being passed in (or any other data for that matter).

    window['objectName'] = object;

