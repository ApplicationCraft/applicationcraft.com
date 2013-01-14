---
title: "Setting up in Parse.com"
active_menu_item: developers
class_name: developers
full_width: true
---

##Create an App
If you haven't already, create an App in Parse.com. This can be loosely thought of as your database. 

##Create a Class
*This step is completely optional, as when you start creating data, the class will be created for you if it does not already exist.*

A Class can be thought of as a database table. However, they are more flexible and easier to maintain than a regular database table.

The screenshot below shows two classes set up in the Data Browser of our CRM App - **Customers** and **Contacts**. 

![Parse.com data browser](/img/docs/parse-dash-data.png)

One thing that is great about NoSQL databases is that you do not need to prepare you schema in the same way that you do for a regular database. When you create a class, you will see that several fields are automatically created

- objectId - this is the unique ID for each row in your class (table) and is automatically created whenever you add a new row of data
- createdAt - the date/time the row was created
- updatedAt - the date/time the row was last updated
- ACL - who has permissions to access this row (read the Parse.com documentation for more on this)

##Adding Columns
*This is also completely optional and not required.*

Although you can add columns (fields) in the Data Browser, you don't actually need to. When you add data to your row, you do so by passing in JSON object. Take a look at the Customers class. 

![Parse.com data browser](/img/docs/parse-data-customers.png)

Whether you have defined any columns or not, you would add or update data by passing in the following JSON object

	{
	   "additional":{
	      "state":"WA",
	      "website":"http://www.microsoft.com"
	   },
	   "name":"Microsoft",
	   "country":"USA"
	}

You should notice that the top level keys (name, country) are assigned to columns in the data browswer. The object "addtional" is stored as a JSON object in the column 'additional'.

##Retrieving Data
When you retrieve data from Parse.com, you would get the following structure back.

	{
	   "updatedAt":"2012-12-31T11:04:55.633Z",
	   "additional":{
	      "state":"WA",
	      "website":"http://www.microsoft.com"
	   },
	   "objectId":"0LFZWC53pi",
	   "createdAt":"2012-12-30T10:23:18.765Z",
	   "name":"Microsoft",
	   "country":"USA"
	}

##Writing some code
There are two ways for you to work with Parse.com. 

- You can use AC's helper functions, which make for easier and more readable code. The helper functions are explained in the next section.
- You can code access it without AC helper functions, using httpRequest(). Please refer to [Calling Parse.com Directly](/developers/documentation/product-guide/advanced-features/parse/parse-direct-calls/). You should also then refer to the [Parse.com REST API documentation](https://parse.com/docs/rest#objects-creating).

This User Guide concentrates on the [helper functions](/developers/documentation/product-guide/advanced-features/parse/objects/parse-object-helper-overview/).


