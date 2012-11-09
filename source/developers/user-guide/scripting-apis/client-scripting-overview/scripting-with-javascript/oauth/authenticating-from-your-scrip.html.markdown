---
title: "Authenticating from your Script"
active_menu_item: developers
class_name: developers
full_width: true
---


[Coming Soon]

To authenticate, you need to call the [oAuth()](oauth.htm) function with the oAuth Application name of the service specified. AC then handles the entire process and returns, via a callback, with an Access Token. Whether this token is re-usable is up to the 3rd party service provider. If does not expire, then it is up to you whether to store the token in a cookie, a User Parameter or some other way.

Please see the [oAuth()](oauth.htm) documentation for more information.

