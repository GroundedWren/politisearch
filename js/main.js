
function output_color(input_number){
	var arr=Object.keys(arrayfromphp).map(function (key){return arrayfromphp[key];});
	var min_neg=Math.min.apply(null,arr);
	var max_pos=Math.max.apply(null,arr);
	//console.log(min_neg,max_pos);
	if (input_number>0){
	var normalized_value=Math.floor(150*(input_number)/(max_pos)+100);
	//console.log(normalized_value,0);
	return [normalized_value,0,0];
	
	}
	else if(input_number<0){
	var normalized_value=Math.floor(150*Math.abs(input_number)/Math.abs(min_neg)+100);
	//console.log(normalized_value,-1);
	return [0,0,normalized_value];
	}
	else if(input_number==0){
		return [0,0,0];
	}
	
	
	
}


function functionTypeaheadPolitican(str)
{
	if (str.length == 0)
	{ 
        document.getElementById("namesFound").innerHTML = "";
        return;
    }
	else
	{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("namesFound").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "getnames.php?q=" + str, true);
        xmlhttp.send();
    }
}

function setupPolitician(name, state, district, party, auth_lib, con_lib)
{
	document.getElementById("pagefor").innerHTML = "<center>Page for " + name + "</center>";
	if(district == -1)
	{
		district = "At Large"
	}
	document.getElementById("description").innerHTML = "<center>Representative for District " + district + " of " + state + "</center>";
	document.getElementById("party").innerHTML = "<center>" + party + "</center>";
	setupMap(state);
	plotCompass("politiCompass", auth_lib, con_lib);
}


