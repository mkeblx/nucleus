<?php

class List extends Eloquent {

	protected $table = 'lists';

	public function project() {
		return $this->belongsTo('Project');
	}

	public function items() {
		return $this->hasMany('Item')->withTimestamps();
	}

}