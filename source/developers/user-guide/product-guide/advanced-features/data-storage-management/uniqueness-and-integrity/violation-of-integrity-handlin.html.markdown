---
title: "Violation of Integrity Handling"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

You can use the Integrity Handling property to control the way AC handles things should the integrity be violated. It is important to note that AC will generate an Error that is passed to the Callback function of the script that added or updated the Instance data. As a result, you can handle the errors entirely yourself without AC displaying its own messages.

 - Show Error Message - AC will generate an on-screen message

 - Show Error Message and Highlight - this does the same but also highlights the offending Widget(s)

 - Highlight Only - no message, but offending Widget(s) are highlighted and you should handle messages to the Respondent in the callback function within the script

 - No automatic handling - your script will handle the error in the callback function within the script

