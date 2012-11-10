---
title: "General Events"
active_menu_item: developers
class_name: developers
full_width: true
---


<table>
<tr>
<td width="178">
**Application Events**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On App Loading

</td>
<td width="17">
</td>
<td width="747">
Called when the App begins the load process. Is the first Event called.

</td>
</tr>
<tr>
<td width="178">
On App Started

</td>
<td width="17">
</td>
<td width="747">
Called when the App is fully loaded and is ready to interact with the Respondent. Note that the Page onShow Event will trigger before this Event.

</td>
</tr>
<tr>
<td width="178">
On Adaptive Layout

</td>
<td width="17">
</td>
<td width="747">
It is called once whenever the App resizing triggers an Adaptive Layout rule. See [Adaptive Layout Event](../../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/adaptive-layout-event) .

</td>
</tr>
<tr>
<td width="178">
On App Terminate

</td>
<td width="17">
</td>
<td width="747">
Called when the App terminates. This is the last event that is called within a running App Instance.

</td>
</tr>
<tr>
<td width="178">
On Submitted

</td>
<td width="17">
</td>
<td width="747">
This is called once the submission process is finished and contains possible error information.

</td>
</tr>
<tr>
<td width="178">
On Pre-Submit

</td>
<td width="17">
</td>
<td width="747">
This is called just before the actual Instance submission takes place. It allows you to perform checks and cancel the submission process if you need to as described in [On Pre Submit](../../../product-guide/advanced-features/data-storage-management/standard-storage-procedures/submitting-an-instance/instance-handling-with-submit-button/what-happens-after-the-instance-is-saved?/using-application-craft-events/on-pre-submit) .

</td>
</tr>
<tr>
<td width="178">
On Drill-Down

</td>
<td width="17">
</td>
<td width="747">
This Event is called as a user interaction occurs that is about to trigger a drill-down. See [Data View Related Events](../../../scripting-apis/client-api/data-view-functions/data-view-related-events) .

</td>
</tr>
<tr>
<td width="178">
On Error

</td>
<td width="17">
</td>
<td width="747">
This is called if an error is detected. By returning false, the popup window can be suppressed if required. See [Error Handling](../../../scripting-apis/client-scripting-overview/error-handling/) for details.

</td>
</tr>
<tr>
<td width="178">
On Page Change

</td>
<td width="17">
</td>
<td width="747">
This event is called as the page is changed.

</td>
</tr>
<tr>
<td width="178">
On Resize

</td>
<td width="17">
</td>
<td width="747">
Called whenever the browser resizes. See [Resize Events](../../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/resize-events) .

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Page Events**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Page Show

</td>
<td width="17">
</td>
<td width="747">
When a Page is displayed, the Event is called just before the page is actually displayed.

</td>
</tr>
<tr>
<td width="178">
On Page Leave

</td>
<td width="17">
</td>
<td width="747">
Called when the App is about to move away from the Page that is currently being displayed.

</td>
</tr>
<tr>
<td width="178">
On Resize

</td>
<td width="17">
</td>
<td width="747">
Called whenever the browser resizes but is called on an App resize whenever a specific page is already shown. Allows the user to write page specific handling. See [Resize Events](../../../product-guide/content-and-app-layout/responsive-/-adaptive-/-fluid-design/resize-events) .

</td>
</tr>
<tr>
<td width="178">
On Page Prepare

</td>
<td width="17">
</td>
<td width="747">
Called when the App is about to switch to the page. This will enable you to write widget modifying code so the widgets can be updated before the page is shown. Please note that [Twirly Thing](../../../product-guide/advanced-features/twirly-thing/hourglass/twirly-thing) won't have any use in this event as this event is called before the page content is drawn.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Other Events**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
Lost Focus

</td>
<td width="17">
</td>
<td width="747">
Called when the Widget loses the user input focus.

</td>
</tr>
<tr>
<td width="178">
Got Focus

</td>
<td width="17">
</td>
<td width="747">
Called when the Widget gets the user input focus.

