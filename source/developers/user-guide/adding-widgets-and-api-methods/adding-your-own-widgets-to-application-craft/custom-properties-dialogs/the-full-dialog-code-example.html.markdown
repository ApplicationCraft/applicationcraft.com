---
title: "Custom Dialog Code Example"
active_menu_item: developers
class_name: developers
full_width: true
---


The following code is the full code required for a very simple property dialog. Where you see EXP, this corresponds to an explanation in the subsequent sections.

    (function($, gType) {
    if (!gType)
    return;
    // simpleLength custom property type. Does not need any dialog
    gType.simpleLength = function (cell) {
    this.cell(cell);
    this._params = {min : 0, max: 99};
    };
    gType.simpleLength.prototype = new gType.basenumber;
    gType.dialogExample = function(cell) {
    // The following line should always be included
    this.cell(cell);
    // The HTML template for your dialog
    this._template = '<div><input type="text" class="exampleDialogText"/><br><label><input type="checkbox" class="exampleDialogCheck"/>To check or not to check ?</label></div>';
    //
    : You pass in your value or object and the property text value is constructed and displayed
    this.setValue = function(val) {
    // ONE of the following would be used, depending on the dialog
    // CASE 1 : Simple data like a string
    this.setCValue(val);
    this.sValue = val;
    // CASE 2 : cycle through all keys in the object
    // Let's say your object looks like this {file: true, folder: true, link: false}
    // and it should show "file, folder" in the property value cell in the toolbar
    var viewVal = "";
    if (val){
    for (var key in val){
    if (val[key]){
    (viewVal != "") && (viewVal += ", ");
    viewVal += key;
    }
    }
    }
    this.setCValue(viewVal);
    this.sValue = val;
    // CASE 3 : you need a but of specific logic to get your property string
    var viewVal = "";
    if (val){
    if (val.checked){
    viewVal = val.text;
    }
    }
    this.setCValue(viewVal);
    this.sValue = val; // this should always be present
    };
    //
    : called when the user clicks on the property; it invokes the dialog
    this.edit = function() {
    var self = this,
    value = this.getValue(),
    dlg = $(this._template);
    this._tmpValue = value;//set _tmpValue as default value;
    this._tmpDialog = dlg;
    $(document.body).append(dlg);
    //
    : Button binding for OK, Cancel and Use Style buttons
    var title = 'example title',
    ok = 'ok',
    cancel = 'cancel',
    useTheme = 'Use theme',//optional
    btn = {};
    btn[cancel] = function() {
    self.closeDialog(); //if closeDialog has undefined param, it's ony close, without onChange event
    };
    btn[useTheme] = function() {
    self.closeDialog(""); //if param in NOT undefined, it will be set new value to cell
    };
    btn[ok] = function() {
    if (self.validateValue()){
    self.closeDialog(self.collectValue());
    }
    };
    //
    : create jquery-ui dialog
    var props = jQuery.extend({
    modal : true,
    height: 345,
    width: 330,
    resizable : false,
    title : title,
    buttons: btn,
    close: function(event, ui) {
    self.onClose(); //call onClose from dialogType.js
    },
    dialogClass: "wa-system-dialog wa-system-style" //dialog classes needed for correct showing in AC system
    }, {});
    dlg.dialog(props);
    dlg.parent().click(function(ev) {
    ev.stopPropagation(); // prevent events in overlay click??
    });
    if (value){
    dlg.find(".exampleDialogText").val(value.text);
    if(value.checked) {
    dlg.find(".exampleDialogCheck").attr('checked', 'checked');
    }
    }
    };
    //
    : This is called usually from the OK button and allows validations
    this.validateValue = function(){
    var dlg = this._tmpDialog,
    ret = true;
    if (dlg.find(".exampleDialogText").val() == ""){
    ret = false;
    }
    return ret;
    };
    //
    : This collects your dialog data into an object (or a value for a really simple dialog)
    this.collectValue = function(){
    var ret = {},
    dlg = this._tmpDialog;
    ret.text = dlg.find(".exampleDialogText").val();
    ret.checked = dlg.find(".exampleDialogCheck").is(":checked");
    return ret;
    };
    };
    gType.dialogExample.prototype = new gType.dialogType;
    })(jQuery, jqSimpleGrid.types);
   

## EXP 1

## EXP 2

## EXP 3

## EXP 4

## EXP 5

## EXP 6

