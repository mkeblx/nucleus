ns.HeaderView = Backbone.View.extend({

	el: '#head',

	events: {
		'click #create-proj': 'createProject'
	},

	initialize: function() {

	},

	render: function() {
		return this;
	},

	createProject: function() {
		var name = prompt('Enter name for new project', 'Project name');

		if(!name)
			return;

		var project = new ns.Project({ name: name });
		
		projects.add(project);

		//
		//projectsView.addProject(project);
	}

});