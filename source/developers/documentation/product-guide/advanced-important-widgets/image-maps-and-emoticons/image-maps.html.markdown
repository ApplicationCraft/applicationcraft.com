---
title: "Image Maps"
active_menu_item: developers
class_name: developers
full_width: true
---


**What is an Image Map**

An image map is a list of coordinates defined in a specific image,

They can be used to allow users to click areas in your image that can then stored and/or allow you to dynamically interact with the user by writing [scripts](/developers/documentation/scripting-apis/client-scripting-overview/) . For example, a map of the world may have each country hyperlinked to further information about that country by using the [showMessage()](/developers/documentation/scripting-apis/client-api/app-functions/showmessage) or [pageJump()](/developers/documentation/scripting-apis/client-api/page-functions/pagejump) to send them to a specific page in your App, or to allow you to store the country they selected and to then report on that data.

On Area Click, On Area Mouse Enter and On Area Mouse Leave events are available.

The intention of an image map is to provide an easy way of linking various parts of an image without dividing the image into separate image files.

It is possible to create image maps by hand, using a text editor, however doing so requires that you know the coordinates of the areas that you wish to define. Image maps coded by hand are simple polygons.

Because creating image maps in a text editor requires much time and effort, there are many applications that allow the web designer to quickly and easily create image maps much as they would create shapes in a vector graphics editor.

Examples of these are Adobe's [Dreamweaver](http://www.adobe.com/products/dreamweaver/) or [KImageMapEditor](http://www.nongnu.org/kimagemap/index.html) (for KDE), and the imagemap plug in found in [GIMP](http://www.gimp.org/) . There are also a number of online Image Map Editors ( [http://toolserver.org/\~dapete/ImageMapEdit/ImageMapEdit.html](http://toolserver.org/~dapete/ImageMapEdit/ImageMapEdit.html) , [http://www.maschek.hu/imagemap/imgmap](http://www.maschek.hu/imagemap/imgmap) )

## An Embedded App Example

Click on the highlighted areas

<p style="margin: 0px 0px 0px 72px;">
<script src="http://ac-static.applicationcraft.com/ac/1.20/live/userlive.js" type="text/javascript">
  </script>
<script type="text/javascript">
   waInitForm("1dac28cc-1685-4713-9769-012a9241e97f", 350, 480,null,null,null, "http://ac.applicationcraft.com/live.html");
  </script>
</p>

**How to Set up an Image Map**

1: Insert your Image into your App.

2: Set the [Aspect Ratio](/developers/documentation/product-guide/widget-properties-events/common/image#general) to 'Original Size'

3: Go to the [Image Map](/developers/documentation/product-guide/widget-properties-events/common/image#imagemap) properties

![ImageMap](/img/docs/imagemap.png)

4: Set 'Use Map' to TRUE

5: If you want to allow users to select multiple areas, set 'Multi Select' to TRUE.

6: Select 'Map Data' to open the Image Map Dialog

![ImageMapDialog](/img/docs/imagemapdialog.zoom69.png)

From here:

You can manually define your areas using 'Add Row', entering in the Area Co-ordinates and associated value for that area,

You can 'Import' to paste in HTML code for the image mapping

or        You can 'Resource' to load in a CSV file that you have uploaded as a [Resource](/developers/documentation/product-guide/the-console/console-tabs/resources) .

The structure of your CSV should be 3 columns.

Col 1 = The area type (PolyLine, Circle etc)

Col 2 = the Coordinates for that area

Col 3 = the value you wish to give to that area (can be a numerical value or a name)

7: Set 'HighLight' to TRUE and then the HighLight Color and Opacity to control the coloring of the selected area(s) to the user

8: Set 'Outline' to TRUE and then the Outline Width,Color and Opacity to control the width and color of the outline to the selected area(s)

Example Files:

Download [Man Blue.png](http://www.applicationcraft.com/sites/applicationcraft/files/files/manblue.png)

Download [HumanBody.csv](http://www.applicationcraft.com/sites/applicationcraft/files/files/HumanBody.csv)

## See Also

 - [Image](/developers/documentation/product-guide/widget-properties-events/common/image#imagemap)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/watch?v=BMuc8a-ROjQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up Image Mapping [8:01]

