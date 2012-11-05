$(function() {

  var links;

  function waGetAppLoginsFromCookie(){
    var cookieValue = null;
    var name = "domainLogins";
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    var ret = [];
    try{
      ret = eval(cookieValue);
    } catch(e){}
    ret = (jQuery.isArray(ret)) ? ret : [];
    return ret;
  }

  function getLoginLinkAttrs(){
    var logins = waGetAppLoginsFromCookie();

    var aAttrs = (logins.length > 0) ? {
      href : "http://" + logins[0],
      target:"_blank"
    } : {
      href: "#",
      target: ""
    };
    return aAttrs;
  }

  function waUpdateLoginList(loginPane){
    domainLogins = $('<div class="waDomainLogins"></div>');

    var logins = waGetAppLoginsFromCookie();

    var callDomain = function(name){
      return function() {
        window.open("http://" + name);
      }
    };

    for (var i = 0, l = logins.length; i < l; i++){
      var span = $("<span class='wa-login-item'></span>").text(logins[i]).bind("click", callDomain(logins[i]));
      domainLogins.append(span);
    }

    loginPane.append(domainLogins);
  }

  function waInitControls(loginPane){
    var input = $("<input type='text' class='wa-login-input'>");
    var inputBtn = $("<button class='btn'>Go</button>");

    input.focus(function(){
      $(this).addClass("wa-logins-input-focus");
    });
    input.blur(function(){
      $(this).removeClass("wa-logins-input-focus");
    });

    inputBtn.click(function(){
      if (input.val() != "") {
        window.open("http://" + input.val() + '.applicationcraft.com');
        input.val("");
        $(this).parent(".waLoginList").hide();
      } else {
        input.focus();
      }
    });

    input.keypress(function(ev){
      (ev.keyCode == 13) ? inputBtn.click() : null;
    });

    var textSpan = $("<span class='wa-login-textspan'></span>").text(".applicationcraft.com");
    textSpan.click(function(){
      inputBtn.click();
    });

    var waControls = $("<div class='wa-login-bottom'></div>").append(input, textSpan, inputBtn);
    loginPane.append(waControls);
  }


  var waSetMenuPos = function(listParent){
    var dx = listParent.width() - ($(document).width() - listParent.parent().offset().left);
    (dx > 0) ? listParent.css("left", (-(dx - 0 + 60)) + "px") : listParent.css("left", "");

    var dy = listParent.height() - ($(document).height() - listParent.parent().offset().top);
    (dy > 0) ? listParent.css("top", (-(dy - 0 + 42)) + "px") : listParent.css("top", "");
  };

  var waInitLoginList = function(){
    //init login links and append menu items

    var loginList = $(".waLoginList");
    links = $(".waLoginListLink");

    links.attr(getLoginLinkAttrs());
    $(".waLoginListDiv").each(function(index, element){
      $(element).empty();

      waUpdateLoginList($(element));
      waInitControls($(element));
    });
  };

  waInitLoginList();

});