---
title: "File and AC Resource Dialog"
active_menu_item: developers
class_name: developers
full_width: true
---


If you want to enter a URL for a file but also allow an Application Craft Resource to be chosen, then use the following code

    var@dlg@=@new@window['WiziCore_ResourceSelect']({
        val: value, // place your url value here
        treeHeight: null,
        propType: null,
        buttons: undefined,
        closed: function(saved, val) {
            if (saved){
                // selection was not canceled
            }
            //close code
        }
    });
     
    saved == false
   

with the on closed event you will get the new url value selected by user. If then the user pressed cancel.

