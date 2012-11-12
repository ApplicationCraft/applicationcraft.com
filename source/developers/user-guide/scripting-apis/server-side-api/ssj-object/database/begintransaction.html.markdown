---
title: "beginTransaction()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.beginTransaction()**

## Return Value

This function does not return a value.

## Description

This method initiates a new database transaction for the database referenced by the Connection Object.

## Example

This example shows how a record is first inserted into the 'customers' table and then a person is inserted into the 'people' table. If there is any error with the 'customers' insertion then the transaction is rolled back so the customer insert will not happen.

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    cObj.beginTransaction();
    try {
        cObj.insert("customers", cust.data);
        try {
            cObj.insert("people", person.data);
            cObj.commit();
            return("ok");
        }
        catch(e) {
            cObj.rollback();
            return(e);
        }
    }
    catch(e) {
        cObj.rollback();
        return(e);
    }
   

## See Also

 - [commit()](commit)

 - [rollback()](rollback)

 - [dataGetValues()](../../../client-api/widget-data-state-manipulation/datagetvalues)

 - [dataGetStates()](../../../client-api/widget-data-state-manipulation/datagetstates)

