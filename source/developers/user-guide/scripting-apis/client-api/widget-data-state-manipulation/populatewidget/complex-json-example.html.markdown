---
title: "Complex JSON Examples"
active_menu_item: developers
class_name: developers
full_width: true
---


## Populating Widgets from More Complex JSON Data

The populateWidget() examples elsewhere show the mapping of data that is stored in an array of simple objects. Application Craft also allows you to map complex, nested objects.

Note the use of [a, b, c] to point to a nested object. Nested arrays need to be thought of as objects (as shown in the first example). Each step into a nested object needs to be mapped using an array to point to the correct depth.

## Example 1

If you have any array of the following object

    {
        maxtempC, 
        maxtempF, 
        hourly[10].pressure
    }
    var mapObject = {
    'lblOne' : 'maxtempC',
    'lblTwo' : 'maxtempF',
    'lblThree' : ['hourly', 0 ,'pressure']
    }; 
    media:group.media:thumbnail.url
    var mapObject = {
        'imgURL' : ['media:group','media:thumbnail','url'], // look for the corresponding location in the JSON data below
        'lblLink' : 'link',
        'lblTitle' : 'title'
    };
    var mapObject = {
        0 : ['media:group','media:thumbnail','url'], // look for the corresponding location in the JSON data below
        1 : 'link',
        2 : 'title'
    };
    {
       "length":"0",
       "url":"http://farm6.static.flickr.com/5245/5254676655_78ba530110.jpg",
       "type":"image/jpeg"},
       "link":"http://flickr.com/photos/86818294@N00/5254676655/",
       "media:group":{
          "media:content":{"url":"http://farm6.static.flickr.com/5245/5254676655_78ba530110.jpg"},
           "media:thumbnail":{
              "url":"http://farm6.static.flickr.com/5245/5254676655_78ba530110_t.jpg"
          }
       },
       "y:id":{"content":"tag:flickr.com,2004:/photo/5254676655"},
       "author":"nobody@flickr.com (alto maltÃ©s)",
       "title":"AXIS",
       "description":"<p>A long HTML description</p>",
       "y:published":{"utime":"1292182256"}
    }
   

In this case, there are 10 hourly pressure readings per day. We want to take just the first reading and populate that into a Repeater, in other words access hourly[0].pressure. You would use the following mapping object.

## Example 2

Here is another mapping object example from an App that grabs Flickr data and writes it to a Repeater. Notice that the 'imgURL' field maps to something that looks rather nasty. In fact, this is telling AC to look at .

If you were populating a Grid, you would use column indexes within your Grid, so

and here is a bit of the JSON object that the Flickr Web Service returns and is going to be mapped into a Grid or Repeater.

