---
title: "Sharing"
active_menu_item: developers
class_name: developers
full_width: true
---


Application Craft provides sharing permissions for the following Objects

 - Apps
 - Resources
 - Themes
 - Connections
 - Queries

To share an Object, select it from the tree view and then select the Sharing section on the right hand side. By default, most objects are not shared and so are only accessible by the Object's owner.

![Sharing](/img/docs/sharing.zoom40.png)

You can share the Object by adding Users and/or Groups. To do this, press the Add button below the Users & Groups list. You will then be shown the following popup dialog from which you can locate and select both Users and Groups.

![User\_Group\_Selection](/img/docs/user_group_selection.zoom67.png)

Having added a User or Group to the list, you can now select one and assign the actual sharing permissions you wish to grant or deny.

Authenticated Users are those who have user rights but no administrative rights, for example they have signed in, but have no Application Craft administrative rights.

AC Users are those who have both user and administrative rights.

The list at the bottom of the Sharing section lists the possible Permissions. Each Object type may have a slightly different set of permissions, but the example below is typical.

![App\_sharing](/img/docs/app_sharing.zoom79.png)

## Allow / Deny

Normally, you will check a box in the Allow column. However, occasionally, you may want to specifically Deny a permission to a User or Group.

When evaluating whether a User is able to access an Object, AC will first check to see if that Object can be accessed by that User directly or as a Group member. If that User is allowed, then AC will check to see whether there are any specific Deny permissions for the Object / User.  If there are both Allow and Deny permissions, then the Deny permission will prevail.

## Permissions Types

The following permissions types are standard but different AC objects have varying collections of permissions, which you can set for both individual Users and Groups.

<table>
<tr>
<td width="200">
Full

</td>
<td width="7">
</td>
<td>
The User/Group is given the full set of permissions

</td>
</tr>
<tr>
<td width="200">
Use

</td>
<td width="7">
</td>
<td>
The User/Group may use or access the Object

</td>
</tr>
<tr>
<td width="200">
Edit

</td>
<td width="7">
</td>
<td>
The User/Group may edit the Object (only used in the Apps Console)

</td>
</tr>
<tr>
<td width="200">
Administer

</td>
<td width="7">
</td>
<td>
The User/Group may make changes to the Object's properties and settings in the Console

</td>
</tr>
<tr>
<td width="200">
Clone

</td>
<td width="7">
</td>
<td>
The User/Group may Clone the app

</td>
</tr>
<tr>
<td width="200">
Create Instances

</td>
<td width="7">
</td>
<td>
The User/Group may submit data into the App

</td>
</tr>
<tr>
<td width="200">
Read Instances

</td>
<td width="7">
</td>
<td>
The User/Group can access App data and use the data for Reporting

</td>
</tr>
<tr>
<td width="200">
Update Instances

</td>
<td width="7">
</td>
<td>
The User/Group can update instances

</td>
</tr>
<tr>
<td width="200">
Delete Instances

</td>
<td width="7">
</td>
<td>
The User/Group can delete instances

</td>
</tr>
</table>

##Related Video

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/hKftVYFAL8M?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Creating a new App [1:08]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Jy5HgPdtvMY?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Integration Overview [4:51]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/wxbd6ugLxa0?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying External Database [3:03]

