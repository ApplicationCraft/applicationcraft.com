---
title: "EXP 2 : this.edit"
active_menu_item: developers
class_name: developers
full_width: true
---


This function is called as soon as the user clicks on the property. This is where the real action happens and the dialog is initialized and rendered.

The following snippet is standard code and does not need to be altered.

     
    var self = this,
        value = this.getValue(),
        dlg = $(this._template);
     
    this._tmpValue = value;//set _tmpValue as default value;
     
    this._tmpDialog = dlg;
    $(document.body).append(dlg);
     
   

