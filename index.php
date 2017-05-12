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
        <center>
        <h1>Politi-Search</h1>
        <a href="PersonalSearch.php">Find Politicians Like you</a><br>
        <a href="PoliticianSearch.html">Search for a Representative by Name</a>
        <div id="map" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;"></div>
        </center>
		<?php
			$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");
			$sql="SELECT state, avg(Con_Lib) FROM holisticbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=holisticbeliefaxis.ID GROUP BY state";
			$result=mysqli_query($link,$sql);
			$userful_array=array();
			while ($row = $result->fetch_row()){
				$userful_array[$row[0]]=$row[1];
			}
			//foreach ($userful_array as $key=>$value){
			//	echo "$key,$value<br>";
			//}
			//print_r($userful_array);
			echo '<script>var arrayfromphp='.json_encode($userful_array).';</script>';
			echo "<script type='text/javascript'>",
			"setupMainMap();",
			"</script>";
		?>
		
		

    </body>
</html>
