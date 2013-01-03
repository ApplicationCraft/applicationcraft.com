---
title: "Objects"
active_menu_item: developers
class_name: developers
full_width: true
---

Currently, **Objects** is the only Parse.com functional area that has a complete set of Application Craft helpers.

Parse.com lets you store your application data in a NoSQL database. It is fast, easy to use and operates on javascript objects, making it really easy to use from a web application.


##Terminology and Technology
Before you get started, the following points should help you orient yourself around Parse.com's Object storage.

- It is NoSQL storage, so don't try to take your regular database knowledge and brute force apply it to NoSQL. You need to think differently. We try to point you in the right direction, but reading up on NoSQL approaches will help.
- What you think of as a Database is an App (sort of) in Parse.com
- What you think of as a Table is closest to a Class in Parse.com
- What you think of as a Record/Row is an Object in Parse.com. And the real beauty, is that when you store a Row of data, you pass it, quite literally, a JSON object. It could not be easier, and you can store JSON objects of any complexity. This makes the movement of data between your App and its remote storage pretty effortless.
- You should think very differently about the way you store your data. You should usually store your one-to-many relationships in the JSON object and **NOT** in a seperate class (normalization in a regular database). There are exceptions to this approach, of course, but try to think about data storage in objects, not normalized tables.

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

- NoSQL does not offer JOIN type queries. This is another reason to store your one-to-many relationships within a single JSON object and not across multiple classes.
- Your queries can search very fast and efficiently anywhere within a JSON object.


