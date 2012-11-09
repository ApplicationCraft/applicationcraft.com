---
title: "Local Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


Local Storage is an HTML5 standard that offers persistent offline storage. It is very easy to use and allows any sort of data, including objects and arrays, to be quickly stored on your mobile device or desktop device.

## Warning : iOS 5.0.1 has a nasty bug that means that iOS can delete your entire Local Storage data as a part of its cleanup operations when it needs to make space. Local Storage is supposed to be persistent. This bug has now been fixed in iOS 6 but you should be aware of this risk. You might not notice, but if you cannot take the risk, heed the warning and take a look at the [WebSQL topic](websql__sqlite.htm) .

The following methods are all you need in order to work with it effectively.

<table>
<tr>
<td width="13">
 - 

</td>
      localStorage.setItem()
      localStorage.getItem()
      localStorage.removeItem()
     

</tr>
</table>
 - 

 - 

Typical Architecture

Let's assume a customer database application as a simple use-case. When using the Local Storage approach, a common approach is to load all of your data into a javascript array and keep it there. You can then add, update or delete customers by operating on your array. At strategic points along the way you can choose to write your data out to Local Storage with just a couple of lines of simple code as shown below.

This is not the most sophisticated approach, but for many applications this works perfectly, is fast enough, keeps you code really simple and unless you are dealing with large amounts of data, is the right tool for the job.

This is not the only approach by any means but it works. If your data storage needs are more complex, you may be ready to take a look at the [WebSQL](websql__sqlite.htm) approach, which is more of a traditional database approach.

Storing Data

Assuming your application has some array of customer object that you want to store, this is all you do

    jsonText = JSON.stringify(myCustomerArray);
    localStorage.setItem("AppCustomers", jsonText);
   

... and with that, your data is stored persistently. It is very crude but it works pretty nicely.

Retrieving Data

Now you need to get your data back. It is even easier

    jsonText = localStorage.getItem("AppCustomers");
    myCustomerArray = JSON.parse(jsonText);
   

... and now you can load your Application Craft widgets using [setData()](../../scripting-apis/client-api/widget-data-state-manipulation/setdata.htm) or [populateWidget()](../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm) .

Removing Data

Also simple

    localStorage.removeItem("AppCustomers");
   

localStorage Object

The object itself can be accessed easily and allows your application to explore all keys available for its domain as follows

    function listAllItems(){
    for (i=0; i<=localStorage.length-1; i++) {
    key = localStorage.key(i);
    val = localStorage.getItem(key);
    }
    }
   

Clearing Everything Out

Use

    localStorage.clear();
   

Other Resources

There are plenty of web sites on the web that explain localStorage in detail and are easy to find. Just Google HTML5 local storage and take your pick. Here are two you might want to look at

[http://diveintohtml5.info/storage.html](http://diveintohtml5.info/storage.html)

[http://php-html.net/tutorials/html5-local-storage-guide/](http://php-html.net/tutorials/html5-local-storage-guide/)

