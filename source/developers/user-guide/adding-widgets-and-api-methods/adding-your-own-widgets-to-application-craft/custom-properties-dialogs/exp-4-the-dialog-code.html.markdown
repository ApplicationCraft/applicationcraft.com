---
title: "EXP 4 : the dialog code"
active_menu_item: developers
class_name: developers
full_width: true
---


This is the bit where you finally render the dialog contents. AC provides a simple dialog framework so you can control the dialog appearance. It is hopefully obvious which parameters you will change (modal, height, width, resizable, title).

    // EXP 4 : create jquery-ui dialog
    var props = jQuery.extend({
        modal : true,
        height: 345,
        width: 330,
        resizable : false,
        title : title,
        buttons: btn,
        close: function(event, ui) {
            self.onClose(); //call onClose from dialogType.js
        },
        dialogClass: "wa-system-dialog wa-system-style" //dialog classes needed for correct showing in AC system
    }, {});
    dlg.dialog(props);
    dlg.parent().click(function(ev) {
        ev.stopPropagation(); // prevent events in overlay click??
    });
     
     
    if (value){
        dlg.find(".exampleDialogText").val(value.text);
        if(value.checked) {
            dlg.find(".exampleDialogCheck").attr('checked', 'checked');
        }
    }
    // The HTML template for your dialog
    this._template = '<div>
        <input type="text" class="exampleDialogText"/><br>
        <label><input type="checkbox" class="exampleDialogCheck"/>To check or not to check ?</label></div>';
   

The next piece of code takes the individual property settings ('text' and 'checked') from the object and populates them into your dialog.

You should note that this data is inserted into the [HTML Template](/developers/user-guide/adding-widgets-and-api-methods/adding-your-own-widgets-to-application-craft/custom-properties-dialogs/the-html-template) that was defined at the top of the dialog function.

