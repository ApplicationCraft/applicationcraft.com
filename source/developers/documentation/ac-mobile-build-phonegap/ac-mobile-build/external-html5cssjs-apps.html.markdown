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
Your config.xml needs to contain specific lines for each platform you want to build for. For example, to build for both iOS and Android (Windows Phone coming soon) you need to include

    <gap:platforms>
      <gap:platform name="ios" />
      <gap:platform name="android" />    
    </gap:platforms>     

## Certificates and Build

Once your project is uploaded, you will see the following screen. You are then ready to [add your certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/) and then [build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/automatic-building) your App.

![acmb-html5](/img/docs/acmb-html5.png)

