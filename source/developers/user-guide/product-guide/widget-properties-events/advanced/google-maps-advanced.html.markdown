---
title: "Google Maps Advanced"
active_menu_item: developers
class_name: developers
full_width: true
---


The purpose of this widget is to make working with maps as easy as it possibly can be. This means not just the visual map but also the many methods that the Google V3 Maps and Geocoding API incorporates.

<table>
<tr>
<th style="vertical-align:top; width:172px; background-color:#ffffff;">
<a id="general"> </a> **General**

</th>
<th style="vertical-align:top; width:21px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:754px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="172">
Widget Class

</td>
<td width="21">
</td>
<td width="754">
Internal class name of the widget. - GoogleMapsAdvanced

</td>
</tr>
<tr>
<td width="172">
Name

</td>
<td width="21">
</td>
<td width="754">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="172">
Google API Keys

</td>
<td width="21">
</td>
<td width="754">
Where you set your API key to use for tracking, use other paid services. or to prevent free(no Api key) restrictions

</td>
</tr>
<tr>
<td width="172">
Lat&Lng

</td>
<td width="21">
</td>
<td width="754">
This allows the user to specify the Latitude and Longitude of the map. To set this property from Javascript, you should use app.setValue('mapName', coord[]) where coord is an array with 2 elements, coord[0] is latitidue and coord[1] longitude. eg app.setValue("googleMapsAdvanced", [36.555, -111.222]);

</td>
</tr>
<tr>
<td width="172">
Show Marker

</td>
<td width="21">
</td>
<td width="754">
Indicates whether a Marker icon should be displayed at the map coordinates.

</td>
</tr>
<tr>
<td width="172">
Zoom

</td>
<td width="21">
</td>
<td width="754">
The default zoom level

</td>
</tr>
<tr>
<td width="172">
No Scroll

</td>
<td width="21">
</td>
<td width="754">
true/false. Set to false to disable map scrolling

</td>
</tr>
<tr>
<td width="172">
Map Controls

</td>
<td width="21">
</td>
<td width="754">
A dialog that allows you to specify which Map controls are visible (Map Type, Pan, Zoom, Scale, Overview Map, Streetview, Rotate)

</td>
</tr>
<tr>
<td width="172">
Libraries

</td>
<td width="21">
</td>
<td width="754">
A dialog that allows you to specify Google Map Libraries to use. See [Accessing the Google Object](../../advanced-important-widgets/google-v3-maps-widget/advanced-accessing-the-googl)

</td>
</tr>
<tr>
<td width="172">
</td>
<td width="21">
</td>
<td width="754">
</td>
</tr>
<tr>
<td width="172">
<a id="layout"> </a> **Layout**

</td>
<td width="21">
</td>
<td width="754">
</td>
</tr>
<tr>
<td width="172">
Aspect Ratio on Resize

</td>
<td width="21">
</td>
<td width="754">
Indicates whether the Map should maintain its aspect ratio should it be within a Vertical container and have its width or height automatically modified at any point at runtime.

</td>
</tr>
<tr>
<td width="172">
## X

</td>
<td width="21">
</td>
<td width="754">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="172">
Y

</td>
<td width="21">
</td>
<td width="754">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="172">
Sizes

</td>
<td width="21">
</td>
<td width="754">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="172">
Repeat

