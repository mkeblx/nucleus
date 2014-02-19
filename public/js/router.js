ns.Router = Backbone.Router.extend({

	routes: {
		'projects'     : 'projects',
		'projects/:name' : 'projectView',
		'*other'       : 'default'
	},

	initialize: function(options) {

	},

	default: function() {
		this.navigate('projects', {trigger: true});
	},

	projects: function() {
		var pieces = [{type: 'type', text: 'projects', route: 'projects'}];
		Backbone.trigger('nav', {pieces: pieces});
	},

	projectView: function(name) {
		var pieces = [
			{type: 'type', text: 'projects', route: 'projects'},
			{type: 'resource', 'text': name, route: null}];
		Backbone.trigger('nav', {pieces : pieces});
	}

});