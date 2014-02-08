<?php

class Tag extends Eloquent {

	protected $table = 'tags';

	public function projects() {
		return $this->belongsToMany('Project');
	}

}