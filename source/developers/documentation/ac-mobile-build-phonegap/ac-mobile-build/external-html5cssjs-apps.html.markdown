---
old_url: external_html5cssjs_apps.htm
title: "Apps developed outside Application Craft"
active_menu_item: developers
class_name: developers
full_width: true
---


If you built your App outside Application Craft and you only want to use Application Craft to compile your App using AC Mobile build, then you need to make sure you have prepared a ZIP file in the usual way for PhoneGap/Cordova projects so you can upload them into Application Craft.

## Create a Mobile Build project

The first thing you do is to create a new App and at the same time upload your ZIP file.

![acmb-new](/img/docs/acmb-new.png)

Select the Mobile Build tab as circled in the image above. Then, click on the New button at the top of the left pane and you will see the following screen where you can give your project a name and upload your PhoneGap/Cordova ZIP file.

## Editing config.xml

You can edit your project's config.xml file from within Application Craft, so you don't have to re-upload each time you make a change to it. Information about the config.xml can be found [here on the PhoneGap site](https://build.phonegap.com/docs/config-xml).

![acmb-configxml](/img/docs/acmb-configxml.png)

##Which platforms to build for
Your config.xml needs to contain specific lines for each platform you want to build for. For example, to build for both iOS, Android and Windows Phone you need to include

    <gap:platforms>
      <gap:platform name="ios" />
      <gap:platform name="android" /> 
      <gap:platform name="wp" />
    </gap:platforms> 
    
##Sample config.xml
	<?xml version="1.0" encoding="UTF-8"?>
		<widget xmlns     = "http://www.w3.org/ns/widgets"
        xmlns:gap = "http://phonegap.com/ns/1.0"
        id        = "com.application.myapp"
        version   = "2.2.0"
    	versionCode = "1">
        	
    	<name>MyApp</name>

        <description>
            Just a simple application.
        </description>
    
        <author href="http://mysite.com" email="my@email.com">
            Just Me
        </author>
        
        <feature name="http://api.phonegap.com/1.0/device" />
        
        <gap:platforms>
          <gap:platform name="ios" />
          <gap:platform name="android" />
          <gap:platform name="wp" />
        </gap:platforms>
    
        <preference name="phonegap-version" value="2.2.0" />
        <preference name="orientation"      value="landscape" />
        <preference name="target-device"    value="universal" />
        <preference name="fullscreen"       value="false" />
    
        <icon src="icon.png" />
        <icon src="res/icon/android/icon-36-ldpi.png"   gap:platform="android"    gap:density="ldpi" />
        <icon src="res/icon/android/icon-48-mdpi.png"   gap:platform="android"    gap:density="mdpi" />
        <icon src="res/icon/android/icon-72-hdpi.png"   gap:platform="android"    gap:density="hdpi" />
        <icon src="res/icon/android/icon-96-xhdpi.png"  gap:platform="android"    gap:density="xhdpi" />
        <icon src="res/icon/ios/icon-57.png"            gap:platform="ios"        width="57" height="57" />
        <icon src="res/icon/ios/icon-72.png"            gap:platform="ios"        width="72" height="72" />
        <icon src="res/icon/ios/icon-57-2x.png"         gap:platform="ios"        width="114" height="114" />
        <icon src="res/icon/ios/icon-72-2x.png"         gap:platform="ios"        width="144" height="144" />
        <icon src="res/icon/wp/icon.png"				gap:platform="winphone"	width="62" height="62"/>
		<icon src="res/icon/wp/tileicon.png"			gap:platform="winphone"	gap:role="background" width="173" height="173"/>
        <gap:splash src="splash.png" />
        <gap:splash src="res/screen/android/screen-ldpi-portrait.png"  gap:platform="android" gap:density="ldpi" />
        <gap:splash src="res/screen/android/screen-mdpi-portrait.png"  gap:platform="android" gap:density="mdpi" />
        <gap:splash src="res/screen/android/screen-hdpi-portrait.png"  gap:platform="android" gap:density="hdpi" />
        <gap:splash src="res/screen/android/screen-xhdpi-portrait.png" gap:platform="android" gap:density="xhdpi" />
        <gap:splash src="res/screen/ios/screen-iphone-portrait.png"    gap:platform="ios"     width="320" height="480" />
        <gap:splash src="res/screen/ios/screen-iphone-portrait-2x.png" gap:platform="ios"     width="640" height="960" />
        <gap:splash src="res/screen/ios/screen-ipad-portrait.png"      gap:platform="ios"     width="768" height="1024" />
        <gap:splash src="res/screen/ios/screen-ipad-landscape.png"     gap:platform="ios"     width="1024" height="768" />
        <gap:splash src="res/screen/wp/wp.jpg" gap:platform="winphone" width="480" height="800" />
	</widget>
   
If any problems are detected in the configuration of the xml file see [here](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/build-error-messages/) for more information.   

	

## Certificates and Build

Once your project is uploaded, you will see the following screen. You are then ready to [add your certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/) and then [build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/automatic-building) your App.

![acmb-html5](/img/docs/acmb-html5.png)

