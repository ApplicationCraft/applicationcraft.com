---
old_url: table_containerprop.htm
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
<a id="general"> </a> <b>General</b>

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
Internal class name of the widget.- WiziCore_UI_TableLayoutWidget and  WiziCore_Widget_Container

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
</table>
<table>
<tr>
<td width="168">
<a id="database"> </a> <b>Database</b>
</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="168">
Allow Foreign App Writing

</td>
<td width="19">
</td>
<td width="755">
Select to true to allow other apps to write into the container and writing out

</td>
</tr>
<tr>
<td width="168">
Automatic relationships

</td>
<td width="19">
</td>
<td width="755">
  Where you can set the relationships to other apps (see <a href="/developers/documentation/product-guide/advanced-features/data-storage-management/instance-linking">Relational Apps & Instance Linking)</a>

</td>
</tr>
<tr>
</table>
<table>
<tr>
<td width="168">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="168">
X

</td>
<td width="19">
</td>
<td width="755">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="168">
Y

</td>
<td width="19">
</td>
<td width="755">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="168">
Sizes

</td>
<td width="19">
</td>
<td width="755">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="168">
Z-Index

</td>
<td width="19">
</td>
<td width="755">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="168">
Anchors

</td>
<td width="19">
</td>
<td width="755">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="168">
Align in Container

</td>
<td width="19">
</td>
<td width="755">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="168">
Rows

</td>
<td width="19">
</td>
<td width="755">
Define how many Rows in the widget

</td>
</tr>
<tr>
<td width="168">
Columns

</td>
<td width="19">
</td>
<td width="755">
Define how many Columns in the widget

</td>
</tr>
<tr>
<td width="168">
Cells Size

</td>
<td width="19">
</td>
<td width="755">
Set the Size of the Cells. Append % for percentage of total, append 'px' (or leave empty) for defined pixel width.  If you leave a cell empty, it will allocate the remaining available space to that cell.

</td>
</tr>
<tr>
<td width="168">
Cells Style

</td>
<td width="19">
</td>
<td width="755">
Where you can set the style of the Cells

</td>
</tr>
<tr>
<td width="168">
Repeat

</td>
<td width="19">
</td>
<td width="755">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a>.

</td>
</tr>
</table>
<table>
<tr>
<td width="168">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="168">
Drag and Drop

</td>
<td width="19">
</td>
<td width="755">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="168">
Resizing

</td>
<td width="19">
</td>
<td width="755">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="168">
Visible

</td>
<td width="19">
</td>
<td width="755">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="168">
Read only

</td>
<td width="19">
</td>
<td width="755">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="168">
Enable

</td>
<td width="19">
</td>
<td width="755">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
</table>
<table>
<tr>
<td width="168">
<a id="data"> </a> <b>Data</b>

</td>
<td width="19">
</td>
<td width="755">

</td>
</tr>
<tr>
<td width="168">
View

</td>
<td width="19">
</td>
<td width="755">
Select the view to use

</td>
</tr>
<tr>
<td width="168">
Fields

</td>
<td width="19">
</td>
<td width="755">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="168">
Group By

</td>
<td width="19">
</td>
<td width="755">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="168">
Order By

</td>
<td width="19">
</td>
<td width="755">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="168">
Filter

</td>
<td width="19">
</td>
<td width="755">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="168">
Listen

</td>
<td width="19">
</td>
<td width="755">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="168">
Auto Load

</td>
<td width="19">
</td>
<td width="755">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="168">
Key Fields

</td>
<td width="19">
</td>
<td width="755">
Set to map View fields. For use in writing data back out to connected database tables

</td>
</tr>
</table>
<table>
<tr>
<td width="168">
<a id="style"> </a> <b>Style</b>

</td>
<td width="19">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="168">
Opacity

</td>
<td width="19">
</td>
<td width="755">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="168">
Margin

</td>
<td width="19">
</td>
<td width="755">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="168">
Border

</td>
<td width="19">
</td>
<td width="755">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="168">
Border Radius

</td>
<td width="19">
</td>
<td width="755">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="168">
BG Color

</td>
<td width="19">
</td>
<td width="755">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="168">
BG Image

</td>
<td width="19">
</td>
<td width="755">
This specifies a background image to your Container

</td>
</tr>
<tr>
<td width="168">
BG Repeat

</td>
<td width="19">
</td>
<td width="755">
This specifies how a BG Image can repeat behind your Container (Repeat, Repeat X, Repeat Y)

</td>
</tr>
<tr>
<td width="168">
Display Hourglass Over

</td>
<td width="19">
</td>
<td width="755">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="168">
Hourglass Animation

</td>
<td width="19">
</td>
<td width="755">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="168">
Custom CSS Classes

</td>
<td width="19">
</td>
<td width="755">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="168">
Widget Style

</td>
<td width="19">
</td>
<td width="755">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="19">
</td>
<td width="128">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="19">
</td>
<td width="128">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="19">
</td>
<td width="128">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Data Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/8Aea0YOOGO8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Using Tables in Adaptive Layout [3:10]
