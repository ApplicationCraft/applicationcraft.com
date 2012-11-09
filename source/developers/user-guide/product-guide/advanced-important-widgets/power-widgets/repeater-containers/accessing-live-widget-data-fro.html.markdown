---
title: "Accessing Live Widget Data from Scripts"
active_menu_item: developers
class_name: developers
full_width: true
---


Once your Repeater Container is populated, you may want to interact with the widget. A common example is a button located in a row that, when pressed, performs an action.

In this situation, you often need to know how to get at the other widgets in the same row. Say you have the following widgets in your Repeater

 - numCost

 - numQuantity

 - numTotal

When the user enters a quantity value and tabs away from it, we want to calculate the total. The way of thinking about this is

  1.   I, numQuantity, have lost the focus

  2.   What is the parent row object that contains me?

  3.   That parent must have a children numCost and numTotal which I then reference to calculate the total

In code, this looks like this

    function handler_numQuantity_onBlur(){
    rowObj=_widget.parent();  // _widget is the current object (numQuantity in this case)
    app.setValue(rowObj.w('numTotal'), rowObj.w('numCost').value() * _widget.value());
    calcGrandTotal();
    }
    _widget
   

Note that the object is a useful one and can be used in any Event Handler to get the active widget that the event is handling at that time.
