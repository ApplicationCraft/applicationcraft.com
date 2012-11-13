---
title: "Image"
active_menu_item: developers
class_name: developers
full_width: true
---


The Image displays an Image that is stored within the [Resources](/developers/user-guide/product-guide/the-console/console-tabs/resources) area. You can load an image from an external data source using the Data section properties, set up [Image Mapping](/developers/user-guide/product-guide/advanced-important-widgets/image-maps-and-emoticons/image-maps) to allow your users to select area(s) in your image or bind your images to [Slider](/developers/user-guide/product-guide/widget-properties-events/advanced/sliders) widgets to create emoticons

<table>
<tr>
<td width="148">
<a id="general"> </a> **General**

</td>
<td width="30">
</td>
<td width="764">
</td>
</tr>
<tr>
<td width="148">
Widget Class

</td>
<td width="30">
</td>
<td width="764">
Internal class name of the widget.- WiziCore\_UI\_ImgWidget

</td>
</tr>
<tr>
<td width="148">
Name

</td>
<td width="30">
</td>
<td width="764">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="148">
Aspect Ratio

</td>
<td width="30">
</td>
<td width="764">
Where you can manage your images as you resize them

</td>
</tr>
<tr>
<td width="148">
Image

</td>
<td width="30">
</td>
<td width="764">
Specified the Image Resource that is displayed.

</td>
</tr>
<tr>
<td width="148">
Link

</td>
<td width="30">
</td>
<td width="764">
Dial/Email/SMS/URL. Define a link from the widget. For Email/SMS/URL additional parameters (Subject/Body etc) can also be set. Dial & SMS for use with Mobile apps. See also: [mobileDial()](/developers/user-guide/scripting-apis/client-api/app-functions/mobiledial) , [mobileEmail()](/developers/user-guide/scripting-apis/client-api/app-functions/mobileemail) , [mobileSMS()](/developers/user-guide/scripting-apis/client-api/app-functions/mobilesms)

</td>
</tr>
<tr>
<td width="148">
Page Jump

</td>
<td width="30">
</td>
<td width="764">
Select to set the page to jump to when Image is clicked

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="30">
</td>
<td width="764">
</td>
</tr>
<tr>
<td width="148">
<a id="database"> </a> **Database**

</td>
<td width="30">
</td>
<td width="764">
</td>
</tr>
<tr>
<td width="148">
Store in Database

</td>
<td width="30">
</td>
<td width="764">
Select to true to store the data from this field for reporting. Used when ImageMap is used

</td>
</tr>
<tr>
<td width="148">
Data Type

</td>
<td width="30">
</td>
<td width="764">
Data type to be stored for ImageMap

</td>
</tr>
<tr>
<td width="148">
Mandatory

</td>
<td width="30">
</td>
<td width="764">
true/false. Set to true to ensure the field is completed before submission is allowed.

