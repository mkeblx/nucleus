/*
main app
*/

var app = app || {};

app.name = 'nucleus';

app.config = {
	debug: 1
};

var pckry;

var router;

var appView;

var projects;

var projectsView;


function init() {
	$(document)
		.ajaxStart(function(){
			$('.loading').fadeIn(10); })
		.ajaxStop(function(){
			$('.loading').fadeOut(200); });


	setupPackery();

	setupBB();
}

function setupBB() {
	projects = new ns.Projects();

	appView = new ns.AppView();

	router = new ns.Router();

	Backbone.history.start({ pushState: true });


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
	pckry = new Packery($('#projects')[0], {
		itemSelector: '.proj',
		gutter: 10
	});

	pckry.bindResize();
}


$(function(){
	setTimeout(init, 600);
});
