// set up requirejs
require.config({
	baseUrl: '/js',
	shim: {
		underscore: {
			exports: '_'
		}
	}
});

// dependencies be here
require([
	'jquery',
	'bootstrap',
	'purl',
	'underscore'
], function($, bs, purl, _){

	// main JS execution

});
