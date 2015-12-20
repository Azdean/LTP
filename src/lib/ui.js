function navListener(){
	jQuery('#add-btn').click(function(){
		var configBox = jQuery('#config');

		if(configBox.css('height') === '240px'){
			configBox.css('height', '');
		} else {
			configBox.css('height','15em');
		}
	});
}

// Loads in options from inhaler and colour arrays.
function optionsLoader(){
	var colourWindow = jQuery('#config-colour'),
			shapeWindow = jQuery('#config-shape');

	jQuery(colour).each(function(index){
		colourWindow.append('<div id="'+colour[index]+'" class="option"></div>');
	});

	jQuery(shape).each(function(index){
			shapeWindow.append('<div id="'+shape[index]+'" class="option"></div>');
	});
}
