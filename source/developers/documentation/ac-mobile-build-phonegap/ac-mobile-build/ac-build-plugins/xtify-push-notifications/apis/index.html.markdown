---
title: "Other APIs"
active_menu_item: developers
class_name: developers
full_width: true
---

Application Craft has produced easy-to-use APIs that make accessing the Xtify APIs much easier than doing so unassisted.

All of the APIs can be found in the introduction section. You simply copy and paste the code into your App and you are ready to go. You can also see how we have interfaced with the Xtify APIs should you want to modify them for your own purpose, or if you're simply curious.

- [**Location API**](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-location-api/) - this is also used from within your mobile App and it passes the user's current device coordinates to the Xtify system. You can then use the Notification API or the Xtify Console to target users who are at or near certain locations.
- [**Tag API**](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-tag-api/) - this API should be used from within your mobile App. It allows you to tag individual App instances with keywords. You can then use the Notification API or the Xtify Console to target users who have or do not have certain tags.
- [**Notification API**](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-notification-api/) - this lets you send out notifications from an AC App and allows you to build tailored messaging Apps rather than using the Xtify Console. If you need to link with databases or other systems to assist targeted messaging, this is a big plus.

##Tips & Tricks
The Tag and Location APIS can also operate in [test mode](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/xtify-app-testing/) so you can test your functionality from the Application Craft desktop without having to deploy.

You should be sure to test in [Debug mode](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/acmb-debugging/) to save you lots of time.

