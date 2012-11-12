---
title: "Grid"
active_menu_item: developers
class_name: developers
full_width: true
---


The Grid is one of the most powerful and versatile Widgets in the Application Craft toolbox. It is used for  displaying data from almost any AC or external data source.

![Grid\_example](/img/docs/grid_example.zoom63.png)

Columns are added to the Grid using the Columns property in the General section. When you select this property, a dialog appears that lets you add and manage columns.

![Grid\_columns](/img/docs/grid_columns.zoom50.png)

## Setting Column Widths

In the main Grid properties, you can set the Column Width Type property to be pixels or %. If you select pixels, you can have a Grid with column widths that add up to be wider than the Grid's width. In this case, you will see a horizontal scrollbar. If you select %, then your columns will add up to be the exact width of the Grid.

## Auto Creating Columns and Data Bindings

If you are using a Grid to display data from a View, then you can automatically generate the columns names as well as the data bindings. First of all, set the Grid's View property to bind it to a View. Next, go to the Columns property to open the Grid Columns manager dialog, where you will find a button 'Generate from View'. This dialog will list all fields in the View that you want to appear in your Grid. Highlight these fields and press OK. You can then fine tune the column order, size and their properties as you require.

Note that the actual data bindings are located in the Fields property of the Data property section for the main Grid.

## Grid Drill Down Broadcast

You may want to allow a Grid to drive a drill down process so a Respondent can click on a Grid row and see other Widgets that are bound to the same View drill down. To do this, you will need to use the Grid's 'Drill Filter' property. This will bring up the Expression Editor so you can supply the filter condition.

As an example, let's say you have a Grid whose first column is "Country". You would enter an expression similar to the one below

    {customers.country}={value}[0]
   

Where  {value}[0] is the 0-based column index of the Grid and {customers.country} is the View field to apply the condition to.

You should also ensure the Broadcast property is set to True, so the Grid click event is broadcast to the View properly.

## Grid Properties

<table>
<tr>
<td width="159">
<a id="general"> </a> **General**

</td>
<td width="9">
</td>
<td width="775">
</td>
</tr>
<tr>
<td width="159">
Widget Class

</td>
<td width="9">
</td>
<td width="775">
Internal class name of the widget.- WiziCore\_UI\_GridWidget

</td>
</tr>
<tr>
<td width="159">
Name

</td>
<td width="9">
</td>
<td width="775">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="159">
Items

</td>
<td width="9">
</td>
<td width="775">
This is where you can prefill your list/dropdown widgets either manually or by importing a CSV list stored as a resource. See [Prefill](/developers/user-guide/product-guide/widget-properties-events/prefill)

</td>
</tr>
<tr>
<td width="159">
Light Navigation

</td>
<td width="9">
</td>
<td width="775">
Is used if the user can navigate using the arrow keys.

</td>
</tr>
<tr>
<td width="159">
<table>
<tr>
<td width="148">
Column Width Type

</td>
</tr>
</table>
</td>
<td width="9">
</td>
<td width="775">
Is used to specify whether column measurements should be in % or pixels. If pixels are specified, it is possible to have data columns that exceed the width of the table itself.

</td>
</tr>
<tr>
<td width="159">
Elements Per Page

</td>
<td width="9">
</td>
<td width="775">
Sets the number of rows the grid will show on one page

</td>
</tr>
<tr>
<td width="159">
Start Page

</td>
<td width="9">
</td>
<td width="775">
Controls which page is the first displayed

</td>
</tr>
<tr>
<td width="159">
</td>
<td width="9">
</td>
<td width="775">
</td>
</tr>
<tr>
<td width="159">
<a id="database"> </a> **Database**

</td>
<td width="9">
</td>
<td width="775">
</td>
</tr>
<tr>
<td width="159">
Store in Database

</td>
<td width="9">
</td>
<td width="775">
Select to true to store the data from this field for reporting

</td>
</tr>
<tr>
<td width="159">
Allow Foreign App Writing

</td>
<td width="9">
</td>
<td width="775">
Select to true to allow other apps to write into the grid

</td>
</tr>
<tr>
<td width="159">
Automatic relationships

</td>
<td width="9">
</td>
<td width="775">
Where you can set the relationships to other apps (see [Relational Apps & Instance Linking)](/developers/user-guide/product-guide/advanced-features/data-storage-management/instance-linking)

