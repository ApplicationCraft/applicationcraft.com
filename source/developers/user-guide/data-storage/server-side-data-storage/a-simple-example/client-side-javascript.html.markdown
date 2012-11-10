---
title: "Client Side Javascript"
active_menu_item: developers
class_name: developers
full_width: true
---


The complete client side code is shown below. All of the functions look more or less the same and have the app.callSSJ() function at their heart. This function has 3 parameters

The name of the SSJ function that you created in the SSJ scripting area. You will usually have placed this in the Server folder within the Code explorer. The following screenshot shows the Code explorer for our App. You can see acDemoWS is the function we created to handle all of the database calls. This example chooses to call this single function for all of the DB operations. If you prefer, you could have one SSJ function for each operation. The next topic discussesthe SSJ code in more detail.

![db-example-code-explorer](/img/docs/db-example-code-explorer.png)

The call SSJ functions has 3 parameters

 - The SSJ function name (in our example, it is always 'acDemoWD' for all operations)

 - The callback function that is called from your SSJ function (called automatically when it returns)

 - A parameter array; we create an object an pass it through to the client. You are free to pass any object or variable types.

## Error Handling

You should handle errors within the callback function. The SSJ function always returns two parameters

 - error - if an error is thrown within the SSJ function, this will be true

 - data - this is the return value within your SSJ function; if an error was thrown on the server then it contains error information

## Full Client Side Code

    function handler_application_onAppStarted(){
    refreshList(); // used to initially load the ListBox from the database
    }
     
    var nSelCustomer;
     
    // Refresh the Customer listbox
    function refreshList() {
        
        // Prepare an object to pass to the SSJ function
        p = {action:"GetCustomers"};
     
        // Clear fields and disable action buttons
        app.resetWidget(["txtCompany", "txtCountry"]);
        app.enabled(["btnSave", "btnDelete"], false);
        nSelCustomer = 0;
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data.message);    
            }
            else {
                app.populateWidget("lbCustomers", data, {0:'companyName', 1:'id'});
            }
        }, [p]);    
        
        // Now get the number of Customers in the Database
        p = {action:"GetCustomerCount"};
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error getting customer count", "Error : " + data.message);    
            }
            else {
                app.setValue("lblCustomers", "Customers : " + data[0].totalRecs);
            }
        }, [p]);  
        
    }
     
    // Add a New Customer
    function handler_btnNew_onClick(mouseev){
        
        // Prepare an object to pass to the SSJ function
        p = {action:"AddCustomer", data:{CompanyName:app.getValue("txtCompany"), country:app.getValue("txtCountry")}};
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data.message);    
            }
            else {
                refreshList();
            }
        }, [p]);    
    }
     
    // Update the selected Company
    function handler_btnSave_onClick(mouseev){
        
        // If no Customer is selected then do nothing
        if(nSelCustomer===undefined || nSelCustomer==0) {
            return;
        }
        
        // Prepare an object to pass to the SSJ function
        p = {action:"UpdateCustomer",  data:{CompanyName:app.getValue("txtCompany"), country:app.getValue("txtCountry")}, id:nSelCustomer};
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data.message);    
            }
            else {
                refreshList();
            }
        }, [p]);       
    }
     
    function handler_btnRefresh_onClick(mouseev){
        refreshList();      
    }
     
    // new Customer selected by clicking in the listbox
    function handler_lbCustomers_onSelectionChange(newValue, oldValue){
        
        // Prepare an object to pass to the SSJ function
        nSelCustomer = newValue.value;
        p = {action:"GetCustomer", id:nSelCustomer};
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data.message);    
            }
            else {
                app.setValue("txtCompany", data[0].companyName);
                app.setValue("txtCountry", data[0].country);
                app.enabled(["btnSave", "btnDelete"], true);
            }
        }, [p]);         
    }
     
    function handler_btnDelete_onClick(mouseev){
     
        // If no Customer is selected then do nothing
        if(nSelCustomer===undefined || nSelCustomer==0) {
            return;
        }
     
        // Prepare an object to pass to the SSJ function
        p = {action:"DeleteCustomer", id:nSelCustomer};
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data);    
            }
            else {
                refreshList();
                app.showMessage("Success", "Customer was deleted");
            }
        }, [p]);    
    }
     
   

