<?php

class ProjectTableSeeder extends Seeder {

	public function run()
	{
		Eloquent::unguard();

		$file = File::get(public_path().'/data/projects.json');
		$json = json_decode($file, true);

		$projects = $json['data'];

		foreach ($projects as $p) {
			$proj = [
				'name' => $p['name'],
				'description' => $p['description'],
				'type' => $p['type'],
				'active' => 1
			];

			Project::create($proj);
		}
	}

}