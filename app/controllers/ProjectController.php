<?php

class ProjectController extends BaseController {

	public function index()
	{
		//tmp
		$projects = File::get(public_path().'/data/projects.json');

		$response = Response::make($projects);
		$response->header('Content-Type', 'application/json');
		return $response;
	}

}