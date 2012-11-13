---
title: "Adaptive Layout Overview"
active_menu_item: developers
class_name: developers
full_width: true
---


Adaptive Layout, sometimes known as Responsive or Fluid Design, is one of the most powerful features in Application Craft. It lets you lay out one single App and then have that App appear in varying formats depending on the size of the browser window.

This behavior is especially powerful when designing applications that need to run on desktop, tablet and smartphones.

Take a look at the example below. Here you can see a screen that is laid out to suit a desktop format. There is a container that contains two child containers - the Features/Benefits collapsibles are in one and the video image is the other. There are each set to 48% by default.

![lyt-adaptive-wide](/img/docs/lyt-adaptive-wide.zoom91.png)

But what happens if the browser is very narrow, or it is displayed on a smartphone? In this situation you want the image to display underneath the Features/Benefits. The way this is done is using 'Adaptive Layout' rules.

![lyt-adaptive-narrow](/img/docs/lyt-adaptive-narrow.png)

The one important thing that you will notice in the above image is that the 2 child containers are clearly no longer occupying 48% of the width, but closer to 100%. This is because the layout has been 'adapted' to suit the available browser width. This is controlled using the 'Adaptive Layout' property in the General section of the container's property bar.

In our example, BOTH child containers need to have an adaptive rule define, as described in the next topic.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/1gkznrSEUBs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) An overview of Responsive Design [1:20]

