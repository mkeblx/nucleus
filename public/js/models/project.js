ns.Project = Backbone.Model.extend({

	defaults: {
		id: null,
		name: 'New Project',
		slug: 'new-project',
		description: 'Enter project description here',
		type: 0,
		active: 1
	},

	initialize: function() {
		var slug = slugify(this.get('name'));
		this.set('slug', slug);
	},

	validate: function(attributes) {

	}

});