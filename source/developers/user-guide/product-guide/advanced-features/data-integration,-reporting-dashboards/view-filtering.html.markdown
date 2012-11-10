---
title: "View Filtering"
active_menu_item: developers
class_name: developers
full_width: true
---


There are three types of filters that can be applied to Views:

 - View Filter - this is a global, static filter that can be defined for each View in your App.

![view-eg1](/img/docs/view-eg1.zoom77.png)

 - Widget Filter - the Filter property for a Widget is applied in addition to the View Filter.

![ViewFilter](/img/docs/viewfilter.zoom87.png)

 - Drill Down Filter - this is applied when you drill down by clicking on charts or Grid rows. This is described in more detail in the [Drilling Down](drilling-down.htm) section.

 - User Specific Filter - this has not yet been implemented. It will allow filtering to be done that applies an extra filter layer depending on who the user is viewing the report. This will allow standard reports to be built that then have filters applied that ensure that the report viewer only sees data related to them.

 - Setting the Filter through Javascript - it is possible to modify the Filter using Application Craft Javascript inside an event. This way, you can apply your own logic to control the filter. See [Filters](../../../scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filters)

