---
title: "Server Side Javascript"
active_menu_item: developers
class_name: developers
full_width: true
---


Server Side Javascript can be found in the AC IDE in the usual; place. In the code Explorer window, look for the 'Server' folder. These are the scripts associated with the current App you are editing. You can also write SSJ scripts that are Public (not shown in the screenshot but located below and called 'Server Public'.

![db-example-code-explorer](/img/docs/db-example-code-explorer.png)

If you write your handlers as public, then you will need to explicitly include these within your App's private Server Scripts by adding the following line of code (in our example, you would add it to the DB Demo virtual file).

    include('Virtual Folder 1|Virtual Folder 2|Virtual File');
   

If your Server Public area does not have any folders created within it, then just specify the Virtual File

Explanation of Server Folder Structure

You can see the folder structure we have created in the above screenshot. You can manage this folder structure by right-clicking in the list. The structure we have created is entirely arbitrary and you are free to organize your code as you wish.

 - DB Demo is automatically created by AC and is the main SSJ Private Folder. We have created a single function 'acDemoWS' to handle all requests from the Client.

 - We then created a folder 'DB Selects' which handles all Select type functions (getCustomers(), getCustomer)

 - ... and another folder 'DB Updates' which handles the rest (addNewCustomer(), updateCustomers(), deleteCustiomer())

Database Methods Documentation

All of the SSJ Database methods are fully documented in the [SSJ Database](../../../scripting-apis/server-side-api/ssj-object/database/index) section.

Error Handling

Application Craft handles the errors automatically. If an error is thrown then the client side callback is invoked, the error value is set to true and the data parameter will contain the error message. If your SSJ code includes validations or other logic then you can also throw an error explicitly using the javascript throw(exception) statement where exception can be a string, value or object. This is then passed back to your callback.

DB Demo Folder

This contains only the acDemoWS() function, which handles all requests and uses a switch statement to route the request onwards.

    // This SSJ function handles all DB methods for the AC Demo App
    function acDemoWS(p) {
    // Get the Connection to the Database
    // We are handling the error with try/catch
    // If we did not handle it, AC would automatically throw() the error
    try {
    cObj = ssj.getConnection("8a8629ab-4456-49e8-ae1d-11adce74c284");
    }
    catch(e) {
    throw("Connection Error");
    }
    debugger;
    // Call the relevant DB Handler
    console.log(p.action);
    switch(p.action) {
    case "AddCustomer":
    return(_addNewCustomer(cObj, p));
    case "GetCustomers":
    return(_getCustomers(cObj));
    case "GetCustomer":
    return(_getCustomer(cObj, p));
    case "UpdateCustomer":
    return(_updateCustomer(cObj, p));
    case "DeleteCustomer":
    return(_deleteCustomer(cObj, p));
    case "GetCustomerCount":
    return(_getCustomerCount(cObj));
    }
    }
   

DB Selects Folder Functions

These functions handle the two Select operations.

    // Handles all SELECT type DB fetches
    // Get a list of all Customers
    function _getCustomers(cObj) {
    selectObj = cObj.select().from('customers').order('companyName');
    result = cObj.exec(selectObj);
    return result;
    }
    // Get just one Customer by ID
    function _getCustomer(cObj, p) {
    selectObj = cObj.select().from("customers").where('id=?', p.id);
    result = cObj.exec(selectObj);
    return result;
    }
    // Get total number of records
    function _getCustomerCount(cObj) {
    selectObj = cObj.select().from({p: 'customers'},{totalRecs: new DbExpr('COUNT(*)')});
    result = cObj.exec(selectObj);
    return result;
    }
   

DB Updates

These functions handle the Insert, Update and Delete operations.

    // Add a new customer to the customers table
    function _addNewCustomer(cObj, p) {
    cObj.insert("customers", p.data);
    var x = cObj.lastInsertId();
    return x;
    }
    // Update a Company's data
    function _updateCustomer(cObj, p) {
    cObj.update("customers", p.data,  cObj.quoteInto('id=?', p.id));
    return p.id;
    }
    // Delete a Company's data
    function _deleteCustomer(cObj, p) {
    cObj.delete("customers", cObj.quoteInto('id=?', p.id));
    return p.id;
    }
   

