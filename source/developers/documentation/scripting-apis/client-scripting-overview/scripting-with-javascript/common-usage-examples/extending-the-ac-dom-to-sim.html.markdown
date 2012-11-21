---
old_url: extending_the_ac_dom_to_sim.htm
title: "Extending the AC Client API"
active_menu_item: developers
class_name: developers
full_width: true
---


A very powerful feature of Application Craft is the ability for a developer to extend the AC API. This way, you can embed complex functionality in libraries that can be accessed by the AC Client API with code such as

    app.weatherClient.WeatherForecast(app.getData("txtZIP"), "txtSuccess", "txtResponse", "txtState", "txtCity", "grdForecast", "date,desc,high,low,precip,icon"); 
   

Please refer to the [Extending AC](/developers/documentation/extending-ac/) section on how to build Application Craft Widgets and AC Client API Extensions.

