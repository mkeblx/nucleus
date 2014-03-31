ns.AppView = Backbone.View.extend({

	el: '#container',

	events: {

	},

	initialize: function() {
		this.listenTo(projects, 'add', this.addOne);
		this.listenTo(projects, 'reset', this.addAll);

		this.header = new ns.HeaderView();

		Backbone.on('nav', this.updatePageTitle);
		Backbone.on('show', this.showView);
	},

	updatePageTitle: function(data) {
		var title = data.pieces.pop().text;
		$(document).attr('title', title);
	},

	showView: function(options) {
		if (options.view == 'project') {
			$('#projects').hide();
			$('#project').show();
		} else if (options.view == 'projects') {
			$('#projects').show();
			$('#project').hide();
		}
	},

	render: function() {

	},

	addOne: function() {

	},

	addAll: function() {
		
	}


});