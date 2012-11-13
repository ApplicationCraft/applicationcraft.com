---
title: "Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


<table>
<tr>
<th style="vertical-align:top; width:147px; background-color:#ffffff;">
<a id="general"> </a> **General**

</th>
<th style="vertical-align:top; width:47px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:753px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="147">
Widget Class

</td>
<td width="47">
</td>
<td width="753">
Internal class name of the widget. - Calendar

</td>
</tr>
<tr>
<td width="147">
Name

</td>
<td width="47">
</td>
<td width="753">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="147">
Locale

</td>
<td width="47">
</td>
<td width="753">
Specify the 'locale'

</td>
</tr>
<tr>
<td width="147">
Min Date

</td>
<td width="47">
</td>
<td width="753">
Specify the earliest date available

</td>
</tr>
<tr>
<td width="147">
Max Date

</td>
<td width="47">
</td>
<td width="753">
Specify the latest date available

</td>
</tr>
<tr>
<td width="147">
Initial Date

</td>
<td width="47">
</td>
<td width="753">
Specify the default date highlighted

</td>
</tr>
<tr>
<td width="147">
</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
<a id="layout"> </a> **Layout**

</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
## X

</td>
<td width="47">
</td>
<td width="753">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="147">
Y

</td>
<td width="47">
</td>
<td width="753">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="147">
Sizes

</td>
<td width="47">
</td>
<td width="753">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="147">
Z-Index

</td>
<td width="47">
</td>
<td width="753">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="147">
</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
</table>
<table>
<tr>
<td width="144">
<a id="behavior"> </a> **Behavior**

</td>
<td width="53">
</td>
<td width="745">
</td>
</tr>
<tr>
<td width="144">
Resizing

</td>
<td width="53">
</td>
<td width="745">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="144">
Visible

</td>
<td width="53">
</td>
<td width="745">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="144">
Enable

</td>
<td width="53">
</td>
<td width="745">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="144">
</td>
<td width="53">
</td>
<td width="745">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> **Data**

</td>
<td width="48">
</td>
<td width="746">
</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="48">
</td>
<td width="746">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="48">
</td>
<td width="746">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="48">
</td>
<td width="746">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="48">
</td>
<td width="746">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Filter

</td>
<td width="48">
</td>
<td width="746">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="148">
Drill Filter

</td>
<td width="48">
</td>
<td width="746">
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="48">
</td>
<td width="746">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="48">
</td>
<td width="746">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="48">
</td>
<td width="746">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="48">
</td>
<td width="746">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:174px; background-color:#ffffff;">
<a id="style"> </a> **Style**

</th>
<th style="vertical-align:top; width:20px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:748px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="174">
BG Color

</td>
<td width="20">
</td>
<td width="748">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="174">
Opacity

</td>
<td width="20">
</td>
<td width="748">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="174">
Border

</td>
<td width="20">
</td>
<td width="748">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="174">
Border Radius

</td>
<td width="20">
</td>
<td width="748">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="174">
Shadow

</td>
<td width="20">
</td>
<td width="748">
Specify Shadow effect

</td>
</tr>
<tr>
<td width="174">
Font

</td>
<td width="20">
</td>
<td width="748">
Indicates the main font used by the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="174">
Prev. Month Days Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the previous month

</td>
</tr>
<tr>
<td width="174">
Next. Month Days Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the next month

</td>
</tr>
<tr>
<td width="174">
Today Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of today

</td>
</tr>
<tr>
<td width="174">
Weekend Days Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the Weekend Days

</td>
</tr>
<tr>
<td width="174">
Disabled Days Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the Disabled Days

</td>
</tr>
<tr>
<td width="174">
Selection BG Color

</td>
<td width="20">
</td>
<td width="748">
Specify the background color of the selection

</td>
</tr>
<tr>
<td width="174">
Mouse Over BG Color

</td>
<td width="20">
</td>
<td width="748">
Specify the background color as you 'Mouse Over'

</td>
</tr>
<tr>
<td width="174">
Day Border Top Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the selected Day Top border

</td>
</tr>
<tr>
<td width="174">
Day Border Right Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the selected Day Right border

</td>
</tr>
<tr>
<td width="174">
Day Border Bottom Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the selected Day Bottom border

</td>
</tr>
<tr>
<td width="174">
Day Border Left Color

</td>
<td width="20">
</td>
<td width="748">
Specify the color of the selected Day Left border

</td>
</tr>
</table>

