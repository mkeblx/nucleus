<?php

Route::get('/', function(){

	return View::make('index');

});

// Route::group(['before' => 'auth'], function() {

Route::resource('projects', 'ProjectController');
//Route::resource('note', 'NoteController');
//Route::resource('list', 'ListController');
//Route::resource('tag', 'TagController');

// });
