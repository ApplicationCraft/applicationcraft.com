---
title: New Google Maps V3 Widget
author: Freddy May
old_url: "/blog/721-new-google-maps-v3-widget"
date: 2012-01-09
tags: mobile, ide, google maps
class_name: blog
full_width: true
image: blog/maps0.png
---

In the next few weeks, we will be releasing some exciting new Widgets and features (Reporting, Mail Merge & Document Processing, List Management, Mobile Image Viewer to name a few). I will be describing these in our blog as they start to appear. Our first one is a very cool Google V3 Maps Widget that gives you full map control (display, markers, areas, polygons, polylines, event handling, data binding and more) with the Application Craft ease-of-use.

###The Advanced Maps Widget
At the time of writing, this feature is in testing and will be released in a beta format in mid January 2012. It is already pretty well documented and if anyone wants to take a look at the User Guide, here is the link : <a href="http://www.applicationcraft.com/revisions/current/docs/user-guide/index.html?google_v3_maps_widget.htm" target="_blank">User Guide - Maps</a>

###Quick Overview Video
The best way to get a quick idea of the Maps capabilities is to watch the video below.

<a target="_blank"  href="http://www.youtube.com/v/itxUNWlFuuk?autoplay=1&amp;hd=1&amp;fs=1&amp;showsearch=0&amp;rel=0&amp;" title="AC Maps Widget"><img alt="" src="/img/blog/maps1.png" /></a>


###Some Sample Code
The purpose of our implentation is to allow easy access to Maps without having to write down and dirty code requiring a detailed knowledge of the Google API. Advanced users can easily hack into the underlying map component if they want.

This code shows how easy it is to add a marker to to map including controlling the ' on mouse over' and 'on click' content.

    // Add a marker and OnMouseOver and OnClick content. Will use 
    // the default Marker icon
    obj = app.w('mapWidget').addMarker(37.44, -122.1, overContentString, clickContentString);
    // Add another marker without any content but with a custom icon
    app.w('mapWidget').addMarker(37.55, -122.15, "", "", customImageURL);

Setting a Line overlay is just an array or coordinate pairs. You can control style property easily too, with an optional parameter.

    var polylinePath = [
      [37.772323, -122.214897],
      [21.291982, -157.821856],
      [-18.142599, 178.431],
      [-27.46758, 153.027892]
    ];
    polylineObj = app.w('mapWidget').addPolyline(polylinePath);

This next example shows how you can take a large array of data, that may have been retrieved from an API call for example, and populate it quickly into a map. This also allows you to create different overlay types from the same call. The populateWidget() function also allows you to use complex object arrays and map data from anywhere within your object structure. Go to the User Guide for good explanations of this.

    function handler_actionBtn17_onClick(mouseev) {
      polylineObj = null;
      polygonObj = null;
      circleObj = null;
      rectObj = null;

      // Hard coded array for demo purposes. Your array would 
      // probably created with something like app.httpRequest()
      var overlaysArr = [
        {
          type: 0,
          coords: "41.878113,-87.629798",
          mouseOverHTML: "<div>On Over HTML</div>",
          onClickHTML: "<p>Mouse click!!!</p>",
          markerImageURL: "http://www.ixbt.com/images/chart_bar.png"
        }, {
          overlayId: 'polylineId',
          type: 1, coords: "41.878113,-87.629798;47.878113,-87.629798;61.878113,-67.629798",
          strokeColor: "#ff0000",
          strokeOpacity: 0.7
        }, {
          type: AC.Widgets.GoogleMapsAdvanced.OVERLAY_TYPE_POLYGON,
          coords: "21.878113,-77.629798;37.878113,-77.629798;41.878113,-67.629798",
          strokeColor: "#000000",
          strokeOpacity: 0.7,
          strokeWeight: 2,
          fillColor: "#00ff00",
          fillOpacity: 0.5
        }, {
          type: AC.Widgets.GoogleMapsAdvanced.OVERLAY_TYPE_CIRCLE,
          coords: "61.878113,-57.629798",
          radius: 380000,
          strokeColor: "#000000",
          strokeOpacity: 0.7,
          strokeWeight: 2,
          fillOpacity: 0.5
        }, {
          type: 4,
          coords: "31.878113,-57.629798;11.878113,-37.629798",
          strokeColor: "#00ff00",
          strokeOpacity: 0.7,
          strokeWeight: 1,
          fillColor: "#00ffff",
          fillOpacity: 0.7
        }
      ];

      // This object is used to map from the array into the Map 
      // Widget. See populateWidget() in the User Guide
      var overlaysMap = {
        id: 'overlayId', 
        type:'type',
        coords: "coords",
        radius:"radius",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        mouseOverHTML:"mouseOverHTML",
        onClickHTML: "onClickHTML",
        markerImageURL: "markerImageURL"
      };

      app.populateWidget("mapWidget", overlaysArr, overlaysMap);
    }

![Maps](/img/blog/maps2.png "Google maps") 

And the result looks like this (Marker with custom icon, line, circle, polygon, rectangle)
