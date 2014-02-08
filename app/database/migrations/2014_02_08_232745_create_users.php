<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $t)
		{
			$t->increments('id');
			$t->string('username', 64);
			$t->string('password', 64);
			$t->string('name', 64);
			$t->string('img');
			$t->boolean('active')->default(1);
			$t->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('users');
	}

}
