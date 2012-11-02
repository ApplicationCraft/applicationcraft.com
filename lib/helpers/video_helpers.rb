module VideoHelpers

  def training_video(id, options = {})
    content_tag :section do
      content_tag :h3 do
        content_tag :a, :class => 'fancybox fancybox.iframe',
                        :href => "http://www.youtube.com/v/#{id}?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&" do
          options[:title]
        end
      end

      if options[:description]
        content_tag :p do
          options[:description]
        end
      end

      content_tag :div, :class => "clearfix" do
        content_tag :div, :class => "video-thumb" do
          content_tag :span do
            content_tag :a, :class => 'fancybox fancybox.iframe',
                            :href => "http://www.youtube.com/v/#{id}?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&" do
              tag :img, :src => "//i1.ytimg.com/vi/#{id}/default.jpg"
            end
          end
          content_tag :span do
            options[:time]
          end
        end

        if options[:references]
          content_tag :div, :class => "video-references clearfix" do
            content_tag :h4 do
              "References..."
            end
            content_tag :ul do
              options[:references].each do |ref|
                content_tag :li do
                  content_tag :a, :href => ref[:url] do
                    ref[:title]
                  end
                end
              end
            end
          end
        end
      end
    end
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