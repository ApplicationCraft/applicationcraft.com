---
title: "Text"
active_menu_item: developers
class_name: developers
full_width: true
---


Used for single row entry. If you need to enter data in a specific way that isn't handled by the 'Type', you could use a "Regular Expression" in  Application Craft Javascript to achieve complex data format validations post entry.

<table>
<tr>
<td width="148">
## <a id="general"> </a> General

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
Internal class name of the widget. -TextMobile

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
Type

</td>
<td width="15">
</td>
<td width="779">
Text/Number/Email/URL/Phone/Password/. Select the type of entry required

</td>
</tr>
<tr>
<td width="148">
<table>
<tr>
<td width="148">
Text

</td>
</tr>
</table>
</td>
<td width="15">
</td>
<td width="779">
The Text and Text Area widgets can have default text set with this property. In the case of the Masked Text Widget, this is the actual data input mask.

</td>
</tr>
<tr>
<td width="148">
Max Chars

</td>
<td width="15">
</td>
<td width="779">
This is where you can define the Max chars allowed for the field

</td>
</tr>
<tr>
<td width="148">
Placeholder Text

</td>
<td width="15">
</td>
<td width="779">
Where you can enter text that will show to the user. As they focus/click into the field the text will be hidden. Please note Android 4.0+ cannot show placeholder text when Type = Number

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
## <a id="database"> </a> Database

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
<table>
<tr>
<td width="148">
Unique

</td>
</tr>
</table>
</td>
<td width="15">
</td>
<td width="779">
None/Case Sensitive/Case Insensitive. For use with [Relational Apps](../../product-guide/advanced-features/accessing-data-in-other-apps,-databases-and-apis/relational-apps.htm)

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

See [App Properties](../app-properties.htm#mandatory) Mandatory settings where you can set the highlight color, opacity and the message to present to users

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
## <a id="layout"> </a> Layout

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
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog.htm)

</td>
</tr>
<tr>
<td width="148">
X

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/widget-anchoring.htm) .

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
## <a id="behavior"> </a> Behavior

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
Read Only

</td>
<td width="15">
</td>
<td width="779">
If set to True, the object can be interacted with by a user but data cannot be altered.

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
## <a id="data"> </a> Data

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
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/fields/index.htm) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="15">
</td>
<td width="779">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/fiieldsgroup-by.htm) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="15">
</td>
<td width="779">
Specifies the order in which data is presented to the Widget.  Read the [Order By](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/order-by.htm) section for more details.

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
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/drill-filter.htm) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/broadcast.htm) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="15">
</td>
<td width="779">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/listen.htm) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="15">
</td>
<td width="779">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/reset-filter.htm) section for more details.

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
<td width="146">
</td>
<td width="17">
</td>
<td width="780">
</td>
</tr>
<tr>
<td width="146">
## <a id="appearance"> </a> Appearance

</td>
<td width="17">
</td>
<td width="780">
</td>
</tr>
<tr>
<td width="146">
Text Align

</td>
<td width="17">
</td>
<td width="780">
Align your text Left/Right or Center

</td>
</tr>
<tr>
<td width="146">
</td>
<td width="17">
</td>
<td width="780">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
## <a id="style"> </a> Style

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
Margin

</td>
<td width="15">
</td>
<td width="779">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../product-guide/content-and-app-layout/introduction/setting-a-margin.htm)

</td>
</tr>
<tr>
<td width="148">
Mobile Theme

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Theme colors for the widget. See [Mobile Themes](../../product-guide/mobile-apps-sites/mobile-themes.htm)

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
## Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../product-guide/advanced-features/custom-css-classes/index.htm)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
This refers to the [Theme entry](../../product-guide/content-and-app-layout/introduction/themes-styles/themesmanage.htm) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
## Supported Events:

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](../events/event-reference-list/mouse-events.htm)

</td>
<td width="15">
</td>
<td width="120">
[Key Events](../events/event-reference-list/key-events.htm)

</td>
<td width="17">
</td>
<td width="108">
[General Events](../events/event-reference-list/general-events.htm)

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="120">
On Key Up

</td>
<td width="17">
</td>
<td width="108">
On Change

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="120">
On Key Down

</td>
<td width="17">
</td>
<td width="108">
Got Focus

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
Lost Focus

</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
</table>

See Also:

 - Mobile Widgets: [Text Area](mobtext_area.htm)

 - Common Widgets: [Text](../common/text.htm) , [Text Area](../common/text-area.htm) , [Alpha Numeric](../common/alpha-numeric.htm) , [Numeric](../common/numeric.htm)

 - [Mouse Events](../events/event-reference-list/mouse-events.htm)

 - [Key Events](../events/event-reference-list/key-events.htm)

 - [General Events](../events/event-reference-list/general-events.htm)

