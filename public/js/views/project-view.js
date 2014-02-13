ns.ProjectView = Backbone.View.extend({

	tagName: 'div',
	'class': 'proj',

	tmpl: _.template($('#proj-tmpl')),

	events: {
		'click .corner': 'details'
	},

	render: function() {
		this.$el.html(this.tmpl(this.model.attributes));
		return this;
	},

	details: function() {

	}

});