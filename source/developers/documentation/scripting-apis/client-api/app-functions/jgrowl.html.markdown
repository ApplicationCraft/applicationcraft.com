---
title: "jGrowl()"
active_menu_item: developers
class_name: developers
full_width: true
---


**jGrowl** (message, options)

## Parameters

<table>
<tr>
<td width="193">
{string} message

</td>
<td width="17">
</td>
<td width="670">
The message to show.

</td>
</tr>
<tr>
<td width="193">
{object} options

</td>
<td width="17">
</td>
<td width="670">
jGrowl options available to customise the notifications. See <a href="http://stanlemon.net/pages/jgrowl" target="_blank">http://stanlemon.net/pages/jgrowl</a> for more information.

</td>
</tr>

</table>


##Description
jGrowl is a jQuery plugin for unobtrusive notification system. The idea is simple, deliver notifications to the end user in a noticeable way that doesn't obstruct the work flow and yet keeps the user informed.

Thanks to <a href="http://stanlemon.net/pages/jgrowl" target="_blank">http://stanlemon.net/pages/jgrowl</a>.

##Examples
	// Sample 1
	function handler_actionBtn1_onClick(mouseev){
		app.jGrowl("Hello world!")
	}
	
	// Sample 2
	function handler_actionBtn_onClick(mouseev){
		app.jGrowl("Stick this!", { sticky: true }); // make the message sticky
	}
	
	// Sample 3
	function handler_actionBtn2_onClick(mouseev){
		app.jGrowl("A message with a header", { header: 'Important' }); // include a header to the message
	}
	
	// Sample 4
	function handler_actionBtn3_onClick(mouseev){
		app.jGrowl("A message that will live a little longer.", { life: 10000 }); // make the message show for 10000ms
	}
	
	// Sample 5
	function handler_actionBtn4_onClick(mouseev){
		app.jGrowl("A message with a beforeOpen callback and a different opening animation.", {
	    beforeClose: function(e,m) {
	        alert('About to close this notification!');
	    },
	    animateOpen: {
	        height: 'show'
	    }
	});
	}
	

## See Also

 - [showMessage()](/developers/documentation/scripting-apis/client-api/app-functions/showmessage)
 - [showConfirm()](/developers/documentation/scripting-apis/client-api/app-functions/showconfirm)
 - [showPrompt()](/developers/documentation/scripting-apis/client-api/app-functions/showprompt)
 - [showPagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/showpagepopup)
 - [closePagePopup()](/developers/documentation/scripting-apis/client-api/page-functions/closepagepopup)
