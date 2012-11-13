---
title: "Passing in data with Embedded Apps and Javascript"
active_menu_item: developers
class_name: developers
full_width: true
---


If you are launching an embedded App that is located within your web page, you may want to pass in parameters in a similar way to using the query string. The following example shows the following parameters and associated being passed in using the waInitForm() function

<table>
<tr>
<td width="13">
 - 

</td>
      text = 'test test test' 
      num=54
      id=12
      id=14
      <script src="http://ac-dev.applicationcraft.com//live/userlive.js" type="text/javascript"></script>
      <script type="text/javascript">
         waInitForm("2e5a47be-9c85-4ad4-8f47-108cb2986268", 
           757, 811, "id=12&id=14&text=test test test&num=54");
      </script>
      <script src="http://ac-dev.applicationcraft.com//live/userlive.js" type="text/javascript"></script>
      <script type="text/javascript">
         waInitForm("2e5a47be-9c85-4ad4-8f47-108cb2986268", 
           757, 811, {id:[12,14], text:"test test test", num:54});
      </script>
     

</tr>
</table>
 - 

 - 

 - 

Of particular interest is the fact that there are two id parameters being passed in. Application Craft will put these into a single array that can be read using getInputParameters().

**Important** : the querystring data being passed in should NOT be escaped

Additionally, you can pass in data in a JSON format

## See Also

 - [Reading query string parameters in your App](/developers/documentation/product-guide/advanced-features/passing-parameters-into-apps/reading-querystring-parameters)
 - [getInputParameters()](/developers/documentation/scripting-apis/client-api/app-functions/getinputparameter)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Riyw8suv0hc?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Embedding in a Web Page [2:16]
