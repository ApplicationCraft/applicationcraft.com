---
title: "instanceGetRTZ()"
active_menu_item: developers
class_name: developers
full_width: true
---


## instanceGetRTZ()

## Description

Returns the RTZ (Reference Time  Zone) set from app. [instanceSetRTZ()](/developers/documentation/scripting-apis/client-api/date-time-management-functions/instancesetrtz) . If instanceSetRTZ() hasn't been set, it will return (in minutes) the difference from your time zone to UTC.

## Example

    app.setValue('txtGetRTZ',app.instanceGetRTZ()); // will return the RTZ if set
     
   

## See Also

 - [instanceSetRTZ()](/developers/documentation/scripting-apis/client-api/date-time-management-functions/instancesetrtz)

