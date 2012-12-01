---
title: "Skeleton Code Sample"
active_menu_item: developers
class_name: developers
full_width: true
---

This is a rather ugly, bare-bones code sample and we will refer to this in the following sections in this chapter.

![oauth Demo App](/img/docs/oauth-demo-ui.png)

This tiny App does the following simple things

- Manually starts the authentication process by pressing a button `btnAuth' (you would often do this in the On App Started event instread)
- The user should enter some text to Tweet in the text widget `txtWTeet`
- Send the Tweet by pressing the 'Tweet' button widget `btnTweet`.

##Client Code
Below is the complete set of code that runs on the client (in the browser). These functions get explained in detail later.


    // 1. This is going to contain our Access Token
    var _accessToken = "";

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

    // Check how many characters can still be entered
    // We are too lazy to do anything if there are more characters
    // You will get an error though, which you can handle
    function handler_txtTweet_onKeyUp(keyev, value){
        var len = value.length;
        app.setValue("lblRemaining", 140 - len);    
    }    

##Server Side Code
There's very little here. That's because Application Craft is doing all the heavy lifting.

    // SSJ 1. Send a Tweet from the AC Server
    function sendTweet(accessToken, txtTweet) {
         return ssj.oAuthRequest(accessToken, 
            'https://api.twitter.com/1.1/statuses/update.json',    
            'POST',{status:txtTweet});
    }



