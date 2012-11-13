---
title: "The HTML Template"
active_menu_item: developers
class_name: developers
full_width: true
---


Your dialog will need to display the various settings that make up the custom property. The HTML Template is what gets shown in the dialog. In our example we have a checkbox and a textbox.

    // The HTML template for your dialog
    this._template = '<div>
        <input type="text" class="exampleDialogText"/><br>
        <label><input type="checkbox" class="exampleDialogCheck"/>To check or not to check ?</label></div>';
   

To see how this gets populated by our property value, refer to [EXP 4 : the dialog code](/developers/documentation/adding-widgets-and-api-methods/adding-your-own-widgets-to-application-craft/custom-properties-dialogs/exp-4-the-dialog-code) .

