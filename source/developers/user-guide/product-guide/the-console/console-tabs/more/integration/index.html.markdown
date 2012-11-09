---
title: "Integration"
active_menu_item: developers
class_name: developers
full_width: true
---


The purpose of Application Craft Integration is to make working with various data sources as simple as possible. Whether you are working with databases, the Facebook API, LDAP or other data sources, the Integration Agents process the data so it is presented to AC in the same way, regardless of the type of data source. You need no in depth knowledge of how these systems work. This data can then be used in your Apps, as you require, for example to produce reports and dashboards. You can also write data back to data sources. In the case of databases this would normally be an insert, update or delete operation, however for an Integration Agent like Facebook writing may mean sending a message or writing on someone’s wall, or in the case of an email agent, sending an email.

Application Craft handles data access as shown:

![Integration\_stack](/img/docs/integration_stack.png)

Connections and Queries are built within the console, often by a Data Administrator. AC App Designers will however only need to access Queries that they have access to.

## See Also:

 - [Connections](../../connections/index.htm)

 - [Queries](../../queries/index.htm)

 - [Integration Agents](integration-agents/index.htm)

