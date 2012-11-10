---
title: "Auth Button"
active_menu_item: developers
class_name: developers
full_width: true
---


This widget allows you to handle Authentication to your AC apps. Please see [Authentication for your Apps](../../product-guide/advanced-features/authentication-for-your-apps/) section for more detail

When the Action is defined as 'Sign In' the widget will be used by anyone accessing your App. Most Apps require a Sign In to verify the users are properly authenticated.

When the Action is defined as 'Sign Up' the widget allows Users to sign up to access your App. It collects relevant data such as username, password and agreement to terms and conditions. The Widget also supports Captcha verification and a Password Confirmation Check.

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
Internal class name of the widget.- WiziCore\_UI\_AuthButtonMobileWidget

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
<table>
<tr>
<td width="148">
Label

</td>
</tr>
</table>
</td>
<td width="15">
</td>
<td width="779">
The text that should be displayed on the Page for the Widget.

</td>
</tr>
<tr>
<td width="148">
Action

</td>
<td width="15">
</td>
<td width="779">
Sign In/Sign Up. Select to define the widget as a Sign In or Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Login Widget

</td>
<td width="15">
</td>
<td width="779">
Select the text widget that users enter in their login name

</td>
</tr>
<tr>
<td width="148">
Password Widget

</td>
<td width="15">
</td>
<td width="779">
Select the [Password](../authentication/authpassword) widget.

</td>
</tr>
<tr>
<td width="148">
User Name

</td>
<td width="15">
</td>
<td width="779">
Accesses a basic text Widget containing the User’s name. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Min Chars

</td>
<td width="15">
</td>
<td width="779">
The minimum number of characters required in the Password. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Confirm Widget

</td>
<td width="15">
</td>
<td width="779">
This accesses another Password Widget and matches the two passwords to check they are the same, and this can be linked with the confirm info and colors. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Confirm Colors

</td>
<td width="15">
</td>
<td width="779">
You can edit the colors of the Password match/mismatch label. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Confirm Info

</td>
<td width="15">
</td>
<td width="779">
This property accesses a Label Widget which shows whether both the password and the confirm password fields match, and informs the user if they don’t. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Captcha Widget

</td>
<td width="15">
</td>
<td width="779">
This accesses a [Captcha](../authentication/authcaptcha) Widget, to prevent computer automatic access. Used when widget is defined as Sign Up widget

</td>
</tr>
<tr>
<td width="148">
Remember Me Widget

</td>
<td width="15">
</td>
<td width="779">
Select the checkbox widget users can check to be remembered, Used when widget is defined as Sign In widget

</td>
</tr>
<tr>
<td width="148">
Login Redirection

</td>
<td width="15">
</td>
<td width="779">
Select the app to redirect to on successful login

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
Sizes

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See ['Sizes' Property Dialog](../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../product-guide/content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

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
Margin

</td>
<td width="15">
</td>
<td width="779">
Used to specify the margin around a widget when the parent container is in Relative Mode. See [Setting a Margin](../../product-guide/content-and-app-layout/introduction/setting-a-margin)

</td>
</tr>
<tr>
<td width="148">
Mobile Theme

</td>
<td width="15">
</td>
<td width="779">
Where you can set the Theme colors for the widget. See [Mobile Themes](../../product-guide/mobile-apps-sites/mobile-themes)

</td>
</tr>
<tr>
<td width="148">
Icon

</td>
<td width="15">
</td>
<td width="779">
Where you can set an icon for the button

</td>
</tr>
<tr>
<td width="148">
Icon Position

</td>
<td width="15">
</td>
<td width="779">
Where you can set the position of the icon

</td>
</tr>
<tr>
<td width="148">
Custom CSS Classes

</td>
<td width="15">
</td>
<td width="779">
## Where you define your CSS Style to customise your widgets  See also [Custom CSS Classes](../../product-guide/advanced-features/custom-css-classes/)

</td>
</tr>
<tr>
<td width="148">
Widget Style

</td>
<td width="15">
</td>
<td width="779">
This refers to the [Theme entry](../../product-guide/content-and-app-layout/introduction/themes-styles/themesmanage) that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

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
</tr>
<tr>
<td width="148">
[Auth Events](../events/event-reference-list/auth-events)

</td>
<td width="15">
</td>
<td width="120">
[Mouse Events](../events/event-reference-list/mouse-events)

</td>
</tr>
<tr>
<td width="148">
On Failure

</td>
<td width="15">
</td>
<td width="120">
On Click

</td>
</tr>
<tr>
<td width="148">
On Success

</td>
<td width="15">
</td>
<td width="120">
On Double Click

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Mouse Down

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Mouse Up

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Mouse Enter

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Mouse Leave

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Drag Start

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Drag Stop

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Resize Start

</td>
</tr>
<tr>
<td width="148">
</td>
<td width="15">
</td>
<td width="120">
On Resize Stop

</td>
</tr>
</table>

**See Also:**

 - [Sign In](../../product-guide/advanced-features/authentication-for-your-apps/sign-in) , [Sign Up](../../product-guide/advanced-features/authentication-for-your-apps/sign-up)

 - Mobile Widgets: [Text](mobtext.htm)

 - Authentication Widgets: [Password](../authentication/authpassword) , [Sign In](../authentication/authsign-in) , [Sign Up](../authentication/authsign-up) , [Captcha](../authentication/authcaptcha)

 - [Auth Events](../events/event-reference-list/auth-events)

 - [Mouse Events](../events/event-reference-list/mouse-events)

