---
title: "SQLite Plugin"
active_menu_item: developers
class_name: developers
full_width: true
---


SQLite provides a relational database management system, or RDBMS. Relational database systems are used to store user-defined records in large tables.

SQLite is a popular choice as embedded database for local storage in native apps and with this approach the SQLite database library is a part of your application.

Also, there are no storage size limits.

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

 - In your index.html include pgsqliteplugin.js

 - In your config.xml add \<gap:plugin name="PGSQLitePlugin" version="1.0.0" /\>

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "1.0.0"

 - Cordova 1.9.0-2.0.0 use "2.0.0"

 - Cordova 2.1.0 or later use "2.1.0"

## Apps Developed with Application Craft

<table>
<tr>
<td width="182">
Plugin Name

</td>
<td width="20">
</td>
<td width="740">
The name of the plugin - SQLite Plugin

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="20">
</td>
<td width="740">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="182">
Show 'not native' warning

</td>
<td width="20">
</td>
<td width="740">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
</table>

All functions are called on the created PGSQLitePlugin object:

    var db = new PGSQLitePlugin(name, successOpenDatabaseFunction, errorOpenDatabaseFunction)
     
     
    name - database name
    successOpenDatabaseFunction - success callback function, return arguments:
    first argument - object: 
        obj.version - database version, 
        obj.status - number, 0 - database opened, 1 - database created, 2 - database created from resources
    second argument - db - database object
    errorOpenDatabaseFunction - error callback function
     
    var db = new PGSQLitePlugin("testdb.sqlite3", function(dbResult, dbObject){
        console.log("Database status=" + dbResult.status);
        console.log("Database version=" + dbResult.version);
        db = dbObject;
    }, function(err){
        console.log("Error create database::err=" + err);
    });
     
     
   

## **Example**

## **See**

 - [Methods](methods/)

## **See Also**

 - [Mobile & Client Side Data Storage](../../../../../product-guide/data-storage/mobile-client-side-data-storage/)

