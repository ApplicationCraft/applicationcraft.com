---
title: "Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


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
Internal class name of the widget.- CircleMenu

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
Items

</td>
<td width="21">
</td>
<td width="782">
This is where you can prefill your list/dropdown widgets either manually or by importing a CSV list stored as a resource. See [Prefill](../../../../widget-properties-events/prefill) . The top entry is where you can enter text to show in the main item

</td>
</tr>
<tr>
<td width="138">
Start Angle

</td>
<td width="21">
</td>
<td width="782">
Specify the start position of the items in relation to the center, measured in degrees where 0/360 are on the right and angle travels in a clockwise direction. An alternative to the Direction option, if you want more control

</td>
</tr>
<tr>
<td width="138">
End Angle

</td>
<td width="21">
</td>
<td width="782">
Specify the end position of the items in relation to the center, measured in degrees where 0/360 are on the right and angle travels in a clockwise direction. An alternative to the Direction option, if you want more control

</td>
</tr>
<tr>
<td width="138">
Circle Radius

</td>
<td width="21">
</td>
<td width="782">
Define the radius of the circle that determines the distance of the items from the center.

</td>
</tr>
<tr>
<td width="138">
Delay

</td>
<td width="21">
</td>
<td width="782">
When the menu is triggered on hover, the delay is the amount of time before the items will move back in to the center, measured in milliseconds.

</td>
</tr>
<tr>
<td width="138">
Direction

</td>
<td width="21">
</td>
<td width="782">
The direction of the items in relation to the center. top will place the items above the center, in a 90 degree semicircle centered upwards. top-half will create a full 180 degree semicircle. full will create a full 360 degree circle, with the first item appearing at the top

</td>
</tr>
<tr>
<td width="138">
Item Diameter

</td>
<td width="21">
</td>
<td width="782">
The diameter of each item, in pixels. Used to set the CSS properties of each item including width, height, and border-radius.

</td>
</tr>
<tr>
<td width="138">
Speed

</td>
<td width="21">
</td>
<td width="782">
The animation speed, in milliseconds. The number given is the total amount of time it will take for the items to move in or out from the center.

</td>
</tr>
<tr>
<td width="138">
StepIn

</td>
<td width="21">
</td>
<td width="782">
The number of milliseconds between each item moving in to the center when the menu closes. A negative value will cause the menu to close in reverse, starting with the last item.

</td>
</tr>
<tr>
<td width="138">
StepOut

</td>
<td width="21">
</td>
<td width="782">
The number of milliseconds between each item moving out from the center when the menu opens. A negative value will cause the menu to open in reverse, starting with the last item.

</td>
</tr>
<tr>
<td width="138">
Transition Function

</td>
<td width="21">
</td>
<td width="782">
Options: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) Default: ease

The CSS timing function used to control the open/close animation.

</td>
</tr>
<tr>
<td width="138">
Trigger

</td>
<td width="21">
</td>
<td width="782">
How the menu is triggered to open and close, whether by hovering over the center item or clicking on it.

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
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../../content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="137">
Repeat

</td>
<td width="23">
</td>
<td width="782">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../../content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../../content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

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
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="135">
Group By

</td>
<td width="25">
</td>
<td width="782">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="135">
Order By

</td>
<td width="25">
</td>
<td width="782">
Specifies the order in which data is presented to the Widget.  Read the [Order By](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/order-by) section for more details.

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
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="135">
Broadcast

</td>
<td width="25">
</td>
<td width="782">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="135">
Listen

</td>
<td width="25">
</td>
<td width="782">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="135">
Reset Filter

</td>
<td width="25">
</td>
<td width="782">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](../../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/reset-filter) section for more details.

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
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../../content-and-app-layout/introduction/setting-a-margin)

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
Font

</td>
<td width="10">
</td>
<td width="782">
Define the Font for items in the menu

</td>
</tr>
<tr>
<td width="150">
Color

</td>
<td width="10">
</td>
<td width="782">
Define the Font Color of items in the menu

</td>
</tr>
<tr>
<td width="150">
Item Bg Color

</td>
<td width="10">
</td>
<td width="782">
Define the Background Color of the Menu Items

</td>
</tr>
<tr>
<td width="150">
Custom CSS Classes

</td>
<td width="10">
</td>
<td width="782">
## Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../../advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="150">
Widget Style

</td>
<td width="10">
</td>
<td width="782">
This refers to the [Theme entry](../../../content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

