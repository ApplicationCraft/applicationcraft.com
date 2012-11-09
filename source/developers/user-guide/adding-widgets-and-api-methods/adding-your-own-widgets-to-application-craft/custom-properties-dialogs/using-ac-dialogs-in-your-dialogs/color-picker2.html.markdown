---
title: "Color Picker"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use the jquery color picker that is included in Application Craft. However, we have modified this dialog with AC and so you should add the handler for the On Submit as follows

    onSubmit: function(hsb, hex, rgb, el, trans, cancel) {
    if (cancel) {
    // restore previous value here
    }
    $(el).ColorPickerHide();
    },
   

