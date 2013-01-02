---
title: "CRUD Functions"
active_menu_item: developers
class_name: developers
full_width: true
---

As with most databases, Parse.com offers CRUD support (Create, Read, Update, Delete).

These functions (as with most SSJ functions) are synchronous, so they do not use callbacks. 

##Creating new rows
To create a new row in a class, you simply pass in the Class name and some JSON data. Below is a typical SSJ function. Note that Parse.com does not currently support an in-built concept of uniqueness, so you will need to implement your own if this is important.

	function custSave(data) {
	    if(isUniqueCustomer(data.name)) {
	        if(parse.objects.create("Customers", data)) {
	            return true;
	        }
	        else {
	            return ssj.getLatestError();
	        }
	    }
	    else {
	        throw {"message":"Customer already exists"};
	    }
	}

##Reading a row
This retrieves a single row of data. You will need to pass in the objectId, which is Parse.com's way of uniquely identifying a row. Note that you can also query() data if you want to return multiple rows.

    return parse.objects.read("Customers", custId);


##Updating a row
This is similar to adding a new row, except you supply the objectId as a parameter so Parse.com knows which row to update

	function custSave(data, selCustId) {
	    if(parse.objects.update("Customers", selCustId, data)) {
	        return true;
	    }
	    else {
	        return ssj.getLatestError();
	    }        
	}

##Deleting a row
This is a simple operation. All you need to know is the objectId of the object to be deleted

    return parse.objects.delete("Customers", custId);

## See Also

- [parse.objects](developers/documentation/scripting-apis/server-side-api/parse-object)

