ns.Projects = Backbone.Collection.extend({

	model: ns.Project,

	url: '/projects',
	
	parse: function(resp){
		return resp;
	}

});