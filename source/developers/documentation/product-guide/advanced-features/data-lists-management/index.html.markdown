---
old_url: data_lists_management.htm
title: "Data Lists Management"
active_menu_item: developers
class_name: developers
full_width: true
---


A Data List is the equivalent of a database table. To create one, you upload a CSV file into an Application Craft [Resource](/developers/documentation/product-guide/the-console/console-tabs/resources) . Alternatively, you can create an empty data list and edit it in place.

N.B. If you have already uploaded a CSV file to your Resources (prior to version 1.16.0), it cannot be used as a Data List. We recommend you rename the csv file and upload again as a new Resource

Although you an achieve the same effect by creating a [Connection](/developers/documentation/product-guide/the-console/console-tabs/connections/) to your own external database table and then a [Query](/developers/documentation/product-guide/the-console/console-tabs/queries/) , this requires that you set up and configure you own hosted database server elsewhere. If you don't have one and need access to tables for lookup purposes, then a Data List is an excellent way of managing things.

