---
old_url: calendar.htm
title: "Calendar"
active_menu_item: developers
class_name: developers
full_width: true
---


This Widget offers a variety of ways to display Monthly information on both Desktop and Mobile devices, depending on the size of the widget and the information being displayed in it.

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
</table>
<table>
<tr>
<td width="150">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="43">
</td>
<td width="754">
</td>
</tr>
<tr>
<td width="150">
X

</td>
<td width="43">
</td>
<td width="754">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="150">
Y

</td>
<td width="43">
</td>
<td width="754">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="150">
Sizes

</td>
<td width="43">
</td>
<td width="754">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="150">
Repeat

</td>
<td width="43">
</td>
<td width="754">
  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="150">
Z-Index

</td>
<td width="43">
</td>
<td width="754">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="150">
Anchors

</td>
<td width="43">
</td>
<td width="754">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="150">
Align in Container

</td>
<td width="43">
</td>
<td width="754">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
</table>
<table>
<tr>
<td width="145">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="49">
</td>
<td width="748">
</td>
</tr>
<tr>
<td width="145">
Drag and Drop

</td>
<td width="49">
</td>
<td width="748">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="145">
Resizing

</td>
<td width="49">
</td>
<td width="748">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="145">
Visible

</td>
<td width="49">
</td>
<td width="748">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="145">
Enable

</td>
<td width="49">
</td>
<td width="748">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> <b>Data</b>

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
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="48">
</td>
<td width="746">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="48">
</td>
<td width="746">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

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
  This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter">Drill Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="48">
</td>
<td width="746">
  Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast">Broadcast</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="48">
</td>
<td width="746">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="48">
</td>
<td width="746">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

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
<td width="174">
<a id="style"> </a> <b>Style</b>

</td>
<td width="20">
</td>
<td width="748">
</td>
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
Margin

</td>
<td width="20">
</td>
<td width="748">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

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
Prev/Next Month Overrides Weekends

</td>
<td width="20">
</td>
<td width="748">
true/false

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
<tr>
<td width="174">
Custom CSS Classes

</td>
<td width="20">
</td>
<td width="748">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="174">
Widget Style

</td>
<td width="20">
</td>
<td width="748">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

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
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
<td width="15">
</td>
<td width="151">
  <a href="/developers/documentation/product-guide/advanced-important-widgets/calendar-widget/property-method-and-event-summary/calendarevents">Selection Events</a>

</td>
<td width="23">
</td>
<td width="279">
  <a href="/developers/documentation/product-guide/advanced-important-widgets/calendar-widget/property-method-and-event-summary/calendarevents">View Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="151">
On Selection Change

</td>
<td width="23">
</td>
<td width="279">
On Draw

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="151">
On Selection Clear

</td>
<td width="23">
</td>
<td width="279">
On Month Change

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="151">
On Day Selection

</td>
<td width="23">
</td>
<td width="279">
On Year Change

</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="151">
On Range Selection

</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="151">
On Multiple Selection

</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="151">
</td>
<td width="23">
</td>
<td width="279">
</td>
</tr>
</table>

## See Also

 - [Calendar Widget](/developers/documentation/product-guide/advanced-important-widgets/calendar-widget/)
 - [Mouse Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Selection Events](/developers/documentation/product-guide/advanced-important-widgets/calendar-widget/property-method-and-event-summary/calendarevents)
 - [View Events](/developers/documentation/product-guide/advanced-important-widgets/calendar-widget/property-method-and-event-summary/calendarevents)

