---
old_url: pswipeproperties.htm
title: "Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


<table>
<tr>
<td width="237">
<a id="general"> </a> <b>General</b>

</td>
<td width="20">
</td>
<td width="690">
</td>
</tr>
<tr>
<td width="237">
Widget Class

</td>
<td width="20">
</td>
<td width="690">
Internal class name of the widget. - Photoswipe

</td>
</tr>
<tr>
<td width="237">
Name

</td>
<td width="20">
</td>
<td width="690">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="237">
Source

</td>
<td width="20">
</td>
<td width="690">
Specify the URL(s) or Resource(s) to load for the thumbnail and full size images

</td>
</tr>
<tr>
<td width="237">
Mode

</td>
<td width="20">
</td>
<td width="690">
gallery/swipe. Select gallery mode to show thumbnail images in the widget and 'select' to go to gallery mode. Select swipe mode to not show thumbnail images and allow direct swiping in the widget to show other images.

</td>
</tr>
<tr>
<td width="237">
Auto Start SlideShow

</td>
<td width="20">
</td>
<td width="690">
true/false. Select true to automatically start the slide show

</td>
</tr>
<tr>
<td width="237">
Caption And Toolbar AutoHide Delay

</td>
<td width="20">
</td>
<td width="690">
Specify the time (ms) to auto hide the Caption and Toolbar

</td>
</tr>
<tr>
<td width="237">
Caption And Toolbar Opacity

</td>
<td width="20">
</td>
<td width="690">
Set the opacity of the Caption and Toolbar

</td>
</tr>
<tr>
<td width="237">
Image Scale Method

</td>
<td width="20">
</td>
<td width="690">
fit/fitNoUpscale/zoom. "fit" ensures the image always fits the screen. "fitNoUpscale" works like "fit" but will never upscale the image. "zoom" the image will always fill the full screen, this may cause the image to be "zoomed" in and cropped.

</td>
</tr>
<tr>
<td width="237">
Allow Rotation On User Zoom

</td>
<td width="20">
</td>
<td width="690">
true/false.  iOS only - Allow the user to rotate images whilst zooming/panning.

</td>
</tr>
</table>
<table>
<tr>
<td width="237">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="20">
</td>
<td width="690">
</td>
</tr>
<tr>
<td width="237">
X

</td>
<td width="20">
</td>
<td width="690">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="237">
Y

</td>
<td width="20">
</td>
<td width="690">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="237">
Sizes

</td>
<td width="20">
</td>
<td width="690">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="237">
Repeat

</td>
<td width="20">
</td>
<td width="690">
  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="237">
Z-Index

</td>
<td width="20">
</td>
<td width="690">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="237">
Anchors

</td>
<td width="20">
</td>
<td width="690">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="237">
Align in Container

</td>
<td width="20">
</td>
<td width="690">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>

</table>
<table>
<tr>
<td width="237">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="21">
</td>
<td width="684">
</td>
</tr>
<tr>
<td width="237">
Drag and Drop

</td>
<td width="21">
</td>
<td width="684">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="237">
Resizing

</td>
<td width="21">
</td>
<td width="684">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="237">
Visible

</td>
<td width="21">
</td>
<td width="684">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="237">
Enable

</td>
<td width="21">
</td>
<td width="684">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>

</table>
<table>
<tr>
<td width="237">
<a id="data"> </a> <b>Data</b>

</td>
<td width="21">
</td>
<td width="684">
Not currently supported

</td>
</tr>

</table>
<table>
<tr>
<td width="237">
<a id="style"> </a> <b>Style</b>

</td>
<td width="20">
</td>
<td width="690">
</td>
</tr>
<tr>
<td width="237">
Opacity

</td>
<td width="21">
</td>
<td width="684">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="237">
Margin

</td>
<td width="21">
</td>
<td width="684">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="237">
Border

</td>
<td width="21">
</td>
<td width="684">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="237">
BG Color

</td>
<td width="21">
</td>
<td width="684">
The background color of the Widget. If it is empty, the App's Theme Back Color will be used. If you override this and want to revert to the Theme Style Back Color, then open up the property dialog and select the "Use Theme" option.

</td>
</tr>
<tr>
<td width="237">
Column Width

</td>
<td width="21">
</td>
<td width="684">
Enter the % width for each column in the thumbnail view

</td>
</tr>
</table>

