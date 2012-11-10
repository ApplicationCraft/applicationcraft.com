---
title: "Page Button"
active_menu_item: developers
class_name: developers
full_width: true
---


The Page Button works with the [Repeating Container](repeater.htm) , [Listbox](../common/listbox) , [Dropdown List](../common/dropdown-list) , [Grid](../advanced/grid) , [Mobile Checkbox](../mobile/mobcheckbox) , [Mobile Popup Listbox](../mobile/popup-listbox) , [Mobile Popup Dropdown](../mobile/popup-dropdown) and [Mobile List](../mobile/list) and allows the User to view more data entries. At the time of writing the button only allows you to move on to the next page but we will soon enable homepage and previous page functions.

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
Internal class name of the widget.- WiziCore\_UI\_PageButtonWidget

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
Label

</td>
<td width="15">
</td>
<td width="779">
The text that should be displayed on the Page for the Widget.

</td>
</tr>
<tr>
<td width="148">
Source Widget

</td>
<td width="15">
</td>
<td width="779">
Points to a Repeater/Grid/Common List or Mobile Widget that this button will interact with to load more data into the widget

</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:149px;">
</th>
<th style="vertical-align:top; width:16px;">
</th>
<th style="vertical-align:top; width:778px;">
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
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

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
Shadow

</td>
<td width="15">
</td>
<td width="779">
Specify Shadow effects

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
Color

</td>
<td width="15">
</td>
<td width="779">
The main foreground (usually text) color of the Widget.  If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="15">
</td>
<td width="779">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../product-guide/content-and-app-layout/introduction/setting-a-margin)

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
Border Radius

</td>
<td width="15">
</td>
<td width="779">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="148">
BG Color

</td>
<td width="15">
</td>
<td width="779">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

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
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
This refers to the [Theme entry](../../product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

## **See Also**

 - [drawNextPage()](../../scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage)

 - [fetchDataPage()](../../scripting-apis/client-api/widget-object-functions/repeater-grid/fetchdata)

 - [isAllDataDrawn()](../../scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn)

 - [select().limit()](../../scripting-apis/server-side-api/ssj-object/database/select-handling/select-limit)

