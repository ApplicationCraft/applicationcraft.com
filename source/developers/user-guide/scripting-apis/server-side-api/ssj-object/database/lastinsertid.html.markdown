---
title: "lastInsertId()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.lastInsertId** ()

## Returns

The last row to be inserted into the database.

## Description

If your table is defined with an auto-incrementing primary key, you can call the lastInsertId() method after the insert. This method returns the last value generated in the scope of the current database connection.

It is not safe to generate a SELECT query that does a MAX(id) to get the latest value as there is not guarantee that this will be accurate if multiple users are inserting data. It will happen sooner or later that someone else inserts a record after you inserted yours and running the MAX(id) query.

## Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    cObj.insert('customers', {companyName:"Application Craft", country:"USA"});
    nLastId = cObj.lastInsertId();
     
   

## See Also

 - [dataGetValues()](../../../client-api/widget-data-state-manipulation/datagetvalues)

 - [dataGetStates()](../../../client-api/widget-data-state-manipulation/datagetstates)

 - [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)

