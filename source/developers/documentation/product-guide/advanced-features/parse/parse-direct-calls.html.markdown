---
title: "Calling Parse.com Directly"
active_menu_item: developers
class_name: developers
full_width: true
---

All Parse.com functions can be accessed without using any of the Application Craft helper functions. Currently, only Parse.com Objects have helper functions. [Click here](/developers/documentation/product-guide/advanced-features/parse/objects/) to see the Object helper functions.

Let's take a look at a Parse.com function as shown [within their documentation here](https://parse.com/docs/rest#objects-creating).

    curl -X POST \
      -H "X-Parse-Application-Id: LQ3FvxGt2UqUbXaO9KayhclPTJyBA4ltz5dSj4r8" \
      -H "X-Parse-REST-API-Key: raJdQc7BVP4TbXrMIS2C7QKZSahZZG6vUmgPdQyk" \
      -H "Content-Type: application/json" \
      -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
      https://api.parse.com/1/classes/GameScore


You can call this function from both your client code as well as your server code. However, you should be aware that client calls are inherently unsecure, as you will need to include your keys in this code. So, it is recommended to make your calls using either Application Craft's [Server Side Javascript](/developers/documentation/scripting-apis/server-side-scripting-overview/) functions or using Parse.com's Cloud Code.

##Calling Parse.com from Client code
A call from your client code would look something like this, where [app.httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest/) is the key method.

    __headers = {
        'X-Parse-Application-Id' : 'LQ3FvxGt2UqUbXaO9KayhclPTJyBA4ltz5dSj4r8',
        'X-Parse-REST-API-Key' : 'raJdQc7BVP4TbXrMIS2C7QKZSahZZG6vUmgPdQyk',
        'Content-Type' : 'application/json'
    }; 
    app.httpRequest("https://api.parse.com/1/classes/myAppName", "POST", 
        function(data, error, httpResponse){
            // Callback handled here
        }, jsonData, "JSON", __headers, {});


##Calling Parse.com from Server Side Javascript (SSJ) code
A server side call is almost the same, except that the call is synchronous and so no callback is used. [ssj.httpRequest()](/developers/documentation/scripting-apis/server-side-api/ssj-object/web-service-calls/httprequest2/) is the key method. 

    __headers = {
        'X-Parse-Application-Id' : 'LQ3FvxGt2UqUbXaO9KayhclPTJyBA4ltz5dSj4r8',
        'X-Parse-REST-API-Key' : 'raJdQc7BVP4TbXrMIS2C7QKZSahZZG6vUmgPdQyk',
        'Content-Type' : 'application/json'
    }; 
    return ssj.httpRequest("https://api.parse.com/1/classes/myAppName", "POST", 
         jsonData, "JSON", __headers, {});



