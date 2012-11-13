---
title: "showWebPage()"
active_menu_item: developers
class_name: developers
full_width: true
---


**showWebPage** (url, [options])

## Parameters

<table>
<tr>
<td width="172">
url

</td>
<td width="29">

</td>
<td width="679">
the URL to show

</td>
</tr>
<tr>
<td width="172">
options:

</td>
<td width="29">

</td>
<td width="679">

</td>
</tr>
<tr>
<td width="172">
showLocationBar

</td>
<td width="29">

</td>
<td width="679">
show/hide a location bar in the generated browser

</td>
</tr>
<tr>
<td width="172">
showAddress

</td>
<td width="29">

</td>
<td width="679">
show/hide the address bar in the generated browser

</td>
</tr>
<tr>
<td width="172">
showNavigationBar

</td>
<td width="29">

</td>
<td width="679">
  show/hide the entire navigation bar. Important: since there is no "Done"-Button anymore, the ChildBrowser can only be closed with the api call <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/child-browser/methods/close3">close()</a>

</td>
</tr>
</table>
## Description

Displays a new ChildBrowser with the specified URL. Defaults to true.

## Example

    window.plugins.childBrowser.showWebPage('http://www.google.com',
                                            { showLocationBar: true });
   

