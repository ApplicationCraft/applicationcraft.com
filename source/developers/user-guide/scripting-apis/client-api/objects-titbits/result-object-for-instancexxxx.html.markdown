---
title: "result object for instanceXxxx() callbacks"
active_menu_item: developers
class_name: developers
full_width: true
---


The following CRUD functions trigger CDB and RDB callback functions once data has been updated

 - [instanceCreate()](../instance-data-functions/instancecreate)

 - [instanceUpdate()](../instance-data-functions/instancesave)

 - [instanceDelete()](../instance-data-functions/instancedelete)

 - [instanceSync()](../instance-data-functions/instancesync)

The CDB callback function returns the result object in the second parameter and has the format

    cdbCallback(error, result)
    for(obj in result.created)
    {
    created:
    {
    <rowIndex1> : {
    error: <errorObj>,   // is null if instance and links were added to CDB
    version:             // version of created instance revision
    id: ...              // if no error occured, this is an id of created instance
    linkInstanceId: ...  // id of current form instance (which created instance may be linked to
    linkVersions: [...]  // instance revisions of automatic links
    },
    <rowIndex2> : {
    error: <errorObj>,   // is null if instance and links were added to CDB
    version:             // version of created instance revision
    id: ...              // if no error occured, this is an id of created instance
    linkInstanceId: ...  // id of current form instance (which created instance may be linked to
    linkVersions: [...]  // instance revisions of automatic links
    },
    ...
    },
    updated:
    {
    <instanceId1> : {
    error:   // is null if no error occured in CDB
    version: // version of instance revision
    id: ...  // if no error occured, this is an id of instance
    },
    <instanceId2> : {
    error:   // is null if no error occured in CDB
    version: // version of instance revision
    id: ...  // if no error occured, this is an id of instance
    },
    ...
    },
    deleted:
    {
    <instanceId1> : {
    error: // is null if no error occured in CDB
    version: // version of instance revision
    id: ...  // if no error occured, this is an id of instance
    },
    <instanceId2> : {
    error: // is null if no error occured in CDB
    version: // version of instance revision
    id: ...  // if no error occured, this is an id of instance
    },
    ...
    }
    }
   

In many cases, you do not need to inspect the contents of the result object and inspecting the error object  will be enough. However, if you need to know more about the result of the data operation, then the result object contains all relevant information.

You can see that there are created, updated and deleted keys within the result object. In all cases, except for instanceSync(), you only need inspect the equivalent key to the function name you are calling

Note that for instanceCreate(), the created key contains a set of rowIndex objects. In all cases, except instanceSync() there will only be one rowIndex object. Grids and Repeater Containers when updated using instanceSync() will have one for each row of data updated.

We decided to implement the inner contents of the result object as a set of straightforward object rather than an array. As a result, if you want to enumerate through the objects, you would use and not a standard for loop.

