---
title: "Repeater Containers"
active_menu_item: developers
class_name: developers
full_width: true
---


Repeaters are more or less like lists, except they have multiple columns, not just 2. However, they behave differently to Grids due to the fact that they are made up of a random collection of other Widgets rather than columns.

## Reading/Writing Data From a Repeater Row

Reading the contents of a Repeater Container is rather more complicated than with Grids and requires the use of a special utility function

Let's assume you have a shopping basket where each 'row' in a repeating group consists of "Product Name" and "Product Price" with a Number Widget where the Respondent enters the Quantity to be ordered. There could be any number of order items. When the Respondent enters a quantity, the App should multiply this by the Price to generate the value for a further Widget "Total".

## Example

The following example shows how a total is calculated when a Respondent enters a quantity into a Text Widget belonging to the Repeater row.

    function@handler_Repeater_numQuantity_onBlur(){
        rowObj =_widget.parent();
        app.setValue(rowObj.w('lblTotal'), rowObj.w('lblPrice').value() * _widget.value());
    }
   

There are a couple of important things going on here

 - \_widget is an object that is available within all AC events and is the Widget Object of the widget that triggered the event

 - \_widget.parent() gets the Repeater Container row object

 - w() is a function that all Widgets have and it returns the Widget object of the specified Widget

\_widget and the Widget Object are discussed in detail in the [Objects & Titbits](../../../../client-api/objects-titbits/) chapter of the [Client API](../../../../client-api/) section.

