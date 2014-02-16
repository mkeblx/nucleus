ns.ProjectsView = Backbone.View.extend({

	el: '#projects',
	//tagName: 'div',
	//id: 'projects',

	pTmpl: _.template($('#proj-mini-tmpl').html()),

	events: {
		'click .proj .corner' : 'details',
		'click .proj' : 'show'
	},

	initialize: function() {
		this.listenTo(this.collection, 'add', this.addUpdate);
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

	addUpdate: function(p) {
		console.log('added:', p);

		var $pel = $(this.createEl(p.attributes));
		this.append($pel);
	},

	addProject: function(project) {
		this.collection.create(project);

		var $pel = $(this.createEl(project.attributes));
		this.append($pel);
	},

	append: function($pel) {
		this.$el.prepend($pel);
		pckry.prepended($pel);
		this.setupDrag($pel);
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
		var id = $(ev.target).parent().data('id');
		console.log('show details for: ' + id);
	},

	show: function(ev) {
		var $el = $(ev.currentTarget);

		if ($el.is('.corner')) {
			ev.preventDefault();
			return;
		}

		$el.toggleClass('u1').toggleClass('u2');
		setTimeout(function(){ pckry.layout(); }, 350);

		var id = $el.data('id');
		var title = $el.find('.title').html();
		router.navigate('projects/'+slugify(title), { trigger: true });
	}

});