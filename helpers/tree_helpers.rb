module TreeHelpers

  def documentation_tree
    dir = 'source/developers/documentation'
    tree_file = "#{root}/tree.yml"

    # Load the tree from the tree.yml file if it exists.
    if File.exists?(tree_file)
      tree = YAML::load(File.read(tree_file))

    # else we scan the directory contents
    else
      content_tag :ol do

        Dir.new(dir).each do |x|
          next if x == '.' || x == '..' || x.start_with?('index.')

          file = "#{dir}/#{x}"
          if Dir.exists?(file)
            resource = resource_for("#{file}/index.html.markdown")

            content_tag :li do
              content_tag :div, :class => "nofade" do
                content_tag :span do
                  "expand"
                end
                content_tag :a, :href => resource.url do
                  resource.data.title
                end
              end
            end

          else
            resource = resource_for(file)

            content_tag :li, :class => "nofade" do
              content_tag :a, :href => resource.url, :class => current_page?(resource.url) ? 'active' : '' do
                resource.data.title
              end
            end
          end
        end

      end
    end

    # content_tag :aside, :class => "tree" do
    #   generate_tree_for data['tree']
    # end
  end


  private

    def tree_for(file)
      content_tag :ol do

      end
    end

    def resource_for(file)
      path = sitemap.file_to_path(file)
      resource = sitemap.find_resource_by_path(path)
    end

    def generate_tree_for(data)
      content_tag :ol do
        data.each do |ele|
          if ele['tree']
            content_tag :li do
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