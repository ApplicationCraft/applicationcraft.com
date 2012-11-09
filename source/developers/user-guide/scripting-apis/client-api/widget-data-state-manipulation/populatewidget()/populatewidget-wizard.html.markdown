---
title: "Populate Widget Map Wizard"
active_menu_item: developers
class_name: developers
full_width: true
---


Available in the Advanced Menu bar in the [Designer Screen](../../../../product-guide/content-and-app-layout/introduction/designer-screen.htm) area is the Map Wizard that assists you in getting the data mapping right for the app.populateWidget() method.

## Step1: Enter in your JSON data

![MapWizard1](/img/docs/mapwizard1.zoom69.png)

## Step2: Select the root of your data to see the returned content in the bottom pane

![MapWizard2](/img/docs/mapwizard2.zoom70.png)

## Step3: Select the widget you wish to populate and then map the Data to the Destination by dragging the Data over.

If you wish to change a mapping entry, click the 'delete' icon

![MapWizard3](/img/docs/mapwizard3.zoom70.png)

## Step4: The required populateWidget() mapping data is then returned. Copy to Clipboard to paste into the Code Editor. Replace the 'yourWidgetName' with the name of the widget you are populating

![MapWizard4](/img/docs/mapwizard4.zoom70.png)

Some useful resources

## JSON Sample Data :

    [
    {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
    "batter":
    [
    { "id": "1001", "type": "Regular" },
    { "id": "1002", "type": "Chocolate" },
    { "id": "1003", "type": "Blueberry" },
    { "id": "1004", "type": "Devil's Food" }
    ]
    },
    "topping":
    [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
    ]
    },
    {
    "id": "0002",
    "type": "donut",
    "name": "Raised",
    "ppu": 0.55,
    "batters":
    {
    "batter":
    [
    { "id": "1001", "type": "Regular" }
    ]
    },
    "topping":
    [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
    ]
    },
    {
    "id": "0003",
    "type": "donut",
    "name": "Old Fashioned",
    "ppu": 0.55,
    "batters":
    {
    "batter":
    [
    { "id": "1001", "type": "Regular" },
    { "id": "1002", "type": "Chocolate" }
    ]
    },
    "topping":
    [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
    ]
    }
    ]
   

This is a useful way of allowing you to test some data out with your code. You can take some of the sample data and paste it into the Wizard and then see how it works in your code.

## JSON Formatter and Validator : [http://jsonformatter.curiousconcept.com/](http://jsonformatter.curiousconcept.com/)

You can paste your JSON data into this to see if it is valid and if not, what the reason is.

