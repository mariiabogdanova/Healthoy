<?php
function sendnotification_all($title,$desc,$id){
	
	 define( 'API_ACCESS_KEY', 'AAAA6ua0ewk:APA91bFIdTKv5x_IjAM0O_jj2BGg8zJl9m9vs3kWXv-s2mpFJIA0yJuh8GlelT17MIdRv1uy3t-03DPkgy-a5y3wbHquPYhc9Rm51UjQ_0Aw7rCnfAWD_iWb3edwibn_x5O1o-7i8aky' );

    $registrationIds = $id;
#prep the bundle
     $msg = array
          (
		'body' 	=> $desc,
		'title'	=> $title,
             	'icon'	=> 'myicon',/*Default Icon*/
              	'sound' => 'mySound'/*Default sound*/
          );
	$fields = array
			(
				'to'=>$registrationIds,
				'notification'	=> $msg
			);
	
	
	$headers = array
			(
				'Authorization: key=' . API_ACCESS_KEY,
				'Content-Type: application/json'
			);
#Send Reponse To FireBase Server	
		$ch = curl_init();
		curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
		curl_setopt( $ch,CURLOPT_POST, true );
		curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
		curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
		curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
		$result = curl_exec($ch );
		curl_close( $ch );
echo $result;
}

function sendnotification($title,$desc){
         $alldata       = array();
    $tempsql = "SELECT device_id from devices";			
		$result  = mysql_query($tempsql);
        if (!$result) {
           
     
        } else {   

			while ($row = mysql_fetch_assoc($result)) {
			 sendnotification_all($title,$desc,$row['device_id']);
				
				//array_push($alldata, $row['device_id']);           
            }
        }
    return $alldata;
}
?>



