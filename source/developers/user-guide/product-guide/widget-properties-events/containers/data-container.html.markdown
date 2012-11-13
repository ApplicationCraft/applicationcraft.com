---
title: "Data Container"
active_menu_item: developers
class_name: developers
full_width: true
---


Dec 2011 - This widget is deprecated. Please use the [Panel](/developers/user-guide/product-guide/widget-properties-events/containers/panel) container

The more individual data requests an App page makes, the slower it will get. Many labels and images being populated from a data source will rapidly degrade the performance of your App if each one is set to get its own data from the View.

The Data Container allows Widgets that are getting data from the same Instance (record) to be populated with a single View request.

To configure the Data Container, place the Widgets you wish to display, such as images or labels, inside the container. All of the data is managed through the Data Container properties. Once the View is set, you then use the Fields property to map any required Widgets inside the Data Container to View fields using the [Expression Editor](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor) .

<table>
<tr>
<td width="148">
<a id="general"> </a> **General**

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
Internal class name of the widget.- WiziCore\_UI\_DataContainerWidget

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
Absolute/Relative. Select Relative to enable your container to resize to the available browser size. See: [Absolute & Relative Positioning](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/absolute-and-relative-layout)

</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:167px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:18px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:767px; background-color:#ffffff;">
</th>
</tr>
<tr>
<td width="167">
<table>
<tr>
<th style="vertical-align:top; width:131px;">
<table>
<tr>
<td width="158">
<table>
<tr>
<td width="148">
<table>
<tr>
<td width="148">
<table>
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
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</th>
</tr>
</table>
</td>
<td width="18">
</td>
<td width="767">
</td>
</tr>
<tr>
<td width="167">
Allow Foreign App Writing

</td>
<td width="18">
</td>
<td width="767">
Select to true to allow other apps to write into the container

</td>
</tr>
<tr>
<td width="167">
Automatic relationships

</td>
<td width="18">
</td>
<td width="767">
Where you can set the relationships to other apps (see [Relational Apps & Instance Linking)](/developers/user-guide/product-guide/advanced-features/data-storage-management/instance-linking)

</td>
</tr>
<tr>
<td width="167">
</td>
<td width="18">
</td>
<td width="767">
</td>
</tr>
</table>
<table>
<tr>
<td width="169">
<a id="layout"> </a> **Layout**

</td>
<td width="17">
</td>
<td width="756">
</td>
</tr>
<tr>
<td width="169">
## X

</td>
<td width="17">
</td>
<td width="756">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="169">
Y

</td>
<td width="17">
</td>
<td width="756">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="169">
Sizes

</td>
<td width="17">
</td>
<td width="756">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="169">
Z-Index

</td>
<td width="17">
</td>
<td width="756">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="169">
Align in Container

</td>
<td width="17">
</td>
<td width="756">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="169">
</td>
<td width="17">
</td>
<td width="756">
</td>
</tr>
</table>
<table>
<tr>
<td width="174">
<a id="behavior"> </a> **Behavior**

</td>
<td width="12">
</td>
<td width="756">
</td>
</tr>
<tr>
<td width="174">
Drag and Drop

</td>
<td width="12">
</td>
<td width="756">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="174">
Resizing

</td>
<td width="12">
</td>
<td width="756">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="174">
Visible

</td>
<td width="12">
</td>
<td width="756">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="174">
Read only

</td>
<td width="12">
</td>
<td width="756">
If set to True, the object can be interacted with by a user but data cannot be altered.

</td>
</tr>
<tr>
<td width="174">
Enable

</td>
<td width="12">
</td>
<td width="756">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="174">
</td>
<td width="12">
</td>
<td width="756">
</td>
</tr>
</table>
<table>
<tr>
<td width="145">
<a id="data"> </a> **Data**

</td>
<td width="42">
</td>
<td width="755">

</td>
</tr>
<tr>
<td width="145">
View

</td>
<td width="42">
</td>
<td width="755">
Select the view to use

</td>
</tr>
<tr>
<td width="145">
Fields

</td>
<td width="42">
</td>
<td width="755">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="145">
Group By

</td>
<td width="42">
</td>
<td width="755">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="145">
Order By

</td>
<td width="42">
</td>
<td width="755">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="145">
Filter

</td>
<td width="42">
</td>
<td width="755">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="145">
Listen

</td>
<td width="42">
</td>
<td width="755">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="145">
Auto Load

</td>
<td width="42">
</td>
<td width="755">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
<tr>
<td width="145">
</td>
<td width="42">
</td>
<td width="755">
</td>
</tr>
</table>
<table>
<tr>
<td width="171">
<a id="style"> </a> **Style**

</td>
<td width="16">
</td>
<td width="755">
</td>
</tr>
<tr>
<td width="171">
Opacity

</td>
<td width="16">
</td>
<td width="755">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="171">
Border

</td>
<td width="16">
</td>
<td width="755">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="171">
Border Radius

</td>
<td width="16">
</td>
<td width="755">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="171">
Margin

</td>
<td width="16">
</td>
<td width="755">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="171">
BG Color

</td>
<td width="16">
</td>
<td width="755">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="171">
Display Hourglass Over

</td>
<td width="16">
</td>
<td width="755">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="171">
Hourglass Animation

</td>
<td width="16">
</td>
<td width="755">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
<tr>
<td width="171">
Custom CSS Classes

</td>
<td width="16">
</td>
<td width="755">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](/developers/user-guide/product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="171">
Widget Style

</td>
<td width="16">
</td>
<td width="755">
This refers to the [Theme entry](/developers/user-guide/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>
