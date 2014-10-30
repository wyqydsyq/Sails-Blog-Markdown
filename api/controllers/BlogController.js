/**
 * BlogController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var fs = require('fs');
var article_path = 'views/blog/article/';

module.exports = {
	
	index: function(req, res){
		var article_files = fs.readdirSync(article_path);
		var articles = _.map(article_files, function(article, i, articles){
			var astring = fs.readFileSync(article_path + article).toString();
			return {
				file: article,
				slug: article.replace(/\.md$/, ''),
				name: astring.match(/^(.*)\n=*\n/)[1],
				date: new Date(astring.match(/^(.*)\n=*\n(.*)\n/)[2])
			};
		});
		
		articles.sort(function(a, b){
			if(a.date.getTime() / 1000 > b.date.getTime() / 1000)
				return -1;

			if(a.date.getTime() / 1000 < b.date.getTime() / 1000)
				return 1;

			return 0;
		});

		res.view('blog/index', {'articles': articles, 'title': 'News'});
	},

	article: function(req, res){
		var markdown = require('markdown').markdown;
		if(req.param('article') === null || !fs.existsSync(article_path + req.param('article') + '.md')){
			res.redirect('/blog');
			return true;
		}

		var article_file = article_path + req.param('article') + '.md';
		var article_content = fs.readFileSync(article_file).toString();

		var article = {
			file: article_file,
			slug: article_file.replace(/\.md$/, ''),
			content: markdown.toHTML(article_content),
			name: article_content.match(/^(.*)\n=*\n/)[1],
			date: fs.statSync(article_file).ctime
  		}

		res.view('blog/article', {'article': article, 'title': article.name});
	},


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to BlogController)
   */
  _config: {}

  
};
