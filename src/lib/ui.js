function ltp_ui(){

	this.selected_options = {colour: '' , shape:''};

	this.init = function(){

		// Bind Menu drop down button
		jQuery('#add-btn').click(function(){
			ui.toggle_panel();
		});

		// Bind config window add button
		jQuery('#config-submit').click(function(){
			if(ui.selected_options.colour !== '' && ui.selected_options.shape !== ''){
				table.add_column(ui.selected_options);
				ui.toggle_panel();
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

	this.toggle_panel = function(){
		var configBox = jQuery('#config');

		if(configBox.css('height') === '240px'){
			configBox.css('height', '');
		} else {
			configBox.css('height','15em');
		}
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

	this.add_menu_node = function(id){
		this.name = id.slice(0, id.length-1).split('-').join(' ');
		jQuery('nav').append("<li id="+id+'-node'+" class='delete'>"+this.name+"</li>");

		jQuery('#'+id+'-node').click(function(){
			ui.remove_menu_node(jQuery(this).attr('id'));
		});
	};

	this.remove_menu_node = function(id){
		jQuery('#'+id).remove();
		table.remove_column(id.split('-node')[0]);
	};
}
