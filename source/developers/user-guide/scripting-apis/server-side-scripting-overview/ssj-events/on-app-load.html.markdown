---
title: "On App Load"
active_menu_item: developers
class_name: developers
full_width: true
---


Contains all information about the App being accessed.

    function@handler_server_onAppLoad(user,@id,@name,@customUrl,@longUrl,@shortUrl){
    }
   

 - user - user object (as with the On User Login event)

 - id - app id as displayed in the Console

 - name - app name

 - customUrl - the app's custom url, if used and as shown in the Console

 - longUrl - the app's full, long url, as shown in the Console

 - shortUrl - the app's short format (acft.ws) url, as shown in the Console

