---
old_url: panel.htm
title: "Panel"
active_menu_item: developers
class_name: developers
full_width: true
---


The Panel Container acts in a similar way to a group. It is especially useful when you want to position a collection of Widgets together on the page, so they can be moved together saving you lots of time during the design stage. The panel can be set to stay in the same relative position when the page is resized on a docked page. For example if you want to keep Widgets centered on a docked page you can set the anchoring property of the Panel Container to top. The style properties of the Container can also be altered, so it provides a method of clearly grouping Widgets using borders, curved edges and backgrounds etc.

When using the Panel, you first size the Container on the page as you would an image. To place Widgets inside the Container, you must drop the Widgets into the App before moving them into the Panel Container. The Panel Container will become darker as a Widget is dropped inside it.

<table>
<tr>
<td width="171">
<a id="general"> </a> **General**

</td>
<td width="22">
</td>
<td width="749">
</td>
</tr>
<tr>
<td width="171">
Widget Class

</td>
<td width="22">
</td>
<td width="749">
Internal class name of the widget.- WiziCore\_UI\_PanelContainerWidget

</td>
</tr>
<tr>
<td width="171">
Name

</td>
<td width="22">
</td>
<td width="749">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="171">
Layout

</td>
<td width="22">
</td>
<td width="749">
  Absolute/Relative. Select Relative to enable your container to resize to the available browser size. See: <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout">Absolute & Relative Positioning</a>

</td>
</tr>
<tr>
<td width="171">
Adaptive Layout

</td>
<td width="22">
</td>
<td width="749">
  Where you can define layout rules for specific browser sizes. See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/adaptive-layout-rules">Adaptive Layout Overview</a>

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
<th style="vertical-align:top; width:172px; background-color:#ffffff;">
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
<th style="vertical-align:top; width:21px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:754px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="172">
Allow Foreign App Writing

</td>
<td width="21">
</td>
<td width="754">
Select to true to allow other apps to write into the container and to allow writing out

</td>
</tr>
<tr>
<td width="172">
Automatic Relationships

</td>
<td width="21">
</td>
<td width="754">
  Where you can set the relationships to other apps (see <a href="/developers/documentation/product-guide/advanced-features/data-storage-management/instance-linking">Relational Apps & Instance Linking)</a>

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
<td width="173">
<a id="layout"> </a> **Layout**

</td>
<td width="21">
</td>
<td width="748">
</td>
</tr>
<tr>
<td width="173">
## X

</td>
<td width="21">
</td>
<td width="748">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="173">
Y

</td>
<td width="21">
</td>
<td width="748">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="173">
Sizes

</td>
<td width="21">
</td>
<td width="748">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="173">
Z-Index

</td>
<td width="21">
</td>
<td width="748">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="173">
Anchors

</td>
<td width="21">
</td>
<td width="748">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="173">
Align in Container

</td>
<td width="21">
</td>
<td width="748">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="173">
Repeat

</td>
<td width="21">
</td>
<td width="748">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="173">
Scrolling

</td>
<td width="21">
</td>
<td width="748">
None/Auto/Vertical/Horizontal. Allows you to set the scrolling behaviour. Please note that performance of scrolling can be poor on older devices (e.g.Android 2.2, iPhone3)

</td>
</tr>
<tr>
<td width="173">
</td>
<td width="21">
</td>
<td width="748">
</td>
</tr>
</table>
<table>
<tr>
<td width="173">
<a id="behavior"> </a> **Behavior**

</td>
<td width="22">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="173">
Drag and Drop

</td>
<td width="22">
</td>
<td width="747">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="173">
Resizing

</td>
<td width="22">
</td>
<td width="747">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="173">
Visible

</td>
<td width="22">
</td>
<td width="747">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="173">
Read only

</td>
<td width="22">
</td>
<td width="747">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="173">
Enable

