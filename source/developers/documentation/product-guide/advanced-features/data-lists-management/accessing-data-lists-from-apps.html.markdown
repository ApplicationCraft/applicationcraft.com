---
old_url: accessing_data_lists_from_apps.htm
title: "Accessing Data Lists from Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


Accessing Data Lists is the same as for any other Queries. This process is described in the [Data Integration](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/) section.

If you need to access your product lists from Javascript, you have two choices

 - Data Views - use getViewData() to pull data from your list into an array. You can supply Group By, Order By, Filters and individual field selection

 - sys.getListResource() - loads a Data List directly into a data array in AC javascript code

![lists-app-config](/img/docs/lists-app-config.zoom67.png)

