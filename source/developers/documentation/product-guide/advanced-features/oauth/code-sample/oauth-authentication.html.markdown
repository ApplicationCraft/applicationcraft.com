---
title: "Authentication"
active_menu_item: developers
class_name: developers
full_width: true
---


Once the app is registered with a provider, you are ready to start coding. From your client code you will need to call

    app.oAuthSignIn(providerName, authCallback);

... where providerName can be 'twitter', 'facebook' or 'dropbox'.   

If you are interested in more services then please contact support@applicationcraft.com
    
This calls the AC server and gets everything started. Once the AC server has initiated proceedings with the server, your callback function will be called.
   
    // 4. oAuth authentication function
    // In this case, this is a Button Press event
    function handler_btnAuth_onClick(mouseev){
        // See if we already have an old Access Token
        _accessToken = app.getCookie("myTwitterSession");
        if(_accessToken===null || _accessToken==="") {
            // No, we don't have one so get a new one
            app.oAuthSignIn('twitter', authCallback);                
        }
    }

This function is called when a user presses the 'Authenticate' button in our App. It does the following

 - gets the previously saved access token from a cookie
 - if the cookie was not there then it calls app.oAuthSignIn() to authenticate with Twitter
 - Note the authCallback parameter; this gets called once the authentication process is complete. 

The Server Side function is really easy.

    // SSJ 1. Send a Tweet from the AC Server
    function sendTweet(accessToken, txtTweet) {
        return ssj.oAuthRequest(accessToken, 
            'https://api.twitter.com/1.1/statuses/update.json',    
            'POST',{status:txtTweet});
    }

 - The access token and the Tweet text are passed in from the client [app.callSSJ()](/developers/documentation/scripting-apis/client-api/app-functions/callservice/) call
 - [ssj.oAuthRequest()](/developers/documentation/scripting-apis/server-side-api/ssj-object/oauth/oauthrequest/) is the main item; it calls the specified end point with the 'verb' ('POST' in this case) expected by the API method along with any expected parameters (the Tweet text in this case).


Once the server function is complete, it returns whatever it got back to the client callback function, so let's take a look at that.

    // 2. Callback function from oAuthSignIn()
    function authCallback(result, accessToken) {
        if (result) {
            // Successfully authenticated   
            // Let's store the Access Token in a global
            _accessToken = accessToken;
        }
        else {
            // There was an error, so handle it 
            _accessToken = "";
        }
         // And let's also store the Access Token in a Cookie
        app.setCookie("myTwitterSession", _accessToken);    
    }

 - the `result` parameter is inspected to see if there is an error
 - if there was no error, then we are storing the returned `accessToken` to the global variable `_accessToken`.
 - we store `_accessToken` to a cookie so it can be reused the next time the App starts up.

##Variations
Note that the ways things are done here are not the only way you can handle authentication. If you understand the princples here, you can manage access token storage in any way you like. In fact, if you want your App to forcibly authenticate each time it is run, then you would not store the access token at all.


