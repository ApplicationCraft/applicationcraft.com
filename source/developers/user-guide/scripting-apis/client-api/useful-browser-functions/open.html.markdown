---
title: "open()"
active_menu_item: developers
class_name: developers
full_width: true
---


This is very useful if you want to open a new browser window or redirect from where you are.

<table>
<tr>
<td width="142">
open()

</td>
<td width="15">
</td>
<td width="723">
Opens a new browser window.

       window.open(URL,name,specs,replace)
      

</td>
</tr>
</table>
Note: If you are running as native app be aware that older version of Android will not open the link in the devices browser. It can open within the native app. To open links within the devices browser use

    navigator.app.loadUrl('http://www.examplewebsite.com');
   

<table>
<tr>
<td width="142">
**Parameter**

</td>
<td width="15">
</td>
<td width="723">
**Description**

</td>
</tr>
<tr>
<td width="142">
URL

</td>
<td width="15">
</td>
<td width="723">
Optional. Specifies the URL of the page to open. If no URL is specified, a new window with about:blank is opened

</td>
</tr>
<tr>
<td width="142">
name

</td>
<td width="15">
</td>
<td width="723">
Optional. Specifies the target attribute or the name of the window. The following values are supported

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
\_blank - URL is loaded into a new window. This is default

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
\_parent - URL is loaded into the parent frame

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
\_self - URL replaces the current page

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
\_top - URL replaces any framesets that may be loaded

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
name - The name of the window

</td>
</tr>
<tr>
<td width="142">
specs

</td>
<td width="15">
</td>
<td width="723">
Optional. A comma-separated list of items. The following values are supported:

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
channelmode=yes|no|1|0        Whether or not to display the window in theater mode. Default is no. IE only

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
directories=yes|no|1|0        Whether or not to add directory buttons. Default is yes. IE only

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
fullscreen=yes|no|1|0        Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
height=pixels        The height of the window. Min. value is 100

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
left=pixels        The left position of the window

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
location=yes|no|1|0        Whether or not to display the address field. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
menubar=yes|no|1|0        Whether or not to display the menu bar. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
resizable=yes|no|1|0        Whether or not the window is resizable. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
scrollbars=yes|no|1|0        Whether or not to display scroll bars. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
status=yes|no|1|0        Whether or not to add a status bar. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
titlebar=yes|no|1|0        Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
toolbar=yes|no|1|0        Whether or not to display the browser toolbar. Default is yes

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
top=pixels        The top position of the window. IE only

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
width=pixels        The width of the window. Min. value is 100

</td>
</tr>
<tr>
<td width="142">
replace

</td>
<td width="15">
</td>
<td width="723">
Optional.Specifies whether the URL creates a new entry or replaces the current entry in the history list. The following values are supported

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
true - URL replaces the current document in the history list

</td>
</tr>
<tr>
<td width="142">
</td>
<td width="15">
</td>
<td width="723">
false - URL creates a new entry in the history list

</td>
</tr>
</table>
