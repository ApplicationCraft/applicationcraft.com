---
title: "AC Storage or Your Own Backend"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

This is an important decision and you should consider this carefully before deciding to use AC Data Storage.

## AC Data Storage

This is not intended to be a heavyweight database storage solution. It also lacks much of the flexibility that you get from a custom back end. So before you embark on a complex app, make sure you have thought this through.

## Your Own Back End

You may have your own back end that is accessible through a Web Service API of some sort. If you have not, then you can build a back end in any form you choose. This could be running on your own servers or it could be on a cloud solution such as Heroku, Cloudbees, Google App Engine etc.

Application Craft can communicate very easily with Web Services, whether RESTful or SOAP and so tying your AC App to the back-end will be simple.  See: [SOAP & RESTful AJAX Calls](../../../scripting-apis/client-api/soap-restful-ajax-calls/)
