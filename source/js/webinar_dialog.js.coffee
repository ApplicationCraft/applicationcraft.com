# $ ->

#   unless $.cookie('ac_existing')

#     $.cookie 'ac_existing', true,
#       expires: 365
#       path: '/'

#     $('a').one 'click', (e)->
#       href = $(this).prop('href')
#       $.fancybox.open $('#webinar-dialog').html(),
#         afterClose: ->
#           window.location = href

#       $('#webinar-dialog-inner .btn, #webinar-dialog-inner .fancybox-close').one 'click', ->
#         do $.fancybox.close
#         false

#       false