//https://newsignature.github.io/us-map/
function setupMainMap()
{	
	//console.log(output_color(arrayfromphp.AK));
	var out_state_AK=output_color(arrayfromphp.AK);
	var out_state_AL=output_color(arrayfromphp.AL);
	var out_state_AR=output_color(arrayfromphp.AR);
	var out_state_AZ=output_color(arrayfromphp.AZ);
	var out_state_CA=output_color(arrayfromphp.CA);
	var out_state_CO=output_color(arrayfromphp.CO);
	var out_state_CT=output_color(arrayfromphp.CT);
	var out_state_DC=output_color(arrayfromphp.DC);
	var out_state_DE=output_color(arrayfromphp.DE);
	var out_state_FL=output_color(arrayfromphp.FL);
	var out_state_GA=output_color(arrayfromphp.GA);
	var out_state_HI=output_color(arrayfromphp.HI);
	var out_state_IA=output_color(arrayfromphp.IA);
	var out_state_ID=output_color(arrayfromphp.ID);
	var out_state_IL=output_color(arrayfromphp.IL);
	var out_state_IN=output_color(arrayfromphp.IN);
	var out_state_KS=output_color(arrayfromphp.KS);
	var out_state_KY=output_color(arrayfromphp.KY);
	var out_state_LA=output_color(arrayfromphp.LA);
	var out_state_MA=output_color(arrayfromphp.MA);
	var out_state_ME=output_color(arrayfromphp.ME);
	var out_state_MD=output_color(arrayfromphp.MD);
	var out_state_MI=output_color(arrayfromphp.MI);
	var out_state_MN=output_color(arrayfromphp.MN);
	var out_state_MO=output_color(arrayfromphp.MO);
	var out_state_MS=output_color(arrayfromphp.MS);
	var out_state_NC=output_color(arrayfromphp.NC);
	var out_state_ND=output_color(arrayfromphp.ND);
	var out_state_NE=output_color(arrayfromphp.NE);
	var out_state_NH=output_color(arrayfromphp.NH);
	var out_state_NJ=output_color(arrayfromphp.NJ);
	var out_state_NM=output_color(arrayfromphp.NM);
	var out_state_NV=output_color(arrayfromphp.NV);
	var out_state_NY=output_color(arrayfromphp.NY);
	var out_state_OH=output_color(arrayfromphp.OH);
	var out_state_OK=output_color(arrayfromphp.OK);
	var out_state_OR=output_color(arrayfromphp.OR);
	var out_state_PA=output_color(arrayfromphp.PA);
	var out_state_RI=output_color(arrayfromphp.RI);
	var out_state_SC=output_color(arrayfromphp.SC);
	var out_state_SD=output_color(arrayfromphp.SD);
	var out_state_TN=output_color(arrayfromphp.TN);
	var out_state_TX=output_color(arrayfromphp.TX);
	var out_state_UT=output_color(arrayfromphp.UT);
	var out_state_VA=output_color(arrayfromphp.VA);
	var out_state_VT=output_color(arrayfromphp.VT);
	var out_state_WA=output_color(arrayfromphp.WA);
	var out_state_WI=output_color(arrayfromphp.MI);
	var out_state_WV=output_color(arrayfromphp.WV);
	var out_state_WY=output_color(arrayfromphp.WY);
	//console.log(out_state_CT);
	//console.log(out_state);
	$(document).ready(function() {
		$('#map').usmap({
		  // The click action
		 
		  stateSpecificStyles:{
		  'AK':{fill:`rgb(${out_state_AK[0]},${out_state_AK[1]},${out_state_AK[2]})`},
		  'AL':{fill:`rgb(${out_state_AL[0]},${out_state_AL[1]},${out_state_AL[2]})`},
		  'AR':{fill:`rgb(${out_state_AR[0]},${out_state_AR[1]},${out_state_AR[2]})`},
		  'AZ':{fill:`rgb(${out_state_AZ[0]},${out_state_AZ[1]},${out_state_AZ[2]})`},
		  'CA':{fill:`rgb(${out_state_CA[0]},${out_state_CA[1]},${out_state_CA[2]})`},
		  'CO':{fill:`rgb(${out_state_CO[0]},${out_state_CO[1]},${out_state_CO[2]})`},
		  'CT':{fill:`rgb(${out_state_CT[0]},${out_state_CT[1]},${out_state_CT[2]})`},
		  'DC':{fill:`rgb(${out_state_DC[0]},${out_state_DC[1]},${out_state_DC[2]})`},
		  'DE':{fill:`rgb(${out_state_DE[0]},${out_state_DE[1]},${out_state_DE[2]})`},
		  'FL':{fill:`rgb(${out_state_FL[0]},${out_state_FL[1]},${out_state_FL[2]})`},
		  'GA':{fill:`rgb(${out_state_GA[0]},${out_state_GA[1]},${out_state_GA[2]})`},
		  'HI':{fill:`rgb(${out_state_HI[0]},${out_state_HI[1]},${out_state_HI[2]})`},
		  'IA':{fill:`rgb(${out_state_IA[0]},${out_state_IA[1]},${out_state_IA[2]})`},
		  'ID':{fill:`rgb(${out_state_ID[0]},${out_state_ID[1]},${out_state_ID[2]})`},
		  'IL':{fill:`rgb(${out_state_IL[0]},${out_state_IL[1]},${out_state_IL[2]})`},
		  'IN':{fill:`rgb(${out_state_IN[0]},${out_state_IN[1]},${out_state_IN[2]})`},
		  'KS':{fill:`rgb(${out_state_KS[0]},${out_state_KS[1]},${out_state_KS[2]})`},
		  'KY':{fill:`rgb(${out_state_KY[0]},${out_state_KY[1]},${out_state_KY[2]})`},
		  'LA':{fill:`rgb(${out_state_LA[0]},${out_state_LA[1]},${out_state_LA[2]})`},
		  'MA':{fill:`rgb(${out_state_MA[0]},${out_state_MA[1]},${out_state_MA[2]})`},
		  'MD':{fill:`rgb(${out_state_MD[0]},${out_state_MD[1]},${out_state_MD[2]})`},
		  'ME':{fill:`rgb(${out_state_ME[0]},${out_state_ME[1]},${out_state_ME[2]})`},
		  'MI':{fill:`rgb(${out_state_MI[0]},${out_state_MI[1]},${out_state_MI[2]})`},
		  'MN':{fill:`rgb(${out_state_MN[0]},${out_state_MN[1]},${out_state_MN[2]})`},
		  'MO':{fill:`rgb(${out_state_MO[0]},${out_state_MO[1]},${out_state_MO[2]})`},
		  'MS':{fill:`rgb(${out_state_MS[0]},${out_state_MS[1]},${out_state_MS[2]})`},
		  'NC':{fill:`rgb(${out_state_NC[0]},${out_state_NC[1]},${out_state_NC[2]})`},
		  'ND':{fill:`rgb(${out_state_ND[0]},${out_state_ND[1]},${out_state_ND[2]})`},
		  'NE':{fill:`rgb(${out_state_NE[0]},${out_state_NE[1]},${out_state_NE[2]})`},
		  'NH':{fill:`rgb(${out_state_NH[0]},${out_state_NH[1]},${out_state_NH[2]})`},
		  'NJ':{fill:`rgb(${out_state_NJ[0]},${out_state_NJ[1]},${out_state_NJ[2]})`},
		  'NM':{fill:`rgb(${out_state_NM[0]},${out_state_NM[1]},${out_state_NM[2]})`},
		  'NV':{fill:`rgb(${out_state_NV[0]},${out_state_NV[1]},${out_state_NV[2]})`},
		  'NY':{fill:`rgb(${out_state_NY[0]},${out_state_NY[1]},${out_state_NY[2]})`},
		  'OH':{fill:`rgb(${out_state_OH[0]},${out_state_OH[1]},${out_state_OH[2]})`},
		  'OK':{fill:`rgb(${out_state_OK[0]},${out_state_OK[1]},${out_state_OK[2]})`},
		  'OR':{fill:`rgb(${out_state_OR[0]},${out_state_OR[1]},${out_state_OR[2]})`},
		  'PA':{fill:`rgb(${out_state_PA[0]},${out_state_PA[1]},${out_state_PA[2]})`},
		  'RI':{fill:`rgb(${out_state_RI[0]},${out_state_RI[1]},${out_state_RI[2]})`},
		  'SC':{fill:`rgb(${out_state_SC[0]},${out_state_SC[1]},${out_state_SC[2]})`},
		  'SD':{fill:`rgb(${out_state_SD[0]},${out_state_SD[1]},${out_state_SD[2]})`},
		  'TN':{fill:`rgb(${out_state_TN[0]},${out_state_TN[1]},${out_state_TN[2]})`},
		  'TX':{fill:`rgb(${out_state_TX[0]},${out_state_TX[1]},${out_state_TX[2]})`},
		  'UT':{fill:`rgb(${out_state_UT[0]},${out_state_UT[1]},${out_state_UT[2]})`},
		  'VA':{fill:`rgb(${out_state_VA[0]},${out_state_VA[1]},${out_state_VA[2]})`},
		  'VT':{fill:`rgb(${out_state_VT[0]},${out_state_VT[1]},${out_state_VT[2]})`},
		  'WA':{fill:`rgb(${out_state_WA[0]},${out_state_WA[1]},${out_state_WA[2]})`},
		  'WI':{fill:`rgb(${out_state_WI[0]},${out_state_WI[1]},${out_state_WI[2]})`},
		  'WY':{fill:`rgb(${out_state_WY[0]},${out_state_WY[1]},${out_state_WY[2]})`},
		  'WV':{fill:`rgb(${out_state_WV[0]},${out_state_WV[1]},${out_state_WV[2]})`}
		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
	});
}

//https://newsignature.github.io/us-map/
function setupMap(state)
{
	var stateDict = {};
	stateDict[state] = {fill: 'orange'};
	$(document).ready(function() {
	    $('#map').usmap({
    	'stateSpecificStyles': stateDict,
    	click: function(event, data) {
    		window.location = "PoliticiansByState.php?State=" + data.name;
		  }
	    });
	});
}

function plotCompass(id, auth_lib, con_lib)
{
	var compass = document.getElementById(id);
	//Citation:https://www.w3schools.com/tags/canvas_beginpath.asp
	var ctx = compass.getContext("2d");
	console.log(auth_lib);
	console.log(con_lib);
	ctx.beginPath();
	ctx.moveTo(250, 0);
	ctx.lineTo(250, 500);
	ctx.stroke();
	ctx.moveTo(0, 250);
	ctx.lineTo(500, 250);
	ctx.stroke();
	//point
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(250, 250);
	ctx.lineTo(250 + (con_lib*250), 250 - (auth_lib*250));
	ctx.strokeStyle = '#ff0000';
	ctx.stroke();
	ctx.textAlign = "center"
	ctx.fillText("AUTHORITARIAN", 250, 10);
	ctx.fillText("LIBERTARIAN", 250, 490);
	ctx.fillText("LIBERAL", 30, 240);
	ctx.fillText("CONSERVATIVE", 460, 240);
}

function setupPoliList(poliList)
{
	
}


