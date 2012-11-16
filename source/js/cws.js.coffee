$ ->

  cookie_name = 'domainLogins'

  waGetAppLoginsFromCookie = ->
    cookieValue = null
    name = "domainLogins"

    if document.cookie && document.cookie != ''
      cookies = document.cookie.split(';')
      for i in [0...cookies.length] by 1
        cookie = $.trim(cookies[i])
        if cookie.substring(0, name.length + 1) == (name + '=')
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break

    ret = $.parseJSON(cookieValue)
    if $.isArray(ret) then ret else []


  domains = waGetAppLoginsFromCookie()

  if domains.length == 1
    div = $('#chrome-signin')
    div.find('a').attr 'href', "http://#{domains[0]}"
    div.show()

    redirect_to = -> document.location = "http://#{domains[0]}"
    setTimeout redirect_to, 5000

  else if domains.length > 1
    div = $('#chrome-signin-list')
    list = div.find('ul')
    for domain in domains
      list.append "<li><a href='http://#{domain}'>#{domain}</a></li>"
    div.show()

  else
    $('#chrome-signup').show()