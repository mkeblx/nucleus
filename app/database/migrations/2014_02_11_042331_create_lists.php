<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLists extends Migration {

	public function up()
	{
		Schema::create('lists', function(Blueprint $t)
		{
			$t->increments('id');
			$t->string('name', 128);
			$t->text('description');
			$t->integer('order');
			$t->integer('project_id');
			$t->softDeletes();
			$t->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('lists');
	}

}
