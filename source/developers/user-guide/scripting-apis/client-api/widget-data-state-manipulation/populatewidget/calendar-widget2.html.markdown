---
title: "Calendar Widget"
active_menu_item: developers
class_name: developers
full_width: true
---


Application Craft can map any of the following fields into a [Calendar](../../../../widget-properties-events/advanced/calendar) Widget

 - id - an ID you can set for your events

 - start - date time that an event starts, can be milliseconds elapsed since Jan 1st 1970 (a Javascript standard) or a date/time object

 - end - time that the event ends, can be milliseconds elapsed since Jan 1st 1970 or a date object

 - text - the text that can be set for the event

 - description - a longer text description of the event

In the mapping object should use precise key names as shown below

    var@map@=@{
    id:@"id",
    start:@"startTime",
    end@@:@"end",
    text@:@"text",
    description@:@"description"
    };
        var data = [{
            end  : 1329442214983,
            startTime: 1329355814983,
            text : "Event 1"
        },
        {
            end  : 1329701414983,
            startTime: 1329528614983,
            text : "Very important!",
            description: "This is the second event"
        }];
        
        var map = {
            start: "startTime",
            end  : "end",
            text : "text",
            description : "description"
    };
        
        app.populateWidget("Calendar1", data, map);
     
             var data = [{
    id:'someId',@@
    startDate:@new@Date(2012,@4,@28),@//Note@that@the@Date@object@element@'4'@relates@to@May
    endDate:@new@Date(2012,@4,@30),@@@//Note@that@the@Date@object@element@'4'@relates@to@May
    text:@'some@event@text',@
    description:@'event@description'
    },
    {
    id:'someId2',@
    startDate:@new@Date(2012,@4,@11),@//Note@that@the@Date@object@element@'4'@relates@to@May
    endDate:@new@Date(2012,@4,@12),@@//Note@that@the@Date@object@element@'4'@relates@to@May
    text:@'some@event@text@2',@
    description:@'event@description@2'
    }];
     
    var@map@=@{
    id:'id',@
    start:@'startDate',@
    end:'endDate',@
    text:@'text',@
    description:@'description'
    };
     
    app.populateWidget("Calendar1",@data,@map);
   

Below are 2 hard-coded examples of an array of 2 events being populated into a [Calendar](../../../../widget-properties-events/advanced/calendar) Widget

Note that you can map from any key name in your data array with the map object. You can omit any fields you don't need to populate.

**See Also:**

 - [Calendar Widget](../../../../product-guide/advanced-important-widgets/calendar-widget/)

