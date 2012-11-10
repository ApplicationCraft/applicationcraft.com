---
title: "Label"
active_menu_item: developers
class_name: developers
full_width: true
---


The Label Widget is one of the fundamental objects within Application Craft and is used to place text on a Page. The Label text and other properties can be changed dynamically using AC [Javascript](../../scripting-apis/client-scripting-overview/scripting-with-javascript/)

<table>
<tr>
<th style="vertical-align:top; width:161px; background-color:#ffffff;">
<a id="general"> </a> **General**

</th>
<th style="vertical-align:top; width:22px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:759px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="161">
Widget Class

</td>
<td width="22">
</td>
<td width="759">
Internal class name of the widget.- WiziCore\_UI\_LabelWidget

</td>
</tr>
<tr>
<td width="161">
Name

</td>
<td width="22">
</td>
<td width="759">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="161">
Label

</td>
<td width="22">
</td>
<td width="759">
The text that should be displayed on the Page for the Widget. You can also select the Editor property for rich editing of the label contents.

</td>
</tr>
<tr>
<td width="161">
Editor

</td>
<td width="22">
</td>
<td width="759">
Click to invoke HTML Editor as an alternative way of populating the label contents.

</td>
</tr>
<tr>
<td width="161">
Text Align

</td>
<td width="22">
</td>
<td width="759">
Align your text Left/Right or Center

</td>
</tr>
<tr>
<td width="161">
Link

</td>
<td width="22">
</td>
<td width="759">
Dial/Email/SMS/URL. Define a link from the widget. For Email/SMS/URL additional parameters (Subject/Body etc) can also be set. Dial & SMS for use with Mobile apps. See also: [mobileDial()](../../scripting-apis/client-api/app-functions/mobiledial) , [mobileEmail()](../../scripting-apis/client-api/app-functions/mobileemail) , [mobileSMS()](../../scripting-apis/client-api/app-functions/mobilesms)

</td>
</tr>
<tr>
<td width="161">
Page Jump

</td>
<td width="22">
</td>
<td width="759">
Select to set the page to jump to if clicked.('Forward' and 'Back' behave in same manner as a browser)

</td>
</tr>
<tr>
<td width="161">
</td>
<td width="22">
</td>
<td width="759">
</td>
</tr>
</table>
<table>
<tr>
<td width="159">
<a id="layout"> </a> **Layout**

</td>
<td width="25">
</td>
<td width="758">
</td>
</tr>
<tr>
<td width="159">
## X

</td>
<td width="25">
</td>
<td width="758">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="159">
Y

</td>
<td width="25">
</td>
<td width="758">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="159">
Sizes

</td>
<td width="25">
</td>
<td width="758">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="159">
Repeat

</td>
<td width="25">
</td>
<td width="758">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="159">
Z-Index

</td>
<td width="25">
</td>
<td width="758">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="159">
Anchors

</td>
<td width="25">
</td>
<td width="758">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="159">
Align in Container

</td>
<td width="25">
</td>
<td width="758">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="159">
</td>
<td width="25">
</td>
<td width="758">
</td>
</tr>
</table>
<table>
<tr>
<td width="159">
<a id="behavior"> </a> **Behavior**

</td>
<td width="26">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="159">
Drag and Drop

</td>
<td width="26">
</td>
<td width="757">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="159">
Resizing

</td>
<td width="26">
</td>
<td width="757">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="159">
Visible

</td>
<td width="26">
</td>
<td width="757">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="159">
</td>
<td width="26">
</td>
<td width="757">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> **Data**

</td>
<td width="38">
</td>
<td width="756">
</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="38">
</td>
<td width="756">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="38">
</td>
<td width="756">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="38">
</td>
<td width="756">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="38">
</td>
<td width="756">
Specifies the order in which data is presented to the Widget.  Read the [Order By](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Filter

</td>
<td width="38">
</td>
<td width="756">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="38">
</td>
<td width="756">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="38">
</td>
<td width="756">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="38">
</td>
<td width="756">
</td>
</tr>
</table>
<table>
<tr>
<td width="165">
<a id="style"> </a> **Style**

</td>
<td width="20">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="165">
Opacity

</td>
<td width="20">
</td>
<td width="757">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="165">
Text Shadow

</td>
<td width="20">
</td>
<td width="757">
Specify Shadow effect to the Text

</td>
</tr>
<tr>
<td width="165">
Link Color

</td>
<td width="20">
</td>
<td width="757">
Set the colour to use in any links used in the Widget

</td>
</tr>
<tr>
<td width="165">
Paragraph Spacing

</td>
<td width="20">
</td>
<td width="757">
Set the Paragraph spacing

</td>
</tr>
<tr>
<td width="165">
Font

</td>
<td width="20">
</td>
<td width="757">
Indicates the main font used by the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="165">
Color

</td>
<td width="20">
</td>
<td width="757">
The main foreground (usually text) color of the Widget.  If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="165">
Margin

</td>
<td width="20">
</td>
<td width="757">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="165">
BG Color

</td>
<td width="20">
</td>
<td width="757">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="165">
Custom CSS Classes

</td>
<td width="20">
</td>
<td width="757">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="165">
Widget Style

</td>
<td width="20">
</td>
<td width="757">
This refers to the [Theme entry](../../product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
<tr>
<td width="165">
Line Height

</td>
<td width="20">
</td>
<td width="757">
Specify the line height

</td>
</tr>
<tr>
<td width="165">
Display Hourglass Over

</td>
<td width="20">
</td>
<td width="757">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="165">
Hourglass Animation

</td>
<td width="20">
</td>
<td width="757">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="165">
Letter Spacing

</td>
<td width="20">
</td>
<td width="757">
Specified the spacing between letters.

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
<td width="779">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](../events/event-reference-list/mouse-events)

</td>
<td width="15">
</td>
<td width="779">
[Data Events](../events/event-reference-list/data-events)

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="779">
On Data Loaded

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="779">
On Data Reset

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
</table>

## See Also

 - [HTML](html2.htm)

 - [Label (Mobile)](../mobile/moblabel)

 - [Mouse Events](../events/event-reference-list/mouse-events)

 - [Data Events](../events/event-reference-list/data-events)

