---
title: "Functions and Complex Expressions"
active_menu_item: developers
class_name: developers
full_width: true
---


When creating queries that require

## Expression 1 : SELECT p."companyName" as name, LOWER(country) FROM "customers" AS p

    cObj.select().from({p:@'customers'},{name:@'companyName',@country:@new@DbExpr('LOWER(p.country)')})
    cObj.select().from({p:@'products'},{product_id:@'product_id',@cost_plus_tax:@new@DbExpr('p.cost@*@1.08')})
    new DbExpr()
   

## Expression 2 : SELECT p."product\_id", p.cost \* 1.08 AS cost\_plus\_tax  FROM "products" AS p

The same applies to fieldsObject parameters in the following cases

 - [update()](../../scripting-apis/server-side-api/ssj-object/database/update)

 - [delete()](../../scripting-apis/server-side-api/ssj-object/database/delete)

If one of your fields referenced a SQL function then you would also use to encapsulate your SQL function.

