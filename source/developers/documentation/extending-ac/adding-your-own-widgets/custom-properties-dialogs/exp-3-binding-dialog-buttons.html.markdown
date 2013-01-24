---
old_url: exp_3__binding_dialog_buttons.htm
title: "EXP 3 : binding dialog buttons"
active_menu_item: developers
class_name: developers
full_width: true
---


The AC Framework provides support for OK, Cancel and Use Style buttons. Use Style is optional but you should use OK and Cancel.

    //**EXP 3**: Button binding for OK, Cancel and Use Style buttons
        var title = 'example title',
            ok = 'ok',
            cancel = 'cancel',
            useTheme = 'Use theme',//optional
            btn = {};
     
        btn[cancel] = function() {
            self.closeDialog(); // if closeDialog has undefined param, it's ony close, without onChange event
        };
        btn[useTheme] = function() {
            self.closeDialog(""); //if param in NOT undefined, it will be set new value to cell
        };
        btn[ok] = function() {
            if (self.validateValue()){
                self.closeDialog(self.collectValue());
            }
        };
   



You will generally not need to modify the btn[cancel] function; it simply shuts down the dialog without doing anything with changes. The btn[ok] is the most important function as this is responsible for validating the dialog contents (optional) and then saving the data.

You are responsible for writing both the [self.validateValue()](/developers/documentation/extending-ac/adding-your-own-widgets/custom-properties-dialogs/exp-5-this-validatevalue) and [self.collectValue()](/developers/documentation/extending-ac/adding-your-own-widgets/custom-properties-dialogs/exp-6-this-collectvalue) functions as explained in the following topics.

self.closeDialog() will pass back the javascript object that is stored as the widget property value. This object is the same object as processed by the [edit()](/developers/documentation/extending-ac/adding-your-own-widgets/custom-properties-dialogs/exp-2-this-edit) and [setValue()](/developers/documentation/extending-ac/adding-your-own-widgets/custom-properties-dialogs/exp-1-setvalue) functions.

