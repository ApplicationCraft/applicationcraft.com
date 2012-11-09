---
title: "Input & Output Field Configuration"
active_menu_item: developers
class_name: developers
full_width: true
---


Having specified which Tables you want in your Query and how they should be joined, you can now specify, on a single screen, which fields should be made available to Apps for passing data In and Out of the data source.

![QW\_inputoutput\_selection](/img/docs/qw_inputoutput_selection.zoom47.png)

Input Fields

You may want to use Input fields for the following reasons

 - You need to specify certain fields as filter fields (analogous to WHERE clause fields in a SQL statement), in which case your App references the Input fields so it can pass App field values to the filter .

 - You need to update fields in a data source record.

 - You want to add a new record to a data source.

Output Fields

Any fields that should be passed from the Data Source back to the App are know as Output fields. You may want to retrieve data from a Data Source to populate a list or just a single field. In both cases, you would use Output fields.

Using Both Input and Output Fields

There are several cases where you would use both in an App at the same time. The most obvious example is where you want to retrieve a set of fields (Output fields in our parlance) but only WHERE a specific condition applies, in which case the filter fields are used to filter the Output records.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/N-sBju6KMFE?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Apps [4:57]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/wxbd6ugLxa0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying External Database [3:03]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Jlsh8jhSOg0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Data From an App  [2:05]