</td>
</tr>
<tr>
<td width="178">
On Change

</td>
<td width="17">
</td>
<td width="747">
Called when the Widget's data changes.

</td>
</tr>
<tr>
<td width="178">
On Selection Change

</td>
<td width="17">
</td>
<td width="747">
When a change is made to a Widget.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Date Picker**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Close

</td>
<td width="17">
</td>
<td width="747">
Called when Date picker selection is closed.

</td>
</tr>
<tr>
<td width="178">
On Select Date

</td>
<td width="17">
</td>
<td width="747">
Called when a selection is made.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Timeline**

</td>
<td width="17">
</td>
<td width="747">
See [Timeline](../../../scripting-apis/client-api/widget-object-functions/timeline/)

</td>
</tr>
<tr>
<td width="178">
On Item Click

</td>
<td width="17">
</td>
<td width="747">
Called when an item in the widget is clicked.

</td>
</tr>
<tr>
<td width="178">
On Item Dbl Click

</td>
<td width="17">
</td>
<td width="747">
Called when an item in the widget is double clicked.

</td>
</tr>
<tr>
<td width="178">
On Item Mouse Enter

</td>
<td width="17">
</td>
<td width="747">
When the mouse moves into or over the timeline item (gets focus).

</td>
</tr>
<tr>
<td width="178">
On Item Mouse Leave

</td>
<td width="17">
</td>
<td width="747">
When the mouse moves away from or leaves the timeline item (loses focus).

</td>
</tr>
<tr>
<td width="178">
On Bubble Close

</td>
<td width="17">
</td>
<td width="747">
Called when Bubble is closed.

</td>
</tr>
<tr>
<td width="178">
On Bubble Click

</td>
<td width="17">
</td>
<td width="747">
Called when Bubble is clicked.

</td>
</tr>
<tr>
<td width="178">
On Scroll

</td>
<td width="17">
</td>
<td width="747">
When a scroll operation occurs on a timeline item.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Grid/Repeater**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Row Loaded

</td>
<td width="17">
</td>
<td width="747">
Called once as each individual row is added to a Grid or Repeater Container.

</td>
</tr>
<tr>
<td width="178">
On Cell Changed

</td>
<td width="17">
</td>
<td width="747">
When the contents of a cell has been changed by the Respondent. Is called before any change is implemented so it can be canceled by the script.

</td>
</tr>
<tr>
<td width="178">
On Select State Changed

</td>
<td width="17">
</td>
<td width="747">
When the state of the selected item changes.

</td>
</tr>
<tr>
<td width="178">
On Grid Reconstructed

</td>
<td width="17">
</td>
<td width="747">
Called whenever a row is added or deleted from the Grid Widget.

</td>
</tr>
<tr>
<td width="178">
On Open End

</td>
<td width="17">
</td>
<td width="747">
If you use set the Group By property for a Grid column, then this event is called whenever the group branch is opened in the Grid.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Slider**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Stop

</td>
<td width="17">
</td>
<td width="747">
Called when Slider action has stopped.

</td>
</tr>
<tr>
<td width="178">
On Start

</td>
<td width="17">
</td>
<td width="747">
Called when Slider action is initiated.

</td>
</tr>
<tr>
<td width="178">
On Slide

</td>
<td width="17">
</td>
<td width="747">
Called each time the slider value changes.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**File Upload**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
Uploaded

</td>
<td width="17">
</td>
<td width="747">
Called when file has been uploaded.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Embed App**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Started

</td>
<td width="17">
</td>
<td width="747">
Called when the Embedded app is loaded and running. If using [childApp()](../../../scripting-apis/client-api/app-functions/childapp) within your app, invoke on this event to ensure the app is running.

</td>
</tr>
<tr>
<td width="178">
On App Terminate

</td>
<td width="17">
</td>
<td width="747">
Called when the Embedded app is terminated

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**iFrame**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Load

</td>
<td width="17">
</td>
<td width="747">
When the iFrame loads.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Collapsible**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On State Changed

