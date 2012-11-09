---
title: "Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


This Console screen is the location where you will administer your Apps, enabling you to view and edit all of the Apps to which you have access.

![App\_Console\_Screen2](/img/docs/app_console_screen2.zoom54.png)

App Repository

All Apps are stored in the standard Private/Shared/Public folder structure as [described here](../private--shared-and-public-fol.htm) in more detail.

You can search for apps by name in the search field, and you can find recently used forms from the 'Select last used form..' list

Apps Tree Settings

<table>
<tr>
<td width="126">
Import

</td>
<td width="16">
</td>
<td>
Click to initiate the Import wizard to import apps into your account.

</td>
</tr>
<tr>
<td width="126">
New

</td>
<td width="16">
</td>
<td>
Click to create a new App

</td>
</tr>
<tr>
<td width="126">
New Folder

</td>
<td width="16">
</td>
<td>
Click to create a new folder in your Private area. Existing apps can be dragged into this folder if required. To create a new app within this folder, select first the folder, and then the 'New' button

</td>
</tr>
<tr>
<td width="126">
Delete

</td>
<td width="16">
</td>
<td>
This deletes the App from AC and is not reversible.

</td>
</tr>
<tr>
<td width="126">
Refresh

</td>
<td width="16">
</td>
<td>
Click to refresh the Tree view.

</td>
</tr>
</table>

Properties & Settings

<table>
<tr>
<td width="126">
## General

</td>
<td width="16">
</td>
<td>
</td>
</tr>
<tr>
<td width="126">
ID

</td>
<td width="16">
</td>
<td>
This is the Unique Identifier of the Application and is unique across any AC systems. Developers may want to use this but in normal AC usage you should not need it.

</td>
</tr>
<tr>
<td width="126">
Name

</td>
<td width="16">
</td>
<td>
You are free to choose any name for your Application.

</td>
</tr>
<tr>
<td width="126">
Custom URL ID

</td>
<td width="16">
</td>
<td>
Where you can choose a 'short name' for your app so the URL is more manageable.

for example where your URL will be ac.applicationcraft.com/de3c544d-0cda-4cab-970adc9fbea72fe3, you can now choose your own short format name, such as ‘survey’ so the URL becomes a

much more manageable ‘ac.applicationcraft.com/survey'

</td>
</tr>
<tr>
<td width="126">
Long URL

</td>
<td width="16">
</td>
<td>
The standard URL of your app. If a Custom URL ID name is defined it will refer to it by that name

</td>
</tr>
<tr>
<td width="126">
Short URL

</td>
<td width="16">
</td>
<td>
A short URL that can be used if you require. You can also pass parameters to your app using a shortended Url. See [Passing Parameters into Apps](../../advanced-features/passing-parameters-into-apps/index.htm)

</td>
</tr>
<tr>
<td width="126">
QR Code

</td>
<td width="16">
</td>
<td>
The QR Code for your app is shown here

</td>
</tr>
</table>

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/lZ-AAMuPVNA?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Deploying Mobile Apps [1:18]

Versions

Please refer to the [Versions](../versions.htm) section for details

Action Buttons

<table>
<tr>
<td width="126">
Edit

</td>
<td width="16">
</td>
<td>
This takes you into the Designer for the selected Object. If the app is being edited by another user in your account, access will be denied

</td>
</tr>
<tr>
<td width="126">
Save

</td>
<td width="16">
</td>
<td>
This button only appears once you have changed any of the settings for the selected Object. It commits the changed properties to AC irrevocably.

</td>
</tr>
<tr>
<td width="126">
Cancel

</td>
<td width="16">
</td>
<td>
This button only appears once you have changed any of the settings for the selected Object. It cancels all changes made since the Object was last saved.

</td>
</tr>
<tr>
<td width="126">
Live Mode

</td>
<td width="16">
</td>
<td>
Opens a new, empty App Instance running as a live App.

</td>
</tr>
<tr>
<td width="126">
Download

</td>
<td width="16">
</td>
<td>
Where you can download the Source Code of your app to deploy to your own environment

</td>
</tr>
<tr>
<td width="126">
Mobile Build

</td>
<td width="16">
</td>
<td>
Choose to build your apps using [AC Mobile Build](../../../ac-mobile-build-phonegap/cordova/ac-mobile-build/index.htm) or [Phonegap:Build](../../../ac-mobile-build-phonegap/cordova/phonegapbuild/index.htm) . If you wish to compile as a Native App for mobile devices you can do so here.

If you are planning to build Native Apps, then you must read the [Phonegap & Native Apps](../../../ac-mobile-build-phonegap/cordova/index.htm) chapter, which describes how this can be achieved.

</td>
</tr>
<tr>
<td width="126">
More \^

</td>
<td width="16">
</td>
<td>
Other options available under this button:

</td>
</tr>
<tr>
<td width="126">
Delete

</td>
<td width="16">
</td>
<td>
This deletes the App from AC and is not reversible.

</td>
</tr>
<tr>
<td width="126">
Publish

</td>
<td width="16">
</td>
<td>
Publish the App and make visible to all users in Public folder

</td>
</tr>
<tr>
<td width="126">
Embed

</td>
<td width="16">
</td>
<td>
If you want to embed an App into your own HTML page, then pressing the Embed button will provide you with the necessary HTML code that you can copy and paste into your page. You can also pass parameters into your app by editing this code. See [Passing in data with Embedded Apps and Javascript](../../advanced-features/passing-parameters-into-apps/passing-in-data-with-embedded-.htm)

</td>
</tr>
<tr>
<td width="126">
Clone

</td>
<td width="16">
</td>
<td>
Create a copy of the selected Object.

</td>
</tr>
<tr>
<td width="126">
Data

</td>
<td width="16">
</td>
<td>
View a summary of the data instances for this App

</td>
</tr>
<tr>
<td width="126">
<a id="purge"> </a> Purge

</td>
<td width="16">
</td>
<td>
Delete all existing data instances for this App

</td>
</tr>
<tr>
<td width="126">
Export

</td>
<td width="16">
</td>
<td>
This option allows you to export your app. You can select to export just the app, to include all or selected dependencies. This creates a 'zip' file which can then be imported into another account using the 'Import' function

</td>
</tr>
<tr>
<td width="126">
Assignments

</td>
<td width="16">
</td>
<td>
View any Workflow Assignments you have

</td>
</tr>
</table>

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/wrXV9Db7yhs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Deleting App Data Instance [1:01]

Sharing

Please refer to the [Sharing](../sharing.htm) section for details

User Roles

For use in WorkFlow apps (See: [Workflow](../../advanced-features/workflow/index.htm) )
