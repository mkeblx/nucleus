ns.AppView = Backbone.View.extend({

	el: '#container',

	events: {

	},

	initialize: function() {
		this.listenTo(projects, 'add', this.addOne);
		this.listenTo(projects, 'reset', this.addAll);

		Backbone.on('nav', this.updatePageTitle);
	},

	updatePageTitle: function(data) {
		var title = [data.title].join(' / ');
		$(document).attr('title', title);
	},

	render: function() {

	},

	addOne: function() {

	},

	addAll: function() {
		
	}


});