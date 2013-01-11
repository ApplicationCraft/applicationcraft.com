---
old_url: navbar.htm
title: "NavBar"
active_menu_item: developers
class_name: developers
full_width: true
---


This is used as a way of navigating around an App or for triggering other actions.

<table>
<tr>
<td width="148">
<a id="general"> </a> <b>General</b>

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Widget Class

</td>
<td width="15">
</td>
<td width="779">
Internal class name of the widget.- WiziCore_UI_NavBarMobileWidget

</td>
</tr>
<tr>
<td width="148">
Name

</td>
<td width="15">
</td>
<td width="779">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="148">
Items

</td>

</td>
<td width="15">
</td>
<td width="779">
  This is where you can prefill your widget either manually or by importing a CSV list stored as a resource. See <a href="/developers/documentation/product-guide/widget-properties-events/prefill">Prefill</a>

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Sizes

</td>
<td width="15">
</td>
<td width="779">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="148">
X

</td>
<td width="15">
</td>
<td width="779">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="148">
Y

</td>
<td width="15">
</td>
<td width="779">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="148">
Z-Index

</td>
<td width="15">
</td>
<td width="779">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="148">
Tab Order

</td>
<td width="15">
</td>
<td width="779">
Where you can control the tab order in your app.

</td>
</tr>
<tr>
<td width="148">
Tab Stop

</td>
<td width="15">
</td>
<td width="779">
true/false.  If set to false users will not tab into this field

</td>
</tr>
<tr>
<td width="148">
Anchors

</td>
<td width="15">
</td>
<td width="779">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="148">
Align in Container

</td>
<td width="15">
</td>
<td width="779">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Drag and Drop

</td>
<td width="15">
</td>
<td width="779">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="148">
Visible

</td>
<td width="15">
</td>
<td width="779">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="148">
Enable

</td>
<td width="15">
</td>
<td width="779">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="style"> </a> <b>Style</b>

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="15">
</td>
<td width="779">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Show Image

</td>
<td width="15">
</td>
<td width="779">
Set to True to show Images as populated in Items List

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="15">
</td>
<td width="779">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="148">
Mobile Theme

</td>
<td width="15">
</td>
<td width="779">
  Where you can set the Theme colors for the widget. See <a href="/developers/documentation/product-guide/mobile-apps-sites/mobile-themes">Mobile Themes</a>

</td>
</tr>
<tr>
<td width="148">
Icon Position

</td>
<td width="15">
</td>
<td width="779">
Where you can set the position of the icon

</td>
</tr>
<tr>
<td width="148">
Inset

</td>
<td width="15">
</td>
<td width="779">
Insets the NavBar and rounds the corners

</td>
</tr>
<tr>
<td width="148">
Custom Image Style

</td>
<td width="15">
</td>
<td width="779">
Where you can set the size of Custom Image Icons. (max 32\*32px)

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events">General Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
</tr>
</table>

## See Also

 - [General Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Mobile Navigation Toolbar](/developers/documentation/product-guide/advanced-important-widgets/important-mobile-widgets/mobile-navigation-toolbar)

