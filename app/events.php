<?php

//user tracking
Event::listen('user.login', function(){
	$user = Auth::user();
	$user->last_login = new DateTime;
	$user->save();
});

Event::listen('user.logout', function($user){

});