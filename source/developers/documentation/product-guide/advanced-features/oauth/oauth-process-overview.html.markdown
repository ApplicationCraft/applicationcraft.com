---
title: "Process Overview"
active_menu_item: developers
class_name: developers
full_width: true
---

It helps to understand a bit about the general OAuth process. For those who really want the full picture (and it is absolutely not necessary to read this) you can read the full [OAuth spec](http://tools.ietf.org/html/rfc5849).

##1. Currently supported OAuth services
You will be working with an OAuth service either for Authentication or to access its API. The predfined ones we currently support are 

- Twitter
- Facebook 
- Dropbox

##2. Register your App with the service
Whichever service you want to use, you first need to register an App with that service. This process is [described here](/developers/documentation/product-guide/advanced-features/oauth/app-key-and-app-secret/). As a result of this registration, you get two important keys.

 - **App ID** or **Consumer Key** : this is an ID that identifies the App to the Service.
 - **Secret** : this is a key that is never revealed to anyone. You store this as an App property but it is stored on the AC server and is never visible to the browser.

Both of these bits of data are entered in the OAuth Providers property ([also shown here](/developers/documentation/product-guide/advanced-features/oauth/app-key-and-app-secret/)).

##3. Authentication
There are a couple of bits to authentication to make your App behave comfortably for the end user.


 - **[app.oAuthSignIn()](/developers/documentation/scripting-apis/client-api/oauth/oauthsignin/)** - within your App, you will need to authenticate with the service (Twitter, Facebook etc). When this happens, a browser window will appear that is managed by the service provider. You will be asked to login to the service.
 - **Access Token** - Once you are logged in successfully, you will get an access token. This is a string that you need to keep for at least that current session, but also can be stored for longer. Any API calls beyond this point will require this access token to be provided.
 - **Logging in later** - once you are authenticated, you can store the access token (as a cookie, in a database, using localstorage etc.) and then re-use this token in a brand new session later. It is up to the service provider to accept this or not. At some point, it will expire and you will get an error when calling an API function. That is the time to call the app.oAuthSignin() again and get a new access token.
 - If you want to **force an authentication** each time someone accesses your App, then simply call the app.oAuthSignIn() each time the App starts up. You will be asked to explicitly login in again. If the service provider provides a function that lets you check the access token, then you don't have to force the end user to actually login again. Otherwise, an actual login is unavoidable.
  
 
##4. Your Client code initiates an API call
If you are only using OAuth for authentication then you don't need to read any further. However, if you want to call your OAuth supported service's API then your client code will kick things off. What it will typically do is ...

 - **[app.callSSJ()](/developers/documentation/scripting-apis/client-api/app-functions/callservice/)** - this calls a server side function where the actual API call will be made.
 - **callback handling** - one of the parameters is a callback function that is called when the server side returns, usually with data returned from the API call.
 - **error handling** - here you will check for any error encountered by the server side function. An important thing to check is that the access token has not expired, in which case you will want to reauthenticate before trying again.

##Example code
Now you should take a look at the next section, where you can see everything described above in action.












