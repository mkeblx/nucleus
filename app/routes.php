<?php

define('SLUG',  '[A-Za-z0-9-]+');
define('ID',    '[A-Za-z0-9]+');
define('ALPHA', '[A-Za-z]+');
define('NUM',   '[0-9]+');
define('ANUM',  '[A-Za-z0-9]+');
define('HEX',   '[A-Fa-f0-9]+');

Route::group(['before' => 'ajax'], function() {

	Route::resource('projects', 'ProjectController');

	//todo: nested routing off of projects i.e. projects/9/lists/3 etc
	
	//Route::resource('note', 'NoteController');
	//Route::resource('list', 'ListController');
	//Route::resource('tag', 'TagController');

});

// single page app
Route::any('{rsc?}', ['before' => 'noajax', 'as' => 'root', function($rsc = 'index'){
	return View::make('index');
}]);


//auth
//Route::post('login', ['as' => 'login',  'uses' => 'AuthController@login']);
//Route::get('logout', ['as' => 'logout', 'uses' => 'AuthController@logout']);

