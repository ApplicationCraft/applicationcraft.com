---
title: "Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


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
Internal class name of the widget.- Scandit

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
App Key

</td>
<td width="15">
</td>
<td width="779">
Enter your Scandit App Key. See [http://www.scandit.com/product-api/](http://www.scandit.com/product-api/)

</td>
</tr>
<tr>
<td width="148">
Vibrate

</td>
<td width="15">
</td>
<td width="779">
True/False. True to vibrate on successful scan

</td>
</tr>
<tr>
<td width="148">
Beep

</td>
<td width="15">
</td>
<td width="779">
True/False.  True to beep on successful scan

</td>
</tr>
<tr>
<td width="148">
Scan 1D

</td>
<td width="15">
</td>
<td width="779">
True/False. True to allow regular 1D barcodes

</td>
</tr>
<tr>
<td width="148">
Scan 2D

</td>
<td width="15">
</td>
<td width="779">
True/False. True to allow QR and other codes

</td>
</tr>
<tr>
<td width="148">
Hotspot X

</td>
<td width="15">
</td>
<td width="779">
Set the location where recognition actively scans for the barcode. X can be between 0 (top of the app) and 1 (bottom of the app)

</td>
</tr>
<tr>
<td width="148">
Hotspot Y

</td>
<td width="15">
</td>
<td width="779">
Set the location where recognition actively scans for the barcode. Y can be between 0 (left hand side of the app) and 1 (right hand side of the app)

</td>
</tr>
<tr>
<td width="148">
Lucky Shot

</td>
<td width="15">
</td>
<td width="779">
True/False. Enables or disables the lucky shot option if the barcode was not definitely recognized.

</td>
</tr>
<tr>
<td width="148">
Instruction Text

</td>
<td width="15">
</td>
<td width="779">
Sets the text that will be displayed above the viewfinder to tell the user to align it with the

barcode that should be recognized.

</td>
</tr>
<tr>
<td width="148">
Search Go Text

</td>
<td width="15">
</td>
<td width="779">
Sets the caption of the manual entry at the top when a barcode of valid length has been entered.

</td>
</tr>
<tr>
<td width="148">
Toolbar Cancel Text

</td>
<td width="15">
</td>
<td width="779">
Sets the caption of the toolbar button.

</td>
</tr>
<tr>
<td width="148">
Scan Color

</td>
<td width="15">
</td>
<td width="779">
Sets the color of the static viewfinder and while tracking before the code has been recognized.

</td>
</tr>
<tr>
<td width="148">
Decoded Color

</td>
<td width="15">
</td>
<td width="779">
Sets the color of the viewfinder when the code has been recognized.

</td>
</tr>
<tr>
<td width="148">
Min Length

</td>
<td width="15">
</td>
<td width="779">
Sets the minimum size a barcode in the manual entry field has to have to possibly be valid.

</td>
</tr>
<tr>
<td width="148">
Max Length

</td>
<td width="15">
</td>
<td width="779">
Sets the maximum size a barcode in the manual entry field can have to possibly be valid.

</td>
</tr>
<tr>
<td width="148">
Options

</td>
<td width="15">
</td>
<td width="779">
Where you can set the button properties - Shape/Image/Text/pushEffect/Sticky/Fill/Image etc. See above

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
Width

</td>
<td width="15">
</td>
<td width="779">
Width of the Widget in pixels.

</td>
</tr>
<tr>
<td width="148">
Height

</td>
<td width="15">
</td>
<td width="779">
Height of the Widget in pixels.

</td>
</tr>
<tr>
<td width="148">
Repeat

</td>
<td width="15">
</td>
<td width="779">
If set to True, this displays the Widget on either all pages except ones you specify in a list or only on pages you choose from a list.  Find out more about this in [Repeating Widgets Across Multiple Pages](../../../content-and-app-layout/editing-and-laying-out--reference/repeating-widgets-across-multi) .

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
This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See [Docking & Anchoring](../../../content-and-app-layout/editing-and-laying-out--reference/widget-anchoring) .

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
Padding

</td>
<td width="15">
</td>
<td width="779">
Used to specify the padding around a widget.

</td>
</tr>
</table>
