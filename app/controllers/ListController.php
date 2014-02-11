<?php

class ListController extends \BaseController {

	public function index()
	{
		$lists = List::all();

		return $lists;
	}

	public function store()
	{
		$data = Input::all();

		$n = List::create($data);

		return $n;
	}

	public function show($id)
	{
		$list = List::findOrFail($id);

		return $list;
	}

	public function update($id)
	{
		$data = Input::all();

		$list = List::update($data);

		return $list;
	}

	public function destroy($id)
	{
		return List::delete($id);
	}

}