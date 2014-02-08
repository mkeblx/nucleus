<?php

class Note extends Eloquent {

	protected $table = 'notes';

	public function project() {
		return $this->belongsTo('Project');
	}

}