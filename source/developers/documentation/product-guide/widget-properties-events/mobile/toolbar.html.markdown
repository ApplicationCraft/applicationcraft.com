---
title: "Toolbar"
active_menu_item: developers
class_name: developers
full_width: true
---


The Mobile Toolbar is a container type widget that has explicit mobile device support. It generally used to contain Mobile Button widgets and would normally be positioned at the top or bottom of a page. Even though it is intended as a mobile widget, it can be used just as well on the desktop.

![mobtoolbar](/img/docs/mobtoolbar.png)

In the above image, you will see that when you drag a Mobile Action Button widget into the Toolbar, it is automatically drawn smaller than if it is elsewhere on the page.

<table>
<tr>
<td width="176">
<a id="general"> </a> **General**

</td>
<td width="22">
</td>
<td width="744">
</td>
</tr>
<tr>
<td width="176">
Widget Class

</td>
<td width="22">
</td>
<td width="744">
Internal class name of the widget.- WiziCore\_UI\_ContainerMobileWidget

</td>
</tr>
<tr>
<td width="176">
Name

</td>
<td width="22">
</td>
<td width="744">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="176">
<table>
<tr>
<td width="148">
Layout

</td>
</tr>
</table>
</td>
<td width="22">
</td>
<td width="744">
  Absolute/Relative. Select Relative to enable your container to resize to the available browser size. See: <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout">Absolute and Relative Layout</a>

</td>
</tr>
<tr>
<td width="176">
</td>
<td width="22">
</td>
<td width="744">
</td>
</tr>
<tr>
<td width="176">
<table>
<tr>
<td width="148">
<a id="database"> </a> **Database**

</td>
</tr>
</table>
</td>
<td width="22">
</td>
<td width="744">
</td>
</tr>
<tr>
<td width="176">
Allow Foreign App Writing

</td>
<td width="22">
</td>
<td width="744">
Select to true to allow other apps to write into the container

</td>
</tr>
<tr>
<td width="176">
Automatic Relationships

</td>
<td width="22">
</td>
<td width="744">
  Where you can set the relationships to other apps (see <a href="/developers/documentation/product-guide/advanced-features/data-storage-management/instance-linking">Relational Apps & Instance Linking)</a>

</td>
</tr>
<tr>
<td width="176">
</td>
<td width="22">
</td>
<td width="744">
</td>
</tr>
</table>
<table>
<tr>
<td width="177">
<a id="layout"> </a> **Layout**

</td>
<td width="20">
</td>
<td width="745">
</td>
</tr>
<tr>
<td width="177">
## X

</td>
<td width="20">
</td>
<td width="745">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="177">
Y

</td>
<td width="20">
</td>
<td width="745">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="177">
Sizes

</td>
<td width="20">
</td>
<td width="745">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="177">
Z-Index

</td>
<td width="20">
</td>
<td width="745">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="177">
Anchors

</td>
<td width="20">
</td>
<td width="745">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="177">
Align in Container

</td>
<td width="20">
</td>
<td width="745">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="177">
Repeat

</td>
<td width="20">
</td>
<td width="745">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="177">
Scrolling

</td>
<td width="20">
</td>
<td width="745">
None/Auto/Vertical/Horizontal. Allows you to set the scrolling behaviour. Please note that performance of scrolling can be poor on older devices (e.g.Android 2.2, iPhone3)

</td>
</tr>
<tr>
<td width="177">
</td>
<td width="20">
</td>
<td width="745">
</td>
</tr>
</table>
<table>
<tr>
<td width="177">
<a id="behavior"> </a> **Behavior**

</td>
<td width="21">
</td>
<td width="744">
</td>
</tr>
<tr>
<td width="177">
Drag and Drop

</td>
<td width="21">
</td>
<td width="744">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="177">
Resizing

</td>
<td width="21">
</td>
<td width="744">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="177">
Visible

</td>
<td width="21">
</td>
<td width="744">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="177">
Read Only

</td>
<td width="21">
</td>
<td width="744">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="177">
Enable

</td>
<td width="21">
</td>
<td width="744">
Set to false to leave the Widget visible but to prevent any user interaction.

</td>
</tr>
<tr>
<td width="177">
</td>
<td width="21">
</td>
<td width="744">
</td>
</tr>
</table>
<table>
<tr>
<td width="178">
<a id="data"> </a> **Data**

</td>
<td width="20">
</td>
<td width="744">
</td>
</tr>
<tr>
<td width="178">
View

</td>
<td width="20">
</td>
<td width="744">
Select the view to use

</td>
</tr>
<tr>
<td width="178">
Fields

</td>
<td width="20">
</td>
<td width="744">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="178">
Group By

</td>
<td width="20">
</td>
<td width="744">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="178">
Order By

</td>
<td width="20">
</td>
<td width="744">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="178">
Filter

</td>
<td width="20">
</td>
<td width="744">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="178">
Listen

</td>
<td width="20">
</td>
<td width="744">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="178">
Reset Filter

</td>
<td width="20">
</td>
<td width="744">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="178">
Auto Load

</td>
<td width="20">
</td>
<td width="744">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="20">
</td>
<td width="744">
</td>
</tr>
</table>
<table>
<tr>
<td width="179">
<a id="style"> </a> **Style**

</td>
<td width="20">
</td>
<td width="743">
</td>
</tr>
<tr>
<td width="179">
Opacity

</td>
<td width="20">
</td>
<td width="743">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="179">
Border

</td>
<td width="20">
</td>
<td width="743">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="179">
Border Radius

</td>
<td width="20">
</td>
<td width="743">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="179">
Margin

</td>
<td width="20">
</td>
<td width="743">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="179">
Mobile Theme

</td>
<td width="20">
</td>
<td width="743">
  Where you can set the Theme colors for the widget. See <a href="/developers/documentation/product-guide/mobile-apps-sites/mobile-themes">Mobile Themes</a>

</td>
</tr>
<tr>
<td width="179">
Fixed

</td>
<td width="20">
</td>
<td width="743">
  Not Fixed/Top/Bottom/Static Top/Static Bottom. Select Top or Bottom for the toolbar to be set to the top/bottom of the page. Select Static Top/Bottom to exclude the toolbar from <a href="/developers/documentation/product-guide/mobile-apps-sites/page-transition-effects">Page Transition Effects</a>

</td>
</tr>
<tr>
<td width="179">
Display Hourglass Over

</td>
<td width="20">
</td>
<td width="743">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="179">
Hourglass Animation

</td>
<td width="20">
</td>
<td width="743">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="179">
Custom CSS Classes

</td>
<td width="20">
</td>
<td width="743">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="179">
Widget Style

</td>
<td width="20">
</td>
<td width="743">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>
