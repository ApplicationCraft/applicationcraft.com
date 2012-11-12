---
title: "Resize Events"
active_menu_item: developers
class_name: developers
full_width: true
---


There may be situations where you want direct control of specific widgets as your app or page resizes to different device screens or when the orientation of a mobile device changes.

The majority of these you can handle using the ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog) and [Adaptive Layout Rule Definition](/developers/user-guide/product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/adaptive-layout-rule-definitio) , but where this is not suitable, there is an 'On Resize' event available as an Application or Page Event.

## Example

In the following scenario, you have a GoogleMap widget on a page that is set to 250px in height, and when your browser is taller than 500 px you want to increase the height of the widget to 500px

    function handler_mapPage_onResize(ev, width, height){
        if (height>500){
            app.setProperty('googlemaps','height',500);
                } else {
            app.setProperty('googlemaps','height',250);
                }
    }
     
    window.innerHeight
     
    function handler_application_onResize(ev, width, height){
        app.setProperty("mToolbar", "height", window.innerHeight*0.1);        
    }
     
    window.innerWidth
     
   

In the following example this shows how you can use so that a Mobile Toolbar footer will consume 10% of the height of the browser.

can be similarly used if required, but in most cases the Percent Width property (see ['Sizes' Property Dialog)](/developers/user-guide/product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog) can be used

Note: We are planning to add Percent Height as a new widget property shortly

## See Also

 - [setProperty()](/developers/user-guide/scripting-apis/client-api/widget-functions/setproperty)

 - ['Sizes' Property Dialog](/developers/user-guide/product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/sizes-property-dialog)

 - [Adaptive Layout Rule Definition](/developers/user-guide/product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/adaptive-layout-rule-definitio)

