---
title: "Reporting Database (RDB)"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

The drawback to storing data in JSON format in the CDB is that it is a poor format for reporting. Also, if there were to be heavy reporting operations it could adversely affect the performance of the core system. By decoupling reporting from the core system, we are getting the best of both worlds.

The RDB is a key-value pair database that can scale extremely well. It does not care how many Apps there are within your system, nor how many Instances there are.

Whenever an Instance is submitted, it is flagged for transfer to the RDB. A process runs that looks for updated CDB records and whenever it finds them, it transfers the data to the RDB. There will be a small delay between data hitting the CDB and it appearing in the RDB. You can in fact specify that an App must write its data synchronously without delays. However, this will slow the system down under heavier loads and so is best avoided if possible.

