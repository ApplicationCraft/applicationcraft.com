---
old_url: populating_the_widget.htm
title: "Populating the Widget"
active_menu_item: developers
class_name: developers
full_width: true
---


You can populate the Timeline Widget using the [app.populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) method. This allows all meta information to be passed from almost any simple or complex JSON object.

Typically, you will retrieve data using [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata) or [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) . These both return data in some format that includes at least the metadata required. Importantly, you do not have to transform this data into a precise object/array structure in order to populate the widget.

The [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) method allows you to pass a simple mapping object that tells AC where to get data from in your source data and where to put it in the widget. The mapping objects used in the example below are fully explained here.

## Example

The following code shows how we can create some dummy entries manually. In practice, your data will come back in some format determined by the back-end the data is pulled from. You will rarely populate your Timeline widget using hard-coded arrays but the example does a good job of explaining the process.

    function getSampleDate() {
        var dateEvent = new Date();
        dateEvent.setTime(dateEvent.getTime() + ((Math.floor(Math.random() * 11) - 4) * 12 * 60 * 60 * 1000));
        return dateEvent;
    }
     
    function getNextWeekDate() {
        var dateEvent = new Date();
        dateEvent.setTime(dateEvent.getTime() + ((Math.floor(Math.random() * 7) + 7) * 12 * 60 * 60 * 1000));
        return dateEvent;
    }
     
    function getSomeData() {
        var dummyDate = getSampleDate();
        var dummyEndDate = getNextWeekDate(); 
        // This array is purely for our example. Your data will come back in a different and potentially more complex format    
        var treeArr = [
            {treeId:'id1', parentId:null, itemName:"Hip Replacement", itemIcon:"http://static.jstree.com/v.1.0rc/_docs/_drive.png"},
            {treeId:'id2', parentId:'id1', itemName:"Consultation", itemIcon:""},
            {treeId:'id3', parentId:'id1', itemName:"Operation", itemIcon:""},
            {treeId:'id4', parentId:'id1', itemName:"Physio", itemIcon:""},
            {treeId:'id5', parentId:'id1', itemName:"Physio", itemIcon:""},
            {treeId:'id6', parentId:null, itemName:"Heart Replacement"},
            {treeId:'id7', parentId:'id6', itemName:"Consultation", itemIcon:""},
            {treeId:'id8', parentId:'id6', itemName:"Operation", itemIcon:""},
            {treeId:'id9', parentId:'id6', itemName:"Medication", itemIcon:""}
        ];
        // This WILL be required (if your Widget's 'Treeview Visible' property is set to false) and 
        // defines the mapping from the tree data to the Timeline Widget.
        var treeMap = {appId:"treeId", parentId:"parentId", name:"itemName", icon:"itemIcon"};
     
        // This array is purely for our example so we have a clear example
        var timelineArr = [
            {parentTreeId:'id1', evName:'Episode 1', evDate:dummyDate(7), itemIcon:'', endDate: dummyDate(50)},
            {parentTreeId:'id2', evName:'Consult Dr. Evans', evDate:dummyDate(7), itemIcon:_whiteClip, endDate: ''},
            {parentTreeId:'id3', evName:'Operation Rm 3B', evDate:dummyDate(30), itemIcon:_orangeList, endDate: ''},
            {parentTreeId:'id4', evName:'Session 1', evDate:dummyDate(40), itemIcon:_bluePen, endDate: ''},
            {parentTreeId:'id5', evName:'Session 2', evDate:dummyDate(50), itemIcon:_bluePen, endDate: ''}, 
            {parentTreeId:'id6', evName:'Episode 2', evDate:dummyDate(7), itemIcon:'', endDate: dummyDate(24)},
            {parentTreeId:'id7', evName:'Consult Dr. Mors', evDate:dummyDate(10), itemIcon:_whiteClip, endDate: ''},
            {parentTreeId:'id8', evName:'Operation Rm 5A', evDate:dummyDate(20), itemIcon:_orangeList, endDate: ''},
            {parentTreeId:'id9', evName:'Anti Rejection', evDate:dummyDate(24), itemIcon:_purpleMinus, endDate: ''}
        ];
        // This WILL be required
        var timelineMap = {parentId:'parentTreeId', name:'evName', date:'evDate', icon:'itemIcon', endDate: 'endDate'};   
     
        // This takes your source data and puts it into the timeline widget
        // Note that the tree and timeline data arrays are accompanied by their mapping objects
        app.populateWidget("timeline1", treeArr, timelineArr, treeMap, timelineMap);
        
        // Fit the full time range into the available display
        app.w("timeline1").fitData();    
    }
          
     
   

## Tree Data

You can see an array called treeArr[ ], which is where we will store the tree categories. Your source data can contain the following fields that are understood by the widget

 - appId - this is the id of the individual tree list item. This ID can be referenced by a) other child tree nodes or b) Timeline array items that should be shown in the same row.

 - parentId - the ID of this item's parent tree item. If undefined, then it is a top level item.

 - name - this is the name of the tree item and appears as the item text.

 - icon - url of the icon that should appear net to this item. Can be undefined, in which case the default icon is used (if there is one).

    `var treeMap = {appId:"treeId", parentId:"parentId", name:"itemName", icon:"itemIcon"};`
     
       

Note how these precise element names are used in the mapping object. The values you supply against each one point to the names in your source data. You should refer to the [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) documentation for a full explanation of these mapping, which are capable of working with complex objects.

## Timeline Data

You can see an array called timelineArr[ ], which is where we will store the timeline event data. Your source data can contain the following fields that are understood by the widget

 - parentId - the ID of the treeview item that this belongs to (can be undefined) and the row it belongs in.

 - name - the name of the event as shown in the timeline area

 - date - the datestamp (javascript date object) of the event

 - endDate - an optional value that indicates when the event finished. If supplied, you will see an event duration bar spanning the period between date and endDate.

 - icon - the url of the icon to display alongside the event text

 `var timelineMap = {parentId:'parentTreeId', name:'evName', date:'evDate', icon:'itemIcon', endDate: 'endDate'}; `

Note how these precise element names are used in the mapping object. The values you supply against each one point to the names in your source data. You should refer to the [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) documentation for a full explanation of these mappings, which are capable of working with complex objects.

