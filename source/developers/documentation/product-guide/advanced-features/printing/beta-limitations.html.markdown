---
old_url: beta_limitations.htm
title: "Beta Limitations & Considerations"
active_menu_item: developers
class_name: developers
full_width: true
---


You should be aware that there are some limitations and shortcomings while the Printing is in Beta. These limitations will be removed and functionality added to ensure best behavior.

 - In order for data fields to print, you have to a) set the App property 'Store in Database' to be one of the 'on' values and b) each field that should be printed needs to have its 'Store in Database' property to true.

 - Field states of widgets that are not data input widgets (labels, repeaters etc) will not be respected by printing. This means that if you set a label to be hidden, it will still show up when printing.