See [App Properties](/developers/user-guide/product-guide/widget-properties-events/app-properties#mandatory) Mandatory settings where you can set the highlight color, opacity and the message to present to users

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="30">
</td>
<td width="764">
</td>
</tr>
</table>
<table>
<tr>
<td width="160">
<a id="layout"> </a> **Layout**

</td>
<td width="19">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="160">
Aspect Ratio on Resize

</td>
<td width="19">
</td>
<td width="763">
true/false. Where you can retain the image aspect ratio on resize

</td>
</tr>
<tr>
<td width="160">
## X

</td>
<td width="19">
</td>
<td width="763">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="160">
Y

</td>
<td width="19">
</td>
<td width="763">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="160">
Sizes

</td>
<td width="19">
</td>
<td width="763">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="160">
Repeat

</td>
<td width="19">
</td>
<td width="763">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="160">
Z-Index

</td>
<td width="19">
</td>
<td width="763">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="160">
Anchors

</td>
<td width="19">
</td>
<td width="763">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="160">
Align in Container

</td>
<td width="19">
</td>
<td width="763">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
<a id="behavior"> </a> **Behavior**

</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
Drag and Drop

</td>
<td width="31">
</td>
<td width="763">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="148">
Resizing

</td>
<td width="31">
</td>
<td width="763">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="148">
Visible

</td>
<td width="31">
</td>
<td width="763">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="148">
Enable

</td>
<td width="31">
</td>
<td width="763">
Set to false to leave the Widget visible but to prevent any user interaction.

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> **Data**

</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="31">
</td>
<td width="763">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="31">
</td>
<td width="763">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="31">
</td>
<td width="763">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="31">
</td>
<td width="763">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Drill Filter

</td>
<td width="31">
</td>
<td width="763">
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="31">
</td>
<td width="763">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="31">
</td>
<td width="763">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="31">
</td>
<td width="763">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="31">
</td>
<td width="763">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
<a id="imagemap"> </a> **Image Map**

</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
Use Map

</td>
<td width="31">
</td>
<td width="763">
true/false. Select true to enable Image Map

</td>
</tr>
<tr>
<td width="148">
Map Data

</td>
<td width="31">
</td>
<td width="763">
Select to enter Image Map dialog to define area co-ordinates. You can enter areas manually, Import to paste in HTML code or Resource to import in csv file containing your definitions

</td>
</tr>
<tr>
<td width="148">
Multi Select

</td>
<td width="31">
</td>
<td width="763">
true/false. Select true to allow multiple area selections

</td>
</tr>
<tr>
<td width="148">
HighLight

</td>
<td width="31">
</td>
<td width="763">
true/false. Select true to highlight selected area(s)

</td>
</tr>
<tr>
<td width="148">
HighLight Color

</td>
<td width="31">
</td>
<td width="763">
Select highlight color

</td>
</tr>
<tr>
<td width="148">
HighLight Opacity

</td>
<td width="31">
</td>
<td width="763">
Select opacity of highlight color

</td>
</tr>
<tr>
<td width="148">
Outline

</td>
<td width="31">
</td>
<td width="763">
true/false. Select true to show outline of areas

</td>
</tr>
<tr>
<td width="148">
Outline Width

</td>
<td width="31">
</td>
<td width="763">
Set outline width

</td>
</tr>
<tr>
<td width="148">
Outline Color

</td>
<td width="31">
</td>
<td width="763">
Set outline color

</td>
</tr>
<tr>
<td width="148">
Outline Opacity

</td>
<td width="31">
</td>
<td width="763">
Set outline opacity

</td>
</tr>
<tr>
<td width="148">
Fade

</td>
<td width="31">
</td>
<td width="763">
true/false.

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="style"> </a> **Style**

</td>
<td width="31">
</td>
<td width="763">
</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="31">
</td>
<td width="763">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Border

</td>
<td width="31">
</td>
<td width="763">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Border Radius

</td>
<td width="31">
</td>
<td width="763">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="31">
</td>
<td width="763">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="148">
Display Hourglass Over

</td>
<td width="31">
</td>
<td width="763">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="148">
Hourglass Animation

</td>
<td width="31">
</td>
<td width="763">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="148">
Shadow

</td>
<td width="31">
</td>
<td width="763">
Specify Shadow Effects

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="31">
</td>
<td width="763">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](/developers/user-guide/product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="31">
</td>
<td width="763">
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
<td width="128">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)

</td>
<td width="15">
</td>
<td width="128">
[Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="128">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="128">
On Data Reset

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Area Click

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Area Mouse Enter

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
<tr>
<td width="148">
On Area Mouse Leave

</td>
<td width="15">
</td>
<td width="128">
</td>
</tr>
</table>

## See Also

 - [Image Maps and Emoticons](/developers/user-guide/product-guide/advanced-important-widgets/image-maps-and-emoticons/)
 - [Sliders](/developers/user-guide/product-guide/widget-properties-events/advanced/sliders#general)
 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [Data Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/data-events)

