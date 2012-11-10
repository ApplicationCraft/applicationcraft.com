---
title: "Phase I - Development"
active_menu_item: developers
class_name: developers
full_width: true
---


We will soon be adding the ability to build Widgets entirely within AC. However, in the meantime we recommend that you initially develop using your own development tools. If you do not want to do this, then please go directly to Phase II which also works but is clunkier if you are making lots of changes.

From the 'type' dropdown select 'Load from URL'. This will tell AC that the widget code should be loaded from a specific url. This can be your own development server, for example. AC just needs to be able to access the url.

Next, at the top of the right panel, press the Source button. You will now paste in regular HTML that points to your widget.

    <script type='text/javascript' src='http://myDomain.com/myWidget.js'></script> 
    <script type='text/javascript' src='http://myDomain.com/myWidgetLibrary.js'></script> 
    <script type='text/javascript' src='http://myDomain.com/myWidget.js'></script> 
    AC.Core.Widgets().registerWidget(widgetClass, toolboxSection, "Widget Name", "", "", "http://icon_url");
    widgetClass
    "SimpleLabel"
    toolboxSection
    sections_extensible, widget_cat_common, widget_cat_mobile, =widget_cat_adv, widget_cat_auth, widget_cat_cont, widget_cat_chart, widget_cat_gauge
    "Widget Name"
   

You can also specify external js libraries

**Important** : if you use the Load from URL method, then you must add the following line below your widget code in order to register the Widget correctly.

Where

 - should match the class name, so in the case of the Hello World example, it would be

 - should be the constant for the section :

 - is the name that should appear underneath the Widget in the Toolbox

 - should be a link to the icon that should appear in the toolbox; one good approach is to upload you widget icon into the Resources tab of the Console and then refer to the url created for that resource.

