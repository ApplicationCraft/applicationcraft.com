Application Craft (NEW) Site
============================

This is the repository for the AC website. It is primarily a [Middleman](http://middlemanapp.com/) application, which is a static site generator.


### Requirements ###

This repository is hosted on BitBucket as a Git repo at [https://bitbucket.org/applicationcraft/new-site](https://bitbucket.org/applicationcraft/new-site). You will therefore need to install Git so you can check out the code and run it locally.

Check out the [BitBucket 101](https://confluence.atlassian.com/display/BITBUCKET/Bitbucket+101) for help on getting started with Git and BitBucket.

You will also need the latest version of Ruby 1.9.3, along with RubyGems and Bundler.


### Getting Started ###

First check out the code to your local machine. BitBucket has a [good guide](https://confluence.atlassian.com/display/BITBUCKET/Clone+Your+Git+Repo+and+Add+Source+Files) on how to do this.

Once you have the code checkout out locally, and you have Ruby and Bundler installed, install the required Ruby Gems by running:

    $ bundle install

If this command fails, you most likely do not have Bundler installed. So run this:

    $ gem install bundler

Once your bundle is installed, you can simply run `middleman` in your terminal to start a local server that will serve the site.

Make sure you run the `middleman` command while in the directory where the app resides.

Now just open up your browser and go to http://localhost:4567


### Making Changes ###

All the source code (HTML, CSS, Javascript, etc.) is located within the `/source` directory. Changes that you make to any file within this directory can be viewed in your browser at the above URL. (Don't forget to refresh your browser.)

Once you have made your changes, simply commit them and push them up to the remote at BitBucket.


### Lost? Need help? ###

Gimme a shout at jmoss@applicationcraft.com or on Skype at joelmoss.info.