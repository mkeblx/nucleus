var ns = ns || {};

var colors = [
	'#805056',
	'#F16522',
	'#FCBD54',
	'#8DC63E',
	'#84C780',
	'#298ACA',
	'#8772A5',
	'#F072AB',
	'#E44044'
];

_.templateSettings = {
	'interpolate': /{{([\s\S]+?)}}/g
};

function slugify(str) {
	var s =
		str.toLowerCase()
			.replace(/[^\w ]+/g,'')
			.replace(/ +/g,'-');
	return s;
}
