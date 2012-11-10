---
title: "Populating Widgets with Data Arrays"
active_menu_item: developers
class_name: developers
full_width: true
---


Some Widgets, such as Listboxes, Combo boxes and Grids, store their data as arrays of data. For example, a Listbox has Labels (that are actually shown in the Listbox) and Values (a value associated with each list item). For example, you might have a list displaying Customer Names but also containing the Customer Number as the Select Value.

<table>
<tr>
<td width="115">
**Label**

</td>
<td width="17">

</td>
<td width="213">
**Value**

</td>
</tr>
<tr>
<td width="115">
IBM

</td>
<td width="17">
</td>
<td width="213">
7661872

</td>
</tr>
<tr>
<td width="115">
Google

</td>
<td width="17">
</td>
<td width="213">
6781992

</td>
</tr>
<tr>
<td width="115">
Yahoo

</td>
<td width="17">
</td>
<td width="213">
5672123

</td>
</tr>
</table>

You can write Javascript that builds or stores this data in an array variable and write that array to the Widget in order to load it. Here is some sample code to illustrate this.

    function showFriends(friends){
     
    // Initalize the array
    var data = { rows : [] };
    // Loop through each item in friends
    for (var i in friends){
    if(friends[i]){
    var friend = friends[i];
    // Get the Friend Name ID and Friend Name Text and assign it to item
    var item = [friend.name, friend.screen_name];
    // add item to the array 'data'
    data.rows.push( { data : item } );
    }
    }
    // Finally, repopulate the Listbox Widget with new data
    app.setData("listBox1", data);
    }
    app.setData("listBox1", { rows : [] });
   

To empty a Listbox of all items and values, you would use the following code

