---
title: "Xtify API Methods"
active_menu_item: developers
class_name: developers
full_width: true
---

The following Xtify methods are available to your App...

##Available to both iOS and Android

#### `window.plugins.XtifySDK.getXid(successCallback, failureCallback)` ####

This gets the XID of the user's App. An XID is an identifier that uniquely identifies a user within a specific App. Xtify generates this ID upon installation. You can then use this XID to communicate directly with ain individual user, using either the API or the Xtfy Console.

Your code can retrieve this information and then manage it as it required. A typical use-case is that you might want to store this data within a database and then use Xtify API functions to send notification to users having run queries on the database.

In order for this to be useful, your App would need to get the XID of a user and then pass the XID to the database for storage. You would then have another application that handled the actual notifications using the Xtify API functions.

    window.plugins.XtifySDK.getXid(function(xid) {
      // Do something with the XID
    }, function(error) {
      // Handle the error
    });


##Available to iOS Only

#### `window.plugins.XtifySDK.getSpringBoardBadgeCount(successCallback, failureCallback)` ####

The badge count is the number of notifications shown in the top left corner of your App's icon. It denotes the number of notifications received by your App and so can be thought of as being similar to the number of unread email messages.

You can use the `window.plugins.XtifySDK.clearNotifications()` function to clear this value from within your App's code.

    window.plugins.XtifySDK.getSpringBoardBadgeCount(function(count) {
      // Success callback
      // The variable count contains the number of badges
    }, function(error) {
      // An error occurred
    });


####`window.plugins.XtifySDK.clearNotifications();`
This clears the badge count to 0.

##Available to Android Only

####`window.plugins.XtifySDK.isRegistered(successCallback, failureCallback)`
This checks to see whether the user's instance of this App has been registered on the Xtify servers.

    window.plugins.XtifySDK.isRegistered(function () {
        // Device is registered
      }, function (errorId) {
        // Device is not registered
        if (errorId == "inProgress") {
          // Registration is in progress
        } else {
          // Other error, so handle it
        }
      }
    );

