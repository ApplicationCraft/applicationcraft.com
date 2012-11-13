---
title: "Timeline"
active_menu_item: developers
class_name: developers
full_width: true
---


Display time based events in a really cool, scrollable, zoomable Timeline. It includes an attached Treeview that lets you subdivide your time based events. Everything is customizable and you can bind it to any Data View as well as being able to populate it through the AC API.

See: [Working with the Timeline Widget](/developers/user-guide/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

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
Internal class name of the widget.- WiziCore\_UI\_TimelineWidget

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
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

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
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

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
Timeline Width

</td>
<td width="15">
</td>
<td width="779">
Width of the Timeline section. Should be less that Width of the widget

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
<td width="149">
<a id="behavior"> </a> **Behavior**

</td>
<td width="15">
</td>
<td width="778">
</td>
</tr>
<tr>
<td width="149">
Drag and Drop

</td>
<td width="15">
</td>
<td width="778">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="149">
Resizing

</td>
<td width="15">
</td>
<td width="778">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="149">
Visible

</td>
<td width="15">
</td>
<td width="778">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="149">
Enable

</td>
<td width="15">
</td>
<td width="778">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="149">
Timeline Visible

</td>
<td width="15">
</td>
<td width="778">
Set to false to hide the timeline

</td>
</tr>
<tr>
<td width="149">
Treeview Visible

</td>
<td width="15">
</td>
<td width="778">
Set to false to hide the treeview

</td>
</tr>
<tr>
<td width="149">
Timeline Min Date

</td>
<td width="15">
</td>
<td width="778">
Set the timeline min data

</td>
</tr>
<tr>
<td width="149">
Timeline Max Date

</td>
<td width="15">
</td>
<td width="778">
Set the timeline max date

</td>
</tr>
<tr>
<td width="149">
Show Bubble

</td>
<td width="15">
</td>
<td width="778">
Set to true to show details in bubble pop up

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="15">
</td>
<td width="778">
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
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="15">
</td>
<td width="779">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="15">
</td>
<td width="779">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Filter

</td>
<td width="15">
</td>
<td width="779">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="148">
Drill Filter

</td>
<td width="15">
</td>
<td width="779">
  This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter">Drill Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="15">
</td>
<td width="779">
  Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast">Broadcast</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="15">
</td>
<td width="779">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="15">
</td>
<td width="779">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Columns

</td>
<td width="15">
</td>
<td width="779">
Select this property to add and manage columns

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
<td width="21">
</td>
<td width="773">
</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="21">
</td>
<td width="773">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="21">
</td>
<td width="773">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="148">
Border

</td>
<td width="21">
</td>
<td width="773">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Shadow

</td>
<td width="21">
</td>
<td width="773">
Specify the shadow properties of the Widget

</td>
</tr>
<tr>
<td width="148">
BG Color

</td>
<td width="21">
</td>
<td width="773">
Specify the background color of the Widget

</td>
</tr>
<tr>
<td width="148">
Tree BG

</td>
<td width="21">
</td>
<td width="773">
Specify the background color of the Treeview

</td>
</tr>
<tr>
<td width="148">
Timeline BG

</td>
<td width="21">
</td>
<td width="773">
Specify the background color of the Timeline

</td>
</tr>
<tr>
<td width="148">
Grid Line Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the Grid Lines

</td>
</tr>
<tr>
<td width="148">
Grid Line Opacity

</td>
<td width="21">
</td>
<td width="773">
This % value specifies the transparency of the Grid Lines

</td>
</tr>
<tr>
<td width="148">
Timeline Label Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the Timeline Label

</td>
</tr>
<tr>
<td width="148">
Timeline Item Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the Timeline Items

</td>
</tr>
<tr>
<td width="148">
Vertical Align

</td>
<td width="21">
</td>
<td width="773">
Top/Center/Bottom. Set to align the label text within the Timeline

</td>
</tr>
<tr>
<td width="148">
Tree Item Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the Treeview Items

</td>
</tr>
<tr>
<td width="148">
Tree Item Font

</td>
<td width="21">
</td>
<td width="773">
Specify the font of the Treeview Items

</td>
</tr>
<tr>
<td width="148">
Tree Selected Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the selected Tree

</td>
</tr>
<tr>
<td width="148">
Tree Selected Border

</td>
<td width="21">
</td>
<td width="773">
Specify the border of the selected Tree

</td>
</tr>
<tr>
<td width="148">
Timeline Item Font

</td>
<td width="21">
</td>
<td width="773">
Specify the font of the Timeline Items

</td>
</tr>
<tr>
<td width="148">
Timeline X Font

</td>
<td width="21">
</td>
<td width="773">
Specify the font of the X axis labeling

</td>
</tr>
<tr>
<td width="148">
Timeline X Color

</td>
<td width="21">
</td>
<td width="773">
Specify the color of the X axis labeling

</td>
</tr>
<tr>
<td width="148">
Tree Icon Size

</td>
<td width="21">
</td>
<td width="773">
Specify the size of the Treeview Icons

</td>
</tr>
<tr>
<td width="148">
Timeline Icon Size

</td>
<td width="21">
</td>
<td width="773">
Specify the size of the Timeline Icons

</td>
</tr>
<tr>
<td width="148">
Tree Node Icon

</td>
<td width="21">
</td>
<td width="773">
Set the Tree Node icon

</td>
</tr>
<tr>
<td width="148">
Tree Leaf Icon

</td>
<td width="21">
</td>
<td width="773">
Set the Tree Leaf icon

</td>
</tr>
<tr>
<td width="148">
Timeline Event Icon

</td>
<td width="21">
</td>
<td width="773">
Set the Timeline Event icon

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="21">
</td>
<td width="773">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/user-guide/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="21">
</td>
<td width="773">
  This refers to the <a href="/developers/user-guide/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
<td width="15">
</td>
<td width="169">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="15">
</td>
<td width="169">
  <a href="/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events">General Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="169">
On Item Click

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="169">
On Item Dbl Click

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="169">
On Item Mouse Enter

</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="169">
On Item Mouse Leave

</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="169">
On Bubble Close

</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="169">
On Bubble Click

</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="169">
On Scroll

</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="169">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="169">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="169">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Working with the Timeline Widget](/developers/user-guide/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)
 - [Timeline Object Functions](/developers/user-guide/scripting-apis/client-api/widget-object-functions/timeline/)

