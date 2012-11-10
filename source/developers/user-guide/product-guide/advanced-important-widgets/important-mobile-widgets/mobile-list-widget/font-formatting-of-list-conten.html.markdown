---
title: "Font Formatting of List Content"
active_menu_item: developers
class_name: developers
full_width: true
---


There are various widgets that allow rich content. The Mobile List widget is a good example. You can see below that we have 3 different text styles for the main body (the time is the 'Aside', so not a part of the main list content).

To format your content you should follow these guidelines

 - You must use a \<p\> tag for each discreet row of text within a single item

 - You can use \<h\> tags for headers

 - You should use style attributes to fine tune the font size

If your label items are not displaying or behaving badly, then you have almost certainly mis-formatted your text string.

    lbl@=@"<p><h1>"@+@result.pAddress.pAddressRow[0].Name1@+@"</h1></p>";
    lbl@+=@"<p><span@style='font-size:14px;'><strong>Kunden-#:@</strong>"@+@result.pCustomer.pCustomerRow[0].CustomerID@+@"</p>";@@@@
    lbl@+=@"<p@style='font-size:14px;'>"@+@result.pAddress.pAddressRow[0].Street1@+@"</p>";
    lbl@+=@"<p@style='font-size:14px;'>"@+@result.pAddress.pAddressRow[0].ZIP@+@"@"@+@result.pAddress.pAddressRow[0].City@+@"</p>";
     
   

![mlist-formatted-2](/img/docs/mlist-formatted-2.png)

![mlist-formatted-1](/img/docs/mlist-formatted-1.png)

