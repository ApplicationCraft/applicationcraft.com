---
title: "status object for instanceXxxx() functions"
active_menu_item: developers
class_name: developers
full_width: true
---


The following CRUD functions trigger CDB and RDB callback functions once data has been updated

 - [instanceCreate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancecreate)

 - [instanceUpdate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesave)

 - [instanceDelete()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancedelete)

 - [instanceSync()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesync)

The RDB callback function returns the result object in the second parameter and has the format

    rdbCallback(error, status)
    for(obj in status)
    {
        <instanceId1>: {
            <version1>: {
                status: ... // should be 'error' or 'valid'
            }
        },
        <instanceId2>: {
            <version2>: {
                status: ... // should be 'error' or 'valid'
            }
        },
        ...
    }
   

In many cases, you do not need to inspect the contents of the status object and inspecting the error object  will be enough. However, if you need to know more about the result of the data operation, then the result object contains all relevant information.

You can see that there are created, updated and deleted keys within the result object. In all cases, except for instanceSync(), you only need inspect the equivalent key to the function name you are calling

The object contains a set of objects, the name of which is the Instance ID involved. In all cases, except instanceSync() there will only be one such object returned. Grids and Repeater Containers when updated using instanceSync() will have one for each row of data added, modified or deleted.

We decided to implement the inner contents of the result object as a set of straightforward object rather than an array. As a result, if you want to enumerate through the objects, you would use and not a standard for loop.

For each Instance, there is child object, whose name is the save Instance modification or version number. Each update will increase the counter and later functions will allow you to access historical data submissions for review or data auditing purposes.

