ns.ProjectView = Backbone.View.extend({

	tagName: 'div',
	'class': 'proj-page',

	tmpl: _.template($('#proj-tmpl').html()),

	events: {

	},

	render: function() {
		this.el = this.tmpl(this.model.attributes);
		return this;
	},

	details: function() {

	}

});