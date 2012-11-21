---
old_url: integration_agents.htm
title: "Integration Agents"
active_menu_item: developers
class_name: developers
full_width: true
---


AC has a Database Agent that lets your Apps talk to most databases.

An Integration Agent takes data from an external source and offers it up to a [Query](/developers/documentation/product-guide/advanced-features/accessing-data-in-other-apps-databases-and-apis/advqueries) (via a [Connection](/developers/documentation/product-guide/advanced-features/accessing-data-in-other-apps-databases-and-apis/advconnections) ) in a standardized format. This format allows an App to easily consume that Agents content in a standard fashion.

If you need to access data stored in other Apps, you do not need to use an Agent nor a Connection.

We architected the Integration Agent in a way that will allow developers to write their own Agents (in PHP) so that designers have the easiest possible way of accessing data that is hidden behind the Agent. For example, you could wrap a Web Service API in an Agent rather than having the user access it using the [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) function in our Client API.

We have not yet documented the Integration Agent Architecture so if you are interested, please contact us so we can let you know where we are with it.

