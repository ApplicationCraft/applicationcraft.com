---
title: "EXP 6 : this.collectValue"
active_menu_item: developers
class_name: developers
full_width: true
---


The is normally called before or as a part of self.closeDialog, so

self.closeDialog(self.collectValue());

This function assembles the dialog settings into the object that is passed back to the widget as a part of the closeDialog() call.

    //@EXP@6@:@This@collects@your@dialog@data@into@an@object@(or@a@value@for@a@really@simple@dialog)
    this.collectValue@=@function(){
        var ret = {},
            dlg = this._tmpDialog;
        ret.text = dlg.find(".exampleDialogText").val();
        ret.checked = dlg.find(".exampleDialogCheck").is(":checked");
        return ret;
    };
   

