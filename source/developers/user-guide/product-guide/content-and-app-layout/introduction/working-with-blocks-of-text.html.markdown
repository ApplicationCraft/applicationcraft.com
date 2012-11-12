---
title: "Working with Blocks of Text"
active_menu_item: developers
class_name: developers
full_width: true
---


For sites and content oriented applications, you will need to work with text in two main ways. We recommend watching the [very short videos](http://www.applicationcraft.com/mobile-application/developer-center/training-videos) on Layout and Design that show exactly how many key concepts work.

## Simple Text Titles and Labels

If you have a simple heading or line of text, then you select the Label widget from the toolbox on the left side of the designer and drag it onto your page. You can edit the text for the label directly in the Label property in the property bar on the right side.

![Label](/img/docs/label.png)

## Large Blocks of Text

If you want to display paragraphs of text, then you use the same Label widget. However, you select the Editor property in the property bar rather than the Label property. This brings up a rich text editor.

You will find that the Styles you have defined in your App are available in the Styles dropdown. However, if you paste web content from another site and that content contains formatting commands, it would override the Application Craft styles and potentially do some unintended things. For this reason, Application Craft removes style tags before pasting it in.

If you need the fullest control, then you should paste in HTML by switching to HTML edit mode

![HTMLEdit](/img/docs/htmledit.zoom72.png)

If you want to use HTML code, you can also use the [HTML](../../widget-properties-events/common/html2) widget

