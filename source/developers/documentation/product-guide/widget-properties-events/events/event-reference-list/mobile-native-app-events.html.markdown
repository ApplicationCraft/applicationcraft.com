---
title: "Mobile Native App Events"
active_menu_item: developers
class_name: developers
full_width: true
---


These events are only available for Apps running in Native mode. If you are running an App in a regular browser on your mobile device then these events will not be available.

For more information on building Native Apps, see the [PhoneGap & Native Apps](/developers/documentation/ac-mobile-build-phonegap/) chapter.

<table>
<tr>
<td width="199">
  <strong>Mobile Native App Events</strong>

</td>
<td width="8">
</td>
<td width="735">
</td>
</tr>
<tr>
<td width="199">
On Online

</td>
<td width="8">
</td>
<td width="735">
  When the network connection goes online, having previously been offline. See also <a href="/developers/documentation/scripting-apis/client-scripting-overview/network-availability-handling">Network Availability Handling</a> chapter.

</td>
</tr>
<tr>
<td width="199">
On Offline

</td>
<td width="8">
</td>
<td width="735">
  When the network connection goes offline, having previously been online. See also <a href="/developers/documentation/scripting-apis/client-scripting-overview/network-availability-handling">Network Availability Handling</a> chapter.

</td>
</tr>
<tr>
<td width="199">
On Pause

</td>
<td width="8">
</td>
<td width="735">
When the App is paused/suspended because the user has switched to another device application.

</td>
</tr>
<tr>
<td width="199">
On Resume

</td>
<td width="8">
</td>
<td width="735">
When the App is resumed because the user has switched back to it from another device application.

</td>
</tr>
<tr>
<td width="199">
On Menu Button Press

</td>
<td width="8">
</td>
<td width="735">
When the 'Menu' button is pressed

</td>
</tr>
<tr>
<td width="199">
On Search Button Press

</td>
<td width="8">
</td>
<td width="735">
When the 'Search' button is pressed

</td>
</tr>
<tr>
<td width="199">
On Back Button Press

</td>
<td width="8">
</td>
<td width="735">
  When the 'Back' button is pressed. You should note that if this event returns false, then Application Craft will not handle the back action, otherwise it will automatically jump to the previous page as with <a href="/developers/documentation/scripting-apis/client-api/page-functions/pageback">app.pageBack()</a> .

</td>
</tr>
</table>

