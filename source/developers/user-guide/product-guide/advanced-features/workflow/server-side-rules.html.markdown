---
title: "Server Side Rules"
active_menu_item: developers
class_name: developers
full_width: true
---


At the time of writing, our workflow implementation forces the user to execute all rules on the client. For secure applications, this is not a good scenario as it allows the currently loaded instance to be modified by a developer type user in the browser.

We are currently planning a powerful new feature that allows you to write Javascript rules that execute on the server. As well as ensuring that business logic is executed securely on the server, it also will support data protection so that even if data is modified on the client before a submit type action, data can be protected to any extent required by the developer.

## See Also

 - [Workflow Functions](../../../scripting-apis/client-api/workflow-functions/) section of the [Client API](../../../scripting-apis/client-api/) section.

