---
old_url: mysql__postgres__oracle_etc.htm
title: "MySQL, Postgres, Oracle etc."
active_menu_item: developers
class_name: developers
full_width: true
---


If your View is talking to a vendor specific database (MySQL, Postgres, SQL-Server, Oracle etc.) then you need to be aware that certain functions are abstracted by Application Craft but not all.

When you press the fn button in any of the Data View dialogs, you can see a list of abstracted functions. Any other functions need to be supplied in the appropriate format for the back end database.

## Abstracted Functions

 - Year

 - Month

 - MonthNameShort

 - MonthNameLong

 - Day

 - DayName

 - Week

 - Quarter

 - Sum

 - Max

 - Min

 - Avg

 - Count

 - DateToRTZ

 - DateToUTC

 - DateToLocale

## Example

If you want to concatenate a string in MySQL, then you would need to use a statement like

    Concat({orders.orderNumber}, ' ',{customers.customerName}, ' ', DATE_FORMAT({orders.orderDate},'%Y/%m/%d'),
     ' ',  sum({orderdetails.quantityOrdered}*{orderdetails.priceEach})
     
   

Here you can see the Concat() function as well as the DATE\_FORMAT() function being used.

For information on other functions for different databases:

Postgres : [http://www.postgresql.org/docs/9.1/static/functions-string.html](http://www.postgresql.org/docs/9.1/static/functions-string.html)

MySQL: [http://dev.mysql.com/doc/refman/5.1/en/string-functions.html](http://dev.mysql.com/doc/refman/5.1/en/string-functions.html)

Oracle: [http://docs.oracle.com/cd/B19306\_01/server.102/b14200/functions001.htm\#sthref918](http://docs.oracle.com/cd/B19306_01/server.102/b14200/functions001.htm#sthref918)

MSSQL: [http://msdn.microsoft.com/en-us/library/ms181984.aspx](http://msdn.microsoft.com/en-us/library/ms181984.aspx)

