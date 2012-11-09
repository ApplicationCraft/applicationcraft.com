---
title: "Calling API functions"
active_menu_item: developers
class_name: developers
full_width: true
---


Once your user is authenticated, you can start making calls to 3rd party APIs that require oAuth authentication. This process is also very easy.

Client Side

From your App, you will call a Server Side Javascript function (mySSJFunction in the below example). The server code then makes  the real call to the API is made. The reason for this is security. The whole point of oAuth is security and by making API calls from the server, you are in ensuring that the secret keys stay secret.

    app.callSSJ('mySSJFunction', function(error,data){
    console.log('error : ' + error);
    console.dir({info : info});
    }, [userAuthKey, myTwitterId]);
   

Note that the userAuthKey is passed in to the SSJ function as the only parameter..

Server Side

In your Server Side code, you create a function to receive the client side call

    function mySSJFunction(userAuthKey, myTwitterId) {
    return ssj.oAuthRequest(userAuthKey,
    'GET',{user_id: myTwitterId, count: 1});
    }
   

Here you can see how the first parameter is the userAuthKey, followed by the API endpoint, the verb, and finally any parameters to be passed to the API.

Other than the first userAuthKey parameter, the remaining parameters are the same as [ssj.httpRequest()](../../../scripting-apis/server-side-api/ssj-object/web-service-calls/httprequest2) , so please refer to that for full details.

Callback

Once the Server Side ssj.oAuthRequest call has been successfully completed, your client side callback will be called and the process is complete.

