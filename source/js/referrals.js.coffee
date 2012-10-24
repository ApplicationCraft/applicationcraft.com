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
  if params.utm_medium == 'affiliate' && params.utm_source?
    value =
      email: params.utm_source
      datetime: new Date()

    $.cookie 'referral', value,
      expires: 365
      path: '/'
      # domain: '.applicationcraft.com'


