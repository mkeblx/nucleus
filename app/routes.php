<?php

Route::get('/', function(){

	return View::make('index');

});

Route::get('/projects', ['as' => 'projects', 'uses' => 'ProjectController@index']);

/*	$projects = File::get(public_path().'/data/projects.json');

	$response = Response::make($projects);
	$response->header('Content-Type', 'application/json');
	return $response;
});*/