---
title: "Page Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


<table>
<tr>
<td width="191">
**General**

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
Widget Class

</td>
<td width="19">
</td>
<td width="765">
The internal class name of the Page Widget.- - WiziCore\_Api\_Page

</td>
</tr>
<tr>
<td width="191">
Width

</td>
<td width="19">
</td>
<td width="765">
The width of the Page. Its' default is set from the App's 'Default Page Width' property and can be overridden here.

</td>
</tr>
<tr>
<td width="191">
Height

</td>
<td width="19">
</td>
<td width="765">
The height of the Page. Its' default is set from the App's 'Default Page Height' property and can be overridden here.

</td>
</tr>
<tr>
<td width="191">
Name

</td>
<td width="19">
</td>
<td width="765">
This is the Name of the Page as appears in the drop-down list at the bottom of the designer.

</td>
</tr>
<tr>
<td width="191">
Auto page jump

</td>
<td width="19">
</td>
<td width="765">
This is used in conjunction with Auto page time.

</td>
</tr>
<tr>
<td width="191">
Auto jump time

</td>
<td width="19">
</td>
<td width="765">
Indicates that the Page should jump to the page specified in 'Auto Jump Page' after n seconds.

</td>
</tr>
<tr>
<td width="191">
Layout

</td>
<td width="19">
</td>
<td width="765">
Absolute/Relative. Select Relative to enable your container to resize to the available browser size. See: [Absolute and Relative Layout](../content-and-app-layout/responsive-/-adaptive-/-fluid-design/absolute-and-relative-layout)

</td>
</tr>
<tr>
<td width="191">
Google Analytics Track Code

</td>
<td width="19">
</td>
<td width="765">
If you want your GA tracking to be javascript free, then you can set the 'Google Analytics Track Code' property for any page you like within your App. See [Page Based Tracking Code](../advanced-features/google-analytics/page-based-tracking-code)

</td>
</tr>
<tr>
<td width="191">

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
**Layout**

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
Percent Width

</td>
<td width="19">
</td>
<td width="765">
Where you can change the width of the page relative to the size of the browser. Used in 'Relative Mode'. See [Absolute and Relative Layout](../content-and-app-layout/responsive-/-adaptive-/-fluid-design/absolute-and-relative-layout)

</td>
</tr>
<tr>
<td width="191">
Full Screen Height

</td>
<td width="19">
</td>
<td width="765">
true/false. Select true for the page to expand (if necessary) to browser height

</td>
</tr>
<tr>
<td width="191">

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
**Behavior**

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
Transition Mode

</td>
<td width="19">
</td>
<td width="765">
Auto/Pre Rendering/Post Rendering. Properties to help manage [Page Transitions](../mobile-apps-sites/page-transition-effects) and show an hourglass.

Auto -Pages will be automatically rendered. If the time to transition to this page is more them 1500 ms future transitions will automatically show an hourglass

Pre Rendering - The target page will be rendered before transitioning to that page. No hourglass will be shown

Post Rendering - The target page will be loaded and while the content is rendered an hourglass will be shown. See: [Transition Mode](../mobile-apps-sites/mobile-transition-mode)

</td>
</tr>
<tr>
<td width="191">

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
**Style**

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
BG Color

</td>
<td width="19">
</td>
<td width="765">
This is empty by default, which indicates that the Page's back color is taken from the App's [Theme](../the-console/console-tabs/themes-overview) . It can be reset the to Theme's Page Back Color by pressing "Use Theme" in the property's pop-up dialog.

</td>
</tr>
<tr>
<td width="191">
BG Image

</td>
<td width="19">
</td>
<td width="765">
This specifies a background image to your Page (i.e. behind your widgets)

</td>
</tr>
<tr>
<td width="191">
BG Repeat

</td>
<td width="19">
</td>
<td width="765">
This is where you can specify how a BG Image can repeat on the page (Repeat, Repeat X, Repeat Y)

</td>
</tr>
<tr>
<td width="191">
Text Font

</td>
<td width="19">
</td>
<td width="765">
This property brings up a dialog to set the default text font for items on this page

</td>
</tr>
<tr>
<td width="191">
Text Color

</td>
<td width="19">
</td>
<td width="765">
This property brings up a dialog to set the default text color for items on this page

</td>
</tr>
<tr>
<td width="191">
Shadow

</td>
<td width="19">
</td>
<td width="765">
This property brings up a dialog to configure how the page shadow appears in Live Mode, with vertical and horizontal offset, blur radius and color selection.

</td>
</tr>
<tr>
<td width="191">
Border

</td>
<td width="19">
</td>
<td width="765">
Specified the line width of the border surrounding the Page. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="191">
Border Radius

</td>
<td width="19">
</td>
<td width="765">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="191">
Padding

</td>
<td width="19">
</td>
<td width="765">
Used to specify the margin/padding around a widget when the parent container is in Relative Mode. See [Setting a Margin](../content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="191">
Centered

</td>
<td width="19">
</td>
<td width="765">
true/false. Select true to center your page in the users browser

</td>
</tr>
<tr>
<td width="191">
Display Hourglass Over

</td>
<td width="19">
</td>
<td width="765">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="191">
Custom CSS Classes

</td>
<td width="19">
</td>
<td width="765">
Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="191">
Widget Style

</td>
<td width="19">
</td>
<td width="765">
This indicates which Page Style should be used within the Theme. A Theme allows more than one Style to be configured for each Widget type.

</td>
</tr>
<tr>
<td width="191">
</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
**Grid**

</td>
<td width="19">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="191">
Snap to grid

</td>
<td width="19">
</td>
<td width="765">
This indicates whether you wish to see and use a snap to grid mechanism that allows Widgets to snap precisely into place. You may not need to use the Snap to Grid as AC supports a very nice [Drag Alignment](../content-and-app-layout/editing-and-laying-out--reference/widget-alignment-distribution) feature.

</td>
</tr>
<tr>
<td width="191">
Grid Size

</td>
<td width="19">
</td>
<td width="765">
The size, in pixels, of the Grid as used by the Snap to grid feature and property described above.

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
<td width="120">
</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](events/event-reference-list/mouse-events)

</td>
<td width="15">
</td>
<td width="120">
[General Events](events/event-reference-list/general-events)

</td>
<td width="17">
</td>
<td width="108">
[Key Events](events/event-reference-list/key-events)

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
<td width="15">
</td>
<td width="120">
On Page Show

</td>
<td width="17">
</td>
<td width="108">
On Key Press

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
<td width="15">
</td>
<td width="120">
On Page Leave

</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
<td width="15">
</td>
<td width="120">
On Resize

</td>
<td width="17">
</td>
<td width="108">
</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
<td width="15">
</td>
<td width="120">
On Page Prepare

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
</table>

## **See Also**

 - [Mouse Events](events/event-reference-list/mouse-events)

 - [Key Events](events/event-reference-list/key-events)

 - [General Events](events/event-reference-list/general-events)

