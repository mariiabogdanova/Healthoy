$(document).ready(function(){

$.post( "http://www.students.oamk.fi/~t6ishe01/Healthdev/get_video.php", function( data ) {
  // alert( "Data Loaded: " + data );
  console.log("Data loaded" + data);
});

});

