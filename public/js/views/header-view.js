ns.HeaderView = Backbone.View.extend({

	el: '#head',

	events: {
		'click #create-proj': 'createProject'
	},

	initialize: function() {
		Backbone.on('nav', this.update);
	},

	update: function(dest) {
		console.log(dest);
		var title = [app.name, dest.title].join(' / ');
		this.$('.bread').html(title);
	},

	render: function() {
		return this;
	},

	createProject: function() {
		var name = prompt('Enter name for new project', 'Project name');

		if (!name) return;

		var project = new ns.Project({ name: name });
		
		projects.create(project);
	}

});