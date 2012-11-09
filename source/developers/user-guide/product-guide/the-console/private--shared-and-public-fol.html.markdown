---
title: "Private, Shared and Public Folders"
active_menu_item: developers
class_name: developers
full_width: true
---


In the Design and Integration Console screens you will find tree view lists which have three top level branches. Objects such as Applications, Resources, Connections and Queries all have to be assigned to a location within the tree view.

![Resources\_folder\_structure](/img/docs/resources_folder_structure.zoom45.png)

Private

Any object that is created by a User is placed into the private folder. No other user will be able to see that Object until Sharing permissions are granted. If User A grants permission to User B for a given object, then User B will be able to see that object within the Shared folder under the branch User A.

Shared

Private objects that are shared by other Users will appear within the logged on User's Shared folder. The top level branches of the Shared folder are the User names of any other users who have shared objects with the logged on User, or a Group that the logged on User is a member of. Within each of those User branches will be the Private folder structure of another user showing any objects where permissions have been granted to the logged on User.

See [Sharing](sharing) for further information on granting Permissions to other Users.

Public

The Public folder is a single, shared tree structure that is the same for all users across the entire system. For a User to change the Public folder structure for any object type, they must have been granted Public Folder access rights.

To place an object in the Public folder, drag it there from your Private folder or select 'Publish' option (under the 'More' button).  Objects cannot be put in the Public folder from another User's Shared folder.

Objects can be deleted from the Public folder using the Delete button at the bottom of the tree structure section.  Deleting an object from the Public folder does NOT delete it from the User's Private folder.

An object, once in the Public folder, can still only be accessed by a User if rights have been granted to that User or to a Group that the User is a member of.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/56jct5SJLIo?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Logging into the Console [1:28]

