# Referral tracking
# ---------------------------------------
$ ->

  # Allow JSON data in cookie values.
  $.cookie.json = true


  # Get the URL params and assign to the params variable.
  params = {}
  for item in document.location.search.replace('?', '').split('&')
    param = item.split('=')
    params[param[0]] = param[1]

  # Has this user been referred to AC? If so, set the referring email and current datetime in a
  # year long cookie.
  if params.utm_medium == 'ac_affiliate' && params.utm_source?
    value =
      email: params.utm_source
      datetime: new Date()

    $.cookie 'ac_referral', value,
      expires: 365
      path: '/'
      # domain: '.applicationcraft.com'



# Referral form
# ----------------------------------------
$ ->

  email_regex = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

  $('#referral-email').on 'blur', ->
    $(this).css
      border: '1px solid #CCC'

  $('#referral-form').on 'submit', ->
    email = $(this).find('#referral-email')

    unless email_regex.test(email.val())
      do email.focus
      email.css 'border', '5px solid #F36050'
      return false

    txt = "Application Craft looks really cool. Visual development in the cloud, and it's for everyone."
    url = "http://www.applicationcraft.com/?utm_medium=affiliate&utm_source=#{encodeURIComponent(email.val())}"

    $(this).fadeOut ->
      $(this).parent().append '<div id="sharethis-referral">'
      $(this).parent().parent().find('h3').text 'Now simply click an icon to share...'
      $(this).parent().after("<div id='referral-url'>Or copy and paste this URL anywhere you wish: <code>#{url}</code></div>")

      for serv in ["email","sharethis","facebook","twitter","linkedin"]
        stWidget.addEntry
          service: serv
          element: document.getElementById('sharethis-referral')
          url: url
          title: if serv == 'twitter' then txt else "Application Craft"
          type: "large"
          text: txt
          summary: txt

    false