<?php
	$appservice = $_POST["oamkSERVICE"];
	try {
		switch( $appservice ) {			
			case "USERLOGIN" : require 'services/UserLogin.php';
			break;
			case "GETOLDVIDEOS" : require 'services/GetVidoes.php';
			break;
				case "SAVEVIDEO" : require 'services/SaveVideo.php';
			break;
			

				
		}
	} catch (Exception $exception) {
	    echo '<error>An exception occured while calling the service.</error>';
	    exit(1);
	}
?>