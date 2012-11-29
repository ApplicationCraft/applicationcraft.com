---
old_url: custom_class.htm
title: "Custom Class Property"
active_menu_item: developers
class_name: developers
full_width: true
---


To customise widgets to accept your CSS style, add the Custom CSS Classes property in the Style section

![CustomClass.](/img/docs/customclass..zoom74.png)

**Example CSS file**

    .label {
        border: 1px solid #fff;
        text-shadow: none;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-shadow: none;
        background: #e0e0e0;
        border: none;
        height: 26px;
        -moz-border-radius: 29px;
        -webkit-border-radius: 29px;
        border-radius: 29px;
        margin:10px;
        padding: 6px 0px 0px 15px;
    }
     
This will then customise the label widget as:

![CustomLabel](/img/docs/customlabel.png)
     
     
    .txtSize .m-ui-input-text {
    font-size :  26px !important;
    font-family : Verdana;
    }
  


This will then set the font family to Verdana and the font size to 26px for a Mobile Text Widget

![css\_text](/img/docs/css_text.png)

Note that these changes will not show in Preview mode

