<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectTag extends Migration {

	public function up()
	{
		Schema::create('project_tag', function(Blueprint $t)
		{
			$t->increments('id');
			$t->integer('project_id')->unsigned()->index();
			$t->integer('tag_id')->unsigned()->index();
			$t->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
			$t->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');			
			$t->timestamps();
			$t->unique(['project_id', 'tag_id']);
		});
	}

	public function down()
	{
		Schema::drop('project_tag');
	}

}
