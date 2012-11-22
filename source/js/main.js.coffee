#= require_tree ./lib
#= require referrals

exports = this


$ ->
  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


# If the user is using Chrome, show the CWS sign up link within the nav.
$ ->
  if $.browser.chrome
    do $('#cws-sign-up').show


# Handles the hidden submenu.
$ ->
  $('#content-body h1 button').click ->
    if $('aside').is(':visible')
      do $('aside').hide
    else
      do $('aside').show


$ ->
  $('.fancybox').fancybox
    helpers:
      title:
        type: 'inside'
    beforeLoad: ->
      this.title = $(this.element).find('img').attr('title')


# Homepage Slideshow.
$ ->
  $('body.home header > .carousel').carousel()


# Blog
$ ->

  # Handle blog images
  if (images = $('body.blog section.posts article img')).length > 0
    images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

  if (images = $("body.blog section.posts article img[align='left']")).length > 0
    images.css 'margin', '0 25px 15px 0'

  # Set syntax highlighting language to javascript by default.
  $('body.blog section.posts article pre > code').addClass 'lang-javascript'


# Tree
$ ->
  if $('#tree').length > 0

    # Handle images
    if (images = $('body.developers .docs article :not(a)>img')).length > 0
      images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"


    # Set syntax highlighting language to javascript by default.
    $('body.developers .docs article pre > code').addClass 'lang-javascript'


    # Handle full screen button
    $('#full-screen').on 'click', ->
      if $('body').hasClass('full-screen')
        $('body').removeClass 'full-screen'
      else
        $('body').addClass 'full-screen'


    # Handle video links so they open in fancybox
    if (videos = $("body.developers .docs article a[href*='youtube']")).length > 0
      videos.addClass 'fancybox fancybox.iframe'


    # Add/remove classes depending upon the collapsed state.
    $('#tree div>span').on 'click', ->
      $(this).parent().parent().toggleClass 'expanded'


    # Clicking a directory link should open up the directory index.
    $('#tree a').on 'click', ->
      $('#tree li').removeClass('checked').find('a').css 'color', '#999'

      if $(this).parent().find('>span').length > 0
        li = $(this).parent().parent()
      else
        li = $(this).parent()

      li.addClass 'checked'
      li.parents('li').addClass 'checked'
      li.find('li a').css 'color', '#3E3E3E'


    do expandTreeWithPath


# Expands the tree to the current URL
exports.expandTreeWithPath = (path)->
  path = document.location.pathname unless path?

  if (selected = $("#tree a[href='#{path}']")).length > 0
    $('#tree li').removeClass('checked').find('a').css 'color', '#999'

    if selected.parent().find('>span').length > 0
      li = selected.parent().parent()
    else
      li = selected.parent()

    li.addClass 'checked'
    li.parents('li').addClass 'checked'
    li.find('li a').css 'color', '#3E3E3E'
