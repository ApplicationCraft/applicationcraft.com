module DocsRedirect
  class << self
    def registered(app)
      app.after_configuration do
        app.after_build do |builder|
          path, rules = "source/developers/documentation", []
          Dir.new(path).each do |x|
            next if x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')

            rules << DocsRedirect.build_rule("#{path}/#{x}", sitemap)
          end

          builder.create_file 'build/docs_redirect.map', rules.join("\n")
        end
      end
    end
    alias :included :registered

    def build_rule(item, sitemap)
      rules = []

      if Dir.exists?(item)
        Dir.new(item).each do |x|
          next if x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')

          rules << DocsRedirect.build_rule("#{item}/#{x}", sitemap)
        end

        path = sitemap.file_to_path("#{item}/index.html.markdown")
      else
        path = sitemap.file_to_path(item)
      end

      resource = sitemap.find_resource_by_path(path)

      if resource.data.old_url
        old = resource.data.old_url.split('?').last
        rules << "if ($args = #{old}) {\n  rewrite ^ #{resource.url}? permanent;\n}"
      end

      rules
    end
  end
end
::Middleman::Extensions.register(:docs_redirect, DocsRedirect)


helpers do
  def link_to_author(name)
    first, last = name.split(' ')
    mail_to "#{first[0]}#{last}@applicationcraft.com".downcase, name
  end
end


###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

page "/blog/feed.xml", :layout => false
page "/developers/documentation/*", :layout => :docs
page "/developers/tutorials/*", :layout => :tutorials

ignore "dir.ordered"
ignore "/apps"

# ignore "/developers/documentation/*"

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :fonts_dir, 'fonts'

set :markdown_engine, :redcarpet
set :markdown, :autolink => true,
               :with_toc_data => true,
               :hard_wrap => true

activate :blog do |blog|
  blog.layout             = "blog"
  blog.prefix             = "blog"
  blog.permalink          = ":year/:month/:title.html"
  blog.sources            = "articles/:year/:month/:title.html"
  blog.paginate           = true
  blog.year_template      = "blog/year.html"
  blog.month_template     = "blog/month.html"
end

activate :directory_indexes
page "/google90eb33aa6efde5d7.html", :directory_index => false

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.user = "middleman"
  deploy.host = "sitestaging.applicationcraft.com"
  deploy.path = "/home/middleman/www/site-staging"
end

# Build-specific configuration
configure :build do
  activate :docs_redirect

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip
  activate :asset_hash
  activate :cache_buster

  activate :favicon_maker

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end