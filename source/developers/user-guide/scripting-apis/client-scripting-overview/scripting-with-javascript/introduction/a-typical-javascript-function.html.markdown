---
title: "A typical Javascript function"
active_menu_item: developers
class_name: developers
full_width: true
---


The following is an event that is called when a Respondent presses the 'Next Page' button. It checks to see whether all required fields have been completed before jumping to the next Page in the App, which is conditional on a response to which Region that person comes from.

    function@handler_btnHomeNext_onClick(mouseev){
        
        // Check that all required fields have been filled in
        var valid = app.checkMandatory(2, ["txtFirstName", "txtLastName", "txtEmail", "If set to true, the user is able to drag and drop the widget with the mouse at run timeRegion"],undefined, 100);
     
        // valid is an array containing any widgets that failed the test
        if(valid.length>0) {
            app.showMessage("Please complete all required fields.", "Validation Error");
        }
        else {
            // Assign the value of txtFirstname to txtGreetings Widget (repeats on EMEA and Final pages)
            app.assign("lblGreetings", "Welcome, [Form.Widgets.txtFirstname]");
            // There weren't any errors, so conditionally skip to the next page
            if(app.getValue("If set to true, the user is able to drag and drop the widget with the mouse at run timeRegion").value==1) {
                // If North America was selected. then jump to the 'Final' page
                app.pageJump("Final");
            }
            else {
                // Otherwise jump to the 'EMEA' page
                app.pageJump("EMEA");
            }    
        }
        
    }
   

