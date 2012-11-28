---
title: "Assigning names to widgets"
active_menu_item: developers
class_name: developers
full_width: true
pagination:
  next: my-first-app/creating-events
  previous: my-first-app/changing-properties
---

This step is easily overlooked but you will hug yourself later on if you get into the habit of doing this as you design. Rest assured, it is worth the very little effort.

By assigning a nice name to each widget you need to reference from your code, you will instantly make your code readable. 

If you are building simple Apps that have no or little code, it is still worth doing as you some dialogs reference other widgets and you will then see `txtName` rather than `Text21`.

##Let's do it
1. Click on your Label widget and in the property bar, select the Name property near the top.
1. Enter something like `lblName`. A good way is to prefix the actual name with a couple of letters that indicate what type of widget it is. `lblName` implies a Label, `txtName` could be a Text Input field, `imgFace` is an image Widget that shows someone's face.
1. Press Enter when done.

Now do the same for the Text widget (how about `txtName`) and the Button (try `btnGreetMe`).

You cannot use spaces or weird characters. You will see what works and what doesn't. If you want to use the equivalent of spaces, try `lblFirst_Name` but generally Javascript convention is to not do this.

Now we're ready for the last bit. Adding some code!

