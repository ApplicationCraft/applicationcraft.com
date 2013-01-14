---
title: "The AC-Intercom.io API"
active_menu_item: developers
class_name: developers
full_width: true
---

Application Craft developers have a choice how they integrate Intercom.

- You can use [Intercom.io's own API](http://docs.intercom.io/api). The drawback with this approach with Application Craft is that you would need to do everything on the client, which exposes your API Key. It is up to you to decide whether this matters or not.
- You can use the special API that we have created. This consists of a Client Side API, that you simply add as a file to your App, and a Server Side file, where the actual Intercom.io calls are made, keeping your API Key safe from prying eyes.

If you want to access the API directly, then you should refer exclusively to the [Intercom.io API documentation](http://docs.intercom.io/api).

Below are instructions for both 

- Client Side Code
- Server Side Code

##The Client Side API
The first thing to do is to create a new file in your Code explorer (right click in the Code Explorer on the left and select Add File).

Next, copy and paste all of the following code into this new file. This code can be forgotten about in most cases. However, if you want to see what is going on, you can examine it and see how we have abstracted the Intercom.io API.

	//
	// Client Side Library for Intercom.io
	//

	var iIo = {
	    users: {}, 
	    threads: {}
	};

	// For details, see http://docs.intercom.io/api

	// Get all users with paging
	iIo.users.getAll = function(callback, page, per_page) {
	    if(page===undefined)
	        page = 1;
	    if(per_page===undefined)
	        per_page = 500;
	    app.callSSJ("usersGetAll", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [page, per_page]);
	};

	// Get a user by ID
	iIo.users.getId = function(callback, id) {
	    if(id===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing ID");        
	    }
	    app.callSSJ("userGetId", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};

	// Get a user by Email address
	iIo.users.getEmail = function(callback, id) {
	    if(email===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing Email");        
	    }
	    app.callSSJ("userGetEmail", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};

	// Create a new user
	iIo.users.create = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("userCreate", function(error, data) {
	        debugger;
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [data]);
	};

	// Update an existing user
	iIo.users.update = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("userUpdate", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};

	// Delete an existing user
	iIo.users.delete = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("userDelete", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};


	// Send a user impression to Intercom.io/
	iIo.users.impression = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("userImpression", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};


	// Get message thread(s)
	iIo.threads.get = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("threadsGet", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};


	// Create a new message thread
	iIo.threads.create = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("threadCreate", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};


	// Reply to a message thread
	iIo.threads.reply = function(callback, data) {
	    if(data===undefined) {
	        if(callback!==undefined) 
	            callback(true, "Missing data object");        
	    }
	    app.callSSJ("threadReply", function(error, data) {
	        retObj = jQuery.parseJSON(data);
	        if(callback!==undefined) 
	            callback(error, retObj);
	    }, [id]);
	};


##Server Side Code
Next, copy and paste the following code into your Server Side code. Locate the 'Server' folder in the Code Explorer and you can either add it to the main file or create a new one if you want to keep it separate.

You should insert the correct App ID and API Key as you can find in your Intercom Dashboard. To find these, locate the Gear/Cog icon in the blue bar at the top of the Intercom Dashboard. A drop-down menu will have an 'API Keys' option. You will need to click the 'New API Key' button to generate a key.

Look for the following lines and replace the ID and Key.

	var _apiKey = "99a616eeb9ff826a671ecd3fe3515b17ea14067c";
	var _appId = hkj4nchnc";

This is the main code body to copy and paste.

	////////////////
	//////////////// Intercom.io server side code for Application Craft
	////////////////

	// For details, see http://docs.intercom.io/api

	// public method for encoding
	var base64 = {
	    // private property
	    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	    
	    encode : function (input) {
	        var output = "";
	        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	        var i = 0;
	        input = base64._utf8_encode(input);
	        while (i < input.length) {
	            chr1 = input.charCodeAt(i++);
	            chr2 = input.charCodeAt(i++);
	            chr3 = input.charCodeAt(i++);
	            enc1 = chr1 >> 2;
	            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	            enc4 = chr3 & 63;
	            if (isNaN(chr2)) {
	                enc3 = enc4 = 64;
	            } else if (isNaN(chr3)) {
	                enc4 = 64;
	            }
	            output = output +
	            base64._keyStr.charAt(enc1) + base64._keyStr.charAt(enc2) +
	            base64._keyStr.charAt(enc3) + base64._keyStr.charAt(enc4);
	        }
	        return output;
	    },
	    
	    // private method for UTF-8 encoding
	    _utf8_encode : function (string) {
	        string = string.replace(/\r\n/g,"\n");
	        var utftext = "";
	    
	        for (var n = 0; n < string.length; n++) {
	            var c = string.charCodeAt(n);
	            if (c < 128) {
	                utftext += String.fromCharCode(c);
	            }
	            else if((c > 127) && (c < 2048)) {
	                utftext += String.fromCharCode((c >> 6) | 192);
	                utftext += String.fromCharCode((c & 63) | 128);
	            }
	            else {
	                utftext += String.fromCharCode((c >> 12) | 224);
	                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	                utftext += String.fromCharCode((c & 63) | 128);
	            }
	        }
	        return utftext;
	    }    
	};

	// Intercom.io Handling Code
	// We have this on the Server Side to prevent anyone being able to see the keys
	var _apiKey = "99a616eeb9ff826a671ecd3fe3515b17ea14067c";
	var _appId = hkj4nchnc";
	var _auth = "Basic " + base64.encode(_appId + ":" + _apiKey);

	//////// Users

	function usersGetAll(page, per_page) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/", "GET", 
	    {page:page, per_page:per_page}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function userGetId(id) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/", "GET", 
	    {user_id:id}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function userGetEmail(email) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/", "GET", 
	    {email: email}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function userCreate(data) {
	    x =  ssj.httpRequestAdv("https://api.intercom.io/v1/users/", "POST", 
	    JSON.stringify(data), "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	    debugger;
	    return x;
	}

	function userUpdate(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/", "PUT", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function userDelete(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/", "DELETE", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function userImpression(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/impressions", "POST", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function threadsGet(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/message_threads", "GET", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function threadCreate(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/message_threads", "POST", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}

	function threadReply(data) {
	    return ssj.httpRequest("https://api.intercom.io/v1/users/message_threads", "POST", 
	    {data: data}, "JSON", {"Content-Type":"application/json", "Authorization":_auth}); 
	}



