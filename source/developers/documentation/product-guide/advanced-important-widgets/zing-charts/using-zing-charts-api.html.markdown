---
old_url: using_zing_charts_api.htm
title: "Using the Zingchart API"
active_menu_item: developers
class_name: developers
full_width: true
---


If you want access to the ZingCharts API directly then you can do so from your AC code. Documentation on this Zingchart API can be found here : [http://www.zingchart.com/learn/api/api.php](http://www.zingchart.com/learn/api/api.php)

Where the API expects a containerID as shown here ...

zingchart.exec(containerID, functionname, JSON val);

... you should supply the containerID like this

    app.w('zing1').getZingChartId()
   

where zing1 is the AC widget name.

