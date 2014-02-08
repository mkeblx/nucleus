var ns = ns || {};

var colors = [
	'#805056',
	'#F16522',
	'#FCBD54',
	'#8DC63E',
	'#84C780',
	'#298ACA',
	'#8772A5',
	'#F072AB',
	'#E44044'
];

_.templateSettings = {
	'interpolate': /{{([\s\S]+?)}}/g
};

$(function(){
	setTimeout(init, 600);
});

var pckry, tmpl;

var $projects;



var router;

//default data
var data = {
	id: 1,
	title: 'New Project',
	desc: 'Enter project description here'
};




function init() {
	tmpl = _.template($('#proj-mini-tmpl').html());

	$projects = $('#projects');

	setupBB();

	setupPackery();

	setTimeout(function(){ $('.loading').fadeToggle(200) }, 500);

	load('projects');

	$('#create-proj').on('click', createProject);

	setupEvents();
}

function setupBB() {
	ns.Router = Backbone.Router.extend({

		routes: {
			"projects": "projects",
			"projects/:id/:ref": "projects"
		},

		projects: function(id, ref){
			alert('projects');
		}

	});
	router = new ns.Router;

	Backbone.history.start();

	
}

function setupEvents() {
	$projects.on('click', '.corner', function(ev){
		var $this = $(this);
		var id = $this.parent().data('id');
	});
}

function createProject() {
	var $div = createEl(data);

	$projects.prepend($div);
	pckry.prepended($div);
}

function createEl(data) {
	var $div = $(tmpl(data));

	var color = _.sample(colors);
	$div.css('border-color', color);
	$div.find('.corner')
		.css('border-top-color', color);

	$div.addClass('u'+_.random(1,3));

	var draggie = new Draggabilly($div[0]);
	pckry.bindDraggabillyEvents(draggie);

	return $div;
}

function load(file) {	
	$.ajax({
		url: file,
		dataType: 'json',
		success: function(resp){
			var data = resp.data;

			_.each(data, function(p, i){

				setTimeout(function(){
					var $div = createEl(p);
					$projects.prepend($div);
					pckry.appended($div);
				}, 30*i);
			});
		}, 
		error: function(request, textStatus, errorThrown){
			console.log(arguments);
		}
	});
}

function setupPackery() {
	pckry = new Packery($projects[0], {
		itemSelector: '.proj',
		gutter: 10
	});

	pckry.bindResize();

	return;

	var itemElems = pckry.getItemElements();
	for (var i=0, len = itemElems.length; i < len; i++) {
		var elem = itemElems[i];
		var draggie = new Draggabilly(elem);
		pckry.bindDraggabillyEvents(draggie);
	}

}