</td>
<td width="21">
</td>
<td width="754">
Find out more about this in [Repeating Widgets Across Multiple Pages](../../content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="172">
Z-Index

</td>
<td width="21">
</td>
<td width="754">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="172">
Anchors

</td>
<td width="21">
</td>
<td width="754">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="172">
Align in Container

</td>
<td width="21">
</td>
<td width="754">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="172">
</td>
<td width="21">
</td>
<td width="754">
</td>
</tr>
</table>
<table>
<tr>
<td width="174">
<a id="behavior"> </a> **Behavior**

</td>
<td width="20">
</td>
<td width="748">
</td>
</tr>
<tr>
<td width="174">
Drag and Drop

</td>
<td width="20">
</td>
<td width="748">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="174">
Resizing

</td>
<td width="20">
</td>
<td width="748">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="174">
Visible

</td>
<td width="20">
</td>
<td width="748">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="174">
Enable

</td>
<td width="20">
</td>
<td width="748">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="174">
</td>
<td width="20">
</td>
<td width="748">
</td>
</tr>
</table>
<table>
<tr>
<td width="174">
<a id="data"> </a> **Data**

</td>
<td width="18">
</td>
<td width="750">
See [todo] for explanation on how Integration works with the Advanced Maps Widget.

</td>
</tr>
<tr>
<td width="174">
View

</td>
<td width="18">
</td>
<td width="750">
Select the view to use

</td>
</tr>
<tr>
<td width="174">
Fields

</td>
<td width="18">
</td>
<td width="750">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="174">
Group By

</td>
<td width="18">
</td>
<td width="750">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="174">
Order By

</td>
<td width="18">
</td>
<td width="750">
Specifies the order in which data is presented to the Widget.  Read the [Order By](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="174">
Filter

</td>
<td width="18">
</td>
<td width="750">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="174">
Drill Filter

</td>
<td width="18">
</td>
<td width="750">
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="174">
Broadcast

</td>
<td width="18">
</td>
<td width="750">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="174">
Listen

</td>
<td width="18">
</td>
<td width="750">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="174">
Reset Filter

</td>
<td width="18">
</td>
<td width="750">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](../../advanced-features/data-integration,-reporting-dashboards/data-section-properties/reset-filter) section for more details.

</td>
</tr>
<tr>
<td width="174">
Auto Load

</td>
<td width="18">
</td>
<td width="750">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="174">
</td>
<td width="18">
</td>
<td width="750">
</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:176px; background-color:#ffffff;">
<a id="style"> </a> **Style**

</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:728px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="176">
Opacity

</td>
<td width="16">
</td>
<td width="728">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="176">
Border

</td>
<td width="16">
</td>
<td width="728">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="176">
Shadow

</td>
<td width="16">
</td>
<td width="728">
Control the shadow around the widget

</td>
</tr>
<tr>
<td width="176">
Margin

</td>
<td width="16">
</td>
<td width="728">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="176">
BG Color

</td>
<td width="16">
</td>
<td width="728">
Controls BG Color of whole container

</td>
</tr>
<tr>
<td width="176">
Widget Style

</td>
<td width="16">
</td>
<td width="728">
This refers to the [Theme entry](../../content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<th style="vertical-align:top; width:176px; background-color:#ffffff;">
<a id="style"> </a> **Marker Style**

</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:728px; background-color:#ffffff;">
See [Markers and Popup Windows](../../advanced-important-widgets/google-v3-maps-widget/working-with-overlays/markers-and-popup-windows) for information and examples.

</th>
</tr>
<tr>
<td width="176">
Default Marker Image

</td>
<td width="16">
</td>
<td width="728">
The default image to be used for markers. Using javascript, you can create individual images for each marker.

</td>
</tr>
</table>

<table>
<tr>
<th style="vertical-align:top; width:176px; background-color:#ffffff;">
<a id="style"> </a> **Default Overlay**

</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:728px; background-color:#ffffff;">
See [Working with Overlays](../../advanced-important-widgets/google-v3-maps-widget/working-with-overlays/) for information and examples.

</th>
</tr>
<tr>
<td width="176">
Stroke Color

</td>
<td width="16">
</td>
<td width="728">
The color of any lines drawn on the map.

</td>
</tr>
<tr>
<td width="176">
Stroke Opacity

</td>
<td width="16">
</td>
<td width="728">
Opacity of the lines.

</td>
</tr>
<tr>
<td width="176">
Stroke Weight

</td>
<td width="16">
</td>
<td width="728">
Thickness of the lines

</td>
</tr>
<tr>
<td width="176">
Fill Color

</td>
<td width="16">
</td>
<td width="728">
For rectangles, circles and areas, indicates the color within the lines

</td>
</tr>
<tr>
<td width="176">
Fill Opacity

</td>
<td width="16">
</td>
<td width="728">
For rectangles, circles and areas, indicates the opacity level of the color within the lines

</td>
</tr>
</table>

<table>
<tr>
<th style="vertical-align:top; width:176px; background-color:#ffffff;">
<a id="style"> </a> **Adsense**

</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:728px; background-color:#ffffff;">
See [Adsense](../../advanced-important-widgets/google-v3-maps-widget/googleadsense) for information and examples.

</th>
</tr>
<tr>
<td width="176">
Publisher ID

</td>
<td width="16">
</td>
<td width="728">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="176">
Channel Number

</td>
<td width="16">
</td>
<td width="728">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="176">
Format

</td>
<td width="16">
</td>
<td width="728">
Controls the radius size of curved border edges

</td>
</tr>
<tr>
<td width="176">
Position

</td>
<td width="16">
</td>
<td width="728">
Control the shadow around the widget

</td>
</tr>
</table>

## See Also

 - [Google V3 Maps Widget](../../advanced-important-widgets/google-v3-maps-widget/)

 - [Advanced Map Object Functions](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/)

