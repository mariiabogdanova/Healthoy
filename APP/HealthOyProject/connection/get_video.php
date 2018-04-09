<?php
// $host = 'localhost';
// $username = 'root';
// $password = '';
// $db_name = 'healthdev';

$host = 'mysli.oamk.fi';
$username = 't6ishe01';
$password = 'WA7oRTrHLUB5qZUa';
$db_name = 'opisk_t6ishe01';

$mysql = @mysqli_connect($host, $username, $password, $db_name );
$cat=$_POST["cat"];
$sql = "SELECT * FROM workoutVideos where video_category='$cat'";

		$result = mysqli_query($mysql, $sql);
       if(!$result){
		$output['RESULT'] = 'FAILED';     
	}else{	
		
		$alldata=array();
		while ($row = mysqli_fetch_assoc($result)) {
                     array_push($alldata, mb_convert_encoding($row, 'UTF-8', 'UTF-8')
            );
                    
             
            }
		$output['RESULT'] = 'SUCCESS';     
		$output['DATA'] =$alldata;     
	}
     //  echo("2222");
  print_r(json_encode($output));
  //echo json_last_error_msg();
	
?>