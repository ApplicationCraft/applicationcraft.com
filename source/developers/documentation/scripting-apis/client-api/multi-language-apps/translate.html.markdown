---
old_url: translate.htm
title: "translate()"
active_menu_item: developers
class_name: developers
full_width: true
---


strTranslatedString **translate** (strToken, strLang);

## Parameters

<table>
<tr>
<td width="170">
{string} strToken

</td>
<td width="1">
</td>
<td width="710">
The string token to translate

</td>
</tr>
<tr>
<td width="170">
{string} strLang

</td>
<td width="1">
</td>
<td width="710">
The language code to translate to

</td>
</tr>
</table>
## Returns

The translated string.

## Description

Performs string translations within your App. This is typically used if your application needs to perform multi-language message handling.

## Example

      strLangCode = 'de';  
      strUserMessage = app.translate('ac-my-token-name', strLangCode);   
     
   

## See Also

 - [Multi Language Apps](/developers/documentation/product-guide/advanced-features/multi-language-apps/)
 - [language()](/developers/documentation/scripting-apis/client-api/multi-language-apps/language)