</td>
</tr>
<tr>
<td width="159">
</td>
<td width="9">
</td>
<td width="775">
</td>
</tr>
</table>
<table>
<tr>
<td width="159">
<a id="layout"> </a> **Layout**

</td>
<td width="10">
</td>
<td width="773">
</td>
</tr>
<tr>
<td width="159">
Width

</td>
<td width="10">
</td>
<td width="773">
Width of the Widget in pixels.

</td>
</tr>
<tr>
<td width="159">
Height

</td>
<td width="10">
</td>
<td width="773">
Height of the Widget in pixels.

</td>
</tr>
<tr>
<td width="159">
## X

</td>
<td width="10">
</td>
<td width="773">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="159">
Y

</td>
<td width="10">
</td>
<td width="773">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="159">
Z-Index

</td>
<td width="10">
</td>
<td width="773">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="159">
Anchors

</td>
<td width="10">
</td>
<td width="773">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="159">
Align in Container

</td>
<td width="10">
</td>
<td width="773">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="159">
Repeat

</td>
<td width="10">
</td>
<td width="773">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

</td>
</tr>
</table>
<table>
<tr>
<td width="158">
</td>
<td width="11">
</td>
<td width="773">
</td>
</tr>
<tr>
<td width="158">
<a id="behavior"> </a> **Behavior**

</td>
<td width="11">
</td>
<td width="773">
</td>
</tr>
<tr>
<td width="158">
Drag and Drop

</td>
<td width="11">
</td>
<td width="773">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="158">
Resizing

</td>
<td width="11">
</td>
<td width="773">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="158">
Visible

</td>
<td width="11">
</td>
<td width="773">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="158">
Enable

</td>
<td width="11">
</td>
<td width="773">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="158">
</td>
<td width="11">
</td>
<td width="773">
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
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="15">
</td>
<td width="779">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="15">
</td>
<td width="779">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

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
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="15">
</td>
<td width="779">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter) section for more details.

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
Key Fields

</td>
<td width="15">
</td>
<td width="779">
Set to map View fields. For use in writing data back out to connected database tables

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
Shadow

</td>
<td width="21">
</td>
<td width="773">
Specify Shadow effects

</td>
</tr>
<tr>
<td width="148">
Default Header Font

</td>
<td width="21">
</td>
<td width="773">
Indicates the font used in the header of the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Default Header Color

</td>
<td width="21">
</td>
<td width="773">
The default color of the header. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option

</td>
</tr>
<tr>
<td width="148">
Default Header BG Color

</td>
<td width="21">
</td>
<td width="773">
The default color of the background of the header. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option

</td>
</tr>
<tr>
<td width="148">
Default Data Font

</td>
<td width="21">
</td>
<td width="773">
Indicates the font used in the body of the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option

</td>
</tr>
<tr>
<td width="148">
Default Data Color

</td>
<td width="21">
</td>
<td width="773">
The main foreground (usually text) color of the text within Widget.  If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Alternate Row BG Color

</td>
<td width="21">
</td>
<td width="773">
The background color of alternate lines the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="21">
</td>
<td width="773">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

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
Display Hourglass Over

</td>
<td width="21">
</td>
<td width="773">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="148">
Hourglass Animation

</td>
<td width="21">
</td>
<td width="773">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="21">
</td>
<td width="773">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](/developers/user-guide/product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="21">
</td>
<td width="773">
This refers to the [Theme entry](/developers/user-guide/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
**Supported Events:**

</td>
<td width="15">
</td>
<td width="177">
</td>
<td width="18">
</td>
<td width="121">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)

</td>
<td width="15">
</td>
<td width="177">
[General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)

</td>
<td width="18">
</td>
<td width="121">
[Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

</td>
</tr>
<tr>
<td width="148">
On Row Select

</td>
<td width="15">
</td>
<td width="177">
On Row Loaded

</td>
<td width="18">
</td>
<td width="121">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Edit Cell

</td>
<td width="15">
</td>
<td width="177">
On Cell Changed

</td>
<td width="18">
</td>
<td width="121">
On Data Reset

</td>
</tr>
<tr>
<td width="148">
On Scroll

</td>
<td width="15">
</td>
<td width="177">
On Select State Changed

</td>
<td width="18">
</td>
<td width="121">
</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="177">
On Grid Reconstructed

</td>
<td width="18">
</td>
<td width="121">
</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="177">
On Open End

</td>
<td width="18">
</td>
<td width="121">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)

 - [General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)

 - [Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

