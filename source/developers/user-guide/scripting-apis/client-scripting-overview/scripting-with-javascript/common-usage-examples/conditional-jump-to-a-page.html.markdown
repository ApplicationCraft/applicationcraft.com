---
title: "Conditional Jump to a Page"
active_menu_item: developers
class_name: developers
full_width: true
---


This is one of the most common scripting uses. When a button is pressed, you need to jump to a page depending on the answer to a question in your App.

    function handler_btnNext_onClick(mouseev){
        //Write code handler here
        if(app.getValue("rbFemale")) {
            app.pageJump("FemalePage");
        }
        else {
            app.pageJump("MalePage");
        }
    }
   

In this example, we are inspecting the contents of a RadioBtn named rbFemale using the getData function.

You should also refer to [Interacting with Widgets](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) for full details on how to read data from the various Widget types.

## See also

 - [pageJump()](/developers/user-guide/scripting-apis/client-api/page-functions/pagejump)
 - [pageNext()](/developers/user-guide/scripting-apis/client-api/page-functions/pagenext)
 - [pagePrevious()](/developers/user-guide/scripting-apis/client-api/page-functions/pageprevious)
 - [PageCalling()](/developers/user-guide/scripting-apis/client-api/page-functions/pagecalling)

