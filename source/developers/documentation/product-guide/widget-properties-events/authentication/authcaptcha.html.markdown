---
old_url: authcaptcha.htm
title: "Captcha"
active_menu_item: developers
class_name: developers
full_width: true
---


Captcha Verification prevents automated software from accessing your Apps.  You can edit the appearance of the Captcha text.

![Captcha](/img/docs/captcha.zoom89.png)

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
Internal class name of the widget.- WiziCore\_UI\_CaptchaWidget

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
Dots Level

</td>
<td width="15">
</td>
<td width="779">
Set on a level of 1-20, this property controls the density of dots on the Captcha image

</td>
</tr>
</table>
<table>
<tr>
<th style="vertical-align:top; width:149px; background-color:#ffffff;">
Lines Level

</th>
<th style="vertical-align:top; width:16px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:778px; background-color:#ffffff;">
Set on a level of 1-9, this property controls the density of lines on the Captcha image

</th>
</tr>
<tr>
<td width="149">
Font Size

</td>
<td width="16">
</td>
<td width="778">
The minimum number of characters required in the Password.

</td>
</tr>
<tr>
<td width="149">
</td>
<td width="16">
</td>
<td width="778">
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
Repeat

</td>
<td width="15">
</td>
<td width="779">
  If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

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
</td>
<td width="15">
</td>
<td width="779">
</td>
</tr>
</table>
<table>
<tr>
<td width="146">
<a id="style"> </a> **Style**

</td>
<td width="17">
</td>
<td width="779">
</td>
</tr>
<tr>
<td width="146">
Opacity

</td>
<td width="17">
</td>
<td width="779">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="146">
Font

</td>
<td width="17">
</td>
<td width="779">
Indicates the main font used by the Widget. If you override this and want to revert to the Theme's Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="146">
Margin

</td>
<td width="17">
</td>
<td width="779">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="146">
Border

</td>
<td width="17">
</td>
<td width="779">
Specified the line width of the border surrounding a Widget. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="146">
Border Radius

</td>
<td width="17">
</td>
<td width="779">
Specify the radius of the border

</td>
</tr>
<tr>
<td width="146">
Custom CSS Classes

</td>
<td width="17">
</td>
<td width="779">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="146">
Widget Style

</td>
<td width="17">
</td>
<td width="779">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
<tr>
<td width="146">
Image Pad Left

</td>
<td width="17">
</td>
<td width="779">
Specify the pad space to the left of the image

</td>
</tr>
<tr>
<td width="146">
Image Pad Right

</td>
<td width="17">
</td>
<td width="779">
Specify the pad space to the right of the image

</td>
</tr>
<tr>
<td width="146">
Display Hourglass Over

</td>
<td width="17">
</td>
<td width="779">
Inherit(default)/Widget/Whole App. Select Widget if you wish to present a custom hourglass over this widget

</td>
</tr>
<tr>
<td width="146">
Hourglass Animation

</td>
<td width="17">
</td>
<td width="779">
Where you can override the default hourglass image to an image of your Resources or 'None' where no hourglass is shown when Display Hourglass Over property is set to Widget

</td>
</tr>
</table>

<table>
<tr>
<td width="148">
  <strong>Supported Events:</strong>

</td>
</tr>
<tr>
<td width="148">
  <a href="/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events">Mouse Events</a>

</td>
</tr>
<tr>
<td width="148">
On Click

</td>
</tr>
<tr>
<td width="148">
On Double Click

</td>
</tr>
<tr>
<td width="148">
On Mouse Down

</td>
</tr>
<tr>
<td width="148">
On Mouse Up

</td>
</tr>
<tr>
<td width="148">
On Mouse Enter

</td>
</tr>
<tr>
<td width="148">
On Mouse Leave

</td>
</tr>
<tr>
<td width="148">
On Drag Start

</td>
</tr>
<tr>
<td width="148">
On Drag Stop

</td>
</tr>
<tr>
<td width="148">
On Resize Start

</td>
</tr>
<tr>
<td width="148">
On Resize Stop

</td>
</tr>
</table>

## See Also

 - [Captcha](/developers/documentation/product-guide/advanced-features/authentication-for-your-apps/captcha)

 - Mobile Widgets: [Auth Button](/developers/documentation/product-guide/widget-properties-events/mobile/auth-button)
 - [Mouse Events](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/mouse-events)

