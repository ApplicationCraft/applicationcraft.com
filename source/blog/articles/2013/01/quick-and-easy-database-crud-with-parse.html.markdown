---
title: Quick and Easy Database CRUD with Parse
author: Joel Moss
tags: databases, CRUD, parse
date: 2013-01-14
class_name: blog
full_width: true
---

Over Christmas we introduced the easiest yet way for you to to create, read, update and delete data in any AC application. We partnered up with [Parse](http://parse.com) to provide an extremely low barrier to entry data backend using their [Objects API](https://parse.com/docs/rest#objects). Making the whole [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) process amazingly easy to implement into any app.

I won't go into too much detail here as the [documentation](http://www.applicationcraft.com/developers/documentation/product-guide/advanced-features/parse/objects/) already does that well. So instead I will prove to you you just how easy it is to use.

## Available Methods

We have created a new `parse.objects` class which your app has access to. This new class contains 5 methods which cover everything you need to create, read, update and delete data, as well as a powerful querying API:

 - [parse.objects.create()](/developers/documentation/scripting-apis/server-side-api/parse-object/objectcreate)
 - [parse.objects.read()](/developers/documentation/scripting-apis/server-side-api/parse-object/objectread)
 - [parse.objects.update()](/developers/documentation/scripting-apis/server-side-api/parse-object/objectupdate)
 - [parse.objects.delete()](/developers/documentation/scripting-apis/server-side-api/parse-object/objectdelete)
 - [parse.objects.query()](/developers/documentation/scripting-apis/server-side-api/parse-object/objectquery)

## Example Scenario

I want to keep a record of my book collection, including details of each book. So lets start by creating an object (or record) for each book in my collection (I only have one right now):

    parse.objects.create('books', {
      title: 'The Lord of the Rings',
      author: 'JRR Tolkien'
    });

This will return a Javascript object containing the `objectId` and the `createdAt` date.

    {
      objectId: "DM5XhFTiPR",
      createdAt: "2013-01-14T11:41:24.174Z"
    }

I forgot to add the publication date, so let's update my record:

    parse.objects.update('books', 'DM5XhFTiPR', {
      publishedAt: "1954-07-21T00:00:00.000Z"
    });

Let's take a look at our updated object using the `read` method:

    parse.objects.read('books', 'DM5XhFTiPR');

Our object now looks like this:

    {
      title: 'The Lord of the Rings',
      author: 'JRR Tolkien',
      publishedAt: '1954-07-21T00:00:00.000Z'
    }

It turns out that my wife just threw away my book, so I now need to delete this object:

    parse.objects.delete('books', 'DM5XhFTiPR');

But being a good wife that she is, she bought me a shiny new replacement, along with a few others for me to read. So I created a new record for each of my new books.

I now have quite a few books in collection, but want to find only those written by JRR Tolkien:

    parse.objects.query('books', {
      where: {
        author: 'JRR Tolkien'
      }
    });

The above will return me a `results` array, containing all objects which have an author of 'JRR Tolkien'.

Those are the basics, and there is of course a lot more that you can do, including some pretty advanced querying. But you should be able to see from the above how quick and easy it is to use the new Parse powered database support in Application Craft.

[Check out the docs](http://www.applicationcraft.com/developers/documentation/product-guide/advanced-features/parse/) for more, and leave your comments below.

Enjoy!