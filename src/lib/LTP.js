var newObject = [];

function loadFTP() {
	loadUI();
}

function addColumn(){
	if(!newObject.length){
		return false;
	}
	jQuery('#main-table').append("<tr id='"+newObject[1]+'-'+newObject[0]+"'></tr>");
	jQuery('#' + newObject[1]+'-'+newObject[0]).append("<td>"+newObject[1]+'-'+newObject[0]+"</td>");

	for (var i=0; i < 4; i++) {
		jQuery('#' + newObject[1]+'-'+newObject[0]).append("<td id='"+newObject[1]+'-'+newObject[0]+(i+1)+"'></td>");
	};
	clicker(newObject[1]+'-'+newObject[0]);
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

window.onload = loadFTP;
