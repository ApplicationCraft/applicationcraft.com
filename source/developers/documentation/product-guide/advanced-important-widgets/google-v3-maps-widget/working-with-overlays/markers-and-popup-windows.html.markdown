---
old_url: markers_and_popup_windows.htm
title: "Markers and Popup Windows"
active_menu_item: developers
class_name: developers
full_width: true
---


A Marker is an icon added to the Map to denote a point location. Markers are overlays but there are some slight differences. The main thing that is different is the ability to add your own HTML popup content for both mouseover and click actions.

Below is some code that shows how to create a new Marker using [addMarker()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) . Don't forget that you can also create multiple Markers from any simple or complex array using the [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) function.

Note that you can modify the Marker image either by setting the widget property or using the [addMarker()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) function as shown below.

    function handler_actionBtn_onClick(mouseev){
        var overContentString = '<div id="content">'+
        '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
        '</div>';
     
        var clickContentString = '<div id="content">'+
        '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335 km (208 mi) '+
        'south west of the nearest large town, Alice Springs; 450 km '+
        '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';
     
        // Let's add 2 Markers, one with hover and click popup information
        var objName1 = app.w('googleMapsAdvanced').(37.44, -122.1, overContentString, clickContentString, imgUrl);
        var objName2 = app.w('googleMapsAdvanced').(37.55, -122.15);
    }
   

Refer to [addMarker()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) in the [Client API](/developers/documentation/scripting-apis/client-api/) section for full details on the function.

