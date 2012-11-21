#= require_tree ./lib
#= require referrals


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


    # Search
    $('.docs form input').tipuesearch
      mode: 'json'
      contentLocation: '/js/doc_search_pages.json'


    # Handle images
    if (images = $('body.developers .docs article :not(a)>img')).length > 0
      images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"


    # Set syntax highlighting language to javascript by default.
    $('body.developers .docs article pre > code').addClass 'lang-javascript'


    # Handle full screen button
    if $.cookie('full-screen-docs')
      $('body').addClass 'full-screen'

    $('#full-screen').on 'click', ->
      if $('body').hasClass('full-screen')
        $('body').removeClass 'full-screen'
        $.cookie 'full-screen-docs', false
      else
        $('body').addClass 'full-screen'
        $.cookie 'full-screen-docs', true


    # Handle video links so they open in fancybox
    if (videos = $("body.developers .docs article a[href*='youtube']")).length > 0
      videos.addClass 'fancybox fancybox.iframe'


    # Add/remove classes depending upon the collapsed state.
    $('.tree div>span').on 'click', ->
      li = $(this).parent().parent()

      if li.hasClass('checked')
        li.parent().find('>li').animate opacity: 1, 100
        li.removeClass 'checked'
      else
        li.parent().find('>li').animate opacity: 0.6, 100
        li.addClass 'checked'


    # Clicking a directory link should open up the directory index.
    $('.tree div>a').on 'click', ->
      li = $(this).parent().parent()

      $(".tree li>a").removeClass 'active'

      if li.hasClass('checked')
        li.find('li').each ->
          $(this).parent().find('>li').animate opacity: 1, 100
          $(this).removeClass 'checked'
      else
        li.parent().find('>li').animate opacity: 0.6, 100
        li.addClass 'checked'

        li.siblings().each -> $(this).removeClass('checked')


    # Clicking a file link will make it active.
    $(".tree a").on 'click', ->
      $(".tree a").removeClass 'active'
      $(this).addClass 'active'


    # Expands the tree to the current URL
    path = document.location.pathname
    if (selected = $(".tree a[href='#{path}']")).length > 0
      if selected.parent().find('>span').length > 0
        li = selected.parent().parent()
      else
        li = selected.parent()

      if li.hasClass('checked')
        li.parent().find('>li').animate opacity: 1, 100
        li.removeClass 'checked'
      else
        li.parent().find('>li').animate opacity: 0.6, 100
        li.addClass 'checked'

      li.parents('li').each ->
        li = $(this)

        li.parent().find('>li').animate opacity: 0.6, 100
        li.addClass 'checked'
