---
title: "Release: jQuery Mobile 1.2, Mobile Debugger"
author: Joel Moss
tags: release, jquery, jquery mobile, debugging
date: 2012-12-17
class_name: blog
full_width: true
---

Last Friday we shipped quite a large new release which I think is worth mentioning. As well as some significant bugs being squashed, we upgraded jQuery Mobile and jQuery UI, and integrated the Weinre Mobile Debugger.

## jQuery Mobile and UI ##

jQuery Mobile is one of the core parts of AC, and every single app uses at least some part of the open source framework.

Back in October, the team behind jQuery [released a major new version; 1.2.0](http://jquerymobile.com/blog/2012/10/02/announcing-jquery-mobile-1-2-0-final/).

> This release brings a new popup widget, an autodivider and collapsible option for listviews, and over 100 enhancements and fixes throughout the library to make things smoother, faster, and more polished.

[Check out the blog post](http://jquerymobile.com/blog/2012/10/02/announcing-jquery-mobile-1-2-0-final/) for a run down of what's new in jQuery Mobile 1.2.0.

The latest version of AC now includes this latest and greatest version of jQuery, and also because of it's reliance on jQuery UI, we've included the latest version of that into this release too.

## Mobile Debugging ##

We also shipped a new feature to allow you to debug your apps right within the devices you are developing for.

> Weinre (Pronounced like the word "winery") is a debugger for web pages, like FireBug (for FireFox) and Web Inspector (for WebKit-based browsers), except it's designed to work remotely, and in particular, to allow you debug web pages on a mobile device such as a phone.

![Weinre Debugging](blog/weinre.png)

The AC Weinre Debugging server lets you use the familiar webkit developer tools to debug your mobile web apps, and is yet another way that we are making it easier to build apps.

You can check it out at http://mobile-build-debug.applicationcraft.com/