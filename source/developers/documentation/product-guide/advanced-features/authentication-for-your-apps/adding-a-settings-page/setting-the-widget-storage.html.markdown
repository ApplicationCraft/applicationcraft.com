---
old_url: setting_the_widget_storage.htm
title: "Setting the Widget Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


Your settings will need to be stored. To do this, you need to tell the App to store data. This is done by selecting the Application properties (press the button at the top of the properties pane on the right) and then selecting the Storage property. You should set it to "Store in Database and Add to Reporting". Storage is discussed in more detail [here](/developers/documentation/product-guide/advanced-features/data-storage-management/standard-storage-procedures/) .

For larger Apps, it is important to have a good understanding of the broader storage concepts, including Relational Apps. Please refer to the main [Data Storage and Management](/developers/documentation/product-guide/advanced-features/data-storage-management/) chapter.

![authentication-app-storage](/img/docs/authentication-app-storage.png)

Next, you will want to specify which fields should be stored in the database. All you need to select are the fields on your Settings page. Select the Widgets that require storage and then, in the Database section of the property bar, set the 'Store in Database' property to true.

![authentication-settings-storewidget](/img/docs/authentication-settings-storewidget.png)
