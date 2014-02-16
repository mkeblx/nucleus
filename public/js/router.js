ns.Router = Backbone.Router.extend({

	routes: {
		'projects'     : 'projects',
		'projects/:id' : 'projectView',
		'*other'       : 'default'
	},

	initialize: function(options) {

	},

	default: function() {
		console.log('default route');
		this.navigate('projects', {trigger: true});
	},

	projects: function() {
		console.log('projects route');
		//this.navigate('projects');
		Backbone.trigger('nav', {title: 'projects'});
	},

	projectView: function(id) {
		console.log('project view route');
		Backbone.trigger('nav', {title: 'projects / '+id});
	}

});