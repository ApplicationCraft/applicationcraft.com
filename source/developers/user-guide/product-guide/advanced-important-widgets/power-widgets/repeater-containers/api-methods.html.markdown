---
title: "API Methods"
active_menu_item: developers
class_name: developers
full_width: true
---


Unless you are populating your Repeater from a Data View, you should be familiar with the API methods. These let you do some powerful things with very little code.

app. [populateWidget()](../../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm) () - this is the main way of getting data from an array or object into the widget with minimal fuss

app. [deleteRow](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/deleterow.htm) () - removes a row from the Repeater

app. [drawNextPage](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage.htm) () - draws the next page of buffered data into the Repeater

app. [fetchDataPage](../../../../scripting-apis/client-api/data-view-functions/fetchdatapage.htm) () - fetches a relative page of data from a Data View

app. [isAllDataDrawn](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn.htm) () - tests whether all buffered data has been drawn

app. [getRow](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/getrow.htm) () - gets a specified row index and returns it as an object

app. [insertRow](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/insertrow.htm) () - inserts a new row

app. [rowCount](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/length.htm) () - returns the number of rows drawn

app. [rowIndex](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/rowindex.htm) () - this returns the index of a repeater row, typically used like this \_widget.parent().rowIndex()

app. [search](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/children.htm) () - searches through all rows for a given key

app. [sum](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/sum.htm) () - calculates the total of a specific widget across all rows

