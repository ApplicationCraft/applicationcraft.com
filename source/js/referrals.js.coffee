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
      domain: '.applicationcraft.com'



# Referral form
# ----------------------------------------
$ ->

  email_regex = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

  $('#referral-email').on 'blur', ->
    $(this).css
      border: '1px solid #CCC'

  $('#referral-form').on 'submit', ->
    form = $(this)
    email = $(this).find('#referral-email')

    unless email_regex.test(email.val())
      do email.focus
      email.css 'border', '5px solid #F36050'
      return false


    url = "http://www.applicationcraft.com/?utm_medium=affiliate&utm_source=#{encodeURIComponent(email.val())}"
    options =
      login: 'applicationcraft'
      apiKey: 'R_25cb95f39d27477516ad78346d85a2bf'
      longUrl: url

    $.get 'https://api-ssl.bitly.com/v3/shorten', options, (data)->
      url = data.data.url if data.data.url

      title = "Take a look at ApplicationCraft. It's visual development in the cloud - for everyone."
      summary = "Build amazing mobile and desktop applications with our web based, drag-and-drop IDE."

      form.fadeOut ->
        $(this).parent().append '<div id="sharethis-referral">'
        $(this).parent().parent().find('h3').text 'Now simply click an icon to share...'
        $(this).parent().after("<div id='referral-url'>Or copy and paste this URL anywhere you wish: <code>#{url}</code></div>")

        for serv in ["email", "facebook", "twitter", "linkedin"]
          stWidget.addEntry
            service: serv
            element: document.getElementById('sharethis-referral')
            url: url
            title: title
            type: "large"
            summary: summary
            image: 'http://localhost:4567/img/logo.png'

    false