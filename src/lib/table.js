var table = new table_builder();

function table_builder(){

  this.iterate = function(){
    this.iterator++;
    return this.interator;
  };

  this.add_column = function(options){
    if(!options || typeof options.colour === 'undefined' || typeof options.shape === 'undefined' ){
      return {e: 'Please select a colour and shape'};
    }

    this.iterate();
    this.id = options.colour + '-' + options.shape + this.iterator;
    this.name = options.colour + '-' + options.shape;

    this.table.append("<tr id='"+ this.id +"'></tr>");
		jQuery('#'+ this.id).append("<td>"+this.name+"</td>");

    for (var i=0; i < 4; i++) {
  		jQuery('#'+this.id).append("<td id='"+this.id+(i+1)+"'></td>");

      jQuery('#'+this.id+(i+1)).click(function(){
        var cell = jQuery(this);

        if(cell.text() === "XXX"){
          cell.empty();
        }else{
          cell.append("X");
        }
      });

    };
  };

  this.table = jQuery('#main-table');
  this.iterator = 0;
}
