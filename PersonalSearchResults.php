<!doctype html>
<html class="no-js" lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="apple-touch-icon" href="apple-touch-icon.png">
<!-- Place favicon.ico in the root directory -->

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
<script src="js/vendor/modernizr-2.8.3.min.js"></script>
</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>
<script src="js/vendor/raphael.js"></script>
<script src="js/vendor/jquery.usmap.js"></script>
<!-- Add your site or application content here -->
<a href="index.php">Home</a>
<center><h1 id="compassTitle">COMPASS</h1></center>
<canvas id="politiCompass" width="500" height="500" style="position:absolute; left:50%; margin-left:-250px; border:1px solid #d3d3d3;">
Your browser does not support the canvas element.
</canvas>
<?php
	$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");
	
	if(!$link)
	{
		echo "Error! Unable to connect to database." . mysqli_connect_error();
	}
		
	$text = $_GET["General"];
	$topic = $_GET["topic"];
	
	$out = exec("python getPoint.py '$text'", $output);
	$axis = explode(",", $out);
	$auth_lib = floatval($axis[1]);
	$con_lib = floatval($axis[0]);
	echo "<script type='text/javascript'>",
	"plotCompass('politiCompass', $auth_lib, $con_lib)",
	"</script>";
	
	$politicians = array();
	
	if(strcmp($topic,"General") == 0)
	{
	
		$sql = "SELECT * FROM `HolisticBeliefAxis` WHERE 1";
		$result = mysqli_query($link, $sql);
		if(!$result)
		{
			echo "Error fetching result: " . mysqli_error($link);
		}
		else
		{
			while ($row = $result->fetch_row())
			{
				$manhattanDistance = abs($con_lib - floatval($row[1])) + abs($auth_lib - floatval($row[2]));
				$politicians[$row[0]] = $manhattanDistance;
			}
			arsort($politicians);
			$politicians = array_reverse($politicians, TRUE);
			$returned = 0;
			$links = "";
			foreach($politicians as $id=>$distance)
			{
				if($returned == 10)
				{
					break;
				}
				$sql = "SELECT `Full_Name` FROM `PoliticianBasicInfo` WHERE `ID` = $id";
				$result = mysqli_query($link, $sql);
				$row = $result->fetch_row();
				$name = $row[0];
				//echo $name;
				$linkName = str_replace(" ", "+", $name);
				$links .= "<a href=Politician.php?Full_Name=$linkName>$name</a><br>";
				$returned++;
			}
			echo $links;
		}
	}
	else
	{
		echo "<script type='text/javascript'>",
		"document.getElementById('compassTitle').innerHTML = '$topic COMPASS';",
		"</script>";
		$sql = "SELECT * FROM `CategoricalBeliefAxis` WHERE `Topic` = '$topic'";
		$result = mysqli_query($link, $sql);
		if(!$result)
		{
			echo "Error fetching result: " . mysqli_error($link);
		}
		else
		{
			while ($row = $result->fetch_row())
			{
				$manhattanDistance = abs($con_lib - floatval($row[2])) + abs($auth_lib - floatval($row[3]));
				$politicians[$row[0]] = $manhattanDistance;
			}
			arsort($politicians);
			$politicians = array_reverse($politicians, TRUE);
			$returned = 0;
			$links = "";
			foreach($politicians as $id=>$distance)
			{
				if($returned == 10)
				{
					break;
				}
				$sql = "SELECT `Full_Name` FROM `PoliticianBasicInfo` WHERE `ID` = $id";
				$result = mysqli_query($link, $sql);
				$row = $result->fetch_row();
				$name = $row[0];
				//echo $name;
				$linkName = str_replace(" ", "+", $name);
				$links .= "<a href=Politician.php?Full_Name=$linkName>$name</a><br>";
				$returned++;
			}
			echo $links;
		}
	}
?>
		
    </body>
</html>
