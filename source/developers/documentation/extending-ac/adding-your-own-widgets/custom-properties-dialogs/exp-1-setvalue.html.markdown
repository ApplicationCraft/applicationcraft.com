---
title: "EXP 1 : this.setValue"
active_menu_item: developers
class_name: developers
full_width: true
---


When your widget is selected, it needs to get all of the property values and display them in the property bar. For custom properties, your dialog code is responsible for the display of the property in the property bar. Application Craft will automatically call the setValue() property for the toolbar. This function receives the property value or object and the processes this in any way it chooses in order to arrive at the final display value for the property bar.

Tow important functions that your dialog should call are

    this.setCValue(strPropertyDisplayText)
    this.sValue(valOrObject)
    // 
     : You pass in your value or object and the property text value is constructed and displayed
    this.setValue = function(val) {
     
        // ONE of the following would be used, depending on the dialog
     
        // CASE 1 : Simple data like a string
        this.setCValue(val); 
        this.sValue = val;
     
        // CASE 2 : cycle through all keys in the object
        // Let's say your object looks like this {file: true, folder: true, link: false}
        // and it should show "file, folder" in the property value cell in the toolbar
        var viewVal = "";
        if (val){
            for (var key in val){
                if (val[key]){                        
                    (viewVal != "") && (viewVal += ", ");                        
                    viewVal += key;
                }
            }
        }
        this.setCValue(viewVal);
        this.sValue = val;
     
        // CASE 3 : you need a but of specific logic to get your property string
        var viewVal = "";
        if (val){
            if (val.checked){
                viewVal = val.text;
            }
        }
        this.setCValue(viewVal);
        this.sValue = val; // this should always be present
     
    };
     
   

- which  tells the AC Framework what to show in the property value.

- which  instructs your dialog to store the main value or (usually) object containing the property data

The code below shows 3 ways you are likely to process the incoming 'val' data so you can build your property bar value string, so make sure your dialog only uses one. If you leave the code like this, only Case 3 would work, of course.

**EXP 1**

