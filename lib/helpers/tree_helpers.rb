module TreeHelpers

  def tree_for(id, options = {})
    data = YAML::load(File.read("data/#{id}.yml"))
    raise "Top level 'tree' element missing from data/#{id}.yml" unless data['tree']

    content_tag :aside, :class => "tree" do
      generate_tree_for data['tree']
    end
  end

  def breadcrumbs(pop = 0)
    page, crumbs = current_page, []
    while page = page.parent
      crumbs << {
        :url => page.url,
        :title => page.data.title
      }
    end
    # crumbs.pop pop
    crumbs.reverse
  end


  private

    def generate_tree_for(data)
      content_tag :ol do
        data.each do |ele|
          if ele['tree']
            content_tag :li do
              id = random_string

              content_tag :div, :class => "nofade" do
                content_tag :span do
                  "expand"
                end
                content_tag :a, :href => ele['url'] do
                  ele['title']
                end
              end
              generate_tree_for ele['tree']
            end
          else
            content_tag :li, :class => "nofade" do
              content_tag :a, :href => ele['url'], :class => current_page?(ele['url']) ? 'active' : '' do
                ele['title']
              end
            end
          end
        end
      end
    end

    def random_string
      rand(36**16).to_s(36)
    end

    def current_page?(path)
      current_path = current_page.url
      current_path.slice! -1 if current_page.url.end_with?('/')
      current_path == path
    end

end