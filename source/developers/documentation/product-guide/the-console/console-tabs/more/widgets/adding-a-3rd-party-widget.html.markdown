---
old_url: adding_a_3rd_party_widget.htm
title: "Adding a 3rd Party Widget"
active_menu_item: developers
class_name: developers
full_width: true
---


Twitter offers a search widget here : [http://twitter.com/about/resources/widgets/widget\_search](http://twitter.com/about/resources/widgets/widget_search)

This can be added to any web site. Application Craft lets you integrate this into the IDE and insert parameter tokens which then appear in the property bar.

Here is the code that Twitter supplies. 

    <script src="http://widgets.twimg.com/j/2/widget.js"></script>
    <script>
    new TWTR.Widget({
      version: 2,
      type: 'search',
      search: 'rainbow',
      interval: 30000,
      title: 'It\'s a double rainbow',
      subject: 'Across the sky',
      width: 250,
      height: 300,
      theme: {
        shell: {
          background: '#8ec1da',
          color: '#ffffff'
        },
        tweets: {
          background: '#ffffff',
          color: '#444444',
          links: '#1985b5'
        }
      },
      features: {
        scrollbar: false,
        loop: true,
        live: true,
        hashtags: true,
        timestamp: true,
        avatars: true,
        toptweets: true,
        behavior: 'default'
      }
    }).render().start();
    </script> 

Below is the same code once it has been modified and is ready to paste into the Application Craft Console.
    
    <script src="http://widgets.twimg.com/j/2/widget.js"></script>
    <script>  
    new TWTR.Widget({
    version: 2,
    type: 'search',
    search: '[#Search String#General#text#@appcrafty#]',
    interval: [#Interval#General#int#6000#],
    title: '[#Title#General#text#Twitter Search#]',
    subject: '[#Subject#General#text#Subject#]',
    width: [#width#General#pixels#200#]-15,
    height: [#height#General#pixels#400#]-120,
    theme: {
        shell: {
         background: '[#Shell Bg#Style#color#8ec1da#true#]',
         color: '[#Shell color#Style#color#ffffff#true#]'
        },
        tweets: {
         background: '[#Tweets BG#Style#color#ffffff#true#]',
         color: '[#Tweets color#Style#color#444444#true#]',
         links: '[#links color#Style#color#1985b5#true#]'
        }
    },
    features: {
        scrollbar: [#Scrollbar#General#boolean#false#],
        loop: [#Loop#General#boolean#false#],
        live: [#Live#General#boolean#true#],
        hashtags: [#Hashtags#General#boolean#true#],
        timestamp: [#Timestamp#General#boolean#true#],
        avatars: [#Avatars#General#boolean#false#],
        toptweets: [#Toptweets#General#boolean#false#],
        behavior: '[#Behavior#General#text#default#]'
    }
    }).render().start();
    </script>
    search: 'rainbow',
    search: '[#Search String#General#text#@appcrafty#]'
    #AC property name#AC property section#data type#default value#]
   

## Token Setup

Let's look at the following line taken from the original Twitter code

    search: 'rainbow',

and the same line taken from the modified code

    search: '[#Search String#General#text#@appcrafty#]'

search: this is the Twitter parameter and should not be modified

You then remove the precise portion of the code that you want parameterized and replace it as follows

    [#AC property name#AC property section#data type#default value#]

## Adding it to the Console

To add your widget to the Console, follow these steps

 - Press the New button on the left hand side to add a new entry to the Widget list.
 - 
 - Specify which IDE Toolbox section it should appear in. The 'More' section is a good place for miscellaneous widgets.
 - In the Type dropdown, select either 3rd Party Widget or 3rd Party Widget with IFRAME. If you do not select IFRAME, then the 3rd party widget will be drawn directly into the page. However, some 3rd party widgets may conflict with the Application Craft system. If you find your widget does not work properly or it destabilizes the system, then you should use the IFRAME option.
 - Upload an Icon.
 - Press the Source tab button at the top of the right section and paste in your modified code.
 - Press 'Save'.

You should now see your Widget in the IDE. If you don't see it, then log out and back in again.

