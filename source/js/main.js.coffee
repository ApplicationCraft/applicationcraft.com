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
  if (images = $('body.blog section.posts article img')).length > 0
    images.attr 'align', 'left'
    images.css 'margin', '0 25px 15px 0'
    images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

  # Set syntax highlighting language to javascript by default.
  $('body.blog section.posts article pre > code').addClass 'lang-javascript'


# Tree
$ ->
  if $('.tree').length > 0

    # Handle blog images
    if (images = $('body.developers .docs article img')).length > 0
      # images.attr 'align', 'left'
      images.css 'margin', '0 25px 15px 0'
      images.wrap -> "<a href='#{$(this).attr('src')}' class='fancybox' />"

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
    if (selected = $(".tree a[href='#{document.location.pathname}']")).length > 0
      if selected.parent().find('>span')
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
