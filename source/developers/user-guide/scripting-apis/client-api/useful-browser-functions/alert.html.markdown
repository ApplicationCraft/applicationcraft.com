---
title: "alert(), confirm()"
active_menu_item: developers
class_name: developers
full_width: true
---


These functions are not very pretty and are handled by the browser, so you have little cosmetic control. However, they are useful for displaying quick and dirty messages of getting confirmations.

 - [alert()](http://www.w3schools.com/jsref/met_win_alert.asp)

 - [confirm()](http://www.w3schools.com/jsref/met_win_confirm.asp)

You should use the alert() and confirm() functions provided by AC's app object.

 - [app.alert()](../app-functions/refalert)

 - [app.confirm()](../app-functions/confirm)

Please be aware that iOS handles alert and confirm in a different manner and it can cause them to trigger twice.

You can build your own message handling using [showPagePopup()](../page-functions/showpagepopup) or [showMessage()](../app-functions/showmessage) , [showConfirm()](../app-functions/showconfirm) . If you are using alert() to do debugging, please read these chapters. It will save you a load of time.

 - [Debugging](../../client-scripting-overview/debugging-ac-scripts/index)

 - [Error Handling](../../client-scripting-overview/error-handling/index)

