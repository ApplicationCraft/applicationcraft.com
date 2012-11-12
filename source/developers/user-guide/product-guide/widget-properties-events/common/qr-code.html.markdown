---
title: "QR Code"
active_menu_item: developers
class_name: developers
full_width: true
---


The QR Code widget allows you to show this within your App. Users can scan this (with their mobile devices usually) to be able to load the app defined in  the widget.  The QR Code for your app is also shown on the [Apps](../../the-console/console-tabs/applications) Console tab

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
Internal class name of the widget.- WiziCore\_UI\_ImgQrCodeWidget

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
Text

</td>
<td width="15">
</td>
<td width="779">
The URL of the app you wish to link to within the widget. By default it will be set to the URL of the app you are working in, but you can enter in another app URL if required

</td>
</tr>
<tr>
<td width="148">
Select Form

</td>
<td width="15">
</td>
<td width="779">
Select an App to show as the QR Code

</td>
</tr>
<tr>
<td width="148">
Show Url

</td>
<td width="15">
</td>
<td width="779">
true/false. Set to true to show a shortened Url with the QR Code

</td>
</tr>
<tr>
<td width="148">
URL Margin

</td>
<td width="15">
</td>
<td width="779">
Set the margin around the shortened Url

</td>
</tr>
<tr>
<td width="148">
Text Align

</td>
<td width="15">
</td>
<td width="779">
Left/Right/Center. Set to align the text of the shortened Url within the QR Code widget

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
<tr>
<td width="148">
<a id="database"> </a> **Database**

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Store in Database

</td>
<td width="15">
</td>
<td width="779">
Select to true to store the data from this field for reporting. Used when ImageMap is used

</td>
</tr>
<tr>
<td width="148">
Data Type

</td>
<td width="15">
</td>
<td width="779">
Data type to be stored for ImageMap

</td>
</tr>
<tr>
<td width="148">
Mandatory

</td>
<td width="15">
</td>
<td width="779">
true/false. Set to true to ensure the field is completed before submission is allowed.

See [App Properties](../app-properties#mandatory) Mandatory settings where you can set the highlight color, opacity and the message to present to users

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
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

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
</table>
<table>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
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
Set to false to leave the Widget visible but to prevent any user interaction.

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
<a id="data"> </a> **Data**

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="15">
</td>
<td width="779">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="15">
</td>
<td width="779">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="15">
</td>
<td width="779">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="15">
</td>
<td width="779">
Specifies the order in which data is presented to the Widget.  Read the [Order By](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Drill Filter

</td>
<td width="15">
</td>
<td width="779">
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="15">
</td>
<td width="779">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/reset-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="15">
</td>
<td width="779">
Set to true to automatically fetch data from assigned view.

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
Margin

</td>
<td width="15">
</td>
<td width="779">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../content-and-app-layout/introduction/setting-a-margin)

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
Font

</td>
<td width="15">
</td>
<td width="779">
Set the font to be used in the shortened Url

</td>
</tr>
<tr>
<td width="148">
Link Color

</td>
<td width="15">
</td>
<td width="779">
Set the color of the link in the shortened Url

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
This refers to the [Theme entry](../../content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

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

## **See Also**

 - [Mouse Events](../events/event-reference-list/mouse-events)

