load 'deploy'
require 'capistrano/ext/multistage'

set :application, "site"
set :scm, :git
set :repository, "git@github.com:ApplicationCraft/applicationcraft.com.git"
set :use_sudo, false
set :user, "middleman"

server '54.243.95.68', :app, :web, :db, :primary => true

# Setup stages
set :stages, %w(production staging)
set :default_stage, "staging"

# Deploys the current branch
set(:current_branch) { `git branch --no-color`.match(/\*\s(.+)\n/)[1] || raise("Couldn't determine current branch") }
set :branch, defer { current_branch } unless exists?(:branch)

after "deploy:restart", "deploy:cleanup"


namespace :deploy do
  task :finalize_update, :except => { :no_release => true } do
    # Do nothing
  end
end