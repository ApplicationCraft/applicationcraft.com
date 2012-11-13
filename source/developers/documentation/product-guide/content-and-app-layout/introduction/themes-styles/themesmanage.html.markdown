---
title: "Theme Management"
active_menu_item: developers
class_name: developers
full_width: true
---


Themes allow you to set the properties for all Widgets in an App using a pre-determined set of values. Like Resources, Themes are stored centrally in AC. When you create a new App you will be asked to specify which Theme the App should be linked to.

![CreateAppThemeSelection](/img/docs/createappthemeselection.zoom84.png)

## Themes Repository

Themes are stored in the standard [Private/Shared/Public folder structure](/developers/documentation/product-guide/the-console/private-shared-and-public-fol) . They can be viewed by clicking on the Themes tab in the console.

In the Themes Console, you can perform the following actions:

<table>
<tr>
<td width="147">
General

</td>
<td width="21">
</td>
<td width="574">
Change the name of the Theme.  Enter the new name and click Save.  The new name will appear in the Theme property of all Apps using that Theme.

</td>
</tr>
<tr>
<td width="147">
Sharing

</td>
<td width="21">
</td>
<td width="574">
  Set permissions for Use and Administration of the Theme.  See <a href="/developers/documentation/product-guide/the-console/sharing">Sharing</a> for more information.

</td>
</tr>
<tr>
<td width="147">
  <strong>Action Buttons</strong>

</td>
<td width="21">
</td>
<td width="574">
</td>
</tr>
<tr>
<td width="147">
New

</td>
<td width="21">
</td>
<td width="574">
Create a new Theme

</td>
</tr>
<tr>
<td width="147">
Delete

</td>
<td width="21">
</td>
<td width="574">
Delete a Theme

</td>
</tr>
<tr>
<td width="147">
Clone

</td>
<td width="21">
</td>
<td width="574">
Create a copy of an existing Theme

</td>
</tr>
<tr>
<td width="147">
Export

</td>
<td width="21">
</td>
<td width="574">
Export your Theme

</td>
</tr>
</table>

## Editing Themes

Themes are edited using the App designer.

To view the pre-set Styles for any Widget, select that Widget in the Designer and go to the Styles tab at the bottom of the left window. You will see a list of the Styles that have been created for the selected Widget type in this Theme.

![Styles\_tab](/img/docs/styles_tab.zoom56.png)

Making a change to the property settings for any Style will change all Widgets using that Style – see [Style Management](/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/style-management) for more detail on Editing Styles within Themes.

You can only make changes to Styles (and hence the Theme) if you have been given Edit rights in the Sharing section for that Theme. See [Sharing](/developers/documentation/product-guide/the-console/sharing) for more information.

Any changes you make to a Theme will be applied to all Apps that use the Theme. It is therefore important that if you want to make changes to an existing Theme without affecting other Apps, you should first make a clone of the Theme, which can then be edited.

## Theme Contents

The Theme contains property settings for all Widgets. The settings that are saved are largely the visual ones contained in the Style section, but also other properties depending on the Widget type.

For any Widget, there will be a default Style. Within a Theme, in addition to the default, you can create any number of other Styles for the Widget.

## Selecting Theme

The Theme associated with an App can be changed in the Style section of the Properties bar for the App (click on the App background to see the Properties bar for the App).

![Theme\_change](/img/docs/theme_change.zoom53.png)

If you change the Theme, you will be asked whether you want to import Widget Styles from the existing Theme to the new Theme if they do not already exist there.  This will create a copy of all Widget Styles used in the current Theme in the new Theme.

**Note** : If the new Theme contains Styles with the same name as the Theme you are changing from, but these Styles have different settings, the Widgets will adopt the settings of the Styles in the new Theme.

## See Also

 - [Import/Export](/developers/documentation/product-guide/the-console/import/export/)

