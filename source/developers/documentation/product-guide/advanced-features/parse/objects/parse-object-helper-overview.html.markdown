---
title: "Helper Functions"
active_menu_item: developers
class_name: developers
full_width: true
---

The helper functions are designed to make coding easier and more readable. We have implemented these functions as [Server Side Javascript](/developers/documentation/scripting-apis/server-side-scripting-overview/) functions and they can be accessed using `parse.objects.functionName`.

Take this example, which creates a new row with data contained in jsonData in a Parse.com class

    __headers = {
        'X-Parse-Application-Id' : 'LQ3FvxGt2UqUbXaO9KayhclPTJyBA4ltz5dSj4r8',
        'X-Parse-REST-API-Key' : 'raJdQc7BVP4TbXrMIS2C7QKZSahZZG6vUmgPdQyk',
        'Content-Type' : 'application/json'
    }; 
    return ssj.httpRequest("https://api.parse.com/1/classes/Customers", "POST", 
         jsonData, "JSON", __headers, {});


With the equivalent AC helper function, the following code does the same thing

	return parse.objects.create("Customers", jsonData)
    
## See Also
 - [parse.objects](/developers/documentation/scripting-apis/server-side-api/parse-object)



