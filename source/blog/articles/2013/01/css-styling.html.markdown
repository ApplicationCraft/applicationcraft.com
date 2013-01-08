---
title: CSS Styling in Application Craft
author: Manos Koufakis (AC User)
date: 2013-01-07
tags: css styling jquerymobile
class_name: blog
full_width: true
published: false
image: /img/blog/coinmad-movie.png
---

##Introducing Manos Koufakis
Manos has been an Application Craft user since we were in beta last year. His first App made it to #2 in the Apple App Store, beating eBay, Skype and other household names.

Manos has produced a great new App (currently pre-release) that makes heavy use of CSS Styling and we thought it would be great to share his experiences with you. Manos has provided ...

 - the [working App](http://acft.ws/nsnd) that you can run in your desktop browser
 - a <a href="http://www.youtube.com/v/9bJSG-ETZvs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&" class="fancybox fancybox.iframe"> Video Tutorial</a> of how he did this
 - a list of useful resources (below)


##Style like a pro with Application Craft
Ever since I started using Application Craft (nearly 1 year ago), I was really excited with the Widget drag and drop environment that allowed for really speedy development without having to care about containers, specifying complex div structure etc. So I made my first App with AC, named Βρες Δώρο (Find Gift) that does what its title indicates - it helps you find a gift for any circumstance.

Without using ANY custom CSS style, relying only to the provided AC themes and widgets I completed my App and it rocketed to the #2 position in the App store and stayed there for nearly 1 week! I was really blown away! The application received triumphant comments, but what  started bothering me, was that there were a few comments referring to poor design.

In the meanwhile, I started developing my second App called “Find the Movie”, which is a movie quiz game where the user is called to guess a film by looking at a screenshot. For that App I co-operated with a graphic art company in order to have cool icons and design in my App and avoid any negative criticism. When the art project completed, I was provided with a set of .psd files and NO CSS. That was a nightmare for me!

How the hell can I implement all those fancy gradients, cool button icons etc. into AC? AC is a widget based platform and there is NO theme roller. Plus I really hate messing with CSS! As much as I like programming, my head aches when I have to deal with CSS styling.

After the initial panic, I searched a bit on the AC forum and read a bit about the Custom CSS Properties that you can see as an option to every widget you see.
That was the key to paradise!  I started writing my own CSS styles and in a short period of time, I transformed a poorly looking App to a really nice looking quiz game. You can see the result here and play around with the pre-release demo:
http://acft.ws/nsnd

##OK, so much for the talk, now how you do it?
In order to transform your Application and implement your custom styles, you will need 3 tools:

1.  http://www.w3schools.com/ - even if you think you’re a CSS expert, it’s nearly impossible to remember by heart all these great features of CSS and CSS3, so you can use that web site as a reference in case you forget something
1.  Chrome or Firefox debugger (or any debugger that you like) – myself I’ve been using mostly the Chrome debugger, ‘cause I like Chrome best. This is the most useful tool in order to know what to do. So every time you want to style a certain page, you open the page, then open the debugger and with the use of the Element Inspector (that little magnifying glass at the bottom) you can click any element on your page and you are provided with its  CSS style features.
1.  An image editing program like Photoshop
1.   CSS Lint – never ever ever ever try to implement any CSS without first validating it. So CSS Lint provides a really handy CSS debugger where you can copy+paste your CSS code and check for any errors. A single CSS error may be the reason why your CSS style is completely messed up. I use CSS Lint for validation and Chrome’s debugger for element inspection and in case you wonder why I use a second debugger for CSS is because I find CSS Lint more handy for CSS validation purposes  only.

So, with all these in mind / handy, you’re ready for the next stage...


##How to mess with AC’s Widgets and add your own custom styling?
Instead of writing a general strategy, it is best to proceed with a "per case" scenario. <a href="http://www.youtube.com/v/9bJSG-ETZvs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&" class="fancybox fancybox.iframe"> So I made a video</a>.

(please bear with the hybrid language that I speak on the tutorial. It is known as Greeklish ;)

I will be adding more video tutorials when I have more time.


