---
title: "CRUD & Filtering"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

One of the things you will often need to do is to access data from a JOINed query that is filtered according the currently selected App Instance. To continue with our example, we want to list all contacts associated with the selected company.

Let's say we have a Grid with all companies listed. When someone clicks on the Grid, we want to filter a contacts Listbox that is connected to a View which is in turn connected to a Query "CRUD Company Contacts". This Query joins Companies and Contacts as described in the previous topic.

## Method 1 - Doing Everything in Script

    function handler_gridCompanies_onRowSelect(id, ind){
        g_CompInstance = app.getValue('gridCompanies')[2];  // Get the instance ID from a hidden Grid column
        g_CompContactsFilter = ["{CRUD Companies.instance_id}='"+g_CompInstance+"'"];  // Filter
        app.instanceLoad(g_CompInstance); // Load the Company Instance into the App
        app.setProperty('lbCompContacts', 'filter', g_CompContactsFilter); // Apply filter to listbox
        app.setProperty('gridContacts', 'filter', g_CompContactsFilter); // Apply filter to Contacts Grid on another page
        app.refreshData(['lbcompContacts', 'gridContacts']); // Refresh both of these Widgets
    }
   

## Method 2 - Using a Hidden Widget

Another way to achieve the same result is

 - Place a (hidden) Text Widget in your App

 - When you select an Instance (let's say you click on a row in a Grid to select a Company) a script sets the value of this Widget to be the Instance ID of the selected Company.

 - In your Container (or Repeater or Grid) you set the Filter property and point it to the Text Widget to form a Filter Expression like {CRUD Companies.Instance\_Id} =" [Form.Widgets.txtWidgetName]" (note, the Widget token must be within inverted commas.

 - Finally, you need to refresh the Data Container (or Repeater or Grid) using app.refreshData('dataContainerName')

