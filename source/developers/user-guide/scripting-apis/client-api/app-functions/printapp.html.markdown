---
title: "printApp()"
active_menu_item: developers
class_name: developers
full_width: true
---


**printApp** (appID, params, callback);

<table>
<tr>
<td width="170">
{string} appID

</td>
<td width="1">
</td>
<td width="710">
The ID (not the name) of the App you want to switch to. This can be found either a) in the Console with the App selected in the App list or b) in the designer's App Id property in the Advanced property group. To print the current app you can set this parameter to app.id()

</td>
</tr>
<tr>
<td width="170">
{object} params

</td>
<td width="1">
</td>
<td width="710">
An object containing various optional parameters

</td>
</tr>
<tr>
<td width="170">
{function} callback

</td>
<td width="1">
</td>
<td width="710">
Invoked once the printing process is complete and returns an error and the url of the pdf

</td>
</tr>
</table>
## Description

Please refer to the [Printing](../../../product-guide/advanced-features/printing/) section for an overview of printing in general. For code examples, please go to the [Printing Examples](../../../product-guide/advanced-features/printing/printing-examples) topic.

Call this method when you need to generate a pdf representation of any App/App Instance. You should pass in the id of the app and if you do not pass in the params object, you will get a pdf with no data in the widgets.

The params object looks like this (you can leave out any fields you do not want to specify)

    {
        pages: ['page1', 'page3', 'page6'],
        instanceId: 'instanceId to print',
        instance: instanceData,
        orientation: 'landscape' or 'Portrait', Portrait is default
        printBackground: true, false (default false)
        fitToPage: true, false (default false)
    }
    callbackFunction(error,@url)@{
     
    }
    function@handler_actionBtn_onClick(mouseev){
        params = {
    pages:@['page1'],@//Print@just@page1@of@the@app
    instance:@app.getInstanceData(),@//@Print@out@the@data@of@the@current@instance
    orientation:@'landscape',@//@Print@in@Landscape@mode@
            };
      
    //@app.id()@used@to@print@out@the@active@instance@of@the@app
    app.printApp(app.id(),params,@function(err,@url){@@@
            if(!err)
            {
    //@If@no@error,@then@show@'open@PDF@here'@in@a@label@on@the@app@for@the@user@to@click
                app.setProperty('label','label',"<a href='" + url + "' target='_blank'>open PDF here</a>");
            }        
        });
    }
   

**Important Beta Notice:** currently, you cannot leave parameter 2 undefined and must pass in some sort of object. It can be a dummy object. We will be removing this requirement shortly. Once removed, you will not need to pass in the entire object if not required.

Not passing in the pages key will result in all pages being printed. Not passing in an orientation will result in portrait. Not passing in an instance id will result in empty data fields if there are any.

As soon as the printing process has completed, the callback function will be called. You should check for an error and, if there is none, you can access the newly created pdf at the url passed in.

## Examples

For more code examples, please go to the [Printing Examples](../../../product-guide/advanced-features/printing/printing-examples) topic.

## See Also:

 - [isPrinting()](isprinting.htm)

