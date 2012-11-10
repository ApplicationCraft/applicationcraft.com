---
title: "Multi Series Filters"
active_menu_item: developers
class_name: developers
full_width: true
---


If you have a multi-series chart, the Filter property is slightly more complex. You can set both a General Filter and, optionally, a filter on each of the data series. You set all of these filters using a single javascript object as shown below.

The first dimension of the object addresses the General filter (element 0) and the subsequent elements are the individual series filters.

The second dimension is used in the same way as for a single series filter (see Filters) and is used to represent multiple AND conditions.

## Example

This example shows how we want to set a general filter that covers the age range. We then set a filter on each of the 2 data series to filter each series by a different country (USA and Canada).

    filterArray[0][0] = "{person.age}>=[Form.Widgets.numMinAge]";
    filterArray[0][1] = "{person.age}<=[Form.Widgets.numMaxAge}";
    filterArray[1][0] = "{person.country}='USA'";
    filterArray[2][0] = "{person.country}=Canada";
    app.setProperty('chartName', 'filter', filterArray);
    app.refreshData('chartName');
   

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/rKbMmF7kcXs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Javascript, Filtering, and other tips and tricks [6:11]
