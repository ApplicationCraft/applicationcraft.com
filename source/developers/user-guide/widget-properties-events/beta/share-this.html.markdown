---
title: "Share This"
active_menu_item: developers
class_name: developers
full_width: true
---


The Share This widget should be considered to be in a Beta state until mention of it is removed from the documentation and is accessible from the Common section of the Toolbox.

The Share This widget presents a simple 'share' button to your app and when selected will allow your app users to share comments.

<table>
<tr>
<th style="vertical-align:top; width:138px; background-color:#ffffff;">
<a id="general"> </a> **General**

</th>
<th style="vertical-align:top; width:21px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:782px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="138">
Widget Class

</td>
<td width="21">
</td>
<td width="782">
Internal class name of the widget.- ShareThis

</td>
</tr>
<tr>
<td width="138">
Name

</td>
<td width="21">
</td>
<td width="782">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="138">
Publisher Key

</td>
<td width="21">
</td>
<td width="782">
Enter your publisher key obtainable by registering for an Account at [http://www.sharethis.com](http://www.sharethis.com)

</td>
</tr>
<tr>
<td width="138">
Open on hover

</td>
<td width="21">
</td>
<td width="782">
True/False. Select True for ShareThis window to open on hover, or False to require users to touch/click

</td>
</tr>
<tr>
<td width="138">
Url

</td>
<td width="21">
</td>
<td width="782">
The URL of the app to show within the widget. By default it is set to the Short URL of the app you are working in, but you can enter in another format of the App URL if you require. See [Apps](../../product-guide/the-console/console-tabs/applications)

</td>
</tr>
</table>
<table>
<tr>
<td width="137">
<a id="layout"> </a> **Layout**

</td>
<td width="23">
</td>
<td width="782">
</td>
</tr>
<tr>
<td width="137">
X

</td>
<td width="23">
</td>
<td width="782">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="137">
Y

</td>
<td width="23">
</td>
<td width="782">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="137">
Sizes

</td>
<td width="23">
</td>
<td width="782">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="137">
Repeat

</td>
<td width="23">
</td>
<td width="782">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="137">
Z-Index

</td>
<td width="23">
</td>
<td width="782">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="137">
Anchors

</td>
<td width="23">
</td>
<td width="782">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="137">
Align in Container

</td>
<td width="23">
</td>
<td width="782">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="137">
</td>
<td width="23">
</td>
<td width="782">
</td>
</tr>
</table>
<table>
<tr>
<td width="135">
<a id="behavior"> </a> **Behavior**

</td>
<td width="25">
</td>
<td width="782">
</td>
</tr>
<tr>
<td width="135">
Visible

</td>
<td width="25">
</td>
<td width="782">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="135">
Enable

</td>
<td width="25">
</td>
<td width="782">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="135">
</td>
<td width="25">
</td>
<td width="782">
</td>
</tr>
</table>
<table>
<tr>
<td width="150">
<a id="style"> </a> **Style**

</td>
<td width="10">
</td>
<td width="782">
</td>
</tr>
<tr>
<td width="150">
Opacity

</td>
<td width="10">
</td>
<td width="782">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="150">
Margin

</td>
<td width="10">
</td>
<td width="782">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="150">
Border

</td>
<td width="10">
</td>
<td width="782">
Specified the line width/style and colour of the border surrounding the Widget.

</td>
</tr>
<tr>
<td width="150">
Custom CSS Classes

</td>
<td width="10">
</td>
<td width="782">
## Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="150">
Widget Style

</td>
<td width="10">
</td>
<td width="782">
This refers to the [Theme entry](../../product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
**Supported Events:**

</td>
</tr>
<tr>
<td width="148">
[Mouse Events](../events/event-reference-list/mouse-events)

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
</tr>
</table>

**See Also:**

 - [Share This Widget](../../product-guide/advanced-important-widgets/share-this-widget/)

 - [Mouse Events](../events/event-reference-list/mouse-events)

