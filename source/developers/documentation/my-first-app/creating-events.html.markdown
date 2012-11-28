---
title: "7. Creating Events"
active_menu_item: developers
class_name: developers
full_width: true
pagination:
  next: my-first-app/running-your-app
  previous: my-first-app/assigning-field-names
---

Now we're galloping up to the last fence. For those of you new to Javascript, this may seem like a large one, but knowing you can clear a large hurdle means you will be able to take all the others in your stride.

##Setting the scene
This App is going to ask you to enter your name (let's say it's Mike) and it will then show a message "Hello Mike". OK, not too sophisticated but its a start.

##Swinging Into Action

1. Click on the 'Greet Me!' button to select it.
![console](/img/tutorials/mfa-coding-1.png)
1. At the bottom right of your screen, click on the 'Events' tab. 
1. You will now see all of the Events available for the button. Most of these are completely uninteresting but the one you will mostly want to avail yourself of is 'On Click'. Click in the right hand column and select 'Javascript'.

##Code Mode
You will now find yourself in 'Code Mode'. This is a Javascript editor where you can write your code. Below is a screenshot of what you will see

![console](/img/tutorials/mfa-coding-2.png)

 - If you don't much like the code editor's color scheme, move your mouse near to the top right of the code area (circled in the above image) and you will see a color scheme name appear. Click on it to select a different color scheme. My personal favorite is 'Idle Fingers' but find your own favorite.
 - If you want to get back to UI Design Mode, you can click on the 'Design' button at the bottom of the screen or press `ctrl+d` (or `cmd+d` on a Mac) to go back and forth.
   Now enter the following line of code into in the code editor.


        function handler_btnGreetMe_onClick(mouseev){
            var name = 'Hello ' + app.getValue('txtName');
            app.showMessage('My Messagebox', name);
        }

So, your code window should look like this

![console](/img/tutorials/mfa-coding-3.png)

Now, you're ready to try it all out. 





