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
		<h1 id=pagefor><center>404</center></h1>
		<h2 id=description><center>Representative for District $district of $state</center></h2>
        <h3 id=party><center>No Party</center></h3>
        <div id="map" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;"></div>
        <center>
        <h1>OVERALL POLITICAL COMPASS</h1>
		<canvas id="politiCompass" width="500" height="500" style="border:1px solid #d3d3d3;">
		Your browser does not support the canvas element.
		</canvas>
		</center>
        <?php
			
			$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");

			if(!$link)
			{
				echo "Error! Unable to connect to database." . mysqli_connect_error();
			}
			
			$name = $_GET["Full_Name"];
			
			$politicianID = -1;
			
			$sql = "SELECT * FROM `PoliticianBasicInfo` WHERE LOWER(`Full_Name`) = LOWER('$name')";

			$result = mysqli_query($link, $sql);
			if(!$result)
			{
				echo "<h2><center>Error: </center></h2>" . mysqli_error($link);
			}
			else
			{
				$row = $result->fetch_row();
				if($row[0] != "")
				{
					$politicianID = $row[0];
					$sql = "SELECT * FROM `HolisticBeliefAxis` WHERE ID = $row[0]";
					$result = mysqli_query($link, $sql);
					if(!$result)
					{
						echo "<h2><center>Error: </center></h2>" . mysqli_error($link);
					}
					else
					{
						$row_positions = $result->fetch_row();
						$name = $row[1];
						$state = $row[2];
						$district = $row[3];
						$party = $row[4];
						$con_lib = $row_positions[1];
						$auth_lib = $row_positions[2];
						echo "<script type='text/javascript'>",
						"setupPolitician('$name', '$state', '$district', '$party', '$auth_lib', '$con_lib');",
						"</script>";
					}
				}
				else
				{
					echo "<h1><center>404</center></h1>";
				}
			}
			
			$sql = "SELECT * FROM `CategoricalBeliefAxis` WHERE `ID` = $politicianID;";
			
			$result = mysqli_query($link, $sql);
			if(!$result)
			{
				echo "<h2><center>Error: </center></h2>" . mysqli_error($link);
			}
			else
			{
				while($row = mysqli_fetch_array($result))
				{
					$compassName = $row[1] . "Compass";
					$con_lib = $row[2];
					$auth_lib = $row[3];
					echo "<center><h1>$row[1] POLITICAL COMPASS</h1>";
					echo "<canvas id='$row[1]Compass' width='500' height='500' style='border:1px solid #d3d3d3;'>";
					echo "Your browser does not support the canvas element.";
					echo "</canvas></center>";
					echo "<script type='text/javascript'>",
					"plotCompass('$compassName', $auth_lib, $con_lib);",
					"</script>";
				}
			}
			
			
		?>
		
    </body>
</html>
