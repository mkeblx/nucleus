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
		this.projects();
	},

	projects: function() {
		console.log('projects route');
		this.navigate('projects');
		Backbone.trigger('nav', {title: 'projects'});
	},

	projectView: function() {
		console.log('project view route');
	}

});