$(document).ready(function(){

$.post( "get_video.php", function( data ) {
  // alert( "Data Loaded: " + data );
  console.log("Data loaded" + data);
});

});

