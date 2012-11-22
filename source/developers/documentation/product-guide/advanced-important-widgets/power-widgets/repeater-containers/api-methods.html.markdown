---
old_url: api_methods.htm
title: "API Methods"
active_menu_item: developers
class_name: developers
full_width: true
---


Unless you are populating your Repeater from a Data View, you should be familiar with the API methods. These let you do some powerful things with very little code.

app.[populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) - this is the main way of getting data from an array or object into the widget with minimal fuss

app.[deleteRow()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/deleterow) - removes a row from the Repeater

app.[drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) - draws the next page of buffered data into the Repeater

app.[fetchDataPage()](/developers/documentation/scripting-apis/client-api/data-view-functions/fetchdatapage) - fetches a relative page of data from a Data View

app.[isAllDataDrawn()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn) - tests whether all buffered data has been drawn

app.[getRow()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/getrow) - gets a specified row index and returns it as an object

app.[insertRow()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/insertrow) - inserts a new row

app.[rowCount()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/length) - returns the number of rows drawn

app.[rowIndex()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/rowindex) - this returns the index of a repeater row, typically used like this _widget.parent().rowIndex()

app.[search()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/children) - searches through all rows for a given key

app.[sum()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/sum) - calculates the total of a specific widget across all rows

