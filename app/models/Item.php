<?php

class Item extends Eloquent {

	protected $table = 'items';

	public function list() {
		return $this->belongsTo('List');
	}

}