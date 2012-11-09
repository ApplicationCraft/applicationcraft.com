---
title: "EXP 5 : this.validateValue"
active_menu_item: developers
class_name: developers
full_width: true
---


This function is not required but if your dialog settings require some validation before they are saved, then you should include it.

    // EXP 5 : This is called usually from the OK button and allows validations
    this.validateValue = function(){
    var dlg = this._tmpDialog,
    ret = true;
    if (dlg.find(".exampleDialogText").val() == ""){
    ret = false;
    }
    return ret;
    };
   

