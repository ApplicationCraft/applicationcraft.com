load 'deploy'

set :application, "site-prod"
set :deploy_via, :copy
set :scm, :none
set :repository, "build"
set :copy_compression, :gzip
set :use_sudo, false
set :user, "middleman"
set :deploy_to, "/home/middleman/www/#{application}"

# set :copy_cache, true
# set :copy_exclude, ".git/*"

server '54.243.95.68', :app, :web, :db, :primary => true

after "deploy:restart", "deploy:cleanup"

# set :build_script, "rm -rf build/* && middleman build"

# before 'deploy:update_code' do
#   run_locally 'rm -rf build/*'
#   run_locally 'middleman build'
# end