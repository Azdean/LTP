function FTP_init() {
	navListener();
	optionsLoader();
}

// function column_toggle(type){
// 	if(jQuery('#' + type).length){
// 		jQuery('#' + type).remove();
// 	} else {
// 		jQuery('#main-table').append("<tr id='"+type+"'></tr>");
// 		jQuery('#' + type).append("<td>"+type+"</td>");
// 		for (var i=0; i < 4; i++) {
// 			jQuery('#' + type).append("<td id='"+type+(i+1)+"'></td>");
// 		};
// 		clicker(type);
// 	}
// }
//
// function clicker(type) {
// 	for(var i = 0; i < 5; i++){
// 		jQuery('#' + type + i).click(function(){
// 			if(jQuery(this).text() === "XXX"){
// 				jQuery(this).empty();
// 			}else{
// 				jQuery(this).append("X");
// 			}
// 		});
// 	}
// }

window.onload = FTP_init;
