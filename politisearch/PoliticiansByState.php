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
		<h1 id="stateTitle"><center>Unknown</center></h1>
        <div id="map" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;"></div>
		<?php
		
			$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");
		
		
			$state = $_GET["State"];
			echo "<script type='text/javascript'>",
			"setupMap('$state');",
			"</script>";
			
			$sql = "SELECT `Full_Name` FROM `PoliticianBasicInfo` WHERE `State` = '$state'";
						
			$result = mysqli_query($link, $sql);
			if(!$result)
			{
				echo "<h2><center>Error: </center></h2>" . mysqli_error($link);
			}
			else
			{
				$links = "";
				//http://stackoverflow.com/questions/22354092/how-to-loop-through-mysqli-query-results
				while($row = mysqli_fetch_array($result))
				{
					$name = $row[0];
					//echo $name;
					$linkName = str_replace(" ", "+", $name);
					$links .= "<center><a href=Politician.php?Full_Name=$linkName>$name</a><br>";
				}
				echo $links . "</center>";
				
				echo "<script type='text/javascript'>",
				"document.getElementById('stateTitle').innerHTML = '<center>$state</center>';",
				"</script>";
			}

		?>
		

    </body>
</html>
