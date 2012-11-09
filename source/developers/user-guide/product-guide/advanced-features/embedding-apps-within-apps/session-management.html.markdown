---
title: "Session Management & Authentication"
active_menu_item: developers
class_name: developers
full_width: true
---


When an embedded App is loaded by its Parent, the child inherits the Session of the Parent. This means that scripts within the Child App can reference the Session and User data using getEnvValue() and userParameterGet() functions.

