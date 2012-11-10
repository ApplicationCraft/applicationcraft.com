---
title: "Key Management"
active_menu_item: developers
class_name: developers
full_width: true
---


PhoneGap:Build allows you to upload keys for signing your Apps. CodeSigning is a process that allows you to verify you as the author of an App. This is a requirement for deploying via an App Store (iOS, Android and Blackberry) but also to build any iOS apps (where you would usually use a development certificate

Within PhoneGap:Build

 - click on your user name at the top of the screen.

 - press the 'Signing' button on the left side of the screen.

 - You can then add keys for each platform.

See [https://build.phonegap.com/docs](https://build.phonegap.com/docs) for more information.

You should note that Application Craft currently will only use the default key. If you wish to use another key, then you will need to upload your App manually into PhoneGap:Build. This manual process is covered in a later section ( [Manual Building](manual-building.htm) ).

When you are building to deploy to the App Stores, you should also ensure that you are signing with a distribution certificate, and not a development certificate. Signing with a development certificate will not allow your app to be distributed and you may experience errors deploying to an App Store.

e.g.

<table>
<tr>
<td width="148">
**iOS**

</td>
<td width="15">
</td>
<td width="779">
Application failed codesign verification

</td>
</tr>
<tr>
<td width="148">
**Android**

</td>
<td width="15">
</td>
<td width="779">
Market does not accept apks signed with the debug certificate

</td>
</tr>
</table>

For more details

[http://developer.apple.com/ios/manage/distribution/index.action](http://developer.apple.com/ios/manage/distribution/index.action) (iOS)

[http://developer.android.com/guide/publishing/app-signing.html](http://developer.android.com/guide/publishing/app-signing.html) (Android)

[http://us.blackberry.com/ataglance/academic/gettingstarted/BlackBerry+-+Code+Signing+-+Step+By+Step+Guide-2.pdf](http://us.blackberry.com/ataglance/academic/gettingstarted/BlackBerry+-+Code+Signing+-+Step+By+Step+Guide-2.pdf) (BlackBerry)

## See Also:

 - [iOS Keys and Certificates](../certificates/ios-keys-and-certificates/)

