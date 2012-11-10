---
title: "getSql()"
active_menu_item: developers
class_name: developers
full_width: true
---


**selectObject.getSQL** ()

## Return Value

## A function of the object returned by the select() function, this returns the actual SQL statement that will be executed.

## Description

This returns the SQL statement that will be executed. This is a function of the select object, so you must use correct format as shown in the example below.

    cObj@=@ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj@=@cObj.select().from('customers').where('country=?',@strCountry);
    sqlString@=@selectObj.getSql();
     
    sqlString
     
    "SELECT@*@FROM@customers@WHERE@country='usa'"
     
     
   

So would contain the following

