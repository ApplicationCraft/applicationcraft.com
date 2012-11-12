---
title: "Calling SSJ Methods"
active_menu_item: developers
class_name: developers
full_width: true
---


To call an SSJ method from client code, you need to use the [callSSJ()](/developers/user-guide/scripting-apis/client-api/app-functions/callservice) client API method. You pass in an optional callback function name as well an optional array of arguments that your SSJ function requires.

        app.callSSJ(“SSJfunctionName”, callback, [arg1,arg2, ..., argN]);
        callback(error, res) {
            ....
        }
     
    error
    res
    function handler_btnSnap_onClick(mouseev){
        app.callSSJ("mySSJFunction", function(error, res) {
            if(error===false) {
                // Callback called, so do something
            }}, ['Hello', 'World']);
    }
    function mySSJFunction(str1, str2) {
        if(str1=='') {
            throw('My Error'); // or you can return a value in which case error will be false and you check 'res'
        } else {
            return str1 + ' ' + str2;
        }
    }
     
   

When the SSJ function has completed, it triggers the callback function on the client, which has the format

And where is true or false and is an object returned by the server side function

## Example

The following script will call the Server Side function below it.

and here is the server side function that gets called

The value that you return is passed to the client side callback function and appears as the res parameter. If any error is thrown, whether by your code or by the system, then the client side error parameter in the callback will be set to true.

## **See Also**

 - [callSSJ()](/developers/user-guide/scripting-apis/client-api/app-functions/callservice)

