<?php

class ProjectController extends \BaseController {

	public function index()
	{
		$projects = Project::all();
		
		return $projects;
	}

	public function store()
	{
		$data = Input::all();

		$p = Project::create($data);

		return $p;
	}

	public function show($id)
	{
		$project = Project::findOrFail($id);

		return $project;
	}

	public function update($id)
	{
		$data = Input::all();

		$project = Project::update($data);

		return $project;
	}

	public function destroy($id)
	{
		$project = Project::findOrFail($id);
	}

}