module VideoHelpers

  def training_video(id, options = {})
    href = "http://www.youtube.com/v/#{id}?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&"
    content = content_tag(:h3, content_tag(:a, options[:title], :class => 'fancybox fancybox.iframe', :href => href))

    if options[:description]
      content << content_tag(:p, options[:description])
    end

    img = tag(:img, :src => "//i1.ytimg.com/vi/#{id}/default.jpg")
    href = "http://www.youtube.com/v/#{id}?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&"
    _content = content_tag(:a, img, :class => 'fancybox fancybox.iframe', :href => href)
    _content = content_tag(:span, _content)
    _content << content_tag(:span, options[:time])

    ___content = content_tag(:div, _content, :class => "video-thumb")

    if options[:references]
      _content = content_tag(:h4, "References...")

      __content = ""
      options[:references].each do |ref|
        __content << content_tag(:li, content_tag(:a, ref[:title], :href => ref[:url]))
      end

      _content << content_tag(:h4, "References...") + content_tag(:ul, __content)

      ___content << content_tag(:div, _content, :class => "video-references clearfix")
    end

    content << content_tag(:div, ___content, :class => "clearfix")

    content_tag :section, content
  end

  def video(id, options = {})
    href = "http://www.youtube.com/v/#{id}?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&"
    _tag = tag(:img, :src => "//i1.ytimg.com/vi/#{id}/default.jpg")

    content = content_tag(:span, content_tag(:a, _tag, :class => 'fancybox fancybox.iframe', :href => href))
    content << content_tag(:span, options[:time])

    content_tag :div, content, :class => "video-thumb"
  end

  # <section>
  #   <h3>
  #     <a href="http://www.youtube.com/v/56jct5SJLIo?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&">Logging into the Console</a>
  #   </h3>

  #   <div class="clearfix">
  #     <div class="video-thumb">
  #       <span>
  #         <a href="http://www.youtube.com/v/56jct5SJLIo?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&"><img src="//i1.ytimg.com/vi/56jct5SJLIo/default.jpg" alt="Overview" width="120"></a>
  #       </span>
  #       <span>4:30</span>
  #     </div>

  #     <div class="video-references clearfix">
  #       <h4>References...</h4>
  #       <ul>
  #         <li><a href="/revisions/current/docs/user-guide/index.html?the_console.htm">Console overview</a></li>
  #         <li><a href="http://www.applicationcraft.com/revisions/current/docs/user-guide/index.html?private__shared_and_public_fol.htm">Private and shared folders</a></li>
  #       </ul>
  #     </div>
  #   </div>
  # </section>

end