---
title: "Basic Concepts"
active_menu_item: developers
class_name: developers
full_width: true
---

In the last section, you learned how to display the “Hello World” message in response to a click of a Button. But very few people on earth are actually called “World”, so let's try and get a bit personal and ask the user to enter his/her name and then greet him/her by that name.

IMAGE HERE

1. Close the Preview (by clicking on the **X** at the top left corner of this window).
1. You will be back in design mode.
1. Click on the 'Design' button at the bottom of the middle panel.

Now let's take a look at the Greetings button.

1. Click on the button and then on the 'Events' tab at the bottom of the right panel.
1. Now, click on 'On Click' in the event list.
1. The IDE will now switch to the code editor with your event handler displayed as a function.

You should now see your code as shown below

    // place the contents of the widget named txtFirstName in a string variable called firstName
    firstName = app.getValue(‘txtFirstName’);
    // place the contents of the widget named txtLastName in a string variable called lastName
    lastName = app.getValue(‘txtLastName’);
    // compose  new variable called messageText using the variables firstName and lastName
    messageText = firstName + “ “ + lastName;
    // ask to popup a message using the composed values
    app.showMessage(“Greetings ...”, messageText’);

This code snippet introduces a number of concepts.

##Comment Lines

Notice that a number of lines start with `//`. These are comment lines, which means that anything afterwards will be ignored. You use comments in your code to help make it more readable or understandable.

##Variables
Variables are named containers for storing information, which can be modified at any time. They are a very important part of any computer language, they are the glue that connects the various parts of the application logic.

The name you give your variable MUST begin with a letter of the alphabet (or _ or $) and the remaining portions of the name can be letters of the alphabet or digits (numbers).

When using letters of the alphabet, note that these are case sensitive, which means that a variable named `total` is different from one named `Total`.

Here is a 'string' variable (contains text) called `name` assigned a value of `Bob`

    var name = 'Bob';

And here we are creating a numeric variable called `age` and assigning it a value of `25`.

    var age = 45;

In the next sections you will learn more about the different types of Variables (String, Number, Date, Boolean, Array, Object), as well as how you can manipulate the values stored within these variables.


##A bit more ...

    var messageText = firstName + “ “ + lastName;

This makes up a new variable `messageText`. Its value will be whatever value is currently stored in the variable called `firstName` followed by a space and followed again by the value of the variable `lastName`.

Remember that we first asked Javascript to populate these variables with whatever was present in the Text widgets called `txtFirstName` and `txtLastName`


Notice that

 - we used the `+` to tell Javascript to concatenate (join) the values of the different variables. It will do so because the variables involved are of the type `string' (text)
 - later, you will learn that there are other types of variables (number, date, boolean, array and object) and that when you use the plus sign (or the minus, divide or multiply signs) with number variables, Javascript will do the appropriate math on the values of the specified variables (just like you learned in high school Algebra).
 - text within quotation marks are used literall and you can use both, single and double quotes


DONT GET THIS PARA Finally, Application Craft’s `app.showMessage()` method is used to popup a message box window. Unlike the previous example, the message will not be some hard coded (static) value (coded between quotation marks) … instead, the contents (current value) of the specified variable will be displayed.

##Trying it out

+ click on the 'Preview' Button
+ type your first and last names in the text widgets
+ click on the Button labelled 'Greetings'

You should see a message box with the title of “Greetings” and the message text containing the entered first and last names.

