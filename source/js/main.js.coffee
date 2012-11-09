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


# Blog
$ ->

  # Handle blog images
  images = $('body.blog section.posts article img')
  images.attr 'align', 'left'
  images.css 'margin', '0 25px 15px 0'
  images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

  # Set syntax highlighting language to javascript by default.
  $('body.blog section.posts article pre > code').addClass 'lang-javascript'


# Tree
$ ->
  $('.tree label').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200)

  $('.tree input[type=checkbox]').on 'change', ->
    label = $(this).prev()
    if $(this).is(':checked')
      label.addClass 'checked'
      $(this).next().addClass 'checked'
      label.parent().addClass 'checked'
    else
      label.removeClass 'checked'
      $(this).next().removeClass 'checked'
      label.parent().removeClass 'checked'