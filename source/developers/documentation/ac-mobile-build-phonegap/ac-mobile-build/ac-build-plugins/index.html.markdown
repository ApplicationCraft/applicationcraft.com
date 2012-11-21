---
old_url: ac_plugins.htm
title: "AC Build Plugins"
active_menu_item: developers
class_name: developers
full_width: true
---


AC Build Plugins should be considered to be in a Beta state until mention of it is removed from the documentation.

## Non AC Developed HTML5+CSS+JS Apps

If you have developed your App outside the Application Craft platform then you will need to

 - add a line to your config.xml - the individual plugin sections within this chapter tell you what to add

 - make sure your index.html includes a reference to the relevant .js file -  the individual plugin sections within this chapter tell you what to add

## AC Apps

AC Apps provide dialogs that let you choose which plugins you wish to include.

The AC Build Plugins [App Property](/developers/documentation/product-guide/widget-properties-events/app-properties) allows you include the plugins within your Native App built using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) .

The Child Browser plugin can also be used if building using [PhoneGap:Build](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/) .

![acPllugins](/img/docs/acpllugins.zoom83.png)

**Available plugins**

<table>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/child-browser/">Child Browser</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/">SQLite Plugin</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/mailto-plugin">MailTo Plugin</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/scandit-free">Scandit Free</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/zxing-bar-code-scanner">ZXing Bar Code Scanner</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
<tr>
<td width="211">
   - <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/">Xtify Push Notifications</a>

</td>
<td width="27">
</td>
<td width="704">
</td>
</tr>
</table>

Because Application Craft supports one-click compilation of plugins without the need for you to install any compilers on your desktop, any custom data storage mechanism that is available as a plugin can be added to the system.

In order to maintain quality and assure things work properly, we test plugins ourselves before adding them to our library of supported plugins.

If you are interested in us adding any plugin, please contact support@applicationcraft.com.

