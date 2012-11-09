---
title: "JOINed App Queries"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../data-storage/server-side-data-storage/index)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

In most cases, CRUD operations involve a defined Relationship between the current App and a foreign App. When you add new Instances to your foreign App, you will have a relationship that you may later want to report on or work with using a JOIN query.

A Relationship is handled invisibly by AC. In the background AC manages a single 'link' table that contains the 2 Instance IDs of the related Instances. The CRUD Companies App has a field created with the name of the Relationship (in our case, R\_Contacts). You can think of this as being a field containing an Instance ID. This can then be used to JOIN on the Instance ID of the related App, as described below.

Example Usage

Your Companies App creates new Contacts in the foreign Contacts App. All UI interaction is built into the Companies App. When you add a new contact, it is linked with the currently selected contact.

In the Companies App, you may want to list all Contacts that are associated with the Company. In this case, you will need to use a JOIN query between the two Apps. You can then apply a filter (on the currently selected company) to the Widget listing the contacts.

AC's CRUD functions handle the setting up of the relationship automatically (if you are using automatic relationship handling) and even if you are using [instanceSetRelationship()](../../../../../scripting-apis/client-api/instance-data-functions/instancesetrelationship) to manually request relationships, AC does all the internal heavy-lifting. So creating a JOIN query is easy to do without worrying about data tables and link tables etc.

Query Definition

 - Select Edit for a new or existing [Query in the Console](../../../../the-console/console-tabs/queries/index) .

 - Select the App tab on the left and drag the Full Data items for your two Apps into the right hand side.

 - Press next to move to the JOIN screen

 - Press the + button to add in the other App.

 - As shown below, choose the drop down which shows the main App (Companies in our case) and locate the Relationship field (R\_Contacts).

 - In the other dropdown field, locate the Instance ID.

 - You can now proceed to the final View screen and check out your JOINed data (if you have already created some).

![crud-join-query](/img/docs/crud-join-query.png)

The JOIN screen of the Query Editor showing us selecting the R\_Contact field in the CRUD Companies App. This will be joined to the Instance ID of the Contacts Table.

