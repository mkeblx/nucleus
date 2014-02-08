<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjects extends Migration {

	public function up()
	{
		Schema::create('projects', function(Blueprint $t)
		{
			$t->increments('id');
			$t->string('name', 128);
			$t->text('description');
			$t->string('type', 32);
			$t->string('bg');
			$t->int('active')->default(1);
			$t->softDeletes();
			$t->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('projects');
	}

}
