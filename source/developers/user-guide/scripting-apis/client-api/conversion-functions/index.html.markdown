---
title: "Conversion Functions"
active_menu_item: developers
class_name: developers
full_width: true
---


These functions are really useful for converting data between different data types. Very often you will find data in one of the following formats

 - JSON - lots of different Web Service APIs return data in JSON format. It is also Application Craft's native format.

 - XML - is somewhat flabbier than JSON but it is the data format for many Web Services. You will want to use the XML2OBJ() function to get it into the right format to use within your AC scripts.

 - Array - some AC functions expect objects and so the ARRAY2OBJ() function allows for a quick and easy conversion into object format.

## In This Section:

 - [[filterArray()](/developers/user-guide/scripting-apis/client-api/conversion-functions/filterarray)
    Filters an array
 - [[OBJ2ARRAY()](/developers/user-guide/scripting-apis/client-api/conversion-functions/advancedtoarray)
    Converts an object into an array
 - [[ARRAY2OBJ()](/developers/user-guide/scripting-apis/client-api/conversion-functions/arraytoadvanced)
    Converts an array into an object
 - [[OBJ2JSON()](/developers/user-guide/scripting-apis/client-api/conversion-functions/json2text)
    Converts an object into a JSON string
 - [[JSON2OBJ()](/developers/user-guide/scripting-apis/client-api/conversion-functions/text2json)
    Converts a JSON string into an object
 - [[OBJ2XML()](/developers/user-guide/scripting-apis/client-api/conversion-functions/json2xml)
    Converts an object into an XML string
 - [XML2OBJ()](/developers/user-guide/scripting-apis/client-api/conversion-functions/xml2json)
    Converts an XML string into an object
 - [DATE2DB()](/developers/user-guide/scripting-apis/client-api/conversion-functions/date2db)
    Converts a Javascript date object into a string that is compatible with the AC database