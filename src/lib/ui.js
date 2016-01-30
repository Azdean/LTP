function ltp_ui(){

	this.selected_options = {colour: '' , shape:''};

	this.init = function(){

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
			if(ui.selected_options.colour !== '' && ui.selected_options.shape !== ''){
				table.add_column(ui.selected_options);
				ui.selected_options = {colour:'',shape:''};

				jQuery('#config-colour div').each(function(){
					jQuery(this).removeClass('selected');
				});

				jQuery('#config-shape div').each(function(){
					jQuery(this).removeClass('selected');
				});
			}
		});
	};

	this.load_options = function(){
		var colourWindow = jQuery('#config-colour'),
				shapeWindow = jQuery('#config-shape');

		for(key in colour){
			colourWindow.append('<div id="'+ key +'" style="background-color:'+colour[key]+';" class="option"></div>');

			jQuery('#'+ key).click(function(){
				 jQuery('#config-colour div').each(function(){
					 jQuery(this).removeClass('selected');
				 });
				jQuery(this).addClass('selected');

				ui.selected_options.colour = jQuery(this).attr('id');

			});
		}

		jQuery(shape).each(function(index){
			shapeWindow.append('<div id="'+shape[index]+'" class="option">'+shape[index].slice(0,2).toUpperCase()+'</div>');

			jQuery('#'+shape[index]).click(function(){
			 	jQuery('#config-shape div').each(function(){
				 	jQuery(this).removeClass('selected');
			 	});
				jQuery(this).addClass('selected');

				ui.selected_options.shape = jQuery(this).attr('id');

			});
		});
	};
}
