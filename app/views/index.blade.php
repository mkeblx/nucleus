<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>nucleus</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oswald:300,400,700">
<link rel="stylesheet" href="/css/style.css">
</head>
<body>
<div id="container">
	<div id="head">
		<div class="btn pull-right" id="create-proj"><i>+</i> create project</div>
		<h1><span class="bread">nucleus / ?</span> <img class="loading hide" src="/img/loading.gif"></h1>
	</div>
	<div id="main-container">
		<div id="projects"></div>
	</div>
</div>

@include('templates')

<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
<script src="/js/console.js"></script>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="/js/backbone-min.js"></script>
<script src="/js/backbone.localStorage.js"></script>
<script src="/js/packery.pkgd.min.js"></script>
<script src="/js/draggabilly.pkgd.min.js"></script>

<script src="/js/setup.js"></script>
<script src="/js/models/project.js"></script>
<script src="/js/collections/projects.js"></script>
<script src="/js/views/header-view.js"></script>
<script src="/js/views/projects-view.js"></script>
<script src="/js/views/project-view.js"></script>
<script src="/js/views/app.js"></script>
<script src="/js/main.js"></script>

</body>
</html>
