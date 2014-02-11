<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotes extends Migration {

	public function up()
	{
		Schema::create('notes', function(Blueprint $t)
		{
			$t->increments('id');
			$t->string('name', 64);
			$t->text('content');
			$t->string('type', 32);
			$t->integer('project_id');
			$t->softDeletes();
			$t->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('notes');
	}

}
