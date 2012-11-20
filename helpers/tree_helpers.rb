module TreeHelpers

  def tree_for(dir)
    content_tag :ol do

      # Load the tree from the tree.yml file if it exists.
      if File.exists?(tree_file = "#{dir}/tree.yml")
        YAML::load(File.read(tree_file)).each do |item|
          build_tree "#{dir}/#{item['url']}"
        end

      # else we scan the directory contents
      else
        Dir.new(dir).each do |x|
          next if x == '.' || x == '..' || x.start_with?('index.')
          build_tree "#{dir}/#{x}"
        end
      end

    end
  end


  private

    def build_tree(file)
      if Dir.exists?(file)
        build_directory file
      else
        resource = resource_for(file)

        content_tag :li, :class => "nofade" do
          content_tag :a, :href => resource.url, :class => current_page?(resource.url) ? 'active' : '' do
            resource.data.title
          end
        end
      end
    end

    def build_directory(file)
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

        tree_for file
      end
    end

    def resource_for(file)
      path = sitemap.file_to_path(file)
      resource = sitemap.find_resource_by_path(path)
    end

    def current_page?(path)
      current_path = current_page.url
      current_path.slice! -1 if current_page.url.end_with?('/')
      current_path == path
    end

end