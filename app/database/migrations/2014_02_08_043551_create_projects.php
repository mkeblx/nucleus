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
			$t->string('slug', 128);
			$t->text('description');
			$t->text('notes');
			$t->string('type', 32);
			$t->string('bg');
			$t->boolean('active')->default(1);
			$t->integer('parent_id')->default(0);
			$t->softDeletes();
			$t->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('projects');
	}

}
