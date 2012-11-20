---
title: "Basic Concepts"
active_menu_item: developers
class_name: tutorials
full_width: true
---

## Basic Concepts ##


In the last section, you learned how to display the “Hello World” message in response to a click of a Button.

But very few people on earth are actually called “World” … so let us try and get a bit personal … ask the user to enter his/her name and then greet him/her by that name.

Close the Preview (by clicking on the **X** at the top left corner of this window) … and you will be back in **Design** Mode … then click on the Button (at the bottom of the middle panel) called **Design** to have the page display of widgets in the middle panel.

Now let us take a look at what the second Button on this page (labelled **Greetings**) does … click on this button and then on the **Events** Tab (at the bottom of the Right Panel) … then on the event (in the right panel) labelled **On Click** … you should see the instructions that are going to be serviced when this Button is clicked …

    //place the contents of the widget named txtFirstName in a string variable called firstName
    firstName = app.getValue(‘txtFirstName’);
    //place the contents of the widget named txtLastName in a string variable called lastName
    lastName = app.getValue(‘txtLastName’);
    //compose  new variable called messageText using the variables firstName and lastName
    messageText = firstName + “ “ + lastName;
    //ask to popup a message using the composed values
    app.showMessage(“Greetings ...”, messageText’);

This code snippet introduces a number of **basic concepts** …

##a) Comment Lines

Notice that a number of lines start with // … these are comment lines … which means that the computer will ignore anything following the two slashes … you insert comments in your code snippets purely for human consumption … either to remind you later about what the instructions are supposed to do … or another person who might have to maintain this Application.

##b) Variables

Variables are "containers" for storing information.

They are a very important part of any computer language … they are the glue that connect the various parts of the Application logic.

You can think of Variables like Mail Boxes … only, instead of (hard to remember) P.O. Box Numbers, you give them **Names** … the **Values** you assign to these variables are the equivalent of placing (and later fetching) content inside the Mail Boxes.

The **Name** you give your variable MUST begin with a letter of the alphabet (or _ or $) … remaining portions of the **Name** can be letters of the alphabet or digits (numbers).

When using letters of the alphabet, note that these are case sensitive … which means that a variable named total is diffeterent from one named **Total**.

In this section, we you will learn about ‘assigning a value to a Variable’ … using both, the value of a widget and values of other variables.

In later sections you will learn about the different types of Variables (String, Number, Date, Boolean, Array, Object) … as well as how you can manipulate the values stored within these variables.


##c) Getting the contents of widgets

This command ...

    firstName = app.getValue(‘txtFirstName’);

… will place the current content of the widget called **txtFirstName** into a variable called **firstName** … app.getValue(...) is another one of the extensible commands provided by Application Craft to make it easy for you do things with widgets.

##d) Concatenating content of two Strings

This command ...

    messageText = firstName + “ “ + lastName;


… makes up a new variable (called **messageText**) … its value will be whatever value is currently stored in the variable called **firstName** … followed by a space and followed again by the value of the variable **lastName** … remember that we first asked Javascript to populate these variables with whatever was present in the Text widgets called **txtFirstName** and **txtLastName**


Notice that …

a) We used the **plus sign** to tell Javascript to **concatenate** (join) the values of the different variables.

It will do so because the variables involved are of the type **String** (or Text) …later, you will learn that there are other types of variables (**Number**, **Date**, **Boolean**, **Array** and **Object**) … and that when you use the plus sign (or the minus, divide or multiply signs) with number variables, Javascript will do the appropriate Math on the values of the specified variables (just like you learned in high school Algebra).

b)  Text within quotation marks are used **as is** … you can use both, single and double quotes.


Finally, Application Craft’s **showMessage** (custom) command is used to popup the **Message Box** … unlike the previous example, the message will not be some hard coded (static) value (coded between quotation marks) … instead, the contents (current value) of the specified variable will be displayed.

As shown in this example, Variables play a vital role in connecting the various parts of an Application’s logic.

In order to see how this button functions …

+ click on the **Preview** Button
+ type your first and last names in the Text widgets
+ click on the Button labelled **Greetings**

… you should see a **Message Box** with the title of “Greetings …” and the message text containing the entered first and last names.

