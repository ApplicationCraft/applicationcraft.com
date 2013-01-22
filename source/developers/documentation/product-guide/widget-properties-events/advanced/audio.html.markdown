---
old_url: audio.htm
title: "Audio"
active_menu_item: developers
class_name: developers
full_width: true
---


April 2012 - This widget is deprecated Please use [HTML5 Audio](/developers/documentation/product-guide/widget-properties-events/advanced/html5-audio) widget


<table>
<tr>
<td width="172">
<a id="general"> </a> <b>General</b>

</td>
<td width="21">
</td>
<td width="754">
</td>
</tr>
<tr>
<td width="172">
Widget Class

</td>
<td width="21">
</td>
<td width="754">
Internal class name of the widget. - MediaElementAudio

</td>
</tr>
<tr>
<td width="172">
Name

</td>
<td width="21">
</td>
<td width="754">
This is the Widget name that is displayed when references are made to the Widget. You can choose any name that includes alphanumeric characters.

</td>
</tr>
<tr>
<td width="172">
Source

</td>
<td width="21">
</td>
<td width="754">
  Specify the URL(s) or Resource(s) to load the video from. See <a href="/developers/documentation/product-guide/advanced-important-widgets/video-audio-widgets/sources">Source</a>

</td>
</tr>
<tr>
<td width="172">
Autoplay

</td>
<td width="21">
</td>
<td width="754">
Play the video when the page is displayed

</td>
</tr>
<tr>
<td width="172">
Controls

</td>
<td width="21">
</td>
<td width="754">
Use the Widget's in-built video controls

</td>
</tr>
<tr>
<td width="172">
Preload

</td>
<td width="21">
</td>
<td width="754">
Determines whether the video should be preloaded (not YouTube)

</td>
</tr>
<tr>
<td width="172">
Volume

</td>
<td width="21">
</td>
<td width="754">
The default volume level

</td>
</tr>
</table>
<table>
<tr>
<td width="172">
<a id="layout"> </a> <b>Layout</b>

</td>
<td width="21">
</td>
<td width="754">
</td>
</tr>
<tr>
<td width="172">
X

</td>
<td width="21">
</td>
<td width="754">
Number of pixels from the left edge of the Page.

</td>
</tr>
<tr>
<td width="172">
Y

</td>
<td width="21">
</td>
<td width="754">
Number of pixels from the top edge of the Page.

</td>
</tr>
<tr>
<td width="172">
Sizes

</td>
<td width="21">
</td>
<td width="754">
  Where you can set the Width and Height of the widget. If a widget is within a Container in Vertical or Horizontal mode, then the widget can also be made to change size in response to the size of the display width and height See <a href="/developers/documentation/product-guide/content-and-app-layout/responsive-adaptive-fluid-design/sizes-property-dialog">'Sizes' Property Dialog</a>

</td>
</tr>
<tr>
<td width="172">
Repeat

</td>
<td width="21">
</td>
<td width="754">
  Find out more about this in <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/repeating-widgets-across-multi">Repeating Widgets Across Multiple Pages</a> .

</td>
</tr>
<tr>
<td width="172">
Z-Index

</td>
<td width="21">
</td>
<td width="754">
A number that indicates the imaginary layer that the Widget is in. If you imagine several Widgets all placed over one another, the top-most Widget has the highest Z-Index and the bottom most Widget has the lowest. You can adjust the Z-Index by changing the value. You can also use the right-click menu to adjust these in a friendlier way.

</td>
</tr>
<tr>
<td width="172">
Anchors

</td>
<td width="21">
</td>
<td width="754">
  This is used in conjunction with "Docked" App Pages. You can use this to allows a Widget's X, Y, Width and Height to be automatically altered as the browser window is resized. See <a href="/developers/documentation/product-guide/content-and-app-layout/editing-and-laying-out-reference/widget-anchoring">Docking & Anchoring</a> .

</td>
</tr>
<tr>
<td width="172">
Align in Container

</td>
<td width="21">
</td>
<td width="754">
Left/Center/Right. Set as required to align the widget within its parent container

</td>
</tr>
</table>
<table>
<tr>
<td width="174">
<a id="behavior"> </a> <b>Behavior</b>

</td>
<td width="20">
</td>
<td width="748">
</td>
</tr>
<tr>
<td width="174">
Drag and Drop

</td>
<td width="20">
</td>
<td width="748">
If set to true, the user is able to drag and drop the widget with the mouse at run time

</td>
</tr>
<tr>
<td width="174">
Resizing

</td>
<td width="20">
</td>
<td width="748">
Disable/Enable. Set to True to allow the widget to be resized at Runtime. Configurable Max/Min Width and Height, Right & Bottom, Top & Left or All

</td>
</tr>
<tr>
<td width="174">
Visible

</td>
<td width="20">
</td>
<td width="748">
Set to False if you want the Widget to appear hidden by default. You would use Javascript to override this at a later stage.

</td>
</tr>
<tr>
<td width="174">
Enable

</td>
<td width="20">
</td>
<td width="748">
Set to false to leave the Widget visible but to prevent any user interaction

</td>
</tr>
</table>
<table>
<tr>
<td width="174">
<a id="data"> </a> <b>Data</b>

</td>
<td width="18">
</td>
<td width="750">
Not currently supported

</td>
</tr>
</table>
<table>
<tr>
<table>
<tr>
<td width="176">
<a id="style"> </a> <b>Style</b>

</td>
<td width="16">
</td>
<td width="752">
</td>
</tr>
<tr>
<td width="176">
Opacity

</td>
<td width="16">
</td>
<td width="752">
This % value specifies the transparency of the Widget.

</td>
</tr>
<tr>
<td width="176">
Margin

</td>
<td width="16">
</td>
<td width="752">
  Used to specify the margin around a widget when the parent container is in Relative Mode. See <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/setting-a-margin">Setting a Margin</a>

</td>
</tr>
<tr>
<td width="176">
Box Sizing

</td>
<td width="16">
</td>
<td width="752">
content-box/border-box. Content-box - The padding or border of the element are laid out and drawn outside the specified width and height. Border-box -The padding or border element is laid out and drawn inside the specified width and height.

</td>
</tr>
<tr>
<td width="176">
Border

</td>
<td width="16">
</td>
<td width="752">
Controls Border for whole container, using Border dialog

</td>
</tr>
<tr>
<td width="176">
BG Color

</td>
<td width="16">
</td>
<td width="752">
Set the background color of the Widget.

</td>
</tr>
<tr>
<td width="176">
Custom CSS Classes

</td>
<td width="16">
</td>
<td width="752">
  Where you define your CSS Style to customise your widgets  See also <a href="/developers/documentation/product-guide/advanced-features/custom-css-classes/">Custom CSS Classes</a>

</td>
</tr>
<tr>
<td width="176">
Widget Style

</td>
<td width="16">
</td>
<td width="752">
  This refers to the <a href="/developers/documentation/product-guide/content-and-app-layout/introduction/themes-styles/themesmanage">Theme entry</a> that should be used to set the Widget's default appearance. Once a Theme Style has been selected, individual components such as Font and Colors can be Set to False if you want the Widget to appear hidden by default.

</td>
</tr>
</table>

