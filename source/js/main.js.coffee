#= require_tree ./lib
#= require referrals


$ ->
  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


# Handles the hidden submenu.
$ ->
  $('#content-body h1 button').click ->
    if $('aside').is(':visible')
      do $('aside').hide
    else
      do $('aside').show


$ ->
  do $('.fancybox').fancybox


# Homepage Slideshow.
$ ->
  $('body.home header > .carousel').carousel()


# Referral form
$ ->
  email_regex = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

  $('#referral-email').on 'blur', ->
    $(this).css
      border: '1px solid #CCC'

  $('#referral-form').on 'submit', ->
    email = $(this).find('#referral-email')

    unless email_regex.test(email.val())
      do email.focus
      email.css
        border: '5px solid #F36050'
      return false

    txt = "Application Craft looks really cool. Visual development in the cloud, and it's for everyone."

    for serv in ["email","sharethis","facebook","twitter","linkedin"]
      stWidget.addEntry
        service: serv
        element: document.getElementById('shareThisShareEgg')
        url: 'http://www.applicationcraft.com/?utm_medium=affiliate&utm_source=' + email.val()
        title: if serv == 'twitter' then txt else "Application Craft"
        type: "large"
        text: txt
        summary: txt

    do $(this).hide
    $('#shareThisShareEgg').css
      display: 'block'
      visibility: 'visible'

    false