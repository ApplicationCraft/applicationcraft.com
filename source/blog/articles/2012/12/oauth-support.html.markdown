---
title: oAuth Support Added
author: Freddy May
tags: oauth, authentication, twitter, facebook, dropbox
date: 2012-12-04
class_name: blog
full_width: true
published: false
---

We recently added oAuth support to Application Craft and you will be ecstatic at how easy we have made it, in the normal Application Craft way.

We currently provide explicit support for Twitter, Facebook and Dropbox. We will soon be adding support for more explicit services as well as allowing you to make your own oAuth definitions so any service that supports oAuth can be defined in the AC Console.

##Authentication for your Apps
One of the simpler uses for oAuth is to provide access to your App. You let a 3rd party service like Twitter or Facebook handle the login process.

Authentication is as easy as shown below. You call `oAuthSignIn()` and that's it. The service pops up in a browser window and handles the login and returns an access token. You can store that in a cookie so your users don't have to login in future sessions until the service decides to expire it.

	function handler_btnAuth_onClick(mouseev){
	    // See if we already have an old Access Token
	    _accessToken = app.getCookie("myTwitterSession");
	    if(_accessToken===null || _accessToken==="") {
	        // No, we don't have one so get a new one
	        app.oAuthSignIn('twitter', authCallback);                
	    }
	}


##Calling oAuth secured APIs
Things get much more interesting when you want to access APIs from services such as Twitter, Facebook and Dropbox. Using our oAuth support, you can access the full functionality of those services in a way that is remarkably easy.

This bit is simplified code shows the code for sending a Tweet via Twitter. It is actually made up of two parts - the code running on the client ...

	function handler_btnTweet_onClick(mouseev){
		app.callSSJ('sendTweet', function(error,data){
	        if(error) {
	        	// Some error occurred (maybe the 
	        	// Access Token has expired)
	        }
	        else {
	            app.showMessage("oAuth Demo", "Message successfully tweeted!");  
	        }
	    }, [_accessToken, txtTweetMessage]);
	}

... and some server side code so things are nice'n'secure

	function sendTweet(accessToken, txtTweet) {
	    ssj.oAuthRequest(accessToken, 
	        'https://api.twitter.com/1.1/statuses/update.json',    
	        'POST',{status:txtTweet});
	}

Have you ever seen oAuth handling that straightforward? Application Craft does all the dirty work.

##Read the Application Craft Documentation
[Click here](/developers/documentation/product-guide/advanced-features/oauth/) to read the oAuth documentation in the Product Guide.



