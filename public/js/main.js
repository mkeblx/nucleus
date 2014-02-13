//default data
var data = {
	id: 1,
	name: 'New Project',
	slug: 'new-project',
	description: 'Enter project description here',
	type: ''
};


$(function(){
	setTimeout(init, 600);
});


var pckry, tmpl;

var $projects;

var router;

var app;
var header;

var projectsView, projects;



function init() {
	tmpl = _.template($('#proj-mini-tmpl').html());

	$(document)
		.ajaxStart(function(){
			$('.loading').fadeIn(10); })
		.ajaxStop(function(){
			$('.loading').fadeOut(200); });


	$projects = $('#projects');

	setupPackery();

	setupBB();
}

function setupBB() {
	ns.Router = Backbone.Router.extend({

		routes: {
			'projects'				 : 'projects',
			'projects/:id/:ref': 'projects'
		},

		projects: function(id, ref){
			alert('projects');
		}

	});
	router = new ns.Router;

	Backbone.history.start();

	projects = new ns.Projects();

	app = new ns.AppView();

	header = new ns.HeaderView();

	projects.fetch({
		success: function(resp) {
			projectsView = new ns.ProjectsView({
				collection: resp
			});

			projectsView.render();
		}
	});

}

function setupPackery() {
	pckry = new Packery($projects[0], {
		itemSelector: '.proj',
		gutter: 10
	});

	pckry.bindResize();
}