</td>
<td width="17">
</td>
<td width="747">
Called when the state of the widget changes. true when expanded, false when not expanded.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Upload Button**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Selected

</td>
<td width="17">
</td>
<td width="747">
Called when a file has been selected.

</td>
</tr>
<tr>
<td width="178">
On Started

</td>
<td width="17">
</td>
<td width="747">
Called when the upload is started.

</td>
</tr>
<tr>
<td width="178">
On Stopped

</td>
<td width="17">
</td>
<td width="747">
Called if the upload is stopped.

</td>
</tr>
<tr>
<td width="178">
On Uploaded

</td>
<td width="17">
</td>
<td width="747">
Called when the file has been uploaded.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Context Menu**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Pre Show

</td>
<td width="17">
</td>
<td width="747">
Called as the Context Menu's 'Parent' widget is selected. This can be used to dynamically populate the Menu items. See [Context Menu](../../../scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/context-menu2) .

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**You Tube**

</td>
<td width="17">
</td>
<td width="747">
for more information on YouTube Events see: [https://developers.google.com/youtube/iframe\_api\_reference\#Events](https://developers.google.com/youtube/iframe_api_reference#Events)

</td>
</tr>
<tr>
<td width="178">
On Player Ready

</td>
<td width="17">
</td>
<td width="747">
Called when the widget is ready to play.

</td>
</tr>
<tr>
<td width="178">
On State Change

</td>
<td width="17">
</td>
<td width="747">
Called when the state of the widget changes. See [state()](../../../scripting-apis/client-api/widget-object-functions/video,-audio-youtube-widget/state)

</td>
</tr>
<tr>
<td width="178">
On Error

</td>
<td width="17">
</td>
<td width="747">
Called if an error detected in playing.

</td>
</tr>
<tr>
<td width="178">
<a id="playback"> </a> On Playback Quality Change

</td>
<td width="17">
</td>
<td width="747">
Called when playback quality changes. See [setPlaybackQuality()](../../../scripting-apis/client-api/widget-object-functions/video,-audio-youtube-widget/setplaybackquality)

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Tab Container**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Tab Selected

</td>
<td width="17">
</td>
<td width="747">
Called when a tab is selected.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Accordion Container**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
On Section State Changed

</td>
<td width="17">
</td>
<td width="747">
Called when an accordion section is selected

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Advertising**

</td>
<td width="17">
        
        
      

</td>
<td width="747">

</td>
</tr>
<tr>
<td width="178">
On Refresh

</td>
<td width="17">
        
      

</td>
<td width="747">
Called when the widget is refreshed.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Circle Menu**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
OnInit

</td>
<td width="17">
</td>
<td width="747">
Triggered when the menu is initialized.

</td>
</tr>
<tr>
<td width="178">
OnOpen

</td>
<td width="17">
</td>
<td width="747">
Triggered when the menu opens.

</td>
</tr>
<tr>
<td width="178">
OnClose

</td>
<td width="17">
</td>
<td width="747">
Trigged when the menu closes.

</td>
</tr>
<tr>
<td width="178">
</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
**Scandit**

</td>
<td width="17">
</td>
<td width="747">
</td>
</tr>
<tr>
<td width="178">
onSuccess

</td>
<td width="17">
</td>
<td width="747">
Called when barcode was successfully read.

</td>
</tr>
<tr>
<td width="178">
onFail

</td>
<td width="17">
</td>
<td width="747">
Called when barcode was not successfully read or if scan was canceled by user.

</td>
</tr>
</table>

**See Also:**

 - [Google V3 Map Events](../../../product-guide/advanced-important-widgets/google-v3-maps-widget/property,-event,-method-summary/gmapevents)

 - [Video and Audio Widget Events](../../../product-guide/advanced-important-widgets/video-audio-widgets/property,-methods,-event-summary/videvents)

 - [Circle Menu Events](../../../product-guide/advanced-important-widgets/circle-menu-widget/property,-method-and-event-summary-2/events2-2)

