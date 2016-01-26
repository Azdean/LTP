/*
	Constructor
*/
function loadUI(){
	optionsLoader();
	binder();
}

/*
	Binds event listeners to ui elements
*/
function binder(){
	// Bind Menu drop down button
	jQuery('#add-btn').click(function(){
		var configBox = jQuery('#config');

		if(configBox.css('height') === '240px'){
			configBox.css('height', '');
		} else {
			configBox.css('height','15em');
		}
	});

	// Bind config window add button
	jQuery('#config-submit').click(function(){
		addItem();
	});
}

/*
 Loads in options from inhaler and colour arrays.
*/
function optionsLoader(){
	var colourWindow = jQuery('#config-colour'),
			shapeWindow = jQuery('#config-shape');

	for(key in colour){
		colourWindow.append('<div id="'+ key +'" style="background-color:'+colour[key]+';" class="option"></div>');

			jQuery('#'+ key).click(function(){
				 jQuery('#config-colour div').each(function(){
					 jQuery(this).removeClass('selected');
				 });
				jQuery(this).addClass('selected');
				newObject[1] = jQuery(this).attr('id');
			});
	}

	jQuery(shape).each(function(index){
		shapeWindow.append('<div id="'+shape[index]+'" class="option">'+shape[index].slice(0,1).toUpperCase()+'</div>');

		jQuery('#'+shape[index]).click(function(){
		 jQuery('#config-shape div').each(function(){
			 jQuery(this).removeClass('selected');
		 });
		jQuery(this).addClass('selected');
		newObject[0] = shape[index];
		});
	});
}
