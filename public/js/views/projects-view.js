ns.ProjectsView = Backbone.View.extend({

	el: '#projects',
	//tagName: 'div',
	//id: 'projects',

	events: {
		'click .corner' : 'details',
		'click' : 'show'
	},

	initialize: function() {
		
	},

	render: function() {
		this.$el.empty();

		for (var i = 0; i < this.collection.length; i++) {
			var p = this.collection.at(i);

			var $el = this.createEl(p.attributes);

			this.$el.append($el);
			pckry.appended($el);
		}
		this.setupDrag();
		return this;
	},

	createEl: function(data) {
		data.color = _.sample(colors);
		return $(tmpl(data));
	},

	setupDrag: function() {
		var itemElems = pckry.getItemElements();
		for ( var i=0, len = itemElems.length; i < len; i++ ) {
			var elem = itemElems[i];
			var draggie = new Draggabilly( elem );
			pckry.bindDraggabillyEvents( draggie );
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
		console.log('enter project');
	}

});