---
title: "Tag API"
active_menu_item: developers
class_name: developers
full_width: true
---

Another powerful feature of Xtify is the ability to send notifications to users who have certain 'tags'. 

As a simple way of explaining this, let's say that your App has a settings screen where you collect the Sex and Age Bracket of the user. You might then want to send tags "MALE" and "YOUNG" to the Xtify system. 

You can then send notifications on a manual or automated basis to users of a certain App with specific tags.

##xtify.tag api calls
If you have included the [suggested xtify drop-in code](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/), then you will be able to manage your tags very easily. 

Because the Xtify API is asynchronous, the AC Tag functions are as well. Here is some sample code that shows how you would typically handle the callbacks.

	function genericCallback(error, data) {
	    if(error)
	        app.alert("Error: " + JSON.stringify(data));
	    else 
	        app.alert("Success: ");
	}

	function handler_btnGetTags_onClick(mouseev){
	    xtify.tag.read(genericCallback);
	}


##Returned Data
The xtify.tag.xxx() functions will set the xtify.tag.data property once data has been returned and will remain as 'undefined' until the call succeeds. 

##Testing
Please refer to the [App Testing section](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/xtify-app-testing/) for information on adding necessary code to your app.

##The API Methods
Note that the function 'genericCallback' shown in each of the examples is a user defined function and can/should be replaced as you require. Please look above for the code to this function.

- **xtify.tag.read(callback)** - returns an array of tags for the current select app instance. If you are testing on a desktop, then the xtify.testXid property determines the device.

		function handler_btnGetTags_onClick(mouseev){
		    xtify.tag.read(genericCallback);
		}

- **xtify.tag.addNew(txtTag, genericCallback)** - adds a tag for the current app user to any exiting tags he may have.

		function handler_btnAddTag_onClick(mouseev){
		    xtify.tag.addNew("MALE", genericCallback);	   
		}

- **xtify.tag.set([txtTag], genericCallback)** - replaces any current tags for the current user/xid with a new set specified by the string array passed in. If you pass in an empty string "", all existing tags will be deleted.

		function handler_btnSetTags_onClick(mouseev){
			xtify.tag.set(["A", "B", "C"], genericCallback);   
		}

- **xtify.tag.remove([txtTags], genericCallback)** - removes any of the specified tags for the current user/xid.

		function handler_btnDeleteTag_onClick(mouseev){
			xtify.tag.remove(["A", "C"], genericCallback);   
		}

- **xtify.tag.count([txtWithTags], [txtWithoutTags], genericCallback)** - this returns the number of users that a) have the tags specified in the first parameter and b) do NOT have the tags specified in the second parameter. Either parameter can be passed a string or an array of strings. If you do not want to specify a parameter then pass in an empty string but do not leave the parameter undefined.

		function handler_btnCount_onClick(mouseev){
			xtify.tag.count(["A", "C"], "D", genericCallback); 
		}

- **xtify.tag.getActive(genericCallback)** - gets a list of all tags that are currently in use for the current Application for all users who have installed the App.

		function handler_btnTagList_onClick(mouseev){
		    xtify.tag.getActive(genericCallback);   
		}	

##Sending the notifications from Xtify
The Xtify Console allows you to send notifications to users with certain tags. Please refer to the previous [location targeting section](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/xtify-geo-notifications/) to see how to define a target.

##Sending the notifications from an App
We have also prepared an API that lets you push notifications from an App. Click here for details.


##Advanced
For those who are interested, you can also look inside and see how the actual Xtify API calls are handled.

You can find documentation about the [Xtify Tag API here](http://developer.xtify.com/display/APIs/Tag+API+2.0+%28Latest%29).






