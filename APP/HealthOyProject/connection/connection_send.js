$(document).ready(function(){
$.post( "get_video.php", function( data ) {
  console.log( "Data Loaded: " + data );
});
});


