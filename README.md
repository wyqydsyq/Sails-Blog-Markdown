# Sails Blog — Markdown

A simple Sails app that processes markdown files under `views/blog/article/` and displays them as blog posts.


The posts follow a standard format:

 - The file name is used as the URL slug, so a post located at `views/blog/article/sample-post.md` will be viewable at `/blog/article/sample-post`
 - The blog article's title should be written on the first line, followed by a `====` on the second line, this will translate it to a <h1> tag when parsed by markdown, and 
the 
title will also be injected into the page's `<title></title>` tags.
 - The line after the header (line 3) should be the date of the article, this can be in any format parseable by JavaScript's native Date() object e.g. `Thu 30 Oct`, `Thursday, 
October 30, 2014 `.

a [Sails](http://sailsjs.org) application
