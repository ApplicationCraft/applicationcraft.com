---
title: "Accordion"
active_menu_item: developers
class_name: developers
full_width: true
---


The Accordion Widget is a container that  enables a lot of information to be presented in a confined space vertically. You can click the headers to expand/collapse content included in the sections, much like tabs.

<table>
<tr>
<td width="148">
<a id="general"> </a> **General**

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
Internal class name of the widget.- WiziCore\_UI\_AccordionWidget and  WiziCore\_Widget\_Container

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
Auto Expand

</td>
<td width="15">
</td>
<td width="779">
Set to true to automatically open each section, overriding the Sections 'open' setting

</td>
</tr>
<tr>
<td width="148">
Sections

</td>
<td width="15">
</td>
<td width="779">
Specify the number of sections, the height of each and whether it is 'open' by default

</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:149px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:778px; background-color:#ffffff;">
</th>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="layout"> </a> **Layout**

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
## X

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
Sizes

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

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
Anchors

</td>
<td width="15">
</td>
<td width="779">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

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
</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="behavior"> </a> **Behavior**

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
Resizing

</td>
<td width="15">
</td>
<td width="779">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

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
Read only

</td>
<td width="15">
</td>
<td width="779">
If set to True, the object can be interacted with by a user but data cannot be altered.

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
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="style"> </a> **Style**

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
Font

</td>
<td width="15">
</td>
<td width="779">
Indicates the main font used by the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="15">
</td>
<td width="779">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="148">
Color

</td>
<td width="15">
</td>
<td width="779">
Specify the Section Font color

</td>
</tr>
<tr>
<td width="148">
BG Color

</td>
<td width="15">
</td>
<td width="779">
Specify the background color of the Widget

</td>
</tr>
<tr>
<td width="148">
Border

</td>
<td width="15">
</td>
<td width="779">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Header BG Color

</td>
<td width="15">
</td>
<td width="779">
Specify the Header Background font color

</td>
</tr>
<tr>
<td width="148">
Header Border Radius

</td>
<td width="15">
</td>
<td width="779">
Specify the radius of the Header borders

</td>
</tr>
<tr>
<td width="148">
Section BG Color

</td>
<td width="15">
</td>
<td width="779">
Specify the Section Background font color

</td>
</tr>
<tr>
<td width="148">
Section Border Radius

</td>
<td width="15">
</td>
<td width="779">
Specify the radius of the Section borders

</td>
</tr>
<tr>
<td width="148">
Display Hourglass Over

</td>
<td width="15">
</td>
<td width="779">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="148">
Hourglass Animation

</td>
<td width="15">
</td>
<td width="779">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](/developers/user-guide/product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
This refers to the [Theme entry](/developers/user-guide/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be overidden.

</td>
</tr>
</table>

Accordion:

<table>
<tr>
<td width="182">
  <strong>Supported Events:</strong>

</td>
<td width="3">
</td>
<td width="107">
</td>
</tr>
<tr>
<td width="182">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events">General Events</a>

</td>
<td width="3">
</td>
<td width="107">
</td>
</tr>
<tr>
<td width="182">
On Section State Changed

</td>
<td width="3">
</td>
<td width="107">
</td>
</tr>
<tr>
<td width="182">
</td>
<td width="3">
</td>
<td width="107">
</td>
</tr>
</table>

Accordion Container:

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="15">
</td>
<td width="128">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="128">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
</table>

## See Also

 - [General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

