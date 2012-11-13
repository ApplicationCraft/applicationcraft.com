---
title: "WebSQL"
active_menu_item: developers
class_name: developers
full_width: true
---


WebSQL offers full relational database capabilities to your mobile applications. This enables you to create some really powerful database driven applications but there are also some caveats :

 - it does not run in Mozilla browsers, so Firefox is not supported, currently no worries with iOS and Android.

 - if you are running it as a pure Web application (not a compiled one) then your database size is limited to 5MB.

 - The W3C consortium has said it is has dropped support for WebSQL. This does not mean it gets removed, just that they are not supporting it as a standard.

 - Your code needs to generate SQL statements. This makes it messier and more complex to code, but you do get the power on the other hand.

What this means in practice is the following

 - If your data is relatively simple in structure, look at [Local Storage](/developers/documentation/product-guide/data-storage/mobile-client-side-data-storage/local-storage-example) . It is easier to implement.

 - If you are building something that is a pure Web application then be aware of the risks and be prepared, in the future, to replace it. The most likely replacement will be IndexedDB, which is under development.

 - If you are compiling your Apps using our Phonegap/Cordova support, then use the special [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/) for that. This is available for iOS and Android with more platforms to follow. With this approach it does not matter what happens at the browser level as the SQLite database library is a part of your application. See [SQLite](/developers/documentation/product-guide/data-storage/mobile-client-side-data-storage/sqlite) .

## Typical Architecture

The approach you take here is exactly the same approach you would take with any other database application. Your data is stored in a database and you create queries to access tables using regular SQL statements.

This SQL driven approach is a real strength. It will be comfortable to anyone who has worked with SQL before. The only drawback is that creating the SQL Statements (currently) needs to be done by constructing SQL strings that are then executed. We would prefer an object type interface to the database and as of July 2012 we are investigating this.

What is somewhat different is that WebSQL is asynchronous. For novice javascript developer, this means that callback functions are used instead of synchronous return codes. If you are not familiar with callbacks, then you should be before you start thinking about more advanced storage strategies. Callbacks are a very standard javascript thing and you cannot really survive without them for long. Don't worry, with a bit of practice, they are not that scary.

## Open a Database

This is the first step and is done like this

    var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
        tx.executeSql('INSERT INTO foo (id, text) VALUES (1, "synergies")');
    });
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO foo (id, text) VALUES (?, ?)', [id, userValue]);
    }
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
        var len = results.rows.length, i;
        for (i = 0; i < len; i++) {
            alert(results.rows.item(i).text);
        }
    });
   

## Create a Table, Add Record

This should be pretty obvious to anyone who has written some SQL before

... or like this

## How about reading data?

## Full WebSQL Documentation

The web is full of references to WebSQL. Just Google it. Here are a couple for you

 - [http://www.html5rocks.com/en/tutorials/webdatabase/todo/](http://www.html5rocks.com/en/tutorials/webdatabase/todo/)
 - [http://marakana.com/s/tutorial\_web\_sql\_database,208/index.html](http://marakana.com/s/tutorial_web_sql_database,208/index.html)

