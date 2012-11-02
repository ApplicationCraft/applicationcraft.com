require "lib/helpers/video_helpers"
helpers VideoHelpers


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

set :markdown_engine, :redcarpet
set :markdown, :autolink => true,
               :with_toc_data => true,
               :hard_wrap => true

activate :blog do |blog|
  blog.prefix     = "blog"
  blog.permalink  = ":year/:month/:title.html"
  blog.sources    = "articles/:year/:month/:title.html"
end

activate :directory_indexes

# Activate sync extension
activate :sync do |sync|
  sync.fog_provider = 'AWS' # Your storage provider
  sync.fog_directory = 'ac-site' # Your bucket name
  # sync.fog_region = 'bucket-region-name' # The region your storage bucket is in (eg us-east-1, us-west-1, eu-west-1, ap-southeast-1 )
  sync.aws_access_key_id = 'super' # Your Amazon S3 access key
  sync.aws_secret_access_key = 'secret' # Your Amazon S3 access secret
  sync.existing_remote_files = 'keep' # What to do with your existing remote files? ( keep or delete )
  # sync.after_build = false # Disable sync to run after Middleman build ( defaults to true )
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end