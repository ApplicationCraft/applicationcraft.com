---
title: "SQLite"
active_menu_item: developers
class_name: developers
full_width: true
---


If you are compiling your Apps using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/) , then use the special [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/sqlite-plugin/) . This is available for iOS and Android with more platforms to follow. With this approach the SQLite database library is a part of your application.

## Typical Architecture

The approach you take here is exactly the same approach you would take with any other database application. Your data is stored in a database and you create queries to access tables using regular SQL statements.

This SQL driven approach is a real strength. It will be comfortable to anyone who has worked with SQL before. The only drawback is that creating the SQL Statements (currently) needs to be done by constructing SQL strings that are then executed.

What is somewhat different is that SQLite is asynchronous. For novice javascript developer, this means that callback functions are used instead of synchronous return codes. If you are not familiar with callbacks, then you should be before you start thinking about more advanced storage strategies. Callbacks are a very standard javascript thing and you cannot really survive without them for long. Don't worry, with a bit of practice, they are not that scary.

## Create a new Database as the app starts or if already exists, populate a Mobile List widget

    var database = null;
     
    function createNeededTables(db, callback){
        db.executeSql("CREATE TABLE IF NOT EXISTS test (testID INTEGER PRIMARY KEY AUTOINCREMENT, fio TEXT NOT NULL, adress TEXT)", function(){
            console.log( "table test was created" );
            if (callback)
                callback(false);
        }, function(err){
            console.log("error creating table test::" + err);
            if (callback)
                callback(true);
        });
    }
     
    function updateListFromDb(db){
        db.query("test", ["testID", "fio", "address"], undefined, undefined, undefined, undefined, undefined, undefined, function(res){
            var map = { value : "testID", label : "fio", aside : "address" };
            app.populateWidget("list", res.rows, map); //Populate a Mobile list widget from the database
        }, function(){
        
        });
    }
    function handler_application_onAppStarted(){
        database = new PGSQLitePlugin("testingdb.sqlite3", function(dbResult){
            if (dbResult){
                console.log("Database status=" + dbResult.status);
                console.log("Database version=" + dbResult.version);
                    
                if (dbResult.status != 0){
                   createNeededTables( database ); // Database does not already exist so create
                }
                else {
                    updateListFromDb( database ); // Database does exist so read from the DB
                }
            }
            
        }, function(err){
            console.log("Error create database::err=" + err);
        });        
    }
     
    function insertRow(db, fio, address, callback){
        db.insert("test", {fio : fio, address : address }, function(id){ 
            console.log("id="+id); 
            if (callback)
                callback(false);
        }, function(er){
            
            console.log("error="+er);
            if (callback)
                callback(true);
        });
    }
     
    function handler_actionBtn_onClick(mouseev){
    // insert new record to database and update Mobile List with that data
        insertRow(database, app.getData("fio"), app.getData("address"), function(){
            updateListFromDb( database );
        });        
    }
   

**Add a new record to the Database**

