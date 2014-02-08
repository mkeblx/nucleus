<?php

class NoteController extends \BaseController {

	public function index()
	{
		$notes = Note::all();

		return $notes;
	}

	public function store()
	{
		$data = Input::all();
	}

	public function show($id)
	{

	}

	public function update($id)
	{

	}

	public function destroy($id)
	{

	}

}