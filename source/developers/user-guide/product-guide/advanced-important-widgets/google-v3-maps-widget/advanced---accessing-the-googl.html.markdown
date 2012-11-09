---
title: "Advanced - Accessing the Google Object"
active_menu_item: developers
class_name: developers
full_width: true
---


Our goal is to simplify the functionality of Google Maps for Application Craft users as much as can reasonably be achieved without dumbing down the capabilities too much.

However, advanced users may want to access the underlying Google Maps object that we hide away from view. Accessing this is simple, as shown in the code snippet below.

## Example

    console.dir({map: app.w('googleMapsAdvanced').googleMap()});
    function _callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log('places founded');
    console.log('results.length : ' + results.length);
    }
    }
    function handler_googleMapsAdvanced_onIdle(){
    var googleMap = app.w('googleMapsAdvanced').googleMap();
    var boundsevent = googleMap.getBounds();
    service = new google.maps.places.PlacesService(googleMap);
    var request = {
    bounds: boundsevent,
    radius: '500',
    types: ['store']
    };
    service.search(request, _callback);
    }
   

Google Map Libraries can also be accessed by defining the libraries to load in the widget Libraries property

## Example

## See Also:

 - [googleMap()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/googlemap.htm)

