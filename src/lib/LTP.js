function FTP_init() {
	jQuery('nav li').each(function(){
		jQuery(this).click(function(){
			var type = jQuery(this).data('type')["type"];

			column_toggle(type);
		});
	});
}

function column_toggle(type){
	if(jQuery('#' + type).length){
		jQuery('#' + type).remove();
	} else {
		jQuery('#main-table').append("<tr id='"+type+"'></tr>");
		jQuery('#' + type).append("<td>"+type+"</td>");
		for (var i=0; i < 4; i++) {
			jQuery('#' + type).append("<td>X</td>");
		};		
	}
}

window.onload = FTP_init; 