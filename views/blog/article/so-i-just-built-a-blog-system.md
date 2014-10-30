So I just built a blog system
============
Wednesday, January 15, 2014

Which uses plaintext [Markdown](http://daringfireball.net/projects/markdown/) files and converts them into html with the node.js `markdown` module, and spits it out on a page just like this. I'm quite proud. ^_^

It's built as a controller for [Sails.js](http://sailsjs.org/) and has no external dependencies other than mentioned `markdown` module.

Templates are stored under `/views/blog`, `index.ejs` for the main article list and `article.ejs` for viewing induvidual articles. Articles are then written as plain ol' Markdown documents under `/views/blog/article`, for example, the one you're looking at is in the file `/views/blog/article/so-i-just-built-a-blog-system.md`. Another nifty thing is that the permalinks are generated based on the article's name (minus the `.md` extension).

I'll **probably** release this open-source in the near future.