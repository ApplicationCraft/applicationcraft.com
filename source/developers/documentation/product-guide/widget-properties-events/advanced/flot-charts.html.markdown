---
old_url: flot_charts.htm
title: "Flot Charts"
active_menu_item: developers
class_name: developers
full_width: true
---


Flot Charts can be configured to show different chart types and optimised for Mobile apps

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
Internal class name of the widget.- WiziCore\_UI\_flotChartBaseWidget

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
Chart Type

</td>
<td width="21">
</td>
<td width="782">
Columns/Line/Area/Bars/Pie/Doughnut/Radar. Select the type of chart

</td>
</tr>
<tr>
<td width="138">
Multiserial

</td>
<td width="21">
</td>
<td width="782">
Brings up dialog to set data series with various data.

</td>
</tr>
<tr>
<td width="138">
</td>
<td width="21">
</td>
<td width="782">
</td>
</tr>
</table>
<table>
<tr>
<td width="137">
<a id="layout"> </a> **Layout**

</td>
<td width="25">
</td>
<td width="780">
</td>
</tr>
<tr>
<td width="137">
Percent Width

</td>
<td width="25">
</td>
<td width="780">
  For Flot Chart widget, where you can change the width of the container relative to the width of a parent container. Used in 'Relative Mode'. See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout">Absolute & Relative Positioning</a>

</td>
</tr>
<tr>
<td width="137">
## X

</td>
<td width="25">
</td>
<td width="780">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="137">
Y

</td>
<td width="25">
</td>
<td width="780">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="137">
Width

</td>
<td width="25">
</td>
<td width="780">
Width of the Widget in pixels.

</td>
</tr>
<tr>
<td width="137">
Height

</td>
<td width="25">
</td>
<td width="780">
Height of the Widget in pixels.

</td>
</tr>
<tr>
<td width="137">
Repeat

</td>
<td width="25">
</td>
<td width="780">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="137">
Z-Index

</td>
<td width="25">
</td>
<td width="780">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="137">
Anchors

</td>
<td width="25">
</td>
<td width="780">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="137">
Align in Container

</td>
<td width="25">
</td>
<td width="780">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="137">
</td>
<td width="25">
</td>
<td width="780">
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
Drag and Drop

</td>
<td width="25">
</td>
<td width="782">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="135">
Resizing

</td>
<td width="25">
</td>
<td width="782">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

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
BG Image

</td>
<td width="10">
</td>
<td width="782">
This specifies a background image to your App (i.e. behind your app pages)

</td>
</tr>
<tr>
<td width="150">
BG Repeat

</td>
<td width="10">
</td>
<td width="782">
This is where you can specify how a BG Image can repeat behind your App (Repeat, Repeat X, Repeat Y)

</td>
</tr>
<tr>
<td width="150">
BG Color

</td>
<td width="10">
</td>
<td width="782">
This specifies a default background color of the App. .

</td>
</tr>
<tr>
<td width="150">
Outline Color

</td>
<td width="10">
</td>
<td width="782">
This specifies the outline color of the Widget

</td>
</tr>
<tr>
<td width="150">
Margin

</td>
<td width="10">
</td>
<td width="782">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="150">
Color Ranges

</td>
<td width="10">
</td>
<td width="782">
Set the range of colors to use for value ranges

</td>
</tr>
<tr>
<td width="150">
Display Hourglass Over

</td>
<td width="10">
</td>
<td width="782">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="150">
Hourglass Animation

</td>
<td width="10">
</td>
<td width="782">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="150">
Custom CSS Classes

</td>
<td width="10">
</td>
<td width="782">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="150">
Widget Style

</td>
<td width="10">
</td>
<td width="782">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
<tr>
<td width="150">
</td>
<td width="10">
</td>
<td width="782">
</td>
</tr>
</table>
<table>
<tr>
<td width="135">
<a id="data"> </a> **Data**

</td>
<td width="25">
</td>
<td width="782">
</td>
</tr>
<tr>
<td width="135">
View

</td>
<td width="25">
</td>
<td width="782">
Select the view to use

</td>
</tr>
<tr>
<td width="135">
Fields

</td>
<td width="25">
</td>
<td width="782">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Group By

</td>
<td width="25">
</td>
<td width="782">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Order By

</td>
<td width="25">
</td>
<td width="782">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Filter

</td>
<td width="25">
</td>
<td width="782">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="135">
Drill Filter

</td>
<td width="25">
</td>
<td width="782">
  This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter">Drill Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Broadcast

</td>
<td width="25">
</td>
<td width="782">
  Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast">Broadcast</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Listen

