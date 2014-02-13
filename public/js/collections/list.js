ns.List = Backbone.Collection.extend({

	model: ns.Item,

	completed: function() {
		return this.filter(function(todo) {
			return todo.get('completed');
		});
	},

	remaining: function() {
		return this.without.apply(this, this.completed());
	},

	comparator: function(todo) {
		return todo.get('order');
	}

});