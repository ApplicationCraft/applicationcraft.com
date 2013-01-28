#= require_tree ./lib
#= require vendor/bootstrap-affix
#= require vendor/bootstrap-scrollspy
#= require referrals
#= require webinar_dialog

# Global vars
exports = this


# Handle IE users - who are stupid!
$ ->
  if $.browser.msie?
    if parseInt($.browser.version, 10) < 9
      html = $('#old-browser').html()
      $('body :not(#old-browser,#old-browser-inner)').remove()
      $.fancybox.open html


$ ->
  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


# If the user is using Chrome, show the CWS sign up link within the nav.
$ ->
  if $.browser.chrome?
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


$ ->
  if document.location.hash == '#upcoming-webinars'
    $.fancybox.open($('#webinars').html())

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

    $(window).on 'scroll', ->
      return if $('body').hasClass('full-screen')

      $tree = $('#tree')
      $window = $(window)

      winHeight = $window.height() - 100
      footHeight = $('#price-banner').position().top - $window.scrollTop() - 100

      height = if footHeight < winHeight then footHeight else winHeight
      if $window.scrollTop() <= 220
        height = $window.height() - $tree.position().top + $window.scrollTop() - 10

      $tree.height height


    doc_events = ->
      # Handle images
      if (images = $('body.developers .docs article :not(a)>img')).length > 0
        images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

      # Set syntax highlighting language to javascript by default.
      $('body.developers .docs article pre > code').addClass 'lang-javascript'

      # Handle video links so they open in fancybox
      if (videos = $("body.developers .docs article a[href*='youtube']")).length > 0
        videos.addClass 'fancybox fancybox.iframe'

    do doc_events


    # Handle full screen button
    $('#full-screen').on 'click', ->
      if $('body').hasClass('full-screen')
        $('body').removeClass 'full-screen'
      else
        $('body').addClass 'full-screen'

        $tree = $('body.developers.full-screen > .container aside #tree')
        $tree.height $(window).height() - $tree.offset().top - 20


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

    # Make sure the tree is updated if a link is clicked within a doc page, and ensure all doc
    # events and set.
    $(document).on 'page:change', ->
      do expandTreeWithPath
      do doc_events
      do Rainbow.color


# Expands the tree to the current URL
exports.expandTreeWithPath = (path)->
  path = document.location.pathname unless path?
  path = path.replace(/\/$/, '') + "/"

  if (selected = $("#tree a[href='#{path}']")).length > 0
    $('#tree li').removeClass('checked').find('a').css 'color', '#999'

    if selected.parent().find('>span').length > 0
      li = selected.parent().parent()
    else
      li = selected.parent()

    li.addClass 'checked'
    li.parents('li').addClass 'checked'
    li.find('li a').css 'color', '#3E3E3E'
