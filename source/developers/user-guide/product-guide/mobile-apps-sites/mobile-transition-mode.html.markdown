---
title: "Transition Mode"
active_menu_item: developers
class_name: developers
full_width: true
---


This [Page Property](../widget-properties-events/page-properties) can be used to help give a clear visual indication to users during Page navigation and transitions when there is a delay in the target page preparation.

![mobtransmode](/img/docs/mobtransmode.png)

In most cases as users move/navigate to other pages it will happen quickly and smoothly, but in some situations where there is a lot of content to render on the target page, if you are handling a lot of code (fetching data from an external database for example) or if the device being used is underpowered there may be slight delays, and it can be a good practice to be able to indicate to users that their action to navigate to the next page is proceeding.

To support this, there are 3 options available:

<table>
<tr>
<td width="191">
Auto

</td>
<td width="19">
</td>
<td width="765">
Pages will be automatically rendered and if the time to transition was \>1500ms, future transitions will use 'Pre Rendering' and an hourglass will be displayed. If time to transition was \<1500ms, future transitions will use 'Post Rendering'

</td>
</tr>
<tr>
<td width="191">
Pre Rendering

</td>
<td width="19">
</td>
<td width="765">
The target page will be rendered before transitioning to that page. An hourglass will be shown as the target page is being rendered

</td>
</tr>
<tr>
<td width="191">
Post Rendering

</td>
<td width="19">
</td>
<td width="765">
The target page will be loaded and no hourglass will be shown

</td>
</tr>
</table>

If pages in your app are of similar design and content, in most cases the 'Auto' option would be sufficient, and this is the default property for each page. You do not need to have the same Transition Mode property for each page in your app. You may for example have one page where you are presenting a lot of images and it may be appropriate then to have that page set to 'Post Rendering' to show the hourglass, but other pages can use the Pre Rendering mode

Please note: this function is not supported for iOS 3.x.x
