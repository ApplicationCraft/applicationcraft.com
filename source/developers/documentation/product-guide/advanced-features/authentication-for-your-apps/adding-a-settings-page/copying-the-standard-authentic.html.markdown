---
title: "Copying the Standard Authentication Fields"
active_menu_item: developers
class_name: developers
full_width: true
---


When the App starts up, the user will either login or, if the user needs to create a user account first, will go to the Signup page. The signup process will create the necessary Instance that stores the user settings.

This is currently handled with some Javascript (in a later version, we will also manage the settings storage with a no code approach). This is the code that creates the storage Instance. If you want to copy and paste code, please go to the [Complete Code](/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/complete-code-including-settin) section.

![Auth\_CreateInstance](/img/docs/auth_createinstance.zoom93.png)

