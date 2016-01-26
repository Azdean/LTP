var newObject = [];

function loadFTP() {
	loadUI();
}

function addItem(){
	// Check to ensure that the user has selected a colour and shape
	if(!newObject.length || newObject.length === 1 || typeof newObject[0] === 'undefined'){
		alert('Please select a colour and a shape');
		return false;
	}

	// if the column doesn't already exist append column to table and add menu element
	if(!jQuery('#' + newObject[1]+'-'+newObject[0]).length){
		jQuery('#main-table').append("<tr id='"+newObject[1]+'-'+newObject[0]+"'></tr>");
		jQuery('#' + newObject[1]+'-'+newObject[0]).append("<td>"+newObject[1]+'-'+newObject[0]+"</td>");

		addMenuNode(newObject);
	}else{
		return false;
	}

	for (var i=0; i < 4; i++) {
		jQuery('#' + newObject[1]+'-'+newObject[0]).append("<td id='"+newObject[1]+'-'+newObject[0]+(i+1)+"'></td>");
	};
	clicker(newObject[1]+'-'+newObject[0]);
}

function addMenuNode(selection){
	jQuery('nav').append("<li id="+selection[1] +'-'+ selection[0]+'-node'+">"+selection[1] +' '+ selection[0]+"</li>");
	bindMenuNode(selection);
}

function bindMenuNode(node){
	jQuery('#' + node[1] + '-' + node[0]+'-node').click(function(){
		console.log('boop');
	});
}

/*
	Binds eventlistener to columns to enable the user to check boxes
*/
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
