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
        <a href="PoliticianSearch.html">Search for a Representative by Name</a><br>
		<strong>The map on the left uses Conservative/Liberal axis, red indicates Conservative.</strong><br>
		<strong>The map on the right uses Authoritarian/Libertarian axis, red indicates Authoritarian.</strong><br>
		<strong>There is no active House of Representative for Montana (shown in grey).</strong><br>
		<strong>Missing information are shown in black.</strong><br>
		<p>Overall Ideology</p>
        <div style="width:680px;">
			<div id="map" style="margin: auto; width: 330px; height: 230px; border: solid 3px red; float:left;"></div>
			<div id="map1" style="margin: auto; width: 330px; height: 230px; border: solid 3px red; float:right;"></div>
		</div>
		
		<div style="width:680px;">
		<p>War & Peace</p>
		<div id="map2" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="map3" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>
		
		<div style="width:680px;">
		<p>Foreign Policy</p>
		<div id="map4" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="map5" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>technology</p>
		<div id="map6" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="map7" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Civil Rights</p>
		<div id="civil_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="civil_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Abortion</p>
		<div id="abortion_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="abortion_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Jobs</p>
		<div id="jobs_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="jobs_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>
		
		<div style="width:680px;">
		<p>Energy & Oil</p>
		<div id="eng_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="eng_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>
		
		<div style="width:680px;">
		<p>Welfare & Poverty</p>
		<div id="wel_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="wel_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Health Care</p>
		<div id="hea_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="hea_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Government Reform</p>
		<div id="gov_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="gov_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Environment</p>
		<div id="env_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="env_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Free Trade</p>
		<div id="fre_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="fre_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Families & Children</p>
		<div id="fam_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="fam_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Crime</p>
		<div id="cri_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="cri_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Homeland Security</p>
		<div id="hom_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="hom_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Principles & Values</p>
		<div id="pri_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="pri_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Gun Control</p>
		<div id="gun_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="gun_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Social Security</p>
		<div id="soc_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="soc_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Immigration</p>
		<div id="imm_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="imm_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Corporations</p>
		<div id="cor_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="cor_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Budget & Economy</p>
		<div id="bud_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="bud_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Drugs</p>
		<div id="dru_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="dru_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Tax Reform</p>
		<div id="tax_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="tax_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

		<div style="width:680px;">
		<p>Education</p>
		<div id="edu_con" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:left;"></div>
		<div id="edu_auth" style="margin: auto; width: 330px; height: 230px; border: solid 3px red;float:right;"></div>
		</div>

        </center>
		<?php
			$link = mysqli_connect("127.0.0.1","root","myFrenc2hRost","aulabau2_Politics");
			$sql="SELECT state, avg(Con_Lib) FROM holisticbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=holisticbeliefaxis.ID GROUP BY state";
			$result=mysqli_query($link,$sql);
			$userful_array=array();
			while ($row = $result->fetch_row()){
				$userful_array[$row[0]]=$row[1];
			}
			
			$overall_auth=array();
			$sql="SELECT state, avg(Auth_Lib) FROM holisticbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=holisticbeliefaxis.ID GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$overall_auth[$row[0]]=$row[1];
			}
			
			//war & peace
			$war_con=array();
			$war_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='War & Peace' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$war_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='War & Peace' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$war_auth[$row[0]]=$row[1];
			}

			//foreign policy
			$foreign_con=array();
			$foreign_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Foreign Policy' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$foreign_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Foreign Policy' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$foreign_auth[$row[0]]=$row[1];
			}

			//technology
			$technology_con=array();
			$technology_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Technology' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$technology_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Technology' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$technology_auth[$row[0]]=$row[1];
			}

			//civil rights
			$civil_con=array();
			$civil_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Civil Rights' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$civil_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Civil Rights' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$civil_auth[$row[0]]=$row[1];
			}

			//abortion
			$abortion_con=array();
			$abortion_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Abortion' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$abortion_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Abortion' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$abortion_auth[$row[0]]=$row[1];
			}

			//jobs
			$jobs_con=array();
			$jobs_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Jobs' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$jobs_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Jobs' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$jobs_auth[$row[0]]=$row[1];
			}

			//eng
			$eng_con=array();
			$eng_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Energy & Oil' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$eng_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Energy & Oil' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$eng_auth[$row[0]]=$row[1];
			}

			//wel
			$wel_con=array();
			$wel_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Welfare & Poverty' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$wel_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Welfare & Poverty' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$wel_auth[$row[0]]=$row[1];
			}

			//hea
			$hea_con=array();
			$hea_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Health Care' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$hea_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Health Care' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$hea_auth[$row[0]]=$row[1];
			}

			//gov
			$gov_con=array();
			$gov_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Government Reform' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$gov_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Government Reform' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$gov_auth[$row[0]]=$row[1];
			}

			//env
			$env_con=array();
			$env_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Environment' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$env_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Environment' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$env_auth[$row[0]]=$row[1];
			}

			//free trade
			$fre_con=array();
			$fre_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Free Trade' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$fre_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Free Trade' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$fre_auth[$row[0]]=$row[1];
			}

			//family
			$fam_con=array();
			$fam_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Families & Children' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$fam_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Families & Children' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$fam_auth[$row[0]]=$row[1];
			}

			//crime
			$cri_con=array();
			$cri_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Crime' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$cri_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Crime' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$cri_auth[$row[0]]=$row[1];
			}

			//homeland
			$hom_con=array();
			$hom_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Homeland Security' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$hom_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Homeland Security' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$hom_auth[$row[0]]=$row[1];
			}

			//principle
			$pri_con=array();
			$pri_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Principles & Values' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$pri_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Principles & Values' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$pri_auth[$row[0]]=$row[1];
			}

			//gun control
			$gun_con=array();
			$gun_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Gun Control' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$gun_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Gun Control' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$gun_auth[$row[0]]=$row[1];
			}

			//social securtiy
			$soc_con=array();
			$soc_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Social Security' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$soc_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Social Security' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$soc_auth[$row[0]]=$row[1];
			}
			
			//immigration
			$imm_con=array();
			$imm_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Immigration' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$imm_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Immigration' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$imm_auth[$row[0]]=$row[1];
			}

			//immigration
			$cor_con=array();
			$cor_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Corporations' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$cor_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Corporations' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$cor_auth[$row[0]]=$row[1];
			}


			//budget
			$bud_con=array();
			$bud_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Budget & Economy' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$bud_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Budget & Economy' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$bud_auth[$row[0]]=$row[1];
			}


			//drugs
			$dru_con=array();
			$dru_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Drugs' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$dru_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Drugs' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$dru_auth[$row[0]]=$row[1];
			}

			//tax
			$tax_con=array();
			$tax_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Tax Reform' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$tax_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Tax Reform' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$tax_auth[$row[0]]=$row[1];
			}

			//edu
			$edu_con=array();
			$edu_auth=array();
			$sql="SELECT state, avg(Con_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Education' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$edu_con[$row[0]]=$row[1];
			}

			$sql="SELECT state, avg(Auth_Lib) FROM categoricalbeliefaxis,politicianbasicinfo WHERE politicianbasicinfo.ID=categoricalbeliefaxis.ID AND Topic='Education' GROUP BY state";
			$result=mysqli_query($link,$sql);
			while ($row = $result->fetch_row()){
				$edu_auth[$row[0]]=$row[1];
			}
			echo '<script>var arrayfromphp='.json_encode($userful_array).';</script>';
			echo '<script>var overall_auth='.json_encode($overall_auth).';</script>';
			echo '<script>var war_con='.json_encode($war_con).';</script>';
			echo '<script>var war_auth='.json_encode($war_auth).';</script>';
			echo '<script>var foreign_con='.json_encode($foreign_con).';</script>';
			echo '<script>var foreign_auth='.json_encode($foreign_auth).';</script>';
			echo '<script>var technology_con='.json_encode($technology_con).';</script>';
			echo '<script>var technology_auth='.json_encode($technology_auth).';</script>';
			echo '<script>var civil_con='.json_encode($civil_con).';</script>';
			echo '<script>var civil_auth='.json_encode($civil_auth).';</script>';
			echo '<script>var abortion_con='.json_encode($abortion_con).';</script>';
			echo '<script>var abortion_auth='.json_encode($abortion_auth).';</script>';
			echo '<script>var jobs_con='.json_encode($jobs_con).';</script>';
			echo '<script>var jobs_auth='.json_encode($jobs_auth).';</script>';
			echo '<script>var eng_con='.json_encode($eng_con).';</script>';
			echo '<script>var eng_auth='.json_encode($eng_auth).';</script>';
			echo '<script>var wel_con='.json_encode($wel_con).';</script>';
			echo '<script>var wel_auth='.json_encode($wel_auth).';</script>';
			echo '<script>var hea_con='.json_encode($hea_con).';</script>';
			echo '<script>var hea_auth='.json_encode($hea_auth).';</script>';
			echo '<script>var gov_con='.json_encode($gov_con).';</script>';
			echo '<script>var gov_auth='.json_encode($gov_auth).';</script>';
			echo '<script>var env_con='.json_encode($env_con).';</script>';
			echo '<script>var env_auth='.json_encode($env_auth).';</script>';
			echo '<script>var fre_con='.json_encode($fre_con).';</script>';
			echo '<script>var fre_auth='.json_encode($fre_auth).';</script>';
			echo '<script>var fam_con='.json_encode($fam_con).';</script>';
			echo '<script>var fam_auth='.json_encode($fam_auth).';</script>';
			echo '<script>var cri_con='.json_encode($cri_con).';</script>';
			echo '<script>var cri_auth='.json_encode($cri_auth).';</script>';
			echo '<script>var hom_con='.json_encode($hom_con).';</script>';
			echo '<script>var hom_auth='.json_encode($hom_auth).';</script>';
			echo '<script>var pri_con='.json_encode($pri_con).';</script>';
			echo '<script>var pri_auth='.json_encode($pri_auth).';</script>';
			echo '<script>var gun_con='.json_encode($gun_con).';</script>';
			echo '<script>var gun_auth='.json_encode($gun_auth).';</script>';
			echo '<script>var soc_con='.json_encode($soc_con).';</script>';
			echo '<script>var soc_auth='.json_encode($soc_auth).';</script>';
			echo '<script>var imm_con='.json_encode($imm_con).';</script>';
			echo '<script>var imm_auth='.json_encode($imm_auth).';</script>';
			echo '<script>var cor_con='.json_encode($cor_con).';</script>';
			echo '<script>var cor_auth='.json_encode($cor_auth).';</script>';
			echo '<script>var bud_con='.json_encode($bud_con).';</script>';
			echo '<script>var bud_auth='.json_encode($bud_auth).';</script>';
			echo '<script>var dru_con='.json_encode($dru_con).';</script>';
			echo '<script>var dru_auth='.json_encode($dru_auth).';</script>';
			echo '<script>var tax_con='.json_encode($tax_con).';</script>';
			echo '<script>var tax_auth='.json_encode($tax_auth).';</script>';
			echo '<script>var edu_con='.json_encode($edu_con).';</script>';
			echo '<script>var edu_auth='.json_encode($edu_auth).';</script>';

			echo "<script type='text/javascript'>",
			"setupMainMap();",
			"</script>";
		?>
		
		

    </body>
</html>
