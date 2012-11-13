---
title: "setInterval(), setTimeout()"
active_menu_item: developers
class_name: developers
full_width: true
---


Understanding timeout handling can be very important with an asynchronous language like Javascript. You should be aware of the following functions

 - [setTimeout()](http://www.w3schools.com/jsref/met_win_settimeout.asp)
 - [clearTimeout()](http://www.w3schools.com/jsref/met_win_cleartimeout.asp)
 - [setInterval()](http://www.w3schools.com/jsref/met_win_setinterval.asp)
 - [clearInterval()](http://www.w3schools.com/jsref/met_win_clearinterval.asp)

N.B. setInterval() and setTimeout() are evaluated within the context of your app and all timers will be killed/stopped when the app is closed.

If you wish to use browser native timers use windows.setTimeout / window.setInterval
