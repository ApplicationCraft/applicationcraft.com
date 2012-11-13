---
title: "Table Container"
active_menu_item: developers
class_name: developers
full_width: true
---


The Table Container is a very powerful Widget that behaves like a regular HTML table. When you drag a Table onto the page, it will behave according to the Layout property of its parent Container or page.

If the parent is in Absolute mode, you will be able to drag it to any location within that Container. If the parent is set to Vertical or Horizontal, then it will auto locate to the top left.

Once the Table is already on the page, you can select it by a) click+dragging from outside the table onto it or b) by locating the table in the Widget Explorer on the left side of the IDE.

You can add/Delete Rows/Columns and set Row/Column height/width by right clicking in the table or in the Widget Explorer

<table>
<tr>
<td width="168">
<a id="general"> </a> **General**

</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="168">
Widget Class

</td>
<td width="19">
</td>
<td width="755">
Internal class name of the widget.- WiziCore\_UI\_TableLayoutWidget and  WiziCore\_Widget\_Container

</td>
</tr>
<tr>
<td width="168">
Name

</td>
<td width="19">
</td>
<td width="755">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="168">
</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:167px; background-color:#ffffff;">
<table>
<tr>
<th style="vertical-align:top; width:131px;">
<table>
<tr>
<td width="158">
<table>
<tr>
<td width="148">
<table>
<tr>
<td width="148">
<table>
<tr>
<td width="148">
<table>
<tr>
<td width="148">
<a id="database"> </a> **Database**

</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</th>
</tr>
</table>
</th>
<th style="vertical-align:top; width:18px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:767px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="167">
Allow Foreign App Writing

</td>
<td width="18">
</td>
<td width="767">
Select to true to allow other apps to write into the container and writing out

</td>
</tr>
<tr>
<td width="167">
Automatic relationships

</td>
<td width="18">
</td>
<td width="767">
Where you can set the relationships to other apps (see [Relational Apps & Instance Linking)](/developers/user-guide/product-guide/advanced-features/data-storage-management/instance-linking)

</td>
</tr>
<tr>
<td width="167">
</td>
<td width="18">
</td>
<td width="767">
</td>
</tr>
</table>
<table>
<tr>
<td width="167">
<a id="layout"> </a> **Layout**

</td>
<td width="17">
</td>
<td width="758">
</td>
</tr>
<tr>
<td width="167">
## X

</td>
<td width="17">
</td>
<td width="758">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="167">
Y

</td>
<td width="17">
</td>
<td width="758">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="167">
Sizes

</td>
<td width="17">
</td>
<td width="758">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="167">
Z-Index

</td>
<td width="17">
</td>
<td width="758">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="167">
Anchors

</td>
<td width="17">
</td>
<td width="758">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="167">
Align in Container

</td>
<td width="17">
</td>
<td width="758">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="167">
Rows

</td>
<td width="17">
</td>
<td width="758">
Define how many Rows in the widget

</td>
</tr>
<tr>
<td width="167">
Columns

</td>
<td width="17">
</td>
<td width="758">
Define how many Columns in the widget

</td>
</tr>
<tr>
<td width="167">
Cells Size

</td>
<td width="17">
</td>
<td width="758">
Set the Size of the Cells. Append % for percentage of total, append 'px' (or leave empty) for defined pixel width.  If you leave a cell empty, it will allocate the remaining available space to that cell.

</td>
</tr>
<tr>
<td width="167">
Cells Style

</td>
<td width="17">
</td>
<td width="758">
Where you can set the style of the Cells

</td>
</tr>
<tr>
<td width="167">
Repeat

</td>
<td width="17">
</td>
<td width="758">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="167">
</td>
<td width="17">
</td>
<td width="758">
</td>
</tr>
</table>
<table>
<tr>
<td width="166">
<a id="behavior"> </a> **Behavior**

</td>
<td width="18">
</td>
<td width="758">
</td>
</tr>
<tr>
<td width="166">
Drag and Drop

</td>
<td width="18">
</td>
<td width="758">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="166">
Resizing

</td>
<td width="18">
</td>
<td width="758">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="166">
Visible

</td>
<td width="18">
</td>
<td width="758">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="166">
Read only

</td>
<td width="18">
</td>
<td width="758">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="166">
Enable

</td>
<td width="18">
</td>
<td width="758">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="166">
</td>
<td width="18">
</td>
<td width="758">
</td>
</tr>
</table>
<table>
<tr>
<td width="166">
<a id="data"> </a> **Data**

</td>
<td width="17">
</td>
<td width="759">

</td>
</tr>
<tr>
<td width="166">
View

</td>
<td width="17">
</td>
<td width="759">
Select the view to use

</td>
</tr>
<tr>
<td width="166">
Fields

</td>
<td width="17">
</td>
<td width="759">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="166">
Group By

</td>
<td width="17">
</td>
<td width="759">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="166">
Order By

</td>
<td width="17">
</td>
<td width="759">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="166">
Filter

</td>
<td width="17">
</td>
<td width="759">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="166">
Listen

</td>
<td width="17">
</td>
<td width="759">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="166">
Auto Load

</td>
<td width="17">
</td>
<td width="759">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="166">
Key Fields

</td>
<td width="17">
</td>
<td width="759">
Set to map View fields. For use in writing data back out to connected database tables

</td>
</tr>
<tr>
<td width="166">
</td>
<td width="17">
</td>
<td width="759">
</td>
</tr>
</table>
<table>
<tr>
<td width="168">
<a id="style"> </a> **Style**

</td>
<td width="13">
</td>
<td width="761">
</td>
</tr>
<tr>
<td width="168">
Opacity

</td>
<td width="13">
</td>
<td width="761">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="168">
Margin

</td>
<td width="13">
</td>
<td width="761">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="168">
Border

</td>
<td width="13">
</td>
<td width="761">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="168">
Border Radius

</td>
<td width="13">
</td>
<td width="761">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="168">
BG Color

</td>
<td width="13">
</td>
<td width="761">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="168">
BG Image

</td>
<td width="13">
</td>
<td width="761">
This specifies a background image to your Container

</td>
</tr>
<tr>
<td width="168">
BG Repeat

</td>
<td width="13">
</td>
<td width="761">
This specifies how a BG Image can repeat behind your Container (Repeat, Repeat X, Repeat Y)

</td>
</tr>
<tr>
<td width="168">
Display Hourglass Over

</td>
<td width="13">
</td>
<td width="761">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="168">
Hourglass Animation

</td>
<td width="13">
</td>
<td width="761">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="168">
Custom CSS Classes

</td>
<td width="13">
</td>
<td width="761">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](/developers/user-guide/product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="168">
Widget Style

</td>
<td width="13">
</td>
<td width="761">
This refers to the [Theme entry](/developers/user-guide/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="17">
</td>
<td width="128">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="17">
</td>
<td width="128">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/8Aea0YOOGO8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Using Tables in Adaptive Layout [3:10]

