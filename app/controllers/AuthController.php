<?php

class AuthController extends BaseController {

	public function login()
	{
		$credentials = Input::only('username', 'password');
		$remember = true;
		if (Auth::attempt($credentials, $remember)) {
			Event::fire('user.login');

			return Redirect::intended('/');
		} else {
			return false;
		}
	}

	public function logout()
	{
		Auth::logout();
		return Redirect::to('/');
	}

}