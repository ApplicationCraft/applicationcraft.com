---
old_url: calendarproperties.htm
title: "Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


<table>
<tr>
<td width="147">
<a id="general"> </a> <b>General</b>

</td>
<td width="47">
</td>
<td width="753">
</td>
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
</tr>
</table>
<table>
<tr>
<td width="147">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
X

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
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

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
<td width="147">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
Resizing

</td>
<td width="47">
</td>
<td width="753">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="144">
Visible

</td>
<td width="47">
</td>
<td width="753">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="147">
Enable

</td>
<td width="47">
</td>
<td width="753">
Set to false to leave the Widget visible but to prevent any user interaction

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
<td width="147">
<a id="data"> </a> <b>Data</b>

</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
View

</td>
<td width="47">
</td>
<td width="753">
Select the view to use

</td>
</tr>
<tr>
<td width="147">
Fields

</td>
<td width="47">
</td>
<td width="753">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Group By

</td>
<td width="47">
</td>
<td width="753">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Order By

</td>
<td width="47">
</td>
<td width="753">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Filter

</td>
<td width="47">
</td>
<td width="753">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="147">
Drill Filter

</td>
<td width="47">
</td>
<td width="753">
  This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter">Drill Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Broadcast

</td>
<td width="47">
</td>
<td width="753">
  Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast">Broadcast</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Listen

</td>
<td width="47">
</td>
<td width="753">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Reset Filter

</td>
<td width="47">
</td>
<td width="753">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="147">
Auto Load

</td>
<td width="47">
</td>
<td width="753">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
</table>
<table>
<tr>
<td width="147">
<a id="style"> </a> <b>Style</b>

</td>
<td width="47">
</td>
<td width="753">
</td>
</tr>
<tr>
<td width="147">
BG Color

</td>
<td width="47">
</td>
<td width="753">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="174">
Opacity

</td>
<td width="47">
</td>
<td width="753">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="174">
Border

</td>
<td width="47">
</td>
<td width="753">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="174">
Border Radius

</td>
<td width="47">
</td>
<td width="753">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="174">
Shadow

</td>
<td width="47">
</td>
<td width="753">
Specify Shadow effect

</td>
</tr>
<tr>
<td width="174">
Font

</td>
<td width="47">
</td>
<td width="753">
Indicates the main font used by the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="174">
Prev. Month Days Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the previous month

</td>
</tr>
<tr>
<td width="174">
Next. Month Days Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the next month

</td>
</tr>
<tr>
<td width="174">
Today Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of today

</td>
</tr>
<tr>
<td width="174">
Weekend Days Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the Weekend Days

</td>
</tr>
<tr>
<td width="174">
Disabled Days Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the Disabled Days

</td>
</tr>
<tr>
<td width="174">
Selection BG Color

</td>
<td width="47">
</td>
<td width="753">
Specify the background color of the selection

</td>
</tr>
<tr>
<td width="174">
Mouse Over BG Color

</td>
<td width="47">
</td>
<td width="753">
Specify the background color as you 'Mouse Over'

</td>
</tr>
<tr>
<td width="174">
Day Border Top Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the selected Day Top border

</td>
</tr>
<tr>
<td width="174">
Day Border Right Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the selected Day Right border

</td>
</tr>
<tr>
<td width="174">
Day Border Bottom Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the selected Day Bottom border

</td>
</tr>
<tr>
<td width="174">
Day Border Left Color

</td>
<td width="47">
</td>
<td width="753">
Specify the color of the selected Day Left border

</td>
</tr>
</table>
