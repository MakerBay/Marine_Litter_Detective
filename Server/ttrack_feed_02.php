<?php

//$username = "root";
//$password = "";
//$hostname = "localhost";
//$database_name = "project_trashtrack";
//$table_name = "geo_location";

$username = "makerbench";
$password = "trashdetective";
$hostname = "db.makerbench.org";
$database_name = "makerbench";
$table_name = "trashtrack_01";

$fieldID = $_GET['M_id'];
$fieldLat = $_GET['M_Lat'];
$fieldLong = $_GET['M_Long'];
$fieldGLat = $_GET['G_Lat'];
$fieldGLong = $_GET['G_Long'];
//$fieldDate = $_GET['M_Date'];
$fieldBattery = $_GET['M_Batt'];
$fieldGPScount = $_GET['GPS_cnt'];

if ($fieldID == 1001)
	echo "GreenGreenGreen"; 
else if ($fieldID == 1002)
	echo "OrangeOrangeOrange"; 
echo $fieldBattery;

					//connection to the database
					$dbhandle = mysql_connect($hostname, $username, $password) 
					  or die("Unable to connect to MySQL");
					echo "Connected to MySQL<br />";
					//select a database to work with
					$selected = mysql_select_db($database_name, $dbhandle) 
					  or die("Could not select database");
					echo "Connected to database<br />";
					//execute the SQL query and return records
					mysql_query ("set character_set_results='utf8'"); 		// 20151224 add this line to correct the display of "degree" character that is unicode UTF-8

					echo "<S=060>";

					date_default_timezone_set("Asia/Hong_Kong");
					$dts = new DateTime(); //this returns the current date time
					$result = $dts->format('<Y-m-d H:i:s>');

							$import = "INSERT into " . $table_name . "(Device_ID,Lat,Longi,gLat,gLong,Battery,locTime,GPS_cnt) ";
							$import .= "values('$fieldID','$fieldLat','$fieldLong','$fieldGLat','$fieldGLong','$fieldBattery','$result','$fieldGPScount')";
							mysql_query($import) or die(mysql_error());

					
?>

