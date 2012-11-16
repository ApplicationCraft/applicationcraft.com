---
title: "Select Handling"
active_menu_item: developers
class_name: developers
full_width: true
---


Executing a SELECT statement is handled in a slightly different manner that offers easier handling without the need to build a complex sql statement composed of WHERE, ORDER BY, GROUP BY, LIMIT and FROM clauses.

If you prefer, you can build a SQL statement as a regular string and then use cObj.exec(strSql) to do the same.

The various SELECT clauses can be represented using javascript object functions. The following code illustrates this

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers").where("id=?", p.id).order('companyName');
    result = cObj.exec(selectObj);
    return(result);

You can order the call in any way you like, for example the following code does the same

    selectObj = cObj.select().order('companyName').where("id=?", p.id).order('companyName').from("customers");
  

The .where() function allows you to compose the entire string or to insert '?' tokens that are then substituted with the values supplied.

The exec() function returns the result set that can then be passed back to your callback function.

## In This Section

 - [select()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select)
 - [select().from()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-from)
 - [select().where()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-where)
 - [select().orWhere()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/orwhere)
 - [select().group()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-group)
 - [select().order()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-order)
 - [select().join()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-join)
 - [select().limit()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-limit)
 - [getSql()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/getsql)
