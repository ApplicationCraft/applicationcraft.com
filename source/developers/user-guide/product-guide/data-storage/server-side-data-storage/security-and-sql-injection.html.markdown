---
title: "MUST READ: Security and SQL Injection"
active_menu_item: developers
class_name: developers
full_width: true
---


Experienced developers are already aware of the importance of making sure that your database handling protects against hackers attempting to access server side functions or inject SQL expressions to gain access to data.

Novice developers may not be aware of the dangers and so this section should give you some pointers to make sure you follow best practices.

Please don't take this as a comprehensive guide to security. There are also other ways you can enhance security using enhanced user validation. Please refer to the following sections

 - [SSJ - Writing Secure Code](/developers/user-guide/scripting-apis/server-side-scripting-overview/writing-secure-code)

 - [SSJ API - Security](/developers/user-guide/scripting-apis/server-side-api/ssj-object/security/)

## Protecting your SSJ Functions with the '\_' prefix

When building SSJ functions, if there are functions that should not be callable from the client, then be sure to prefix the function name with '\_'. This protects them and makes them only callable from within SSJ code. Calls from a client will not be accepted.

## Inserting Parameters

Handling Parameters correctly is one of the best ways of protecting your queries against manipulation. Your queries will often require you to pass data from the client for your queries. The [quoteInto()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/database/quoteinto) function is very useful. Take the following SQL statement

    SELECT * FROM customers WHERE ID=x
        selectObj = cObj.select().from("customers").where('id=' + p.id);
        result = cObj.exec(selectObj);
        return(result);
        selectObj = cObj.select().from("customers").where('customer=?', p.id);
        result = cObj.exec(selectObj);
        return(result);
    SELECT * FROM customers WHERE region=x AND (type=y or type=z)
        var strWhere = cObj.quoteInto(region=?', p.region) + ' AND (';
        strWhere =+ cObj.quoteInto('type=?', p.type1) + ' OR ';
        strWhere += cObj.quotInto('type=?', p.type2) + ')';
        selectObj = cObj.select().from("customers").where(strWhere);
        result = cObj.exec(selectObj);
        return(result);
    whereString
   

## We advise against the following approach

The problem with this is that under certain circumstances a hacker could send across not a single parameter value as required '12345' but an extended expression like '12345 OR id\>0' and thereby get access to all customers.

Of course, you could protect against this by performing validations in your SSJ script, but the use of parameter tokens makes life a lot easier.

## The better way of handling it

## Boolean Expressions and Multiple Parameters

Let's say you had this SQL expression you wanted to create: . In the following example, we construct the individual parts of the WHERE as a string but still use quoteInto() for the parameter inserts.

## cObj.update() and cObj.delete()

The same principle applies to cObj.delete() and cObj.update() where you can supply a WHERE clause in the parameter.

