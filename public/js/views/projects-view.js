ns.ProjectsView = Backbone.View.extend({

	el: '#projects',
	//tagName: 'div',
	//id: 'projects',

	pTmpl: _.template($('#proj-mini-tmpl').html()),

	events: {
		'click .corner' : 'details',
		'click' : 'show'
	},

	initialize: function() {
		this.listenTo(projects, 'add', this.addUpdate);
	},

	render: function() {
		this.$el.empty();

		for (var i = 0, len = this.collection.length; i < len; i++) {
			var p = this.collection.at(i);
			var $pel = $(this.createEl(p.attributes));
			this.append($pel);
		}

		return this;
	},

	createEl: function(data) {
		data.color = _.sample(colors);
		return this.pTmpl(data);
	},

	addUpdate: function(el) {
		console.log('added:', el);
	},

	addProject: function(project) {
		this.collection.create(project);

		var $pel = $(this.createEl(project.attributes));

		this.append($pel);
		this.setupDrag($pel);
	},

	append: function($pel) {
		this.$el.prepend($pel);
		pckry.prepended($pel);
	},

	setupDrag: function(els) {
		var els = _.isArray(els) ? els : [els];
		for (var i=0, len = els.length; i < len; i++) {
			var elem = els[i][0];
			var draggie = new Draggabilly(elem);
			pckry.bindDraggabillyEvents(draggie);
		}
	},

	details: function(ev) {
		console.log('corner details');
	},

	show: function(ev) {
		if ($(ev.target).is('.corner')) {
			ev.preventDefault();
			return;
		}

		//todo: route to project and update accordingly
		console.log('enter project');
	}

});