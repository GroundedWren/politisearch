<?php

$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");

if(!$link)
{
	echo "Error! Unable to connect to database." . mysqli_connect_error();
}

// get the q parameter from URL
$q = $_REQUEST["q"];

$namesFound = "";

// lookup all names from array if $q is different from ""
if ($q !== "") {
	$q = strtolower($q);
	$len=strlen($q);
	$sql = "SELECT `Full_Name` FROM `PoliticianBasicInfo` WHERE LOWER(`Full_Name`) LIKE '" . $q . "%'";
	
	$result = mysqli_query($link, $sql);
	if(!$result)
	{
		echo "Error fetching result: " . mysqli_error($link);
	}
	else
	{
		while ($row = $result->fetch_row())
		{
			$namesFound = $namesFound . ", " . $row[0];
		}
	}
}

// Output "not found" if no name was found or output correct values
echo $namesFound === "" ? "not found" : substr($namesFound, 2);

?>