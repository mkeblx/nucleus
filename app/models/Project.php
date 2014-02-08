<?php

class Project extends Eloquent {

	protected $table = 'projects';

	public function scopeActive()
	{
		return $this->active;
	}

}