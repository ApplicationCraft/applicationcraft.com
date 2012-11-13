---
title: "Configuring a Connection"
active_menu_item: developers
class_name: developers
full_width: true
---


A new Connection is added by pressing the 'New' button at the bottom of the Connection list on the left hand side of the Connections Console. A Connection then needs to be configured as follows.

All Connections are stored in the standard [Private/Shared/Public folder structure](/developers/documentation/product-guide/the-console/private-shared-and-public-fol) .

## Properties & Settings

<table>
<tr>
<td width="126">
  <strong>General</strong>

</td>
<td width="16">
</td>
<td>
</td>
</tr>
<tr>
<td width="126">
Name

</td>
<td width="16">
</td>
<td>
You can assign any name to the Connection

</td>
</tr>
<tr>
<td width="126">
Integration Agent

</td>
<td width="16">
</td>
<td>
You should press the '...' button to set the Integration Agent this Connection talks to.

</td>
</tr>
<tr>
<td width="126">
Type

</td>
<td width="16">
</td>
<td>
This field is set at the same time as selecting the Data Agent. To change it, you will need to re specify the Data Agent.

</td>
</tr>
<tr>
<td width="126">
  <strong>Sharing</strong>

</td>
<td width="16">
</td>
<td>
  See general <a href="/developers/documentation/product-guide/the-console/sharing">Sharing</a> explanation.

</td>
</tr>
</table>

## Database Connection properties

<table>
<tr>
<td width="126">
  <strong>Properties</strong>

</td>
<td width="16">
</td>
<td>
</td>
</tr>
<tr>
<td width="126">
Type

</td>
<td width="16">
</td>
<td>
Type of Database to access (MySQL, Oracle, MS-SQL etc)

</td>
</tr>
<tr>
<td width="126">
Server

</td>
<td width="16">
</td>
<td>
This is the IP address of server name of the data source you want to connect to. If AC and the Data Agent are in different locations, then the server name / IP address is from the perspective of the Data Agent and not the AC installation. If using the AC Database Agent you will need to enter the external IP address of the server you are connecting to. 'localhost' or any 192..x.x.x or 10.x.x.x addresses will not work,

</td>
</tr>
<tr>
<td width="126">
Port

</td>
<td width="16">
</td>
<td>
Port address of database (if applicable depending on database)

</td>
</tr>
<tr>
<td width="126">
Username

</td>
<td width="16">
</td>
<td>
This is the Username that you wish to connect as.

</td>
</tr>
<tr>
<td width="126">
Password

</td>
<td width="16">
</td>
<td>
Password to accompany Username.

</td>
</tr>
<tr>
<td width="126">
Database

</td>
<td width="16">
</td>
<td>
This is the name of the database within the server. The Agent will attempt to populate this automatically. If this is not populating automatically, save your connection first, then revisit the drop down list. If the Username does not have high enough privileges to the master database (MS-SQL) this may not populate, but you can also manually enter the Database Table name into this field. Save and confirm access using the Test Connection

</td>
</tr>
</table>

## Action Buttons

<table>
<tr>
<td width="126">
Save

</td>
<td width="16">
</td>
<td>
This button is only enabled once you have changed any of the settings for the selected Object. It commits the changed properties to AC irrevocably.

</td>
</tr>
<tr>
<td width="126">
Cancel

</td>
<td width="16">
</td>
<td>
This button is enabled once you have changed any of the settings for the selected Object. It cancels all changes made since the Object was selected.

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
Clone

</td>
<td width="16">
</td>
<td>
Creates a copy of the Connection

</td>
</tr>
<tr>
<td width="126">
Test Connection

</td>
<td width="16">
</td>
<td>
Calls the Data Agent with the Connection Properties entered and informs you if successful. If not successful, the error messages are standard messages. 'googling' will usually provide useful clues to the reason for failure. Save any changes/entries made before running the test

</td>
</tr>
</table>

##Related Video

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/tQpe5tx6qcc?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up a Connection [2:20]
