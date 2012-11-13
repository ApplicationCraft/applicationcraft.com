---
title: "List"
active_menu_item: developers
class_name: developers
full_width: true
---


The Listbox allows items to be populated in the following ways

 - In advance using a dialog to enter data

 - From a CSV list stored as a Resource

 - From an external data source from by setting properties in the [Data Section](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/)

See: [Mobile List Widget](/developers/documentation/product-guide/advanced-important-widgets/important-mobile-widgets/mobile-list-widget/)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/q6VXeWOhAxA?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating List Widgets with Javascript  [5:15]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/xGGfUAoCM78?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating List Widgets with the Item Dialog [3:09]

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
Internal class name of the widget.- WiziCore\_UI\_ListMobileWidget

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
Elements Per Page

</td>
<td width="15">
</td>
<td width="779">
Sets the number of rows the widget will show on one page

</td>
</tr>
<tr>
<td width="148">
Start Page

</td>
<td width="15">
</td>
<td width="779">
Controls which page is the first displayed

</td>
</tr>
<tr>
<td width="148">
Items

</td>
<td width="15">
</td>
<td width="779">
    This is where you can prefill your list/dropdown widgets either manually or by importing a CSV list stored as a resource. See <a href="/developers/documentation/product-guide/widget-properties-events/prefill">Prefill</a> .  You can also set 'Page Jump' actions to automatically re direct users to other pages in your app, and set Dividers. See <a href="/developers/documentation/product-guide/advanced-important-widgets/important-mobile-widgets/mobile-list-widget/">Mobile List Widget</a>

</td>
</tr>
<tr>
<td width="148">
Highlight Selected

</td>
<td width="15">
</td>
<td width="779">
true/false. Select true to use Mobile Theme color when selected. The list requires unique values for this to highlight

</td>
</tr>
<tr>
<td width="148">
Filter Placeholder

</td>
<td width="15">
</td>
<td width="779">
Where you can enter text that will show to the user when Filter property is enabled. As they focus/click into the field the text will be hidden

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
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Store in Database

</td>
<td width="15">
</td>
<td width="779">
Select to true to store the data from this field for reporting

</td>
</tr>
<tr>
<td width="148">
Data Type

</td>
<td width="15">
</td>
<td width="779">
This is where you can select the data type appropriate for your field

</td>
</tr>
<tr>
<td width="148">
Unique

</td>
<td width="15">
</td>
<td width="779">
  None/Case Sensitive/Case Insensitive. For use with <a href="/developers/documentation/product-guide/advanced-features/accessing-data-in-other-apps-databases-and-apis/relational-apps">Relational Apps</a>

</td>
</tr>
<tr>
<td width="148">
Mandatory

</td>
<td width="15">
</td>
<td width="779">
true/false. Set to true to ensure the field is completed before submission is allowed.

See [App Properties](/developers/documentation/product-guide/widget-properties-events/app-properties#mandatory) Mandatory settings where you can set the highlight color, opacity and the message to present to users

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
Sizes

</td>
<td width="15">
</td>
<td width="779">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

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
Tab Order

</td>
<td width="15">
</td>
<td width="779">
Where you can control the tab order in your app.

</td>
</tr>
<tr>
<td width="148">
Tab Stop

</td>
<td width="15">
</td>
<td width="779">
true/false.  If set to false users will not tab into this field

</td>
</tr>
<tr>
<td width="148">
Anchors

</td>
<td width="15">
</td>
<td width="779">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

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
</table>
<table>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
<a id="behavior"> </a> **Behavior**

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Drag and Drop

</td>
<td width="15">
</td>
<td width="779">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="148">
Resizing

</td>
<td width="15">
</td>
<td width="779">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="148">
Visible

</td>
<td width="15">
</td>
<td width="779">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="148">
Enable

</td>
<td width="15">
</td>
<td width="779">
Set to false to leave the Widget visible but to prevent any user interaction.

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
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="15">
</td>
<td width="779">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="15">
</td>
<td width="779">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

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
  This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter">Drill Filter</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="15">
</td>
<td width="779">
  Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast">Broadcast</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="15">
</td>
<td width="779">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="15">
</td>
<td width="779">
  Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter">Reset Filter</a> section for more details.

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
</table>
        

<table>
<tr>
<td width="148">
<a id="style"> </a> **Style**

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="15">
</td>
<td width="779">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Image as Thumbnail

</td>
<td width="15">
</td>
<td width="779">
true/false. Select true to show defined image as thumbnail size. Will show at 16\*16px

</td>
</tr>
<tr>
<td width="148">
Show Image

</td>
<td width="15">
</td>
<td width="779">
true/false. Select true to show image in the list. Will show at 80\*80px (unless Image as Thumbnail property = true)

</td>
</tr>
<tr>
<td width="148">
Show Count Field

</td>
<td width="15">
</td>
<td width="779">
true/false. Select true to show the count of the list item

</td>
</tr>
<tr>
<td width="148">
Inset

</td>
<td width="15">
</td>
<td width="779">
Insets the list and rounds the corners

</td>
</tr>
<tr>
<td width="148">
HTML Label

</td>
<td width="15">
</td>
<td width="779">
The Label property contains formatted HTML.

</td>
</tr>
<tr>
<td width="148">
Wrap

</td>
<td width="15">
</td>
<td width="779">
true/false If set to true, then the content will wrap within the list element rather than being truncated.

</td>
</tr>
<tr>
<td width="148">
Show Filter

</td>
<td width="15">
</td>
<td width="779">
true/false. Select true to show a filter field to filter contents of the list.

</td>
</tr>
<tr>
<td width="148">
Numbered List

</td>
<td width="15">
</td>
<td width="779">
true/false

</td>
</tr>
<tr>
<td width="148">
ReadOnly List

</td>
<td width="15">
</td>
<td width="779">
true/false. If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="148">
Show Aside

</td>
<td width="15">
</td>
<td width="779">
true/false

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="15">
</td>
<td width="779">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="148">
Mobile Theme

</td>
<td width="15">
</td>
<td width="779">
  Where you can set the Theme colors for the widget. See <a href="/developers/documentation/product-guide/mobile-apps-sites/mobile-themes">Mobile Themes</a>

</td>
</tr>
<tr>
<td width="148">
Divider Theme

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Theme of your Dividers in the widget

</td>
</tr>
<tr>
<td width="148">
Count Theme

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Theme of your Count bubble in the widget

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
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
<td width="120">
</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events">General Events</a>

</td>
<td width="15">
</td>
<td width="120">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events">Data Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="120">
On Data Loaded

</td>
</tr>
</table>

## See Also

 - [General Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Data Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/data-events)

