<?php

	define( 'parentFile' , 1 ); 
	require_once( 'db_include.php' );	
	include( 'sender.php' );	
$video_title=mysql_real_escape_string($_POST["video_title"]);
$video_url=mysql_real_escape_string($_POST["video_url"]);
$video_desc=mysql_real_escape_string($_POST["video_desc"]);
$video_cat=mysql_real_escape_string($_POST["video_cat"]);
$video_tag=mysql_real_escape_string($_POST["video_tag"]);



	$query = "INSERT INTO workoutVideos (video_title,
video_url,
video_desc,
video_category,
video_tag) VALUES('$video_title', '$video_url', '$video_desc','$video_cat','$video_tag')";

$result = mysql_query($query);	
	if(!$result){
		$output['RESULT'] = 'FAILED';     
	}else{	
		
		$output['RESULT'] = 'SUCCESS';  
		$body='Check out new video: '.$video_title;
		$title='A new workout for you in category'. $video_cat;
		sendnotification($title,$body);
	 
	}
       



   print_r(json_encode($output));
?>



