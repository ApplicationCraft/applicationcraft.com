---
title: "Queries"
active_menu_item: developers
class_name: developers
full_width: true
---

Generating Parse.com queries requires some slightly different thinking. Rather than using SQL statements, you define your query using a JSON object.

Until you get the hang of this, it can seems a little weird, but it is very logical and you will soon understand it.

Parse.com is based on MongoDB and the Parse.com documentation is rather thin when it comes to examples. We will try to include some good examples for commonly used queries.

##Overview
The general format for a query is 

	results = parse.objects.query("Classname", queryObject);

The query object has the following structure. All fields are optional

	{
	    where: {},  
	    order: "",  
	    limit: 100, 
	    skip:  0,   
	    count: boolValue,
	    include: ""	    
	}

##where
This is where you specify you query conditions. This can get quite messy, so check out the examples lower down.


##order
This allows you to specify the sort order in which your data is returned.

	order: "name"			// ascending order by 'name'
	order: "-score" 		// descending order of 'score'
	order: "name, -score"	// ascending order of 'name', then descending 'score'

##limit
You can specify the maximum number of rows to return.

##skip
This allows you to skip a number of rows into the result set. If you are implementing paging functions, you would use this.

##count
If this is set to 1 then the query will return a number representing the total number of rows.

##Simple Example
This example shows a query that retrieves all customers from the specific country.

	function custSearch(country) {
		queryParms = {
			   "where":{
			      "country":country
			   }
			};
	    return parse.objects.query("Customers", queryParms);
	}  

##Multi Field Example with 'AND' logic
This example shows a query that retrieves all rows where the playerName is "Sean Plott" and the cheatMode is false.

	function custSearch() {
		queryParms = {
			   "where":{
			      "playerName": "Sean Plott",
			      "cheatMode": False
			   }
			}
	    return parse.objects.query("Customers", queryParms);
	}  

##Multi Field Example with 'OR' logic
This example shows a query that retrieves all rows where the country field is "US" or "UK".

	function custSearch() {
		queryParms = {
			   "where":{
			   		"$or": [
			   			{
			   				"country": "US"
		   				},
		   				{
		   					"country": "UK"
		   				}
			   		]
			   }
			}
	    return parse.objects.query("Customers", queryParms);
	}  

or a simpler way (regex explained in the last example in this section) ...

	function custSearch() {
		queryParms = {
			   "where":{
			      "country":{
			         "$regex": ("US"|"UK")
			      }
			   }
			}
	    return parse.objects.query("Customers", queryParms);
	}  

##Paging Example
This one does the same, but it also does some simple paging by getting 10 records at a time and implenting some simple paging.

	function custSearch(custName, pageNum) {
		queryParms = {
			   "where":{
			      "country":country
			   },
			   "limit":10,
			   "order":"name",
			   "skip":pageNum*10
			};
	    return parse.objects.query("Customers", queryParms);
	}  

##Inexact Matching
You will often want to do an inexact search where you can enter "ppli" in a search field and then get back all Customers containting "ppli". The 'i' option is a regex option that renders the search case insensitive.

	function custSearch(custName, pageNum) {
		queryParms = {
			   "where":{
			      "name":{
			         "$regex": custName,
			         "$options": "i"
			      }
			   }
			}
	    return parse.objects.query("Customers", queryParms);
	} 

If you wanted to locate only customer starting with "Appli", then you would use the line

	"$regex": "^" + custName,


Hopefully, the above examples will allow you to cater for the most common querying use cases. However, this introduces the concept of 'regular expressions', which is what $regex refers to. Many Javascript developers will be familiar with regex. If you are not, then please check out the following resources. Regular expressions are very powerful and have a lot of usage in Javascript applications in general, so you could do worse than to spend some time on it.

- [$regex in MongoDB documentation](http://docs.mongodb.org/manual/reference/operator/regex/)
- Hunt around for your own preferred introduction to regular expressions, but [here is a random one](http://www.aivosto.com/vbtips/regex.html)
- [The perlre regex manual](http://perldoc.perl.org/perlre.html)













