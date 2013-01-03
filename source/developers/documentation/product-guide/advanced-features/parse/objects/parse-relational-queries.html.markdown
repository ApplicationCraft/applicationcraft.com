---
title: "Relational Queries"
active_menu_item: developers
class_name: developers
full_width: true
---

One of the first things to point out is that you should think differently about the way you store your data. Parse.com uses MongoDB, which is a NoSQL type database. This is not a relational database and for most situations, this is a very good thing. It is beyond the scope ofthis guide to explain NoSQL in detail and the pros and cons. You will find plenty of resources that do a good job of this.

A very common approach for people used to thinking in relational database terms is to tend to structure your NoSQL data in the same way as you structure your relational data. This is often a mistake.

##NoSQL does not provide a JOIN mechanism
The simple thing you need to take on board is that you just have to accept this. It takes a bit of getting used to, but once you have made the mental adjustment, you will find that you can cope just fine.

##A Simple CRM Example
Let's take the example of a very simple CRM application. You have Customers and Contacts. For each Customer you can have several contacts.

In RDBMS thinking, you would create a Customer table and a separate Contacts table. 

In NoSQL thinking, you should think of your data as a JSON object, where each Customer and its associated Contacts are in a single JSON "document".

	{ 
	  "custName": "Application Craft",
	  "custCountry": "UK",
	  "contacts": [{
	      "firstName": "Freddy",
	      "lastName": "May"
	    },
		{
	      "firstName": "Freddy",
	      "lastName": "May"
	    }]	    
	}

You can still run queries based on either Customers or Contacts or both. Your data is  structured in the right way that you don't have to think about JOIN type queries.

##What about duplication
There will exists situations where you might have a table that is shared by several other classes (tables). There is no right or wrong way to handle this, but be prepared to free yourself of strict relational thinking.

- you could simply allow duplication within your documents and handle this in code where necessary
- create a separate class, which does equate to a relational approach, but handle things in code when it comes to joining the data.