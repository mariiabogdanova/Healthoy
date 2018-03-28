<?php
$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'healthdev';

// $host = 'mysli.oamk.fi';
// $username = 't6ishe01';
// $password = 'WA7oRTrHLUB5qZUa';
// $db_name = 'opisk_t6ishe01';

$mysql = @mysqli_connect($host, $username, $password, $db_name );

$sql = "SELECT * FROM workoutVideos";

    if (!$mysql) {
        echo "Error connecting to MySQL: " . mysqli_connect_error($mysql);
        die;
    }
    else{
        $result = mysqli_query($mysql, $sql);
        print_r($result);
    }
?>