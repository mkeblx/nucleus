<?php

class UserTableSeeder extends Seeder {

	public function run()
	{
		Eloquent::unguard();

		$user = ['username' => 'atom', 'password' => Hash::make('nucleus')];

		User::create($user);
	}

}