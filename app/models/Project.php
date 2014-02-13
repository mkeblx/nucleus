<?php

class Project extends Eloquent {

	protected $table = 'projects';

	protected $softDelete = true;
	protected $fillable = ['name','slug','description','notes','type','bg','active','parent_id'];

	public static function boot() {
		parent::boot();

		static::creating(function($p){

		});

		static::saving(function($p){
			$p->slug = Str::slug($p->name);
		});
	}

	public static function validate($data) {
		$rules = [
			'name' => 'required'
			];

		$validator = Validator::make($data, $rules);

		return $validator;
	}

	public function parent() {
		return $this->hasOne('Project')->withTimestamps();
	}

	public function lists() {
		return $this->hasMany('List')->withTimestamps();
	}

	public function notes() {
		return $this->hasMany('Note')->withTimestamps();
	}

	public function tags() {
		return $this->belongsToMany('Tag');
	}

	public static function scopeActive($query)
	{
		return $query->where('active', 1);
	}

}