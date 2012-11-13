---
title: "Writing Secure Code"
active_menu_item: developers
class_name: developers
full_width: true
---


The whole point of using SSJ is to improve security by having important scripts execute on the server where they cannot be tampered with. Application Craft provides an excellent set of SSJ [database functions](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/) that support this and [server side database handling](/developers/documentation/product-guide/data-storage/server-side-data-storage/) is the most common situation for SSJ code and also where the need for security is greatest.

To ensure maximum security, you should ensure that you perform proper checks also in your server side code.

Let's say you have a server side function called deleteAll(). Having this function on the server means that it cannot be tampered with but in itself, it does not mean that it is secure. It can theoretically still be called by someone who knows how to hack into it.

The following things help you secure things further.

## Private vs. Public Functions

Application Craft has three types of SSJ functions. Below is a screenshot showing the code explorer in the IDE.

<table>
<tr>
<td width="265">
  !<a href="/img/docs/code-explorer.png">code-explorer</a>

</td>
<td width="511">

 - Scripts within App Scripts are client side scripts. They can only be called from an app running in a browser that is currently authenticated as a specific Application Craft App. The App must be loaded and connected to the server properly for the SSJ Private Script to execute. However, these should are not absolutely secure. More below on how to secure them.

 - Scripts within Server are private to the App and can only be edited from the IDE with the selected App loaded

 - Scripts within the Server Public are available to all Apps and are not tied to any App. They can be called from a browser or client whether an AC App or not.

</td>
</tr>
</table>

## Protecting your SSJ Functions with the '\_' prefix

When building SSJ functions, if there are functions that should not be callable from the client, then be sure to prefix the function name with '\_'. This protects them and makes them only callable from within SSJ code. Calls from a client will not be accepted.

## Why App Private functions are not secure

It is important to understand exactly what is going on with one of these functions.

The code cannot be tampered with and so from the code perspective it is fully secure. However, the function can effectively be accessed by a hacker. All they need to do is to open an AC App, which creates a validated session to the AC server, and from that point on, using their Firebug or Chrome Developer Tools, they can call the SSJ function as they wish.

On the positive side, this is completely normal and is the way things work on the web. What is important is that you make sure that you handle this situation properly in your exposed SSJ functions. Some ways to address this are discussed below.

## User Validation

The following notional function illustrates a common way of securing your SSJ Web Service. Note that we have protected \_getUserLevel() by virtue of the fact that the function name starts with '\_'.

    function mySSJService(action, parameter1, parameter2, parameterN) {
     
        if(_getUserLevel()=='deity') {
            launchArmageddon();
            return('Hide');
        }
        else {
            return('Sorry, but you are either a just a demi-god or a mere human');
        }
     
    }
     
    function _getUserLevel() {
     
    None
        // If you have your own user management then use whatever you have
     
        if( .......... ) {
            return('deity');
        }
        else {
            return('mortal');
        }
     
    }
   

## SSJ Session Variables

A very important set of SSJ functions that can help you with general security management is the [setSessionObject()](/developers/documentation/scripting-apis/server-side-api/ssj-object/security/setsessionobject) set of functions.

[setSessionObject()](/developers/documentation/scripting-apis/server-side-api/ssj-object/security/setsessionobject) allows you to store a value or object on the server in association with the current browser sessions. So, assuming that you have some sort of authentication procedure for the logged on user, you can store information about that user in a session variable. Other functions can then reference that variable using [getSessionObject()](/developers/documentation/scripting-apis/server-side-api/ssj-object/security/getsessionobject) in order to decide whether to accept or reject the request.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/LGzP1Uxk5c4?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview of Server Side Javascript [3:55]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/qY9M8bP9b70?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Coding up client/server side javascript calls [7:24]
