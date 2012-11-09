---
title: "Crossdomain Handling"
active_menu_item: developers
class_name: developers
full_width: true
---


Browsers look to protect users from web sites that carry out so-called 'Cross Domain' data requests. This problem can arise if your App tries to access a Web Service that is located on a different server from the server where the Application Craft system that servers up your App is installed.

The information provided below is for reference purposes only so those interested have an understanding of what is going on under the hood. The events described should happen automatically.

## If my Web Service is located in the same Domain (and Sub Domain) as Application Craft

If this is the case, the Web Service call should operate without a problem and all calls are made directly from the browser to the server.

## The Web Service call is a GET

This should also operate directly from the browser to the server without any problems provided that the data being returned from the server is in JSON format. If the returned data is in XML or other format, then the App will take steps to prevent crossdomain errors.

## How Application Craft deals with Cross Domain issues

When an App encounters a crossdomain issue, it will take the following steps to avoid an error

 - HTML5 : Application Craft will first of all check to see if your browser supports HTML5. If it does then it will attempt to communicate with the Server, which also needs to be HTML5 aware. If this is the case, the call can be made directly from the browser.

 - Application Craft Proxy : the App will now give up trying to communicate directly with the Server and will instead ask the AC system to make the call instead. This guarantees avoidance of crossdomain issues.

## What if neither of the above work?

If this is the case, then you can consider writing your own Data Agent. A Data Agent allows you to use the Application Craft Server as a Proxy for your calls, so any crossdomain issues disappear.

However, writing a Data Agent is a non-trivial task although not a difficult one for a competent PHP developer. Application Craft offers a nice framework for building Data Agents. These take requests from an App in the same way that AC accesses data through its' Database and Advanced Data Agents. All you need do is specify Methods within your Agent as well as input and output parameters. All calls are then made as Data Exchanges with the Agent by passing in parameters and getting data back. An added advantage of this approach is that you can automatically use these to populate Widgets, including Charts and Gauges.

