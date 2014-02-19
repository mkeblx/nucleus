ns.HeaderView = Backbone.View.extend({

	el: '#head',

	breadTmpl: _.template('<span data-href="{{ r }}">{{ n }}</span>'),

	events: {
		'click #create-proj': 'createProject',
		'click .bread span' : 'route'
	},

	initialize: function() {
		this.$bread = this.$('.bread');
		Backbone.on('nav', this.update.bind(this));
	},

	route: function(ev) {
		var $this = $(ev.currentTarget);

		var route = $this.data('href');

		if (!route)
			return;

		router.navigate(route, {trigger: true});
	},

	update: function(pieces) {
		var pieces = pieces.pieces;

		var b = [];
		for (var i = 0; i < pieces.length; i++) {
			var p = pieces[i];
			b.push(this.breadTmpl({n: p.text, r: p.route}));
		}

		var bread = b.join(' / ');
		this.$bread.html(bread);
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