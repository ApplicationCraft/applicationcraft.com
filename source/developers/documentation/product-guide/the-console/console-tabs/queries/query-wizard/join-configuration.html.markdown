---
old_url: join_configuration.htm
title: "Join Configuration"
active_menu_item: developers
class_name: developers
full_width: true
---


On this screen, you will be able to specify the way that your data source tables are to be linked. This will require, of course, that there is a common link field to join the data source tables on.

It is the responsibility of you and/or your Database Administrator to ensure a) that indexes are judiciously chosen and b) that you set up suitable queries. Application Craft does not perform any optimizations.

![QW\_define\_join](/img/docs/qw_define_join.zoom63.png)

The Join wizard screen is laid out in a way that should resemble a SQL Select statement. This should make it as familiar as possible to the largest number of people without having to actually construct a statement manually.

On the first line is the first table you specified in the previous Table Selection screen. You can change the first Table by clicking in the cell and selecting from the list of available Tables.

Click on the ![QW\_add\_remove\_buttons](/img/docs/qw_add_remove_buttons.png) buttons to add or remove a line.

For all Joins, click in the relevant cell and select from the list of available options.  You should specify the following:

 - Join type (Inner, Left outer, Full Outer)

 - Table - select Table to join

 - Join Fields - which fields are used from each table to perform the Join.

![QW\_Join\_no\_dialog](/img/docs/qw_join_no_dialog.zoom57.png)

The screenshot above shows a 3 way join.

##Related Video

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/N-sBju6KMFE?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Apps [4:57]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/wxbd6ugLxa0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying External Database [3:03]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Jlsh8jhSOg0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Data From an App  [2:05]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/larvYYDbvf0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) How Complex Data is Stored  [3:23]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/0ZCUI-zNS-o?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Related Apps using JOINs [2:13]

