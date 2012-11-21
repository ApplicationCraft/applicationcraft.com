---
old_url: important_points_before_you_st.htm
title: "Important Points Before you Start"
active_menu_item: developers
class_name: developers
full_width: true
---


Here are some suggestions and tips and tricks you should be aware of. These will save you time and hassle hopefully.

## Abstraction and AC's Object Oriented Approach

The way we have implemented the database handling is very powerful and makes for very easy to write and even easier to read code. At first glance it may seems a little strange, but it is not hard to learn and once learnt, it makes a great deal of sense.

Although you can write literal SQL statements and execute these using [exec()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/exec) , don't succumb to the temptation unless there is a really good reason. Such reasons are

 - calling stored procedures or store functions

 - accessing a SQL statement that does not have explicit support in our API

## Error Handling

Make sure you handle your errors on the client side. The SSJ functions will trigger errors automatically (see [Error Handling](/developers/documentation/product-guide/data-storage/server-side-data-storage/error-handling) ) and return the error to the client callback functions. Make sure you handle them in some way as the following example shows.

    // Add a New Customer
    function handler_btnNew_onClick(mouseev){
        
        // Prepare an object to pass to the SSJ function
        p = {action:"AddCustomer", 
    data:{CompanyName:app.getValue("txtCompany"), 
            country:app.getValue("txtCountry")}
    };
     
        // Call the SSJ script
        app.callSSJ("acDemoWS", function(error, data) {
            if(error) {
                app.showMessage("Error", "Error : " + data);    
            }
            else {
                refreshList();
                //app.setValue()
                app.showMessage("Success", "New Customer added successfully");
            }
        }, [p]);    
    }

## Escaping with [quote()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quote) and [quoteInto()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quoteinto)

One of the great things about SSJ database functions is that they abstract you from the target database. [quote()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quote) and [quoteInto()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quoteinto) provide two extremely useful ways of escaping troublesome characters for your database.

For example, don't do the following (shows an update operation, but the same applies to cObj.delete(), select() statements.

    strName = "O'Reilly";
    cObj = cObj.update("customers", p.data,  "companyName=' + strName);
 
The 'O'Reilly' will confuse the SQL parser as there are three ' characters. Instead, do do the following, which not only escapes but also handles parameter insertions.
    
    strName = "O'Reilly";
    cObj = cObj.update("customers", p.data,  cObj.quoteInto('companyName=?', strName));
     
or the equivalent statement
    
    strName = "O'Reilly";
    cObj = cObj.update("customers", p.data, "companyName=" + cObj.quote(strName));

However, if you are inserting a numeric parameter value, then there is no need for escaping, so while you can still use quoteInto() if you want, the following is also safe

    nId = 12345;
    cObj = cObj.update("customers", p.data,  companyName=?', nId);
   

By the way, when you use . [insert()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/insert) and . [update()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/update) , the second parameter is an object with key:value contents to be inserted into the database fields. Each of the field values will automatically be escaped for you, so you don't need to prepare the contents of this object by using quote() manually in advance.
