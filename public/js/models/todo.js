ns.Todo = Backbone.Model.extend({

	defaults: {
		title: '',
		desc: '',
		completed: false
	},

	initialize: function() {
	
	},

	toggle: function() {
		return;

		this.save({
			completed: !this.get('completed')
		});
	}

});