</td>
<td width="22">
</td>
<td width="747">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="173">
</td>
<td width="22">
</td>
<td width="747">
</td>
</tr>
</table>
<table>
<tr>
<td width="175">
<a id="data"> </a> **Data**

</td>
<td width="21">
</td>
<td width="746">

</td>
</tr>
<tr>
<td width="175">
View

</td>
<td width="21">
</td>
<td width="746">
Select the view to use

</td>
</tr>
<tr>
<td width="175">
Fields

</td>
<td width="21">
</td>
<td width="746">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="175">
Group By

</td>
<td width="21">
</td>
<td width="746">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="175">
Order By

</td>
<td width="21">
</td>
<td width="746">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="175">
Filter

</td>
<td width="21">
</td>
<td width="746">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="175">
Listen

</td>
<td width="21">
</td>
<td width="746">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="175">
Auto Load

</td>
<td width="21">
</td>
<td width="746">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="175">
Key Fields

</td>
<td width="21">
</td>
<td width="746">
Set to map View fields. For use in writing data back out to connected database tables

</td>
</tr>
<tr>
<td width="175">
</td>
<td width="21">
</td>
<td width="746">
</td>
</tr>
</table>
<table>
<tr>
<td width="178">
<a id="style"> </a> **Style**

</td>
<td width="19">
</td>
<td width="745">
</td>
</tr>
<tr>
<td width="178">
Opacity

</td>
<td width="19">
</td>
<td width="745">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="178">
Shadow

</td>
<td width="19">
</td>
<td width="745">
Specify Shadow effects

</td>
</tr>
<tr>
<td width="178">
Border

</td>
<td width="19">
</td>
<td width="745">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="178">
Border Radius

</td>
<td width="19">
</td>
<td width="745">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="178">
Margin

</td>
<td width="19">
</td>
<td width="745">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="178">
Padding

</td>
<td width="19">
</td>
<td width="745">
Used to specify the padding around widgets within the container when in Relative Mode. Commonly used in conjunction with Panel container Scrolling (see above)

</td>
</tr>
<tr>
<td width="178">
BG Color

</td>
<td width="19">
</td>
<td width="745">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="178">
Fixed

</td>
<td width="19">
</td>
<td width="745">
  Not Fixed/Top/Bottom/Static Top/Static Bottom. Select Top or Bottom for the container to be set to the top/bottom of the page. Select Static Top/Bottom to exclude the container from <a href="/developers/documentation/product-guide/mobile-apps-sites/page-transition-effects">Page Transition Effects</a>

</td>
</tr>
<tr>
<td width="178">
BG Image

</td>
<td width="19">
</td>
<td width="745">
This specifies a background image to your Container

</td>
</tr>
<tr>
<td width="178">
BG Repeat

</td>
<td width="19">
</td>
<td width="745">
This specifies how a BG Image can repeat behind your Container (Repeat, Repeat X, Repeat Y)

</td>
</tr>
<tr>
<td width="178">
Display Hourglass Over

</td>
<td width="19">
</td>
<td width="745">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="178">
Hourglass Animation

</td>
<td width="19">
</td>
<td width="745">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="178">
Custom CSS Classes

</td>
<td width="19">
</td>
<td width="745">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="178">
Widget Style

</td>
<td width="19">
</td>
<td width="745">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="180">
  <strong>Supported Events:</strong>

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="19">
</td>
<td width="135">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="180">
On Click

</td>
<td width="19">
</td>
<td width="135">
On Data Loaded

</td>
</tr>
<tr>
<td width="180">
On Double Click

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Mouse Down

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Mouse Up

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Mouse Enter

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Mouse Leave

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Drag Start

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Drag Stop

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Resize Start

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
<tr>
<td width="180">
On Resize Stop

</td>
<td width="19">
</td>
<td width="135">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Data Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/SW9LQrrosUI?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) The Importance of Containers [3:42]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/cHbncpuUwo8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Adaptive Rules [5:50]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]

