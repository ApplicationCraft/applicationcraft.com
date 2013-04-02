---
old_url: users.htm
title: "Users"
active_menu_item: developers
class_name: developers
full_width: true
---


Anyone who accesses the Application Craft Console will require a User ID. You can also configure Apps to require someone to be authenticated before they can access an App Instance. Alternatively, users can access App Instances anonymously. Please see [Sharing](/developers/documentation/product-guide/the-console/sharing) for more details.

There are 2 types of users:

<table>
<tr>
<td width="149">
 Developer

</td>
<td width="19">
</td>
<td width="667">
  This refers to the number of developer users in your account and can be granted <a href="/developers/documentation/product-guide/the-console/console-tabs/more/users-groups/users#rights">rights</a> to be able to access specific areas in your account.

Additional developer users can also be added to your account at any time by Upgrading your account. See <a href="/developers/documentation/product-guide/account-management/upgrade-subscription">Upgrade Subscriptions</a>

If you wish to reduce (temporarily) the number of developers in your account, but may want to upgrade again in future (or allow a developer to return to work in your account), you can disable developer users so their work/apps are not deleted but just not available.

</td>
</tr>
<tr>
<td width="149">
 App

</td>
<td width="19">
</td>
<td width="667">
    This refers to any user accounts created in your account where you require <a href="/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/">Authentication for Your Apps</a> or if using Server Side scripting <a href="/developers/documentation/scripting-apis/server-side-api/sys-object/user-management/">User Management</a> . This user does not require any 'rights'. You can disable users to restrict access to your apps.  There are no limits to the number of app users you can have in your account

</td>
</tr>
</table>

![User\_screen](/img/docs/user_screen.zoom56.png)

On the left side is a pane that shows all users in the system. Check 'Only Developers' to show only developers.

Search is available to filter your users list.

## Properties & Settings

<table>
<tr>
<td width="149">
  <strong>General</strong>

</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
Email/ login

</td>
<td width="19">
</td>
<td width="667">
This is the User login name. Once created, it cannot be modified.

</td>
</tr>
<tr>
<td width="149">
Username

</td>
<td width="19">
</td>
<td width="667">
This is the long form User name and can contain any characters. This property can be edited.

</td>
</tr>
<tr>
<td width="149">
Type

</td>
<td width="19">
</td>
<td width="667">
developer/app.

 - 'developer' refers to the number of developer users in your account. Additional developer users can be added to your account at any time by Upgrading your account. See <a href="/developers/documentation/product-guide/account-management/upgrade-subscription">Upgrade Subscriptions</a>.

 - 'app' refers to any user accounts created in your account where you require <a href="/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/">Authentication for Your Apps</a> or if using Server Side scripting <a href="/developers/documentation/scripting-apis/server-side-api/sys-object/user-management/">User Management</a>.

</td>
</tr>
<tr>
<td width="149">
Apps created

</td>
<td width="19">
</td>
<td width="667">
A count of the number of apps a developer user created.

</td>
</tr>
<tr>
<td width="149">
Disabled

</td>
<td width="19">
</td>
<td width="667">
Check to disable a developer user. Disabling a user will remove their Access rights

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
<a id="rights"> </a><b>Rights</b>

</td>
<td width="19">
</td>
<td width="667">
This tab is only available for developer users

</td>
</tr>
<tr>
<td width="149">
Access

</td>
<td width="19">
</td>
<td width="667">
Indicates whether the User is allowed to access Application Craft

</td>
</tr>
<tr>
<td width="149">
Public Folder

</td>
<td width="19">
</td>
<td width="667">
Can the User modify Public folders

</td>
</tr>
<tr>
<td width="149">
Manage Apps

</td>
<td width="19">
</td>
<td width="667">
Can create, administer and use Apps

</td>
</tr>
<tr>
<td width="149">
Manage Resources

</td>
<td width="19">
</td>
<td width="667">
Can create, administer and use Resources

</td>
</tr>
<tr>
<td width="149">
Manage Connections

</td>
<td width="19">
</td>
<td width="667">
Can create, administer and use Connections

</td>
</tr>
<tr>
<td width="149">
Manage Queries

</td>
<td width="19">
</td>
<td width="667">
Can create, administer and use Queries

</td>
</tr>
<tr>
<td width="149">
Manage Users

</td>
<td width="19">
</td>
<td width="667">
Can create and administer Users and Groups

</td>
</tr>
<tr>
<td width="149">
Manage Widgets

</td>
<td width="19">
</td>
<td width="667">
  Can create, administer and use Custom Widgets. See <a href="/developers/documentation/extending-ac/adding-your-own-widgets/">Adding your own Widgets</a>

</td>
</tr>
<tr>
<td width="149">
Manage Themes

</td>
<td width="19">
</td>
<td width="667">
Can create, administer and use Themes

</td>
</tr>
<tr>
<td width="149">
Account Admin

</td>
<td width="19">
</td>
<td width="667">
  Allow the user access to the general Account settings (including ability to pull Updates and change subscription package). See <a href="/developers/documentation/product-guide/account-management/upgrade-subscription">Upgrade Subscriptions</a>

</td>
</tr>
<tr>
<td width="149">
Manage Notifiers

</td>
<td width="19">
</td>
<td width="667">
  Can create and administer Notifiers. See <a href="/developers/documentation/product-guide/the-console/console-tabs/notifiers">Notifiers</a>

</td>
</tr>
<tr>
<td width="149">
Access all logs

</td>
<td width="19">
</td>
<td width="667">
  Can the user access logs. See <a href="/developers/documentation/product-guide/advanced-features/logging-support/">Logging Support</a>

</td>
</tr>
<tr>
<td width="149">
Write Logs

</td>
<td width="19">
</td>
<td width="667">
  Can the user write logs. See <a href="/developers/documentation/product-guide/advanced-features/logging-support/">Logging Support</a>

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
  <strong>Member Of</strong>

</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
Name

</td>
<td width="19">
</td>
<td width="667">
This list shows which Groups the user is a member of. You can add Users to or remove them from Groups from this section.

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
  <strong>User Parameters</strong>

</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
<tr>
<td width="149">
</td>
<td width="19">
</td>
<td width="667">
  Where users individual parameters can be set. See <a href="/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/user-parameters/">User Parameters</a>

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="19">
</td>
<td width="667">
</td>
</tr>
</table>

## Action Buttons

<table>
<tr>
<td width="135">
Save

</td>
<td width="19">
</td>
<td width="685">
This button only appears once you have changed any of the settings for the selected User. It commits the changed properties to AC irrevocably.

</td>
</tr>
<tr>
<td width="135">
Cancel

</td>
<td width="19">
</td>
<td width="685">
This button only appears once you have changed any of the settings for the selected User. It cancels all changes made since the User was selected.

</td>
</tr>
<tr>
<td width="135">
Delete

</td>
<td width="19">
</td>
<td width="685">
This deletes the User from AC and is not reversible.

</td>
</tr>
<tr>
<td width="135">
Change Password

</td>
<td width="19">
</td>
<td width="685">
  This is where another users password can be changed. To change your own password see <a href="/developers/documentation/product-guide/the-console/console-tabs/more/my-details">My Details</a>

</td>
</tr>
</table>

