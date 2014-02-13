<?php

define('SLUG',  '[A-Za-z0-9-]+');
define('ID',    '[A-Za-z0-9]+');
define('ALPHA', '[A-Za-z]+');
define('NUM',   '[0-9]+');
define('ANUM',  '[A-Za-z0-9]+');
define('HEX',   '[A-Fa-f0-9]+');


// single page app
Route::get('/', function(){
	return View::make('index');
});


//auth
Route::post('login', ['as' =>  'login', 'uses' => 'AuthController@login']);
Route::get('logout', ['as' => 'logout', 'uses' => 'AuthController@logout']);


// Route::group(['before' => 'auth'], function() {

	Route::resource('projects', 'ProjectController');
	//Route::resource('note', 'NoteController');
	//Route::resource('list', 'ListController');
	//Route::resource('tag', 'TagController');

// });
