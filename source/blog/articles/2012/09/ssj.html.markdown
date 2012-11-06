---
title: The Power of Server Side Javascript
date: 2012-09-17
tags: server side javascript mobile app platform
class_name: blog
full_width: true
---

Most of you will already know that Application Craft gives you the ability to run <a href="/revisions/current/docs/user-guide/index.html?server_side_scripting.htm">Server-Side Javascript</a> code as part of your app, allowing you to securely handle <a href="/revisions/current/docs/user-guide/index.html?database_handling_with_ssj.htm">database connections and communication</a>. It also means you can write custom functions that will be executed within the confines of the server. This functionality is hugely powerful, and extremely conveniant, mainly because you can write Javascript on both the client and server. SSJ has also been a part of Application Craft for several months now.

![ACE Code Editor](/img/blog/ace-editor.png "ACE Code editor in the AC IDE") 

Last week, Parse announced a <a href="http://blog.parse.com/2012/09/11/welcoming-cloud-code-to-the-parse-family/" target="_blank">new service</a> to allow their users to do the same thing, and named it "Cloud Code". Since then, there has been a buzz around the interwebs about how cool this is. So I thought I would show you a little of what Application Craft's SSJ can do for you and your apps, and why there is no better platform to allow you to build "anywhere, anytime" mobile, desktop and web apps.

So lets use a quick example. In fact, this is a real world example of an app that I started building just last week. We wanted a way to quickly and easily see our key business metrics and performance indicators, all in one easy to use interface - a dashboard if you like. I wanted this dashboard to contain things like the number of visitors to the site, how many signups we got yesterday and how long our users use the service.

As well as needing to grab visitor data from Google Analytics via their API (which I will talk about in a future post), I also needed a way to query our internal PostGreSQL database, which contains our user data. Needless to say, I couldn't do that on the client side, as it would mean our DB credentials would be exposed to the world. So in stepped Server-Side Javascript!

The following function, which I placed in a new file within the Server section of my app's Code Explorer, simply queries our DB for the number of signups we had yesterday:

<pre><code>
function fetchSignupData()
{
  var db = ssj.getConnection('MY-CONNECTION-ID');
  var sql = "SELECT COUNT(*) AS signups_yesterday FROM signups WHERE date = '2012-09-16'";
  var result = db.exec(sql);
  return result[0].signups_yesterday;
}
</code></pre>

A very simple function that gets our DB connection (via its ID), which I created via the "Connections" tab of the console, and executes a SQL query. The result, which will be a Javascript object literal, is then filtered so the function can return the actual signups count.
I could also have written my SQL query using Application Craft's built in <a href="/revisions/current/docs/user-guide/index.html?select_handling.htm">select handling</a> methods:

<pre><code>
db.select().from("signups", "COUNT(*)").where("date = ?", '2012-09-16');
</code></pre>

All I had to do then, was drop a label widget into my app, which will show the result of the SSJ function above. Once that was done, I could then write a little client-side code to call my SSJ function, and print the result into the label.

<pre><code>
function handler_application_onAppStarted()
{
  app.callSSJ('fetchSignupData', function(error, result)
  {
    if (error === false) {
      app.setData('signupsLabel', "Signups yesterday: " + result[0].signups_yesterday);
    } else {
      console.log('Unable to fetch signup data');
    }
  });
}
</code></pre>

This function is automatically called when my app starts, so it is a good place to grab what we need. The third line is the most interesting bit:

<pre><code>
app.callSSJ('fetchSignupData', function(error, result) {});
</code></pre>

app.callSSJ() is is what we use to call SSJ functions. It expects two arguments; the SSJ function name, and a callback that will be passed any error and the result of the SSJ function itself. Within the callback, I simply checked for an error, at which point I log an error to the browsers console. But if no error is found, it updates the label with the signup count.
As well as allowing us to safely fetch data from almost any remote database, it also means that we can make changes to our SSJ, without having to update any code on the client.
So hopefully from this, you can see how powerful Server-Side Javascript is and can be as part of your apps. If you want to give this a go, you can get started here for free.
Enjoy!