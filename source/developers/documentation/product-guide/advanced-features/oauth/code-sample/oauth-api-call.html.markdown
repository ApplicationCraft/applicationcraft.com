---
title: "Making an API call"
active_menu_item: developers
class_name: developers
full_width: true
---

Now we're ready to make an API call. In this case, we'll send a Tweet that the user entered into the text widget `txtTweet`.

##Client Javascript code calls server Javascript code

    // 5. Client side action to send a Tweet
    function handler_btnTweet_onClick(mouseev){
      app.callSSJ('sendTweet', function(error,data){
	        if(error) {
	            // Maybe the Access Token has expired, so check
	            if(checkTwitterAuthError(data)) {
	                // The Access Token has expired or is invalid.
	                // You could call app.oAuthSignin() here or (as here) ...
	                // .. you can simply show a message.
	                app.showMessage("oAuth Demo", "Key has expired");                
	            } else {
	                // Another error, so display the raw error
	                app.showMessage("oAuth Demo", "Error:" + data.jsMessage);
	            }
	        }
	        else {
	            app.showMessage("oAuth Demo", "Success");  
	        }
        }, [_accessToken, app.getValue("txtTweet")]);
    }

The main thing to note is that the actual Tweet is not done by the client code. What we do is to call a Server Side function (`sendTweet' in this case) using [app.callSSJ()](/developers/documentation/scripting-apis/client-api/app-functions/callservice/) and from there the actual API call is made. The reason for this is security. In order for oAuth to be secure, which is the point after all, all calls are done from the server where keys and secrets are protected from prying eyes.

If you look to the end of this function, you can see that there are two parameters passed across

 - `_accessToken`, which is our oAuth access token and must always be passed across to any server side call that ends up making an oAuth based API call
 - and Tweet text that we get from our widget using `app.getValue("txtTweet")`

Note that all parameters passed to a server side function must be contained in an array, even if there is only one parameter.


##The Server Side function takes the call
This is really short and sweet. This is the bit where we have removed almost all of the complexity.

    // SSJ 1. Send a Tweet from the AC Server
    function sendTweet(accessToken, txtTweet) {
        return ssj.oAuthRequest(accessToken, 
            'https://api.twitter.com/1.1/statuses/update.json',    
            'POST',{status:txtTweet});
    }

The access token and the Tweet text are received from app.callSSJ() and we then immediately call ssj.oAuthRequest with the following parameters

 - `accessToken` was passed from the client
 - the url of the API endpoint
 - the 'verb' (in this case a 'POST')
 - any parameters expected by the API end point; this is always an object, even if there is only one parameter; in our example, `/statuses/update.json` expects a parameter called `status` which contains the Tweet text


[ssj.oAuthRequest()](/developers/documentation/scripting-apis/server-side-api/ssj-object/oauth/oauthrequest/) is called synchronously and so it waits until it gets data back from the API call. Whatever comes back from the API call now gets returned to the client via a callback function

##The callback function
Looking back to the first code snippet, we can look at what goes om when the callback is called.

The callback does some important error checking that is worth discussing. We have created our own function `checkTwitterAuthError()` as shown below. This is only called if there is an error returned. 

What we are looking for here is the specific situation where the access token has expired so we know to reauthenticate.

     // 3. A function to see whether the access token has expired
    function checkTwitterAuthError(data) {
        try {
            var obj = jQuery.parseJSON(data.message);
            if(obj.errors[0].code==89) {
                _accessToken = "";
                app.setCookie("myTwitterSession", "");
                return true;
            } else {
                return false;
            }
        }
        catch(err) {
            return false;
        }
    }

 - `data` was returned to the callback function and is passed into our function
 - data.message needs to be converted from a string into a Javascript object (although we could search the string instead)
 - it is possible that there is a different error, so we use try/catch. If we catch the error, then an expired access token was not the problem and so we return false, indicating that although there was an error, it was not this error.

This way of dealing with the errors is just one strategy and you will probably work out a better one that fits your use case better.

