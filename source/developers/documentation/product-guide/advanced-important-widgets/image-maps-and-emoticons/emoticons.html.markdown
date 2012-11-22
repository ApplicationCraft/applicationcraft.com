---
old_url: emoticons.htm
title: "Emoticons"
active_menu_item: developers
class_name: developers
full_width: true
---


**What is an Emoticon**

Emoticons can provide a visual presentation to users of their selection from the Slider widget so as they move the slider you can show to the user different images

## An Embedded App Example

Move the slider to see the image change

<p style="margin: 0px 0px 0px 72px;">
<script src="http://ac-static.applicationcraft.com/ac/1.20/live/userlive.js" type="text/javascript">
  </script>
<script type="text/javascript">
   waInitForm("cf3cb9a9-38f8-49f8-94a4-1fa58ae55ab5", 150, 150,null,null,null, "http://ac.applicationcraft.com/live.html");
  </script>
</p>

**How to Set up an Emoticon**

1: Insert a [Slider](/developers/documentation/product-guide/widget-properties-events/advanced/sliders) and [Image](/developers/documentation/product-guide/widget-properties-events/common/image) widget into your App

2: Align them as required.

For Vertical Sliders, we suggest placing the Image to the left or right of the slider

For Horizontal Sliders, we suggest placing the Image above or below the slider

3: Set up your image associating it to the Image you wish to present as the default image to the user

4: Set up your Slider as required. The Max/Min values and Steps should be appropriate for the number of Images you wish to present.

If for instance you have 4 images to present, you could have Min = 1, Max = 4, Step = 1

![slider](/img/docs/slider.png)

5: Set the Bind Widget to the Image widget you have added to your App.

6: Select 'Bindings' to open the List of Items dialog

![Bindings](/img/docs/bindings.zoom73.png)

From here:

You can manually define your bindings using 'Add Row', entering in the Slider value and click the Resource '...' to associate that selection value to the appropriate Image that you have uploaded as a [Resource](/developers/documentation/product-guide/the-console/console-tabs/resources)

![bindingadd](/img/docs/bindingadd.zoom78.png)

You can 'Import Resource ' to load in a CSV file that you have uploaded as a [Resource](/developers/documentation/product-guide/the-console/console-tabs/resources) .

The structure of your CSV should be 2 columns.

Col 1 = The selection values in your Slider

Col 2 = The URL of your Images to associate to the Slider Value selected

## See Also

 - [Image](/developers/documentation/product-guide/widget-properties-events/common/image#imagemap)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/watch?v=Mn-UufyxA2A?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up Emoticon [2:01]

