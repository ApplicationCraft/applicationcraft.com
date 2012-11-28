---
old_url: data_container.htm
title: "Data Container"
active_menu_item: developers
class_name: developers
full_width: true
---


Dec 2011 - This widget is deprecated. Please use the [Panel](/developers/documentation/product-guide/widget-properties-events/containers/panel) container

The more individual data requests an App page makes, the slower it will get. Many labels and images being populated from a data source will rapidly degrade the performance of your App if each one is set to get its own data from the View.

The Data Container allows Widgets that are getting data from the same Instance (record) to be populated with a single View request.

To configure the Data Container, place the Widgets you wish to display, such as images or labels, inside the container. All of the data is managed through the Data Container properties. Once the View is set, you then use the Fields property to map any required Widgets inside the Data Container to View fields using the [Expression Editor](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor) .

<table>
<tr>
<td width="148">
<a id="general"> </a> <b>General</b>

</td>
<td width="37">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="148">
Widget Class

</td>
<td width="37">
</td>
<td width="757">
Internal class name of the widget.- WiziCore_UI_DataContainerWidget

</td>
</tr>
<tr>
<td width="148">
Name

</td>
<td width="37">
</td>
<td width="757">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="148">
Layout

</td>
<td width="37">
</td>
<td width="757">
  Absolute/Relative. Select Relative to enable your container to resize to the available browser size. See: <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout">Absolute & Relative Positioning</a>

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="database"> </a> <b>Database</b>

</td>
<td width="37">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="148">
Allow Foreign App Writing

</td>
<td width="37">
</td>
<td width="757">
Select to true to allow other apps to write into the container

</td>
</tr>
<tr>
<td width="148">
Automatic relationships

</td>
<td width="37">
</td>
<td width="757">
  Where you can set the relationships to other apps (see <a href="/developers/documentation/product-guide/advanced-features/data-storage-management/instance-linking">Relational Apps & Instance Linking)</a>

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="37">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="148">
X

</td>
<td width="37">
</td>
<td width="757">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="148">
Y

</td>
<td width="37">
</td>
<td width="757">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="148">
Sizes

</td>
<td width="37">
</td>
<td width="757">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="148">
Z-Index

</td>
<td width="37">
</td>
<td width="757">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="148">
Align in Container

</td>
<td width="37">
</td>
<td width="757">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="37">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="148">
Drag and Drop

</td>
<td width="37">
</td>
<td width="757">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="148">
Resizing

</td>
<td width="37">
</td>
<td width="757">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="148">
Visible

</td>
<td width="37">
</td>
<td width="757">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="148">
Read only

</td>
<td width="37">
</td>
<td width="757">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="148">
Enable

</td>
<td width="37">
</td>
<td width="757">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> <b>Data</b>

</td>
<td width="37">
</td>
<td width="757">

</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="37">
</td>
<td width="757">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="37">
</td>
<td width="757">
  This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/">Fields</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="37">
</td>
<td width="757">
  This allows you to Group data within a View in the same way you would with a SQL statement. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by">Group By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="37">
</td>
<td width="757">
  Specifies the order in which data is presented to the Widget.  Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by">Order By</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Filter

</td>
<td width="37">
</td>
<td width="757">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="37">
</td>
<td width="757">
  This indicates whether the Widget should react to a Drill Down action on a common View. Read the <a href="/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen">Listen</a> section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="37">
</td>
<td width="757">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="style"> </a> <b>Style</b>

</td>
<td width="37">
</td>
<td width="757">
</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="37">
</td>
<td width="757">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Border

</td>
<td width="37">
</td>
<td width="757">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Border Radius

</td>
<td width="37">
</td>
<td width="757">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="37">
</td>
<td width="757">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="148">
BG Color

</td>
<td width="37">
</td>
<td width="757">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="148">
Display Hourglass Over

</td>
<td width="37">
</td>
<td width="757">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="148">
Hourglass Animation

</td>
<td width="37">
</td>
<td width="757">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="37">
</td>
<td width="757">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="37">
</td>
<td width="757">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>
