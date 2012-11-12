---
title: "User Parameters"
active_menu_item: developers
class_name: developers
full_width: true
---


User Parameters is a simple but powerful option that allows each User to specify certain settings that are specific to them only. For example, if you build an App that accesses Twitter, you may want each user to be able to centrally save their Twitter Username and Password.

You could do all this in an App by creating some sort of data storage that handles this. However, this would require lots of work and Application Craft aims to avoid lots of work wherever possible. So, what you do instead is to create a new User Parameter Group inside AC called 'Twitter' (or any name you like in fact).

Having defined the new Group, you can then add as many parameters within that group as you name. In our example, you would create one called 'Username' and one called 'Password'.

Users can then update their own Twitter name and passwords either from the [My User Variables](/developers/user-guide/product-guide/the-console/console-tabs/more/my-details)

section of the Console, or else an App can read and write them if you need a more specific way of managing them.

