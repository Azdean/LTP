function FTP_init() {
	jQuery('nav li').each(function(){
		jQuery(this).click(function(){
			var type = jQuery(this).data('type')["type"];

			if(jQuery(this).hasClass('selected')) {
				jQuery(this).removeClass('selected');
			}else{
				jQuery(this).addClass('selected');
			}

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
			jQuery('#' + type).append("<td id='"+type+(i+1)+"'></td>");
		};		
		clicker(type);
	}
}

function clicker(type) {
	for(var i = 0; i < 5; i++){
		jQuery('#' + type + i).click(function(){
			if(jQuery(this).text() === "XXX"){
				jQuery(this).empty();
			}else{
				jQuery(this).append("X");
			}
		});
	}
}

window.onload = FTP_init; 