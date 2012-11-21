---
old_url: widget_effects.htm
title: "Widget Effects"
active_menu_item: developers
class_name: developers
full_width: true
---


Application Craft is based on JQuery. As a result, it is possible to create effects for Widgets. For a detailed description of JQuery effects, we recommend referring to the [JQuery effects documentation](http://api.jquery.com/category/effects/) .

This guide offers some basic examples that show you how to access these effects from within your Apps. The following are typical effects

<table>
<tr>
<td width="196">
  <a href="http://api.jquery.com/category/effects/fading/">fadeIn()</a>

</td>
<td width="18">
</td>
<td width="666">
Fades a Widget into sight. Use fadeOut(0) first.

</td>
</tr>
<tr>
<td width="196">
  <a href="http://api.jquery.com/category/effects/fading/">fadeOut()</a>

</td>
<td width="18">
</td>
<td width="666">
Fades a Widget out.

</td>
</tr>
<tr>
<td width="196">
  <a href="http://api.jquery.com/category/effects/sliding/">slideUp()</a>

</td>
<td width="18">
</td>
<td width="666">
Hides a Widget by sliding it into itself

</td>
</tr>
<tr>
<td width="196">
  <a href="http://api.jquery.com/category/effects/sliding/">slideDown()</a>

</td>
<td width="18">
</td>
<td width="666">
Reveals a Widget by sliding it out of itself into view

</td>
</tr>
<tr>
<td width="196">
  <a href="http://api.jquery.com/animate/">animate()</a>

</td>
<td width="18">
</td>
<td width="666">
Moves a Widget around and can also control various effects at the same time

</td>
</tr>
</table>

## Examples

Fade a Widget out instantly and then fade it back in over 2 seconds

    app.w('shape1').base().fadeOut(0);    
    app.w('shape1').base().fadeIn(2000);

Move a Widget from its current position to a new position 500 pixels to the right and 100 pixels lower down. At the same time, change its opacity  and height. All done over a 3 second period.

    app.w('textarea1').base().animate({
            opacity: 0.25,
            top: '+=100',
            left: '+=500',
            height: 400
    }, 3000);  
   


