$ ->

  unless $.cookie('ac_existing')

    $.cookie 'ac_existing', true,
      expires: 365
      path: '/'

    $.fancybox.open $('#webinar-dialog').html()

    $('#webinar-dialog-inner .btn').on 'click', ->
      do $.fancybox.close
      false