</td>
<td width="25">
</td>
<td width="782">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Drill Type

</td>
<td width="25">
</td>
<td width="782">
  This indicates how a Widget should behave when it is clicked on and results in a Drill Down operation. See <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-type">Drill Type</a>

</td>
</tr>
<tr>
<td width="135">
Reset Filter

</td>
<td width="25">
</td>
<td width="782">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="135">
Auto Load

</td>
<td width="25">
</td>
<td width="782">
Set to true to automatically fetch data from assigned view.

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
<td width="135">
<a id="chart"> </a> **Chart**

</td>
<td width="25">
</td>
<td width="782">
</td>
</tr>
<tr>
<td width="135">
Legend Position

</td>
<td width="25">
</td>
<td width="782">
Sets the position of the Legend, (or hide)

</td>
</tr>
<tr>
<td width="135">
Legend BG Color

</td>
<td width="25">
</td>
<td width="782">
Sets background color of the legend.

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
<td width="135">
<a id="canvas"> </a> **Canvas**

</td>
<td width="23">
</td>
<td width="784">
</td>
</tr>
<tr>
<td width="135">
Border Color

</td>
<td width="23">
</td>
<td width="784">
Sets the background color of the area around the chart canvas.

</td>
</tr>
<tr>
<td width="135">
Border Thickness

</td>
<td width="23">
</td>
<td width="784">
Sets the thickness of the border around the chart canvas

</td>
</tr>
<tr>
<td width="135">
BG Color

</td>
<td width="23">
</td>
<td width="784">
Brings up a dialog to choose the color of the background canvas.

</td>
</tr>
<tr>
<td width="135">
Step Size

</td>
<td width="23">
</td>
<td width="784">
Set the size of the Steps

</td>
</tr>
<tr>
<td width="135">
</td>
<td width="23">
</td>
<td width="784">
</td>
</tr>
</table>
<table>
<tr>
<td width="135">
<a id="x-axis"> </a> **X-Axis**

</td>
<td width="21">
</td>
<td width="785">
</td>
</tr>
<tr>
<td width="135">
Title

</td>
<td width="21">
</td>
<td width="785">
X Axis Title

</td>
</tr>
<tr>
<td width="135">
Label Display

</td>
<td width="21">
</td>
<td width="785">
There are a number of options: Normal, uses labels underneath each column. Wrap, multiple line text. Stagger 2 Lines, labels are staggered across 2 lines. Stagger 3 Lines, labels are staggered across 3 lines. Rotate 45, all labels rotated 45 degrees. Rotate 90, all labels rotated 90 degrees.

</td>
</tr>
<tr>
<td width="135">
Show grid lines

</td>
<td width="21">
</td>
<td width="785">
true/false. Set to true to show grid lines

</td>
</tr>
<tr>
<td width="135">
Show Labels

</td>
<td width="21">
</td>
<td width="785">
Boolean field, set true to display labels, false to hide labels.

</td>
</tr>
<tr>
<td width="135">
</td>
<td width="21">
</td>
<td width="785">
</td>
</tr>
</table>
<table>
<tr>
<td width="134">
<a id="y-axis"> </a> **Y-Axis**

</td>
<td width="22">
</td>
<td width="786">
</td>
</tr>
<tr>
<td width="134">
Title

</td>
<td width="22">
</td>
<td width="786">
Y-Axis Title

</td>
</tr>
<tr>
<td width="134">
Min Value

</td>
<td width="22">
</td>
<td width="786">
Sets the minimum value of the Y-Axis

</td>
</tr>
<tr>
<td width="134">
Max Value

</td>
<td width="22">
</td>
<td width="786">
Sets the maximum value of the Y-Axis

</td>
</tr>
<tr>
<td width="134">
Show grid lines

</td>
<td width="22">
</td>
<td width="786">
true/false. Set to true to show grid lines

</td>
</tr>
<tr>
<td width="134">
Show Labels

</td>
<td width="22">
</td>
<td width="786">
Boolean field, set true to display labels, false to hide labels.

</td>
</tr>
<tr>
<td width="134">
</td>
<td width="22">
</td>
<td width="786">
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
<td width="108">
</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="15">
</td>
<td width="108">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events">General Events</a>

</td>
<td width="17">
</td>
<td width="128">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="108">
On Change

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
<td width="15">
</td>
<td width="108">
</td>
<td width="17">
</td>
<td width="128">
On Data Reset

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
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
<td width="15">
</td>
<td width="108">
</td>
<td width="17">
</td>
<td width="128">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [General Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Data Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events)
 - [Zingchart](/developers/documentation/product-guide/widget-properties-events/beta/zingchart) (Beta)

