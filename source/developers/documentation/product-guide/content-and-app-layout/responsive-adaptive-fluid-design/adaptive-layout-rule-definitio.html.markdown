---
title: "Adaptive Layout Rule Definition"
active_menu_item: developers
class_name: developers
full_width: true
---


The previous section described the background example. We now will see how you build the Adaptive Layout rules.

The 'Adaptive Layout' property is only available for Panel Container widgets. So, make sure you have used these to organize your page layout where you want a container to adapt its size in response to the browser size. In our example, we have two such Containers.

When you click on the Adaptive Layout property, you will see the following dialog.

![lyt-adaptive](/img/docs/lyt-adaptive.zoom75.png)

This dialog contains a list of browser width ranges. In the above example, there is only one range (between 200 and 600 pixels).  We can also see that should the browser fall within this range, the Percent Width property of the selected Panel Container is modified. Below, you can see the sub dialog that appears when you click in the Properties column.

![lyt-adaptive-rules](/img/docs/lyt-adaptive-rules.zoom88.png)

In this sub-dialog, you can add as many property changes that you need. In this case, we can see that the Percent Width is changed to 98% (overriding the default value of 48%).

What happens in the background is the following

 - If opened in a desktop browser, the default width (48%) will apply.

 - If the browser is shrunk or if opened on, say, a smartphone then the Panel Container's width will fall into the range of 200px to 600px.

 - At this point, the rule is triggered and the Percent width gets changed to 98%.

 - Once this happens, the Panel Container and the other Panel Container next to it cannot fit into the available width and so the second (and third and fourth if there are more) will be forced to appear below.

 - If the browser is enlarged, or on a tablet the orientation changes back, so the browser width is no longer within the 200px to 600px range, then the default settings (48% again) will be applied.

Please refer to the images in the previous section when thinking about all this.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/cHbncpuUwo8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Adaptive Rules [5:50]

