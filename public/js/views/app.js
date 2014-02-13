var ns = ns || {};

ns.AppView = Backbone.View.extend({

	el: '#container',

	events: {
		'': ''
	},

	initialize: function() {
		this.listenTo(projects, 'add', this.addOne);
		this.listenTo(projects, 'reset', this.addAll);
	},

	render: function() {

	},

	addOne: function() {

	},

	addAll: function() {
		
	}


});