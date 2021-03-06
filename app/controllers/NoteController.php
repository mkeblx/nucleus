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

		$n = Note::create($data);

		return $n;
	}

	public function show($id)
	{
		$note = Note::findOrFail($id);

		return $note;
	}

	public function update($id)
	{
		$data = Input::all();

		$note = Note::update($data);

		return $note;
	}

	public function destroy($id)
	{
		return Note::delete($id);
	}

}