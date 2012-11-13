---
title: "YouTube"
active_menu_item: developers
class_name: developers
full_width: true
---


The You Tube Widget lets you play You Tube videos in your apps.

You can also access the You Tube player object with [getYoutubePlayer()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getyoutubeplayer) . For more information and other advanced use, see [https://developers.google.com/youtube/iframe\_api\_reference](https://developers.google.com/youtube/iframe_api_reference)

If compiling for iOS, you will need to set the [PhoneGap App Options](/developers/user-guide/ac-mobile-build-phonegap/cordova/apps-developed-with-application-craft/enabling-device-features) property 'Open all links in WebView' to 'true'.

<table>
<tr>
<td width="156">
<a id="general"> </a> **General**

</td>
<td width="24">
</td>
<td width="762">
</td>
</tr>
<tr>
<td width="156">
Widget Class

</td>
<td width="24">
</td>
<td width="762">
Internal class name of the widget. -YouTube

</td>
</tr>
<tr>
<td width="156">
Name

</td>
<td width="24">
</td>
<td width="762">
.This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="156">
Video ID

</td>
<td width="24">
</td>
<td width="762">
The You Tube Video Id

</td>
</tr>
<tr>
<td width="156">
Autoplay

</td>
<td width="24">
</td>
<td width="762">
Play the video when the page is displayed

</td>
</tr>
<tr>
<td width="156">
Controls

</td>
<td width="24">
</td>
<td width="762">
Use the Widget's in-built video controls

</td>
</tr>
<tr>
<td width="156">
Volume

</td>
<td width="24">
</td>
<td width="762">
The default volume level

</td>
</tr>
<tr>
<td width="156">
Autohide

</td>
<td width="24">
</td>
<td width="762">
Show/Hide/Hide ProgressBar

</td>
</tr>
<tr>
<td width="156">
</td>
<td width="24">
</td>
<td width="762">
</td>
</tr>
</table>
<table>
<tr>
<td width="155">
<a id="layout"> </a> **Layout**

</td>
<td width="22">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="155">
## X

</td>
<td width="22">
</td>
<td width="765">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="155">
Y

</td>
<td width="22">
</td>
<td width="765">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="155">
Sizes

</td>
<td width="22">
</td>
<td width="765">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="155">
Repeat

</td>
<td width="22">
</td>
<td width="765">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi) .

</td>
</tr>
<tr>
<td width="155">
Z-Index

</td>
<td width="22">
</td>
<td width="765">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="155">
Anchors

</td>
<td width="22">
</td>
<td width="765">
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](/developers/user-guide/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring) .

</td>
</tr>
<tr>
<td width="155">
Align in Container

</td>
<td width="22">
</td>
<td width="765">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
<tr>
<td width="155">
</td>
<td width="22">
</td>
<td width="765">
</td>
</tr>
</table>
<table>
<tr>
<td width="154">
<a id="behavior"> </a> **Behavior**

</td>
<td width="22">
</td>
<td width="766">
</td>
</tr>
<tr>
<td width="154">
Drag and Drop

</td>
<td width="22">
</td>
<td width="766">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="154">
Resizing

</td>
<td width="22">
</td>
<td width="766">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="154">
Visible

</td>
<td width="22">
</td>
<td width="766">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="154">
Enable

</td>
<td width="22">
</td>
<td width="766">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
<tr>
<td width="154">
</td>
<td width="22">
</td>
<td width="766">
</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="data"> </a> **Data**

</td>
<td width="29">
</td>
<td width="765">
</td>
</tr>
<tr>
<td width="148">
View

</td>
<td width="29">
</td>
<td width="765">
Select the view to use

</td>
</tr>
<tr>
<td width="148">
Fields

</td>
<td width="29">
</td>
<td width="765">
This property is used to allow you to set which data fields are taken from the View and used in the Widget. Read the [Fields](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fields/) section for more details.

</td>
</tr>
<tr>
<td width="148">
Group By

</td>
<td width="29">
</td>
<td width="765">
This allows you to Group data within a View in the same way you would with a SQL statement. Read the [Group By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/fiieldsgroup-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Order By

</td>
<td width="29">
</td>
<td width="765">
Specifies the order in which data is presented to the Widget.  Read the [Order By](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/order-by) section for more details.

</td>
</tr>
<tr>
<td width="148">
Filter

</td>
<td width="29">
</td>
<td width="765">
This is a global, static filter that can be defined for each View in your App.

</td>
</tr>
<tr>
<td width="148">
Drill Filter

</td>
<td width="29">
</td>
<td width="765">
This property controls the Drill Down filter that is set when a Widget is clicked on whose Broadcast property is set to True. You will be shown the Expression Editor and you can specify the precise condition that should be applied to the View that the Widget is connected to. Read the [Drill Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/drill-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Broadcast

</td>
<td width="29">
</td>
<td width="765">
Indicates whether a click action on a Widget should trigger a Drill Down on any other Widgets that a) share the same Data Source and b) whose Listen property is set. Read the [Broadcast](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/broadcast) section for more details.

</td>
</tr>
<tr>
<td width="148">
Listen

</td>
<td width="29">
</td>
<td width="765">
This indicates whether the Widget should react to a Drill Down action on a common View. Read the [Listen](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/listen) section for more details.

</td>
</tr>
<tr>
<td width="148">
Reset Filter

</td>
<td width="29">
</td>
<td width="765">
Indicates whether a Drill Down on the Widget should reset the View's filter or whether it should add to the existing filter. Read the [Reset Filter](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/reset-filter) section for more details.

</td>
</tr>
<tr>
<td width="148">
Auto Load

</td>
<td width="29">
</td>
<td width="765">
Set to true to automatically fetch data from assigned view.

</td>
</tr>
</table>
<table>
<tr>
<td width="148">
<a id="style"> </a> **Style**

</td>
<td width="26">
</td>
<td width="768">
</td>
</tr>
<tr>
<td width="148">
Player Theme

</td>
<td width="26">
</td>
<td width="768">
Dark/Light

</td>
</tr>
<tr>
<td width="148">
Opacity

</td>
<td width="26">
</td>
<td width="768">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="148">
Margin

</td>
<td width="26">
</td>
<td width="768">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](/developers/user-guide/product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="148">
BG Color

</td>
<td width="26">
</td>
<td width="768">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

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
<td width="200">
</td>
</tr>
<tr>
<td width="148">
[Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)

</td>
<td width="15">
</td>
<td width="200">
[General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)

</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
<td width="15">
</td>
<td width="200">
On Player Ready

</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
<td width="15">
</td>
<td width="200">
On State Change

</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
<td width="15">
</td>
<td width="200">
On Error

</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
<td width="15">
</td>
<td width="200">
On Playback Quality Change

</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
<td width="15">
</td>
<td width="200">
</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
<td width="15">
</td>
<td width="200">
</td>
</tr>
</table>

## See Also

 - [Mouse Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/mouse-events)
 - [General Events](/developers/user-guide/product-guide/widget-properties-events/events/event-reference-list/general-events)
 - [Video, Audio & YouTube Widget Methods](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/)

