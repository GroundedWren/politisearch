
function output_color(input_number,input_array){
	if (input_number==null){
		return [0,0,0];
	}
	var arr=Object.keys(input_array).map(function (key){return input_array[key];});
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
	var out_state_AK=output_color(arrayfromphp.AK,arrayfromphp);
	var out_state_AL=output_color(arrayfromphp.AL,arrayfromphp);
	var out_state_AR=output_color(arrayfromphp.AR,arrayfromphp);
	var out_state_AZ=output_color(arrayfromphp.AZ,arrayfromphp);
	var out_state_CA=output_color(arrayfromphp.CA,arrayfromphp);
	var out_state_CO=output_color(arrayfromphp.CO,arrayfromphp);
	var out_state_CT=output_color(arrayfromphp.CT,arrayfromphp);
	var out_state_DC=output_color(arrayfromphp.DC,arrayfromphp);
	var out_state_DE=output_color(arrayfromphp.DE,arrayfromphp);
	var out_state_FL=output_color(arrayfromphp.FL,arrayfromphp);
	var out_state_GA=output_color(arrayfromphp.GA,arrayfromphp);
	var out_state_HI=output_color(arrayfromphp.HI,arrayfromphp);
	var out_state_IA=output_color(arrayfromphp.IA,arrayfromphp);
	var out_state_ID=output_color(arrayfromphp.ID,arrayfromphp);
	var out_state_IL=output_color(arrayfromphp.IL,arrayfromphp);
	var out_state_IN=output_color(arrayfromphp.IN,arrayfromphp);
	var out_state_KS=output_color(arrayfromphp.KS,arrayfromphp);
	var out_state_KY=output_color(arrayfromphp.KY,arrayfromphp);
	var out_state_LA=output_color(arrayfromphp.LA,arrayfromphp);
	var out_state_MA=output_color(arrayfromphp.MA,arrayfromphp);
	var out_state_ME=output_color(arrayfromphp.ME,arrayfromphp);
	var out_state_MD=output_color(arrayfromphp.MD,arrayfromphp);
	var out_state_MI=output_color(arrayfromphp.MI,arrayfromphp);
	var out_state_MN=output_color(arrayfromphp.MN,arrayfromphp);
	var out_state_MO=output_color(arrayfromphp.MO,arrayfromphp);
	var out_state_MS=output_color(arrayfromphp.MS,arrayfromphp);
	var out_state_NC=output_color(arrayfromphp.NC,arrayfromphp);
	var out_state_ND=output_color(arrayfromphp.ND,arrayfromphp);
	var out_state_NE=output_color(arrayfromphp.NE,arrayfromphp);
	var out_state_NH=output_color(arrayfromphp.NH,arrayfromphp);
	var out_state_NJ=output_color(arrayfromphp.NJ,arrayfromphp);
	var out_state_NM=output_color(arrayfromphp.NM,arrayfromphp);
	var out_state_NV=output_color(arrayfromphp.NV,arrayfromphp);
	var out_state_NY=output_color(arrayfromphp.NY,arrayfromphp);
	var out_state_OH=output_color(arrayfromphp.OH,arrayfromphp);
	var out_state_OK=output_color(arrayfromphp.OK,arrayfromphp);
	var out_state_OR=output_color(arrayfromphp.OR,arrayfromphp);
	var out_state_PA=output_color(arrayfromphp.PA,arrayfromphp);
	var out_state_RI=output_color(arrayfromphp.RI,arrayfromphp);
	var out_state_SC=output_color(arrayfromphp.SC,arrayfromphp);
	var out_state_SD=output_color(arrayfromphp.SD,arrayfromphp);
	var out_state_TN=output_color(arrayfromphp.TN,arrayfromphp);
	var out_state_TX=output_color(arrayfromphp.TX,arrayfromphp);
	var out_state_UT=output_color(arrayfromphp.UT,arrayfromphp);
	var out_state_VA=output_color(arrayfromphp.VA,arrayfromphp);
	var out_state_VT=output_color(arrayfromphp.VT,arrayfromphp);
	var out_state_WA=output_color(arrayfromphp.WA,arrayfromphp);
	var out_state_WI=output_color(arrayfromphp.MI,arrayfromphp);
	var out_state_WV=output_color(arrayfromphp.WV,arrayfromphp);
	var out_state_WY=output_color(arrayfromphp.WY,arrayfromphp);

	//overall auth
	var out_state_auth_AK=output_color(overall_auth.AK,overall_auth);
	var out_state_auth_AL=output_color(overall_auth.AL,overall_auth);
	var out_state_auth_AR=output_color(overall_auth.AR,overall_auth);
	var out_state_auth_AZ=output_color(overall_auth.AZ,overall_auth);
	var out_state_auth_CA=output_color(overall_auth.CA,overall_auth);
	var out_state_auth_CO=output_color(overall_auth.CO,overall_auth);
	var out_state_auth_CT=output_color(overall_auth.CT,overall_auth);
	var out_state_auth_DC=output_color(overall_auth.DC,overall_auth);
	var out_state_auth_DE=output_color(overall_auth.DE,overall_auth);
	var out_state_auth_FL=output_color(overall_auth.FL,overall_auth);
	var out_state_auth_GA=output_color(overall_auth.GA,overall_auth);
	var out_state_auth_HI=output_color(overall_auth.HI,overall_auth);
	var out_state_auth_IA=output_color(overall_auth.IA,overall_auth);
	var out_state_auth_ID=output_color(overall_auth.ID,overall_auth);
	var out_state_auth_IL=output_color(overall_auth.IL,overall_auth);
	var out_state_auth_IN=output_color(overall_auth.IN,overall_auth);
	var out_state_auth_KS=output_color(overall_auth.KS,overall_auth);
	var out_state_auth_KY=output_color(overall_auth.KY,overall_auth);
	var out_state_auth_LA=output_color(overall_auth.LA,overall_auth);
	var out_state_auth_MA=output_color(overall_auth.MA,overall_auth);
	var out_state_auth_ME=output_color(overall_auth.ME,overall_auth);
	var out_state_auth_MD=output_color(overall_auth.MD,overall_auth);
	var out_state_auth_MI=output_color(overall_auth.MI,overall_auth);
	var out_state_auth_MN=output_color(overall_auth.MN,overall_auth);
	var out_state_auth_MO=output_color(overall_auth.MO,overall_auth);
	var out_state_auth_MS=output_color(overall_auth.MS,overall_auth);
	var out_state_auth_NC=output_color(overall_auth.NC,overall_auth);
	var out_state_auth_ND=output_color(overall_auth.ND,overall_auth);
	var out_state_auth_NE=output_color(overall_auth.NE,overall_auth);
	var out_state_auth_NH=output_color(overall_auth.NH,overall_auth);
	var out_state_auth_NJ=output_color(overall_auth.NJ,overall_auth);
	var out_state_auth_NM=output_color(overall_auth.NM,overall_auth);
	var out_state_auth_NV=output_color(overall_auth.NV,overall_auth);
	var out_state_auth_NY=output_color(overall_auth.NY,overall_auth);
	var out_state_auth_OH=output_color(overall_auth.OH,overall_auth);
	var out_state_auth_OK=output_color(overall_auth.OK,overall_auth);
	var out_state_auth_OR=output_color(overall_auth.OR,overall_auth);
	var out_state_auth_PA=output_color(overall_auth.PA,overall_auth);
	var out_state_auth_RI=output_color(overall_auth.RI,overall_auth);
	var out_state_auth_SC=output_color(overall_auth.SC,overall_auth);
	var out_state_auth_SD=output_color(overall_auth.SD,overall_auth);
	var out_state_auth_TN=output_color(overall_auth.TN,overall_auth);
	var out_state_auth_TX=output_color(overall_auth.TX,overall_auth);
	var out_state_auth_UT=output_color(overall_auth.UT,overall_auth);
	var out_state_auth_VA=output_color(overall_auth.VA,overall_auth);
	var out_state_auth_VT=output_color(overall_auth.VT,overall_auth);
	var out_state_auth_WA=output_color(overall_auth.WA,overall_auth);
	var out_state_auth_WI=output_color(overall_auth.MI,overall_auth);
	var out_state_auth_WV=output_color(overall_auth.WV,overall_auth);
	var out_state_auth_WY=output_color(overall_auth.WY,overall_auth);

	//war_con

	var war_con_AK=output_color(war_con.AK,war_con);
	var war_con_AL=output_color(war_con.AL,war_con);
	var war_con_AR=output_color(war_con.AR,war_con);
	var war_con_AZ=output_color(war_con.AZ,war_con);
	var war_con_CA=output_color(war_con.CA,war_con);
	var war_con_CO=output_color(war_con.CO,war_con);
	var war_con_CT=output_color(war_con.CT,war_con);
	var war_con_DC=output_color(war_con.DC,war_con);
	var war_con_DE=output_color(war_con.DE,war_con);
	var war_con_FL=output_color(war_con.FL,war_con);
	var war_con_GA=output_color(war_con.GA,war_con);
	var war_con_HI=output_color(war_con.HI,war_con);
	var war_con_IA=output_color(war_con.IA,war_con);
	var war_con_ID=output_color(war_con.ID,war_con);
	var war_con_IL=output_color(war_con.IL,war_con);
	var war_con_IN=output_color(war_con.IN,war_con);
	var war_con_KS=output_color(war_con.KS,war_con);
	var war_con_KY=output_color(war_con.KY,war_con);
	var war_con_LA=output_color(war_con.LA,war_con);
	var war_con_MA=output_color(war_con.MA,war_con);
	var war_con_ME=output_color(war_con.ME,war_con);
	var war_con_MD=output_color(war_con.MD,war_con);
	var war_con_MI=output_color(war_con.MI,war_con);
	var war_con_MN=output_color(war_con.MN,war_con);
	var war_con_MO=output_color(war_con.MO,war_con);
	var war_con_MS=output_color(war_con.MS,war_con);
	var war_con_NC=output_color(war_con.NC,war_con);
	var war_con_ND=output_color(war_con.ND,war_con);
	var war_con_NE=output_color(war_con.NE,war_con);
	var war_con_NH=output_color(war_con.NH,war_con);
	var war_con_NJ=output_color(war_con.NJ,war_con);
	var war_con_NM=output_color(war_con.NM,war_con);
	var war_con_NV=output_color(war_con.NV,war_con);
	var war_con_NY=output_color(war_con.NY,war_con);
	var war_con_OH=output_color(war_con.OH,war_con);
	var war_con_OK=output_color(war_con.OK,war_con);
	var war_con_OR=output_color(war_con.OR,war_con);
	var war_con_PA=output_color(war_con.PA,war_con);
	var war_con_RI=output_color(war_con.RI,war_con);
	var war_con_SC=output_color(war_con.SC,war_con);
	var war_con_SD=output_color(war_con.SD,war_con);
	var war_con_TN=output_color(war_con.TN,war_con);
	var war_con_TX=output_color(war_con.TX,war_con);
	var war_con_UT=output_color(war_con.UT,war_con);
	var war_con_VA=output_color(war_con.VA,war_con);
	var war_con_VT=output_color(war_con.VT,war_con);
	var war_con_WA=output_color(war_con.WA,war_con);
	var war_con_WI=output_color(war_con.MI,war_con);
	var war_con_WV=output_color(war_con.WV,war_con);
	var war_con_WY=output_color(war_con.WY,war_con);

	//war_auth
	var war_auth_AK=output_color(war_auth.AK,war_auth);
	var war_auth_AL=output_color(war_auth.AL,war_auth);
	var war_auth_AR=output_color(war_auth.AR,war_auth);
	var war_auth_AZ=output_color(war_auth.AZ,war_auth);
	var war_auth_CA=output_color(war_auth.CA,war_auth);
	var war_auth_CO=output_color(war_auth.CO,war_auth);
	var war_auth_CT=output_color(war_auth.CT,war_auth);
	var war_auth_DC=output_color(war_auth.DC,war_auth);
	var war_auth_DE=output_color(war_auth.DE,war_auth);
	var war_auth_FL=output_color(war_auth.FL,war_auth);
	var war_auth_GA=output_color(war_auth.GA,war_auth);
	var war_auth_HI=output_color(war_auth.HI,war_auth);
	var war_auth_IA=output_color(war_auth.IA,war_auth);
	var war_auth_ID=output_color(war_auth.ID,war_auth);
	var war_auth_IL=output_color(war_auth.IL,war_auth);
	var war_auth_IN=output_color(war_auth.IN,war_auth);
	var war_auth_KS=output_color(war_auth.KS,war_auth);
	var war_auth_KY=output_color(war_auth.KY,war_auth);
	var war_auth_LA=output_color(war_auth.LA,war_auth);
	var war_auth_MA=output_color(war_auth.MA,war_auth);
	var war_auth_ME=output_color(war_auth.ME,war_auth);
	var war_auth_MD=output_color(war_auth.MD,war_auth);
	var war_auth_MI=output_color(war_auth.MI,war_auth);
	var war_auth_MN=output_color(war_auth.MN,war_auth);
	var war_auth_MO=output_color(war_auth.MO,war_auth);
	var war_auth_MS=output_color(war_auth.MS,war_auth);
	var war_auth_NC=output_color(war_auth.NC,war_auth);
	var war_auth_ND=output_color(war_auth.ND,war_auth);
	var war_auth_NE=output_color(war_auth.NE,war_auth);
	var war_auth_NH=output_color(war_auth.NH,war_auth);
	var war_auth_NJ=output_color(war_auth.NJ,war_auth);
	var war_auth_NM=output_color(war_auth.NM,war_auth);
	var war_auth_NV=output_color(war_auth.NV,war_auth);
	var war_auth_NY=output_color(war_auth.NY,war_auth);
	var war_auth_OH=output_color(war_auth.OH,war_auth);
	var war_auth_OK=output_color(war_auth.OK,war_auth);
	var war_auth_OR=output_color(war_auth.OR,war_auth);
	var war_auth_PA=output_color(war_auth.PA,war_auth);
	var war_auth_RI=output_color(war_auth.RI,war_auth);
	var war_auth_SC=output_color(war_auth.SC,war_auth);
	var war_auth_SD=output_color(war_auth.SD,war_auth);
	var war_auth_TN=output_color(war_auth.TN,war_auth);
	var war_auth_TX=output_color(war_auth.TX,war_auth);
	var war_auth_UT=output_color(war_auth.UT,war_auth);
	var war_auth_VA=output_color(war_auth.VA,war_auth);
	var war_auth_VT=output_color(war_auth.VT,war_auth);
	var war_auth_WA=output_color(war_auth.WA,war_auth);
	var war_auth_WI=output_color(war_auth.MI,war_auth);
	var war_auth_WV=output_color(war_auth.WV,war_auth);
	var war_auth_WY=output_color(war_auth.WY,war_auth);

	//foreign_con

	var foreign_con_AK=output_color(foreign_con.AK,foreign_con);
	var foreign_con_AL=output_color(foreign_con.AL,foreign_con);
	var foreign_con_AR=output_color(foreign_con.AR,foreign_con);
	var foreign_con_AZ=output_color(foreign_con.AZ,foreign_con);
	var foreign_con_CA=output_color(foreign_con.CA,foreign_con);
	var foreign_con_CO=output_color(foreign_con.CO,foreign_con);
	var foreign_con_CT=output_color(foreign_con.CT,foreign_con);
	var foreign_con_DC=output_color(foreign_con.DC,foreign_con);
	var foreign_con_DE=output_color(foreign_con.DE,foreign_con);
	var foreign_con_FL=output_color(foreign_con.FL,foreign_con);
	var foreign_con_GA=output_color(foreign_con.GA,foreign_con);
	var foreign_con_HI=output_color(foreign_con.HI,foreign_con);
	var foreign_con_IA=output_color(foreign_con.IA,foreign_con);
	var foreign_con_ID=output_color(foreign_con.ID,foreign_con);
	var foreign_con_IL=output_color(foreign_con.IL,foreign_con);
	var foreign_con_IN=output_color(foreign_con.IN,foreign_con);
	var foreign_con_KS=output_color(foreign_con.KS,foreign_con);
	var foreign_con_KY=output_color(foreign_con.KY,foreign_con);
	var foreign_con_LA=output_color(foreign_con.LA,foreign_con);
	var foreign_con_MA=output_color(foreign_con.MA,foreign_con);
	var foreign_con_ME=output_color(foreign_con.ME,foreign_con);
	var foreign_con_MD=output_color(foreign_con.MD,foreign_con);
	var foreign_con_MI=output_color(foreign_con.MI,foreign_con);
	var foreign_con_MN=output_color(foreign_con.MN,foreign_con);
	var foreign_con_MO=output_color(foreign_con.MO,foreign_con);
	var foreign_con_MS=output_color(foreign_con.MS,foreign_con);
	var foreign_con_NC=output_color(foreign_con.NC,foreign_con);
	var foreign_con_ND=output_color(foreign_con.ND,foreign_con);
	var foreign_con_NE=output_color(foreign_con.NE,foreign_con);
	var foreign_con_NH=output_color(foreign_con.NH,foreign_con);
	var foreign_con_NJ=output_color(foreign_con.NJ,foreign_con);
	var foreign_con_NM=output_color(foreign_con.NM,foreign_con);
	var foreign_con_NV=output_color(foreign_con.NV,foreign_con);
	var foreign_con_NY=output_color(foreign_con.NY,foreign_con);
	var foreign_con_OH=output_color(foreign_con.OH,foreign_con);
	var foreign_con_OK=output_color(foreign_con.OK,foreign_con);
	var foreign_con_OR=output_color(foreign_con.OR,foreign_con);
	var foreign_con_PA=output_color(foreign_con.PA,foreign_con);
	var foreign_con_RI=output_color(foreign_con.RI,foreign_con);
	var foreign_con_SC=output_color(foreign_con.SC,foreign_con);
	var foreign_con_SD=output_color(foreign_con.SD,foreign_con);
	var foreign_con_TN=output_color(foreign_con.TN,foreign_con);
	var foreign_con_TX=output_color(foreign_con.TX,foreign_con);
	var foreign_con_UT=output_color(foreign_con.UT,foreign_con);
	var foreign_con_VA=output_color(foreign_con.VA,foreign_con);
	var foreign_con_VT=output_color(foreign_con.VT,foreign_con);
	var foreign_con_WA=output_color(foreign_con.WA,foreign_con);
	var foreign_con_WI=output_color(foreign_con.MI,foreign_con);
	var foreign_con_WV=output_color(foreign_con.WV,foreign_con);
	var foreign_con_WY=output_color(foreign_con.WY,foreign_con);


	//foreign_auth
	var foreign_auth_AK=output_color(foreign_auth.AK,foreign_auth);
	var foreign_auth_AL=output_color(foreign_auth.AL,foreign_auth);
	var foreign_auth_AR=output_color(foreign_auth.AR,foreign_auth);
	var foreign_auth_AZ=output_color(foreign_auth.AZ,foreign_auth);
	var foreign_auth_CA=output_color(foreign_auth.CA,foreign_auth);
	var foreign_auth_CO=output_color(foreign_auth.CO,foreign_auth);
	var foreign_auth_CT=output_color(foreign_auth.CT,foreign_auth);
	var foreign_auth_DC=output_color(foreign_auth.DC,foreign_auth);
	var foreign_auth_DE=output_color(foreign_auth.DE,foreign_auth);
	var foreign_auth_FL=output_color(foreign_auth.FL,foreign_auth);
	var foreign_auth_GA=output_color(foreign_auth.GA,foreign_auth);
	var foreign_auth_HI=output_color(foreign_auth.HI,foreign_auth);
	var foreign_auth_IA=output_color(foreign_auth.IA,foreign_auth);
	var foreign_auth_ID=output_color(foreign_auth.ID,foreign_auth);
	var foreign_auth_IL=output_color(foreign_auth.IL,foreign_auth);
	var foreign_auth_IN=output_color(foreign_auth.IN,foreign_auth);
	var foreign_auth_KS=output_color(foreign_auth.KS,foreign_auth);
	var foreign_auth_KY=output_color(foreign_auth.KY,foreign_auth);
	var foreign_auth_LA=output_color(foreign_auth.LA,foreign_auth);
	var foreign_auth_MA=output_color(foreign_auth.MA,foreign_auth);
	var foreign_auth_ME=output_color(foreign_auth.ME,foreign_auth);
	var foreign_auth_MD=output_color(foreign_auth.MD,foreign_auth);
	var foreign_auth_MI=output_color(foreign_auth.MI,foreign_auth);
	var foreign_auth_MN=output_color(foreign_auth.MN,foreign_auth);
	var foreign_auth_MO=output_color(foreign_auth.MO,foreign_auth);
	var foreign_auth_MS=output_color(foreign_auth.MS,foreign_auth);
	var foreign_auth_NC=output_color(foreign_auth.NC,foreign_auth);
	var foreign_auth_ND=output_color(foreign_auth.ND,foreign_auth);
	var foreign_auth_NE=output_color(foreign_auth.NE,foreign_auth);
	var foreign_auth_NH=output_color(foreign_auth.NH,foreign_auth);
	var foreign_auth_NJ=output_color(foreign_auth.NJ,foreign_auth);
	var foreign_auth_NM=output_color(foreign_auth.NM,foreign_auth);
	var foreign_auth_NV=output_color(foreign_auth.NV,foreign_auth);
	var foreign_auth_NY=output_color(foreign_auth.NY,foreign_auth);
	var foreign_auth_OH=output_color(foreign_auth.OH,foreign_auth);
	var foreign_auth_OK=output_color(foreign_auth.OK,foreign_auth);
	var foreign_auth_OR=output_color(foreign_auth.OR,foreign_auth);
	var foreign_auth_PA=output_color(foreign_auth.PA,foreign_auth);
	var foreign_auth_RI=output_color(foreign_auth.RI,foreign_auth);
	var foreign_auth_SC=output_color(foreign_auth.SC,foreign_auth);
	var foreign_auth_SD=output_color(foreign_auth.SD,foreign_auth);
	var foreign_auth_TN=output_color(foreign_auth.TN,foreign_auth);
	var foreign_auth_TX=output_color(foreign_auth.TX,foreign_auth);
	var foreign_auth_UT=output_color(foreign_auth.UT,foreign_auth);
	var foreign_auth_VA=output_color(foreign_auth.VA,foreign_auth);
	var foreign_auth_VT=output_color(foreign_auth.VT,foreign_auth);
	var foreign_auth_WA=output_color(foreign_auth.WA,foreign_auth);
	var foreign_auth_WI=output_color(foreign_auth.MI,foreign_auth);
	var foreign_auth_WV=output_color(foreign_auth.WV,foreign_auth);
	var foreign_auth_WY=output_color(foreign_auth.WY,foreign_auth);



	//technology_con
	var technology_con_AK=output_color(technology_con.AK,technology_con);
	var technology_con_AL=output_color(technology_con.AL,technology_con);
	var technology_con_AR=output_color(technology_con.AR,technology_con);
	var technology_con_AZ=output_color(technology_con.AZ,technology_con);
	var technology_con_CA=output_color(technology_con.CA,technology_con);
	var technology_con_CO=output_color(technology_con.CO,technology_con);
	var technology_con_CT=output_color(technology_con.CT,technology_con);
	var technology_con_DC=output_color(technology_con.DC,technology_con);
	var technology_con_DE=output_color(technology_con.DE,technology_con);
	var technology_con_FL=output_color(technology_con.FL,technology_con);
	var technology_con_GA=output_color(technology_con.GA,technology_con);
	var technology_con_HI=output_color(technology_con.HI,technology_con);
	var technology_con_IA=output_color(technology_con.IA,technology_con);
	var technology_con_ID=output_color(technology_con.ID,technology_con);
	var technology_con_IL=output_color(technology_con.IL,technology_con);
	var technology_con_IN=output_color(technology_con.IN,technology_con);
	var technology_con_KS=output_color(technology_con.KS,technology_con);
	var technology_con_KY=output_color(technology_con.KY,technology_con);
	var technology_con_LA=output_color(technology_con.LA,technology_con);
	var technology_con_MA=output_color(technology_con.MA,technology_con);
	var technology_con_ME=output_color(technology_con.ME,technology_con);
	var technology_con_MD=output_color(technology_con.MD,technology_con);
	var technology_con_MI=output_color(technology_con.MI,technology_con);
	var technology_con_MN=output_color(technology_con.MN,technology_con);
	var technology_con_MO=output_color(technology_con.MO,technology_con);
	var technology_con_MS=output_color(technology_con.MS,technology_con);
	var technology_con_NC=output_color(technology_con.NC,technology_con);
	var technology_con_ND=output_color(technology_con.ND,technology_con);
	var technology_con_NE=output_color(technology_con.NE,technology_con);
	var technology_con_NH=output_color(technology_con.NH,technology_con);
	var technology_con_NJ=output_color(technology_con.NJ,technology_con);
	var technology_con_NM=output_color(technology_con.NM,technology_con);
	var technology_con_NV=output_color(technology_con.NV,technology_con);
	var technology_con_NY=output_color(technology_con.NY,technology_con);
	var technology_con_OH=output_color(technology_con.OH,technology_con);
	var technology_con_OK=output_color(technology_con.OK,technology_con);
	var technology_con_OR=output_color(technology_con.OR,technology_con);
	var technology_con_PA=output_color(technology_con.PA,technology_con);
	var technology_con_RI=output_color(technology_con.RI,technology_con);
	var technology_con_SC=output_color(technology_con.SC,technology_con);
	var technology_con_SD=output_color(technology_con.SD,technology_con);
	var technology_con_TN=output_color(technology_con.TN,technology_con);
	var technology_con_TX=output_color(technology_con.TX,technology_con);
	var technology_con_UT=output_color(technology_con.UT,technology_con);
	var technology_con_VA=output_color(technology_con.VA,technology_con);
	var technology_con_VT=output_color(technology_con.VT,technology_con);
	var technology_con_WA=output_color(technology_con.WA,technology_con);
	var technology_con_WI=output_color(technology_con.MI,technology_con);
	var technology_con_WV=output_color(technology_con.WV,technology_con);
	var technology_con_WY=output_color(technology_con.WY,technology_con);

	//techno_auth
	var technology_auth_AK=output_color(technology_auth.AK,technology_auth);
	var technology_auth_AL=output_color(technology_auth.AL,technology_auth);
	var technology_auth_AR=output_color(technology_auth.AR,technology_auth);
	var technology_auth_AZ=output_color(technology_auth.AZ,technology_auth);
	var technology_auth_CA=output_color(technology_auth.CA,technology_auth);
	var technology_auth_CO=output_color(technology_auth.CO,technology_auth);
	var technology_auth_CT=output_color(technology_auth.CT,technology_auth);
	var technology_auth_DC=output_color(technology_auth.DC,technology_auth);
	var technology_auth_DE=output_color(technology_auth.DE,technology_auth);
	var technology_auth_FL=output_color(technology_auth.FL,technology_auth);
	var technology_auth_GA=output_color(technology_auth.GA,technology_auth);
	var technology_auth_HI=output_color(technology_auth.HI,technology_auth);
	var technology_auth_IA=output_color(technology_auth.IA,technology_auth);
	var technology_auth_ID=output_color(technology_auth.ID,technology_auth);
	var technology_auth_IL=output_color(technology_auth.IL,technology_auth);
	var technology_auth_IN=output_color(technology_auth.IN,technology_auth);
	var technology_auth_KS=output_color(technology_auth.KS,technology_auth);
	var technology_auth_KY=output_color(technology_auth.KY,technology_auth);
	var technology_auth_LA=output_color(technology_auth.LA,technology_auth);
	var technology_auth_MA=output_color(technology_auth.MA,technology_auth);
	var technology_auth_ME=output_color(technology_auth.ME,technology_auth);
	var technology_auth_MD=output_color(technology_auth.MD,technology_auth);
	var technology_auth_MI=output_color(technology_auth.MI,technology_auth);
	var technology_auth_MN=output_color(technology_auth.MN,technology_auth);
	var technology_auth_MO=output_color(technology_auth.MO,technology_auth);
	var technology_auth_MS=output_color(technology_auth.MS,technology_auth);
	var technology_auth_NC=output_color(technology_auth.NC,technology_auth);
	var technology_auth_ND=output_color(technology_auth.ND,technology_auth);
	var technology_auth_NE=output_color(technology_auth.NE,technology_auth);
	var technology_auth_NH=output_color(technology_auth.NH,technology_auth);
	var technology_auth_NJ=output_color(technology_auth.NJ,technology_auth);
	var technology_auth_NM=output_color(technology_auth.NM,technology_auth);
	var technology_auth_NV=output_color(technology_auth.NV,technology_auth);
	var technology_auth_NY=output_color(technology_auth.NY,technology_auth);
	var technology_auth_OH=output_color(technology_auth.OH,technology_auth);
	var technology_auth_OK=output_color(technology_auth.OK,technology_auth);
	var technology_auth_OR=output_color(technology_auth.OR,technology_auth);
	var technology_auth_PA=output_color(technology_auth.PA,technology_auth);
	var technology_auth_RI=output_color(technology_auth.RI,technology_auth);
	var technology_auth_SC=output_color(technology_auth.SC,technology_auth);
	var technology_auth_SD=output_color(technology_auth.SD,technology_auth);
	var technology_auth_TN=output_color(technology_auth.TN,technology_auth);
	var technology_auth_TX=output_color(technology_auth.TX,technology_auth);
	var technology_auth_UT=output_color(technology_auth.UT,technology_auth);
	var technology_auth_VA=output_color(technology_auth.VA,technology_auth);
	var technology_auth_VT=output_color(technology_auth.VT,technology_auth);
	var technology_auth_WA=output_color(technology_auth.WA,technology_auth);
	var technology_auth_WI=output_color(technology_auth.MI,technology_auth);
	var technology_auth_WV=output_color(technology_auth.WV,technology_auth);
	var technology_auth_WY=output_color(technology_auth.WY,technology_auth);

	//civil_con
	var civil_con_AK=output_color(civil_con.AK,civil_con);
	var civil_con_AL=output_color(civil_con.AL,civil_con);
	var civil_con_AR=output_color(civil_con.AR,civil_con);
	var civil_con_AZ=output_color(civil_con.AZ,civil_con);
	var civil_con_CA=output_color(civil_con.CA,civil_con);
	var civil_con_CO=output_color(civil_con.CO,civil_con);
	var civil_con_CT=output_color(civil_con.CT,civil_con);
	var civil_con_DC=output_color(civil_con.DC,civil_con);
	var civil_con_DE=output_color(civil_con.DE,civil_con);
	var civil_con_FL=output_color(civil_con.FL,civil_con);
	var civil_con_GA=output_color(civil_con.GA,civil_con);
	var civil_con_HI=output_color(civil_con.HI,civil_con);
	var civil_con_IA=output_color(civil_con.IA,civil_con);
	var civil_con_ID=output_color(civil_con.ID,civil_con);
	var civil_con_IL=output_color(civil_con.IL,civil_con);
	var civil_con_IN=output_color(civil_con.IN,civil_con);
	var civil_con_KS=output_color(civil_con.KS,civil_con);
	var civil_con_KY=output_color(civil_con.KY,civil_con);
	var civil_con_LA=output_color(civil_con.LA,civil_con);
	var civil_con_MA=output_color(civil_con.MA,civil_con);
	var civil_con_ME=output_color(civil_con.ME,civil_con);
	var civil_con_MD=output_color(civil_con.MD,civil_con);
	var civil_con_MI=output_color(civil_con.MI,civil_con);
	var civil_con_MN=output_color(civil_con.MN,civil_con);
	var civil_con_MO=output_color(civil_con.MO,civil_con);
	var civil_con_MS=output_color(civil_con.MS,civil_con);
	var civil_con_NC=output_color(civil_con.NC,civil_con);
	var civil_con_ND=output_color(civil_con.ND,civil_con);
	var civil_con_NE=output_color(civil_con.NE,civil_con);
	var civil_con_NH=output_color(civil_con.NH,civil_con);
	var civil_con_NJ=output_color(civil_con.NJ,civil_con);
	var civil_con_NM=output_color(civil_con.NM,civil_con);
	var civil_con_NV=output_color(civil_con.NV,civil_con);
	var civil_con_NY=output_color(civil_con.NY,civil_con);
	var civil_con_OH=output_color(civil_con.OH,civil_con);
	var civil_con_OK=output_color(civil_con.OK,civil_con);
	var civil_con_OR=output_color(civil_con.OR,civil_con);
	var civil_con_PA=output_color(civil_con.PA,civil_con);
	var civil_con_RI=output_color(civil_con.RI,civil_con);
	var civil_con_SC=output_color(civil_con.SC,civil_con);
	var civil_con_SD=output_color(civil_con.SD,civil_con);
	var civil_con_TN=output_color(civil_con.TN,civil_con);
	var civil_con_TX=output_color(civil_con.TX,civil_con);
	var civil_con_UT=output_color(civil_con.UT,civil_con);
	var civil_con_VA=output_color(civil_con.VA,civil_con);
	var civil_con_VT=output_color(civil_con.VT,civil_con);
	var civil_con_WA=output_color(civil_con.WA,civil_con);
	var civil_con_WI=output_color(civil_con.MI,civil_con);
	var civil_con_WV=output_color(civil_con.WV,civil_con);
	var civil_con_WY=output_color(civil_con.WY,civil_con);

	//civil_auth
	var civil_auth_AK=output_color(civil_auth.AK,civil_auth);
	var civil_auth_AL=output_color(civil_auth.AL,civil_auth);
	var civil_auth_AR=output_color(civil_auth.AR,civil_auth);
	var civil_auth_AZ=output_color(civil_auth.AZ,civil_auth);
	var civil_auth_CA=output_color(civil_auth.CA,civil_auth);
	var civil_auth_CO=output_color(civil_auth.CO,civil_auth);
	var civil_auth_CT=output_color(civil_auth.CT,civil_auth);
	var civil_auth_DC=output_color(civil_auth.DC,civil_auth);
	var civil_auth_DE=output_color(civil_auth.DE,civil_auth);
	var civil_auth_FL=output_color(civil_auth.FL,civil_auth);
	var civil_auth_GA=output_color(civil_auth.GA,civil_auth);
	var civil_auth_HI=output_color(civil_auth.HI,civil_auth);
	var civil_auth_IA=output_color(civil_auth.IA,civil_auth);
	var civil_auth_ID=output_color(civil_auth.ID,civil_auth);
	var civil_auth_IL=output_color(civil_auth.IL,civil_auth);
	var civil_auth_IN=output_color(civil_auth.IN,civil_auth);
	var civil_auth_KS=output_color(civil_auth.KS,civil_auth);
	var civil_auth_KY=output_color(civil_auth.KY,civil_auth);
	var civil_auth_LA=output_color(civil_auth.LA,civil_auth);
	var civil_auth_MA=output_color(civil_auth.MA,civil_auth);
	var civil_auth_ME=output_color(civil_auth.ME,civil_auth);
	var civil_auth_MD=output_color(civil_auth.MD,civil_auth);
	var civil_auth_MI=output_color(civil_auth.MI,civil_auth);
	var civil_auth_MN=output_color(civil_auth.MN,civil_auth);
	var civil_auth_MO=output_color(civil_auth.MO,civil_auth);
	var civil_auth_MS=output_color(civil_auth.MS,civil_auth);
	var civil_auth_NC=output_color(civil_auth.NC,civil_auth);
	var civil_auth_ND=output_color(civil_auth.ND,civil_auth);
	var civil_auth_NE=output_color(civil_auth.NE,civil_auth);
	var civil_auth_NH=output_color(civil_auth.NH,civil_auth);
	var civil_auth_NJ=output_color(civil_auth.NJ,civil_auth);
	var civil_auth_NM=output_color(civil_auth.NM,civil_auth);
	var civil_auth_NV=output_color(civil_auth.NV,civil_auth);
	var civil_auth_NY=output_color(civil_auth.NY,civil_auth);
	var civil_auth_OH=output_color(civil_auth.OH,civil_auth);
	var civil_auth_OK=output_color(civil_auth.OK,civil_auth);
	var civil_auth_OR=output_color(civil_auth.OR,civil_auth);
	var civil_auth_PA=output_color(civil_auth.PA,civil_auth);
	var civil_auth_RI=output_color(civil_auth.RI,civil_auth);
	var civil_auth_SC=output_color(civil_auth.SC,civil_auth);
	var civil_auth_SD=output_color(civil_auth.SD,civil_auth);
	var civil_auth_TN=output_color(civil_auth.TN,civil_auth);
	var civil_auth_TX=output_color(civil_auth.TX,civil_auth);
	var civil_auth_UT=output_color(civil_auth.UT,civil_auth);
	var civil_auth_VA=output_color(civil_auth.VA,civil_auth);
	var civil_auth_VT=output_color(civil_auth.VT,civil_auth);
	var civil_auth_WA=output_color(civil_auth.WA,civil_auth);
	var civil_auth_WI=output_color(civil_auth.MI,civil_auth);
	var civil_auth_WV=output_color(civil_auth.WV,civil_auth);
	var civil_auth_WY=output_color(civil_auth.WY,civil_auth);

	//abortion_con
	var abortion_con_AK=output_color(abortion_con.AK,abortion_con);
	var abortion_con_AL=output_color(abortion_con.AL,abortion_con);
	var abortion_con_AR=output_color(abortion_con.AR,abortion_con);
	var abortion_con_AZ=output_color(abortion_con.AZ,abortion_con);
	var abortion_con_CA=output_color(abortion_con.CA,abortion_con);
	var abortion_con_CO=output_color(abortion_con.CO,abortion_con);
	var abortion_con_CT=output_color(abortion_con.CT,abortion_con);
	var abortion_con_DC=output_color(abortion_con.DC,abortion_con);
	var abortion_con_DE=output_color(abortion_con.DE,abortion_con);
	var abortion_con_FL=output_color(abortion_con.FL,abortion_con);
	var abortion_con_GA=output_color(abortion_con.GA,abortion_con);
	var abortion_con_HI=output_color(abortion_con.HI,abortion_con);
	var abortion_con_IA=output_color(abortion_con.IA,abortion_con);
	var abortion_con_ID=output_color(abortion_con.ID,abortion_con);
	var abortion_con_IL=output_color(abortion_con.IL,abortion_con);
	var abortion_con_IN=output_color(abortion_con.IN,abortion_con);
	var abortion_con_KS=output_color(abortion_con.KS,abortion_con);
	var abortion_con_KY=output_color(abortion_con.KY,abortion_con);
	var abortion_con_LA=output_color(abortion_con.LA,abortion_con);
	var abortion_con_MA=output_color(abortion_con.MA,abortion_con);
	var abortion_con_ME=output_color(abortion_con.ME,abortion_con);
	var abortion_con_MD=output_color(abortion_con.MD,abortion_con);
	var abortion_con_MI=output_color(abortion_con.MI,abortion_con);
	var abortion_con_MN=output_color(abortion_con.MN,abortion_con);
	var abortion_con_MO=output_color(abortion_con.MO,abortion_con);
	var abortion_con_MS=output_color(abortion_con.MS,abortion_con);
	var abortion_con_NC=output_color(abortion_con.NC,abortion_con);
	var abortion_con_ND=output_color(abortion_con.ND,abortion_con);
	var abortion_con_NE=output_color(abortion_con.NE,abortion_con);
	var abortion_con_NH=output_color(abortion_con.NH,abortion_con);
	var abortion_con_NJ=output_color(abortion_con.NJ,abortion_con);
	var abortion_con_NM=output_color(abortion_con.NM,abortion_con);
	var abortion_con_NV=output_color(abortion_con.NV,abortion_con);
	var abortion_con_NY=output_color(abortion_con.NY,abortion_con);
	var abortion_con_OH=output_color(abortion_con.OH,abortion_con);
	var abortion_con_OK=output_color(abortion_con.OK,abortion_con);
	var abortion_con_OR=output_color(abortion_con.OR,abortion_con);
	var abortion_con_PA=output_color(abortion_con.PA,abortion_con);
	var abortion_con_RI=output_color(abortion_con.RI,abortion_con);
	var abortion_con_SC=output_color(abortion_con.SC,abortion_con);
	var abortion_con_SD=output_color(abortion_con.SD,abortion_con);
	var abortion_con_TN=output_color(abortion_con.TN,abortion_con);
	var abortion_con_TX=output_color(abortion_con.TX,abortion_con);
	var abortion_con_UT=output_color(abortion_con.UT,abortion_con);
	var abortion_con_VA=output_color(abortion_con.VA,abortion_con);
	var abortion_con_VT=output_color(abortion_con.VT,abortion_con);
	var abortion_con_WA=output_color(abortion_con.WA,abortion_con);
	var abortion_con_WI=output_color(abortion_con.MI,abortion_con);
	var abortion_con_WV=output_color(abortion_con.WV,abortion_con);
	var abortion_con_WY=output_color(abortion_con.WY,abortion_con);

	//abortion_auth
	var abortion_auth_AK=output_color(abortion_auth.AK,abortion_auth);
	var abortion_auth_AL=output_color(abortion_auth.AL,abortion_auth);
	var abortion_auth_AR=output_color(abortion_auth.AR,abortion_auth);
	var abortion_auth_AZ=output_color(abortion_auth.AZ,abortion_auth);
	var abortion_auth_CA=output_color(abortion_auth.CA,abortion_auth);
	var abortion_auth_CO=output_color(abortion_auth.CO,abortion_auth);
	var abortion_auth_CT=output_color(abortion_auth.CT,abortion_auth);
	var abortion_auth_DC=output_color(abortion_auth.DC,abortion_auth);
	var abortion_auth_DE=output_color(abortion_auth.DE,abortion_auth);
	var abortion_auth_FL=output_color(abortion_auth.FL,abortion_auth);
	var abortion_auth_GA=output_color(abortion_auth.GA,abortion_auth);
	var abortion_auth_HI=output_color(abortion_auth.HI,abortion_auth);
	var abortion_auth_IA=output_color(abortion_auth.IA,abortion_auth);
	var abortion_auth_ID=output_color(abortion_auth.ID,abortion_auth);
	var abortion_auth_IL=output_color(abortion_auth.IL,abortion_auth);
	var abortion_auth_IN=output_color(abortion_auth.IN,abortion_auth);
	var abortion_auth_KS=output_color(abortion_auth.KS,abortion_auth);
	var abortion_auth_KY=output_color(abortion_auth.KY,abortion_auth);
	var abortion_auth_LA=output_color(abortion_auth.LA,abortion_auth);
	var abortion_auth_MA=output_color(abortion_auth.MA,abortion_auth);
	var abortion_auth_ME=output_color(abortion_auth.ME,abortion_auth);
	var abortion_auth_MD=output_color(abortion_auth.MD,abortion_auth);
	var abortion_auth_MI=output_color(abortion_auth.MI,abortion_auth);
	var abortion_auth_MN=output_color(abortion_auth.MN,abortion_auth);
	var abortion_auth_MO=output_color(abortion_auth.MO,abortion_auth);
	var abortion_auth_MS=output_color(abortion_auth.MS,abortion_auth);
	var abortion_auth_NC=output_color(abortion_auth.NC,abortion_auth);
	var abortion_auth_ND=output_color(abortion_auth.ND,abortion_auth);
	var abortion_auth_NE=output_color(abortion_auth.NE,abortion_auth);
	var abortion_auth_NH=output_color(abortion_auth.NH,abortion_auth);
	var abortion_auth_NJ=output_color(abortion_auth.NJ,abortion_auth);
	var abortion_auth_NM=output_color(abortion_auth.NM,abortion_auth);
	var abortion_auth_NV=output_color(abortion_auth.NV,abortion_auth);
	var abortion_auth_NY=output_color(abortion_auth.NY,abortion_auth);
	var abortion_auth_OH=output_color(abortion_auth.OH,abortion_auth);
	var abortion_auth_OK=output_color(abortion_auth.OK,abortion_auth);
	var abortion_auth_OR=output_color(abortion_auth.OR,abortion_auth);
	var abortion_auth_PA=output_color(abortion_auth.PA,abortion_auth);
	var abortion_auth_RI=output_color(abortion_auth.RI,abortion_auth);
	var abortion_auth_SC=output_color(abortion_auth.SC,abortion_auth);
	var abortion_auth_SD=output_color(abortion_auth.SD,abortion_auth);
	var abortion_auth_TN=output_color(abortion_auth.TN,abortion_auth);
	var abortion_auth_TX=output_color(abortion_auth.TX,abortion_auth);
	var abortion_auth_UT=output_color(abortion_auth.UT,abortion_auth);
	var abortion_auth_VA=output_color(abortion_auth.VA,abortion_auth);
	var abortion_auth_VT=output_color(abortion_auth.VT,abortion_auth);
	var abortion_auth_WA=output_color(abortion_auth.WA,abortion_auth);
	var abortion_auth_WI=output_color(abortion_auth.MI,abortion_auth);
	var abortion_auth_WV=output_color(abortion_auth.WV,abortion_auth);
	var abortion_auth_WY=output_color(abortion_auth.WY,abortion_auth);

	//jobs_con
	var jobs_con_AK=output_color(jobs_con.AK,jobs_con);
	var jobs_con_AL=output_color(jobs_con.AL,jobs_con);
	var jobs_con_AR=output_color(jobs_con.AR,jobs_con);
	var jobs_con_AZ=output_color(jobs_con.AZ,jobs_con);
	var jobs_con_CA=output_color(jobs_con.CA,jobs_con);
	var jobs_con_CO=output_color(jobs_con.CO,jobs_con);
	var jobs_con_CT=output_color(jobs_con.CT,jobs_con);
	var jobs_con_DC=output_color(jobs_con.DC,jobs_con);
	var jobs_con_DE=output_color(jobs_con.DE,jobs_con);
	var jobs_con_FL=output_color(jobs_con.FL,jobs_con);
	var jobs_con_GA=output_color(jobs_con.GA,jobs_con);
	var jobs_con_HI=output_color(jobs_con.HI,jobs_con);
	var jobs_con_IA=output_color(jobs_con.IA,jobs_con);
	var jobs_con_ID=output_color(jobs_con.ID,jobs_con);
	var jobs_con_IL=output_color(jobs_con.IL,jobs_con);
	var jobs_con_IN=output_color(jobs_con.IN,jobs_con);
	var jobs_con_KS=output_color(jobs_con.KS,jobs_con);
	var jobs_con_KY=output_color(jobs_con.KY,jobs_con);
	var jobs_con_LA=output_color(jobs_con.LA,jobs_con);
	var jobs_con_MA=output_color(jobs_con.MA,jobs_con);
	var jobs_con_ME=output_color(jobs_con.ME,jobs_con);
	var jobs_con_MD=output_color(jobs_con.MD,jobs_con);
	var jobs_con_MI=output_color(jobs_con.MI,jobs_con);
	var jobs_con_MN=output_color(jobs_con.MN,jobs_con);
	var jobs_con_MO=output_color(jobs_con.MO,jobs_con);
	var jobs_con_MS=output_color(jobs_con.MS,jobs_con);
	var jobs_con_NC=output_color(jobs_con.NC,jobs_con);
	var jobs_con_ND=output_color(jobs_con.ND,jobs_con);
	var jobs_con_NE=output_color(jobs_con.NE,jobs_con);
	var jobs_con_NH=output_color(jobs_con.NH,jobs_con);
	var jobs_con_NJ=output_color(jobs_con.NJ,jobs_con);
	var jobs_con_NM=output_color(jobs_con.NM,jobs_con);
	var jobs_con_NV=output_color(jobs_con.NV,jobs_con);
	var jobs_con_NY=output_color(jobs_con.NY,jobs_con);
	var jobs_con_OH=output_color(jobs_con.OH,jobs_con);
	var jobs_con_OK=output_color(jobs_con.OK,jobs_con);
	var jobs_con_OR=output_color(jobs_con.OR,jobs_con);
	var jobs_con_PA=output_color(jobs_con.PA,jobs_con);
	var jobs_con_RI=output_color(jobs_con.RI,jobs_con);
	var jobs_con_SC=output_color(jobs_con.SC,jobs_con);
	var jobs_con_SD=output_color(jobs_con.SD,jobs_con);
	var jobs_con_TN=output_color(jobs_con.TN,jobs_con);
	var jobs_con_TX=output_color(jobs_con.TX,jobs_con);
	var jobs_con_UT=output_color(jobs_con.UT,jobs_con);
	var jobs_con_VA=output_color(jobs_con.VA,jobs_con);
	var jobs_con_VT=output_color(jobs_con.VT,jobs_con);
	var jobs_con_WA=output_color(jobs_con.WA,jobs_con);
	var jobs_con_WI=output_color(jobs_con.MI,jobs_con);
	var jobs_con_WV=output_color(jobs_con.WV,jobs_con);
	var jobs_con_WY=output_color(jobs_con.WY,jobs_con);

	//jobs_auth
	var jobs_auth_AK=output_color(jobs_auth.AK,jobs_auth);
	var jobs_auth_AL=output_color(jobs_auth.AL,jobs_auth);
	var jobs_auth_AR=output_color(jobs_auth.AR,jobs_auth);
	var jobs_auth_AZ=output_color(jobs_auth.AZ,jobs_auth);
	var jobs_auth_CA=output_color(jobs_auth.CA,jobs_auth);
	var jobs_auth_CO=output_color(jobs_auth.CO,jobs_auth);
	var jobs_auth_CT=output_color(jobs_auth.CT,jobs_auth);
	var jobs_auth_DC=output_color(jobs_auth.DC,jobs_auth);
	var jobs_auth_DE=output_color(jobs_auth.DE,jobs_auth);
	var jobs_auth_FL=output_color(jobs_auth.FL,jobs_auth);
	var jobs_auth_GA=output_color(jobs_auth.GA,jobs_auth);
	var jobs_auth_HI=output_color(jobs_auth.HI,jobs_auth);
	var jobs_auth_IA=output_color(jobs_auth.IA,jobs_auth);
	var jobs_auth_ID=output_color(jobs_auth.ID,jobs_auth);
	var jobs_auth_IL=output_color(jobs_auth.IL,jobs_auth);
	var jobs_auth_IN=output_color(jobs_auth.IN,jobs_auth);
	var jobs_auth_KS=output_color(jobs_auth.KS,jobs_auth);
	var jobs_auth_KY=output_color(jobs_auth.KY,jobs_auth);
	var jobs_auth_LA=output_color(jobs_auth.LA,jobs_auth);
	var jobs_auth_MA=output_color(jobs_auth.MA,jobs_auth);
	var jobs_auth_ME=output_color(jobs_auth.ME,jobs_auth);
	var jobs_auth_MD=output_color(jobs_auth.MD,jobs_auth);
	var jobs_auth_MI=output_color(jobs_auth.MI,jobs_auth);
	var jobs_auth_MN=output_color(jobs_auth.MN,jobs_auth);
	var jobs_auth_MO=output_color(jobs_auth.MO,jobs_auth);
	var jobs_auth_MS=output_color(jobs_auth.MS,jobs_auth);
	var jobs_auth_NC=output_color(jobs_auth.NC,jobs_auth);
	var jobs_auth_ND=output_color(jobs_auth.ND,jobs_auth);
	var jobs_auth_NE=output_color(jobs_auth.NE,jobs_auth);
	var jobs_auth_NH=output_color(jobs_auth.NH,jobs_auth);
	var jobs_auth_NJ=output_color(jobs_auth.NJ,jobs_auth);
	var jobs_auth_NM=output_color(jobs_auth.NM,jobs_auth);
	var jobs_auth_NV=output_color(jobs_auth.NV,jobs_auth);
	var jobs_auth_NY=output_color(jobs_auth.NY,jobs_auth);
	var jobs_auth_OH=output_color(jobs_auth.OH,jobs_auth);
	var jobs_auth_OK=output_color(jobs_auth.OK,jobs_auth);
	var jobs_auth_OR=output_color(jobs_auth.OR,jobs_auth);
	var jobs_auth_PA=output_color(jobs_auth.PA,jobs_auth);
	var jobs_auth_RI=output_color(jobs_auth.RI,jobs_auth);
	var jobs_auth_SC=output_color(jobs_auth.SC,jobs_auth);
	var jobs_auth_SD=output_color(jobs_auth.SD,jobs_auth);
	var jobs_auth_TN=output_color(jobs_auth.TN,jobs_auth);
	var jobs_auth_TX=output_color(jobs_auth.TX,jobs_auth);
	var jobs_auth_UT=output_color(jobs_auth.UT,jobs_auth);
	var jobs_auth_VA=output_color(jobs_auth.VA,jobs_auth);
	var jobs_auth_VT=output_color(jobs_auth.VT,jobs_auth);
	var jobs_auth_WA=output_color(jobs_auth.WA,jobs_auth);
	var jobs_auth_WI=output_color(jobs_auth.MI,jobs_auth);
	var jobs_auth_WV=output_color(jobs_auth.WV,jobs_auth);
	var jobs_auth_WY=output_color(jobs_auth.WY,jobs_auth);

	//eng_con
	var eng_con_AK=output_color(eng_con.AK,eng_con);
	var eng_con_AL=output_color(eng_con.AL,eng_con);
	var eng_con_AR=output_color(eng_con.AR,eng_con);
	var eng_con_AZ=output_color(eng_con.AZ,eng_con);
	var eng_con_CA=output_color(eng_con.CA,eng_con);
	var eng_con_CO=output_color(eng_con.CO,eng_con);
	var eng_con_CT=output_color(eng_con.CT,eng_con);
	var eng_con_DC=output_color(eng_con.DC,eng_con);
	var eng_con_DE=output_color(eng_con.DE,eng_con);
	var eng_con_FL=output_color(eng_con.FL,eng_con);
	var eng_con_GA=output_color(eng_con.GA,eng_con);
	var eng_con_HI=output_color(eng_con.HI,eng_con);
	var eng_con_IA=output_color(eng_con.IA,eng_con);
	var eng_con_ID=output_color(eng_con.ID,eng_con);
	var eng_con_IL=output_color(eng_con.IL,eng_con);
	var eng_con_IN=output_color(eng_con.IN,eng_con);
	var eng_con_KS=output_color(eng_con.KS,eng_con);
	var eng_con_KY=output_color(eng_con.KY,eng_con);
	var eng_con_LA=output_color(eng_con.LA,eng_con);
	var eng_con_MA=output_color(eng_con.MA,eng_con);
	var eng_con_ME=output_color(eng_con.ME,eng_con);
	var eng_con_MD=output_color(eng_con.MD,eng_con);
	var eng_con_MI=output_color(eng_con.MI,eng_con);
	var eng_con_MN=output_color(eng_con.MN,eng_con);
	var eng_con_MO=output_color(eng_con.MO,eng_con);
	var eng_con_MS=output_color(eng_con.MS,eng_con);
	var eng_con_NC=output_color(eng_con.NC,eng_con);
	var eng_con_ND=output_color(eng_con.ND,eng_con);
	var eng_con_NE=output_color(eng_con.NE,eng_con);
	var eng_con_NH=output_color(eng_con.NH,eng_con);
	var eng_con_NJ=output_color(eng_con.NJ,eng_con);
	var eng_con_NM=output_color(eng_con.NM,eng_con);
	var eng_con_NV=output_color(eng_con.NV,eng_con);
	var eng_con_NY=output_color(eng_con.NY,eng_con);
	var eng_con_OH=output_color(eng_con.OH,eng_con);
	var eng_con_OK=output_color(eng_con.OK,eng_con);
	var eng_con_OR=output_color(eng_con.OR,eng_con);
	var eng_con_PA=output_color(eng_con.PA,eng_con);
	var eng_con_RI=output_color(eng_con.RI,eng_con);
	var eng_con_SC=output_color(eng_con.SC,eng_con);
	var eng_con_SD=output_color(eng_con.SD,eng_con);
	var eng_con_TN=output_color(eng_con.TN,eng_con);
	var eng_con_TX=output_color(eng_con.TX,eng_con);
	var eng_con_UT=output_color(eng_con.UT,eng_con);
	var eng_con_VA=output_color(eng_con.VA,eng_con);
	var eng_con_VT=output_color(eng_con.VT,eng_con);
	var eng_con_WA=output_color(eng_con.WA,eng_con);
	var eng_con_WI=output_color(eng_con.MI,eng_con);
	var eng_con_WV=output_color(eng_con.WV,eng_con);
	var eng_con_WY=output_color(eng_con.WY,eng_con);

	//eng_auth
	var eng_auth_AK=output_color(eng_auth.AK,eng_auth);
	var eng_auth_AL=output_color(eng_auth.AL,eng_auth);
	var eng_auth_AR=output_color(eng_auth.AR,eng_auth);
	var eng_auth_AZ=output_color(eng_auth.AZ,eng_auth);
	var eng_auth_CA=output_color(eng_auth.CA,eng_auth);
	var eng_auth_CO=output_color(eng_auth.CO,eng_auth);
	var eng_auth_CT=output_color(eng_auth.CT,eng_auth);
	var eng_auth_DC=output_color(eng_auth.DC,eng_auth);
	var eng_auth_DE=output_color(eng_auth.DE,eng_auth);
	var eng_auth_FL=output_color(eng_auth.FL,eng_auth);
	var eng_auth_GA=output_color(eng_auth.GA,eng_auth);
	var eng_auth_HI=output_color(eng_auth.HI,eng_auth);
	var eng_auth_IA=output_color(eng_auth.IA,eng_auth);
	var eng_auth_ID=output_color(eng_auth.ID,eng_auth);
	var eng_auth_IL=output_color(eng_auth.IL,eng_auth);
	var eng_auth_IN=output_color(eng_auth.IN,eng_auth);
	var eng_auth_KS=output_color(eng_auth.KS,eng_auth);
	var eng_auth_KY=output_color(eng_auth.KY,eng_auth);
	var eng_auth_LA=output_color(eng_auth.LA,eng_auth);
	var eng_auth_MA=output_color(eng_auth.MA,eng_auth);
	var eng_auth_ME=output_color(eng_auth.ME,eng_auth);
	var eng_auth_MD=output_color(eng_auth.MD,eng_auth);
	var eng_auth_MI=output_color(eng_auth.MI,eng_auth);
	var eng_auth_MN=output_color(eng_auth.MN,eng_auth);
	var eng_auth_MO=output_color(eng_auth.MO,eng_auth);
	var eng_auth_MS=output_color(eng_auth.MS,eng_auth);
	var eng_auth_NC=output_color(eng_auth.NC,eng_auth);
	var eng_auth_ND=output_color(eng_auth.ND,eng_auth);
	var eng_auth_NE=output_color(eng_auth.NE,eng_auth);
	var eng_auth_NH=output_color(eng_auth.NH,eng_auth);
	var eng_auth_NJ=output_color(eng_auth.NJ,eng_auth);
	var eng_auth_NM=output_color(eng_auth.NM,eng_auth);
	var eng_auth_NV=output_color(eng_auth.NV,eng_auth);
	var eng_auth_NY=output_color(eng_auth.NY,eng_auth);
	var eng_auth_OH=output_color(eng_auth.OH,eng_auth);
	var eng_auth_OK=output_color(eng_auth.OK,eng_auth);
	var eng_auth_OR=output_color(eng_auth.OR,eng_auth);
	var eng_auth_PA=output_color(eng_auth.PA,eng_auth);
	var eng_auth_RI=output_color(eng_auth.RI,eng_auth);
	var eng_auth_SC=output_color(eng_auth.SC,eng_auth);
	var eng_auth_SD=output_color(eng_auth.SD,eng_auth);
	var eng_auth_TN=output_color(eng_auth.TN,eng_auth);
	var eng_auth_TX=output_color(eng_auth.TX,eng_auth);
	var eng_auth_UT=output_color(eng_auth.UT,eng_auth);
	var eng_auth_VA=output_color(eng_auth.VA,eng_auth);
	var eng_auth_VT=output_color(eng_auth.VT,eng_auth);
	var eng_auth_WA=output_color(eng_auth.WA,eng_auth);
	var eng_auth_WI=output_color(eng_auth.MI,eng_auth);
	var eng_auth_WV=output_color(eng_auth.WV,eng_auth);
	var eng_auth_WY=output_color(eng_auth.WY,eng_auth);



	//wel_con
	var wel_con_AK=output_color(wel_con.AK,wel_con);
	var wel_con_AL=output_color(wel_con.AL,wel_con);
	var wel_con_AR=output_color(wel_con.AR,wel_con);
	var wel_con_AZ=output_color(wel_con.AZ,wel_con);
	var wel_con_CA=output_color(wel_con.CA,wel_con);
	var wel_con_CO=output_color(wel_con.CO,wel_con);
	var wel_con_CT=output_color(wel_con.CT,wel_con);
	var wel_con_DC=output_color(wel_con.DC,wel_con);
	var wel_con_DE=output_color(wel_con.DE,wel_con);
	var wel_con_FL=output_color(wel_con.FL,wel_con);
	var wel_con_GA=output_color(wel_con.GA,wel_con);
	var wel_con_HI=output_color(wel_con.HI,wel_con);
	var wel_con_IA=output_color(wel_con.IA,wel_con);
	var wel_con_ID=output_color(wel_con.ID,wel_con);
	var wel_con_IL=output_color(wel_con.IL,wel_con);
	var wel_con_IN=output_color(wel_con.IN,wel_con);
	var wel_con_KS=output_color(wel_con.KS,wel_con);
	var wel_con_KY=output_color(wel_con.KY,wel_con);
	var wel_con_LA=output_color(wel_con.LA,wel_con);
	var wel_con_MA=output_color(wel_con.MA,wel_con);
	var wel_con_ME=output_color(wel_con.ME,wel_con);
	var wel_con_MD=output_color(wel_con.MD,wel_con);
	var wel_con_MI=output_color(wel_con.MI,wel_con);
	var wel_con_MN=output_color(wel_con.MN,wel_con);
	var wel_con_MO=output_color(wel_con.MO,wel_con);
	var wel_con_MS=output_color(wel_con.MS,wel_con);
	var wel_con_NC=output_color(wel_con.NC,wel_con);
	var wel_con_ND=output_color(wel_con.ND,wel_con);
	var wel_con_NE=output_color(wel_con.NE,wel_con);
	var wel_con_NH=output_color(wel_con.NH,wel_con);
	var wel_con_NJ=output_color(wel_con.NJ,wel_con);
	var wel_con_NM=output_color(wel_con.NM,wel_con);
	var wel_con_NV=output_color(wel_con.NV,wel_con);
	var wel_con_NY=output_color(wel_con.NY,wel_con);
	var wel_con_OH=output_color(wel_con.OH,wel_con);
	var wel_con_OK=output_color(wel_con.OK,wel_con);
	var wel_con_OR=output_color(wel_con.OR,wel_con);
	var wel_con_PA=output_color(wel_con.PA,wel_con);
	var wel_con_RI=output_color(wel_con.RI,wel_con);
	var wel_con_SC=output_color(wel_con.SC,wel_con);
	var wel_con_SD=output_color(wel_con.SD,wel_con);
	var wel_con_TN=output_color(wel_con.TN,wel_con);
	var wel_con_TX=output_color(wel_con.TX,wel_con);
	var wel_con_UT=output_color(wel_con.UT,wel_con);
	var wel_con_VA=output_color(wel_con.VA,wel_con);
	var wel_con_VT=output_color(wel_con.VT,wel_con);
	var wel_con_WA=output_color(wel_con.WA,wel_con);
	var wel_con_WI=output_color(wel_con.MI,wel_con);
	var wel_con_WV=output_color(wel_con.WV,wel_con);
	var wel_con_WY=output_color(wel_con.WY,wel_con);


	//wel_auth
	var wel_auth_AK=output_color(wel_auth.AK,wel_auth);
	var wel_auth_AL=output_color(wel_auth.AL,wel_auth);
	var wel_auth_AR=output_color(wel_auth.AR,wel_auth);
	var wel_auth_AZ=output_color(wel_auth.AZ,wel_auth);
	var wel_auth_CA=output_color(wel_auth.CA,wel_auth);
	var wel_auth_CO=output_color(wel_auth.CO,wel_auth);
	var wel_auth_CT=output_color(wel_auth.CT,wel_auth);
	var wel_auth_DC=output_color(wel_auth.DC,wel_auth);
	var wel_auth_DE=output_color(wel_auth.DE,wel_auth);
	var wel_auth_FL=output_color(wel_auth.FL,wel_auth);
	var wel_auth_GA=output_color(wel_auth.GA,wel_auth);
	var wel_auth_HI=output_color(wel_auth.HI,wel_auth);
	var wel_auth_IA=output_color(wel_auth.IA,wel_auth);
	var wel_auth_ID=output_color(wel_auth.ID,wel_auth);
	var wel_auth_IL=output_color(wel_auth.IL,wel_auth);
	var wel_auth_IN=output_color(wel_auth.IN,wel_auth);
	var wel_auth_KS=output_color(wel_auth.KS,wel_auth);
	var wel_auth_KY=output_color(wel_auth.KY,wel_auth);
	var wel_auth_LA=output_color(wel_auth.LA,wel_auth);
	var wel_auth_MA=output_color(wel_auth.MA,wel_auth);
	var wel_auth_ME=output_color(wel_auth.ME,wel_auth);
	var wel_auth_MD=output_color(wel_auth.MD,wel_auth);
	var wel_auth_MI=output_color(wel_auth.MI,wel_auth);
	var wel_auth_MN=output_color(wel_auth.MN,wel_auth);
	var wel_auth_MO=output_color(wel_auth.MO,wel_auth);
	var wel_auth_MS=output_color(wel_auth.MS,wel_auth);
	var wel_auth_NC=output_color(wel_auth.NC,wel_auth);
	var wel_auth_ND=output_color(wel_auth.ND,wel_auth);
	var wel_auth_NE=output_color(wel_auth.NE,wel_auth);
	var wel_auth_NH=output_color(wel_auth.NH,wel_auth);
	var wel_auth_NJ=output_color(wel_auth.NJ,wel_auth);
	var wel_auth_NM=output_color(wel_auth.NM,wel_auth);
	var wel_auth_NV=output_color(wel_auth.NV,wel_auth);
	var wel_auth_NY=output_color(wel_auth.NY,wel_auth);
	var wel_auth_OH=output_color(wel_auth.OH,wel_auth);
	var wel_auth_OK=output_color(wel_auth.OK,wel_auth);
	var wel_auth_OR=output_color(wel_auth.OR,wel_auth);
	var wel_auth_PA=output_color(wel_auth.PA,wel_auth);
	var wel_auth_RI=output_color(wel_auth.RI,wel_auth);
	var wel_auth_SC=output_color(wel_auth.SC,wel_auth);
	var wel_auth_SD=output_color(wel_auth.SD,wel_auth);
	var wel_auth_TN=output_color(wel_auth.TN,wel_auth);
	var wel_auth_TX=output_color(wel_auth.TX,wel_auth);
	var wel_auth_UT=output_color(wel_auth.UT,wel_auth);
	var wel_auth_VA=output_color(wel_auth.VA,wel_auth);
	var wel_auth_VT=output_color(wel_auth.VT,wel_auth);
	var wel_auth_WA=output_color(wel_auth.WA,wel_auth);
	var wel_auth_WI=output_color(wel_auth.MI,wel_auth);
	var wel_auth_WV=output_color(wel_auth.WV,wel_auth);
	var wel_auth_WY=output_color(wel_auth.WY,wel_auth);


	//heath_con
	var hea_con_AK=output_color(hea_con.AK,hea_con);
	var hea_con_AL=output_color(hea_con.AL,hea_con);
	var hea_con_AR=output_color(hea_con.AR,hea_con);
	var hea_con_AZ=output_color(hea_con.AZ,hea_con);
	var hea_con_CA=output_color(hea_con.CA,hea_con);
	var hea_con_CO=output_color(hea_con.CO,hea_con);
	var hea_con_CT=output_color(hea_con.CT,hea_con);
	var hea_con_DC=output_color(hea_con.DC,hea_con);
	var hea_con_DE=output_color(hea_con.DE,hea_con);
	var hea_con_FL=output_color(hea_con.FL,hea_con);
	var hea_con_GA=output_color(hea_con.GA,hea_con);
	var hea_con_HI=output_color(hea_con.HI,hea_con);
	var hea_con_IA=output_color(hea_con.IA,hea_con);
	var hea_con_ID=output_color(hea_con.ID,hea_con);
	var hea_con_IL=output_color(hea_con.IL,hea_con);
	var hea_con_IN=output_color(hea_con.IN,hea_con);
	var hea_con_KS=output_color(hea_con.KS,hea_con);
	var hea_con_KY=output_color(hea_con.KY,hea_con);
	var hea_con_LA=output_color(hea_con.LA,hea_con);
	var hea_con_MA=output_color(hea_con.MA,hea_con);
	var hea_con_ME=output_color(hea_con.ME,hea_con);
	var hea_con_MD=output_color(hea_con.MD,hea_con);
	var hea_con_MI=output_color(hea_con.MI,hea_con);
	var hea_con_MN=output_color(hea_con.MN,hea_con);
	var hea_con_MO=output_color(hea_con.MO,hea_con);
	var hea_con_MS=output_color(hea_con.MS,hea_con);
	var hea_con_NC=output_color(hea_con.NC,hea_con);
	var hea_con_ND=output_color(hea_con.ND,hea_con);
	var hea_con_NE=output_color(hea_con.NE,hea_con);
	var hea_con_NH=output_color(hea_con.NH,hea_con);
	var hea_con_NJ=output_color(hea_con.NJ,hea_con);
	var hea_con_NM=output_color(hea_con.NM,hea_con);
	var hea_con_NV=output_color(hea_con.NV,hea_con);
	var hea_con_NY=output_color(hea_con.NY,hea_con);
	var hea_con_OH=output_color(hea_con.OH,hea_con);
	var hea_con_OK=output_color(hea_con.OK,hea_con);
	var hea_con_OR=output_color(hea_con.OR,hea_con);
	var hea_con_PA=output_color(hea_con.PA,hea_con);
	var hea_con_RI=output_color(hea_con.RI,hea_con);
	var hea_con_SC=output_color(hea_con.SC,hea_con);
	var hea_con_SD=output_color(hea_con.SD,hea_con);
	var hea_con_TN=output_color(hea_con.TN,hea_con);
	var hea_con_TX=output_color(hea_con.TX,hea_con);
	var hea_con_UT=output_color(hea_con.UT,hea_con);
	var hea_con_VA=output_color(hea_con.VA,hea_con);
	var hea_con_VT=output_color(hea_con.VT,hea_con);
	var hea_con_WA=output_color(hea_con.WA,hea_con);
	var hea_con_WI=output_color(hea_con.MI,hea_con);
	var hea_con_WV=output_color(hea_con.WV,hea_con);
	var hea_con_WY=output_color(hea_con.WY,hea_con);

	//hea_auth
	var hea_auth_AK=output_color(hea_auth.AK,hea_auth);
	var hea_auth_AL=output_color(hea_auth.AL,hea_auth);
	var hea_auth_AR=output_color(hea_auth.AR,hea_auth);
	var hea_auth_AZ=output_color(hea_auth.AZ,hea_auth);
	var hea_auth_CA=output_color(hea_auth.CA,hea_auth);
	var hea_auth_CO=output_color(hea_auth.CO,hea_auth);
	var hea_auth_CT=output_color(hea_auth.CT,hea_auth);
	var hea_auth_DC=output_color(hea_auth.DC,hea_auth);
	var hea_auth_DE=output_color(hea_auth.DE,hea_auth);
	var hea_auth_FL=output_color(hea_auth.FL,hea_auth);
	var hea_auth_GA=output_color(hea_auth.GA,hea_auth);
	var hea_auth_HI=output_color(hea_auth.HI,hea_auth);
	var hea_auth_IA=output_color(hea_auth.IA,hea_auth);
	var hea_auth_ID=output_color(hea_auth.ID,hea_auth);
	var hea_auth_IL=output_color(hea_auth.IL,hea_auth);
	var hea_auth_IN=output_color(hea_auth.IN,hea_auth);
	var hea_auth_KS=output_color(hea_auth.KS,hea_auth);
	var hea_auth_KY=output_color(hea_auth.KY,hea_auth);
	var hea_auth_LA=output_color(hea_auth.LA,hea_auth);
	var hea_auth_MA=output_color(hea_auth.MA,hea_auth);
	var hea_auth_ME=output_color(hea_auth.ME,hea_auth);
	var hea_auth_MD=output_color(hea_auth.MD,hea_auth);
	var hea_auth_MI=output_color(hea_auth.MI,hea_auth);
	var hea_auth_MN=output_color(hea_auth.MN,hea_auth);
	var hea_auth_MO=output_color(hea_auth.MO,hea_auth);
	var hea_auth_MS=output_color(hea_auth.MS,hea_auth);
	var hea_auth_NC=output_color(hea_auth.NC,hea_auth);
	var hea_auth_ND=output_color(hea_auth.ND,hea_auth);
	var hea_auth_NE=output_color(hea_auth.NE,hea_auth);
	var hea_auth_NH=output_color(hea_auth.NH,hea_auth);
	var hea_auth_NJ=output_color(hea_auth.NJ,hea_auth);
	var hea_auth_NM=output_color(hea_auth.NM,hea_auth);
	var hea_auth_NV=output_color(hea_auth.NV,hea_auth);
	var hea_auth_NY=output_color(hea_auth.NY,hea_auth);
	var hea_auth_OH=output_color(hea_auth.OH,hea_auth);
	var hea_auth_OK=output_color(hea_auth.OK,hea_auth);
	var hea_auth_OR=output_color(hea_auth.OR,hea_auth);
	var hea_auth_PA=output_color(hea_auth.PA,hea_auth);
	var hea_auth_RI=output_color(hea_auth.RI,hea_auth);
	var hea_auth_SC=output_color(hea_auth.SC,hea_auth);
	var hea_auth_SD=output_color(hea_auth.SD,hea_auth);
	var hea_auth_TN=output_color(hea_auth.TN,hea_auth);
	var hea_auth_TX=output_color(hea_auth.TX,hea_auth);
	var hea_auth_UT=output_color(hea_auth.UT,hea_auth);
	var hea_auth_VA=output_color(hea_auth.VA,hea_auth);
	var hea_auth_VT=output_color(hea_auth.VT,hea_auth);
	var hea_auth_WA=output_color(hea_auth.WA,hea_auth);
	var hea_auth_WI=output_color(hea_auth.MI,hea_auth);
	var hea_auth_WV=output_color(hea_auth.WV,hea_auth);
	var hea_auth_WY=output_color(hea_auth.WY,hea_auth);


	//gov_con
	var gov_con_AK=output_color(gov_con.AK,gov_con);
	var gov_con_AL=output_color(gov_con.AL,gov_con);
	var gov_con_AR=output_color(gov_con.AR,gov_con);
	var gov_con_AZ=output_color(gov_con.AZ,gov_con);
	var gov_con_CA=output_color(gov_con.CA,gov_con);
	var gov_con_CO=output_color(gov_con.CO,gov_con);
	var gov_con_CT=output_color(gov_con.CT,gov_con);
	var gov_con_DC=output_color(gov_con.DC,gov_con);
	var gov_con_DE=output_color(gov_con.DE,gov_con);
	var gov_con_FL=output_color(gov_con.FL,gov_con);
	var gov_con_GA=output_color(gov_con.GA,gov_con);
	var gov_con_HI=output_color(gov_con.HI,gov_con);
	var gov_con_IA=output_color(gov_con.IA,gov_con);
	var gov_con_ID=output_color(gov_con.ID,gov_con);
	var gov_con_IL=output_color(gov_con.IL,gov_con);
	var gov_con_IN=output_color(gov_con.IN,gov_con);
	var gov_con_KS=output_color(gov_con.KS,gov_con);
	var gov_con_KY=output_color(gov_con.KY,gov_con);
	var gov_con_LA=output_color(gov_con.LA,gov_con);
	var gov_con_MA=output_color(gov_con.MA,gov_con);
	var gov_con_ME=output_color(gov_con.ME,gov_con);
	var gov_con_MD=output_color(gov_con.MD,gov_con);
	var gov_con_MI=output_color(gov_con.MI,gov_con);
	var gov_con_MN=output_color(gov_con.MN,gov_con);
	var gov_con_MO=output_color(gov_con.MO,gov_con);
	var gov_con_MS=output_color(gov_con.MS,gov_con);
	var gov_con_NC=output_color(gov_con.NC,gov_con);
	var gov_con_ND=output_color(gov_con.ND,gov_con);
	var gov_con_NE=output_color(gov_con.NE,gov_con);
	var gov_con_NH=output_color(gov_con.NH,gov_con);
	var gov_con_NJ=output_color(gov_con.NJ,gov_con);
	var gov_con_NM=output_color(gov_con.NM,gov_con);
	var gov_con_NV=output_color(gov_con.NV,gov_con);
	var gov_con_NY=output_color(gov_con.NY,gov_con);
	var gov_con_OH=output_color(gov_con.OH,gov_con);
	var gov_con_OK=output_color(gov_con.OK,gov_con);
	var gov_con_OR=output_color(gov_con.OR,gov_con);
	var gov_con_PA=output_color(gov_con.PA,gov_con);
	var gov_con_RI=output_color(gov_con.RI,gov_con);
	var gov_con_SC=output_color(gov_con.SC,gov_con);
	var gov_con_SD=output_color(gov_con.SD,gov_con);
	var gov_con_TN=output_color(gov_con.TN,gov_con);
	var gov_con_TX=output_color(gov_con.TX,gov_con);
	var gov_con_UT=output_color(gov_con.UT,gov_con);
	var gov_con_VA=output_color(gov_con.VA,gov_con);
	var gov_con_VT=output_color(gov_con.VT,gov_con);
	var gov_con_WA=output_color(gov_con.WA,gov_con);
	var gov_con_WI=output_color(gov_con.MI,gov_con);
	var gov_con_WV=output_color(gov_con.WV,gov_con);
	var gov_con_WY=output_color(gov_con.WY,gov_con);

	//gov_auth
	var gov_auth_AK=output_color(gov_auth.AK,gov_auth);
	var gov_auth_AL=output_color(gov_auth.AL,gov_auth);
	var gov_auth_AR=output_color(gov_auth.AR,gov_auth);
	var gov_auth_AZ=output_color(gov_auth.AZ,gov_auth);
	var gov_auth_CA=output_color(gov_auth.CA,gov_auth);
	var gov_auth_CO=output_color(gov_auth.CO,gov_auth);
	var gov_auth_CT=output_color(gov_auth.CT,gov_auth);
	var gov_auth_DC=output_color(gov_auth.DC,gov_auth);
	var gov_auth_DE=output_color(gov_auth.DE,gov_auth);
	var gov_auth_FL=output_color(gov_auth.FL,gov_auth);
	var gov_auth_GA=output_color(gov_auth.GA,gov_auth);
	var gov_auth_HI=output_color(gov_auth.HI,gov_auth);
	var gov_auth_IA=output_color(gov_auth.IA,gov_auth);
	var gov_auth_ID=output_color(gov_auth.ID,gov_auth);
	var gov_auth_IL=output_color(gov_auth.IL,gov_auth);
	var gov_auth_IN=output_color(gov_auth.IN,gov_auth);
	var gov_auth_KS=output_color(gov_auth.KS,gov_auth);
	var gov_auth_KY=output_color(gov_auth.KY,gov_auth);
	var gov_auth_LA=output_color(gov_auth.LA,gov_auth);
	var gov_auth_MA=output_color(gov_auth.MA,gov_auth);
	var gov_auth_ME=output_color(gov_auth.ME,gov_auth);
	var gov_auth_MD=output_color(gov_auth.MD,gov_auth);
	var gov_auth_MI=output_color(gov_auth.MI,gov_auth);
	var gov_auth_MN=output_color(gov_auth.MN,gov_auth);
	var gov_auth_MO=output_color(gov_auth.MO,gov_auth);
	var gov_auth_MS=output_color(gov_auth.MS,gov_auth);
	var gov_auth_NC=output_color(gov_auth.NC,gov_auth);
	var gov_auth_ND=output_color(gov_auth.ND,gov_auth);
	var gov_auth_NE=output_color(gov_auth.NE,gov_auth);
	var gov_auth_NH=output_color(gov_auth.NH,gov_auth);
	var gov_auth_NJ=output_color(gov_auth.NJ,gov_auth);
	var gov_auth_NM=output_color(gov_auth.NM,gov_auth);
	var gov_auth_NV=output_color(gov_auth.NV,gov_auth);
	var gov_auth_NY=output_color(gov_auth.NY,gov_auth);
	var gov_auth_OH=output_color(gov_auth.OH,gov_auth);
	var gov_auth_OK=output_color(gov_auth.OK,gov_auth);
	var gov_auth_OR=output_color(gov_auth.OR,gov_auth);
	var gov_auth_PA=output_color(gov_auth.PA,gov_auth);
	var gov_auth_RI=output_color(gov_auth.RI,gov_auth);
	var gov_auth_SC=output_color(gov_auth.SC,gov_auth);
	var gov_auth_SD=output_color(gov_auth.SD,gov_auth);
	var gov_auth_TN=output_color(gov_auth.TN,gov_auth);
	var gov_auth_TX=output_color(gov_auth.TX,gov_auth);
	var gov_auth_UT=output_color(gov_auth.UT,gov_auth);
	var gov_auth_VA=output_color(gov_auth.VA,gov_auth);
	var gov_auth_VT=output_color(gov_auth.VT,gov_auth);
	var gov_auth_WA=output_color(gov_auth.WA,gov_auth);
	var gov_auth_WI=output_color(gov_auth.MI,gov_auth);
	var gov_auth_WV=output_color(gov_auth.WV,gov_auth);
	var gov_auth_WY=output_color(gov_auth.WY,gov_auth);

	//env_con
	var env_con_AK=output_color(env_con.AK,env_con);
	var env_con_AL=output_color(env_con.AL,env_con);
	var env_con_AR=output_color(env_con.AR,env_con);
	var env_con_AZ=output_color(env_con.AZ,env_con);
	var env_con_CA=output_color(env_con.CA,env_con);
	var env_con_CO=output_color(env_con.CO,env_con);
	var env_con_CT=output_color(env_con.CT,env_con);
	var env_con_DC=output_color(env_con.DC,env_con);
	var env_con_DE=output_color(env_con.DE,env_con);
	var env_con_FL=output_color(env_con.FL,env_con);
	var env_con_GA=output_color(env_con.GA,env_con);
	var env_con_HI=output_color(env_con.HI,env_con);
	var env_con_IA=output_color(env_con.IA,env_con);
	var env_con_ID=output_color(env_con.ID,env_con);
	var env_con_IL=output_color(env_con.IL,env_con);
	var env_con_IN=output_color(env_con.IN,env_con);
	var env_con_KS=output_color(env_con.KS,env_con);
	var env_con_KY=output_color(env_con.KY,env_con);
	var env_con_LA=output_color(env_con.LA,env_con);
	var env_con_MA=output_color(env_con.MA,env_con);
	var env_con_ME=output_color(env_con.ME,env_con);
	var env_con_MD=output_color(env_con.MD,env_con);
	var env_con_MI=output_color(env_con.MI,env_con);
	var env_con_MN=output_color(env_con.MN,env_con);
	var env_con_MO=output_color(env_con.MO,env_con);
	var env_con_MS=output_color(env_con.MS,env_con);
	var env_con_NC=output_color(env_con.NC,env_con);
	var env_con_ND=output_color(env_con.ND,env_con);
	var env_con_NE=output_color(env_con.NE,env_con);
	var env_con_NH=output_color(env_con.NH,env_con);
	var env_con_NJ=output_color(env_con.NJ,env_con);
	var env_con_NM=output_color(env_con.NM,env_con);
	var env_con_NV=output_color(env_con.NV,env_con);
	var env_con_NY=output_color(env_con.NY,env_con);
	var env_con_OH=output_color(env_con.OH,env_con);
	var env_con_OK=output_color(env_con.OK,env_con);
	var env_con_OR=output_color(env_con.OR,env_con);
	var env_con_PA=output_color(env_con.PA,env_con);
	var env_con_RI=output_color(env_con.RI,env_con);
	var env_con_SC=output_color(env_con.SC,env_con);
	var env_con_SD=output_color(env_con.SD,env_con);
	var env_con_TN=output_color(env_con.TN,env_con);
	var env_con_TX=output_color(env_con.TX,env_con);
	var env_con_UT=output_color(env_con.UT,env_con);
	var env_con_VA=output_color(env_con.VA,env_con);
	var env_con_VT=output_color(env_con.VT,env_con);
	var env_con_WA=output_color(env_con.WA,env_con);
	var env_con_WI=output_color(env_con.MI,env_con);
	var env_con_WV=output_color(env_con.WV,env_con);
	var env_con_WY=output_color(env_con.WY,env_con);

	//env_auth
	var env_auth_AK=output_color(env_auth.AK,env_auth);
	var env_auth_AL=output_color(env_auth.AL,env_auth);
	var env_auth_AR=output_color(env_auth.AR,env_auth);
	var env_auth_AZ=output_color(env_auth.AZ,env_auth);
	var env_auth_CA=output_color(env_auth.CA,env_auth);
	var env_auth_CO=output_color(env_auth.CO,env_auth);
	var env_auth_CT=output_color(env_auth.CT,env_auth);
	var env_auth_DC=output_color(env_auth.DC,env_auth);
	var env_auth_DE=output_color(env_auth.DE,env_auth);
	var env_auth_FL=output_color(env_auth.FL,env_auth);
	var env_auth_GA=output_color(env_auth.GA,env_auth);
	var env_auth_HI=output_color(env_auth.HI,env_auth);
	var env_auth_IA=output_color(env_auth.IA,env_auth);
	var env_auth_ID=output_color(env_auth.ID,env_auth);
	var env_auth_IL=output_color(env_auth.IL,env_auth);
	var env_auth_IN=output_color(env_auth.IN,env_auth);
	var env_auth_KS=output_color(env_auth.KS,env_auth);
	var env_auth_KY=output_color(env_auth.KY,env_auth);
	var env_auth_LA=output_color(env_auth.LA,env_auth);
	var env_auth_MA=output_color(env_auth.MA,env_auth);
	var env_auth_ME=output_color(env_auth.ME,env_auth);
	var env_auth_MD=output_color(env_auth.MD,env_auth);
	var env_auth_MI=output_color(env_auth.MI,env_auth);
	var env_auth_MN=output_color(env_auth.MN,env_auth);
	var env_auth_MO=output_color(env_auth.MO,env_auth);
	var env_auth_MS=output_color(env_auth.MS,env_auth);
	var env_auth_NC=output_color(env_auth.NC,env_auth);
	var env_auth_ND=output_color(env_auth.ND,env_auth);
	var env_auth_NE=output_color(env_auth.NE,env_auth);
	var env_auth_NH=output_color(env_auth.NH,env_auth);
	var env_auth_NJ=output_color(env_auth.NJ,env_auth);
	var env_auth_NM=output_color(env_auth.NM,env_auth);
	var env_auth_NV=output_color(env_auth.NV,env_auth);
	var env_auth_NY=output_color(env_auth.NY,env_auth);
	var env_auth_OH=output_color(env_auth.OH,env_auth);
	var env_auth_OK=output_color(env_auth.OK,env_auth);
	var env_auth_OR=output_color(env_auth.OR,env_auth);
	var env_auth_PA=output_color(env_auth.PA,env_auth);
	var env_auth_RI=output_color(env_auth.RI,env_auth);
	var env_auth_SC=output_color(env_auth.SC,env_auth);
	var env_auth_SD=output_color(env_auth.SD,env_auth);
	var env_auth_TN=output_color(env_auth.TN,env_auth);
	var env_auth_TX=output_color(env_auth.TX,env_auth);
	var env_auth_UT=output_color(env_auth.UT,env_auth);
	var env_auth_VA=output_color(env_auth.VA,env_auth);
	var env_auth_VT=output_color(env_auth.VT,env_auth);
	var env_auth_WA=output_color(env_auth.WA,env_auth);
	var env_auth_WI=output_color(env_auth.MI,env_auth);
	var env_auth_WV=output_color(env_auth.WV,env_auth);
	var env_auth_WY=output_color(env_auth.WY,env_auth);

	//fre_con
	var fre_con_AK=output_color(fre_con.AK,fre_con);
	var fre_con_AL=output_color(fre_con.AL,fre_con);
	var fre_con_AR=output_color(fre_con.AR,fre_con);
	var fre_con_AZ=output_color(fre_con.AZ,fre_con);
	var fre_con_CA=output_color(fre_con.CA,fre_con);
	var fre_con_CO=output_color(fre_con.CO,fre_con);
	var fre_con_CT=output_color(fre_con.CT,fre_con);
	var fre_con_DC=output_color(fre_con.DC,fre_con);
	var fre_con_DE=output_color(fre_con.DE,fre_con);
	var fre_con_FL=output_color(fre_con.FL,fre_con);
	var fre_con_GA=output_color(fre_con.GA,fre_con);
	var fre_con_HI=output_color(fre_con.HI,fre_con);
	var fre_con_IA=output_color(fre_con.IA,fre_con);
	var fre_con_ID=output_color(fre_con.ID,fre_con);
	var fre_con_IL=output_color(fre_con.IL,fre_con);
	var fre_con_IN=output_color(fre_con.IN,fre_con);
	var fre_con_KS=output_color(fre_con.KS,fre_con);
	var fre_con_KY=output_color(fre_con.KY,fre_con);
	var fre_con_LA=output_color(fre_con.LA,fre_con);
	var fre_con_MA=output_color(fre_con.MA,fre_con);
	var fre_con_ME=output_color(fre_con.ME,fre_con);
	var fre_con_MD=output_color(fre_con.MD,fre_con);
	var fre_con_MI=output_color(fre_con.MI,fre_con);
	var fre_con_MN=output_color(fre_con.MN,fre_con);
	var fre_con_MO=output_color(fre_con.MO,fre_con);
	var fre_con_MS=output_color(fre_con.MS,fre_con);
	var fre_con_NC=output_color(fre_con.NC,fre_con);
	var fre_con_ND=output_color(fre_con.ND,fre_con);
	var fre_con_NE=output_color(fre_con.NE,fre_con);
	var fre_con_NH=output_color(fre_con.NH,fre_con);
	var fre_con_NJ=output_color(fre_con.NJ,fre_con);
	var fre_con_NM=output_color(fre_con.NM,fre_con);
	var fre_con_NV=output_color(fre_con.NV,fre_con);
	var fre_con_NY=output_color(fre_con.NY,fre_con);
	var fre_con_OH=output_color(fre_con.OH,fre_con);
	var fre_con_OK=output_color(fre_con.OK,fre_con);
	var fre_con_OR=output_color(fre_con.OR,fre_con);
	var fre_con_PA=output_color(fre_con.PA,fre_con);
	var fre_con_RI=output_color(fre_con.RI,fre_con);
	var fre_con_SC=output_color(fre_con.SC,fre_con);
	var fre_con_SD=output_color(fre_con.SD,fre_con);
	var fre_con_TN=output_color(fre_con.TN,fre_con);
	var fre_con_TX=output_color(fre_con.TX,fre_con);
	var fre_con_UT=output_color(fre_con.UT,fre_con);
	var fre_con_VA=output_color(fre_con.VA,fre_con);
	var fre_con_VT=output_color(fre_con.VT,fre_con);
	var fre_con_WA=output_color(fre_con.WA,fre_con);
	var fre_con_WI=output_color(fre_con.MI,fre_con);
	var fre_con_WV=output_color(fre_con.WV,fre_con);
	var fre_con_WY=output_color(fre_con.WY,fre_con);

	//fre_auth
	var fre_auth_AK=output_color(fre_auth.AK,fre_auth);
	var fre_auth_AL=output_color(fre_auth.AL,fre_auth);
	var fre_auth_AR=output_color(fre_auth.AR,fre_auth);
	var fre_auth_AZ=output_color(fre_auth.AZ,fre_auth);
	var fre_auth_CA=output_color(fre_auth.CA,fre_auth);
	var fre_auth_CO=output_color(fre_auth.CO,fre_auth);
	var fre_auth_CT=output_color(fre_auth.CT,fre_auth);
	var fre_auth_DC=output_color(fre_auth.DC,fre_auth);
	var fre_auth_DE=output_color(fre_auth.DE,fre_auth);
	var fre_auth_FL=output_color(fre_auth.FL,fre_auth);
	var fre_auth_GA=output_color(fre_auth.GA,fre_auth);
	var fre_auth_HI=output_color(fre_auth.HI,fre_auth);
	var fre_auth_IA=output_color(fre_auth.IA,fre_auth);
	var fre_auth_ID=output_color(fre_auth.ID,fre_auth);
	var fre_auth_IL=output_color(fre_auth.IL,fre_auth);
	var fre_auth_IN=output_color(fre_auth.IN,fre_auth);
	var fre_auth_KS=output_color(fre_auth.KS,fre_auth);
	var fre_auth_KY=output_color(fre_auth.KY,fre_auth);
	var fre_auth_LA=output_color(fre_auth.LA,fre_auth);
	var fre_auth_MA=output_color(fre_auth.MA,fre_auth);
	var fre_auth_ME=output_color(fre_auth.ME,fre_auth);
	var fre_auth_MD=output_color(fre_auth.MD,fre_auth);
	var fre_auth_MI=output_color(fre_auth.MI,fre_auth);
	var fre_auth_MN=output_color(fre_auth.MN,fre_auth);
	var fre_auth_MO=output_color(fre_auth.MO,fre_auth);
	var fre_auth_MS=output_color(fre_auth.MS,fre_auth);
	var fre_auth_NC=output_color(fre_auth.NC,fre_auth);
	var fre_auth_ND=output_color(fre_auth.ND,fre_auth);
	var fre_auth_NE=output_color(fre_auth.NE,fre_auth);
	var fre_auth_NH=output_color(fre_auth.NH,fre_auth);
	var fre_auth_NJ=output_color(fre_auth.NJ,fre_auth);
	var fre_auth_NM=output_color(fre_auth.NM,fre_auth);
	var fre_auth_NV=output_color(fre_auth.NV,fre_auth);
	var fre_auth_NY=output_color(fre_auth.NY,fre_auth);
	var fre_auth_OH=output_color(fre_auth.OH,fre_auth);
	var fre_auth_OK=output_color(fre_auth.OK,fre_auth);
	var fre_auth_OR=output_color(fre_auth.OR,fre_auth);
	var fre_auth_PA=output_color(fre_auth.PA,fre_auth);
	var fre_auth_RI=output_color(fre_auth.RI,fre_auth);
	var fre_auth_SC=output_color(fre_auth.SC,fre_auth);
	var fre_auth_SD=output_color(fre_auth.SD,fre_auth);
	var fre_auth_TN=output_color(fre_auth.TN,fre_auth);
	var fre_auth_TX=output_color(fre_auth.TX,fre_auth);
	var fre_auth_UT=output_color(fre_auth.UT,fre_auth);
	var fre_auth_VA=output_color(fre_auth.VA,fre_auth);
	var fre_auth_VT=output_color(fre_auth.VT,fre_auth);
	var fre_auth_WA=output_color(fre_auth.WA,fre_auth);
	var fre_auth_WI=output_color(fre_auth.MI,fre_auth);
	var fre_auth_WV=output_color(fre_auth.WV,fre_auth);
	var fre_auth_WY=output_color(fre_auth.WY,fre_auth);


	//fam_con
	var fam_con_AK=output_color(fam_con.AK,fam_con);
	var fam_con_AL=output_color(fam_con.AL,fam_con);
	var fam_con_AR=output_color(fam_con.AR,fam_con);
	var fam_con_AZ=output_color(fam_con.AZ,fam_con);
	var fam_con_CA=output_color(fam_con.CA,fam_con);
	var fam_con_CO=output_color(fam_con.CO,fam_con);
	var fam_con_CT=output_color(fam_con.CT,fam_con);
	var fam_con_DC=output_color(fam_con.DC,fam_con);
	var fam_con_DE=output_color(fam_con.DE,fam_con);
	var fam_con_FL=output_color(fam_con.FL,fam_con);
	var fam_con_GA=output_color(fam_con.GA,fam_con);
	var fam_con_HI=output_color(fam_con.HI,fam_con);
	var fam_con_IA=output_color(fam_con.IA,fam_con);
	var fam_con_ID=output_color(fam_con.ID,fam_con);
	var fam_con_IL=output_color(fam_con.IL,fam_con);
	var fam_con_IN=output_color(fam_con.IN,fam_con);
	var fam_con_KS=output_color(fam_con.KS,fam_con);
	var fam_con_KY=output_color(fam_con.KY,fam_con);
	var fam_con_LA=output_color(fam_con.LA,fam_con);
	var fam_con_MA=output_color(fam_con.MA,fam_con);
	var fam_con_ME=output_color(fam_con.ME,fam_con);
	var fam_con_MD=output_color(fam_con.MD,fam_con);
	var fam_con_MI=output_color(fam_con.MI,fam_con);
	var fam_con_MN=output_color(fam_con.MN,fam_con);
	var fam_con_MO=output_color(fam_con.MO,fam_con);
	var fam_con_MS=output_color(fam_con.MS,fam_con);
	var fam_con_NC=output_color(fam_con.NC,fam_con);
	var fam_con_ND=output_color(fam_con.ND,fam_con);
	var fam_con_NE=output_color(fam_con.NE,fam_con);
	var fam_con_NH=output_color(fam_con.NH,fam_con);
	var fam_con_NJ=output_color(fam_con.NJ,fam_con);
	var fam_con_NM=output_color(fam_con.NM,fam_con);
	var fam_con_NV=output_color(fam_con.NV,fam_con);
	var fam_con_NY=output_color(fam_con.NY,fam_con);
	var fam_con_OH=output_color(fam_con.OH,fam_con);
	var fam_con_OK=output_color(fam_con.OK,fam_con);
	var fam_con_OR=output_color(fam_con.OR,fam_con);
	var fam_con_PA=output_color(fam_con.PA,fam_con);
	var fam_con_RI=output_color(fam_con.RI,fam_con);
	var fam_con_SC=output_color(fam_con.SC,fam_con);
	var fam_con_SD=output_color(fam_con.SD,fam_con);
	var fam_con_TN=output_color(fam_con.TN,fam_con);
	var fam_con_TX=output_color(fam_con.TX,fam_con);
	var fam_con_UT=output_color(fam_con.UT,fam_con);
	var fam_con_VA=output_color(fam_con.VA,fam_con);
	var fam_con_VT=output_color(fam_con.VT,fam_con);
	var fam_con_WA=output_color(fam_con.WA,fam_con);
	var fam_con_WI=output_color(fam_con.MI,fam_con);
	var fam_con_WV=output_color(fam_con.WV,fam_con);
	var fam_con_WY=output_color(fam_con.WY,fam_con);

	//fam_auth
	var fam_auth_AK=output_color(fam_auth.AK,fam_auth);
	var fam_auth_AL=output_color(fam_auth.AL,fam_auth);
	var fam_auth_AR=output_color(fam_auth.AR,fam_auth);
	var fam_auth_AZ=output_color(fam_auth.AZ,fam_auth);
	var fam_auth_CA=output_color(fam_auth.CA,fam_auth);
	var fam_auth_CO=output_color(fam_auth.CO,fam_auth);
	var fam_auth_CT=output_color(fam_auth.CT,fam_auth);
	var fam_auth_DC=output_color(fam_auth.DC,fam_auth);
	var fam_auth_DE=output_color(fam_auth.DE,fam_auth);
	var fam_auth_FL=output_color(fam_auth.FL,fam_auth);
	var fam_auth_GA=output_color(fam_auth.GA,fam_auth);
	var fam_auth_HI=output_color(fam_auth.HI,fam_auth);
	var fam_auth_IA=output_color(fam_auth.IA,fam_auth);
	var fam_auth_ID=output_color(fam_auth.ID,fam_auth);
	var fam_auth_IL=output_color(fam_auth.IL,fam_auth);
	var fam_auth_IN=output_color(fam_auth.IN,fam_auth);
	var fam_auth_KS=output_color(fam_auth.KS,fam_auth);
	var fam_auth_KY=output_color(fam_auth.KY,fam_auth);
	var fam_auth_LA=output_color(fam_auth.LA,fam_auth);
	var fam_auth_MA=output_color(fam_auth.MA,fam_auth);
	var fam_auth_ME=output_color(fam_auth.ME,fam_auth);
	var fam_auth_MD=output_color(fam_auth.MD,fam_auth);
	var fam_auth_MI=output_color(fam_auth.MI,fam_auth);
	var fam_auth_MN=output_color(fam_auth.MN,fam_auth);
	var fam_auth_MO=output_color(fam_auth.MO,fam_auth);
	var fam_auth_MS=output_color(fam_auth.MS,fam_auth);
	var fam_auth_NC=output_color(fam_auth.NC,fam_auth);
	var fam_auth_ND=output_color(fam_auth.ND,fam_auth);
	var fam_auth_NE=output_color(fam_auth.NE,fam_auth);
	var fam_auth_NH=output_color(fam_auth.NH,fam_auth);
	var fam_auth_NJ=output_color(fam_auth.NJ,fam_auth);
	var fam_auth_NM=output_color(fam_auth.NM,fam_auth);
	var fam_auth_NV=output_color(fam_auth.NV,fam_auth);
	var fam_auth_NY=output_color(fam_auth.NY,fam_auth);
	var fam_auth_OH=output_color(fam_auth.OH,fam_auth);
	var fam_auth_OK=output_color(fam_auth.OK,fam_auth);
	var fam_auth_OR=output_color(fam_auth.OR,fam_auth);
	var fam_auth_PA=output_color(fam_auth.PA,fam_auth);
	var fam_auth_RI=output_color(fam_auth.RI,fam_auth);
	var fam_auth_SC=output_color(fam_auth.SC,fam_auth);
	var fam_auth_SD=output_color(fam_auth.SD,fam_auth);
	var fam_auth_TN=output_color(fam_auth.TN,fam_auth);
	var fam_auth_TX=output_color(fam_auth.TX,fam_auth);
	var fam_auth_UT=output_color(fam_auth.UT,fam_auth);
	var fam_auth_VA=output_color(fam_auth.VA,fam_auth);
	var fam_auth_VT=output_color(fam_auth.VT,fam_auth);
	var fam_auth_WA=output_color(fam_auth.WA,fam_auth);
	var fam_auth_WI=output_color(fam_auth.MI,fam_auth);
	var fam_auth_WV=output_color(fam_auth.WV,fam_auth);
	var fam_auth_WY=output_color(fam_auth.WY,fam_auth);

	//cri_con
	var cri_con_AK=output_color(cri_con.AK,cri_con);
	var cri_con_AL=output_color(cri_con.AL,cri_con);
	var cri_con_AR=output_color(cri_con.AR,cri_con);
	var cri_con_AZ=output_color(cri_con.AZ,cri_con);
	var cri_con_CA=output_color(cri_con.CA,cri_con);
	var cri_con_CO=output_color(cri_con.CO,cri_con);
	var cri_con_CT=output_color(cri_con.CT,cri_con);
	var cri_con_DC=output_color(cri_con.DC,cri_con);
	var cri_con_DE=output_color(cri_con.DE,cri_con);
	var cri_con_FL=output_color(cri_con.FL,cri_con);
	var cri_con_GA=output_color(cri_con.GA,cri_con);
	var cri_con_HI=output_color(cri_con.HI,cri_con);
	var cri_con_IA=output_color(cri_con.IA,cri_con);
	var cri_con_ID=output_color(cri_con.ID,cri_con);
	var cri_con_IL=output_color(cri_con.IL,cri_con);
	var cri_con_IN=output_color(cri_con.IN,cri_con);
	var cri_con_KS=output_color(cri_con.KS,cri_con);
	var cri_con_KY=output_color(cri_con.KY,cri_con);
	var cri_con_LA=output_color(cri_con.LA,cri_con);
	var cri_con_MA=output_color(cri_con.MA,cri_con);
	var cri_con_ME=output_color(cri_con.ME,cri_con);
	var cri_con_MD=output_color(cri_con.MD,cri_con);
	var cri_con_MI=output_color(cri_con.MI,cri_con);
	var cri_con_MN=output_color(cri_con.MN,cri_con);
	var cri_con_MO=output_color(cri_con.MO,cri_con);
	var cri_con_MS=output_color(cri_con.MS,cri_con);
	var cri_con_NC=output_color(cri_con.NC,cri_con);
	var cri_con_ND=output_color(cri_con.ND,cri_con);
	var cri_con_NE=output_color(cri_con.NE,cri_con);
	var cri_con_NH=output_color(cri_con.NH,cri_con);
	var cri_con_NJ=output_color(cri_con.NJ,cri_con);
	var cri_con_NM=output_color(cri_con.NM,cri_con);
	var cri_con_NV=output_color(cri_con.NV,cri_con);
	var cri_con_NY=output_color(cri_con.NY,cri_con);
	var cri_con_OH=output_color(cri_con.OH,cri_con);
	var cri_con_OK=output_color(cri_con.OK,cri_con);
	var cri_con_OR=output_color(cri_con.OR,cri_con);
	var cri_con_PA=output_color(cri_con.PA,cri_con);
	var cri_con_RI=output_color(cri_con.RI,cri_con);
	var cri_con_SC=output_color(cri_con.SC,cri_con);
	var cri_con_SD=output_color(cri_con.SD,cri_con);
	var cri_con_TN=output_color(cri_con.TN,cri_con);
	var cri_con_TX=output_color(cri_con.TX,cri_con);
	var cri_con_UT=output_color(cri_con.UT,cri_con);
	var cri_con_VA=output_color(cri_con.VA,cri_con);
	var cri_con_VT=output_color(cri_con.VT,cri_con);
	var cri_con_WA=output_color(cri_con.WA,cri_con);
	var cri_con_WI=output_color(cri_con.MI,cri_con);
	var cri_con_WV=output_color(cri_con.WV,cri_con);
	var cri_con_WY=output_color(cri_con.WY,cri_con);


	//cri_auth
	var cri_auth_AK=output_color(cri_auth.AK,cri_auth);
	var cri_auth_AL=output_color(cri_auth.AL,cri_auth);
	var cri_auth_AR=output_color(cri_auth.AR,cri_auth);
	var cri_auth_AZ=output_color(cri_auth.AZ,cri_auth);
	var cri_auth_CA=output_color(cri_auth.CA,cri_auth);
	var cri_auth_CO=output_color(cri_auth.CO,cri_auth);
	var cri_auth_CT=output_color(cri_auth.CT,cri_auth);
	var cri_auth_DC=output_color(cri_auth.DC,cri_auth);
	var cri_auth_DE=output_color(cri_auth.DE,cri_auth);
	var cri_auth_FL=output_color(cri_auth.FL,cri_auth);
	var cri_auth_GA=output_color(cri_auth.GA,cri_auth);
	var cri_auth_HI=output_color(cri_auth.HI,cri_auth);
	var cri_auth_IA=output_color(cri_auth.IA,cri_auth);
	var cri_auth_ID=output_color(cri_auth.ID,cri_auth);
	var cri_auth_IL=output_color(cri_auth.IL,cri_auth);
	var cri_auth_IN=output_color(cri_auth.IN,cri_auth);
	var cri_auth_KS=output_color(cri_auth.KS,cri_auth);
	var cri_auth_KY=output_color(cri_auth.KY,cri_auth);
	var cri_auth_LA=output_color(cri_auth.LA,cri_auth);
	var cri_auth_MA=output_color(cri_auth.MA,cri_auth);
	var cri_auth_ME=output_color(cri_auth.ME,cri_auth);
	var cri_auth_MD=output_color(cri_auth.MD,cri_auth);
	var cri_auth_MI=output_color(cri_auth.MI,cri_auth);
	var cri_auth_MN=output_color(cri_auth.MN,cri_auth);
	var cri_auth_MO=output_color(cri_auth.MO,cri_auth);
	var cri_auth_MS=output_color(cri_auth.MS,cri_auth);
	var cri_auth_NC=output_color(cri_auth.NC,cri_auth);
	var cri_auth_ND=output_color(cri_auth.ND,cri_auth);
	var cri_auth_NE=output_color(cri_auth.NE,cri_auth);
	var cri_auth_NH=output_color(cri_auth.NH,cri_auth);
	var cri_auth_NJ=output_color(cri_auth.NJ,cri_auth);
	var cri_auth_NM=output_color(cri_auth.NM,cri_auth);
	var cri_auth_NV=output_color(cri_auth.NV,cri_auth);
	var cri_auth_NY=output_color(cri_auth.NY,cri_auth);
	var cri_auth_OH=output_color(cri_auth.OH,cri_auth);
	var cri_auth_OK=output_color(cri_auth.OK,cri_auth);
	var cri_auth_OR=output_color(cri_auth.OR,cri_auth);
	var cri_auth_PA=output_color(cri_auth.PA,cri_auth);
	var cri_auth_RI=output_color(cri_auth.RI,cri_auth);
	var cri_auth_SC=output_color(cri_auth.SC,cri_auth);
	var cri_auth_SD=output_color(cri_auth.SD,cri_auth);
	var cri_auth_TN=output_color(cri_auth.TN,cri_auth);
	var cri_auth_TX=output_color(cri_auth.TX,cri_auth);
	var cri_auth_UT=output_color(cri_auth.UT,cri_auth);
	var cri_auth_VA=output_color(cri_auth.VA,cri_auth);
	var cri_auth_VT=output_color(cri_auth.VT,cri_auth);
	var cri_auth_WA=output_color(cri_auth.WA,cri_auth);
	var cri_auth_WI=output_color(cri_auth.MI,cri_auth);
	var cri_auth_WV=output_color(cri_auth.WV,cri_auth);
	var cri_auth_WY=output_color(cri_auth.WY,cri_auth);

	//hom_con
	var hom_con_AK=output_color(hom_con.AK,hom_con);
	var hom_con_AL=output_color(hom_con.AL,hom_con);
	var hom_con_AR=output_color(hom_con.AR,hom_con);
	var hom_con_AZ=output_color(hom_con.AZ,hom_con);
	var hom_con_CA=output_color(hom_con.CA,hom_con);
	var hom_con_CO=output_color(hom_con.CO,hom_con);
	var hom_con_CT=output_color(hom_con.CT,hom_con);
	var hom_con_DC=output_color(hom_con.DC,hom_con);
	var hom_con_DE=output_color(hom_con.DE,hom_con);
	var hom_con_FL=output_color(hom_con.FL,hom_con);
	var hom_con_GA=output_color(hom_con.GA,hom_con);
	var hom_con_HI=output_color(hom_con.HI,hom_con);
	var hom_con_IA=output_color(hom_con.IA,hom_con);
	var hom_con_ID=output_color(hom_con.ID,hom_con);
	var hom_con_IL=output_color(hom_con.IL,hom_con);
	var hom_con_IN=output_color(hom_con.IN,hom_con);
	var hom_con_KS=output_color(hom_con.KS,hom_con);
	var hom_con_KY=output_color(hom_con.KY,hom_con);
	var hom_con_LA=output_color(hom_con.LA,hom_con);
	var hom_con_MA=output_color(hom_con.MA,hom_con);
	var hom_con_ME=output_color(hom_con.ME,hom_con);
	var hom_con_MD=output_color(hom_con.MD,hom_con);
	var hom_con_MI=output_color(hom_con.MI,hom_con);
	var hom_con_MN=output_color(hom_con.MN,hom_con);
	var hom_con_MO=output_color(hom_con.MO,hom_con);
	var hom_con_MS=output_color(hom_con.MS,hom_con);
	var hom_con_NC=output_color(hom_con.NC,hom_con);
	var hom_con_ND=output_color(hom_con.ND,hom_con);
	var hom_con_NE=output_color(hom_con.NE,hom_con);
	var hom_con_NH=output_color(hom_con.NH,hom_con);
	var hom_con_NJ=output_color(hom_con.NJ,hom_con);
	var hom_con_NM=output_color(hom_con.NM,hom_con);
	var hom_con_NV=output_color(hom_con.NV,hom_con);
	var hom_con_NY=output_color(hom_con.NY,hom_con);
	var hom_con_OH=output_color(hom_con.OH,hom_con);
	var hom_con_OK=output_color(hom_con.OK,hom_con);
	var hom_con_OR=output_color(hom_con.OR,hom_con);
	var hom_con_PA=output_color(hom_con.PA,hom_con);
	var hom_con_RI=output_color(hom_con.RI,hom_con);
	var hom_con_SC=output_color(hom_con.SC,hom_con);
	var hom_con_SD=output_color(hom_con.SD,hom_con);
	var hom_con_TN=output_color(hom_con.TN,hom_con);
	var hom_con_TX=output_color(hom_con.TX,hom_con);
	var hom_con_UT=output_color(hom_con.UT,hom_con);
	var hom_con_VA=output_color(hom_con.VA,hom_con);
	var hom_con_VT=output_color(hom_con.VT,hom_con);
	var hom_con_WA=output_color(hom_con.WA,hom_con);
	var hom_con_WI=output_color(hom_con.MI,hom_con);
	var hom_con_WV=output_color(hom_con.WV,hom_con);
	var hom_con_WY=output_color(hom_con.WY,hom_con);


	//hom_auth
	var hom_auth_AK=output_color(hom_auth.AK,hom_auth);
	var hom_auth_AL=output_color(hom_auth.AL,hom_auth);
	var hom_auth_AR=output_color(hom_auth.AR,hom_auth);
	var hom_auth_AZ=output_color(hom_auth.AZ,hom_auth);
	var hom_auth_CA=output_color(hom_auth.CA,hom_auth);
	var hom_auth_CO=output_color(hom_auth.CO,hom_auth);
	var hom_auth_CT=output_color(hom_auth.CT,hom_auth);
	var hom_auth_DC=output_color(hom_auth.DC,hom_auth);
	var hom_auth_DE=output_color(hom_auth.DE,hom_auth);
	var hom_auth_FL=output_color(hom_auth.FL,hom_auth);
	var hom_auth_GA=output_color(hom_auth.GA,hom_auth);
	var hom_auth_HI=output_color(hom_auth.HI,hom_auth);
	var hom_auth_IA=output_color(hom_auth.IA,hom_auth);
	var hom_auth_ID=output_color(hom_auth.ID,hom_auth);
	var hom_auth_IL=output_color(hom_auth.IL,hom_auth);
	var hom_auth_IN=output_color(hom_auth.IN,hom_auth);
	var hom_auth_KS=output_color(hom_auth.KS,hom_auth);
	var hom_auth_KY=output_color(hom_auth.KY,hom_auth);
	var hom_auth_LA=output_color(hom_auth.LA,hom_auth);
	var hom_auth_MA=output_color(hom_auth.MA,hom_auth);
	var hom_auth_ME=output_color(hom_auth.ME,hom_auth);
	var hom_auth_MD=output_color(hom_auth.MD,hom_auth);
	var hom_auth_MI=output_color(hom_auth.MI,hom_auth);
	var hom_auth_MN=output_color(hom_auth.MN,hom_auth);
	var hom_auth_MO=output_color(hom_auth.MO,hom_auth);
	var hom_auth_MS=output_color(hom_auth.MS,hom_auth);
	var hom_auth_NC=output_color(hom_auth.NC,hom_auth);
	var hom_auth_ND=output_color(hom_auth.ND,hom_auth);
	var hom_auth_NE=output_color(hom_auth.NE,hom_auth);
	var hom_auth_NH=output_color(hom_auth.NH,hom_auth);
	var hom_auth_NJ=output_color(hom_auth.NJ,hom_auth);
	var hom_auth_NM=output_color(hom_auth.NM,hom_auth);
	var hom_auth_NV=output_color(hom_auth.NV,hom_auth);
	var hom_auth_NY=output_color(hom_auth.NY,hom_auth);
	var hom_auth_OH=output_color(hom_auth.OH,hom_auth);
	var hom_auth_OK=output_color(hom_auth.OK,hom_auth);
	var hom_auth_OR=output_color(hom_auth.OR,hom_auth);
	var hom_auth_PA=output_color(hom_auth.PA,hom_auth);
	var hom_auth_RI=output_color(hom_auth.RI,hom_auth);
	var hom_auth_SC=output_color(hom_auth.SC,hom_auth);
	var hom_auth_SD=output_color(hom_auth.SD,hom_auth);
	var hom_auth_TN=output_color(hom_auth.TN,hom_auth);
	var hom_auth_TX=output_color(hom_auth.TX,hom_auth);
	var hom_auth_UT=output_color(hom_auth.UT,hom_auth);
	var hom_auth_VA=output_color(hom_auth.VA,hom_auth);
	var hom_auth_VT=output_color(hom_auth.VT,hom_auth);
	var hom_auth_WA=output_color(hom_auth.WA,hom_auth);
	var hom_auth_WI=output_color(hom_auth.MI,hom_auth);
	var hom_auth_WV=output_color(hom_auth.WV,hom_auth);
	var hom_auth_WY=output_color(hom_auth.WY,hom_auth);



	//pri_con
	var pri_con_AK=output_color(pri_con.AK,pri_con);
	var pri_con_AL=output_color(pri_con.AL,pri_con);
	var pri_con_AR=output_color(pri_con.AR,pri_con);
	var pri_con_AZ=output_color(pri_con.AZ,pri_con);
	var pri_con_CA=output_color(pri_con.CA,pri_con);
	var pri_con_CO=output_color(pri_con.CO,pri_con);
	var pri_con_CT=output_color(pri_con.CT,pri_con);
	var pri_con_DC=output_color(pri_con.DC,pri_con);
	var pri_con_DE=output_color(pri_con.DE,pri_con);
	var pri_con_FL=output_color(pri_con.FL,pri_con);
	var pri_con_GA=output_color(pri_con.GA,pri_con);
	var pri_con_HI=output_color(pri_con.HI,pri_con);
	var pri_con_IA=output_color(pri_con.IA,pri_con);
	var pri_con_ID=output_color(pri_con.ID,pri_con);
	var pri_con_IL=output_color(pri_con.IL,pri_con);
	var pri_con_IN=output_color(pri_con.IN,pri_con);
	var pri_con_KS=output_color(pri_con.KS,pri_con);
	var pri_con_KY=output_color(pri_con.KY,pri_con);
	var pri_con_LA=output_color(pri_con.LA,pri_con);
	var pri_con_MA=output_color(pri_con.MA,pri_con);
	var pri_con_ME=output_color(pri_con.ME,pri_con);
	var pri_con_MD=output_color(pri_con.MD,pri_con);
	var pri_con_MI=output_color(pri_con.MI,pri_con);
	var pri_con_MN=output_color(pri_con.MN,pri_con);
	var pri_con_MO=output_color(pri_con.MO,pri_con);
	var pri_con_MS=output_color(pri_con.MS,pri_con);
	var pri_con_NC=output_color(pri_con.NC,pri_con);
	var pri_con_ND=output_color(pri_con.ND,pri_con);
	var pri_con_NE=output_color(pri_con.NE,pri_con);
	var pri_con_NH=output_color(pri_con.NH,pri_con);
	var pri_con_NJ=output_color(pri_con.NJ,pri_con);
	var pri_con_NM=output_color(pri_con.NM,pri_con);
	var pri_con_NV=output_color(pri_con.NV,pri_con);
	var pri_con_NY=output_color(pri_con.NY,pri_con);
	var pri_con_OH=output_color(pri_con.OH,pri_con);
	var pri_con_OK=output_color(pri_con.OK,pri_con);
	var pri_con_OR=output_color(pri_con.OR,pri_con);
	var pri_con_PA=output_color(pri_con.PA,pri_con);
	var pri_con_RI=output_color(pri_con.RI,pri_con);
	var pri_con_SC=output_color(pri_con.SC,pri_con);
	var pri_con_SD=output_color(pri_con.SD,pri_con);
	var pri_con_TN=output_color(pri_con.TN,pri_con);
	var pri_con_TX=output_color(pri_con.TX,pri_con);
	var pri_con_UT=output_color(pri_con.UT,pri_con);
	var pri_con_VA=output_color(pri_con.VA,pri_con);
	var pri_con_VT=output_color(pri_con.VT,pri_con);
	var pri_con_WA=output_color(pri_con.WA,pri_con);
	var pri_con_WI=output_color(pri_con.MI,pri_con);
	var pri_con_WV=output_color(pri_con.WV,pri_con);
	var pri_con_WY=output_color(pri_con.WY,pri_con);

	//pri_auth
	var pri_auth_AK=output_color(pri_auth.AK,pri_auth);
	var pri_auth_AL=output_color(pri_auth.AL,pri_auth);
	var pri_auth_AR=output_color(pri_auth.AR,pri_auth);
	var pri_auth_AZ=output_color(pri_auth.AZ,pri_auth);
	var pri_auth_CA=output_color(pri_auth.CA,pri_auth);
	var pri_auth_CO=output_color(pri_auth.CO,pri_auth);
	var pri_auth_CT=output_color(pri_auth.CT,pri_auth);
	var pri_auth_DC=output_color(pri_auth.DC,pri_auth);
	var pri_auth_DE=output_color(pri_auth.DE,pri_auth);
	var pri_auth_FL=output_color(pri_auth.FL,pri_auth);
	var pri_auth_GA=output_color(pri_auth.GA,pri_auth);
	var pri_auth_HI=output_color(pri_auth.HI,pri_auth);
	var pri_auth_IA=output_color(pri_auth.IA,pri_auth);
	var pri_auth_ID=output_color(pri_auth.ID,pri_auth);
	var pri_auth_IL=output_color(pri_auth.IL,pri_auth);
	var pri_auth_IN=output_color(pri_auth.IN,pri_auth);
	var pri_auth_KS=output_color(pri_auth.KS,pri_auth);
	var pri_auth_KY=output_color(pri_auth.KY,pri_auth);
	var pri_auth_LA=output_color(pri_auth.LA,pri_auth);
	var pri_auth_MA=output_color(pri_auth.MA,pri_auth);
	var pri_auth_ME=output_color(pri_auth.ME,pri_auth);
	var pri_auth_MD=output_color(pri_auth.MD,pri_auth);
	var pri_auth_MI=output_color(pri_auth.MI,pri_auth);
	var pri_auth_MN=output_color(pri_auth.MN,pri_auth);
	var pri_auth_MO=output_color(pri_auth.MO,pri_auth);
	var pri_auth_MS=output_color(pri_auth.MS,pri_auth);
	var pri_auth_NC=output_color(pri_auth.NC,pri_auth);
	var pri_auth_ND=output_color(pri_auth.ND,pri_auth);
	var pri_auth_NE=output_color(pri_auth.NE,pri_auth);
	var pri_auth_NH=output_color(pri_auth.NH,pri_auth);
	var pri_auth_NJ=output_color(pri_auth.NJ,pri_auth);
	var pri_auth_NM=output_color(pri_auth.NM,pri_auth);
	var pri_auth_NV=output_color(pri_auth.NV,pri_auth);
	var pri_auth_NY=output_color(pri_auth.NY,pri_auth);
	var pri_auth_OH=output_color(pri_auth.OH,pri_auth);
	var pri_auth_OK=output_color(pri_auth.OK,pri_auth);
	var pri_auth_OR=output_color(pri_auth.OR,pri_auth);
	var pri_auth_PA=output_color(pri_auth.PA,pri_auth);
	var pri_auth_RI=output_color(pri_auth.RI,pri_auth);
	var pri_auth_SC=output_color(pri_auth.SC,pri_auth);
	var pri_auth_SD=output_color(pri_auth.SD,pri_auth);
	var pri_auth_TN=output_color(pri_auth.TN,pri_auth);
	var pri_auth_TX=output_color(pri_auth.TX,pri_auth);
	var pri_auth_UT=output_color(pri_auth.UT,pri_auth);
	var pri_auth_VA=output_color(pri_auth.VA,pri_auth);
	var pri_auth_VT=output_color(pri_auth.VT,pri_auth);
	var pri_auth_WA=output_color(pri_auth.WA,pri_auth);
	var pri_auth_WI=output_color(pri_auth.MI,pri_auth);
	var pri_auth_WV=output_color(pri_auth.WV,pri_auth);
	var pri_auth_WY=output_color(pri_auth.WY,pri_auth);

	//gun_con
	var gun_con_AK=output_color(gun_con.AK,gun_con);
	var gun_con_AL=output_color(gun_con.AL,gun_con);
	var gun_con_AR=output_color(gun_con.AR,gun_con);
	var gun_con_AZ=output_color(gun_con.AZ,gun_con);
	var gun_con_CA=output_color(gun_con.CA,gun_con);
	var gun_con_CO=output_color(gun_con.CO,gun_con);
	var gun_con_CT=output_color(gun_con.CT,gun_con);
	var gun_con_DC=output_color(gun_con.DC,gun_con);
	var gun_con_DE=output_color(gun_con.DE,gun_con);
	var gun_con_FL=output_color(gun_con.FL,gun_con);
	var gun_con_GA=output_color(gun_con.GA,gun_con);
	var gun_con_HI=output_color(gun_con.HI,gun_con);
	var gun_con_IA=output_color(gun_con.IA,gun_con);
	var gun_con_ID=output_color(gun_con.ID,gun_con);
	var gun_con_IL=output_color(gun_con.IL,gun_con);
	var gun_con_IN=output_color(gun_con.IN,gun_con);
	var gun_con_KS=output_color(gun_con.KS,gun_con);
	var gun_con_KY=output_color(gun_con.KY,gun_con);
	var gun_con_LA=output_color(gun_con.LA,gun_con);
	var gun_con_MA=output_color(gun_con.MA,gun_con);
	var gun_con_ME=output_color(gun_con.ME,gun_con);
	var gun_con_MD=output_color(gun_con.MD,gun_con);
	var gun_con_MI=output_color(gun_con.MI,gun_con);
	var gun_con_MN=output_color(gun_con.MN,gun_con);
	var gun_con_MO=output_color(gun_con.MO,gun_con);
	var gun_con_MS=output_color(gun_con.MS,gun_con);
	var gun_con_NC=output_color(gun_con.NC,gun_con);
	var gun_con_ND=output_color(gun_con.ND,gun_con);
	var gun_con_NE=output_color(gun_con.NE,gun_con);
	var gun_con_NH=output_color(gun_con.NH,gun_con);
	var gun_con_NJ=output_color(gun_con.NJ,gun_con);
	var gun_con_NM=output_color(gun_con.NM,gun_con);
	var gun_con_NV=output_color(gun_con.NV,gun_con);
	var gun_con_NY=output_color(gun_con.NY,gun_con);
	var gun_con_OH=output_color(gun_con.OH,gun_con);
	var gun_con_OK=output_color(gun_con.OK,gun_con);
	var gun_con_OR=output_color(gun_con.OR,gun_con);
	var gun_con_PA=output_color(gun_con.PA,gun_con);
	var gun_con_RI=output_color(gun_con.RI,gun_con);
	var gun_con_SC=output_color(gun_con.SC,gun_con);
	var gun_con_SD=output_color(gun_con.SD,gun_con);
	var gun_con_TN=output_color(gun_con.TN,gun_con);
	var gun_con_TX=output_color(gun_con.TX,gun_con);
	var gun_con_UT=output_color(gun_con.UT,gun_con);
	var gun_con_VA=output_color(gun_con.VA,gun_con);
	var gun_con_VT=output_color(gun_con.VT,gun_con);
	var gun_con_WA=output_color(gun_con.WA,gun_con);
	var gun_con_WI=output_color(gun_con.MI,gun_con);
	var gun_con_WV=output_color(gun_con.WV,gun_con);
	var gun_con_WY=output_color(gun_con.WY,gun_con);

	//gun_auth
	var gun_auth_AK=output_color(gun_auth.AK,gun_auth);
	var gun_auth_AL=output_color(gun_auth.AL,gun_auth);
	var gun_auth_AR=output_color(gun_auth.AR,gun_auth);
	var gun_auth_AZ=output_color(gun_auth.AZ,gun_auth);
	var gun_auth_CA=output_color(gun_auth.CA,gun_auth);
	var gun_auth_CO=output_color(gun_auth.CO,gun_auth);
	var gun_auth_CT=output_color(gun_auth.CT,gun_auth);
	var gun_auth_DC=output_color(gun_auth.DC,gun_auth);
	var gun_auth_DE=output_color(gun_auth.DE,gun_auth);
	var gun_auth_FL=output_color(gun_auth.FL,gun_auth);
	var gun_auth_GA=output_color(gun_auth.GA,gun_auth);
	var gun_auth_HI=output_color(gun_auth.HI,gun_auth);
	var gun_auth_IA=output_color(gun_auth.IA,gun_auth);
	var gun_auth_ID=output_color(gun_auth.ID,gun_auth);
	var gun_auth_IL=output_color(gun_auth.IL,gun_auth);
	var gun_auth_IN=output_color(gun_auth.IN,gun_auth);
	var gun_auth_KS=output_color(gun_auth.KS,gun_auth);
	var gun_auth_KY=output_color(gun_auth.KY,gun_auth);
	var gun_auth_LA=output_color(gun_auth.LA,gun_auth);
	var gun_auth_MA=output_color(gun_auth.MA,gun_auth);
	var gun_auth_ME=output_color(gun_auth.ME,gun_auth);
	var gun_auth_MD=output_color(gun_auth.MD,gun_auth);
	var gun_auth_MI=output_color(gun_auth.MI,gun_auth);
	var gun_auth_MN=output_color(gun_auth.MN,gun_auth);
	var gun_auth_MO=output_color(gun_auth.MO,gun_auth);
	var gun_auth_MS=output_color(gun_auth.MS,gun_auth);
	var gun_auth_NC=output_color(gun_auth.NC,gun_auth);
	var gun_auth_ND=output_color(gun_auth.ND,gun_auth);
	var gun_auth_NE=output_color(gun_auth.NE,gun_auth);
	var gun_auth_NH=output_color(gun_auth.NH,gun_auth);
	var gun_auth_NJ=output_color(gun_auth.NJ,gun_auth);
	var gun_auth_NM=output_color(gun_auth.NM,gun_auth);
	var gun_auth_NV=output_color(gun_auth.NV,gun_auth);
	var gun_auth_NY=output_color(gun_auth.NY,gun_auth);
	var gun_auth_OH=output_color(gun_auth.OH,gun_auth);
	var gun_auth_OK=output_color(gun_auth.OK,gun_auth);
	var gun_auth_OR=output_color(gun_auth.OR,gun_auth);
	var gun_auth_PA=output_color(gun_auth.PA,gun_auth);
	var gun_auth_RI=output_color(gun_auth.RI,gun_auth);
	var gun_auth_SC=output_color(gun_auth.SC,gun_auth);
	var gun_auth_SD=output_color(gun_auth.SD,gun_auth);
	var gun_auth_TN=output_color(gun_auth.TN,gun_auth);
	var gun_auth_TX=output_color(gun_auth.TX,gun_auth);
	var gun_auth_UT=output_color(gun_auth.UT,gun_auth);
	var gun_auth_VA=output_color(gun_auth.VA,gun_auth);
	var gun_auth_VT=output_color(gun_auth.VT,gun_auth);
	var gun_auth_WA=output_color(gun_auth.WA,gun_auth);
	var gun_auth_WI=output_color(gun_auth.MI,gun_auth);
	var gun_auth_WV=output_color(gun_auth.WV,gun_auth);
	var gun_auth_WY=output_color(gun_auth.WY,gun_auth);


	//soc_con
	var soc_con_AK=output_color(soc_con.AK,soc_con);
	var soc_con_AL=output_color(soc_con.AL,soc_con);
	var soc_con_AR=output_color(soc_con.AR,soc_con);
	var soc_con_AZ=output_color(soc_con.AZ,soc_con);
	var soc_con_CA=output_color(soc_con.CA,soc_con);
	var soc_con_CO=output_color(soc_con.CO,soc_con);
	var soc_con_CT=output_color(soc_con.CT,soc_con);
	var soc_con_DC=output_color(soc_con.DC,soc_con);
	var soc_con_DE=output_color(soc_con.DE,soc_con);
	var soc_con_FL=output_color(soc_con.FL,soc_con);
	var soc_con_GA=output_color(soc_con.GA,soc_con);
	var soc_con_HI=output_color(soc_con.HI,soc_con);
	var soc_con_IA=output_color(soc_con.IA,soc_con);
	var soc_con_ID=output_color(soc_con.ID,soc_con);
	var soc_con_IL=output_color(soc_con.IL,soc_con);
	var soc_con_IN=output_color(soc_con.IN,soc_con);
	var soc_con_KS=output_color(soc_con.KS,soc_con);
	var soc_con_KY=output_color(soc_con.KY,soc_con);
	var soc_con_LA=output_color(soc_con.LA,soc_con);
	var soc_con_MA=output_color(soc_con.MA,soc_con);
	var soc_con_ME=output_color(soc_con.ME,soc_con);
	var soc_con_MD=output_color(soc_con.MD,soc_con);
	var soc_con_MI=output_color(soc_con.MI,soc_con);
	var soc_con_MN=output_color(soc_con.MN,soc_con);
	var soc_con_MO=output_color(soc_con.MO,soc_con);
	var soc_con_MS=output_color(soc_con.MS,soc_con);
	var soc_con_NC=output_color(soc_con.NC,soc_con);
	var soc_con_ND=output_color(soc_con.ND,soc_con);
	var soc_con_NE=output_color(soc_con.NE,soc_con);
	var soc_con_NH=output_color(soc_con.NH,soc_con);
	var soc_con_NJ=output_color(soc_con.NJ,soc_con);
	var soc_con_NM=output_color(soc_con.NM,soc_con);
	var soc_con_NV=output_color(soc_con.NV,soc_con);
	var soc_con_NY=output_color(soc_con.NY,soc_con);
	var soc_con_OH=output_color(soc_con.OH,soc_con);
	var soc_con_OK=output_color(soc_con.OK,soc_con);
	var soc_con_OR=output_color(soc_con.OR,soc_con);
	var soc_con_PA=output_color(soc_con.PA,soc_con);
	var soc_con_RI=output_color(soc_con.RI,soc_con);
	var soc_con_SC=output_color(soc_con.SC,soc_con);
	var soc_con_SD=output_color(soc_con.SD,soc_con);
	var soc_con_TN=output_color(soc_con.TN,soc_con);
	var soc_con_TX=output_color(soc_con.TX,soc_con);
	var soc_con_UT=output_color(soc_con.UT,soc_con);
	var soc_con_VA=output_color(soc_con.VA,soc_con);
	var soc_con_VT=output_color(soc_con.VT,soc_con);
	var soc_con_WA=output_color(soc_con.WA,soc_con);
	var soc_con_WI=output_color(soc_con.MI,soc_con);
	var soc_con_WV=output_color(soc_con.WV,soc_con);
	var soc_con_WY=output_color(soc_con.WY,soc_con);

	//soc_auth
	var soc_auth_AK=output_color(soc_auth.AK,soc_auth);
	var soc_auth_AL=output_color(soc_auth.AL,soc_auth);
	var soc_auth_AR=output_color(soc_auth.AR,soc_auth);
	var soc_auth_AZ=output_color(soc_auth.AZ,soc_auth);
	var soc_auth_CA=output_color(soc_auth.CA,soc_auth);
	var soc_auth_CO=output_color(soc_auth.CO,soc_auth);
	var soc_auth_CT=output_color(soc_auth.CT,soc_auth);
	var soc_auth_DC=output_color(soc_auth.DC,soc_auth);
	var soc_auth_DE=output_color(soc_auth.DE,soc_auth);
	var soc_auth_FL=output_color(soc_auth.FL,soc_auth);
	var soc_auth_GA=output_color(soc_auth.GA,soc_auth);
	var soc_auth_HI=output_color(soc_auth.HI,soc_auth);
	var soc_auth_IA=output_color(soc_auth.IA,soc_auth);
	var soc_auth_ID=output_color(soc_auth.ID,soc_auth);
	var soc_auth_IL=output_color(soc_auth.IL,soc_auth);
	var soc_auth_IN=output_color(soc_auth.IN,soc_auth);
	var soc_auth_KS=output_color(soc_auth.KS,soc_auth);
	var soc_auth_KY=output_color(soc_auth.KY,soc_auth);
	var soc_auth_LA=output_color(soc_auth.LA,soc_auth);
	var soc_auth_MA=output_color(soc_auth.MA,soc_auth);
	var soc_auth_ME=output_color(soc_auth.ME,soc_auth);
	var soc_auth_MD=output_color(soc_auth.MD,soc_auth);
	var soc_auth_MI=output_color(soc_auth.MI,soc_auth);
	var soc_auth_MN=output_color(soc_auth.MN,soc_auth);
	var soc_auth_MO=output_color(soc_auth.MO,soc_auth);
	var soc_auth_MS=output_color(soc_auth.MS,soc_auth);
	var soc_auth_NC=output_color(soc_auth.NC,soc_auth);
	var soc_auth_ND=output_color(soc_auth.ND,soc_auth);
	var soc_auth_NE=output_color(soc_auth.NE,soc_auth);
	var soc_auth_NH=output_color(soc_auth.NH,soc_auth);
	var soc_auth_NJ=output_color(soc_auth.NJ,soc_auth);
	var soc_auth_NM=output_color(soc_auth.NM,soc_auth);
	var soc_auth_NV=output_color(soc_auth.NV,soc_auth);
	var soc_auth_NY=output_color(soc_auth.NY,soc_auth);
	var soc_auth_OH=output_color(soc_auth.OH,soc_auth);
	var soc_auth_OK=output_color(soc_auth.OK,soc_auth);
	var soc_auth_OR=output_color(soc_auth.OR,soc_auth);
	var soc_auth_PA=output_color(soc_auth.PA,soc_auth);
	var soc_auth_RI=output_color(soc_auth.RI,soc_auth);
	var soc_auth_SC=output_color(soc_auth.SC,soc_auth);
	var soc_auth_SD=output_color(soc_auth.SD,soc_auth);
	var soc_auth_TN=output_color(soc_auth.TN,soc_auth);
	var soc_auth_TX=output_color(soc_auth.TX,soc_auth);
	var soc_auth_UT=output_color(soc_auth.UT,soc_auth);
	var soc_auth_VA=output_color(soc_auth.VA,soc_auth);
	var soc_auth_VT=output_color(soc_auth.VT,soc_auth);
	var soc_auth_WA=output_color(soc_auth.WA,soc_auth);
	var soc_auth_WI=output_color(soc_auth.MI,soc_auth);
	var soc_auth_WV=output_color(soc_auth.WV,soc_auth);
	var soc_auth_WY=output_color(soc_auth.WY,soc_auth);

	//imm_con
	var imm_con_AK=output_color(imm_con.AK,imm_con);
	var imm_con_AL=output_color(imm_con.AL,imm_con);
	var imm_con_AR=output_color(imm_con.AR,imm_con);
	var imm_con_AZ=output_color(imm_con.AZ,imm_con);
	var imm_con_CA=output_color(imm_con.CA,imm_con);
	var imm_con_CO=output_color(imm_con.CO,imm_con);
	var imm_con_CT=output_color(imm_con.CT,imm_con);
	var imm_con_DC=output_color(imm_con.DC,imm_con);
	var imm_con_DE=output_color(imm_con.DE,imm_con);
	var imm_con_FL=output_color(imm_con.FL,imm_con);
	var imm_con_GA=output_color(imm_con.GA,imm_con);
	var imm_con_HI=output_color(imm_con.HI,imm_con);
	var imm_con_IA=output_color(imm_con.IA,imm_con);
	var imm_con_ID=output_color(imm_con.ID,imm_con);
	var imm_con_IL=output_color(imm_con.IL,imm_con);
	var imm_con_IN=output_color(imm_con.IN,imm_con);
	var imm_con_KS=output_color(imm_con.KS,imm_con);
	var imm_con_KY=output_color(imm_con.KY,imm_con);
	var imm_con_LA=output_color(imm_con.LA,imm_con);
	var imm_con_MA=output_color(imm_con.MA,imm_con);
	var imm_con_ME=output_color(imm_con.ME,imm_con);
	var imm_con_MD=output_color(imm_con.MD,imm_con);
	var imm_con_MI=output_color(imm_con.MI,imm_con);
	var imm_con_MN=output_color(imm_con.MN,imm_con);
	var imm_con_MO=output_color(imm_con.MO,imm_con);
	var imm_con_MS=output_color(imm_con.MS,imm_con);
	var imm_con_NC=output_color(imm_con.NC,imm_con);
	var imm_con_ND=output_color(imm_con.ND,imm_con);
	var imm_con_NE=output_color(imm_con.NE,imm_con);
	var imm_con_NH=output_color(imm_con.NH,imm_con);
	var imm_con_NJ=output_color(imm_con.NJ,imm_con);
	var imm_con_NM=output_color(imm_con.NM,imm_con);
	var imm_con_NV=output_color(imm_con.NV,imm_con);
	var imm_con_NY=output_color(imm_con.NY,imm_con);
	var imm_con_OH=output_color(imm_con.OH,imm_con);
	var imm_con_OK=output_color(imm_con.OK,imm_con);
	var imm_con_OR=output_color(imm_con.OR,imm_con);
	var imm_con_PA=output_color(imm_con.PA,imm_con);
	var imm_con_RI=output_color(imm_con.RI,imm_con);
	var imm_con_SC=output_color(imm_con.SC,imm_con);
	var imm_con_SD=output_color(imm_con.SD,imm_con);
	var imm_con_TN=output_color(imm_con.TN,imm_con);
	var imm_con_TX=output_color(imm_con.TX,imm_con);
	var imm_con_UT=output_color(imm_con.UT,imm_con);
	var imm_con_VA=output_color(imm_con.VA,imm_con);
	var imm_con_VT=output_color(imm_con.VT,imm_con);
	var imm_con_WA=output_color(imm_con.WA,imm_con);
	var imm_con_WI=output_color(imm_con.MI,imm_con);
	var imm_con_WV=output_color(imm_con.WV,imm_con);
	var imm_con_WY=output_color(imm_con.WY,imm_con);

	//imm_auth
	var imm_auth_AK=output_color(imm_auth.AK,imm_auth);
	var imm_auth_AL=output_color(imm_auth.AL,imm_auth);
	var imm_auth_AR=output_color(imm_auth.AR,imm_auth);
	var imm_auth_AZ=output_color(imm_auth.AZ,imm_auth);
	var imm_auth_CA=output_color(imm_auth.CA,imm_auth);
	var imm_auth_CO=output_color(imm_auth.CO,imm_auth);
	var imm_auth_CT=output_color(imm_auth.CT,imm_auth);
	var imm_auth_DC=output_color(imm_auth.DC,imm_auth);
	var imm_auth_DE=output_color(imm_auth.DE,imm_auth);
	var imm_auth_FL=output_color(imm_auth.FL,imm_auth);
	var imm_auth_GA=output_color(imm_auth.GA,imm_auth);
	var imm_auth_HI=output_color(imm_auth.HI,imm_auth);
	var imm_auth_IA=output_color(imm_auth.IA,imm_auth);
	var imm_auth_ID=output_color(imm_auth.ID,imm_auth);
	var imm_auth_IL=output_color(imm_auth.IL,imm_auth);
	var imm_auth_IN=output_color(imm_auth.IN,imm_auth);
	var imm_auth_KS=output_color(imm_auth.KS,imm_auth);
	var imm_auth_KY=output_color(imm_auth.KY,imm_auth);
	var imm_auth_LA=output_color(imm_auth.LA,imm_auth);
	var imm_auth_MA=output_color(imm_auth.MA,imm_auth);
	var imm_auth_ME=output_color(imm_auth.ME,imm_auth);
	var imm_auth_MD=output_color(imm_auth.MD,imm_auth);
	var imm_auth_MI=output_color(imm_auth.MI,imm_auth);
	var imm_auth_MN=output_color(imm_auth.MN,imm_auth);
	var imm_auth_MO=output_color(imm_auth.MO,imm_auth);
	var imm_auth_MS=output_color(imm_auth.MS,imm_auth);
	var imm_auth_NC=output_color(imm_auth.NC,imm_auth);
	var imm_auth_ND=output_color(imm_auth.ND,imm_auth);
	var imm_auth_NE=output_color(imm_auth.NE,imm_auth);
	var imm_auth_NH=output_color(imm_auth.NH,imm_auth);
	var imm_auth_NJ=output_color(imm_auth.NJ,imm_auth);
	var imm_auth_NM=output_color(imm_auth.NM,imm_auth);
	var imm_auth_NV=output_color(imm_auth.NV,imm_auth);
	var imm_auth_NY=output_color(imm_auth.NY,imm_auth);
	var imm_auth_OH=output_color(imm_auth.OH,imm_auth);
	var imm_auth_OK=output_color(imm_auth.OK,imm_auth);
	var imm_auth_OR=output_color(imm_auth.OR,imm_auth);
	var imm_auth_PA=output_color(imm_auth.PA,imm_auth);
	var imm_auth_RI=output_color(imm_auth.RI,imm_auth);
	var imm_auth_SC=output_color(imm_auth.SC,imm_auth);
	var imm_auth_SD=output_color(imm_auth.SD,imm_auth);
	var imm_auth_TN=output_color(imm_auth.TN,imm_auth);
	var imm_auth_TX=output_color(imm_auth.TX,imm_auth);
	var imm_auth_UT=output_color(imm_auth.UT,imm_auth);
	var imm_auth_VA=output_color(imm_auth.VA,imm_auth);
	var imm_auth_VT=output_color(imm_auth.VT,imm_auth);
	var imm_auth_WA=output_color(imm_auth.WA,imm_auth);
	var imm_auth_WI=output_color(imm_auth.MI,imm_auth);
	var imm_auth_WV=output_color(imm_auth.WV,imm_auth);
	var imm_auth_WY=output_color(imm_auth.WY,imm_auth);

	//cor_con
	var cor_con_AK=output_color(cor_con.AK,cor_con);
	var cor_con_AL=output_color(cor_con.AL,cor_con);
	var cor_con_AR=output_color(cor_con.AR,cor_con);
	var cor_con_AZ=output_color(cor_con.AZ,cor_con);
	var cor_con_CA=output_color(cor_con.CA,cor_con);
	var cor_con_CO=output_color(cor_con.CO,cor_con);
	var cor_con_CT=output_color(cor_con.CT,cor_con);
	var cor_con_DC=output_color(cor_con.DC,cor_con);
	var cor_con_DE=output_color(cor_con.DE,cor_con);
	var cor_con_FL=output_color(cor_con.FL,cor_con);
	var cor_con_GA=output_color(cor_con.GA,cor_con);
	var cor_con_HI=output_color(cor_con.HI,cor_con);
	var cor_con_IA=output_color(cor_con.IA,cor_con);
	var cor_con_ID=output_color(cor_con.ID,cor_con);
	var cor_con_IL=output_color(cor_con.IL,cor_con);
	var cor_con_IN=output_color(cor_con.IN,cor_con);
	var cor_con_KS=output_color(cor_con.KS,cor_con);
	var cor_con_KY=output_color(cor_con.KY,cor_con);
	var cor_con_LA=output_color(cor_con.LA,cor_con);
	var cor_con_MA=output_color(cor_con.MA,cor_con);
	var cor_con_ME=output_color(cor_con.ME,cor_con);
	var cor_con_MD=output_color(cor_con.MD,cor_con);
	var cor_con_MI=output_color(cor_con.MI,cor_con);
	var cor_con_MN=output_color(cor_con.MN,cor_con);
	var cor_con_MO=output_color(cor_con.MO,cor_con);
	var cor_con_MS=output_color(cor_con.MS,cor_con);
	var cor_con_NC=output_color(cor_con.NC,cor_con);
	var cor_con_ND=output_color(cor_con.ND,cor_con);
	var cor_con_NE=output_color(cor_con.NE,cor_con);
	var cor_con_NH=output_color(cor_con.NH,cor_con);
	var cor_con_NJ=output_color(cor_con.NJ,cor_con);
	var cor_con_NM=output_color(cor_con.NM,cor_con);
	var cor_con_NV=output_color(cor_con.NV,cor_con);
	var cor_con_NY=output_color(cor_con.NY,cor_con);
	var cor_con_OH=output_color(cor_con.OH,cor_con);
	var cor_con_OK=output_color(cor_con.OK,cor_con);
	var cor_con_OR=output_color(cor_con.OR,cor_con);
	var cor_con_PA=output_color(cor_con.PA,cor_con);
	var cor_con_RI=output_color(cor_con.RI,cor_con);
	var cor_con_SC=output_color(cor_con.SC,cor_con);
	var cor_con_SD=output_color(cor_con.SD,cor_con);
	var cor_con_TN=output_color(cor_con.TN,cor_con);
	var cor_con_TX=output_color(cor_con.TX,cor_con);
	var cor_con_UT=output_color(cor_con.UT,cor_con);
	var cor_con_VA=output_color(cor_con.VA,cor_con);
	var cor_con_VT=output_color(cor_con.VT,cor_con);
	var cor_con_WA=output_color(cor_con.WA,cor_con);
	var cor_con_WI=output_color(cor_con.MI,cor_con);
	var cor_con_WV=output_color(cor_con.WV,cor_con);
	var cor_con_WY=output_color(cor_con.WY,cor_con);


	//cor_auth
	var cor_auth_AK=output_color(cor_auth.AK,cor_auth);
	var cor_auth_AL=output_color(cor_auth.AL,cor_auth);
	var cor_auth_AR=output_color(cor_auth.AR,cor_auth);
	var cor_auth_AZ=output_color(cor_auth.AZ,cor_auth);
	var cor_auth_CA=output_color(cor_auth.CA,cor_auth);
	var cor_auth_CO=output_color(cor_auth.CO,cor_auth);
	var cor_auth_CT=output_color(cor_auth.CT,cor_auth);
	var cor_auth_DC=output_color(cor_auth.DC,cor_auth);
	var cor_auth_DE=output_color(cor_auth.DE,cor_auth);
	var cor_auth_FL=output_color(cor_auth.FL,cor_auth);
	var cor_auth_GA=output_color(cor_auth.GA,cor_auth);
	var cor_auth_HI=output_color(cor_auth.HI,cor_auth);
	var cor_auth_IA=output_color(cor_auth.IA,cor_auth);
	var cor_auth_ID=output_color(cor_auth.ID,cor_auth);
	var cor_auth_IL=output_color(cor_auth.IL,cor_auth);
	var cor_auth_IN=output_color(cor_auth.IN,cor_auth);
	var cor_auth_KS=output_color(cor_auth.KS,cor_auth);
	var cor_auth_KY=output_color(cor_auth.KY,cor_auth);
	var cor_auth_LA=output_color(cor_auth.LA,cor_auth);
	var cor_auth_MA=output_color(cor_auth.MA,cor_auth);
	var cor_auth_ME=output_color(cor_auth.ME,cor_auth);
	var cor_auth_MD=output_color(cor_auth.MD,cor_auth);
	var cor_auth_MI=output_color(cor_auth.MI,cor_auth);
	var cor_auth_MN=output_color(cor_auth.MN,cor_auth);
	var cor_auth_MO=output_color(cor_auth.MO,cor_auth);
	var cor_auth_MS=output_color(cor_auth.MS,cor_auth);
	var cor_auth_NC=output_color(cor_auth.NC,cor_auth);
	var cor_auth_ND=output_color(cor_auth.ND,cor_auth);
	var cor_auth_NE=output_color(cor_auth.NE,cor_auth);
	var cor_auth_NH=output_color(cor_auth.NH,cor_auth);
	var cor_auth_NJ=output_color(cor_auth.NJ,cor_auth);
	var cor_auth_NM=output_color(cor_auth.NM,cor_auth);
	var cor_auth_NV=output_color(cor_auth.NV,cor_auth);
	var cor_auth_NY=output_color(cor_auth.NY,cor_auth);
	var cor_auth_OH=output_color(cor_auth.OH,cor_auth);
	var cor_auth_OK=output_color(cor_auth.OK,cor_auth);
	var cor_auth_OR=output_color(cor_auth.OR,cor_auth);
	var cor_auth_PA=output_color(cor_auth.PA,cor_auth);
	var cor_auth_RI=output_color(cor_auth.RI,cor_auth);
	var cor_auth_SC=output_color(cor_auth.SC,cor_auth);
	var cor_auth_SD=output_color(cor_auth.SD,cor_auth);
	var cor_auth_TN=output_color(cor_auth.TN,cor_auth);
	var cor_auth_TX=output_color(cor_auth.TX,cor_auth);
	var cor_auth_UT=output_color(cor_auth.UT,cor_auth);
	var cor_auth_VA=output_color(cor_auth.VA,cor_auth);
	var cor_auth_VT=output_color(cor_auth.VT,cor_auth);
	var cor_auth_WA=output_color(cor_auth.WA,cor_auth);
	var cor_auth_WI=output_color(cor_auth.MI,cor_auth);
	var cor_auth_WV=output_color(cor_auth.WV,cor_auth);
	var cor_auth_WY=output_color(cor_auth.WY,cor_auth);


	//bud_con
	var bud_con_AK=output_color(bud_con.AK,bud_con);
	var bud_con_AL=output_color(bud_con.AL,bud_con);
	var bud_con_AR=output_color(bud_con.AR,bud_con);
	var bud_con_AZ=output_color(bud_con.AZ,bud_con);
	var bud_con_CA=output_color(bud_con.CA,bud_con);
	var bud_con_CO=output_color(bud_con.CO,bud_con);
	var bud_con_CT=output_color(bud_con.CT,bud_con);
	var bud_con_DC=output_color(bud_con.DC,bud_con);
	var bud_con_DE=output_color(bud_con.DE,bud_con);
	var bud_con_FL=output_color(bud_con.FL,bud_con);
	var bud_con_GA=output_color(bud_con.GA,bud_con);
	var bud_con_HI=output_color(bud_con.HI,bud_con);
	var bud_con_IA=output_color(bud_con.IA,bud_con);
	var bud_con_ID=output_color(bud_con.ID,bud_con);
	var bud_con_IL=output_color(bud_con.IL,bud_con);
	var bud_con_IN=output_color(bud_con.IN,bud_con);
	var bud_con_KS=output_color(bud_con.KS,bud_con);
	var bud_con_KY=output_color(bud_con.KY,bud_con);
	var bud_con_LA=output_color(bud_con.LA,bud_con);
	var bud_con_MA=output_color(bud_con.MA,bud_con);
	var bud_con_ME=output_color(bud_con.ME,bud_con);
	var bud_con_MD=output_color(bud_con.MD,bud_con);
	var bud_con_MI=output_color(bud_con.MI,bud_con);
	var bud_con_MN=output_color(bud_con.MN,bud_con);
	var bud_con_MO=output_color(bud_con.MO,bud_con);
	var bud_con_MS=output_color(bud_con.MS,bud_con);
	var bud_con_NC=output_color(bud_con.NC,bud_con);
	var bud_con_ND=output_color(bud_con.ND,bud_con);
	var bud_con_NE=output_color(bud_con.NE,bud_con);
	var bud_con_NH=output_color(bud_con.NH,bud_con);
	var bud_con_NJ=output_color(bud_con.NJ,bud_con);
	var bud_con_NM=output_color(bud_con.NM,bud_con);
	var bud_con_NV=output_color(bud_con.NV,bud_con);
	var bud_con_NY=output_color(bud_con.NY,bud_con);
	var bud_con_OH=output_color(bud_con.OH,bud_con);
	var bud_con_OK=output_color(bud_con.OK,bud_con);
	var bud_con_OR=output_color(bud_con.OR,bud_con);
	var bud_con_PA=output_color(bud_con.PA,bud_con);
	var bud_con_RI=output_color(bud_con.RI,bud_con);
	var bud_con_SC=output_color(bud_con.SC,bud_con);
	var bud_con_SD=output_color(bud_con.SD,bud_con);
	var bud_con_TN=output_color(bud_con.TN,bud_con);
	var bud_con_TX=output_color(bud_con.TX,bud_con);
	var bud_con_UT=output_color(bud_con.UT,bud_con);
	var bud_con_VA=output_color(bud_con.VA,bud_con);
	var bud_con_VT=output_color(bud_con.VT,bud_con);
	var bud_con_WA=output_color(bud_con.WA,bud_con);
	var bud_con_WI=output_color(bud_con.MI,bud_con);
	var bud_con_WV=output_color(bud_con.WV,bud_con);
	var bud_con_WY=output_color(bud_con.WY,bud_con);

	//bud_auth
	var bud_auth_AK=output_color(bud_auth.AK,bud_auth);
	var bud_auth_AL=output_color(bud_auth.AL,bud_auth);
	var bud_auth_AR=output_color(bud_auth.AR,bud_auth);
	var bud_auth_AZ=output_color(bud_auth.AZ,bud_auth);
	var bud_auth_CA=output_color(bud_auth.CA,bud_auth);
	var bud_auth_CO=output_color(bud_auth.CO,bud_auth);
	var bud_auth_CT=output_color(bud_auth.CT,bud_auth);
	var bud_auth_DC=output_color(bud_auth.DC,bud_auth);
	var bud_auth_DE=output_color(bud_auth.DE,bud_auth);
	var bud_auth_FL=output_color(bud_auth.FL,bud_auth);
	var bud_auth_GA=output_color(bud_auth.GA,bud_auth);
	var bud_auth_HI=output_color(bud_auth.HI,bud_auth);
	var bud_auth_IA=output_color(bud_auth.IA,bud_auth);
	var bud_auth_ID=output_color(bud_auth.ID,bud_auth);
	var bud_auth_IL=output_color(bud_auth.IL,bud_auth);
	var bud_auth_IN=output_color(bud_auth.IN,bud_auth);
	var bud_auth_KS=output_color(bud_auth.KS,bud_auth);
	var bud_auth_KY=output_color(bud_auth.KY,bud_auth);
	var bud_auth_LA=output_color(bud_auth.LA,bud_auth);
	var bud_auth_MA=output_color(bud_auth.MA,bud_auth);
	var bud_auth_ME=output_color(bud_auth.ME,bud_auth);
	var bud_auth_MD=output_color(bud_auth.MD,bud_auth);
	var bud_auth_MI=output_color(bud_auth.MI,bud_auth);
	var bud_auth_MN=output_color(bud_auth.MN,bud_auth);
	var bud_auth_MO=output_color(bud_auth.MO,bud_auth);
	var bud_auth_MS=output_color(bud_auth.MS,bud_auth);
	var bud_auth_NC=output_color(bud_auth.NC,bud_auth);
	var bud_auth_ND=output_color(bud_auth.ND,bud_auth);
	var bud_auth_NE=output_color(bud_auth.NE,bud_auth);
	var bud_auth_NH=output_color(bud_auth.NH,bud_auth);
	var bud_auth_NJ=output_color(bud_auth.NJ,bud_auth);
	var bud_auth_NM=output_color(bud_auth.NM,bud_auth);
	var bud_auth_NV=output_color(bud_auth.NV,bud_auth);
	var bud_auth_NY=output_color(bud_auth.NY,bud_auth);
	var bud_auth_OH=output_color(bud_auth.OH,bud_auth);
	var bud_auth_OK=output_color(bud_auth.OK,bud_auth);
	var bud_auth_OR=output_color(bud_auth.OR,bud_auth);
	var bud_auth_PA=output_color(bud_auth.PA,bud_auth);
	var bud_auth_RI=output_color(bud_auth.RI,bud_auth);
	var bud_auth_SC=output_color(bud_auth.SC,bud_auth);
	var bud_auth_SD=output_color(bud_auth.SD,bud_auth);
	var bud_auth_TN=output_color(bud_auth.TN,bud_auth);
	var bud_auth_TX=output_color(bud_auth.TX,bud_auth);
	var bud_auth_UT=output_color(bud_auth.UT,bud_auth);
	var bud_auth_VA=output_color(bud_auth.VA,bud_auth);
	var bud_auth_VT=output_color(bud_auth.VT,bud_auth);
	var bud_auth_WA=output_color(bud_auth.WA,bud_auth);
	var bud_auth_WI=output_color(bud_auth.MI,bud_auth);
	var bud_auth_WV=output_color(bud_auth.WV,bud_auth);
	var bud_auth_WY=output_color(bud_auth.WY,bud_auth);


	//dru_con
	var dru_con_AK=output_color(dru_con.AK,dru_con);
	var dru_con_AL=output_color(dru_con.AL,dru_con);
	var dru_con_AR=output_color(dru_con.AR,dru_con);
	var dru_con_AZ=output_color(dru_con.AZ,dru_con);
	var dru_con_CA=output_color(dru_con.CA,dru_con);
	var dru_con_CO=output_color(dru_con.CO,dru_con);
	var dru_con_CT=output_color(dru_con.CT,dru_con);
	var dru_con_DC=output_color(dru_con.DC,dru_con);
	var dru_con_DE=output_color(dru_con.DE,dru_con);
	var dru_con_FL=output_color(dru_con.FL,dru_con);
	var dru_con_GA=output_color(dru_con.GA,dru_con);
	var dru_con_HI=output_color(dru_con.HI,dru_con);
	var dru_con_IA=output_color(dru_con.IA,dru_con);
	var dru_con_ID=output_color(dru_con.ID,dru_con);
	var dru_con_IL=output_color(dru_con.IL,dru_con);
	var dru_con_IN=output_color(dru_con.IN,dru_con);
	var dru_con_KS=output_color(dru_con.KS,dru_con);
	var dru_con_KY=output_color(dru_con.KY,dru_con);
	var dru_con_LA=output_color(dru_con.LA,dru_con);
	var dru_con_MA=output_color(dru_con.MA,dru_con);
	var dru_con_ME=output_color(dru_con.ME,dru_con);
	var dru_con_MD=output_color(dru_con.MD,dru_con);
	var dru_con_MI=output_color(dru_con.MI,dru_con);
	var dru_con_MN=output_color(dru_con.MN,dru_con);
	var dru_con_MO=output_color(dru_con.MO,dru_con);
	var dru_con_MS=output_color(dru_con.MS,dru_con);
	var dru_con_NC=output_color(dru_con.NC,dru_con);
	var dru_con_ND=output_color(dru_con.ND,dru_con);
	var dru_con_NE=output_color(dru_con.NE,dru_con);
	var dru_con_NH=output_color(dru_con.NH,dru_con);
	var dru_con_NJ=output_color(dru_con.NJ,dru_con);
	var dru_con_NM=output_color(dru_con.NM,dru_con);
	var dru_con_NV=output_color(dru_con.NV,dru_con);
	var dru_con_NY=output_color(dru_con.NY,dru_con);
	var dru_con_OH=output_color(dru_con.OH,dru_con);
	var dru_con_OK=output_color(dru_con.OK,dru_con);
	var dru_con_OR=output_color(dru_con.OR,dru_con);
	var dru_con_PA=output_color(dru_con.PA,dru_con);
	var dru_con_RI=output_color(dru_con.RI,dru_con);
	var dru_con_SC=output_color(dru_con.SC,dru_con);
	var dru_con_SD=output_color(dru_con.SD,dru_con);
	var dru_con_TN=output_color(dru_con.TN,dru_con);
	var dru_con_TX=output_color(dru_con.TX,dru_con);
	var dru_con_UT=output_color(dru_con.UT,dru_con);
	var dru_con_VA=output_color(dru_con.VA,dru_con);
	var dru_con_VT=output_color(dru_con.VT,dru_con);
	var dru_con_WA=output_color(dru_con.WA,dru_con);
	var dru_con_WI=output_color(dru_con.MI,dru_con);
	var dru_con_WV=output_color(dru_con.WV,dru_con);
	var dru_con_WY=output_color(dru_con.WY,dru_con);

		//dru_auth
	var dru_auth_AK=output_color(dru_auth.AK,dru_auth);
	var dru_auth_AL=output_color(dru_auth.AL,dru_auth);
	var dru_auth_AR=output_color(dru_auth.AR,dru_auth);
	var dru_auth_AZ=output_color(dru_auth.AZ,dru_auth);
	var dru_auth_CA=output_color(dru_auth.CA,dru_auth);
	var dru_auth_CO=output_color(dru_auth.CO,dru_auth);
	var dru_auth_CT=output_color(dru_auth.CT,dru_auth);
	var dru_auth_DC=output_color(dru_auth.DC,dru_auth);
	var dru_auth_DE=output_color(dru_auth.DE,dru_auth);
	var dru_auth_FL=output_color(dru_auth.FL,dru_auth);
	var dru_auth_GA=output_color(dru_auth.GA,dru_auth);
	var dru_auth_HI=output_color(dru_auth.HI,dru_auth);
	var dru_auth_IA=output_color(dru_auth.IA,dru_auth);
	var dru_auth_ID=output_color(dru_auth.ID,dru_auth);
	var dru_auth_IL=output_color(dru_auth.IL,dru_auth);
	var dru_auth_IN=output_color(dru_auth.IN,dru_auth);
	var dru_auth_KS=output_color(dru_auth.KS,dru_auth);
	var dru_auth_KY=output_color(dru_auth.KY,dru_auth);
	var dru_auth_LA=output_color(dru_auth.LA,dru_auth);
	var dru_auth_MA=output_color(dru_auth.MA,dru_auth);
	var dru_auth_ME=output_color(dru_auth.ME,dru_auth);
	var dru_auth_MD=output_color(dru_auth.MD,dru_auth);
	var dru_auth_MI=output_color(dru_auth.MI,dru_auth);
	var dru_auth_MN=output_color(dru_auth.MN,dru_auth);
	var dru_auth_MO=output_color(dru_auth.MO,dru_auth);
	var dru_auth_MS=output_color(dru_auth.MS,dru_auth);
	var dru_auth_NC=output_color(dru_auth.NC,dru_auth);
	var dru_auth_ND=output_color(dru_auth.ND,dru_auth);
	var dru_auth_NE=output_color(dru_auth.NE,dru_auth);
	var dru_auth_NH=output_color(dru_auth.NH,dru_auth);
	var dru_auth_NJ=output_color(dru_auth.NJ,dru_auth);
	var dru_auth_NM=output_color(dru_auth.NM,dru_auth);
	var dru_auth_NV=output_color(dru_auth.NV,dru_auth);
	var dru_auth_NY=output_color(dru_auth.NY,dru_auth);
	var dru_auth_OH=output_color(dru_auth.OH,dru_auth);
	var dru_auth_OK=output_color(dru_auth.OK,dru_auth);
	var dru_auth_OR=output_color(dru_auth.OR,dru_auth);
	var dru_auth_PA=output_color(dru_auth.PA,dru_auth);
	var dru_auth_RI=output_color(dru_auth.RI,dru_auth);
	var dru_auth_SC=output_color(dru_auth.SC,dru_auth);
	var dru_auth_SD=output_color(dru_auth.SD,dru_auth);
	var dru_auth_TN=output_color(dru_auth.TN,dru_auth);
	var dru_auth_TX=output_color(dru_auth.TX,dru_auth);
	var dru_auth_UT=output_color(dru_auth.UT,dru_auth);
	var dru_auth_VA=output_color(dru_auth.VA,dru_auth);
	var dru_auth_VT=output_color(dru_auth.VT,dru_auth);
	var dru_auth_WA=output_color(dru_auth.WA,dru_auth);
	var dru_auth_WI=output_color(dru_auth.MI,dru_auth);
	var dru_auth_WV=output_color(dru_auth.WV,dru_auth);
	var dru_auth_WY=output_color(dru_auth.WY,dru_auth);

		//tax_con
	var tax_con_AK=output_color(tax_con.AK,tax_con);
	var tax_con_AL=output_color(tax_con.AL,tax_con);
	var tax_con_AR=output_color(tax_con.AR,tax_con);
	var tax_con_AZ=output_color(tax_con.AZ,tax_con);
	var tax_con_CA=output_color(tax_con.CA,tax_con);
	var tax_con_CO=output_color(tax_con.CO,tax_con);
	var tax_con_CT=output_color(tax_con.CT,tax_con);
	var tax_con_DC=output_color(tax_con.DC,tax_con);
	var tax_con_DE=output_color(tax_con.DE,tax_con);
	var tax_con_FL=output_color(tax_con.FL,tax_con);
	var tax_con_GA=output_color(tax_con.GA,tax_con);
	var tax_con_HI=output_color(tax_con.HI,tax_con);
	var tax_con_IA=output_color(tax_con.IA,tax_con);
	var tax_con_ID=output_color(tax_con.ID,tax_con);
	var tax_con_IL=output_color(tax_con.IL,tax_con);
	var tax_con_IN=output_color(tax_con.IN,tax_con);
	var tax_con_KS=output_color(tax_con.KS,tax_con);
	var tax_con_KY=output_color(tax_con.KY,tax_con);
	var tax_con_LA=output_color(tax_con.LA,tax_con);
	var tax_con_MA=output_color(tax_con.MA,tax_con);
	var tax_con_ME=output_color(tax_con.ME,tax_con);
	var tax_con_MD=output_color(tax_con.MD,tax_con);
	var tax_con_MI=output_color(tax_con.MI,tax_con);
	var tax_con_MN=output_color(tax_con.MN,tax_con);
	var tax_con_MO=output_color(tax_con.MO,tax_con);
	var tax_con_MS=output_color(tax_con.MS,tax_con);
	var tax_con_NC=output_color(tax_con.NC,tax_con);
	var tax_con_ND=output_color(tax_con.ND,tax_con);
	var tax_con_NE=output_color(tax_con.NE,tax_con);
	var tax_con_NH=output_color(tax_con.NH,tax_con);
	var tax_con_NJ=output_color(tax_con.NJ,tax_con);
	var tax_con_NM=output_color(tax_con.NM,tax_con);
	var tax_con_NV=output_color(tax_con.NV,tax_con);
	var tax_con_NY=output_color(tax_con.NY,tax_con);
	var tax_con_OH=output_color(tax_con.OH,tax_con);
	var tax_con_OK=output_color(tax_con.OK,tax_con);
	var tax_con_OR=output_color(tax_con.OR,tax_con);
	var tax_con_PA=output_color(tax_con.PA,tax_con);
	var tax_con_RI=output_color(tax_con.RI,tax_con);
	var tax_con_SC=output_color(tax_con.SC,tax_con);
	var tax_con_SD=output_color(tax_con.SD,tax_con);
	var tax_con_TN=output_color(tax_con.TN,tax_con);
	var tax_con_TX=output_color(tax_con.TX,tax_con);
	var tax_con_UT=output_color(tax_con.UT,tax_con);
	var tax_con_VA=output_color(tax_con.VA,tax_con);
	var tax_con_VT=output_color(tax_con.VT,tax_con);
	var tax_con_WA=output_color(tax_con.WA,tax_con);
	var tax_con_WI=output_color(tax_con.MI,tax_con);
	var tax_con_WV=output_color(tax_con.WV,tax_con);
	var tax_con_WY=output_color(tax_con.WY,tax_con);

		//tax_auth
	var tax_auth_AK=output_color(tax_auth.AK,tax_auth);
	var tax_auth_AL=output_color(tax_auth.AL,tax_auth);
	var tax_auth_AR=output_color(tax_auth.AR,tax_auth);
	var tax_auth_AZ=output_color(tax_auth.AZ,tax_auth);
	var tax_auth_CA=output_color(tax_auth.CA,tax_auth);
	var tax_auth_CO=output_color(tax_auth.CO,tax_auth);
	var tax_auth_CT=output_color(tax_auth.CT,tax_auth);
	var tax_auth_DC=output_color(tax_auth.DC,tax_auth);
	var tax_auth_DE=output_color(tax_auth.DE,tax_auth);
	var tax_auth_FL=output_color(tax_auth.FL,tax_auth);
	var tax_auth_GA=output_color(tax_auth.GA,tax_auth);
	var tax_auth_HI=output_color(tax_auth.HI,tax_auth);
	var tax_auth_IA=output_color(tax_auth.IA,tax_auth);
	var tax_auth_ID=output_color(tax_auth.ID,tax_auth);
	var tax_auth_IL=output_color(tax_auth.IL,tax_auth);
	var tax_auth_IN=output_color(tax_auth.IN,tax_auth);
	var tax_auth_KS=output_color(tax_auth.KS,tax_auth);
	var tax_auth_KY=output_color(tax_auth.KY,tax_auth);
	var tax_auth_LA=output_color(tax_auth.LA,tax_auth);
	var tax_auth_MA=output_color(tax_auth.MA,tax_auth);
	var tax_auth_ME=output_color(tax_auth.ME,tax_auth);
	var tax_auth_MD=output_color(tax_auth.MD,tax_auth);
	var tax_auth_MI=output_color(tax_auth.MI,tax_auth);
	var tax_auth_MN=output_color(tax_auth.MN,tax_auth);
	var tax_auth_MO=output_color(tax_auth.MO,tax_auth);
	var tax_auth_MS=output_color(tax_auth.MS,tax_auth);
	var tax_auth_NC=output_color(tax_auth.NC,tax_auth);
	var tax_auth_ND=output_color(tax_auth.ND,tax_auth);
	var tax_auth_NE=output_color(tax_auth.NE,tax_auth);
	var tax_auth_NH=output_color(tax_auth.NH,tax_auth);
	var tax_auth_NJ=output_color(tax_auth.NJ,tax_auth);
	var tax_auth_NM=output_color(tax_auth.NM,tax_auth);
	var tax_auth_NV=output_color(tax_auth.NV,tax_auth);
	var tax_auth_NY=output_color(tax_auth.NY,tax_auth);
	var tax_auth_OH=output_color(tax_auth.OH,tax_auth);
	var tax_auth_OK=output_color(tax_auth.OK,tax_auth);
	var tax_auth_OR=output_color(tax_auth.OR,tax_auth);
	var tax_auth_PA=output_color(tax_auth.PA,tax_auth);
	var tax_auth_RI=output_color(tax_auth.RI,tax_auth);
	var tax_auth_SC=output_color(tax_auth.SC,tax_auth);
	var tax_auth_SD=output_color(tax_auth.SD,tax_auth);
	var tax_auth_TN=output_color(tax_auth.TN,tax_auth);
	var tax_auth_TX=output_color(tax_auth.TX,tax_auth);
	var tax_auth_UT=output_color(tax_auth.UT,tax_auth);
	var tax_auth_VA=output_color(tax_auth.VA,tax_auth);
	var tax_auth_VT=output_color(tax_auth.VT,tax_auth);
	var tax_auth_WA=output_color(tax_auth.WA,tax_auth);
	var tax_auth_WI=output_color(tax_auth.MI,tax_auth);
	var tax_auth_WV=output_color(tax_auth.WV,tax_auth);
	var tax_auth_WY=output_color(tax_auth.WY,tax_auth);

		//edu_con
	var edu_con_AK=output_color(edu_con.AK,edu_con);
	var edu_con_AL=output_color(edu_con.AL,edu_con);
	var edu_con_AR=output_color(edu_con.AR,edu_con);
	var edu_con_AZ=output_color(edu_con.AZ,edu_con);
	var edu_con_CA=output_color(edu_con.CA,edu_con);
	var edu_con_CO=output_color(edu_con.CO,edu_con);
	var edu_con_CT=output_color(edu_con.CT,edu_con);
	var edu_con_DC=output_color(edu_con.DC,edu_con);
	var edu_con_DE=output_color(edu_con.DE,edu_con);
	var edu_con_FL=output_color(edu_con.FL,edu_con);
	var edu_con_GA=output_color(edu_con.GA,edu_con);
	var edu_con_HI=output_color(edu_con.HI,edu_con);
	var edu_con_IA=output_color(edu_con.IA,edu_con);
	var edu_con_ID=output_color(edu_con.ID,edu_con);
	var edu_con_IL=output_color(edu_con.IL,edu_con);
	var edu_con_IN=output_color(edu_con.IN,edu_con);
	var edu_con_KS=output_color(edu_con.KS,edu_con);
	var edu_con_KY=output_color(edu_con.KY,edu_con);
	var edu_con_LA=output_color(edu_con.LA,edu_con);
	var edu_con_MA=output_color(edu_con.MA,edu_con);
	var edu_con_ME=output_color(edu_con.ME,edu_con);
	var edu_con_MD=output_color(edu_con.MD,edu_con);
	var edu_con_MI=output_color(edu_con.MI,edu_con);
	var edu_con_MN=output_color(edu_con.MN,edu_con);
	var edu_con_MO=output_color(edu_con.MO,edu_con);
	var edu_con_MS=output_color(edu_con.MS,edu_con);
	var edu_con_NC=output_color(edu_con.NC,edu_con);
	var edu_con_ND=output_color(edu_con.ND,edu_con);
	var edu_con_NE=output_color(edu_con.NE,edu_con);
	var edu_con_NH=output_color(edu_con.NH,edu_con);
	var edu_con_NJ=output_color(edu_con.NJ,edu_con);
	var edu_con_NM=output_color(edu_con.NM,edu_con);
	var edu_con_NV=output_color(edu_con.NV,edu_con);
	var edu_con_NY=output_color(edu_con.NY,edu_con);
	var edu_con_OH=output_color(edu_con.OH,edu_con);
	var edu_con_OK=output_color(edu_con.OK,edu_con);
	var edu_con_OR=output_color(edu_con.OR,edu_con);
	var edu_con_PA=output_color(edu_con.PA,edu_con);
	var edu_con_RI=output_color(edu_con.RI,edu_con);
	var edu_con_SC=output_color(edu_con.SC,edu_con);
	var edu_con_SD=output_color(edu_con.SD,edu_con);
	var edu_con_TN=output_color(edu_con.TN,edu_con);
	var edu_con_TX=output_color(edu_con.TX,edu_con);
	var edu_con_UT=output_color(edu_con.UT,edu_con);
	var edu_con_VA=output_color(edu_con.VA,edu_con);
	var edu_con_VT=output_color(edu_con.VT,edu_con);
	var edu_con_WA=output_color(edu_con.WA,edu_con);
	var edu_con_WI=output_color(edu_con.MI,edu_con);
	var edu_con_WV=output_color(edu_con.WV,edu_con);
	var edu_con_WY=output_color(edu_con.WY,edu_con);


			//edu_auth
	var edu_auth_AK=output_color(edu_auth.AK,edu_auth);
	var edu_auth_AL=output_color(edu_auth.AL,edu_auth);
	var edu_auth_AR=output_color(edu_auth.AR,edu_auth);
	var edu_auth_AZ=output_color(edu_auth.AZ,edu_auth);
	var edu_auth_CA=output_color(edu_auth.CA,edu_auth);
	var edu_auth_CO=output_color(edu_auth.CO,edu_auth);
	var edu_auth_CT=output_color(edu_auth.CT,edu_auth);
	var edu_auth_DC=output_color(edu_auth.DC,edu_auth);
	var edu_auth_DE=output_color(edu_auth.DE,edu_auth);
	var edu_auth_FL=output_color(edu_auth.FL,edu_auth);
	var edu_auth_GA=output_color(edu_auth.GA,edu_auth);
	var edu_auth_HI=output_color(edu_auth.HI,edu_auth);
	var edu_auth_IA=output_color(edu_auth.IA,edu_auth);
	var edu_auth_ID=output_color(edu_auth.ID,edu_auth);
	var edu_auth_IL=output_color(edu_auth.IL,edu_auth);
	var edu_auth_IN=output_color(edu_auth.IN,edu_auth);
	var edu_auth_KS=output_color(edu_auth.KS,edu_auth);
	var edu_auth_KY=output_color(edu_auth.KY,edu_auth);
	var edu_auth_LA=output_color(edu_auth.LA,edu_auth);
	var edu_auth_MA=output_color(edu_auth.MA,edu_auth);
	var edu_auth_ME=output_color(edu_auth.ME,edu_auth);
	var edu_auth_MD=output_color(edu_auth.MD,edu_auth);
	var edu_auth_MI=output_color(edu_auth.MI,edu_auth);
	var edu_auth_MN=output_color(edu_auth.MN,edu_auth);
	var edu_auth_MO=output_color(edu_auth.MO,edu_auth);
	var edu_auth_MS=output_color(edu_auth.MS,edu_auth);
	var edu_auth_NC=output_color(edu_auth.NC,edu_auth);
	var edu_auth_ND=output_color(edu_auth.ND,edu_auth);
	var edu_auth_NE=output_color(edu_auth.NE,edu_auth);
	var edu_auth_NH=output_color(edu_auth.NH,edu_auth);
	var edu_auth_NJ=output_color(edu_auth.NJ,edu_auth);
	var edu_auth_NM=output_color(edu_auth.NM,edu_auth);
	var edu_auth_NV=output_color(edu_auth.NV,edu_auth);
	var edu_auth_NY=output_color(edu_auth.NY,edu_auth);
	var edu_auth_OH=output_color(edu_auth.OH,edu_auth);
	var edu_auth_OK=output_color(edu_auth.OK,edu_auth);
	var edu_auth_OR=output_color(edu_auth.OR,edu_auth);
	var edu_auth_PA=output_color(edu_auth.PA,edu_auth);
	var edu_auth_RI=output_color(edu_auth.RI,edu_auth);
	var edu_auth_SC=output_color(edu_auth.SC,edu_auth);
	var edu_auth_SD=output_color(edu_auth.SD,edu_auth);
	var edu_auth_TN=output_color(edu_auth.TN,edu_auth);
	var edu_auth_TX=output_color(edu_auth.TX,edu_auth);
	var edu_auth_UT=output_color(edu_auth.UT,edu_auth);
	var edu_auth_VA=output_color(edu_auth.VA,edu_auth);
	var edu_auth_VT=output_color(edu_auth.VT,edu_auth);
	var edu_auth_WA=output_color(edu_auth.WA,edu_auth);
	var edu_auth_WI=output_color(edu_auth.MI,edu_auth);
	var edu_auth_WV=output_color(edu_auth.WV,edu_auth);
	var edu_auth_WY=output_color(edu_auth.WY,edu_auth);
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

		$('#map1').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${out_state_auth_AK[0]},${out_state_auth_AK[1]},${out_state_auth_AK[2]})`},
		  'AL':{fill:`rgb(${out_state_auth_AL[0]},${out_state_auth_AL[1]},${out_state_auth_AL[2]})`},
		  'AR':{fill:`rgb(${out_state_auth_AR[0]},${out_state_auth_AR[1]},${out_state_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${out_state_auth_AZ[0]},${out_state_auth_AZ[1]},${out_state_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${out_state_auth_CA[0]},${out_state_auth_CA[1]},${out_state_auth_CA[2]})`},
		  'CO':{fill:`rgb(${out_state_auth_CO[0]},${out_state_auth_CO[1]},${out_state_auth_CO[2]})`},
		  'CT':{fill:`rgb(${out_state_auth_CT[0]},${out_state_auth_CT[1]},${out_state_auth_CT[2]})`},
		  'DC':{fill:`rgb(${out_state_auth_DC[0]},${out_state_auth_DC[1]},${out_state_auth_DC[2]})`},
		  'DE':{fill:`rgb(${out_state_auth_DE[0]},${out_state_auth_DE[1]},${out_state_auth_DE[2]})`},
		  'FL':{fill:`rgb(${out_state_auth_FL[0]},${out_state_auth_FL[1]},${out_state_auth_FL[2]})`},
		  'GA':{fill:`rgb(${out_state_auth_GA[0]},${out_state_auth_GA[1]},${out_state_auth_GA[2]})`},
		  'HI':{fill:`rgb(${out_state_auth_HI[0]},${out_state_auth_HI[1]},${out_state_auth_HI[2]})`},
		  'IA':{fill:`rgb(${out_state_auth_IA[0]},${out_state_auth_IA[1]},${out_state_auth_IA[2]})`},
		  'ID':{fill:`rgb(${out_state_auth_ID[0]},${out_state_auth_ID[1]},${out_state_auth_ID[2]})`},
		  'IL':{fill:`rgb(${out_state_auth_IL[0]},${out_state_auth_IL[1]},${out_state_auth_IL[2]})`},
		  'IN':{fill:`rgb(${out_state_auth_IN[0]},${out_state_auth_IN[1]},${out_state_auth_IN[2]})`},
		  'KS':{fill:`rgb(${out_state_auth_KS[0]},${out_state_auth_KS[1]},${out_state_auth_KS[2]})`},
		  'KY':{fill:`rgb(${out_state_auth_KY[0]},${out_state_auth_KY[1]},${out_state_auth_KY[2]})`},
		  'LA':{fill:`rgb(${out_state_auth_LA[0]},${out_state_auth_LA[1]},${out_state_auth_LA[2]})`},
		  'MA':{fill:`rgb(${out_state_auth_MA[0]},${out_state_auth_MA[1]},${out_state_auth_MA[2]})`},
		  'MD':{fill:`rgb(${out_state_auth_MD[0]},${out_state_auth_MD[1]},${out_state_auth_MD[2]})`},
		  'ME':{fill:`rgb(${out_state_auth_ME[0]},${out_state_auth_ME[1]},${out_state_auth_ME[2]})`},
		  'MI':{fill:`rgb(${out_state_auth_MI[0]},${out_state_auth_MI[1]},${out_state_auth_MI[2]})`},
		  'MN':{fill:`rgb(${out_state_auth_MN[0]},${out_state_auth_MN[1]},${out_state_auth_MN[2]})`},
		  'MO':{fill:`rgb(${out_state_auth_MO[0]},${out_state_auth_MO[1]},${out_state_auth_MO[2]})`},
		  'MS':{fill:`rgb(${out_state_auth_MS[0]},${out_state_auth_MS[1]},${out_state_auth_MS[2]})`},
		  'NC':{fill:`rgb(${out_state_auth_NC[0]},${out_state_auth_NC[1]},${out_state_auth_NC[2]})`},
		  'ND':{fill:`rgb(${out_state_auth_ND[0]},${out_state_auth_ND[1]},${out_state_auth_ND[2]})`},
		  'NE':{fill:`rgb(${out_state_auth_NE[0]},${out_state_auth_NE[1]},${out_state_auth_NE[2]})`},
		  'NH':{fill:`rgb(${out_state_auth_NH[0]},${out_state_auth_NH[1]},${out_state_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${out_state_auth_NJ[0]},${out_state_auth_NJ[1]},${out_state_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${out_state_auth_NM[0]},${out_state_auth_NM[1]},${out_state_auth_NM[2]})`},
		  'NV':{fill:`rgb(${out_state_auth_NV[0]},${out_state_auth_NV[1]},${out_state_auth_NV[2]})`},
		  'NY':{fill:`rgb(${out_state_auth_NY[0]},${out_state_auth_NY[1]},${out_state_auth_NY[2]})`},
		  'OH':{fill:`rgb(${out_state_auth_OH[0]},${out_state_auth_OH[1]},${out_state_auth_OH[2]})`},
		  'OK':{fill:`rgb(${out_state_auth_OK[0]},${out_state_auth_OK[1]},${out_state_auth_OK[2]})`},
		  'OR':{fill:`rgb(${out_state_auth_OR[0]},${out_state_auth_OR[1]},${out_state_auth_OR[2]})`},
		  'PA':{fill:`rgb(${out_state_auth_PA[0]},${out_state_auth_PA[1]},${out_state_auth_PA[2]})`},
		  'RI':{fill:`rgb(${out_state_auth_RI[0]},${out_state_auth_RI[1]},${out_state_auth_RI[2]})`},
		  'SC':{fill:`rgb(${out_state_auth_SC[0]},${out_state_auth_SC[1]},${out_state_auth_SC[2]})`},
		  'SD':{fill:`rgb(${out_state_auth_SD[0]},${out_state_auth_SD[1]},${out_state_auth_SD[2]})`},
		  'TN':{fill:`rgb(${out_state_auth_TN[0]},${out_state_auth_TN[1]},${out_state_auth_TN[2]})`},
		  'TX':{fill:`rgb(${out_state_auth_TX[0]},${out_state_auth_TX[1]},${out_state_auth_TX[2]})`},
		  'UT':{fill:`rgb(${out_state_auth_UT[0]},${out_state_auth_UT[1]},${out_state_auth_UT[2]})`},
		  'VA':{fill:`rgb(${out_state_auth_VA[0]},${out_state_auth_VA[1]},${out_state_auth_VA[2]})`},
		  'VT':{fill:`rgb(${out_state_auth_VT[0]},${out_state_auth_VT[1]},${out_state_auth_VT[2]})`},
		  'WA':{fill:`rgb(${out_state_auth_WA[0]},${out_state_auth_WA[1]},${out_state_auth_WA[2]})`},
		  'WI':{fill:`rgb(${out_state_auth_WI[0]},${out_state_auth_WI[1]},${out_state_auth_WI[2]})`},
		  'WY':{fill:`rgb(${out_state_auth_WY[0]},${out_state_auth_WY[1]},${out_state_auth_WY[2]})`},
		  'WV':{fill:`rgb(${out_state_auth_WV[0]},${out_state_auth_WV[1]},${out_state_auth_WV[2]})`}

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#map2').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${war_con_AK[0]},${war_con_AK[1]},${war_con_AK[2]})`},
		  'AL':{fill:`rgb(${war_con_AL[0]},${war_con_AL[1]},${war_con_AL[2]})`},
		  'AR':{fill:`rgb(${war_con_AR[0]},${war_con_AR[1]},${war_con_AR[2]})`},
		  'AZ':{fill:`rgb(${war_con_AZ[0]},${war_con_AZ[1]},${war_con_AZ[2]})`},
		  'CA':{fill:`rgb(${war_con_CA[0]},${war_con_CA[1]},${war_con_CA[2]})`},
		  'CO':{fill:`rgb(${war_con_CO[0]},${war_con_CO[1]},${war_con_CO[2]})`},
		  'CT':{fill:`rgb(${war_con_CT[0]},${war_con_CT[1]},${war_con_CT[2]})`},
		  'DC':{fill:`rgb(${war_con_DC[0]},${war_con_DC[1]},${war_con_DC[2]})`},
		  'DE':{fill:`rgb(${war_con_DE[0]},${war_con_DE[1]},${war_con_DE[2]})`},
		  'FL':{fill:`rgb(${war_con_FL[0]},${war_con_FL[1]},${war_con_FL[2]})`},
		  'GA':{fill:`rgb(${war_con_GA[0]},${war_con_GA[1]},${war_con_GA[2]})`},
		  'HI':{fill:`rgb(${war_con_HI[0]},${war_con_HI[1]},${war_con_HI[2]})`},
		  'IA':{fill:`rgb(${war_con_IA[0]},${war_con_IA[1]},${war_con_IA[2]})`},
		  'ID':{fill:`rgb(${war_con_ID[0]},${war_con_ID[1]},${war_con_ID[2]})`},
		  'IL':{fill:`rgb(${war_con_IL[0]},${war_con_IL[1]},${war_con_IL[2]})`},
		  'IN':{fill:`rgb(${war_con_IN[0]},${war_con_IN[1]},${war_con_IN[2]})`},
		  'KS':{fill:`rgb(${war_con_KS[0]},${war_con_KS[1]},${war_con_KS[2]})`},
		  'KY':{fill:`rgb(${war_con_KY[0]},${war_con_KY[1]},${war_con_KY[2]})`},
		  'LA':{fill:`rgb(${war_con_LA[0]},${war_con_LA[1]},${war_con_LA[2]})`},
		  'MA':{fill:`rgb(${war_con_MA[0]},${war_con_MA[1]},${war_con_MA[2]})`},
		  'MD':{fill:`rgb(${war_con_MD[0]},${war_con_MD[1]},${war_con_MD[2]})`},
		  'ME':{fill:`rgb(${war_con_ME[0]},${war_con_ME[1]},${war_con_ME[2]})`},
		  'MI':{fill:`rgb(${war_con_MI[0]},${war_con_MI[1]},${war_con_MI[2]})`},
		  'MN':{fill:`rgb(${war_con_MN[0]},${war_con_MN[1]},${war_con_MN[2]})`},
		  'MO':{fill:`rgb(${war_con_MO[0]},${war_con_MO[1]},${war_con_MO[2]})`},
		  'MS':{fill:`rgb(${war_con_MS[0]},${war_con_MS[1]},${war_con_MS[2]})`},
		  'NC':{fill:`rgb(${war_con_NC[0]},${war_con_NC[1]},${war_con_NC[2]})`},
		  'ND':{fill:`rgb(${war_con_ND[0]},${war_con_ND[1]},${war_con_ND[2]})`},
		  'NE':{fill:`rgb(${war_con_NE[0]},${war_con_NE[1]},${war_con_NE[2]})`},
		  'NH':{fill:`rgb(${war_con_NH[0]},${war_con_NH[1]},${war_con_NH[2]})`},
		  'NJ':{fill:`rgb(${war_con_NJ[0]},${war_con_NJ[1]},${war_con_NJ[2]})`},
		  'NM':{fill:`rgb(${war_con_NM[0]},${war_con_NM[1]},${war_con_NM[2]})`},
		  'NV':{fill:`rgb(${war_con_NV[0]},${war_con_NV[1]},${war_con_NV[2]})`},
		  'NY':{fill:`rgb(${war_con_NY[0]},${war_con_NY[1]},${war_con_NY[2]})`},
		  'OH':{fill:`rgb(${war_con_OH[0]},${war_con_OH[1]},${war_con_OH[2]})`},
		  'OK':{fill:`rgb(${war_con_OK[0]},${war_con_OK[1]},${war_con_OK[2]})`},
		  'OR':{fill:`rgb(${war_con_OR[0]},${war_con_OR[1]},${war_con_OR[2]})`},
		  'PA':{fill:`rgb(${war_con_PA[0]},${war_con_PA[1]},${war_con_PA[2]})`},
		  'RI':{fill:`rgb(${war_con_RI[0]},${war_con_RI[1]},${war_con_RI[2]})`},
		  'SC':{fill:`rgb(${war_con_SC[0]},${war_con_SC[1]},${war_con_SC[2]})`},
		  'SD':{fill:`rgb(${war_con_SD[0]},${war_con_SD[1]},${war_con_SD[2]})`},
		  'TN':{fill:`rgb(${war_con_TN[0]},${war_con_TN[1]},${war_con_TN[2]})`},
		  'TX':{fill:`rgb(${war_con_TX[0]},${war_con_TX[1]},${war_con_TX[2]})`},
		  'UT':{fill:`rgb(${war_con_UT[0]},${war_con_UT[1]},${war_con_UT[2]})`},
		  'VA':{fill:`rgb(${war_con_VA[0]},${war_con_VA[1]},${war_con_VA[2]})`},
		  'VT':{fill:`rgb(${war_con_VT[0]},${war_con_VT[1]},${war_con_VT[2]})`},
		  'WA':{fill:`rgb(${war_con_WA[0]},${war_con_WA[1]},${war_con_WA[2]})`},
		  'WI':{fill:`rgb(${war_con_WI[0]},${war_con_WI[1]},${war_con_WI[2]})`},
		  'WY':{fill:`rgb(${war_con_WY[0]},${war_con_WY[1]},${war_con_WY[2]})`},
		  'WV':{fill:`rgb(${war_con_WV[0]},${war_con_WV[1]},${war_con_WV[2]})`}

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#map3').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${war_auth_AK[0]},${war_auth_AK[1]},${war_auth_AK[2]})`},
		  'AL':{fill:`rgb(${war_auth_AL[0]},${war_auth_AL[1]},${war_auth_AL[2]})`},
		  'AR':{fill:`rgb(${war_auth_AR[0]},${war_auth_AR[1]},${war_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${war_auth_AZ[0]},${war_auth_AZ[1]},${war_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${war_auth_CA[0]},${war_auth_CA[1]},${war_auth_CA[2]})`},
		  'CO':{fill:`rgb(${war_auth_CO[0]},${war_auth_CO[1]},${war_auth_CO[2]})`},
		  'CT':{fill:`rgb(${war_auth_CT[0]},${war_auth_CT[1]},${war_auth_CT[2]})`},
		  'DC':{fill:`rgb(${war_auth_DC[0]},${war_auth_DC[1]},${war_auth_DC[2]})`},
		  'DE':{fill:`rgb(${war_auth_DE[0]},${war_auth_DE[1]},${war_auth_DE[2]})`},
		  'FL':{fill:`rgb(${war_auth_FL[0]},${war_auth_FL[1]},${war_auth_FL[2]})`},
		  'GA':{fill:`rgb(${war_auth_GA[0]},${war_auth_GA[1]},${war_auth_GA[2]})`},
		  'HI':{fill:`rgb(${war_auth_HI[0]},${war_auth_HI[1]},${war_auth_HI[2]})`},
		  'IA':{fill:`rgb(${war_auth_IA[0]},${war_auth_IA[1]},${war_auth_IA[2]})`},
		  'ID':{fill:`rgb(${war_auth_ID[0]},${war_auth_ID[1]},${war_auth_ID[2]})`},
		  'IL':{fill:`rgb(${war_auth_IL[0]},${war_auth_IL[1]},${war_auth_IL[2]})`},
		  'IN':{fill:`rgb(${war_auth_IN[0]},${war_auth_IN[1]},${war_auth_IN[2]})`},
		  'KS':{fill:`rgb(${war_auth_KS[0]},${war_auth_KS[1]},${war_auth_KS[2]})`},
		  'KY':{fill:`rgb(${war_auth_KY[0]},${war_auth_KY[1]},${war_auth_KY[2]})`},
		  'LA':{fill:`rgb(${war_auth_LA[0]},${war_auth_LA[1]},${war_auth_LA[2]})`},
		  'MA':{fill:`rgb(${war_auth_MA[0]},${war_auth_MA[1]},${war_auth_MA[2]})`},
		  'MD':{fill:`rgb(${war_auth_MD[0]},${war_auth_MD[1]},${war_auth_MD[2]})`},
		  'ME':{fill:`rgb(${war_auth_ME[0]},${war_auth_ME[1]},${war_auth_ME[2]})`},
		  'MI':{fill:`rgb(${war_auth_MI[0]},${war_auth_MI[1]},${war_auth_MI[2]})`},
		  'MN':{fill:`rgb(${war_auth_MN[0]},${war_auth_MN[1]},${war_auth_MN[2]})`},
		  'MO':{fill:`rgb(${war_auth_MO[0]},${war_auth_MO[1]},${war_auth_MO[2]})`},
		  'MS':{fill:`rgb(${war_auth_MS[0]},${war_auth_MS[1]},${war_auth_MS[2]})`},
		  'NC':{fill:`rgb(${war_auth_NC[0]},${war_auth_NC[1]},${war_auth_NC[2]})`},
		  'ND':{fill:`rgb(${war_auth_ND[0]},${war_auth_ND[1]},${war_auth_ND[2]})`},
		  'NE':{fill:`rgb(${war_auth_NE[0]},${war_auth_NE[1]},${war_auth_NE[2]})`},
		  'NH':{fill:`rgb(${war_auth_NH[0]},${war_auth_NH[1]},${war_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${war_auth_NJ[0]},${war_auth_NJ[1]},${war_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${war_auth_NM[0]},${war_auth_NM[1]},${war_auth_NM[2]})`},
		  'NV':{fill:`rgb(${war_auth_NV[0]},${war_auth_NV[1]},${war_auth_NV[2]})`},
		  'NY':{fill:`rgb(${war_auth_NY[0]},${war_auth_NY[1]},${war_auth_NY[2]})`},
		  'OH':{fill:`rgb(${war_auth_OH[0]},${war_auth_OH[1]},${war_auth_OH[2]})`},
		  'OK':{fill:`rgb(${war_auth_OK[0]},${war_auth_OK[1]},${war_auth_OK[2]})`},
		  'OR':{fill:`rgb(${war_auth_OR[0]},${war_auth_OR[1]},${war_auth_OR[2]})`},
		  'PA':{fill:`rgb(${war_auth_PA[0]},${war_auth_PA[1]},${war_auth_PA[2]})`},
		  'RI':{fill:`rgb(${war_auth_RI[0]},${war_auth_RI[1]},${war_auth_RI[2]})`},
		  'SC':{fill:`rgb(${war_auth_SC[0]},${war_auth_SC[1]},${war_auth_SC[2]})`},
		  'SD':{fill:`rgb(${war_auth_SD[0]},${war_auth_SD[1]},${war_auth_SD[2]})`},
		  'TN':{fill:`rgb(${war_auth_TN[0]},${war_auth_TN[1]},${war_auth_TN[2]})`},
		  'TX':{fill:`rgb(${war_auth_TX[0]},${war_auth_TX[1]},${war_auth_TX[2]})`},
		  'UT':{fill:`rgb(${war_auth_UT[0]},${war_auth_UT[1]},${war_auth_UT[2]})`},
		  'VA':{fill:`rgb(${war_auth_VA[0]},${war_auth_VA[1]},${war_auth_VA[2]})`},
		  'VT':{fill:`rgb(${war_auth_VT[0]},${war_auth_VT[1]},${war_auth_VT[2]})`},
		  'WA':{fill:`rgb(${war_auth_WA[0]},${war_auth_WA[1]},${war_auth_WA[2]})`},
		  'WI':{fill:`rgb(${war_auth_WI[0]},${war_auth_WI[1]},${war_auth_WI[2]})`},
		  'WY':{fill:`rgb(${war_auth_WY[0]},${war_auth_WY[1]},${war_auth_WY[2]})`},
		  'WV':{fill:`rgb(${war_auth_WV[0]},${war_auth_WV[1]},${war_auth_WV[2]})`}

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		
		$('#map4').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${foreign_con_AK[0]},${foreign_con_AK[1]},${foreign_con_AK[2]})`},
		  'AL':{fill:`rgb(${foreign_con_AL[0]},${foreign_con_AL[1]},${foreign_con_AL[2]})`},
		  'AR':{fill:`rgb(${foreign_con_AR[0]},${foreign_con_AR[1]},${foreign_con_AR[2]})`},
		  'AZ':{fill:`rgb(${foreign_con_AZ[0]},${foreign_con_AZ[1]},${foreign_con_AZ[2]})`},
		  'CA':{fill:`rgb(${foreign_con_CA[0]},${foreign_con_CA[1]},${foreign_con_CA[2]})`},
		  'CO':{fill:`rgb(${foreign_con_CO[0]},${foreign_con_CO[1]},${foreign_con_CO[2]})`},
		  'CT':{fill:`rgb(${foreign_con_CT[0]},${foreign_con_CT[1]},${foreign_con_CT[2]})`},
		  'DC':{fill:`rgb(${foreign_con_DC[0]},${foreign_con_DC[1]},${foreign_con_DC[2]})`},
		  'DE':{fill:`rgb(${foreign_con_DE[0]},${foreign_con_DE[1]},${foreign_con_DE[2]})`},
		  'FL':{fill:`rgb(${foreign_con_FL[0]},${foreign_con_FL[1]},${foreign_con_FL[2]})`},
		  'GA':{fill:`rgb(${foreign_con_GA[0]},${foreign_con_GA[1]},${foreign_con_GA[2]})`},
		  'HI':{fill:`rgb(${foreign_con_HI[0]},${foreign_con_HI[1]},${foreign_con_HI[2]})`},
		  'IA':{fill:`rgb(${foreign_con_IA[0]},${foreign_con_IA[1]},${foreign_con_IA[2]})`},
		  'ID':{fill:`rgb(${foreign_con_ID[0]},${foreign_con_ID[1]},${foreign_con_ID[2]})`},
		  'IL':{fill:`rgb(${foreign_con_IL[0]},${foreign_con_IL[1]},${foreign_con_IL[2]})`},
		  'IN':{fill:`rgb(${foreign_con_IN[0]},${foreign_con_IN[1]},${foreign_con_IN[2]})`},
		  'KS':{fill:`rgb(${foreign_con_KS[0]},${foreign_con_KS[1]},${foreign_con_KS[2]})`},
		  'KY':{fill:`rgb(${foreign_con_KY[0]},${foreign_con_KY[1]},${foreign_con_KY[2]})`},
		  'LA':{fill:`rgb(${foreign_con_LA[0]},${foreign_con_LA[1]},${foreign_con_LA[2]})`},
		  'MA':{fill:`rgb(${foreign_con_MA[0]},${foreign_con_MA[1]},${foreign_con_MA[2]})`},
		  'MD':{fill:`rgb(${foreign_con_MD[0]},${foreign_con_MD[1]},${foreign_con_MD[2]})`},
		  'ME':{fill:`rgb(${foreign_con_ME[0]},${foreign_con_ME[1]},${foreign_con_ME[2]})`},
		  'MI':{fill:`rgb(${foreign_con_MI[0]},${foreign_con_MI[1]},${foreign_con_MI[2]})`},
		  'MN':{fill:`rgb(${foreign_con_MN[0]},${foreign_con_MN[1]},${foreign_con_MN[2]})`},
		  'MO':{fill:`rgb(${foreign_con_MO[0]},${foreign_con_MO[1]},${foreign_con_MO[2]})`},
		  'MS':{fill:`rgb(${foreign_con_MS[0]},${foreign_con_MS[1]},${foreign_con_MS[2]})`},
		  'NC':{fill:`rgb(${foreign_con_NC[0]},${foreign_con_NC[1]},${foreign_con_NC[2]})`},
		  'ND':{fill:`rgb(${foreign_con_ND[0]},${foreign_con_ND[1]},${foreign_con_ND[2]})`},
		  'NE':{fill:`rgb(${foreign_con_NE[0]},${foreign_con_NE[1]},${foreign_con_NE[2]})`},
		  'NH':{fill:`rgb(${foreign_con_NH[0]},${foreign_con_NH[1]},${foreign_con_NH[2]})`},
		  'NJ':{fill:`rgb(${foreign_con_NJ[0]},${foreign_con_NJ[1]},${foreign_con_NJ[2]})`},
		  'NM':{fill:`rgb(${foreign_con_NM[0]},${foreign_con_NM[1]},${foreign_con_NM[2]})`},
		  'NV':{fill:`rgb(${foreign_con_NV[0]},${foreign_con_NV[1]},${foreign_con_NV[2]})`},
		  'NY':{fill:`rgb(${foreign_con_NY[0]},${foreign_con_NY[1]},${foreign_con_NY[2]})`},
		  'OH':{fill:`rgb(${foreign_con_OH[0]},${foreign_con_OH[1]},${foreign_con_OH[2]})`},
		  'OK':{fill:`rgb(${foreign_con_OK[0]},${foreign_con_OK[1]},${foreign_con_OK[2]})`},
		  'OR':{fill:`rgb(${foreign_con_OR[0]},${foreign_con_OR[1]},${foreign_con_OR[2]})`},
		  'PA':{fill:`rgb(${foreign_con_PA[0]},${foreign_con_PA[1]},${foreign_con_PA[2]})`},
		  'RI':{fill:`rgb(${foreign_con_RI[0]},${foreign_con_RI[1]},${foreign_con_RI[2]})`},
		  'SC':{fill:`rgb(${foreign_con_SC[0]},${foreign_con_SC[1]},${foreign_con_SC[2]})`},
		  'SD':{fill:`rgb(${foreign_con_SD[0]},${foreign_con_SD[1]},${foreign_con_SD[2]})`},
		  'TN':{fill:`rgb(${foreign_con_TN[0]},${foreign_con_TN[1]},${foreign_con_TN[2]})`},
		  'TX':{fill:`rgb(${foreign_con_TX[0]},${foreign_con_TX[1]},${foreign_con_TX[2]})`},
		  'UT':{fill:`rgb(${foreign_con_UT[0]},${foreign_con_UT[1]},${foreign_con_UT[2]})`},
		  'VA':{fill:`rgb(${foreign_con_VA[0]},${foreign_con_VA[1]},${foreign_con_VA[2]})`},
		  'VT':{fill:`rgb(${foreign_con_VT[0]},${foreign_con_VT[1]},${foreign_con_VT[2]})`},
		  'WA':{fill:`rgb(${foreign_con_WA[0]},${foreign_con_WA[1]},${foreign_con_WA[2]})`},
		  'WI':{fill:`rgb(${foreign_con_WI[0]},${foreign_con_WI[1]},${foreign_con_WI[2]})`},
		  'WY':{fill:`rgb(${foreign_con_WY[0]},${foreign_con_WY[1]},${foreign_con_WY[2]})`},
		  'WV':{fill:`rgb(${foreign_con_WV[0]},${foreign_con_WV[1]},${foreign_con_WV[2]})`}

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#map5').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${war_auth_AK[0]},${war_auth_AK[1]},${war_auth_AK[2]})`},
		  'AL':{fill:`rgb(${war_auth_AL[0]},${war_auth_AL[1]},${war_auth_AL[2]})`},
		  'AR':{fill:`rgb(${war_auth_AR[0]},${war_auth_AR[1]},${war_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${war_auth_AZ[0]},${war_auth_AZ[1]},${war_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${war_auth_CA[0]},${war_auth_CA[1]},${war_auth_CA[2]})`},
		  'CO':{fill:`rgb(${war_auth_CO[0]},${war_auth_CO[1]},${war_auth_CO[2]})`},
		  'CT':{fill:`rgb(${war_auth_CT[0]},${war_auth_CT[1]},${war_auth_CT[2]})`},
		  'DC':{fill:`rgb(${war_auth_DC[0]},${war_auth_DC[1]},${war_auth_DC[2]})`},
		  'DE':{fill:`rgb(${war_auth_DE[0]},${war_auth_DE[1]},${war_auth_DE[2]})`},
		  'FL':{fill:`rgb(${war_auth_FL[0]},${war_auth_FL[1]},${war_auth_FL[2]})`},
		  'GA':{fill:`rgb(${war_auth_GA[0]},${war_auth_GA[1]},${war_auth_GA[2]})`},
		  'HI':{fill:`rgb(${war_auth_HI[0]},${war_auth_HI[1]},${war_auth_HI[2]})`},
		  'IA':{fill:`rgb(${war_auth_IA[0]},${war_auth_IA[1]},${war_auth_IA[2]})`},
		  'ID':{fill:`rgb(${war_auth_ID[0]},${war_auth_ID[1]},${war_auth_ID[2]})`},
		  'IL':{fill:`rgb(${war_auth_IL[0]},${war_auth_IL[1]},${war_auth_IL[2]})`},
		  'IN':{fill:`rgb(${war_auth_IN[0]},${war_auth_IN[1]},${war_auth_IN[2]})`},
		  'KS':{fill:`rgb(${war_auth_KS[0]},${war_auth_KS[1]},${war_auth_KS[2]})`},
		  'KY':{fill:`rgb(${war_auth_KY[0]},${war_auth_KY[1]},${war_auth_KY[2]})`},
		  'LA':{fill:`rgb(${war_auth_LA[0]},${war_auth_LA[1]},${war_auth_LA[2]})`},
		  'MA':{fill:`rgb(${war_auth_MA[0]},${war_auth_MA[1]},${war_auth_MA[2]})`},
		  'MD':{fill:`rgb(${war_auth_MD[0]},${war_auth_MD[1]},${war_auth_MD[2]})`},
		  'ME':{fill:`rgb(${war_auth_ME[0]},${war_auth_ME[1]},${war_auth_ME[2]})`},
		  'MI':{fill:`rgb(${war_auth_MI[0]},${war_auth_MI[1]},${war_auth_MI[2]})`},
		  'MN':{fill:`rgb(${war_auth_MN[0]},${war_auth_MN[1]},${war_auth_MN[2]})`},
		  'MO':{fill:`rgb(${war_auth_MO[0]},${war_auth_MO[1]},${war_auth_MO[2]})`},
		  'MS':{fill:`rgb(${war_auth_MS[0]},${war_auth_MS[1]},${war_auth_MS[2]})`},
		  'NC':{fill:`rgb(${war_auth_NC[0]},${war_auth_NC[1]},${war_auth_NC[2]})`},
		  'ND':{fill:`rgb(${war_auth_ND[0]},${war_auth_ND[1]},${war_auth_ND[2]})`},
		  'NE':{fill:`rgb(${war_auth_NE[0]},${war_auth_NE[1]},${war_auth_NE[2]})`},
		  'NH':{fill:`rgb(${war_auth_NH[0]},${war_auth_NH[1]},${war_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${war_auth_NJ[0]},${war_auth_NJ[1]},${war_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${war_auth_NM[0]},${war_auth_NM[1]},${war_auth_NM[2]})`},
		  'NV':{fill:`rgb(${war_auth_NV[0]},${war_auth_NV[1]},${war_auth_NV[2]})`},
		  'NY':{fill:`rgb(${war_auth_NY[0]},${war_auth_NY[1]},${war_auth_NY[2]})`},
		  'OH':{fill:`rgb(${war_auth_OH[0]},${war_auth_OH[1]},${war_auth_OH[2]})`},
		  'OK':{fill:`rgb(${war_auth_OK[0]},${war_auth_OK[1]},${war_auth_OK[2]})`},
		  'OR':{fill:`rgb(${war_auth_OR[0]},${war_auth_OR[1]},${war_auth_OR[2]})`},
		  'PA':{fill:`rgb(${war_auth_PA[0]},${war_auth_PA[1]},${war_auth_PA[2]})`},
		  'RI':{fill:`rgb(${war_auth_RI[0]},${war_auth_RI[1]},${war_auth_RI[2]})`},
		  'SC':{fill:`rgb(${war_auth_SC[0]},${war_auth_SC[1]},${war_auth_SC[2]})`},
		  'SD':{fill:`rgb(${war_auth_SD[0]},${war_auth_SD[1]},${war_auth_SD[2]})`},
		  'TN':{fill:`rgb(${war_auth_TN[0]},${war_auth_TN[1]},${war_auth_TN[2]})`},
		  'TX':{fill:`rgb(${war_auth_TX[0]},${war_auth_TX[1]},${war_auth_TX[2]})`},
		  'UT':{fill:`rgb(${war_auth_UT[0]},${war_auth_UT[1]},${war_auth_UT[2]})`},
		  'VA':{fill:`rgb(${war_auth_VA[0]},${war_auth_VA[1]},${war_auth_VA[2]})`},
		  'VT':{fill:`rgb(${war_auth_VT[0]},${war_auth_VT[1]},${war_auth_VT[2]})`},
		  'WA':{fill:`rgb(${war_auth_WA[0]},${war_auth_WA[1]},${war_auth_WA[2]})`},
		  'WI':{fill:`rgb(${war_auth_WI[0]},${war_auth_WI[1]},${war_auth_WI[2]})`},
		  'WY':{fill:`rgb(${war_auth_WY[0]},${war_auth_WY[1]},${war_auth_WY[2]})`},
		  'WV':{fill:`rgb(${war_auth_WV[0]},${war_auth_WV[1]},${war_auth_WV[2]})`}

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		/////////
		$('#map6').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${technology_con_AK[0]},${technology_con_AK[1]},${technology_con_AK[2]})`},
		  'AL':{fill:`rgb(${technology_con_AL[0]},${technology_con_AL[1]},${technology_con_AL[2]})`},
		  'AR':{fill:`rgb(${technology_con_AR[0]},${technology_con_AR[1]},${technology_con_AR[2]})`},
		  'AZ':{fill:`rgb(${technology_con_AZ[0]},${technology_con_AZ[1]},${technology_con_AZ[2]})`},
		  'CA':{fill:`rgb(${technology_con_CA[0]},${technology_con_CA[1]},${technology_con_CA[2]})`},
		  'CO':{fill:`rgb(${technology_con_CO[0]},${technology_con_CO[1]},${technology_con_CO[2]})`},
		  'CT':{fill:`rgb(${technology_con_CT[0]},${technology_con_CT[1]},${technology_con_CT[2]})`},
		  'DC':{fill:`rgb(${technology_con_DC[0]},${technology_con_DC[1]},${technology_con_DC[2]})`},
		  'DE':{fill:`rgb(${technology_con_DE[0]},${technology_con_DE[1]},${technology_con_DE[2]})`},
		  'FL':{fill:`rgb(${technology_con_FL[0]},${technology_con_FL[1]},${technology_con_FL[2]})`},
		  'GA':{fill:`rgb(${technology_con_GA[0]},${technology_con_GA[1]},${technology_con_GA[2]})`},
		  'HI':{fill:`rgb(${technology_con_HI[0]},${technology_con_HI[1]},${technology_con_HI[2]})`},
		  'IA':{fill:`rgb(${technology_con_IA[0]},${technology_con_IA[1]},${technology_con_IA[2]})`},
		  'ID':{fill:`rgb(${technology_con_ID[0]},${technology_con_ID[1]},${technology_con_ID[2]})`},
		  'IL':{fill:`rgb(${technology_con_IL[0]},${technology_con_IL[1]},${technology_con_IL[2]})`},
		  'IN':{fill:`rgb(${technology_con_IN[0]},${technology_con_IN[1]},${technology_con_IN[2]})`},
		  'KS':{fill:`rgb(${technology_con_KS[0]},${technology_con_KS[1]},${technology_con_KS[2]})`},
		  'KY':{fill:`rgb(${technology_con_KY[0]},${technology_con_KY[1]},${technology_con_KY[2]})`},
		  'LA':{fill:`rgb(${technology_con_LA[0]},${technology_con_LA[1]},${technology_con_LA[2]})`},
		  'MA':{fill:`rgb(${technology_con_MA[0]},${technology_con_MA[1]},${technology_con_MA[2]})`},
		  'MD':{fill:`rgb(${technology_con_MD[0]},${technology_con_MD[1]},${technology_con_MD[2]})`},
		  'ME':{fill:`rgb(${technology_con_ME[0]},${technology_con_ME[1]},${technology_con_ME[2]})`},
		  'MI':{fill:`rgb(${technology_con_MI[0]},${technology_con_MI[1]},${technology_con_MI[2]})`},
		  'MN':{fill:`rgb(${technology_con_MN[0]},${technology_con_MN[1]},${technology_con_MN[2]})`},
		  'MO':{fill:`rgb(${technology_con_MO[0]},${technology_con_MO[1]},${technology_con_MO[2]})`},
		  'MS':{fill:`rgb(${technology_con_MS[0]},${technology_con_MS[1]},${technology_con_MS[2]})`},
		  'NC':{fill:`rgb(${technology_con_NC[0]},${technology_con_NC[1]},${technology_con_NC[2]})`},
		  'ND':{fill:`rgb(${technology_con_ND[0]},${technology_con_ND[1]},${technology_con_ND[2]})`},
		  'NE':{fill:`rgb(${technology_con_NE[0]},${technology_con_NE[1]},${technology_con_NE[2]})`},
		  'NH':{fill:`rgb(${technology_con_NH[0]},${technology_con_NH[1]},${technology_con_NH[2]})`},
		  'NJ':{fill:`rgb(${technology_con_NJ[0]},${technology_con_NJ[1]},${technology_con_NJ[2]})`},
		  'NM':{fill:`rgb(${technology_con_NM[0]},${technology_con_NM[1]},${technology_con_NM[2]})`},
		  'NV':{fill:`rgb(${technology_con_NV[0]},${technology_con_NV[1]},${technology_con_NV[2]})`},
		  'NY':{fill:`rgb(${technology_con_NY[0]},${technology_con_NY[1]},${technology_con_NY[2]})`},
		  'OH':{fill:`rgb(${technology_con_OH[0]},${technology_con_OH[1]},${technology_con_OH[2]})`},
		  'OK':{fill:`rgb(${technology_con_OK[0]},${technology_con_OK[1]},${technology_con_OK[2]})`},
		  'OR':{fill:`rgb(${technology_con_OR[0]},${technology_con_OR[1]},${technology_con_OR[2]})`},
		  'PA':{fill:`rgb(${technology_con_PA[0]},${technology_con_PA[1]},${technology_con_PA[2]})`},
		  'RI':{fill:`rgb(${technology_con_RI[0]},${technology_con_RI[1]},${technology_con_RI[2]})`},
		  'SC':{fill:`rgb(${technology_con_SC[0]},${technology_con_SC[1]},${technology_con_SC[2]})`},
		  'SD':{fill:`rgb(${technology_con_SD[0]},${technology_con_SD[1]},${technology_con_SD[2]})`},
		  'TN':{fill:`rgb(${technology_con_TN[0]},${technology_con_TN[1]},${technology_con_TN[2]})`},
		  'TX':{fill:`rgb(${technology_con_TX[0]},${technology_con_TX[1]},${technology_con_TX[2]})`},
		  'UT':{fill:`rgb(${technology_con_UT[0]},${technology_con_UT[1]},${technology_con_UT[2]})`},
		  'VA':{fill:`rgb(${technology_con_VA[0]},${technology_con_VA[1]},${technology_con_VA[2]})`},
		  'VT':{fill:`rgb(${technology_con_VT[0]},${technology_con_VT[1]},${technology_con_VT[2]})`},
		  'WA':{fill:`rgb(${technology_con_WA[0]},${technology_con_WA[1]},${technology_con_WA[2]})`},
		  'WI':{fill:`rgb(${technology_con_WI[0]},${technology_con_WI[1]},${technology_con_WI[2]})`},
		  'WY':{fill:`rgb(${technology_con_WY[0]},${technology_con_WY[1]},${technology_con_WY[2]})`},
		  'WV':{fill:`rgb(${technology_con_WV[0]},${technology_con_WV[1]},${technology_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#map7').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${technology_auth_AK[0]},${technology_auth_AK[1]},${technology_auth_AK[2]})`},
		  'AL':{fill:`rgb(${technology_auth_AL[0]},${technology_auth_AL[1]},${technology_auth_AL[2]})`},
		  'AR':{fill:`rgb(${technology_auth_AR[0]},${technology_auth_AR[1]},${technology_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${technology_auth_AZ[0]},${technology_auth_AZ[1]},${technology_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${technology_auth_CA[0]},${technology_auth_CA[1]},${technology_auth_CA[2]})`},
		  'CO':{fill:`rgb(${technology_auth_CO[0]},${technology_auth_CO[1]},${technology_auth_CO[2]})`},
		  'CT':{fill:`rgb(${technology_auth_CT[0]},${technology_auth_CT[1]},${technology_auth_CT[2]})`},
		  'DC':{fill:`rgb(${technology_auth_DC[0]},${technology_auth_DC[1]},${technology_auth_DC[2]})`},
		  'DE':{fill:`rgb(${technology_auth_DE[0]},${technology_auth_DE[1]},${technology_auth_DE[2]})`},
		  'FL':{fill:`rgb(${technology_auth_FL[0]},${technology_auth_FL[1]},${technology_auth_FL[2]})`},
		  'GA':{fill:`rgb(${technology_auth_GA[0]},${technology_auth_GA[1]},${technology_auth_GA[2]})`},
		  'HI':{fill:`rgb(${technology_auth_HI[0]},${technology_auth_HI[1]},${technology_auth_HI[2]})`},
		  'IA':{fill:`rgb(${technology_auth_IA[0]},${technology_auth_IA[1]},${technology_auth_IA[2]})`},
		  'ID':{fill:`rgb(${technology_auth_ID[0]},${technology_auth_ID[1]},${technology_auth_ID[2]})`},
		  'IL':{fill:`rgb(${technology_auth_IL[0]},${technology_auth_IL[1]},${technology_auth_IL[2]})`},
		  'IN':{fill:`rgb(${technology_auth_IN[0]},${technology_auth_IN[1]},${technology_auth_IN[2]})`},
		  'KS':{fill:`rgb(${technology_auth_KS[0]},${technology_auth_KS[1]},${technology_auth_KS[2]})`},
		  'KY':{fill:`rgb(${technology_auth_KY[0]},${technology_auth_KY[1]},${technology_auth_KY[2]})`},
		  'LA':{fill:`rgb(${technology_auth_LA[0]},${technology_auth_LA[1]},${technology_auth_LA[2]})`},
		  'MA':{fill:`rgb(${technology_auth_MA[0]},${technology_auth_MA[1]},${technology_auth_MA[2]})`},
		  'MD':{fill:`rgb(${technology_auth_MD[0]},${technology_auth_MD[1]},${technology_auth_MD[2]})`},
		  'ME':{fill:`rgb(${technology_auth_ME[0]},${technology_auth_ME[1]},${technology_auth_ME[2]})`},
		  'MI':{fill:`rgb(${technology_auth_MI[0]},${technology_auth_MI[1]},${technology_auth_MI[2]})`},
		  'MN':{fill:`rgb(${technology_auth_MN[0]},${technology_auth_MN[1]},${technology_auth_MN[2]})`},
		  'MO':{fill:`rgb(${technology_auth_MO[0]},${technology_auth_MO[1]},${technology_auth_MO[2]})`},
		  'MS':{fill:`rgb(${technology_auth_MS[0]},${technology_auth_MS[1]},${technology_auth_MS[2]})`},
		  'NC':{fill:`rgb(${technology_auth_NC[0]},${technology_auth_NC[1]},${technology_auth_NC[2]})`},
		  'ND':{fill:`rgb(${technology_auth_ND[0]},${technology_auth_ND[1]},${technology_auth_ND[2]})`},
		  'NE':{fill:`rgb(${technology_auth_NE[0]},${technology_auth_NE[1]},${technology_auth_NE[2]})`},
		  'NH':{fill:`rgb(${technology_auth_NH[0]},${technology_auth_NH[1]},${technology_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${technology_auth_NJ[0]},${technology_auth_NJ[1]},${technology_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${technology_auth_NM[0]},${technology_auth_NM[1]},${technology_auth_NM[2]})`},
		  'NV':{fill:`rgb(${technology_auth_NV[0]},${technology_auth_NV[1]},${technology_auth_NV[2]})`},
		  'NY':{fill:`rgb(${technology_auth_NY[0]},${technology_auth_NY[1]},${technology_auth_NY[2]})`},
		  'OH':{fill:`rgb(${technology_auth_OH[0]},${technology_auth_OH[1]},${technology_auth_OH[2]})`},
		  'OK':{fill:`rgb(${technology_auth_OK[0]},${technology_auth_OK[1]},${technology_auth_OK[2]})`},
		  'OR':{fill:`rgb(${technology_auth_OR[0]},${technology_auth_OR[1]},${technology_auth_OR[2]})`},
		  'PA':{fill:`rgb(${technology_auth_PA[0]},${technology_auth_PA[1]},${technology_auth_PA[2]})`},
		  'RI':{fill:`rgb(${technology_auth_RI[0]},${technology_auth_RI[1]},${technology_auth_RI[2]})`},
		  'SC':{fill:`rgb(${technology_auth_SC[0]},${technology_auth_SC[1]},${technology_auth_SC[2]})`},
		  'SD':{fill:`rgb(${technology_auth_SD[0]},${technology_auth_SD[1]},${technology_auth_SD[2]})`},
		  'TN':{fill:`rgb(${technology_auth_TN[0]},${technology_auth_TN[1]},${technology_auth_TN[2]})`},
		  'TX':{fill:`rgb(${technology_auth_TX[0]},${technology_auth_TX[1]},${technology_auth_TX[2]})`},
		  'UT':{fill:`rgb(${technology_auth_UT[0]},${technology_auth_UT[1]},${technology_auth_UT[2]})`},
		  'VA':{fill:`rgb(${technology_auth_VA[0]},${technology_auth_VA[1]},${technology_auth_VA[2]})`},
		  'VT':{fill:`rgb(${technology_auth_VT[0]},${technology_auth_VT[1]},${technology_auth_VT[2]})`},
		  'WA':{fill:`rgb(${technology_auth_WA[0]},${technology_auth_WA[1]},${technology_auth_WA[2]})`},
		  'WI':{fill:`rgb(${technology_auth_WI[0]},${technology_auth_WI[1]},${technology_auth_WI[2]})`},
		  'WY':{fill:`rgb(${technology_auth_WY[0]},${technology_auth_WY[1]},${technology_auth_WY[2]})`},
		  'WV':{fill:`rgb(${technology_auth_WV[0]},${technology_auth_WV[1]},${technology_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		//civil right
		$('#civil_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${civil_con_AK[0]},${civil_con_AK[1]},${civil_con_AK[2]})`},
		  'AL':{fill:`rgb(${civil_con_AL[0]},${civil_con_AL[1]},${civil_con_AL[2]})`},
		  'AR':{fill:`rgb(${civil_con_AR[0]},${civil_con_AR[1]},${civil_con_AR[2]})`},
		  'AZ':{fill:`rgb(${civil_con_AZ[0]},${civil_con_AZ[1]},${civil_con_AZ[2]})`},
		  'CA':{fill:`rgb(${civil_con_CA[0]},${civil_con_CA[1]},${civil_con_CA[2]})`},
		  'CO':{fill:`rgb(${civil_con_CO[0]},${civil_con_CO[1]},${civil_con_CO[2]})`},
		  'CT':{fill:`rgb(${civil_con_CT[0]},${civil_con_CT[1]},${civil_con_CT[2]})`},
		  'DC':{fill:`rgb(${civil_con_DC[0]},${civil_con_DC[1]},${civil_con_DC[2]})`},
		  'DE':{fill:`rgb(${civil_con_DE[0]},${civil_con_DE[1]},${civil_con_DE[2]})`},
		  'FL':{fill:`rgb(${civil_con_FL[0]},${civil_con_FL[1]},${civil_con_FL[2]})`},
		  'GA':{fill:`rgb(${civil_con_GA[0]},${civil_con_GA[1]},${civil_con_GA[2]})`},
		  'HI':{fill:`rgb(${civil_con_HI[0]},${civil_con_HI[1]},${civil_con_HI[2]})`},
		  'IA':{fill:`rgb(${civil_con_IA[0]},${civil_con_IA[1]},${civil_con_IA[2]})`},
		  'ID':{fill:`rgb(${civil_con_ID[0]},${civil_con_ID[1]},${civil_con_ID[2]})`},
		  'IL':{fill:`rgb(${civil_con_IL[0]},${civil_con_IL[1]},${civil_con_IL[2]})`},
		  'IN':{fill:`rgb(${civil_con_IN[0]},${civil_con_IN[1]},${civil_con_IN[2]})`},
		  'KS':{fill:`rgb(${civil_con_KS[0]},${civil_con_KS[1]},${civil_con_KS[2]})`},
		  'KY':{fill:`rgb(${civil_con_KY[0]},${civil_con_KY[1]},${civil_con_KY[2]})`},
		  'LA':{fill:`rgb(${civil_con_LA[0]},${civil_con_LA[1]},${civil_con_LA[2]})`},
		  'MA':{fill:`rgb(${civil_con_MA[0]},${civil_con_MA[1]},${civil_con_MA[2]})`},
		  'MD':{fill:`rgb(${civil_con_MD[0]},${civil_con_MD[1]},${civil_con_MD[2]})`},
		  'ME':{fill:`rgb(${civil_con_ME[0]},${civil_con_ME[1]},${civil_con_ME[2]})`},
		  'MI':{fill:`rgb(${civil_con_MI[0]},${civil_con_MI[1]},${civil_con_MI[2]})`},
		  'MN':{fill:`rgb(${civil_con_MN[0]},${civil_con_MN[1]},${civil_con_MN[2]})`},
		  'MO':{fill:`rgb(${civil_con_MO[0]},${civil_con_MO[1]},${civil_con_MO[2]})`},
		  'MS':{fill:`rgb(${civil_con_MS[0]},${civil_con_MS[1]},${civil_con_MS[2]})`},
		  'NC':{fill:`rgb(${civil_con_NC[0]},${civil_con_NC[1]},${civil_con_NC[2]})`},
		  'ND':{fill:`rgb(${civil_con_ND[0]},${civil_con_ND[1]},${civil_con_ND[2]})`},
		  'NE':{fill:`rgb(${civil_con_NE[0]},${civil_con_NE[1]},${civil_con_NE[2]})`},
		  'NH':{fill:`rgb(${civil_con_NH[0]},${civil_con_NH[1]},${civil_con_NH[2]})`},
		  'NJ':{fill:`rgb(${civil_con_NJ[0]},${civil_con_NJ[1]},${civil_con_NJ[2]})`},
		  'NM':{fill:`rgb(${civil_con_NM[0]},${civil_con_NM[1]},${civil_con_NM[2]})`},
		  'NV':{fill:`rgb(${civil_con_NV[0]},${civil_con_NV[1]},${civil_con_NV[2]})`},
		  'NY':{fill:`rgb(${civil_con_NY[0]},${civil_con_NY[1]},${civil_con_NY[2]})`},
		  'OH':{fill:`rgb(${civil_con_OH[0]},${civil_con_OH[1]},${civil_con_OH[2]})`},
		  'OK':{fill:`rgb(${civil_con_OK[0]},${civil_con_OK[1]},${civil_con_OK[2]})`},
		  'OR':{fill:`rgb(${civil_con_OR[0]},${civil_con_OR[1]},${civil_con_OR[2]})`},
		  'PA':{fill:`rgb(${civil_con_PA[0]},${civil_con_PA[1]},${civil_con_PA[2]})`},
		  'RI':{fill:`rgb(${civil_con_RI[0]},${civil_con_RI[1]},${civil_con_RI[2]})`},
		  'SC':{fill:`rgb(${civil_con_SC[0]},${civil_con_SC[1]},${civil_con_SC[2]})`},
		  'SD':{fill:`rgb(${civil_con_SD[0]},${civil_con_SD[1]},${civil_con_SD[2]})`},
		  'TN':{fill:`rgb(${civil_con_TN[0]},${civil_con_TN[1]},${civil_con_TN[2]})`},
		  'TX':{fill:`rgb(${civil_con_TX[0]},${civil_con_TX[1]},${civil_con_TX[2]})`},
		  'UT':{fill:`rgb(${civil_con_UT[0]},${civil_con_UT[1]},${civil_con_UT[2]})`},
		  'VA':{fill:`rgb(${civil_con_VA[0]},${civil_con_VA[1]},${civil_con_VA[2]})`},
		  'VT':{fill:`rgb(${civil_con_VT[0]},${civil_con_VT[1]},${civil_con_VT[2]})`},
		  'WA':{fill:`rgb(${civil_con_WA[0]},${civil_con_WA[1]},${civil_con_WA[2]})`},
		  'WI':{fill:`rgb(${civil_con_WI[0]},${civil_con_WI[1]},${civil_con_WI[2]})`},
		  'WY':{fill:`rgb(${civil_con_WY[0]},${civil_con_WY[1]},${civil_con_WY[2]})`},
		  'WV':{fill:`rgb(${civil_con_WV[0]},${civil_con_WV[1]},${civil_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#civil_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${civil_auth_AK[0]},${civil_auth_AK[1]},${civil_auth_AK[2]})`},
		  'AL':{fill:`rgb(${civil_auth_AL[0]},${civil_auth_AL[1]},${civil_auth_AL[2]})`},
		  'AR':{fill:`rgb(${civil_auth_AR[0]},${civil_auth_AR[1]},${civil_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${civil_auth_AZ[0]},${civil_auth_AZ[1]},${civil_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${civil_auth_CA[0]},${civil_auth_CA[1]},${civil_auth_CA[2]})`},
		  'CO':{fill:`rgb(${civil_auth_CO[0]},${civil_auth_CO[1]},${civil_auth_CO[2]})`},
		  'CT':{fill:`rgb(${civil_auth_CT[0]},${civil_auth_CT[1]},${civil_auth_CT[2]})`},
		  'DC':{fill:`rgb(${civil_auth_DC[0]},${civil_auth_DC[1]},${civil_auth_DC[2]})`},
		  'DE':{fill:`rgb(${civil_auth_DE[0]},${civil_auth_DE[1]},${civil_auth_DE[2]})`},
		  'FL':{fill:`rgb(${civil_auth_FL[0]},${civil_auth_FL[1]},${civil_auth_FL[2]})`},
		  'GA':{fill:`rgb(${civil_auth_GA[0]},${civil_auth_GA[1]},${civil_auth_GA[2]})`},
		  'HI':{fill:`rgb(${civil_auth_HI[0]},${civil_auth_HI[1]},${civil_auth_HI[2]})`},
		  'IA':{fill:`rgb(${civil_auth_IA[0]},${civil_auth_IA[1]},${civil_auth_IA[2]})`},
		  'ID':{fill:`rgb(${civil_auth_ID[0]},${civil_auth_ID[1]},${civil_auth_ID[2]})`},
		  'IL':{fill:`rgb(${civil_auth_IL[0]},${civil_auth_IL[1]},${civil_auth_IL[2]})`},
		  'IN':{fill:`rgb(${civil_auth_IN[0]},${civil_auth_IN[1]},${civil_auth_IN[2]})`},
		  'KS':{fill:`rgb(${civil_auth_KS[0]},${civil_auth_KS[1]},${civil_auth_KS[2]})`},
		  'KY':{fill:`rgb(${civil_auth_KY[0]},${civil_auth_KY[1]},${civil_auth_KY[2]})`},
		  'LA':{fill:`rgb(${civil_auth_LA[0]},${civil_auth_LA[1]},${civil_auth_LA[2]})`},
		  'MA':{fill:`rgb(${civil_auth_MA[0]},${civil_auth_MA[1]},${civil_auth_MA[2]})`},
		  'MD':{fill:`rgb(${civil_auth_MD[0]},${civil_auth_MD[1]},${civil_auth_MD[2]})`},
		  'ME':{fill:`rgb(${civil_auth_ME[0]},${civil_auth_ME[1]},${civil_auth_ME[2]})`},
		  'MI':{fill:`rgb(${civil_auth_MI[0]},${civil_auth_MI[1]},${civil_auth_MI[2]})`},
		  'MN':{fill:`rgb(${civil_auth_MN[0]},${civil_auth_MN[1]},${civil_auth_MN[2]})`},
		  'MO':{fill:`rgb(${civil_auth_MO[0]},${civil_auth_MO[1]},${civil_auth_MO[2]})`},
		  'MS':{fill:`rgb(${civil_auth_MS[0]},${civil_auth_MS[1]},${civil_auth_MS[2]})`},
		  'NC':{fill:`rgb(${civil_auth_NC[0]},${civil_auth_NC[1]},${civil_auth_NC[2]})`},
		  'ND':{fill:`rgb(${civil_auth_ND[0]},${civil_auth_ND[1]},${civil_auth_ND[2]})`},
		  'NE':{fill:`rgb(${civil_auth_NE[0]},${civil_auth_NE[1]},${civil_auth_NE[2]})`},
		  'NH':{fill:`rgb(${civil_auth_NH[0]},${civil_auth_NH[1]},${civil_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${civil_auth_NJ[0]},${civil_auth_NJ[1]},${civil_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${civil_auth_NM[0]},${civil_auth_NM[1]},${civil_auth_NM[2]})`},
		  'NV':{fill:`rgb(${civil_auth_NV[0]},${civil_auth_NV[1]},${civil_auth_NV[2]})`},
		  'NY':{fill:`rgb(${civil_auth_NY[0]},${civil_auth_NY[1]},${civil_auth_NY[2]})`},
		  'OH':{fill:`rgb(${civil_auth_OH[0]},${civil_auth_OH[1]},${civil_auth_OH[2]})`},
		  'OK':{fill:`rgb(${civil_auth_OK[0]},${civil_auth_OK[1]},${civil_auth_OK[2]})`},
		  'OR':{fill:`rgb(${civil_auth_OR[0]},${civil_auth_OR[1]},${civil_auth_OR[2]})`},
		  'PA':{fill:`rgb(${civil_auth_PA[0]},${civil_auth_PA[1]},${civil_auth_PA[2]})`},
		  'RI':{fill:`rgb(${civil_auth_RI[0]},${civil_auth_RI[1]},${civil_auth_RI[2]})`},
		  'SC':{fill:`rgb(${civil_auth_SC[0]},${civil_auth_SC[1]},${civil_auth_SC[2]})`},
		  'SD':{fill:`rgb(${civil_auth_SD[0]},${civil_auth_SD[1]},${civil_auth_SD[2]})`},
		  'TN':{fill:`rgb(${civil_auth_TN[0]},${civil_auth_TN[1]},${civil_auth_TN[2]})`},
		  'TX':{fill:`rgb(${civil_auth_TX[0]},${civil_auth_TX[1]},${civil_auth_TX[2]})`},
		  'UT':{fill:`rgb(${civil_auth_UT[0]},${civil_auth_UT[1]},${civil_auth_UT[2]})`},
		  'VA':{fill:`rgb(${civil_auth_VA[0]},${civil_auth_VA[1]},${civil_auth_VA[2]})`},
		  'VT':{fill:`rgb(${civil_auth_VT[0]},${civil_auth_VT[1]},${civil_auth_VT[2]})`},
		  'WA':{fill:`rgb(${civil_auth_WA[0]},${civil_auth_WA[1]},${civil_auth_WA[2]})`},
		  'WI':{fill:`rgb(${civil_auth_WI[0]},${civil_auth_WI[1]},${civil_auth_WI[2]})`},
		  'WY':{fill:`rgb(${civil_auth_WY[0]},${civil_auth_WY[1]},${civil_auth_WY[2]})`},
		  'WV':{fill:`rgb(${civil_auth_WV[0]},${civil_auth_WV[1]},${civil_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#abortion_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${abortion_con_AK[0]},${abortion_con_AK[1]},${abortion_con_AK[2]})`},
		  'AL':{fill:`rgb(${abortion_con_AL[0]},${abortion_con_AL[1]},${abortion_con_AL[2]})`},
		  'AR':{fill:`rgb(${abortion_con_AR[0]},${abortion_con_AR[1]},${abortion_con_AR[2]})`},
		  'AZ':{fill:`rgb(${abortion_con_AZ[0]},${abortion_con_AZ[1]},${abortion_con_AZ[2]})`},
		  'CA':{fill:`rgb(${abortion_con_CA[0]},${abortion_con_CA[1]},${abortion_con_CA[2]})`},
		  'CO':{fill:`rgb(${abortion_con_CO[0]},${abortion_con_CO[1]},${abortion_con_CO[2]})`},
		  'CT':{fill:`rgb(${abortion_con_CT[0]},${abortion_con_CT[1]},${abortion_con_CT[2]})`},
		  'DC':{fill:`rgb(${abortion_con_DC[0]},${abortion_con_DC[1]},${abortion_con_DC[2]})`},
		  'DE':{fill:`rgb(${abortion_con_DE[0]},${abortion_con_DE[1]},${abortion_con_DE[2]})`},
		  'FL':{fill:`rgb(${abortion_con_FL[0]},${abortion_con_FL[1]},${abortion_con_FL[2]})`},
		  'GA':{fill:`rgb(${abortion_con_GA[0]},${abortion_con_GA[1]},${abortion_con_GA[2]})`},
		  'HI':{fill:`rgb(${abortion_con_HI[0]},${abortion_con_HI[1]},${abortion_con_HI[2]})`},
		  'IA':{fill:`rgb(${abortion_con_IA[0]},${abortion_con_IA[1]},${abortion_con_IA[2]})`},
		  'ID':{fill:`rgb(${abortion_con_ID[0]},${abortion_con_ID[1]},${abortion_con_ID[2]})`},
		  'IL':{fill:`rgb(${abortion_con_IL[0]},${abortion_con_IL[1]},${abortion_con_IL[2]})`},
		  'IN':{fill:`rgb(${abortion_con_IN[0]},${abortion_con_IN[1]},${abortion_con_IN[2]})`},
		  'KS':{fill:`rgb(${abortion_con_KS[0]},${abortion_con_KS[1]},${abortion_con_KS[2]})`},
		  'KY':{fill:`rgb(${abortion_con_KY[0]},${abortion_con_KY[1]},${abortion_con_KY[2]})`},
		  'LA':{fill:`rgb(${abortion_con_LA[0]},${abortion_con_LA[1]},${abortion_con_LA[2]})`},
		  'MA':{fill:`rgb(${abortion_con_MA[0]},${abortion_con_MA[1]},${abortion_con_MA[2]})`},
		  'MD':{fill:`rgb(${abortion_con_MD[0]},${abortion_con_MD[1]},${abortion_con_MD[2]})`},
		  'ME':{fill:`rgb(${abortion_con_ME[0]},${abortion_con_ME[1]},${abortion_con_ME[2]})`},
		  'MI':{fill:`rgb(${abortion_con_MI[0]},${abortion_con_MI[1]},${abortion_con_MI[2]})`},
		  'MN':{fill:`rgb(${abortion_con_MN[0]},${abortion_con_MN[1]},${abortion_con_MN[2]})`},
		  'MO':{fill:`rgb(${abortion_con_MO[0]},${abortion_con_MO[1]},${abortion_con_MO[2]})`},
		  'MS':{fill:`rgb(${abortion_con_MS[0]},${abortion_con_MS[1]},${abortion_con_MS[2]})`},
		  'NC':{fill:`rgb(${abortion_con_NC[0]},${abortion_con_NC[1]},${abortion_con_NC[2]})`},
		  'ND':{fill:`rgb(${abortion_con_ND[0]},${abortion_con_ND[1]},${abortion_con_ND[2]})`},
		  'NE':{fill:`rgb(${abortion_con_NE[0]},${abortion_con_NE[1]},${abortion_con_NE[2]})`},
		  'NH':{fill:`rgb(${abortion_con_NH[0]},${abortion_con_NH[1]},${abortion_con_NH[2]})`},
		  'NJ':{fill:`rgb(${abortion_con_NJ[0]},${abortion_con_NJ[1]},${abortion_con_NJ[2]})`},
		  'NM':{fill:`rgb(${abortion_con_NM[0]},${abortion_con_NM[1]},${abortion_con_NM[2]})`},
		  'NV':{fill:`rgb(${abortion_con_NV[0]},${abortion_con_NV[1]},${abortion_con_NV[2]})`},
		  'NY':{fill:`rgb(${abortion_con_NY[0]},${abortion_con_NY[1]},${abortion_con_NY[2]})`},
		  'OH':{fill:`rgb(${abortion_con_OH[0]},${abortion_con_OH[1]},${abortion_con_OH[2]})`},
		  'OK':{fill:`rgb(${abortion_con_OK[0]},${abortion_con_OK[1]},${abortion_con_OK[2]})`},
		  'OR':{fill:`rgb(${abortion_con_OR[0]},${abortion_con_OR[1]},${abortion_con_OR[2]})`},
		  'PA':{fill:`rgb(${abortion_con_PA[0]},${abortion_con_PA[1]},${abortion_con_PA[2]})`},
		  'RI':{fill:`rgb(${abortion_con_RI[0]},${abortion_con_RI[1]},${abortion_con_RI[2]})`},
		  'SC':{fill:`rgb(${abortion_con_SC[0]},${abortion_con_SC[1]},${abortion_con_SC[2]})`},
		  'SD':{fill:`rgb(${abortion_con_SD[0]},${abortion_con_SD[1]},${abortion_con_SD[2]})`},
		  'TN':{fill:`rgb(${abortion_con_TN[0]},${abortion_con_TN[1]},${abortion_con_TN[2]})`},
		  'TX':{fill:`rgb(${abortion_con_TX[0]},${abortion_con_TX[1]},${abortion_con_TX[2]})`},
		  'UT':{fill:`rgb(${abortion_con_UT[0]},${abortion_con_UT[1]},${abortion_con_UT[2]})`},
		  'VA':{fill:`rgb(${abortion_con_VA[0]},${abortion_con_VA[1]},${abortion_con_VA[2]})`},
		  'VT':{fill:`rgb(${abortion_con_VT[0]},${abortion_con_VT[1]},${abortion_con_VT[2]})`},
		  'WA':{fill:`rgb(${abortion_con_WA[0]},${abortion_con_WA[1]},${abortion_con_WA[2]})`},
		  'WI':{fill:`rgb(${abortion_con_WI[0]},${abortion_con_WI[1]},${abortion_con_WI[2]})`},
		  'WY':{fill:`rgb(${abortion_con_WY[0]},${abortion_con_WY[1]},${abortion_con_WY[2]})`},
		  'WV':{fill:`rgb(${abortion_con_WV[0]},${abortion_con_WV[1]},${abortion_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#abortion_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${abortion_auth_AK[0]},${abortion_auth_AK[1]},${abortion_auth_AK[2]})`},
		  'AL':{fill:`rgb(${abortion_auth_AL[0]},${abortion_auth_AL[1]},${abortion_auth_AL[2]})`},
		  'AR':{fill:`rgb(${abortion_auth_AR[0]},${abortion_auth_AR[1]},${abortion_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${abortion_auth_AZ[0]},${abortion_auth_AZ[1]},${abortion_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${abortion_auth_CA[0]},${abortion_auth_CA[1]},${abortion_auth_CA[2]})`},
		  'CO':{fill:`rgb(${abortion_auth_CO[0]},${abortion_auth_CO[1]},${abortion_auth_CO[2]})`},
		  'CT':{fill:`rgb(${abortion_auth_CT[0]},${abortion_auth_CT[1]},${abortion_auth_CT[2]})`},
		  'DC':{fill:`rgb(${abortion_auth_DC[0]},${abortion_auth_DC[1]},${abortion_auth_DC[2]})`},
		  'DE':{fill:`rgb(${abortion_auth_DE[0]},${abortion_auth_DE[1]},${abortion_auth_DE[2]})`},
		  'FL':{fill:`rgb(${abortion_auth_FL[0]},${abortion_auth_FL[1]},${abortion_auth_FL[2]})`},
		  'GA':{fill:`rgb(${abortion_auth_GA[0]},${abortion_auth_GA[1]},${abortion_auth_GA[2]})`},
		  'HI':{fill:`rgb(${abortion_auth_HI[0]},${abortion_auth_HI[1]},${abortion_auth_HI[2]})`},
		  'IA':{fill:`rgb(${abortion_auth_IA[0]},${abortion_auth_IA[1]},${abortion_auth_IA[2]})`},
		  'ID':{fill:`rgb(${abortion_auth_ID[0]},${abortion_auth_ID[1]},${abortion_auth_ID[2]})`},
		  'IL':{fill:`rgb(${abortion_auth_IL[0]},${abortion_auth_IL[1]},${abortion_auth_IL[2]})`},
		  'IN':{fill:`rgb(${abortion_auth_IN[0]},${abortion_auth_IN[1]},${abortion_auth_IN[2]})`},
		  'KS':{fill:`rgb(${abortion_auth_KS[0]},${abortion_auth_KS[1]},${abortion_auth_KS[2]})`},
		  'KY':{fill:`rgb(${abortion_auth_KY[0]},${abortion_auth_KY[1]},${abortion_auth_KY[2]})`},
		  'LA':{fill:`rgb(${abortion_auth_LA[0]},${abortion_auth_LA[1]},${abortion_auth_LA[2]})`},
		  'MA':{fill:`rgb(${abortion_auth_MA[0]},${abortion_auth_MA[1]},${abortion_auth_MA[2]})`},
		  'MD':{fill:`rgb(${abortion_auth_MD[0]},${abortion_auth_MD[1]},${abortion_auth_MD[2]})`},
		  'ME':{fill:`rgb(${abortion_auth_ME[0]},${abortion_auth_ME[1]},${abortion_auth_ME[2]})`},
		  'MI':{fill:`rgb(${abortion_auth_MI[0]},${abortion_auth_MI[1]},${abortion_auth_MI[2]})`},
		  'MN':{fill:`rgb(${abortion_auth_MN[0]},${abortion_auth_MN[1]},${abortion_auth_MN[2]})`},
		  'MO':{fill:`rgb(${abortion_auth_MO[0]},${abortion_auth_MO[1]},${abortion_auth_MO[2]})`},
		  'MS':{fill:`rgb(${abortion_auth_MS[0]},${abortion_auth_MS[1]},${abortion_auth_MS[2]})`},
		  'NC':{fill:`rgb(${abortion_auth_NC[0]},${abortion_auth_NC[1]},${abortion_auth_NC[2]})`},
		  'ND':{fill:`rgb(${abortion_auth_ND[0]},${abortion_auth_ND[1]},${abortion_auth_ND[2]})`},
		  'NE':{fill:`rgb(${abortion_auth_NE[0]},${abortion_auth_NE[1]},${abortion_auth_NE[2]})`},
		  'NH':{fill:`rgb(${abortion_auth_NH[0]},${abortion_auth_NH[1]},${abortion_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${abortion_auth_NJ[0]},${abortion_auth_NJ[1]},${abortion_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${abortion_auth_NM[0]},${abortion_auth_NM[1]},${abortion_auth_NM[2]})`},
		  'NV':{fill:`rgb(${abortion_auth_NV[0]},${abortion_auth_NV[1]},${abortion_auth_NV[2]})`},
		  'NY':{fill:`rgb(${abortion_auth_NY[0]},${abortion_auth_NY[1]},${abortion_auth_NY[2]})`},
		  'OH':{fill:`rgb(${abortion_auth_OH[0]},${abortion_auth_OH[1]},${abortion_auth_OH[2]})`},
		  'OK':{fill:`rgb(${abortion_auth_OK[0]},${abortion_auth_OK[1]},${abortion_auth_OK[2]})`},
		  'OR':{fill:`rgb(${abortion_auth_OR[0]},${abortion_auth_OR[1]},${abortion_auth_OR[2]})`},
		  'PA':{fill:`rgb(${abortion_auth_PA[0]},${abortion_auth_PA[1]},${abortion_auth_PA[2]})`},
		  'RI':{fill:`rgb(${abortion_auth_RI[0]},${abortion_auth_RI[1]},${abortion_auth_RI[2]})`},
		  'SC':{fill:`rgb(${abortion_auth_SC[0]},${abortion_auth_SC[1]},${abortion_auth_SC[2]})`},
		  'SD':{fill:`rgb(${abortion_auth_SD[0]},${abortion_auth_SD[1]},${abortion_auth_SD[2]})`},
		  'TN':{fill:`rgb(${abortion_auth_TN[0]},${abortion_auth_TN[1]},${abortion_auth_TN[2]})`},
		  'TX':{fill:`rgb(${abortion_auth_TX[0]},${abortion_auth_TX[1]},${abortion_auth_TX[2]})`},
		  'UT':{fill:`rgb(${abortion_auth_UT[0]},${abortion_auth_UT[1]},${abortion_auth_UT[2]})`},
		  'VA':{fill:`rgb(${abortion_auth_VA[0]},${abortion_auth_VA[1]},${abortion_auth_VA[2]})`},
		  'VT':{fill:`rgb(${abortion_auth_VT[0]},${abortion_auth_VT[1]},${abortion_auth_VT[2]})`},
		  'WA':{fill:`rgb(${abortion_auth_WA[0]},${abortion_auth_WA[1]},${abortion_auth_WA[2]})`},
		  'WI':{fill:`rgb(${abortion_auth_WI[0]},${abortion_auth_WI[1]},${abortion_auth_WI[2]})`},
		  'WY':{fill:`rgb(${abortion_auth_WY[0]},${abortion_auth_WY[1]},${abortion_auth_WY[2]})`},
		  'WV':{fill:`rgb(${abortion_auth_WV[0]},${abortion_auth_WV[1]},${abortion_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#jobs_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${jobs_con_AK[0]},${jobs_con_AK[1]},${jobs_con_AK[2]})`},
		  'AL':{fill:`rgb(${jobs_con_AL[0]},${jobs_con_AL[1]},${jobs_con_AL[2]})`},
		  'AR':{fill:`rgb(${jobs_con_AR[0]},${jobs_con_AR[1]},${jobs_con_AR[2]})`},
		  'AZ':{fill:`rgb(${jobs_con_AZ[0]},${jobs_con_AZ[1]},${jobs_con_AZ[2]})`},
		  'CA':{fill:`rgb(${jobs_con_CA[0]},${jobs_con_CA[1]},${jobs_con_CA[2]})`},
		  'CO':{fill:`rgb(${jobs_con_CO[0]},${jobs_con_CO[1]},${jobs_con_CO[2]})`},
		  'CT':{fill:`rgb(${jobs_con_CT[0]},${jobs_con_CT[1]},${jobs_con_CT[2]})`},
		  'DC':{fill:`rgb(${jobs_con_DC[0]},${jobs_con_DC[1]},${jobs_con_DC[2]})`},
		  'DE':{fill:`rgb(${jobs_con_DE[0]},${jobs_con_DE[1]},${jobs_con_DE[2]})`},
		  'FL':{fill:`rgb(${jobs_con_FL[0]},${jobs_con_FL[1]},${jobs_con_FL[2]})`},
		  'GA':{fill:`rgb(${jobs_con_GA[0]},${jobs_con_GA[1]},${jobs_con_GA[2]})`},
		  'HI':{fill:`rgb(${jobs_con_HI[0]},${jobs_con_HI[1]},${jobs_con_HI[2]})`},
		  'IA':{fill:`rgb(${jobs_con_IA[0]},${jobs_con_IA[1]},${jobs_con_IA[2]})`},
		  'ID':{fill:`rgb(${jobs_con_ID[0]},${jobs_con_ID[1]},${jobs_con_ID[2]})`},
		  'IL':{fill:`rgb(${jobs_con_IL[0]},${jobs_con_IL[1]},${jobs_con_IL[2]})`},
		  'IN':{fill:`rgb(${jobs_con_IN[0]},${jobs_con_IN[1]},${jobs_con_IN[2]})`},
		  'KS':{fill:`rgb(${jobs_con_KS[0]},${jobs_con_KS[1]},${jobs_con_KS[2]})`},
		  'KY':{fill:`rgb(${jobs_con_KY[0]},${jobs_con_KY[1]},${jobs_con_KY[2]})`},
		  'LA':{fill:`rgb(${jobs_con_LA[0]},${jobs_con_LA[1]},${jobs_con_LA[2]})`},
		  'MA':{fill:`rgb(${jobs_con_MA[0]},${jobs_con_MA[1]},${jobs_con_MA[2]})`},
		  'MD':{fill:`rgb(${jobs_con_MD[0]},${jobs_con_MD[1]},${jobs_con_MD[2]})`},
		  'ME':{fill:`rgb(${jobs_con_ME[0]},${jobs_con_ME[1]},${jobs_con_ME[2]})`},
		  'MI':{fill:`rgb(${jobs_con_MI[0]},${jobs_con_MI[1]},${jobs_con_MI[2]})`},
		  'MN':{fill:`rgb(${jobs_con_MN[0]},${jobs_con_MN[1]},${jobs_con_MN[2]})`},
		  'MO':{fill:`rgb(${jobs_con_MO[0]},${jobs_con_MO[1]},${jobs_con_MO[2]})`},
		  'MS':{fill:`rgb(${jobs_con_MS[0]},${jobs_con_MS[1]},${jobs_con_MS[2]})`},
		  'NC':{fill:`rgb(${jobs_con_NC[0]},${jobs_con_NC[1]},${jobs_con_NC[2]})`},
		  'ND':{fill:`rgb(${jobs_con_ND[0]},${jobs_con_ND[1]},${jobs_con_ND[2]})`},
		  'NE':{fill:`rgb(${jobs_con_NE[0]},${jobs_con_NE[1]},${jobs_con_NE[2]})`},
		  'NH':{fill:`rgb(${jobs_con_NH[0]},${jobs_con_NH[1]},${jobs_con_NH[2]})`},
		  'NJ':{fill:`rgb(${jobs_con_NJ[0]},${jobs_con_NJ[1]},${jobs_con_NJ[2]})`},
		  'NM':{fill:`rgb(${jobs_con_NM[0]},${jobs_con_NM[1]},${jobs_con_NM[2]})`},
		  'NV':{fill:`rgb(${jobs_con_NV[0]},${jobs_con_NV[1]},${jobs_con_NV[2]})`},
		  'NY':{fill:`rgb(${jobs_con_NY[0]},${jobs_con_NY[1]},${jobs_con_NY[2]})`},
		  'OH':{fill:`rgb(${jobs_con_OH[0]},${jobs_con_OH[1]},${jobs_con_OH[2]})`},
		  'OK':{fill:`rgb(${jobs_con_OK[0]},${jobs_con_OK[1]},${jobs_con_OK[2]})`},
		  'OR':{fill:`rgb(${jobs_con_OR[0]},${jobs_con_OR[1]},${jobs_con_OR[2]})`},
		  'PA':{fill:`rgb(${jobs_con_PA[0]},${jobs_con_PA[1]},${jobs_con_PA[2]})`},
		  'RI':{fill:`rgb(${jobs_con_RI[0]},${jobs_con_RI[1]},${jobs_con_RI[2]})`},
		  'SC':{fill:`rgb(${jobs_con_SC[0]},${jobs_con_SC[1]},${jobs_con_SC[2]})`},
		  'SD':{fill:`rgb(${jobs_con_SD[0]},${jobs_con_SD[1]},${jobs_con_SD[2]})`},
		  'TN':{fill:`rgb(${jobs_con_TN[0]},${jobs_con_TN[1]},${jobs_con_TN[2]})`},
		  'TX':{fill:`rgb(${jobs_con_TX[0]},${jobs_con_TX[1]},${jobs_con_TX[2]})`},
		  'UT':{fill:`rgb(${jobs_con_UT[0]},${jobs_con_UT[1]},${jobs_con_UT[2]})`},
		  'VA':{fill:`rgb(${jobs_con_VA[0]},${jobs_con_VA[1]},${jobs_con_VA[2]})`},
		  'VT':{fill:`rgb(${jobs_con_VT[0]},${jobs_con_VT[1]},${jobs_con_VT[2]})`},
		  'WA':{fill:`rgb(${jobs_con_WA[0]},${jobs_con_WA[1]},${jobs_con_WA[2]})`},
		  'WI':{fill:`rgb(${jobs_con_WI[0]},${jobs_con_WI[1]},${jobs_con_WI[2]})`},
		  'WY':{fill:`rgb(${jobs_con_WY[0]},${jobs_con_WY[1]},${jobs_con_WY[2]})`},
		  'WV':{fill:`rgb(${jobs_con_WV[0]},${jobs_con_WV[1]},${jobs_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#jobs_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${jobs_auth_AK[0]},${jobs_auth_AK[1]},${jobs_auth_AK[2]})`},
		  'AL':{fill:`rgb(${jobs_auth_AL[0]},${jobs_auth_AL[1]},${jobs_auth_AL[2]})`},
		  'AR':{fill:`rgb(${jobs_auth_AR[0]},${jobs_auth_AR[1]},${jobs_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${jobs_auth_AZ[0]},${jobs_auth_AZ[1]},${jobs_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${jobs_auth_CA[0]},${jobs_auth_CA[1]},${jobs_auth_CA[2]})`},
		  'CO':{fill:`rgb(${jobs_auth_CO[0]},${jobs_auth_CO[1]},${jobs_auth_CO[2]})`},
		  'CT':{fill:`rgb(${jobs_auth_CT[0]},${jobs_auth_CT[1]},${jobs_auth_CT[2]})`},
		  'DC':{fill:`rgb(${jobs_auth_DC[0]},${jobs_auth_DC[1]},${jobs_auth_DC[2]})`},
		  'DE':{fill:`rgb(${jobs_auth_DE[0]},${jobs_auth_DE[1]},${jobs_auth_DE[2]})`},
		  'FL':{fill:`rgb(${jobs_auth_FL[0]},${jobs_auth_FL[1]},${jobs_auth_FL[2]})`},
		  'GA':{fill:`rgb(${jobs_auth_GA[0]},${jobs_auth_GA[1]},${jobs_auth_GA[2]})`},
		  'HI':{fill:`rgb(${jobs_auth_HI[0]},${jobs_auth_HI[1]},${jobs_auth_HI[2]})`},
		  'IA':{fill:`rgb(${jobs_auth_IA[0]},${jobs_auth_IA[1]},${jobs_auth_IA[2]})`},
		  'ID':{fill:`rgb(${jobs_auth_ID[0]},${jobs_auth_ID[1]},${jobs_auth_ID[2]})`},
		  'IL':{fill:`rgb(${jobs_auth_IL[0]},${jobs_auth_IL[1]},${jobs_auth_IL[2]})`},
		  'IN':{fill:`rgb(${jobs_auth_IN[0]},${jobs_auth_IN[1]},${jobs_auth_IN[2]})`},
		  'KS':{fill:`rgb(${jobs_auth_KS[0]},${jobs_auth_KS[1]},${jobs_auth_KS[2]})`},
		  'KY':{fill:`rgb(${jobs_auth_KY[0]},${jobs_auth_KY[1]},${jobs_auth_KY[2]})`},
		  'LA':{fill:`rgb(${jobs_auth_LA[0]},${jobs_auth_LA[1]},${jobs_auth_LA[2]})`},
		  'MA':{fill:`rgb(${jobs_auth_MA[0]},${jobs_auth_MA[1]},${jobs_auth_MA[2]})`},
		  'MD':{fill:`rgb(${jobs_auth_MD[0]},${jobs_auth_MD[1]},${jobs_auth_MD[2]})`},
		  'ME':{fill:`rgb(${jobs_auth_ME[0]},${jobs_auth_ME[1]},${jobs_auth_ME[2]})`},
		  'MI':{fill:`rgb(${jobs_auth_MI[0]},${jobs_auth_MI[1]},${jobs_auth_MI[2]})`},
		  'MN':{fill:`rgb(${jobs_auth_MN[0]},${jobs_auth_MN[1]},${jobs_auth_MN[2]})`},
		  'MO':{fill:`rgb(${jobs_auth_MO[0]},${jobs_auth_MO[1]},${jobs_auth_MO[2]})`},
		  'MS':{fill:`rgb(${jobs_auth_MS[0]},${jobs_auth_MS[1]},${jobs_auth_MS[2]})`},
		  'NC':{fill:`rgb(${jobs_auth_NC[0]},${jobs_auth_NC[1]},${jobs_auth_NC[2]})`},
		  'ND':{fill:`rgb(${jobs_auth_ND[0]},${jobs_auth_ND[1]},${jobs_auth_ND[2]})`},
		  'NE':{fill:`rgb(${jobs_auth_NE[0]},${jobs_auth_NE[1]},${jobs_auth_NE[2]})`},
		  'NH':{fill:`rgb(${jobs_auth_NH[0]},${jobs_auth_NH[1]},${jobs_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${jobs_auth_NJ[0]},${jobs_auth_NJ[1]},${jobs_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${jobs_auth_NM[0]},${jobs_auth_NM[1]},${jobs_auth_NM[2]})`},
		  'NV':{fill:`rgb(${jobs_auth_NV[0]},${jobs_auth_NV[1]},${jobs_auth_NV[2]})`},
		  'NY':{fill:`rgb(${jobs_auth_NY[0]},${jobs_auth_NY[1]},${jobs_auth_NY[2]})`},
		  'OH':{fill:`rgb(${jobs_auth_OH[0]},${jobs_auth_OH[1]},${jobs_auth_OH[2]})`},
		  'OK':{fill:`rgb(${jobs_auth_OK[0]},${jobs_auth_OK[1]},${jobs_auth_OK[2]})`},
		  'OR':{fill:`rgb(${jobs_auth_OR[0]},${jobs_auth_OR[1]},${jobs_auth_OR[2]})`},
		  'PA':{fill:`rgb(${jobs_auth_PA[0]},${jobs_auth_PA[1]},${jobs_auth_PA[2]})`},
		  'RI':{fill:`rgb(${jobs_auth_RI[0]},${jobs_auth_RI[1]},${jobs_auth_RI[2]})`},
		  'SC':{fill:`rgb(${jobs_auth_SC[0]},${jobs_auth_SC[1]},${jobs_auth_SC[2]})`},
		  'SD':{fill:`rgb(${jobs_auth_SD[0]},${jobs_auth_SD[1]},${jobs_auth_SD[2]})`},
		  'TN':{fill:`rgb(${jobs_auth_TN[0]},${jobs_auth_TN[1]},${jobs_auth_TN[2]})`},
		  'TX':{fill:`rgb(${jobs_auth_TX[0]},${jobs_auth_TX[1]},${jobs_auth_TX[2]})`},
		  'UT':{fill:`rgb(${jobs_auth_UT[0]},${jobs_auth_UT[1]},${jobs_auth_UT[2]})`},
		  'VA':{fill:`rgb(${jobs_auth_VA[0]},${jobs_auth_VA[1]},${jobs_auth_VA[2]})`},
		  'VT':{fill:`rgb(${jobs_auth_VT[0]},${jobs_auth_VT[1]},${jobs_auth_VT[2]})`},
		  'WA':{fill:`rgb(${jobs_auth_WA[0]},${jobs_auth_WA[1]},${jobs_auth_WA[2]})`},
		  'WI':{fill:`rgb(${jobs_auth_WI[0]},${jobs_auth_WI[1]},${jobs_auth_WI[2]})`},
		  'WY':{fill:`rgb(${jobs_auth_WY[0]},${jobs_auth_WY[1]},${jobs_auth_WY[2]})`},
		  'WV':{fill:`rgb(${jobs_auth_WV[0]},${jobs_auth_WV[1]},${jobs_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#eng_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${eng_con_AK[0]},${eng_con_AK[1]},${eng_con_AK[2]})`},
		  'AL':{fill:`rgb(${eng_con_AL[0]},${eng_con_AL[1]},${eng_con_AL[2]})`},
		  'AR':{fill:`rgb(${eng_con_AR[0]},${eng_con_AR[1]},${eng_con_AR[2]})`},
		  'AZ':{fill:`rgb(${eng_con_AZ[0]},${eng_con_AZ[1]},${eng_con_AZ[2]})`},
		  'CA':{fill:`rgb(${eng_con_CA[0]},${eng_con_CA[1]},${eng_con_CA[2]})`},
		  'CO':{fill:`rgb(${eng_con_CO[0]},${eng_con_CO[1]},${eng_con_CO[2]})`},
		  'CT':{fill:`rgb(${eng_con_CT[0]},${eng_con_CT[1]},${eng_con_CT[2]})`},
		  'DC':{fill:`rgb(${eng_con_DC[0]},${eng_con_DC[1]},${eng_con_DC[2]})`},
		  'DE':{fill:`rgb(${eng_con_DE[0]},${eng_con_DE[1]},${eng_con_DE[2]})`},
		  'FL':{fill:`rgb(${eng_con_FL[0]},${eng_con_FL[1]},${eng_con_FL[2]})`},
		  'GA':{fill:`rgb(${eng_con_GA[0]},${eng_con_GA[1]},${eng_con_GA[2]})`},
		  'HI':{fill:`rgb(${eng_con_HI[0]},${eng_con_HI[1]},${eng_con_HI[2]})`},
		  'IA':{fill:`rgb(${eng_con_IA[0]},${eng_con_IA[1]},${eng_con_IA[2]})`},
		  'ID':{fill:`rgb(${eng_con_ID[0]},${eng_con_ID[1]},${eng_con_ID[2]})`},
		  'IL':{fill:`rgb(${eng_con_IL[0]},${eng_con_IL[1]},${eng_con_IL[2]})`},
		  'IN':{fill:`rgb(${eng_con_IN[0]},${eng_con_IN[1]},${eng_con_IN[2]})`},
		  'KS':{fill:`rgb(${eng_con_KS[0]},${eng_con_KS[1]},${eng_con_KS[2]})`},
		  'KY':{fill:`rgb(${eng_con_KY[0]},${eng_con_KY[1]},${eng_con_KY[2]})`},
		  'LA':{fill:`rgb(${eng_con_LA[0]},${eng_con_LA[1]},${eng_con_LA[2]})`},
		  'MA':{fill:`rgb(${eng_con_MA[0]},${eng_con_MA[1]},${eng_con_MA[2]})`},
		  'MD':{fill:`rgb(${eng_con_MD[0]},${eng_con_MD[1]},${eng_con_MD[2]})`},
		  'ME':{fill:`rgb(${eng_con_ME[0]},${eng_con_ME[1]},${eng_con_ME[2]})`},
		  'MI':{fill:`rgb(${eng_con_MI[0]},${eng_con_MI[1]},${eng_con_MI[2]})`},
		  'MN':{fill:`rgb(${eng_con_MN[0]},${eng_con_MN[1]},${eng_con_MN[2]})`},
		  'MO':{fill:`rgb(${eng_con_MO[0]},${eng_con_MO[1]},${eng_con_MO[2]})`},
		  'MS':{fill:`rgb(${eng_con_MS[0]},${eng_con_MS[1]},${eng_con_MS[2]})`},
		  'NC':{fill:`rgb(${eng_con_NC[0]},${eng_con_NC[1]},${eng_con_NC[2]})`},
		  'ND':{fill:`rgb(${eng_con_ND[0]},${eng_con_ND[1]},${eng_con_ND[2]})`},
		  'NE':{fill:`rgb(${eng_con_NE[0]},${eng_con_NE[1]},${eng_con_NE[2]})`},
		  'NH':{fill:`rgb(${eng_con_NH[0]},${eng_con_NH[1]},${eng_con_NH[2]})`},
		  'NJ':{fill:`rgb(${eng_con_NJ[0]},${eng_con_NJ[1]},${eng_con_NJ[2]})`},
		  'NM':{fill:`rgb(${eng_con_NM[0]},${eng_con_NM[1]},${eng_con_NM[2]})`},
		  'NV':{fill:`rgb(${eng_con_NV[0]},${eng_con_NV[1]},${eng_con_NV[2]})`},
		  'NY':{fill:`rgb(${eng_con_NY[0]},${eng_con_NY[1]},${eng_con_NY[2]})`},
		  'OH':{fill:`rgb(${eng_con_OH[0]},${eng_con_OH[1]},${eng_con_OH[2]})`},
		  'OK':{fill:`rgb(${eng_con_OK[0]},${eng_con_OK[1]},${eng_con_OK[2]})`},
		  'OR':{fill:`rgb(${eng_con_OR[0]},${eng_con_OR[1]},${eng_con_OR[2]})`},
		  'PA':{fill:`rgb(${eng_con_PA[0]},${eng_con_PA[1]},${eng_con_PA[2]})`},
		  'RI':{fill:`rgb(${eng_con_RI[0]},${eng_con_RI[1]},${eng_con_RI[2]})`},
		  'SC':{fill:`rgb(${eng_con_SC[0]},${eng_con_SC[1]},${eng_con_SC[2]})`},
		  'SD':{fill:`rgb(${eng_con_SD[0]},${eng_con_SD[1]},${eng_con_SD[2]})`},
		  'TN':{fill:`rgb(${eng_con_TN[0]},${eng_con_TN[1]},${eng_con_TN[2]})`},
		  'TX':{fill:`rgb(${eng_con_TX[0]},${eng_con_TX[1]},${eng_con_TX[2]})`},
		  'UT':{fill:`rgb(${eng_con_UT[0]},${eng_con_UT[1]},${eng_con_UT[2]})`},
		  'VA':{fill:`rgb(${eng_con_VA[0]},${eng_con_VA[1]},${eng_con_VA[2]})`},
		  'VT':{fill:`rgb(${eng_con_VT[0]},${eng_con_VT[1]},${eng_con_VT[2]})`},
		  'WA':{fill:`rgb(${eng_con_WA[0]},${eng_con_WA[1]},${eng_con_WA[2]})`},
		  'WI':{fill:`rgb(${eng_con_WI[0]},${eng_con_WI[1]},${eng_con_WI[2]})`},
		  'WY':{fill:`rgb(${eng_con_WY[0]},${eng_con_WY[1]},${eng_con_WY[2]})`},
		  'WV':{fill:`rgb(${eng_con_WV[0]},${eng_con_WV[1]},${eng_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#eng_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${eng_auth_AK[0]},${eng_auth_AK[1]},${eng_auth_AK[2]})`},
		  'AL':{fill:`rgb(${eng_auth_AL[0]},${eng_auth_AL[1]},${eng_auth_AL[2]})`},
		  'AR':{fill:`rgb(${eng_auth_AR[0]},${eng_auth_AR[1]},${eng_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${eng_auth_AZ[0]},${eng_auth_AZ[1]},${eng_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${eng_auth_CA[0]},${eng_auth_CA[1]},${eng_auth_CA[2]})`},
		  'CO':{fill:`rgb(${eng_auth_CO[0]},${eng_auth_CO[1]},${eng_auth_CO[2]})`},
		  'CT':{fill:`rgb(${eng_auth_CT[0]},${eng_auth_CT[1]},${eng_auth_CT[2]})`},
		  'DC':{fill:`rgb(${eng_auth_DC[0]},${eng_auth_DC[1]},${eng_auth_DC[2]})`},
		  'DE':{fill:`rgb(${eng_auth_DE[0]},${eng_auth_DE[1]},${eng_auth_DE[2]})`},
		  'FL':{fill:`rgb(${eng_auth_FL[0]},${eng_auth_FL[1]},${eng_auth_FL[2]})`},
		  'GA':{fill:`rgb(${eng_auth_GA[0]},${eng_auth_GA[1]},${eng_auth_GA[2]})`},
		  'HI':{fill:`rgb(${eng_auth_HI[0]},${eng_auth_HI[1]},${eng_auth_HI[2]})`},
		  'IA':{fill:`rgb(${eng_auth_IA[0]},${eng_auth_IA[1]},${eng_auth_IA[2]})`},
		  'ID':{fill:`rgb(${eng_auth_ID[0]},${eng_auth_ID[1]},${eng_auth_ID[2]})`},
		  'IL':{fill:`rgb(${eng_auth_IL[0]},${eng_auth_IL[1]},${eng_auth_IL[2]})`},
		  'IN':{fill:`rgb(${eng_auth_IN[0]},${eng_auth_IN[1]},${eng_auth_IN[2]})`},
		  'KS':{fill:`rgb(${eng_auth_KS[0]},${eng_auth_KS[1]},${eng_auth_KS[2]})`},
		  'KY':{fill:`rgb(${eng_auth_KY[0]},${eng_auth_KY[1]},${eng_auth_KY[2]})`},
		  'LA':{fill:`rgb(${eng_auth_LA[0]},${eng_auth_LA[1]},${eng_auth_LA[2]})`},
		  'MA':{fill:`rgb(${eng_auth_MA[0]},${eng_auth_MA[1]},${eng_auth_MA[2]})`},
		  'MD':{fill:`rgb(${eng_auth_MD[0]},${eng_auth_MD[1]},${eng_auth_MD[2]})`},
		  'ME':{fill:`rgb(${eng_auth_ME[0]},${eng_auth_ME[1]},${eng_auth_ME[2]})`},
		  'MI':{fill:`rgb(${eng_auth_MI[0]},${eng_auth_MI[1]},${eng_auth_MI[2]})`},
		  'MN':{fill:`rgb(${eng_auth_MN[0]},${eng_auth_MN[1]},${eng_auth_MN[2]})`},
		  'MO':{fill:`rgb(${eng_auth_MO[0]},${eng_auth_MO[1]},${eng_auth_MO[2]})`},
		  'MS':{fill:`rgb(${eng_auth_MS[0]},${eng_auth_MS[1]},${eng_auth_MS[2]})`},
		  'NC':{fill:`rgb(${eng_auth_NC[0]},${eng_auth_NC[1]},${eng_auth_NC[2]})`},
		  'ND':{fill:`rgb(${eng_auth_ND[0]},${eng_auth_ND[1]},${eng_auth_ND[2]})`},
		  'NE':{fill:`rgb(${eng_auth_NE[0]},${eng_auth_NE[1]},${eng_auth_NE[2]})`},
		  'NH':{fill:`rgb(${eng_auth_NH[0]},${eng_auth_NH[1]},${eng_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${eng_auth_NJ[0]},${eng_auth_NJ[1]},${eng_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${eng_auth_NM[0]},${eng_auth_NM[1]},${eng_auth_NM[2]})`},
		  'NV':{fill:`rgb(${eng_auth_NV[0]},${eng_auth_NV[1]},${eng_auth_NV[2]})`},
		  'NY':{fill:`rgb(${eng_auth_NY[0]},${eng_auth_NY[1]},${eng_auth_NY[2]})`},
		  'OH':{fill:`rgb(${eng_auth_OH[0]},${eng_auth_OH[1]},${eng_auth_OH[2]})`},
		  'OK':{fill:`rgb(${eng_auth_OK[0]},${eng_auth_OK[1]},${eng_auth_OK[2]})`},
		  'OR':{fill:`rgb(${eng_auth_OR[0]},${eng_auth_OR[1]},${eng_auth_OR[2]})`},
		  'PA':{fill:`rgb(${eng_auth_PA[0]},${eng_auth_PA[1]},${eng_auth_PA[2]})`},
		  'RI':{fill:`rgb(${eng_auth_RI[0]},${eng_auth_RI[1]},${eng_auth_RI[2]})`},
		  'SC':{fill:`rgb(${eng_auth_SC[0]},${eng_auth_SC[1]},${eng_auth_SC[2]})`},
		  'SD':{fill:`rgb(${eng_auth_SD[0]},${eng_auth_SD[1]},${eng_auth_SD[2]})`},
		  'TN':{fill:`rgb(${eng_auth_TN[0]},${eng_auth_TN[1]},${eng_auth_TN[2]})`},
		  'TX':{fill:`rgb(${eng_auth_TX[0]},${eng_auth_TX[1]},${eng_auth_TX[2]})`},
		  'UT':{fill:`rgb(${eng_auth_UT[0]},${eng_auth_UT[1]},${eng_auth_UT[2]})`},
		  'VA':{fill:`rgb(${eng_auth_VA[0]},${eng_auth_VA[1]},${eng_auth_VA[2]})`},
		  'VT':{fill:`rgb(${eng_auth_VT[0]},${eng_auth_VT[1]},${eng_auth_VT[2]})`},
		  'WA':{fill:`rgb(${eng_auth_WA[0]},${eng_auth_WA[1]},${eng_auth_WA[2]})`},
		  'WI':{fill:`rgb(${eng_auth_WI[0]},${eng_auth_WI[1]},${eng_auth_WI[2]})`},
		  'WY':{fill:`rgb(${eng_auth_WY[0]},${eng_auth_WY[1]},${eng_auth_WY[2]})`},
		  'WV':{fill:`rgb(${eng_auth_WV[0]},${eng_auth_WV[1]},${eng_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#wel_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${wel_con_AK[0]},${wel_con_AK[1]},${wel_con_AK[2]})`},
		  'AL':{fill:`rgb(${wel_con_AL[0]},${wel_con_AL[1]},${wel_con_AL[2]})`},
		  'AR':{fill:`rgb(${wel_con_AR[0]},${wel_con_AR[1]},${wel_con_AR[2]})`},
		  'AZ':{fill:`rgb(${wel_con_AZ[0]},${wel_con_AZ[1]},${wel_con_AZ[2]})`},
		  'CA':{fill:`rgb(${wel_con_CA[0]},${wel_con_CA[1]},${wel_con_CA[2]})`},
		  'CO':{fill:`rgb(${wel_con_CO[0]},${wel_con_CO[1]},${wel_con_CO[2]})`},
		  'CT':{fill:`rgb(${wel_con_CT[0]},${wel_con_CT[1]},${wel_con_CT[2]})`},
		  'DC':{fill:`rgb(${wel_con_DC[0]},${wel_con_DC[1]},${wel_con_DC[2]})`},
		  'DE':{fill:`rgb(${wel_con_DE[0]},${wel_con_DE[1]},${wel_con_DE[2]})`},
		  'FL':{fill:`rgb(${wel_con_FL[0]},${wel_con_FL[1]},${wel_con_FL[2]})`},
		  'GA':{fill:`rgb(${wel_con_GA[0]},${wel_con_GA[1]},${wel_con_GA[2]})`},
		  'HI':{fill:`rgb(${wel_con_HI[0]},${wel_con_HI[1]},${wel_con_HI[2]})`},
		  'IA':{fill:`rgb(${wel_con_IA[0]},${wel_con_IA[1]},${wel_con_IA[2]})`},
		  'ID':{fill:`rgb(${wel_con_ID[0]},${wel_con_ID[1]},${wel_con_ID[2]})`},
		  'IL':{fill:`rgb(${wel_con_IL[0]},${wel_con_IL[1]},${wel_con_IL[2]})`},
		  'IN':{fill:`rgb(${wel_con_IN[0]},${wel_con_IN[1]},${wel_con_IN[2]})`},
		  'KS':{fill:`rgb(${wel_con_KS[0]},${wel_con_KS[1]},${wel_con_KS[2]})`},
		  'KY':{fill:`rgb(${wel_con_KY[0]},${wel_con_KY[1]},${wel_con_KY[2]})`},
		  'LA':{fill:`rgb(${wel_con_LA[0]},${wel_con_LA[1]},${wel_con_LA[2]})`},
		  'MA':{fill:`rgb(${wel_con_MA[0]},${wel_con_MA[1]},${wel_con_MA[2]})`},
		  'MD':{fill:`rgb(${wel_con_MD[0]},${wel_con_MD[1]},${wel_con_MD[2]})`},
		  'ME':{fill:`rgb(${wel_con_ME[0]},${wel_con_ME[1]},${wel_con_ME[2]})`},
		  'MI':{fill:`rgb(${wel_con_MI[0]},${wel_con_MI[1]},${wel_con_MI[2]})`},
		  'MN':{fill:`rgb(${wel_con_MN[0]},${wel_con_MN[1]},${wel_con_MN[2]})`},
		  'MO':{fill:`rgb(${wel_con_MO[0]},${wel_con_MO[1]},${wel_con_MO[2]})`},
		  'MS':{fill:`rgb(${wel_con_MS[0]},${wel_con_MS[1]},${wel_con_MS[2]})`},
		  'NC':{fill:`rgb(${wel_con_NC[0]},${wel_con_NC[1]},${wel_con_NC[2]})`},
		  'ND':{fill:`rgb(${wel_con_ND[0]},${wel_con_ND[1]},${wel_con_ND[2]})`},
		  'NE':{fill:`rgb(${wel_con_NE[0]},${wel_con_NE[1]},${wel_con_NE[2]})`},
		  'NH':{fill:`rgb(${wel_con_NH[0]},${wel_con_NH[1]},${wel_con_NH[2]})`},
		  'NJ':{fill:`rgb(${wel_con_NJ[0]},${wel_con_NJ[1]},${wel_con_NJ[2]})`},
		  'NM':{fill:`rgb(${wel_con_NM[0]},${wel_con_NM[1]},${wel_con_NM[2]})`},
		  'NV':{fill:`rgb(${wel_con_NV[0]},${wel_con_NV[1]},${wel_con_NV[2]})`},
		  'NY':{fill:`rgb(${wel_con_NY[0]},${wel_con_NY[1]},${wel_con_NY[2]})`},
		  'OH':{fill:`rgb(${wel_con_OH[0]},${wel_con_OH[1]},${wel_con_OH[2]})`},
		  'OK':{fill:`rgb(${wel_con_OK[0]},${wel_con_OK[1]},${wel_con_OK[2]})`},
		  'OR':{fill:`rgb(${wel_con_OR[0]},${wel_con_OR[1]},${wel_con_OR[2]})`},
		  'PA':{fill:`rgb(${wel_con_PA[0]},${wel_con_PA[1]},${wel_con_PA[2]})`},
		  'RI':{fill:`rgb(${wel_con_RI[0]},${wel_con_RI[1]},${wel_con_RI[2]})`},
		  'SC':{fill:`rgb(${wel_con_SC[0]},${wel_con_SC[1]},${wel_con_SC[2]})`},
		  'SD':{fill:`rgb(${wel_con_SD[0]},${wel_con_SD[1]},${wel_con_SD[2]})`},
		  'TN':{fill:`rgb(${wel_con_TN[0]},${wel_con_TN[1]},${wel_con_TN[2]})`},
		  'TX':{fill:`rgb(${wel_con_TX[0]},${wel_con_TX[1]},${wel_con_TX[2]})`},
		  'UT':{fill:`rgb(${wel_con_UT[0]},${wel_con_UT[1]},${wel_con_UT[2]})`},
		  'VA':{fill:`rgb(${wel_con_VA[0]},${wel_con_VA[1]},${wel_con_VA[2]})`},
		  'VT':{fill:`rgb(${wel_con_VT[0]},${wel_con_VT[1]},${wel_con_VT[2]})`},
		  'WA':{fill:`rgb(${wel_con_WA[0]},${wel_con_WA[1]},${wel_con_WA[2]})`},
		  'WI':{fill:`rgb(${wel_con_WI[0]},${wel_con_WI[1]},${wel_con_WI[2]})`},
		  'WY':{fill:`rgb(${wel_con_WY[0]},${wel_con_WY[1]},${wel_con_WY[2]})`},
		  'WV':{fill:`rgb(${wel_con_WV[0]},${wel_con_WV[1]},${wel_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#wel_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${wel_auth_AK[0]},${wel_auth_AK[1]},${wel_auth_AK[2]})`},
		  'AL':{fill:`rgb(${wel_auth_AL[0]},${wel_auth_AL[1]},${wel_auth_AL[2]})`},
		  'AR':{fill:`rgb(${wel_auth_AR[0]},${wel_auth_AR[1]},${wel_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${wel_auth_AZ[0]},${wel_auth_AZ[1]},${wel_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${wel_auth_CA[0]},${wel_auth_CA[1]},${wel_auth_CA[2]})`},
		  'CO':{fill:`rgb(${wel_auth_CO[0]},${wel_auth_CO[1]},${wel_auth_CO[2]})`},
		  'CT':{fill:`rgb(${wel_auth_CT[0]},${wel_auth_CT[1]},${wel_auth_CT[2]})`},
		  'DC':{fill:`rgb(${wel_auth_DC[0]},${wel_auth_DC[1]},${wel_auth_DC[2]})`},
		  'DE':{fill:`rgb(${wel_auth_DE[0]},${wel_auth_DE[1]},${wel_auth_DE[2]})`},
		  'FL':{fill:`rgb(${wel_auth_FL[0]},${wel_auth_FL[1]},${wel_auth_FL[2]})`},
		  'GA':{fill:`rgb(${wel_auth_GA[0]},${wel_auth_GA[1]},${wel_auth_GA[2]})`},
		  'HI':{fill:`rgb(${wel_auth_HI[0]},${wel_auth_HI[1]},${wel_auth_HI[2]})`},
		  'IA':{fill:`rgb(${wel_auth_IA[0]},${wel_auth_IA[1]},${wel_auth_IA[2]})`},
		  'ID':{fill:`rgb(${wel_auth_ID[0]},${wel_auth_ID[1]},${wel_auth_ID[2]})`},
		  'IL':{fill:`rgb(${wel_auth_IL[0]},${wel_auth_IL[1]},${wel_auth_IL[2]})`},
		  'IN':{fill:`rgb(${wel_auth_IN[0]},${wel_auth_IN[1]},${wel_auth_IN[2]})`},
		  'KS':{fill:`rgb(${wel_auth_KS[0]},${wel_auth_KS[1]},${wel_auth_KS[2]})`},
		  'KY':{fill:`rgb(${wel_auth_KY[0]},${wel_auth_KY[1]},${wel_auth_KY[2]})`},
		  'LA':{fill:`rgb(${wel_auth_LA[0]},${wel_auth_LA[1]},${wel_auth_LA[2]})`},
		  'MA':{fill:`rgb(${wel_auth_MA[0]},${wel_auth_MA[1]},${wel_auth_MA[2]})`},
		  'MD':{fill:`rgb(${wel_auth_MD[0]},${wel_auth_MD[1]},${wel_auth_MD[2]})`},
		  'ME':{fill:`rgb(${wel_auth_ME[0]},${wel_auth_ME[1]},${wel_auth_ME[2]})`},
		  'MI':{fill:`rgb(${wel_auth_MI[0]},${wel_auth_MI[1]},${wel_auth_MI[2]})`},
		  'MN':{fill:`rgb(${wel_auth_MN[0]},${wel_auth_MN[1]},${wel_auth_MN[2]})`},
		  'MO':{fill:`rgb(${wel_auth_MO[0]},${wel_auth_MO[1]},${wel_auth_MO[2]})`},
		  'MS':{fill:`rgb(${wel_auth_MS[0]},${wel_auth_MS[1]},${wel_auth_MS[2]})`},
		  'NC':{fill:`rgb(${wel_auth_NC[0]},${wel_auth_NC[1]},${wel_auth_NC[2]})`},
		  'ND':{fill:`rgb(${wel_auth_ND[0]},${wel_auth_ND[1]},${wel_auth_ND[2]})`},
		  'NE':{fill:`rgb(${wel_auth_NE[0]},${wel_auth_NE[1]},${wel_auth_NE[2]})`},
		  'NH':{fill:`rgb(${wel_auth_NH[0]},${wel_auth_NH[1]},${wel_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${wel_auth_NJ[0]},${wel_auth_NJ[1]},${wel_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${wel_auth_NM[0]},${wel_auth_NM[1]},${wel_auth_NM[2]})`},
		  'NV':{fill:`rgb(${wel_auth_NV[0]},${wel_auth_NV[1]},${wel_auth_NV[2]})`},
		  'NY':{fill:`rgb(${wel_auth_NY[0]},${wel_auth_NY[1]},${wel_auth_NY[2]})`},
		  'OH':{fill:`rgb(${wel_auth_OH[0]},${wel_auth_OH[1]},${wel_auth_OH[2]})`},
		  'OK':{fill:`rgb(${wel_auth_OK[0]},${wel_auth_OK[1]},${wel_auth_OK[2]})`},
		  'OR':{fill:`rgb(${wel_auth_OR[0]},${wel_auth_OR[1]},${wel_auth_OR[2]})`},
		  'PA':{fill:`rgb(${wel_auth_PA[0]},${wel_auth_PA[1]},${wel_auth_PA[2]})`},
		  'RI':{fill:`rgb(${wel_auth_RI[0]},${wel_auth_RI[1]},${wel_auth_RI[2]})`},
		  'SC':{fill:`rgb(${wel_auth_SC[0]},${wel_auth_SC[1]},${wel_auth_SC[2]})`},
		  'SD':{fill:`rgb(${wel_auth_SD[0]},${wel_auth_SD[1]},${wel_auth_SD[2]})`},
		  'TN':{fill:`rgb(${wel_auth_TN[0]},${wel_auth_TN[1]},${wel_auth_TN[2]})`},
		  'TX':{fill:`rgb(${wel_auth_TX[0]},${wel_auth_TX[1]},${wel_auth_TX[2]})`},
		  'UT':{fill:`rgb(${wel_auth_UT[0]},${wel_auth_UT[1]},${wel_auth_UT[2]})`},
		  'VA':{fill:`rgb(${wel_auth_VA[0]},${wel_auth_VA[1]},${wel_auth_VA[2]})`},
		  'VT':{fill:`rgb(${wel_auth_VT[0]},${wel_auth_VT[1]},${wel_auth_VT[2]})`},
		  'WA':{fill:`rgb(${wel_auth_WA[0]},${wel_auth_WA[1]},${wel_auth_WA[2]})`},
		  'WI':{fill:`rgb(${wel_auth_WI[0]},${wel_auth_WI[1]},${wel_auth_WI[2]})`},
		  'WY':{fill:`rgb(${wel_auth_WY[0]},${wel_auth_WY[1]},${wel_auth_WY[2]})`},
		  'WV':{fill:`rgb(${wel_auth_WV[0]},${wel_auth_WV[1]},${wel_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#hea_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${hea_con_AK[0]},${hea_con_AK[1]},${hea_con_AK[2]})`},
		  'AL':{fill:`rgb(${hea_con_AL[0]},${hea_con_AL[1]},${hea_con_AL[2]})`},
		  'AR':{fill:`rgb(${hea_con_AR[0]},${hea_con_AR[1]},${hea_con_AR[2]})`},
		  'AZ':{fill:`rgb(${hea_con_AZ[0]},${hea_con_AZ[1]},${hea_con_AZ[2]})`},
		  'CA':{fill:`rgb(${hea_con_CA[0]},${hea_con_CA[1]},${hea_con_CA[2]})`},
		  'CO':{fill:`rgb(${hea_con_CO[0]},${hea_con_CO[1]},${hea_con_CO[2]})`},
		  'CT':{fill:`rgb(${hea_con_CT[0]},${hea_con_CT[1]},${hea_con_CT[2]})`},
		  'DC':{fill:`rgb(${hea_con_DC[0]},${hea_con_DC[1]},${hea_con_DC[2]})`},
		  'DE':{fill:`rgb(${hea_con_DE[0]},${hea_con_DE[1]},${hea_con_DE[2]})`},
		  'FL':{fill:`rgb(${hea_con_FL[0]},${hea_con_FL[1]},${hea_con_FL[2]})`},
		  'GA':{fill:`rgb(${hea_con_GA[0]},${hea_con_GA[1]},${hea_con_GA[2]})`},
		  'HI':{fill:`rgb(${hea_con_HI[0]},${hea_con_HI[1]},${hea_con_HI[2]})`},
		  'IA':{fill:`rgb(${hea_con_IA[0]},${hea_con_IA[1]},${hea_con_IA[2]})`},
		  'ID':{fill:`rgb(${hea_con_ID[0]},${hea_con_ID[1]},${hea_con_ID[2]})`},
		  'IL':{fill:`rgb(${hea_con_IL[0]},${hea_con_IL[1]},${hea_con_IL[2]})`},
		  'IN':{fill:`rgb(${hea_con_IN[0]},${hea_con_IN[1]},${hea_con_IN[2]})`},
		  'KS':{fill:`rgb(${hea_con_KS[0]},${hea_con_KS[1]},${hea_con_KS[2]})`},
		  'KY':{fill:`rgb(${hea_con_KY[0]},${hea_con_KY[1]},${hea_con_KY[2]})`},
		  'LA':{fill:`rgb(${hea_con_LA[0]},${hea_con_LA[1]},${hea_con_LA[2]})`},
		  'MA':{fill:`rgb(${hea_con_MA[0]},${hea_con_MA[1]},${hea_con_MA[2]})`},
		  'MD':{fill:`rgb(${hea_con_MD[0]},${hea_con_MD[1]},${hea_con_MD[2]})`},
		  'ME':{fill:`rgb(${hea_con_ME[0]},${hea_con_ME[1]},${hea_con_ME[2]})`},
		  'MI':{fill:`rgb(${hea_con_MI[0]},${hea_con_MI[1]},${hea_con_MI[2]})`},
		  'MN':{fill:`rgb(${hea_con_MN[0]},${hea_con_MN[1]},${hea_con_MN[2]})`},
		  'MO':{fill:`rgb(${hea_con_MO[0]},${hea_con_MO[1]},${hea_con_MO[2]})`},
		  'MS':{fill:`rgb(${hea_con_MS[0]},${hea_con_MS[1]},${hea_con_MS[2]})`},
		  'NC':{fill:`rgb(${hea_con_NC[0]},${hea_con_NC[1]},${hea_con_NC[2]})`},
		  'ND':{fill:`rgb(${hea_con_ND[0]},${hea_con_ND[1]},${hea_con_ND[2]})`},
		  'NE':{fill:`rgb(${hea_con_NE[0]},${hea_con_NE[1]},${hea_con_NE[2]})`},
		  'NH':{fill:`rgb(${hea_con_NH[0]},${hea_con_NH[1]},${hea_con_NH[2]})`},
		  'NJ':{fill:`rgb(${hea_con_NJ[0]},${hea_con_NJ[1]},${hea_con_NJ[2]})`},
		  'NM':{fill:`rgb(${hea_con_NM[0]},${hea_con_NM[1]},${hea_con_NM[2]})`},
		  'NV':{fill:`rgb(${hea_con_NV[0]},${hea_con_NV[1]},${hea_con_NV[2]})`},
		  'NY':{fill:`rgb(${hea_con_NY[0]},${hea_con_NY[1]},${hea_con_NY[2]})`},
		  'OH':{fill:`rgb(${hea_con_OH[0]},${hea_con_OH[1]},${hea_con_OH[2]})`},
		  'OK':{fill:`rgb(${hea_con_OK[0]},${hea_con_OK[1]},${hea_con_OK[2]})`},
		  'OR':{fill:`rgb(${hea_con_OR[0]},${hea_con_OR[1]},${hea_con_OR[2]})`},
		  'PA':{fill:`rgb(${hea_con_PA[0]},${hea_con_PA[1]},${hea_con_PA[2]})`},
		  'RI':{fill:`rgb(${hea_con_RI[0]},${hea_con_RI[1]},${hea_con_RI[2]})`},
		  'SC':{fill:`rgb(${hea_con_SC[0]},${hea_con_SC[1]},${hea_con_SC[2]})`},
		  'SD':{fill:`rgb(${hea_con_SD[0]},${hea_con_SD[1]},${hea_con_SD[2]})`},
		  'TN':{fill:`rgb(${hea_con_TN[0]},${hea_con_TN[1]},${hea_con_TN[2]})`},
		  'TX':{fill:`rgb(${hea_con_TX[0]},${hea_con_TX[1]},${hea_con_TX[2]})`},
		  'UT':{fill:`rgb(${hea_con_UT[0]},${hea_con_UT[1]},${hea_con_UT[2]})`},
		  'VA':{fill:`rgb(${hea_con_VA[0]},${hea_con_VA[1]},${hea_con_VA[2]})`},
		  'VT':{fill:`rgb(${hea_con_VT[0]},${hea_con_VT[1]},${hea_con_VT[2]})`},
		  'WA':{fill:`rgb(${hea_con_WA[0]},${hea_con_WA[1]},${hea_con_WA[2]})`},
		  'WI':{fill:`rgb(${hea_con_WI[0]},${hea_con_WI[1]},${hea_con_WI[2]})`},
		  'WY':{fill:`rgb(${hea_con_WY[0]},${hea_con_WY[1]},${hea_con_WY[2]})`},
		  'WV':{fill:`rgb(${hea_con_WV[0]},${hea_con_WV[1]},${hea_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#hea_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${hea_auth_AK[0]},${hea_auth_AK[1]},${hea_auth_AK[2]})`},
		  'AL':{fill:`rgb(${hea_auth_AL[0]},${hea_auth_AL[1]},${hea_auth_AL[2]})`},
		  'AR':{fill:`rgb(${hea_auth_AR[0]},${hea_auth_AR[1]},${hea_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${hea_auth_AZ[0]},${hea_auth_AZ[1]},${hea_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${hea_auth_CA[0]},${hea_auth_CA[1]},${hea_auth_CA[2]})`},
		  'CO':{fill:`rgb(${hea_auth_CO[0]},${hea_auth_CO[1]},${hea_auth_CO[2]})`},
		  'CT':{fill:`rgb(${hea_auth_CT[0]},${hea_auth_CT[1]},${hea_auth_CT[2]})`},
		  'DC':{fill:`rgb(${hea_auth_DC[0]},${hea_auth_DC[1]},${hea_auth_DC[2]})`},
		  'DE':{fill:`rgb(${hea_auth_DE[0]},${hea_auth_DE[1]},${hea_auth_DE[2]})`},
		  'FL':{fill:`rgb(${hea_auth_FL[0]},${hea_auth_FL[1]},${hea_auth_FL[2]})`},
		  'GA':{fill:`rgb(${hea_auth_GA[0]},${hea_auth_GA[1]},${hea_auth_GA[2]})`},
		  'HI':{fill:`rgb(${hea_auth_HI[0]},${hea_auth_HI[1]},${hea_auth_HI[2]})`},
		  'IA':{fill:`rgb(${hea_auth_IA[0]},${hea_auth_IA[1]},${hea_auth_IA[2]})`},
		  'ID':{fill:`rgb(${hea_auth_ID[0]},${hea_auth_ID[1]},${hea_auth_ID[2]})`},
		  'IL':{fill:`rgb(${hea_auth_IL[0]},${hea_auth_IL[1]},${hea_auth_IL[2]})`},
		  'IN':{fill:`rgb(${hea_auth_IN[0]},${hea_auth_IN[1]},${hea_auth_IN[2]})`},
		  'KS':{fill:`rgb(${hea_auth_KS[0]},${hea_auth_KS[1]},${hea_auth_KS[2]})`},
		  'KY':{fill:`rgb(${hea_auth_KY[0]},${hea_auth_KY[1]},${hea_auth_KY[2]})`},
		  'LA':{fill:`rgb(${hea_auth_LA[0]},${hea_auth_LA[1]},${hea_auth_LA[2]})`},
		  'MA':{fill:`rgb(${hea_auth_MA[0]},${hea_auth_MA[1]},${hea_auth_MA[2]})`},
		  'MD':{fill:`rgb(${hea_auth_MD[0]},${hea_auth_MD[1]},${hea_auth_MD[2]})`},
		  'ME':{fill:`rgb(${hea_auth_ME[0]},${hea_auth_ME[1]},${hea_auth_ME[2]})`},
		  'MI':{fill:`rgb(${hea_auth_MI[0]},${hea_auth_MI[1]},${hea_auth_MI[2]})`},
		  'MN':{fill:`rgb(${hea_auth_MN[0]},${hea_auth_MN[1]},${hea_auth_MN[2]})`},
		  'MO':{fill:`rgb(${hea_auth_MO[0]},${hea_auth_MO[1]},${hea_auth_MO[2]})`},
		  'MS':{fill:`rgb(${hea_auth_MS[0]},${hea_auth_MS[1]},${hea_auth_MS[2]})`},
		  'NC':{fill:`rgb(${hea_auth_NC[0]},${hea_auth_NC[1]},${hea_auth_NC[2]})`},
		  'ND':{fill:`rgb(${hea_auth_ND[0]},${hea_auth_ND[1]},${hea_auth_ND[2]})`},
		  'NE':{fill:`rgb(${hea_auth_NE[0]},${hea_auth_NE[1]},${hea_auth_NE[2]})`},
		  'NH':{fill:`rgb(${hea_auth_NH[0]},${hea_auth_NH[1]},${hea_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${hea_auth_NJ[0]},${hea_auth_NJ[1]},${hea_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${hea_auth_NM[0]},${hea_auth_NM[1]},${hea_auth_NM[2]})`},
		  'NV':{fill:`rgb(${hea_auth_NV[0]},${hea_auth_NV[1]},${hea_auth_NV[2]})`},
		  'NY':{fill:`rgb(${hea_auth_NY[0]},${hea_auth_NY[1]},${hea_auth_NY[2]})`},
		  'OH':{fill:`rgb(${hea_auth_OH[0]},${hea_auth_OH[1]},${hea_auth_OH[2]})`},
		  'OK':{fill:`rgb(${hea_auth_OK[0]},${hea_auth_OK[1]},${hea_auth_OK[2]})`},
		  'OR':{fill:`rgb(${hea_auth_OR[0]},${hea_auth_OR[1]},${hea_auth_OR[2]})`},
		  'PA':{fill:`rgb(${hea_auth_PA[0]},${hea_auth_PA[1]},${hea_auth_PA[2]})`},
		  'RI':{fill:`rgb(${hea_auth_RI[0]},${hea_auth_RI[1]},${hea_auth_RI[2]})`},
		  'SC':{fill:`rgb(${hea_auth_SC[0]},${hea_auth_SC[1]},${hea_auth_SC[2]})`},
		  'SD':{fill:`rgb(${hea_auth_SD[0]},${hea_auth_SD[1]},${hea_auth_SD[2]})`},
		  'TN':{fill:`rgb(${hea_auth_TN[0]},${hea_auth_TN[1]},${hea_auth_TN[2]})`},
		  'TX':{fill:`rgb(${hea_auth_TX[0]},${hea_auth_TX[1]},${hea_auth_TX[2]})`},
		  'UT':{fill:`rgb(${hea_auth_UT[0]},${hea_auth_UT[1]},${hea_auth_UT[2]})`},
		  'VA':{fill:`rgb(${hea_auth_VA[0]},${hea_auth_VA[1]},${hea_auth_VA[2]})`},
		  'VT':{fill:`rgb(${hea_auth_VT[0]},${hea_auth_VT[1]},${hea_auth_VT[2]})`},
		  'WA':{fill:`rgb(${hea_auth_WA[0]},${hea_auth_WA[1]},${hea_auth_WA[2]})`},
		  'WI':{fill:`rgb(${hea_auth_WI[0]},${hea_auth_WI[1]},${hea_auth_WI[2]})`},
		  'WY':{fill:`rgb(${hea_auth_WY[0]},${hea_auth_WY[1]},${hea_auth_WY[2]})`},
		  'WV':{fill:`rgb(${hea_auth_WV[0]},${hea_auth_WV[1]},${hea_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#gov_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${gov_con_AK[0]},${gov_con_AK[1]},${gov_con_AK[2]})`},
		  'AL':{fill:`rgb(${gov_con_AL[0]},${gov_con_AL[1]},${gov_con_AL[2]})`},
		  'AR':{fill:`rgb(${gov_con_AR[0]},${gov_con_AR[1]},${gov_con_AR[2]})`},
		  'AZ':{fill:`rgb(${gov_con_AZ[0]},${gov_con_AZ[1]},${gov_con_AZ[2]})`},
		  'CA':{fill:`rgb(${gov_con_CA[0]},${gov_con_CA[1]},${gov_con_CA[2]})`},
		  'CO':{fill:`rgb(${gov_con_CO[0]},${gov_con_CO[1]},${gov_con_CO[2]})`},
		  'CT':{fill:`rgb(${gov_con_CT[0]},${gov_con_CT[1]},${gov_con_CT[2]})`},
		  'DC':{fill:`rgb(${gov_con_DC[0]},${gov_con_DC[1]},${gov_con_DC[2]})`},
		  'DE':{fill:`rgb(${gov_con_DE[0]},${gov_con_DE[1]},${gov_con_DE[2]})`},
		  'FL':{fill:`rgb(${gov_con_FL[0]},${gov_con_FL[1]},${gov_con_FL[2]})`},
		  'GA':{fill:`rgb(${gov_con_GA[0]},${gov_con_GA[1]},${gov_con_GA[2]})`},
		  'HI':{fill:`rgb(${gov_con_HI[0]},${gov_con_HI[1]},${gov_con_HI[2]})`},
		  'IA':{fill:`rgb(${gov_con_IA[0]},${gov_con_IA[1]},${gov_con_IA[2]})`},
		  'ID':{fill:`rgb(${gov_con_ID[0]},${gov_con_ID[1]},${gov_con_ID[2]})`},
		  'IL':{fill:`rgb(${gov_con_IL[0]},${gov_con_IL[1]},${gov_con_IL[2]})`},
		  'IN':{fill:`rgb(${gov_con_IN[0]},${gov_con_IN[1]},${gov_con_IN[2]})`},
		  'KS':{fill:`rgb(${gov_con_KS[0]},${gov_con_KS[1]},${gov_con_KS[2]})`},
		  'KY':{fill:`rgb(${gov_con_KY[0]},${gov_con_KY[1]},${gov_con_KY[2]})`},
		  'LA':{fill:`rgb(${gov_con_LA[0]},${gov_con_LA[1]},${gov_con_LA[2]})`},
		  'MA':{fill:`rgb(${gov_con_MA[0]},${gov_con_MA[1]},${gov_con_MA[2]})`},
		  'MD':{fill:`rgb(${gov_con_MD[0]},${gov_con_MD[1]},${gov_con_MD[2]})`},
		  'ME':{fill:`rgb(${gov_con_ME[0]},${gov_con_ME[1]},${gov_con_ME[2]})`},
		  'MI':{fill:`rgb(${gov_con_MI[0]},${gov_con_MI[1]},${gov_con_MI[2]})`},
		  'MN':{fill:`rgb(${gov_con_MN[0]},${gov_con_MN[1]},${gov_con_MN[2]})`},
		  'MO':{fill:`rgb(${gov_con_MO[0]},${gov_con_MO[1]},${gov_con_MO[2]})`},
		  'MS':{fill:`rgb(${gov_con_MS[0]},${gov_con_MS[1]},${gov_con_MS[2]})`},
		  'NC':{fill:`rgb(${gov_con_NC[0]},${gov_con_NC[1]},${gov_con_NC[2]})`},
		  'ND':{fill:`rgb(${gov_con_ND[0]},${gov_con_ND[1]},${gov_con_ND[2]})`},
		  'NE':{fill:`rgb(${gov_con_NE[0]},${gov_con_NE[1]},${gov_con_NE[2]})`},
		  'NH':{fill:`rgb(${gov_con_NH[0]},${gov_con_NH[1]},${gov_con_NH[2]})`},
		  'NJ':{fill:`rgb(${gov_con_NJ[0]},${gov_con_NJ[1]},${gov_con_NJ[2]})`},
		  'NM':{fill:`rgb(${gov_con_NM[0]},${gov_con_NM[1]},${gov_con_NM[2]})`},
		  'NV':{fill:`rgb(${gov_con_NV[0]},${gov_con_NV[1]},${gov_con_NV[2]})`},
		  'NY':{fill:`rgb(${gov_con_NY[0]},${gov_con_NY[1]},${gov_con_NY[2]})`},
		  'OH':{fill:`rgb(${gov_con_OH[0]},${gov_con_OH[1]},${gov_con_OH[2]})`},
		  'OK':{fill:`rgb(${gov_con_OK[0]},${gov_con_OK[1]},${gov_con_OK[2]})`},
		  'OR':{fill:`rgb(${gov_con_OR[0]},${gov_con_OR[1]},${gov_con_OR[2]})`},
		  'PA':{fill:`rgb(${gov_con_PA[0]},${gov_con_PA[1]},${gov_con_PA[2]})`},
		  'RI':{fill:`rgb(${gov_con_RI[0]},${gov_con_RI[1]},${gov_con_RI[2]})`},
		  'SC':{fill:`rgb(${gov_con_SC[0]},${gov_con_SC[1]},${gov_con_SC[2]})`},
		  'SD':{fill:`rgb(${gov_con_SD[0]},${gov_con_SD[1]},${gov_con_SD[2]})`},
		  'TN':{fill:`rgb(${gov_con_TN[0]},${gov_con_TN[1]},${gov_con_TN[2]})`},
		  'TX':{fill:`rgb(${gov_con_TX[0]},${gov_con_TX[1]},${gov_con_TX[2]})`},
		  'UT':{fill:`rgb(${gov_con_UT[0]},${gov_con_UT[1]},${gov_con_UT[2]})`},
		  'VA':{fill:`rgb(${gov_con_VA[0]},${gov_con_VA[1]},${gov_con_VA[2]})`},
		  'VT':{fill:`rgb(${gov_con_VT[0]},${gov_con_VT[1]},${gov_con_VT[2]})`},
		  'WA':{fill:`rgb(${gov_con_WA[0]},${gov_con_WA[1]},${gov_con_WA[2]})`},
		  'WI':{fill:`rgb(${gov_con_WI[0]},${gov_con_WI[1]},${gov_con_WI[2]})`},
		  'WY':{fill:`rgb(${gov_con_WY[0]},${gov_con_WY[1]},${gov_con_WY[2]})`},
		  'WV':{fill:`rgb(${gov_con_WV[0]},${gov_con_WV[1]},${gov_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#gov_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${gov_auth_AK[0]},${gov_auth_AK[1]},${gov_auth_AK[2]})`},
		  'AL':{fill:`rgb(${gov_auth_AL[0]},${gov_auth_AL[1]},${gov_auth_AL[2]})`},
		  'AR':{fill:`rgb(${gov_auth_AR[0]},${gov_auth_AR[1]},${gov_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${gov_auth_AZ[0]},${gov_auth_AZ[1]},${gov_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${gov_auth_CA[0]},${gov_auth_CA[1]},${gov_auth_CA[2]})`},
		  'CO':{fill:`rgb(${gov_auth_CO[0]},${gov_auth_CO[1]},${gov_auth_CO[2]})`},
		  'CT':{fill:`rgb(${gov_auth_CT[0]},${gov_auth_CT[1]},${gov_auth_CT[2]})`},
		  'DC':{fill:`rgb(${gov_auth_DC[0]},${gov_auth_DC[1]},${gov_auth_DC[2]})`},
		  'DE':{fill:`rgb(${gov_auth_DE[0]},${gov_auth_DE[1]},${gov_auth_DE[2]})`},
		  'FL':{fill:`rgb(${gov_auth_FL[0]},${gov_auth_FL[1]},${gov_auth_FL[2]})`},
		  'GA':{fill:`rgb(${gov_auth_GA[0]},${gov_auth_GA[1]},${gov_auth_GA[2]})`},
		  'HI':{fill:`rgb(${gov_auth_HI[0]},${gov_auth_HI[1]},${gov_auth_HI[2]})`},
		  'IA':{fill:`rgb(${gov_auth_IA[0]},${gov_auth_IA[1]},${gov_auth_IA[2]})`},
		  'ID':{fill:`rgb(${gov_auth_ID[0]},${gov_auth_ID[1]},${gov_auth_ID[2]})`},
		  'IL':{fill:`rgb(${gov_auth_IL[0]},${gov_auth_IL[1]},${gov_auth_IL[2]})`},
		  'IN':{fill:`rgb(${gov_auth_IN[0]},${gov_auth_IN[1]},${gov_auth_IN[2]})`},
		  'KS':{fill:`rgb(${gov_auth_KS[0]},${gov_auth_KS[1]},${gov_auth_KS[2]})`},
		  'KY':{fill:`rgb(${gov_auth_KY[0]},${gov_auth_KY[1]},${gov_auth_KY[2]})`},
		  'LA':{fill:`rgb(${gov_auth_LA[0]},${gov_auth_LA[1]},${gov_auth_LA[2]})`},
		  'MA':{fill:`rgb(${gov_auth_MA[0]},${gov_auth_MA[1]},${gov_auth_MA[2]})`},
		  'MD':{fill:`rgb(${gov_auth_MD[0]},${gov_auth_MD[1]},${gov_auth_MD[2]})`},
		  'ME':{fill:`rgb(${gov_auth_ME[0]},${gov_auth_ME[1]},${gov_auth_ME[2]})`},
		  'MI':{fill:`rgb(${gov_auth_MI[0]},${gov_auth_MI[1]},${gov_auth_MI[2]})`},
		  'MN':{fill:`rgb(${gov_auth_MN[0]},${gov_auth_MN[1]},${gov_auth_MN[2]})`},
		  'MO':{fill:`rgb(${gov_auth_MO[0]},${gov_auth_MO[1]},${gov_auth_MO[2]})`},
		  'MS':{fill:`rgb(${gov_auth_MS[0]},${gov_auth_MS[1]},${gov_auth_MS[2]})`},
		  'NC':{fill:`rgb(${gov_auth_NC[0]},${gov_auth_NC[1]},${gov_auth_NC[2]})`},
		  'ND':{fill:`rgb(${gov_auth_ND[0]},${gov_auth_ND[1]},${gov_auth_ND[2]})`},
		  'NE':{fill:`rgb(${gov_auth_NE[0]},${gov_auth_NE[1]},${gov_auth_NE[2]})`},
		  'NH':{fill:`rgb(${gov_auth_NH[0]},${gov_auth_NH[1]},${gov_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${gov_auth_NJ[0]},${gov_auth_NJ[1]},${gov_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${gov_auth_NM[0]},${gov_auth_NM[1]},${gov_auth_NM[2]})`},
		  'NV':{fill:`rgb(${gov_auth_NV[0]},${gov_auth_NV[1]},${gov_auth_NV[2]})`},
		  'NY':{fill:`rgb(${gov_auth_NY[0]},${gov_auth_NY[1]},${gov_auth_NY[2]})`},
		  'OH':{fill:`rgb(${gov_auth_OH[0]},${gov_auth_OH[1]},${gov_auth_OH[2]})`},
		  'OK':{fill:`rgb(${gov_auth_OK[0]},${gov_auth_OK[1]},${gov_auth_OK[2]})`},
		  'OR':{fill:`rgb(${gov_auth_OR[0]},${gov_auth_OR[1]},${gov_auth_OR[2]})`},
		  'PA':{fill:`rgb(${gov_auth_PA[0]},${gov_auth_PA[1]},${gov_auth_PA[2]})`},
		  'RI':{fill:`rgb(${gov_auth_RI[0]},${gov_auth_RI[1]},${gov_auth_RI[2]})`},
		  'SC':{fill:`rgb(${gov_auth_SC[0]},${gov_auth_SC[1]},${gov_auth_SC[2]})`},
		  'SD':{fill:`rgb(${gov_auth_SD[0]},${gov_auth_SD[1]},${gov_auth_SD[2]})`},
		  'TN':{fill:`rgb(${gov_auth_TN[0]},${gov_auth_TN[1]},${gov_auth_TN[2]})`},
		  'TX':{fill:`rgb(${gov_auth_TX[0]},${gov_auth_TX[1]},${gov_auth_TX[2]})`},
		  'UT':{fill:`rgb(${gov_auth_UT[0]},${gov_auth_UT[1]},${gov_auth_UT[2]})`},
		  'VA':{fill:`rgb(${gov_auth_VA[0]},${gov_auth_VA[1]},${gov_auth_VA[2]})`},
		  'VT':{fill:`rgb(${gov_auth_VT[0]},${gov_auth_VT[1]},${gov_auth_VT[2]})`},
		  'WA':{fill:`rgb(${gov_auth_WA[0]},${gov_auth_WA[1]},${gov_auth_WA[2]})`},
		  'WI':{fill:`rgb(${gov_auth_WI[0]},${gov_auth_WI[1]},${gov_auth_WI[2]})`},
		  'WY':{fill:`rgb(${gov_auth_WY[0]},${gov_auth_WY[1]},${gov_auth_WY[2]})`},
		  'WV':{fill:`rgb(${gov_auth_WV[0]},${gov_auth_WV[1]},${gov_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#env_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${env_con_AK[0]},${env_con_AK[1]},${env_con_AK[2]})`},
		  'AL':{fill:`rgb(${env_con_AL[0]},${env_con_AL[1]},${env_con_AL[2]})`},
		  'AR':{fill:`rgb(${env_con_AR[0]},${env_con_AR[1]},${env_con_AR[2]})`},
		  'AZ':{fill:`rgb(${env_con_AZ[0]},${env_con_AZ[1]},${env_con_AZ[2]})`},
		  'CA':{fill:`rgb(${env_con_CA[0]},${env_con_CA[1]},${env_con_CA[2]})`},
		  'CO':{fill:`rgb(${env_con_CO[0]},${env_con_CO[1]},${env_con_CO[2]})`},
		  'CT':{fill:`rgb(${env_con_CT[0]},${env_con_CT[1]},${env_con_CT[2]})`},
		  'DC':{fill:`rgb(${env_con_DC[0]},${env_con_DC[1]},${env_con_DC[2]})`},
		  'DE':{fill:`rgb(${env_con_DE[0]},${env_con_DE[1]},${env_con_DE[2]})`},
		  'FL':{fill:`rgb(${env_con_FL[0]},${env_con_FL[1]},${env_con_FL[2]})`},
		  'GA':{fill:`rgb(${env_con_GA[0]},${env_con_GA[1]},${env_con_GA[2]})`},
		  'HI':{fill:`rgb(${env_con_HI[0]},${env_con_HI[1]},${env_con_HI[2]})`},
		  'IA':{fill:`rgb(${env_con_IA[0]},${env_con_IA[1]},${env_con_IA[2]})`},
		  'ID':{fill:`rgb(${env_con_ID[0]},${env_con_ID[1]},${env_con_ID[2]})`},
		  'IL':{fill:`rgb(${env_con_IL[0]},${env_con_IL[1]},${env_con_IL[2]})`},
		  'IN':{fill:`rgb(${env_con_IN[0]},${env_con_IN[1]},${env_con_IN[2]})`},
		  'KS':{fill:`rgb(${env_con_KS[0]},${env_con_KS[1]},${env_con_KS[2]})`},
		  'KY':{fill:`rgb(${env_con_KY[0]},${env_con_KY[1]},${env_con_KY[2]})`},
		  'LA':{fill:`rgb(${env_con_LA[0]},${env_con_LA[1]},${env_con_LA[2]})`},
		  'MA':{fill:`rgb(${env_con_MA[0]},${env_con_MA[1]},${env_con_MA[2]})`},
		  'MD':{fill:`rgb(${env_con_MD[0]},${env_con_MD[1]},${env_con_MD[2]})`},
		  'ME':{fill:`rgb(${env_con_ME[0]},${env_con_ME[1]},${env_con_ME[2]})`},
		  'MI':{fill:`rgb(${env_con_MI[0]},${env_con_MI[1]},${env_con_MI[2]})`},
		  'MN':{fill:`rgb(${env_con_MN[0]},${env_con_MN[1]},${env_con_MN[2]})`},
		  'MO':{fill:`rgb(${env_con_MO[0]},${env_con_MO[1]},${env_con_MO[2]})`},
		  'MS':{fill:`rgb(${env_con_MS[0]},${env_con_MS[1]},${env_con_MS[2]})`},
		  'NC':{fill:`rgb(${env_con_NC[0]},${env_con_NC[1]},${env_con_NC[2]})`},
		  'ND':{fill:`rgb(${env_con_ND[0]},${env_con_ND[1]},${env_con_ND[2]})`},
		  'NE':{fill:`rgb(${env_con_NE[0]},${env_con_NE[1]},${env_con_NE[2]})`},
		  'NH':{fill:`rgb(${env_con_NH[0]},${env_con_NH[1]},${env_con_NH[2]})`},
		  'NJ':{fill:`rgb(${env_con_NJ[0]},${env_con_NJ[1]},${env_con_NJ[2]})`},
		  'NM':{fill:`rgb(${env_con_NM[0]},${env_con_NM[1]},${env_con_NM[2]})`},
		  'NV':{fill:`rgb(${env_con_NV[0]},${env_con_NV[1]},${env_con_NV[2]})`},
		  'NY':{fill:`rgb(${env_con_NY[0]},${env_con_NY[1]},${env_con_NY[2]})`},
		  'OH':{fill:`rgb(${env_con_OH[0]},${env_con_OH[1]},${env_con_OH[2]})`},
		  'OK':{fill:`rgb(${env_con_OK[0]},${env_con_OK[1]},${env_con_OK[2]})`},
		  'OR':{fill:`rgb(${env_con_OR[0]},${env_con_OR[1]},${env_con_OR[2]})`},
		  'PA':{fill:`rgb(${env_con_PA[0]},${env_con_PA[1]},${env_con_PA[2]})`},
		  'RI':{fill:`rgb(${env_con_RI[0]},${env_con_RI[1]},${env_con_RI[2]})`},
		  'SC':{fill:`rgb(${env_con_SC[0]},${env_con_SC[1]},${env_con_SC[2]})`},
		  'SD':{fill:`rgb(${env_con_SD[0]},${env_con_SD[1]},${env_con_SD[2]})`},
		  'TN':{fill:`rgb(${env_con_TN[0]},${env_con_TN[1]},${env_con_TN[2]})`},
		  'TX':{fill:`rgb(${env_con_TX[0]},${env_con_TX[1]},${env_con_TX[2]})`},
		  'UT':{fill:`rgb(${env_con_UT[0]},${env_con_UT[1]},${env_con_UT[2]})`},
		  'VA':{fill:`rgb(${env_con_VA[0]},${env_con_VA[1]},${env_con_VA[2]})`},
		  'VT':{fill:`rgb(${env_con_VT[0]},${env_con_VT[1]},${env_con_VT[2]})`},
		  'WA':{fill:`rgb(${env_con_WA[0]},${env_con_WA[1]},${env_con_WA[2]})`},
		  'WI':{fill:`rgb(${env_con_WI[0]},${env_con_WI[1]},${env_con_WI[2]})`},
		  'WY':{fill:`rgb(${env_con_WY[0]},${env_con_WY[1]},${env_con_WY[2]})`},
		  'WV':{fill:`rgb(${env_con_WV[0]},${env_con_WV[1]},${env_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#env_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${env_auth_AK[0]},${env_auth_AK[1]},${env_auth_AK[2]})`},
		  'AL':{fill:`rgb(${env_auth_AL[0]},${env_auth_AL[1]},${env_auth_AL[2]})`},
		  'AR':{fill:`rgb(${env_auth_AR[0]},${env_auth_AR[1]},${env_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${env_auth_AZ[0]},${env_auth_AZ[1]},${env_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${env_auth_CA[0]},${env_auth_CA[1]},${env_auth_CA[2]})`},
		  'CO':{fill:`rgb(${env_auth_CO[0]},${env_auth_CO[1]},${env_auth_CO[2]})`},
		  'CT':{fill:`rgb(${env_auth_CT[0]},${env_auth_CT[1]},${env_auth_CT[2]})`},
		  'DC':{fill:`rgb(${env_auth_DC[0]},${env_auth_DC[1]},${env_auth_DC[2]})`},
		  'DE':{fill:`rgb(${env_auth_DE[0]},${env_auth_DE[1]},${env_auth_DE[2]})`},
		  'FL':{fill:`rgb(${env_auth_FL[0]},${env_auth_FL[1]},${env_auth_FL[2]})`},
		  'GA':{fill:`rgb(${env_auth_GA[0]},${env_auth_GA[1]},${env_auth_GA[2]})`},
		  'HI':{fill:`rgb(${env_auth_HI[0]},${env_auth_HI[1]},${env_auth_HI[2]})`},
		  'IA':{fill:`rgb(${env_auth_IA[0]},${env_auth_IA[1]},${env_auth_IA[2]})`},
		  'ID':{fill:`rgb(${env_auth_ID[0]},${env_auth_ID[1]},${env_auth_ID[2]})`},
		  'IL':{fill:`rgb(${env_auth_IL[0]},${env_auth_IL[1]},${env_auth_IL[2]})`},
		  'IN':{fill:`rgb(${env_auth_IN[0]},${env_auth_IN[1]},${env_auth_IN[2]})`},
		  'KS':{fill:`rgb(${env_auth_KS[0]},${env_auth_KS[1]},${env_auth_KS[2]})`},
		  'KY':{fill:`rgb(${env_auth_KY[0]},${env_auth_KY[1]},${env_auth_KY[2]})`},
		  'LA':{fill:`rgb(${env_auth_LA[0]},${env_auth_LA[1]},${env_auth_LA[2]})`},
		  'MA':{fill:`rgb(${env_auth_MA[0]},${env_auth_MA[1]},${env_auth_MA[2]})`},
		  'MD':{fill:`rgb(${env_auth_MD[0]},${env_auth_MD[1]},${env_auth_MD[2]})`},
		  'ME':{fill:`rgb(${env_auth_ME[0]},${env_auth_ME[1]},${env_auth_ME[2]})`},
		  'MI':{fill:`rgb(${env_auth_MI[0]},${env_auth_MI[1]},${env_auth_MI[2]})`},
		  'MN':{fill:`rgb(${env_auth_MN[0]},${env_auth_MN[1]},${env_auth_MN[2]})`},
		  'MO':{fill:`rgb(${env_auth_MO[0]},${env_auth_MO[1]},${env_auth_MO[2]})`},
		  'MS':{fill:`rgb(${env_auth_MS[0]},${env_auth_MS[1]},${env_auth_MS[2]})`},
		  'NC':{fill:`rgb(${env_auth_NC[0]},${env_auth_NC[1]},${env_auth_NC[2]})`},
		  'ND':{fill:`rgb(${env_auth_ND[0]},${env_auth_ND[1]},${env_auth_ND[2]})`},
		  'NE':{fill:`rgb(${env_auth_NE[0]},${env_auth_NE[1]},${env_auth_NE[2]})`},
		  'NH':{fill:`rgb(${env_auth_NH[0]},${env_auth_NH[1]},${env_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${env_auth_NJ[0]},${env_auth_NJ[1]},${env_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${env_auth_NM[0]},${env_auth_NM[1]},${env_auth_NM[2]})`},
		  'NV':{fill:`rgb(${env_auth_NV[0]},${env_auth_NV[1]},${env_auth_NV[2]})`},
		  'NY':{fill:`rgb(${env_auth_NY[0]},${env_auth_NY[1]},${env_auth_NY[2]})`},
		  'OH':{fill:`rgb(${env_auth_OH[0]},${env_auth_OH[1]},${env_auth_OH[2]})`},
		  'OK':{fill:`rgb(${env_auth_OK[0]},${env_auth_OK[1]},${env_auth_OK[2]})`},
		  'OR':{fill:`rgb(${env_auth_OR[0]},${env_auth_OR[1]},${env_auth_OR[2]})`},
		  'PA':{fill:`rgb(${env_auth_PA[0]},${env_auth_PA[1]},${env_auth_PA[2]})`},
		  'RI':{fill:`rgb(${env_auth_RI[0]},${env_auth_RI[1]},${env_auth_RI[2]})`},
		  'SC':{fill:`rgb(${env_auth_SC[0]},${env_auth_SC[1]},${env_auth_SC[2]})`},
		  'SD':{fill:`rgb(${env_auth_SD[0]},${env_auth_SD[1]},${env_auth_SD[2]})`},
		  'TN':{fill:`rgb(${env_auth_TN[0]},${env_auth_TN[1]},${env_auth_TN[2]})`},
		  'TX':{fill:`rgb(${env_auth_TX[0]},${env_auth_TX[1]},${env_auth_TX[2]})`},
		  'UT':{fill:`rgb(${env_auth_UT[0]},${env_auth_UT[1]},${env_auth_UT[2]})`},
		  'VA':{fill:`rgb(${env_auth_VA[0]},${env_auth_VA[1]},${env_auth_VA[2]})`},
		  'VT':{fill:`rgb(${env_auth_VT[0]},${env_auth_VT[1]},${env_auth_VT[2]})`},
		  'WA':{fill:`rgb(${env_auth_WA[0]},${env_auth_WA[1]},${env_auth_WA[2]})`},
		  'WI':{fill:`rgb(${env_auth_WI[0]},${env_auth_WI[1]},${env_auth_WI[2]})`},
		  'WY':{fill:`rgb(${env_auth_WY[0]},${env_auth_WY[1]},${env_auth_WY[2]})`},
		  'WV':{fill:`rgb(${env_auth_WV[0]},${env_auth_WV[1]},${env_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#fre_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${fre_con_AK[0]},${fre_con_AK[1]},${fre_con_AK[2]})`},
		  'AL':{fill:`rgb(${fre_con_AL[0]},${fre_con_AL[1]},${fre_con_AL[2]})`},
		  'AR':{fill:`rgb(${fre_con_AR[0]},${fre_con_AR[1]},${fre_con_AR[2]})`},
		  'AZ':{fill:`rgb(${fre_con_AZ[0]},${fre_con_AZ[1]},${fre_con_AZ[2]})`},
		  'CA':{fill:`rgb(${fre_con_CA[0]},${fre_con_CA[1]},${fre_con_CA[2]})`},
		  'CO':{fill:`rgb(${fre_con_CO[0]},${fre_con_CO[1]},${fre_con_CO[2]})`},
		  'CT':{fill:`rgb(${fre_con_CT[0]},${fre_con_CT[1]},${fre_con_CT[2]})`},
		  'DC':{fill:`rgb(${fre_con_DC[0]},${fre_con_DC[1]},${fre_con_DC[2]})`},
		  'DE':{fill:`rgb(${fre_con_DE[0]},${fre_con_DE[1]},${fre_con_DE[2]})`},
		  'FL':{fill:`rgb(${fre_con_FL[0]},${fre_con_FL[1]},${fre_con_FL[2]})`},
		  'GA':{fill:`rgb(${fre_con_GA[0]},${fre_con_GA[1]},${fre_con_GA[2]})`},
		  'HI':{fill:`rgb(${fre_con_HI[0]},${fre_con_HI[1]},${fre_con_HI[2]})`},
		  'IA':{fill:`rgb(${fre_con_IA[0]},${fre_con_IA[1]},${fre_con_IA[2]})`},
		  'ID':{fill:`rgb(${fre_con_ID[0]},${fre_con_ID[1]},${fre_con_ID[2]})`},
		  'IL':{fill:`rgb(${fre_con_IL[0]},${fre_con_IL[1]},${fre_con_IL[2]})`},
		  'IN':{fill:`rgb(${fre_con_IN[0]},${fre_con_IN[1]},${fre_con_IN[2]})`},
		  'KS':{fill:`rgb(${fre_con_KS[0]},${fre_con_KS[1]},${fre_con_KS[2]})`},
		  'KY':{fill:`rgb(${fre_con_KY[0]},${fre_con_KY[1]},${fre_con_KY[2]})`},
		  'LA':{fill:`rgb(${fre_con_LA[0]},${fre_con_LA[1]},${fre_con_LA[2]})`},
		  'MA':{fill:`rgb(${fre_con_MA[0]},${fre_con_MA[1]},${fre_con_MA[2]})`},
		  'MD':{fill:`rgb(${fre_con_MD[0]},${fre_con_MD[1]},${fre_con_MD[2]})`},
		  'ME':{fill:`rgb(${fre_con_ME[0]},${fre_con_ME[1]},${fre_con_ME[2]})`},
		  'MI':{fill:`rgb(${fre_con_MI[0]},${fre_con_MI[1]},${fre_con_MI[2]})`},
		  'MN':{fill:`rgb(${fre_con_MN[0]},${fre_con_MN[1]},${fre_con_MN[2]})`},
		  'MO':{fill:`rgb(${fre_con_MO[0]},${fre_con_MO[1]},${fre_con_MO[2]})`},
		  'MS':{fill:`rgb(${fre_con_MS[0]},${fre_con_MS[1]},${fre_con_MS[2]})`},
		  'NC':{fill:`rgb(${fre_con_NC[0]},${fre_con_NC[1]},${fre_con_NC[2]})`},
		  'ND':{fill:`rgb(${fre_con_ND[0]},${fre_con_ND[1]},${fre_con_ND[2]})`},
		  'NE':{fill:`rgb(${fre_con_NE[0]},${fre_con_NE[1]},${fre_con_NE[2]})`},
		  'NH':{fill:`rgb(${fre_con_NH[0]},${fre_con_NH[1]},${fre_con_NH[2]})`},
		  'NJ':{fill:`rgb(${fre_con_NJ[0]},${fre_con_NJ[1]},${fre_con_NJ[2]})`},
		  'NM':{fill:`rgb(${fre_con_NM[0]},${fre_con_NM[1]},${fre_con_NM[2]})`},
		  'NV':{fill:`rgb(${fre_con_NV[0]},${fre_con_NV[1]},${fre_con_NV[2]})`},
		  'NY':{fill:`rgb(${fre_con_NY[0]},${fre_con_NY[1]},${fre_con_NY[2]})`},
		  'OH':{fill:`rgb(${fre_con_OH[0]},${fre_con_OH[1]},${fre_con_OH[2]})`},
		  'OK':{fill:`rgb(${fre_con_OK[0]},${fre_con_OK[1]},${fre_con_OK[2]})`},
		  'OR':{fill:`rgb(${fre_con_OR[0]},${fre_con_OR[1]},${fre_con_OR[2]})`},
		  'PA':{fill:`rgb(${fre_con_PA[0]},${fre_con_PA[1]},${fre_con_PA[2]})`},
		  'RI':{fill:`rgb(${fre_con_RI[0]},${fre_con_RI[1]},${fre_con_RI[2]})`},
		  'SC':{fill:`rgb(${fre_con_SC[0]},${fre_con_SC[1]},${fre_con_SC[2]})`},
		  'SD':{fill:`rgb(${fre_con_SD[0]},${fre_con_SD[1]},${fre_con_SD[2]})`},
		  'TN':{fill:`rgb(${fre_con_TN[0]},${fre_con_TN[1]},${fre_con_TN[2]})`},
		  'TX':{fill:`rgb(${fre_con_TX[0]},${fre_con_TX[1]},${fre_con_TX[2]})`},
		  'UT':{fill:`rgb(${fre_con_UT[0]},${fre_con_UT[1]},${fre_con_UT[2]})`},
		  'VA':{fill:`rgb(${fre_con_VA[0]},${fre_con_VA[1]},${fre_con_VA[2]})`},
		  'VT':{fill:`rgb(${fre_con_VT[0]},${fre_con_VT[1]},${fre_con_VT[2]})`},
		  'WA':{fill:`rgb(${fre_con_WA[0]},${fre_con_WA[1]},${fre_con_WA[2]})`},
		  'WI':{fill:`rgb(${fre_con_WI[0]},${fre_con_WI[1]},${fre_con_WI[2]})`},
		  'WY':{fill:`rgb(${fre_con_WY[0]},${fre_con_WY[1]},${fre_con_WY[2]})`},
		  'WV':{fill:`rgb(${fre_con_WV[0]},${fre_con_WV[1]},${fre_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#fre_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${fre_auth_AK[0]},${fre_auth_AK[1]},${fre_auth_AK[2]})`},
		  'AL':{fill:`rgb(${fre_auth_AL[0]},${fre_auth_AL[1]},${fre_auth_AL[2]})`},
		  'AR':{fill:`rgb(${fre_auth_AR[0]},${fre_auth_AR[1]},${fre_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${fre_auth_AZ[0]},${fre_auth_AZ[1]},${fre_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${fre_auth_CA[0]},${fre_auth_CA[1]},${fre_auth_CA[2]})`},
		  'CO':{fill:`rgb(${fre_auth_CO[0]},${fre_auth_CO[1]},${fre_auth_CO[2]})`},
		  'CT':{fill:`rgb(${fre_auth_CT[0]},${fre_auth_CT[1]},${fre_auth_CT[2]})`},
		  'DC':{fill:`rgb(${fre_auth_DC[0]},${fre_auth_DC[1]},${fre_auth_DC[2]})`},
		  'DE':{fill:`rgb(${fre_auth_DE[0]},${fre_auth_DE[1]},${fre_auth_DE[2]})`},
		  'FL':{fill:`rgb(${fre_auth_FL[0]},${fre_auth_FL[1]},${fre_auth_FL[2]})`},
		  'GA':{fill:`rgb(${fre_auth_GA[0]},${fre_auth_GA[1]},${fre_auth_GA[2]})`},
		  'HI':{fill:`rgb(${fre_auth_HI[0]},${fre_auth_HI[1]},${fre_auth_HI[2]})`},
		  'IA':{fill:`rgb(${fre_auth_IA[0]},${fre_auth_IA[1]},${fre_auth_IA[2]})`},
		  'ID':{fill:`rgb(${fre_auth_ID[0]},${fre_auth_ID[1]},${fre_auth_ID[2]})`},
		  'IL':{fill:`rgb(${fre_auth_IL[0]},${fre_auth_IL[1]},${fre_auth_IL[2]})`},
		  'IN':{fill:`rgb(${fre_auth_IN[0]},${fre_auth_IN[1]},${fre_auth_IN[2]})`},
		  'KS':{fill:`rgb(${fre_auth_KS[0]},${fre_auth_KS[1]},${fre_auth_KS[2]})`},
		  'KY':{fill:`rgb(${fre_auth_KY[0]},${fre_auth_KY[1]},${fre_auth_KY[2]})`},
		  'LA':{fill:`rgb(${fre_auth_LA[0]},${fre_auth_LA[1]},${fre_auth_LA[2]})`},
		  'MA':{fill:`rgb(${fre_auth_MA[0]},${fre_auth_MA[1]},${fre_auth_MA[2]})`},
		  'MD':{fill:`rgb(${fre_auth_MD[0]},${fre_auth_MD[1]},${fre_auth_MD[2]})`},
		  'ME':{fill:`rgb(${fre_auth_ME[0]},${fre_auth_ME[1]},${fre_auth_ME[2]})`},
		  'MI':{fill:`rgb(${fre_auth_MI[0]},${fre_auth_MI[1]},${fre_auth_MI[2]})`},
		  'MN':{fill:`rgb(${fre_auth_MN[0]},${fre_auth_MN[1]},${fre_auth_MN[2]})`},
		  'MO':{fill:`rgb(${fre_auth_MO[0]},${fre_auth_MO[1]},${fre_auth_MO[2]})`},
		  'MS':{fill:`rgb(${fre_auth_MS[0]},${fre_auth_MS[1]},${fre_auth_MS[2]})`},
		  'NC':{fill:`rgb(${fre_auth_NC[0]},${fre_auth_NC[1]},${fre_auth_NC[2]})`},
		  'ND':{fill:`rgb(${fre_auth_ND[0]},${fre_auth_ND[1]},${fre_auth_ND[2]})`},
		  'NE':{fill:`rgb(${fre_auth_NE[0]},${fre_auth_NE[1]},${fre_auth_NE[2]})`},
		  'NH':{fill:`rgb(${fre_auth_NH[0]},${fre_auth_NH[1]},${fre_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${fre_auth_NJ[0]},${fre_auth_NJ[1]},${fre_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${fre_auth_NM[0]},${fre_auth_NM[1]},${fre_auth_NM[2]})`},
		  'NV':{fill:`rgb(${fre_auth_NV[0]},${fre_auth_NV[1]},${fre_auth_NV[2]})`},
		  'NY':{fill:`rgb(${fre_auth_NY[0]},${fre_auth_NY[1]},${fre_auth_NY[2]})`},
		  'OH':{fill:`rgb(${fre_auth_OH[0]},${fre_auth_OH[1]},${fre_auth_OH[2]})`},
		  'OK':{fill:`rgb(${fre_auth_OK[0]},${fre_auth_OK[1]},${fre_auth_OK[2]})`},
		  'OR':{fill:`rgb(${fre_auth_OR[0]},${fre_auth_OR[1]},${fre_auth_OR[2]})`},
		  'PA':{fill:`rgb(${fre_auth_PA[0]},${fre_auth_PA[1]},${fre_auth_PA[2]})`},
		  'RI':{fill:`rgb(${fre_auth_RI[0]},${fre_auth_RI[1]},${fre_auth_RI[2]})`},
		  'SC':{fill:`rgb(${fre_auth_SC[0]},${fre_auth_SC[1]},${fre_auth_SC[2]})`},
		  'SD':{fill:`rgb(${fre_auth_SD[0]},${fre_auth_SD[1]},${fre_auth_SD[2]})`},
		  'TN':{fill:`rgb(${fre_auth_TN[0]},${fre_auth_TN[1]},${fre_auth_TN[2]})`},
		  'TX':{fill:`rgb(${fre_auth_TX[0]},${fre_auth_TX[1]},${fre_auth_TX[2]})`},
		  'UT':{fill:`rgb(${fre_auth_UT[0]},${fre_auth_UT[1]},${fre_auth_UT[2]})`},
		  'VA':{fill:`rgb(${fre_auth_VA[0]},${fre_auth_VA[1]},${fre_auth_VA[2]})`},
		  'VT':{fill:`rgb(${fre_auth_VT[0]},${fre_auth_VT[1]},${fre_auth_VT[2]})`},
		  'WA':{fill:`rgb(${fre_auth_WA[0]},${fre_auth_WA[1]},${fre_auth_WA[2]})`},
		  'WI':{fill:`rgb(${fre_auth_WI[0]},${fre_auth_WI[1]},${fre_auth_WI[2]})`},
		  'WY':{fill:`rgb(${fre_auth_WY[0]},${fre_auth_WY[1]},${fre_auth_WY[2]})`},
		  'WV':{fill:`rgb(${fre_auth_WV[0]},${fre_auth_WV[1]},${fre_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#fam_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${fam_con_AK[0]},${fam_con_AK[1]},${fam_con_AK[2]})`},
		  'AL':{fill:`rgb(${fam_con_AL[0]},${fam_con_AL[1]},${fam_con_AL[2]})`},
		  'AR':{fill:`rgb(${fam_con_AR[0]},${fam_con_AR[1]},${fam_con_AR[2]})`},
		  'AZ':{fill:`rgb(${fam_con_AZ[0]},${fam_con_AZ[1]},${fam_con_AZ[2]})`},
		  'CA':{fill:`rgb(${fam_con_CA[0]},${fam_con_CA[1]},${fam_con_CA[2]})`},
		  'CO':{fill:`rgb(${fam_con_CO[0]},${fam_con_CO[1]},${fam_con_CO[2]})`},
		  'CT':{fill:`rgb(${fam_con_CT[0]},${fam_con_CT[1]},${fam_con_CT[2]})`},
		  'DC':{fill:`rgb(${fam_con_DC[0]},${fam_con_DC[1]},${fam_con_DC[2]})`},
		  'DE':{fill:`rgb(${fam_con_DE[0]},${fam_con_DE[1]},${fam_con_DE[2]})`},
		  'FL':{fill:`rgb(${fam_con_FL[0]},${fam_con_FL[1]},${fam_con_FL[2]})`},
		  'GA':{fill:`rgb(${fam_con_GA[0]},${fam_con_GA[1]},${fam_con_GA[2]})`},
		  'HI':{fill:`rgb(${fam_con_HI[0]},${fam_con_HI[1]},${fam_con_HI[2]})`},
		  'IA':{fill:`rgb(${fam_con_IA[0]},${fam_con_IA[1]},${fam_con_IA[2]})`},
		  'ID':{fill:`rgb(${fam_con_ID[0]},${fam_con_ID[1]},${fam_con_ID[2]})`},
		  'IL':{fill:`rgb(${fam_con_IL[0]},${fam_con_IL[1]},${fam_con_IL[2]})`},
		  'IN':{fill:`rgb(${fam_con_IN[0]},${fam_con_IN[1]},${fam_con_IN[2]})`},
		  'KS':{fill:`rgb(${fam_con_KS[0]},${fam_con_KS[1]},${fam_con_KS[2]})`},
		  'KY':{fill:`rgb(${fam_con_KY[0]},${fam_con_KY[1]},${fam_con_KY[2]})`},
		  'LA':{fill:`rgb(${fam_con_LA[0]},${fam_con_LA[1]},${fam_con_LA[2]})`},
		  'MA':{fill:`rgb(${fam_con_MA[0]},${fam_con_MA[1]},${fam_con_MA[2]})`},
		  'MD':{fill:`rgb(${fam_con_MD[0]},${fam_con_MD[1]},${fam_con_MD[2]})`},
		  'ME':{fill:`rgb(${fam_con_ME[0]},${fam_con_ME[1]},${fam_con_ME[2]})`},
		  'MI':{fill:`rgb(${fam_con_MI[0]},${fam_con_MI[1]},${fam_con_MI[2]})`},
		  'MN':{fill:`rgb(${fam_con_MN[0]},${fam_con_MN[1]},${fam_con_MN[2]})`},
		  'MO':{fill:`rgb(${fam_con_MO[0]},${fam_con_MO[1]},${fam_con_MO[2]})`},
		  'MS':{fill:`rgb(${fam_con_MS[0]},${fam_con_MS[1]},${fam_con_MS[2]})`},
		  'NC':{fill:`rgb(${fam_con_NC[0]},${fam_con_NC[1]},${fam_con_NC[2]})`},
		  'ND':{fill:`rgb(${fam_con_ND[0]},${fam_con_ND[1]},${fam_con_ND[2]})`},
		  'NE':{fill:`rgb(${fam_con_NE[0]},${fam_con_NE[1]},${fam_con_NE[2]})`},
		  'NH':{fill:`rgb(${fam_con_NH[0]},${fam_con_NH[1]},${fam_con_NH[2]})`},
		  'NJ':{fill:`rgb(${fam_con_NJ[0]},${fam_con_NJ[1]},${fam_con_NJ[2]})`},
		  'NM':{fill:`rgb(${fam_con_NM[0]},${fam_con_NM[1]},${fam_con_NM[2]})`},
		  'NV':{fill:`rgb(${fam_con_NV[0]},${fam_con_NV[1]},${fam_con_NV[2]})`},
		  'NY':{fill:`rgb(${fam_con_NY[0]},${fam_con_NY[1]},${fam_con_NY[2]})`},
		  'OH':{fill:`rgb(${fam_con_OH[0]},${fam_con_OH[1]},${fam_con_OH[2]})`},
		  'OK':{fill:`rgb(${fam_con_OK[0]},${fam_con_OK[1]},${fam_con_OK[2]})`},
		  'OR':{fill:`rgb(${fam_con_OR[0]},${fam_con_OR[1]},${fam_con_OR[2]})`},
		  'PA':{fill:`rgb(${fam_con_PA[0]},${fam_con_PA[1]},${fam_con_PA[2]})`},
		  'RI':{fill:`rgb(${fam_con_RI[0]},${fam_con_RI[1]},${fam_con_RI[2]})`},
		  'SC':{fill:`rgb(${fam_con_SC[0]},${fam_con_SC[1]},${fam_con_SC[2]})`},
		  'SD':{fill:`rgb(${fam_con_SD[0]},${fam_con_SD[1]},${fam_con_SD[2]})`},
		  'TN':{fill:`rgb(${fam_con_TN[0]},${fam_con_TN[1]},${fam_con_TN[2]})`},
		  'TX':{fill:`rgb(${fam_con_TX[0]},${fam_con_TX[1]},${fam_con_TX[2]})`},
		  'UT':{fill:`rgb(${fam_con_UT[0]},${fam_con_UT[1]},${fam_con_UT[2]})`},
		  'VA':{fill:`rgb(${fam_con_VA[0]},${fam_con_VA[1]},${fam_con_VA[2]})`},
		  'VT':{fill:`rgb(${fam_con_VT[0]},${fam_con_VT[1]},${fam_con_VT[2]})`},
		  'WA':{fill:`rgb(${fam_con_WA[0]},${fam_con_WA[1]},${fam_con_WA[2]})`},
		  'WI':{fill:`rgb(${fam_con_WI[0]},${fam_con_WI[1]},${fam_con_WI[2]})`},
		  'WY':{fill:`rgb(${fam_con_WY[0]},${fam_con_WY[1]},${fam_con_WY[2]})`},
		  'WV':{fill:`rgb(${fam_con_WV[0]},${fam_con_WV[1]},${fam_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#fam_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${fam_auth_AK[0]},${fam_auth_AK[1]},${fam_auth_AK[2]})`},
		  'AL':{fill:`rgb(${fam_auth_AL[0]},${fam_auth_AL[1]},${fam_auth_AL[2]})`},
		  'AR':{fill:`rgb(${fam_auth_AR[0]},${fam_auth_AR[1]},${fam_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${fam_auth_AZ[0]},${fam_auth_AZ[1]},${fam_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${fam_auth_CA[0]},${fam_auth_CA[1]},${fam_auth_CA[2]})`},
		  'CO':{fill:`rgb(${fam_auth_CO[0]},${fam_auth_CO[1]},${fam_auth_CO[2]})`},
		  'CT':{fill:`rgb(${fam_auth_CT[0]},${fam_auth_CT[1]},${fam_auth_CT[2]})`},
		  'DC':{fill:`rgb(${fam_auth_DC[0]},${fam_auth_DC[1]},${fam_auth_DC[2]})`},
		  'DE':{fill:`rgb(${fam_auth_DE[0]},${fam_auth_DE[1]},${fam_auth_DE[2]})`},
		  'FL':{fill:`rgb(${fam_auth_FL[0]},${fam_auth_FL[1]},${fam_auth_FL[2]})`},
		  'GA':{fill:`rgb(${fam_auth_GA[0]},${fam_auth_GA[1]},${fam_auth_GA[2]})`},
		  'HI':{fill:`rgb(${fam_auth_HI[0]},${fam_auth_HI[1]},${fam_auth_HI[2]})`},
		  'IA':{fill:`rgb(${fam_auth_IA[0]},${fam_auth_IA[1]},${fam_auth_IA[2]})`},
		  'ID':{fill:`rgb(${fam_auth_ID[0]},${fam_auth_ID[1]},${fam_auth_ID[2]})`},
		  'IL':{fill:`rgb(${fam_auth_IL[0]},${fam_auth_IL[1]},${fam_auth_IL[2]})`},
		  'IN':{fill:`rgb(${fam_auth_IN[0]},${fam_auth_IN[1]},${fam_auth_IN[2]})`},
		  'KS':{fill:`rgb(${fam_auth_KS[0]},${fam_auth_KS[1]},${fam_auth_KS[2]})`},
		  'KY':{fill:`rgb(${fam_auth_KY[0]},${fam_auth_KY[1]},${fam_auth_KY[2]})`},
		  'LA':{fill:`rgb(${fam_auth_LA[0]},${fam_auth_LA[1]},${fam_auth_LA[2]})`},
		  'MA':{fill:`rgb(${fam_auth_MA[0]},${fam_auth_MA[1]},${fam_auth_MA[2]})`},
		  'MD':{fill:`rgb(${fam_auth_MD[0]},${fam_auth_MD[1]},${fam_auth_MD[2]})`},
		  'ME':{fill:`rgb(${fam_auth_ME[0]},${fam_auth_ME[1]},${fam_auth_ME[2]})`},
		  'MI':{fill:`rgb(${fam_auth_MI[0]},${fam_auth_MI[1]},${fam_auth_MI[2]})`},
		  'MN':{fill:`rgb(${fam_auth_MN[0]},${fam_auth_MN[1]},${fam_auth_MN[2]})`},
		  'MO':{fill:`rgb(${fam_auth_MO[0]},${fam_auth_MO[1]},${fam_auth_MO[2]})`},
		  'MS':{fill:`rgb(${fam_auth_MS[0]},${fam_auth_MS[1]},${fam_auth_MS[2]})`},
		  'NC':{fill:`rgb(${fam_auth_NC[0]},${fam_auth_NC[1]},${fam_auth_NC[2]})`},
		  'ND':{fill:`rgb(${fam_auth_ND[0]},${fam_auth_ND[1]},${fam_auth_ND[2]})`},
		  'NE':{fill:`rgb(${fam_auth_NE[0]},${fam_auth_NE[1]},${fam_auth_NE[2]})`},
		  'NH':{fill:`rgb(${fam_auth_NH[0]},${fam_auth_NH[1]},${fam_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${fam_auth_NJ[0]},${fam_auth_NJ[1]},${fam_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${fam_auth_NM[0]},${fam_auth_NM[1]},${fam_auth_NM[2]})`},
		  'NV':{fill:`rgb(${fam_auth_NV[0]},${fam_auth_NV[1]},${fam_auth_NV[2]})`},
		  'NY':{fill:`rgb(${fam_auth_NY[0]},${fam_auth_NY[1]},${fam_auth_NY[2]})`},
		  'OH':{fill:`rgb(${fam_auth_OH[0]},${fam_auth_OH[1]},${fam_auth_OH[2]})`},
		  'OK':{fill:`rgb(${fam_auth_OK[0]},${fam_auth_OK[1]},${fam_auth_OK[2]})`},
		  'OR':{fill:`rgb(${fam_auth_OR[0]},${fam_auth_OR[1]},${fam_auth_OR[2]})`},
		  'PA':{fill:`rgb(${fam_auth_PA[0]},${fam_auth_PA[1]},${fam_auth_PA[2]})`},
		  'RI':{fill:`rgb(${fam_auth_RI[0]},${fam_auth_RI[1]},${fam_auth_RI[2]})`},
		  'SC':{fill:`rgb(${fam_auth_SC[0]},${fam_auth_SC[1]},${fam_auth_SC[2]})`},
		  'SD':{fill:`rgb(${fam_auth_SD[0]},${fam_auth_SD[1]},${fam_auth_SD[2]})`},
		  'TN':{fill:`rgb(${fam_auth_TN[0]},${fam_auth_TN[1]},${fam_auth_TN[2]})`},
		  'TX':{fill:`rgb(${fam_auth_TX[0]},${fam_auth_TX[1]},${fam_auth_TX[2]})`},
		  'UT':{fill:`rgb(${fam_auth_UT[0]},${fam_auth_UT[1]},${fam_auth_UT[2]})`},
		  'VA':{fill:`rgb(${fam_auth_VA[0]},${fam_auth_VA[1]},${fam_auth_VA[2]})`},
		  'VT':{fill:`rgb(${fam_auth_VT[0]},${fam_auth_VT[1]},${fam_auth_VT[2]})`},
		  'WA':{fill:`rgb(${fam_auth_WA[0]},${fam_auth_WA[1]},${fam_auth_WA[2]})`},
		  'WI':{fill:`rgb(${fam_auth_WI[0]},${fam_auth_WI[1]},${fam_auth_WI[2]})`},
		  'WY':{fill:`rgb(${fam_auth_WY[0]},${fam_auth_WY[1]},${fam_auth_WY[2]})`},
		  'WV':{fill:`rgb(${fam_auth_WV[0]},${fam_auth_WV[1]},${fam_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#cri_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${cri_con_AK[0]},${cri_con_AK[1]},${cri_con_AK[2]})`},
		  'AL':{fill:`rgb(${cri_con_AL[0]},${cri_con_AL[1]},${cri_con_AL[2]})`},
		  'AR':{fill:`rgb(${cri_con_AR[0]},${cri_con_AR[1]},${cri_con_AR[2]})`},
		  'AZ':{fill:`rgb(${cri_con_AZ[0]},${cri_con_AZ[1]},${cri_con_AZ[2]})`},
		  'CA':{fill:`rgb(${cri_con_CA[0]},${cri_con_CA[1]},${cri_con_CA[2]})`},
		  'CO':{fill:`rgb(${cri_con_CO[0]},${cri_con_CO[1]},${cri_con_CO[2]})`},
		  'CT':{fill:`rgb(${cri_con_CT[0]},${cri_con_CT[1]},${cri_con_CT[2]})`},
		  'DC':{fill:`rgb(${cri_con_DC[0]},${cri_con_DC[1]},${cri_con_DC[2]})`},
		  'DE':{fill:`rgb(${cri_con_DE[0]},${cri_con_DE[1]},${cri_con_DE[2]})`},
		  'FL':{fill:`rgb(${cri_con_FL[0]},${cri_con_FL[1]},${cri_con_FL[2]})`},
		  'GA':{fill:`rgb(${cri_con_GA[0]},${cri_con_GA[1]},${cri_con_GA[2]})`},
		  'HI':{fill:`rgb(${cri_con_HI[0]},${cri_con_HI[1]},${cri_con_HI[2]})`},
		  'IA':{fill:`rgb(${cri_con_IA[0]},${cri_con_IA[1]},${cri_con_IA[2]})`},
		  'ID':{fill:`rgb(${cri_con_ID[0]},${cri_con_ID[1]},${cri_con_ID[2]})`},
		  'IL':{fill:`rgb(${cri_con_IL[0]},${cri_con_IL[1]},${cri_con_IL[2]})`},
		  'IN':{fill:`rgb(${cri_con_IN[0]},${cri_con_IN[1]},${cri_con_IN[2]})`},
		  'KS':{fill:`rgb(${cri_con_KS[0]},${cri_con_KS[1]},${cri_con_KS[2]})`},
		  'KY':{fill:`rgb(${cri_con_KY[0]},${cri_con_KY[1]},${cri_con_KY[2]})`},
		  'LA':{fill:`rgb(${cri_con_LA[0]},${cri_con_LA[1]},${cri_con_LA[2]})`},
		  'MA':{fill:`rgb(${cri_con_MA[0]},${cri_con_MA[1]},${cri_con_MA[2]})`},
		  'MD':{fill:`rgb(${cri_con_MD[0]},${cri_con_MD[1]},${cri_con_MD[2]})`},
		  'ME':{fill:`rgb(${cri_con_ME[0]},${cri_con_ME[1]},${cri_con_ME[2]})`},
		  'MI':{fill:`rgb(${cri_con_MI[0]},${cri_con_MI[1]},${cri_con_MI[2]})`},
		  'MN':{fill:`rgb(${cri_con_MN[0]},${cri_con_MN[1]},${cri_con_MN[2]})`},
		  'MO':{fill:`rgb(${cri_con_MO[0]},${cri_con_MO[1]},${cri_con_MO[2]})`},
		  'MS':{fill:`rgb(${cri_con_MS[0]},${cri_con_MS[1]},${cri_con_MS[2]})`},
		  'NC':{fill:`rgb(${cri_con_NC[0]},${cri_con_NC[1]},${cri_con_NC[2]})`},
		  'ND':{fill:`rgb(${cri_con_ND[0]},${cri_con_ND[1]},${cri_con_ND[2]})`},
		  'NE':{fill:`rgb(${cri_con_NE[0]},${cri_con_NE[1]},${cri_con_NE[2]})`},
		  'NH':{fill:`rgb(${cri_con_NH[0]},${cri_con_NH[1]},${cri_con_NH[2]})`},
		  'NJ':{fill:`rgb(${cri_con_NJ[0]},${cri_con_NJ[1]},${cri_con_NJ[2]})`},
		  'NM':{fill:`rgb(${cri_con_NM[0]},${cri_con_NM[1]},${cri_con_NM[2]})`},
		  'NV':{fill:`rgb(${cri_con_NV[0]},${cri_con_NV[1]},${cri_con_NV[2]})`},
		  'NY':{fill:`rgb(${cri_con_NY[0]},${cri_con_NY[1]},${cri_con_NY[2]})`},
		  'OH':{fill:`rgb(${cri_con_OH[0]},${cri_con_OH[1]},${cri_con_OH[2]})`},
		  'OK':{fill:`rgb(${cri_con_OK[0]},${cri_con_OK[1]},${cri_con_OK[2]})`},
		  'OR':{fill:`rgb(${cri_con_OR[0]},${cri_con_OR[1]},${cri_con_OR[2]})`},
		  'PA':{fill:`rgb(${cri_con_PA[0]},${cri_con_PA[1]},${cri_con_PA[2]})`},
		  'RI':{fill:`rgb(${cri_con_RI[0]},${cri_con_RI[1]},${cri_con_RI[2]})`},
		  'SC':{fill:`rgb(${cri_con_SC[0]},${cri_con_SC[1]},${cri_con_SC[2]})`},
		  'SD':{fill:`rgb(${cri_con_SD[0]},${cri_con_SD[1]},${cri_con_SD[2]})`},
		  'TN':{fill:`rgb(${cri_con_TN[0]},${cri_con_TN[1]},${cri_con_TN[2]})`},
		  'TX':{fill:`rgb(${cri_con_TX[0]},${cri_con_TX[1]},${cri_con_TX[2]})`},
		  'UT':{fill:`rgb(${cri_con_UT[0]},${cri_con_UT[1]},${cri_con_UT[2]})`},
		  'VA':{fill:`rgb(${cri_con_VA[0]},${cri_con_VA[1]},${cri_con_VA[2]})`},
		  'VT':{fill:`rgb(${cri_con_VT[0]},${cri_con_VT[1]},${cri_con_VT[2]})`},
		  'WA':{fill:`rgb(${cri_con_WA[0]},${cri_con_WA[1]},${cri_con_WA[2]})`},
		  'WI':{fill:`rgb(${cri_con_WI[0]},${cri_con_WI[1]},${cri_con_WI[2]})`},
		  'WY':{fill:`rgb(${cri_con_WY[0]},${cri_con_WY[1]},${cri_con_WY[2]})`},
		  'WV':{fill:`rgb(${cri_con_WV[0]},${cri_con_WV[1]},${cri_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#cri_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${cri_auth_AK[0]},${cri_auth_AK[1]},${cri_auth_AK[2]})`},
		  'AL':{fill:`rgb(${cri_auth_AL[0]},${cri_auth_AL[1]},${cri_auth_AL[2]})`},
		  'AR':{fill:`rgb(${cri_auth_AR[0]},${cri_auth_AR[1]},${cri_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${cri_auth_AZ[0]},${cri_auth_AZ[1]},${cri_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${cri_auth_CA[0]},${cri_auth_CA[1]},${cri_auth_CA[2]})`},
		  'CO':{fill:`rgb(${cri_auth_CO[0]},${cri_auth_CO[1]},${cri_auth_CO[2]})`},
		  'CT':{fill:`rgb(${cri_auth_CT[0]},${cri_auth_CT[1]},${cri_auth_CT[2]})`},
		  'DC':{fill:`rgb(${cri_auth_DC[0]},${cri_auth_DC[1]},${cri_auth_DC[2]})`},
		  'DE':{fill:`rgb(${cri_auth_DE[0]},${cri_auth_DE[1]},${cri_auth_DE[2]})`},
		  'FL':{fill:`rgb(${cri_auth_FL[0]},${cri_auth_FL[1]},${cri_auth_FL[2]})`},
		  'GA':{fill:`rgb(${cri_auth_GA[0]},${cri_auth_GA[1]},${cri_auth_GA[2]})`},
		  'HI':{fill:`rgb(${cri_auth_HI[0]},${cri_auth_HI[1]},${cri_auth_HI[2]})`},
		  'IA':{fill:`rgb(${cri_auth_IA[0]},${cri_auth_IA[1]},${cri_auth_IA[2]})`},
		  'ID':{fill:`rgb(${cri_auth_ID[0]},${cri_auth_ID[1]},${cri_auth_ID[2]})`},
		  'IL':{fill:`rgb(${cri_auth_IL[0]},${cri_auth_IL[1]},${cri_auth_IL[2]})`},
		  'IN':{fill:`rgb(${cri_auth_IN[0]},${cri_auth_IN[1]},${cri_auth_IN[2]})`},
		  'KS':{fill:`rgb(${cri_auth_KS[0]},${cri_auth_KS[1]},${cri_auth_KS[2]})`},
		  'KY':{fill:`rgb(${cri_auth_KY[0]},${cri_auth_KY[1]},${cri_auth_KY[2]})`},
		  'LA':{fill:`rgb(${cri_auth_LA[0]},${cri_auth_LA[1]},${cri_auth_LA[2]})`},
		  'MA':{fill:`rgb(${cri_auth_MA[0]},${cri_auth_MA[1]},${cri_auth_MA[2]})`},
		  'MD':{fill:`rgb(${cri_auth_MD[0]},${cri_auth_MD[1]},${cri_auth_MD[2]})`},
		  'ME':{fill:`rgb(${cri_auth_ME[0]},${cri_auth_ME[1]},${cri_auth_ME[2]})`},
		  'MI':{fill:`rgb(${cri_auth_MI[0]},${cri_auth_MI[1]},${cri_auth_MI[2]})`},
		  'MN':{fill:`rgb(${cri_auth_MN[0]},${cri_auth_MN[1]},${cri_auth_MN[2]})`},
		  'MO':{fill:`rgb(${cri_auth_MO[0]},${cri_auth_MO[1]},${cri_auth_MO[2]})`},
		  'MS':{fill:`rgb(${cri_auth_MS[0]},${cri_auth_MS[1]},${cri_auth_MS[2]})`},
		  'NC':{fill:`rgb(${cri_auth_NC[0]},${cri_auth_NC[1]},${cri_auth_NC[2]})`},
		  'ND':{fill:`rgb(${cri_auth_ND[0]},${cri_auth_ND[1]},${cri_auth_ND[2]})`},
		  'NE':{fill:`rgb(${cri_auth_NE[0]},${cri_auth_NE[1]},${cri_auth_NE[2]})`},
		  'NH':{fill:`rgb(${cri_auth_NH[0]},${cri_auth_NH[1]},${cri_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${cri_auth_NJ[0]},${cri_auth_NJ[1]},${cri_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${cri_auth_NM[0]},${cri_auth_NM[1]},${cri_auth_NM[2]})`},
		  'NV':{fill:`rgb(${cri_auth_NV[0]},${cri_auth_NV[1]},${cri_auth_NV[2]})`},
		  'NY':{fill:`rgb(${cri_auth_NY[0]},${cri_auth_NY[1]},${cri_auth_NY[2]})`},
		  'OH':{fill:`rgb(${cri_auth_OH[0]},${cri_auth_OH[1]},${cri_auth_OH[2]})`},
		  'OK':{fill:`rgb(${cri_auth_OK[0]},${cri_auth_OK[1]},${cri_auth_OK[2]})`},
		  'OR':{fill:`rgb(${cri_auth_OR[0]},${cri_auth_OR[1]},${cri_auth_OR[2]})`},
		  'PA':{fill:`rgb(${cri_auth_PA[0]},${cri_auth_PA[1]},${cri_auth_PA[2]})`},
		  'RI':{fill:`rgb(${cri_auth_RI[0]},${cri_auth_RI[1]},${cri_auth_RI[2]})`},
		  'SC':{fill:`rgb(${cri_auth_SC[0]},${cri_auth_SC[1]},${cri_auth_SC[2]})`},
		  'SD':{fill:`rgb(${cri_auth_SD[0]},${cri_auth_SD[1]},${cri_auth_SD[2]})`},
		  'TN':{fill:`rgb(${cri_auth_TN[0]},${cri_auth_TN[1]},${cri_auth_TN[2]})`},
		  'TX':{fill:`rgb(${cri_auth_TX[0]},${cri_auth_TX[1]},${cri_auth_TX[2]})`},
		  'UT':{fill:`rgb(${cri_auth_UT[0]},${cri_auth_UT[1]},${cri_auth_UT[2]})`},
		  'VA':{fill:`rgb(${cri_auth_VA[0]},${cri_auth_VA[1]},${cri_auth_VA[2]})`},
		  'VT':{fill:`rgb(${cri_auth_VT[0]},${cri_auth_VT[1]},${cri_auth_VT[2]})`},
		  'WA':{fill:`rgb(${cri_auth_WA[0]},${cri_auth_WA[1]},${cri_auth_WA[2]})`},
		  'WI':{fill:`rgb(${cri_auth_WI[0]},${cri_auth_WI[1]},${cri_auth_WI[2]})`},
		  'WY':{fill:`rgb(${cri_auth_WY[0]},${cri_auth_WY[1]},${cri_auth_WY[2]})`},
		  'WV':{fill:`rgb(${cri_auth_WV[0]},${cri_auth_WV[1]},${cri_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#hom_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${hom_con_AK[0]},${hom_con_AK[1]},${hom_con_AK[2]})`},
		  'AL':{fill:`rgb(${hom_con_AL[0]},${hom_con_AL[1]},${hom_con_AL[2]})`},
		  'AR':{fill:`rgb(${hom_con_AR[0]},${hom_con_AR[1]},${hom_con_AR[2]})`},
		  'AZ':{fill:`rgb(${hom_con_AZ[0]},${hom_con_AZ[1]},${hom_con_AZ[2]})`},
		  'CA':{fill:`rgb(${hom_con_CA[0]},${hom_con_CA[1]},${hom_con_CA[2]})`},
		  'CO':{fill:`rgb(${hom_con_CO[0]},${hom_con_CO[1]},${hom_con_CO[2]})`},
		  'CT':{fill:`rgb(${hom_con_CT[0]},${hom_con_CT[1]},${hom_con_CT[2]})`},
		  'DC':{fill:`rgb(${hom_con_DC[0]},${hom_con_DC[1]},${hom_con_DC[2]})`},
		  'DE':{fill:`rgb(${hom_con_DE[0]},${hom_con_DE[1]},${hom_con_DE[2]})`},
		  'FL':{fill:`rgb(${hom_con_FL[0]},${hom_con_FL[1]},${hom_con_FL[2]})`},
		  'GA':{fill:`rgb(${hom_con_GA[0]},${hom_con_GA[1]},${hom_con_GA[2]})`},
		  'HI':{fill:`rgb(${hom_con_HI[0]},${hom_con_HI[1]},${hom_con_HI[2]})`},
		  'IA':{fill:`rgb(${hom_con_IA[0]},${hom_con_IA[1]},${hom_con_IA[2]})`},
		  'ID':{fill:`rgb(${hom_con_ID[0]},${hom_con_ID[1]},${hom_con_ID[2]})`},
		  'IL':{fill:`rgb(${hom_con_IL[0]},${hom_con_IL[1]},${hom_con_IL[2]})`},
		  'IN':{fill:`rgb(${hom_con_IN[0]},${hom_con_IN[1]},${hom_con_IN[2]})`},
		  'KS':{fill:`rgb(${hom_con_KS[0]},${hom_con_KS[1]},${hom_con_KS[2]})`},
		  'KY':{fill:`rgb(${hom_con_KY[0]},${hom_con_KY[1]},${hom_con_KY[2]})`},
		  'LA':{fill:`rgb(${hom_con_LA[0]},${hom_con_LA[1]},${hom_con_LA[2]})`},
		  'MA':{fill:`rgb(${hom_con_MA[0]},${hom_con_MA[1]},${hom_con_MA[2]})`},
		  'MD':{fill:`rgb(${hom_con_MD[0]},${hom_con_MD[1]},${hom_con_MD[2]})`},
		  'ME':{fill:`rgb(${hom_con_ME[0]},${hom_con_ME[1]},${hom_con_ME[2]})`},
		  'MI':{fill:`rgb(${hom_con_MI[0]},${hom_con_MI[1]},${hom_con_MI[2]})`},
		  'MN':{fill:`rgb(${hom_con_MN[0]},${hom_con_MN[1]},${hom_con_MN[2]})`},
		  'MO':{fill:`rgb(${hom_con_MO[0]},${hom_con_MO[1]},${hom_con_MO[2]})`},
		  'MS':{fill:`rgb(${hom_con_MS[0]},${hom_con_MS[1]},${hom_con_MS[2]})`},
		  'NC':{fill:`rgb(${hom_con_NC[0]},${hom_con_NC[1]},${hom_con_NC[2]})`},
		  'ND':{fill:`rgb(${hom_con_ND[0]},${hom_con_ND[1]},${hom_con_ND[2]})`},
		  'NE':{fill:`rgb(${hom_con_NE[0]},${hom_con_NE[1]},${hom_con_NE[2]})`},
		  'NH':{fill:`rgb(${hom_con_NH[0]},${hom_con_NH[1]},${hom_con_NH[2]})`},
		  'NJ':{fill:`rgb(${hom_con_NJ[0]},${hom_con_NJ[1]},${hom_con_NJ[2]})`},
		  'NM':{fill:`rgb(${hom_con_NM[0]},${hom_con_NM[1]},${hom_con_NM[2]})`},
		  'NV':{fill:`rgb(${hom_con_NV[0]},${hom_con_NV[1]},${hom_con_NV[2]})`},
		  'NY':{fill:`rgb(${hom_con_NY[0]},${hom_con_NY[1]},${hom_con_NY[2]})`},
		  'OH':{fill:`rgb(${hom_con_OH[0]},${hom_con_OH[1]},${hom_con_OH[2]})`},
		  'OK':{fill:`rgb(${hom_con_OK[0]},${hom_con_OK[1]},${hom_con_OK[2]})`},
		  'OR':{fill:`rgb(${hom_con_OR[0]},${hom_con_OR[1]},${hom_con_OR[2]})`},
		  'PA':{fill:`rgb(${hom_con_PA[0]},${hom_con_PA[1]},${hom_con_PA[2]})`},
		  'RI':{fill:`rgb(${hom_con_RI[0]},${hom_con_RI[1]},${hom_con_RI[2]})`},
		  'SC':{fill:`rgb(${hom_con_SC[0]},${hom_con_SC[1]},${hom_con_SC[2]})`},
		  'SD':{fill:`rgb(${hom_con_SD[0]},${hom_con_SD[1]},${hom_con_SD[2]})`},
		  'TN':{fill:`rgb(${hom_con_TN[0]},${hom_con_TN[1]},${hom_con_TN[2]})`},
		  'TX':{fill:`rgb(${hom_con_TX[0]},${hom_con_TX[1]},${hom_con_TX[2]})`},
		  'UT':{fill:`rgb(${hom_con_UT[0]},${hom_con_UT[1]},${hom_con_UT[2]})`},
		  'VA':{fill:`rgb(${hom_con_VA[0]},${hom_con_VA[1]},${hom_con_VA[2]})`},
		  'VT':{fill:`rgb(${hom_con_VT[0]},${hom_con_VT[1]},${hom_con_VT[2]})`},
		  'WA':{fill:`rgb(${hom_con_WA[0]},${hom_con_WA[1]},${hom_con_WA[2]})`},
		  'WI':{fill:`rgb(${hom_con_WI[0]},${hom_con_WI[1]},${hom_con_WI[2]})`},
		  'WY':{fill:`rgb(${hom_con_WY[0]},${hom_con_WY[1]},${hom_con_WY[2]})`},
		  'WV':{fill:`rgb(${hom_con_WV[0]},${hom_con_WV[1]},${hom_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#hom_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${hom_auth_AK[0]},${hom_auth_AK[1]},${hom_auth_AK[2]})`},
		  'AL':{fill:`rgb(${hom_auth_AL[0]},${hom_auth_AL[1]},${hom_auth_AL[2]})`},
		  'AR':{fill:`rgb(${hom_auth_AR[0]},${hom_auth_AR[1]},${hom_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${hom_auth_AZ[0]},${hom_auth_AZ[1]},${hom_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${hom_auth_CA[0]},${hom_auth_CA[1]},${hom_auth_CA[2]})`},
		  'CO':{fill:`rgb(${hom_auth_CO[0]},${hom_auth_CO[1]},${hom_auth_CO[2]})`},
		  'CT':{fill:`rgb(${hom_auth_CT[0]},${hom_auth_CT[1]},${hom_auth_CT[2]})`},
		  'DC':{fill:`rgb(${hom_auth_DC[0]},${hom_auth_DC[1]},${hom_auth_DC[2]})`},
		  'DE':{fill:`rgb(${hom_auth_DE[0]},${hom_auth_DE[1]},${hom_auth_DE[2]})`},
		  'FL':{fill:`rgb(${hom_auth_FL[0]},${hom_auth_FL[1]},${hom_auth_FL[2]})`},
		  'GA':{fill:`rgb(${hom_auth_GA[0]},${hom_auth_GA[1]},${hom_auth_GA[2]})`},
		  'HI':{fill:`rgb(${hom_auth_HI[0]},${hom_auth_HI[1]},${hom_auth_HI[2]})`},
		  'IA':{fill:`rgb(${hom_auth_IA[0]},${hom_auth_IA[1]},${hom_auth_IA[2]})`},
		  'ID':{fill:`rgb(${hom_auth_ID[0]},${hom_auth_ID[1]},${hom_auth_ID[2]})`},
		  'IL':{fill:`rgb(${hom_auth_IL[0]},${hom_auth_IL[1]},${hom_auth_IL[2]})`},
		  'IN':{fill:`rgb(${hom_auth_IN[0]},${hom_auth_IN[1]},${hom_auth_IN[2]})`},
		  'KS':{fill:`rgb(${hom_auth_KS[0]},${hom_auth_KS[1]},${hom_auth_KS[2]})`},
		  'KY':{fill:`rgb(${hom_auth_KY[0]},${hom_auth_KY[1]},${hom_auth_KY[2]})`},
		  'LA':{fill:`rgb(${hom_auth_LA[0]},${hom_auth_LA[1]},${hom_auth_LA[2]})`},
		  'MA':{fill:`rgb(${hom_auth_MA[0]},${hom_auth_MA[1]},${hom_auth_MA[2]})`},
		  'MD':{fill:`rgb(${hom_auth_MD[0]},${hom_auth_MD[1]},${hom_auth_MD[2]})`},
		  'ME':{fill:`rgb(${hom_auth_ME[0]},${hom_auth_ME[1]},${hom_auth_ME[2]})`},
		  'MI':{fill:`rgb(${hom_auth_MI[0]},${hom_auth_MI[1]},${hom_auth_MI[2]})`},
		  'MN':{fill:`rgb(${hom_auth_MN[0]},${hom_auth_MN[1]},${hom_auth_MN[2]})`},
		  'MO':{fill:`rgb(${hom_auth_MO[0]},${hom_auth_MO[1]},${hom_auth_MO[2]})`},
		  'MS':{fill:`rgb(${hom_auth_MS[0]},${hom_auth_MS[1]},${hom_auth_MS[2]})`},
		  'NC':{fill:`rgb(${hom_auth_NC[0]},${hom_auth_NC[1]},${hom_auth_NC[2]})`},
		  'ND':{fill:`rgb(${hom_auth_ND[0]},${hom_auth_ND[1]},${hom_auth_ND[2]})`},
		  'NE':{fill:`rgb(${hom_auth_NE[0]},${hom_auth_NE[1]},${hom_auth_NE[2]})`},
		  'NH':{fill:`rgb(${hom_auth_NH[0]},${hom_auth_NH[1]},${hom_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${hom_auth_NJ[0]},${hom_auth_NJ[1]},${hom_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${hom_auth_NM[0]},${hom_auth_NM[1]},${hom_auth_NM[2]})`},
		  'NV':{fill:`rgb(${hom_auth_NV[0]},${hom_auth_NV[1]},${hom_auth_NV[2]})`},
		  'NY':{fill:`rgb(${hom_auth_NY[0]},${hom_auth_NY[1]},${hom_auth_NY[2]})`},
		  'OH':{fill:`rgb(${hom_auth_OH[0]},${hom_auth_OH[1]},${hom_auth_OH[2]})`},
		  'OK':{fill:`rgb(${hom_auth_OK[0]},${hom_auth_OK[1]},${hom_auth_OK[2]})`},
		  'OR':{fill:`rgb(${hom_auth_OR[0]},${hom_auth_OR[1]},${hom_auth_OR[2]})`},
		  'PA':{fill:`rgb(${hom_auth_PA[0]},${hom_auth_PA[1]},${hom_auth_PA[2]})`},
		  'RI':{fill:`rgb(${hom_auth_RI[0]},${hom_auth_RI[1]},${hom_auth_RI[2]})`},
		  'SC':{fill:`rgb(${hom_auth_SC[0]},${hom_auth_SC[1]},${hom_auth_SC[2]})`},
		  'SD':{fill:`rgb(${hom_auth_SD[0]},${hom_auth_SD[1]},${hom_auth_SD[2]})`},
		  'TN':{fill:`rgb(${hom_auth_TN[0]},${hom_auth_TN[1]},${hom_auth_TN[2]})`},
		  'TX':{fill:`rgb(${hom_auth_TX[0]},${hom_auth_TX[1]},${hom_auth_TX[2]})`},
		  'UT':{fill:`rgb(${hom_auth_UT[0]},${hom_auth_UT[1]},${hom_auth_UT[2]})`},
		  'VA':{fill:`rgb(${hom_auth_VA[0]},${hom_auth_VA[1]},${hom_auth_VA[2]})`},
		  'VT':{fill:`rgb(${hom_auth_VT[0]},${hom_auth_VT[1]},${hom_auth_VT[2]})`},
		  'WA':{fill:`rgb(${hom_auth_WA[0]},${hom_auth_WA[1]},${hom_auth_WA[2]})`},
		  'WI':{fill:`rgb(${hom_auth_WI[0]},${hom_auth_WI[1]},${hom_auth_WI[2]})`},
		  'WY':{fill:`rgb(${hom_auth_WY[0]},${hom_auth_WY[1]},${hom_auth_WY[2]})`},
		  'WV':{fill:`rgb(${hom_auth_WV[0]},${hom_auth_WV[1]},${hom_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#pri_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${pri_con_AK[0]},${pri_con_AK[1]},${pri_con_AK[2]})`},
		  'AL':{fill:`rgb(${pri_con_AL[0]},${pri_con_AL[1]},${pri_con_AL[2]})`},
		  'AR':{fill:`rgb(${pri_con_AR[0]},${pri_con_AR[1]},${pri_con_AR[2]})`},
		  'AZ':{fill:`rgb(${pri_con_AZ[0]},${pri_con_AZ[1]},${pri_con_AZ[2]})`},
		  'CA':{fill:`rgb(${pri_con_CA[0]},${pri_con_CA[1]},${pri_con_CA[2]})`},
		  'CO':{fill:`rgb(${pri_con_CO[0]},${pri_con_CO[1]},${pri_con_CO[2]})`},
		  'CT':{fill:`rgb(${pri_con_CT[0]},${pri_con_CT[1]},${pri_con_CT[2]})`},
		  'DC':{fill:`rgb(${pri_con_DC[0]},${pri_con_DC[1]},${pri_con_DC[2]})`},
		  'DE':{fill:`rgb(${pri_con_DE[0]},${pri_con_DE[1]},${pri_con_DE[2]})`},
		  'FL':{fill:`rgb(${pri_con_FL[0]},${pri_con_FL[1]},${pri_con_FL[2]})`},
		  'GA':{fill:`rgb(${pri_con_GA[0]},${pri_con_GA[1]},${pri_con_GA[2]})`},
		  'HI':{fill:`rgb(${pri_con_HI[0]},${pri_con_HI[1]},${pri_con_HI[2]})`},
		  'IA':{fill:`rgb(${pri_con_IA[0]},${pri_con_IA[1]},${pri_con_IA[2]})`},
		  'ID':{fill:`rgb(${pri_con_ID[0]},${pri_con_ID[1]},${pri_con_ID[2]})`},
		  'IL':{fill:`rgb(${pri_con_IL[0]},${pri_con_IL[1]},${pri_con_IL[2]})`},
		  'IN':{fill:`rgb(${pri_con_IN[0]},${pri_con_IN[1]},${pri_con_IN[2]})`},
		  'KS':{fill:`rgb(${pri_con_KS[0]},${pri_con_KS[1]},${pri_con_KS[2]})`},
		  'KY':{fill:`rgb(${pri_con_KY[0]},${pri_con_KY[1]},${pri_con_KY[2]})`},
		  'LA':{fill:`rgb(${pri_con_LA[0]},${pri_con_LA[1]},${pri_con_LA[2]})`},
		  'MA':{fill:`rgb(${pri_con_MA[0]},${pri_con_MA[1]},${pri_con_MA[2]})`},
		  'MD':{fill:`rgb(${pri_con_MD[0]},${pri_con_MD[1]},${pri_con_MD[2]})`},
		  'ME':{fill:`rgb(${pri_con_ME[0]},${pri_con_ME[1]},${pri_con_ME[2]})`},
		  'MI':{fill:`rgb(${pri_con_MI[0]},${pri_con_MI[1]},${pri_con_MI[2]})`},
		  'MN':{fill:`rgb(${pri_con_MN[0]},${pri_con_MN[1]},${pri_con_MN[2]})`},
		  'MO':{fill:`rgb(${pri_con_MO[0]},${pri_con_MO[1]},${pri_con_MO[2]})`},
		  'MS':{fill:`rgb(${pri_con_MS[0]},${pri_con_MS[1]},${pri_con_MS[2]})`},
		  'NC':{fill:`rgb(${pri_con_NC[0]},${pri_con_NC[1]},${pri_con_NC[2]})`},
		  'ND':{fill:`rgb(${pri_con_ND[0]},${pri_con_ND[1]},${pri_con_ND[2]})`},
		  'NE':{fill:`rgb(${pri_con_NE[0]},${pri_con_NE[1]},${pri_con_NE[2]})`},
		  'NH':{fill:`rgb(${pri_con_NH[0]},${pri_con_NH[1]},${pri_con_NH[2]})`},
		  'NJ':{fill:`rgb(${pri_con_NJ[0]},${pri_con_NJ[1]},${pri_con_NJ[2]})`},
		  'NM':{fill:`rgb(${pri_con_NM[0]},${pri_con_NM[1]},${pri_con_NM[2]})`},
		  'NV':{fill:`rgb(${pri_con_NV[0]},${pri_con_NV[1]},${pri_con_NV[2]})`},
		  'NY':{fill:`rgb(${pri_con_NY[0]},${pri_con_NY[1]},${pri_con_NY[2]})`},
		  'OH':{fill:`rgb(${pri_con_OH[0]},${pri_con_OH[1]},${pri_con_OH[2]})`},
		  'OK':{fill:`rgb(${pri_con_OK[0]},${pri_con_OK[1]},${pri_con_OK[2]})`},
		  'OR':{fill:`rgb(${pri_con_OR[0]},${pri_con_OR[1]},${pri_con_OR[2]})`},
		  'PA':{fill:`rgb(${pri_con_PA[0]},${pri_con_PA[1]},${pri_con_PA[2]})`},
		  'RI':{fill:`rgb(${pri_con_RI[0]},${pri_con_RI[1]},${pri_con_RI[2]})`},
		  'SC':{fill:`rgb(${pri_con_SC[0]},${pri_con_SC[1]},${pri_con_SC[2]})`},
		  'SD':{fill:`rgb(${pri_con_SD[0]},${pri_con_SD[1]},${pri_con_SD[2]})`},
		  'TN':{fill:`rgb(${pri_con_TN[0]},${pri_con_TN[1]},${pri_con_TN[2]})`},
		  'TX':{fill:`rgb(${pri_con_TX[0]},${pri_con_TX[1]},${pri_con_TX[2]})`},
		  'UT':{fill:`rgb(${pri_con_UT[0]},${pri_con_UT[1]},${pri_con_UT[2]})`},
		  'VA':{fill:`rgb(${pri_con_VA[0]},${pri_con_VA[1]},${pri_con_VA[2]})`},
		  'VT':{fill:`rgb(${pri_con_VT[0]},${pri_con_VT[1]},${pri_con_VT[2]})`},
		  'WA':{fill:`rgb(${pri_con_WA[0]},${pri_con_WA[1]},${pri_con_WA[2]})`},
		  'WI':{fill:`rgb(${pri_con_WI[0]},${pri_con_WI[1]},${pri_con_WI[2]})`},
		  'WY':{fill:`rgb(${pri_con_WY[0]},${pri_con_WY[1]},${pri_con_WY[2]})`},
		  'WV':{fill:`rgb(${pri_con_WV[0]},${pri_con_WV[1]},${pri_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#pri_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${pri_auth_AK[0]},${pri_auth_AK[1]},${pri_auth_AK[2]})`},
		  'AL':{fill:`rgb(${pri_auth_AL[0]},${pri_auth_AL[1]},${pri_auth_AL[2]})`},
		  'AR':{fill:`rgb(${pri_auth_AR[0]},${pri_auth_AR[1]},${pri_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${pri_auth_AZ[0]},${pri_auth_AZ[1]},${pri_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${pri_auth_CA[0]},${pri_auth_CA[1]},${pri_auth_CA[2]})`},
		  'CO':{fill:`rgb(${pri_auth_CO[0]},${pri_auth_CO[1]},${pri_auth_CO[2]})`},
		  'CT':{fill:`rgb(${pri_auth_CT[0]},${pri_auth_CT[1]},${pri_auth_CT[2]})`},
		  'DC':{fill:`rgb(${pri_auth_DC[0]},${pri_auth_DC[1]},${pri_auth_DC[2]})`},
		  'DE':{fill:`rgb(${pri_auth_DE[0]},${pri_auth_DE[1]},${pri_auth_DE[2]})`},
		  'FL':{fill:`rgb(${pri_auth_FL[0]},${pri_auth_FL[1]},${pri_auth_FL[2]})`},
		  'GA':{fill:`rgb(${pri_auth_GA[0]},${pri_auth_GA[1]},${pri_auth_GA[2]})`},
		  'HI':{fill:`rgb(${pri_auth_HI[0]},${pri_auth_HI[1]},${pri_auth_HI[2]})`},
		  'IA':{fill:`rgb(${pri_auth_IA[0]},${pri_auth_IA[1]},${pri_auth_IA[2]})`},
		  'ID':{fill:`rgb(${pri_auth_ID[0]},${pri_auth_ID[1]},${pri_auth_ID[2]})`},
		  'IL':{fill:`rgb(${pri_auth_IL[0]},${pri_auth_IL[1]},${pri_auth_IL[2]})`},
		  'IN':{fill:`rgb(${pri_auth_IN[0]},${pri_auth_IN[1]},${pri_auth_IN[2]})`},
		  'KS':{fill:`rgb(${pri_auth_KS[0]},${pri_auth_KS[1]},${pri_auth_KS[2]})`},
		  'KY':{fill:`rgb(${pri_auth_KY[0]},${pri_auth_KY[1]},${pri_auth_KY[2]})`},
		  'LA':{fill:`rgb(${pri_auth_LA[0]},${pri_auth_LA[1]},${pri_auth_LA[2]})`},
		  'MA':{fill:`rgb(${pri_auth_MA[0]},${pri_auth_MA[1]},${pri_auth_MA[2]})`},
		  'MD':{fill:`rgb(${pri_auth_MD[0]},${pri_auth_MD[1]},${pri_auth_MD[2]})`},
		  'ME':{fill:`rgb(${pri_auth_ME[0]},${pri_auth_ME[1]},${pri_auth_ME[2]})`},
		  'MI':{fill:`rgb(${pri_auth_MI[0]},${pri_auth_MI[1]},${pri_auth_MI[2]})`},
		  'MN':{fill:`rgb(${pri_auth_MN[0]},${pri_auth_MN[1]},${pri_auth_MN[2]})`},
		  'MO':{fill:`rgb(${pri_auth_MO[0]},${pri_auth_MO[1]},${pri_auth_MO[2]})`},
		  'MS':{fill:`rgb(${pri_auth_MS[0]},${pri_auth_MS[1]},${pri_auth_MS[2]})`},
		  'NC':{fill:`rgb(${pri_auth_NC[0]},${pri_auth_NC[1]},${pri_auth_NC[2]})`},
		  'ND':{fill:`rgb(${pri_auth_ND[0]},${pri_auth_ND[1]},${pri_auth_ND[2]})`},
		  'NE':{fill:`rgb(${pri_auth_NE[0]},${pri_auth_NE[1]},${pri_auth_NE[2]})`},
		  'NH':{fill:`rgb(${pri_auth_NH[0]},${pri_auth_NH[1]},${pri_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${pri_auth_NJ[0]},${pri_auth_NJ[1]},${pri_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${pri_auth_NM[0]},${pri_auth_NM[1]},${pri_auth_NM[2]})`},
		  'NV':{fill:`rgb(${pri_auth_NV[0]},${pri_auth_NV[1]},${pri_auth_NV[2]})`},
		  'NY':{fill:`rgb(${pri_auth_NY[0]},${pri_auth_NY[1]},${pri_auth_NY[2]})`},
		  'OH':{fill:`rgb(${pri_auth_OH[0]},${pri_auth_OH[1]},${pri_auth_OH[2]})`},
		  'OK':{fill:`rgb(${pri_auth_OK[0]},${pri_auth_OK[1]},${pri_auth_OK[2]})`},
		  'OR':{fill:`rgb(${pri_auth_OR[0]},${pri_auth_OR[1]},${pri_auth_OR[2]})`},
		  'PA':{fill:`rgb(${pri_auth_PA[0]},${pri_auth_PA[1]},${pri_auth_PA[2]})`},
		  'RI':{fill:`rgb(${pri_auth_RI[0]},${pri_auth_RI[1]},${pri_auth_RI[2]})`},
		  'SC':{fill:`rgb(${pri_auth_SC[0]},${pri_auth_SC[1]},${pri_auth_SC[2]})`},
		  'SD':{fill:`rgb(${pri_auth_SD[0]},${pri_auth_SD[1]},${pri_auth_SD[2]})`},
		  'TN':{fill:`rgb(${pri_auth_TN[0]},${pri_auth_TN[1]},${pri_auth_TN[2]})`},
		  'TX':{fill:`rgb(${pri_auth_TX[0]},${pri_auth_TX[1]},${pri_auth_TX[2]})`},
		  'UT':{fill:`rgb(${pri_auth_UT[0]},${pri_auth_UT[1]},${pri_auth_UT[2]})`},
		  'VA':{fill:`rgb(${pri_auth_VA[0]},${pri_auth_VA[1]},${pri_auth_VA[2]})`},
		  'VT':{fill:`rgb(${pri_auth_VT[0]},${pri_auth_VT[1]},${pri_auth_VT[2]})`},
		  'WA':{fill:`rgb(${pri_auth_WA[0]},${pri_auth_WA[1]},${pri_auth_WA[2]})`},
		  'WI':{fill:`rgb(${pri_auth_WI[0]},${pri_auth_WI[1]},${pri_auth_WI[2]})`},
		  'WY':{fill:`rgb(${pri_auth_WY[0]},${pri_auth_WY[1]},${pri_auth_WY[2]})`},
		  'WV':{fill:`rgb(${pri_auth_WV[0]},${pri_auth_WV[1]},${pri_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#gun_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${gun_con_AK[0]},${gun_con_AK[1]},${gun_con_AK[2]})`},
		  'AL':{fill:`rgb(${gun_con_AL[0]},${gun_con_AL[1]},${gun_con_AL[2]})`},
		  'AR':{fill:`rgb(${gun_con_AR[0]},${gun_con_AR[1]},${gun_con_AR[2]})`},
		  'AZ':{fill:`rgb(${gun_con_AZ[0]},${gun_con_AZ[1]},${gun_con_AZ[2]})`},
		  'CA':{fill:`rgb(${gun_con_CA[0]},${gun_con_CA[1]},${gun_con_CA[2]})`},
		  'CO':{fill:`rgb(${gun_con_CO[0]},${gun_con_CO[1]},${gun_con_CO[2]})`},
		  'CT':{fill:`rgb(${gun_con_CT[0]},${gun_con_CT[1]},${gun_con_CT[2]})`},
		  'DC':{fill:`rgb(${gun_con_DC[0]},${gun_con_DC[1]},${gun_con_DC[2]})`},
		  'DE':{fill:`rgb(${gun_con_DE[0]},${gun_con_DE[1]},${gun_con_DE[2]})`},
		  'FL':{fill:`rgb(${gun_con_FL[0]},${gun_con_FL[1]},${gun_con_FL[2]})`},
		  'GA':{fill:`rgb(${gun_con_GA[0]},${gun_con_GA[1]},${gun_con_GA[2]})`},
		  'HI':{fill:`rgb(${gun_con_HI[0]},${gun_con_HI[1]},${gun_con_HI[2]})`},
		  'IA':{fill:`rgb(${gun_con_IA[0]},${gun_con_IA[1]},${gun_con_IA[2]})`},
		  'ID':{fill:`rgb(${gun_con_ID[0]},${gun_con_ID[1]},${gun_con_ID[2]})`},
		  'IL':{fill:`rgb(${gun_con_IL[0]},${gun_con_IL[1]},${gun_con_IL[2]})`},
		  'IN':{fill:`rgb(${gun_con_IN[0]},${gun_con_IN[1]},${gun_con_IN[2]})`},
		  'KS':{fill:`rgb(${gun_con_KS[0]},${gun_con_KS[1]},${gun_con_KS[2]})`},
		  'KY':{fill:`rgb(${gun_con_KY[0]},${gun_con_KY[1]},${gun_con_KY[2]})`},
		  'LA':{fill:`rgb(${gun_con_LA[0]},${gun_con_LA[1]},${gun_con_LA[2]})`},
		  'MA':{fill:`rgb(${gun_con_MA[0]},${gun_con_MA[1]},${gun_con_MA[2]})`},
		  'MD':{fill:`rgb(${gun_con_MD[0]},${gun_con_MD[1]},${gun_con_MD[2]})`},
		  'ME':{fill:`rgb(${gun_con_ME[0]},${gun_con_ME[1]},${gun_con_ME[2]})`},
		  'MI':{fill:`rgb(${gun_con_MI[0]},${gun_con_MI[1]},${gun_con_MI[2]})`},
		  'MN':{fill:`rgb(${gun_con_MN[0]},${gun_con_MN[1]},${gun_con_MN[2]})`},
		  'MO':{fill:`rgb(${gun_con_MO[0]},${gun_con_MO[1]},${gun_con_MO[2]})`},
		  'MS':{fill:`rgb(${gun_con_MS[0]},${gun_con_MS[1]},${gun_con_MS[2]})`},
		  'NC':{fill:`rgb(${gun_con_NC[0]},${gun_con_NC[1]},${gun_con_NC[2]})`},
		  'ND':{fill:`rgb(${gun_con_ND[0]},${gun_con_ND[1]},${gun_con_ND[2]})`},
		  'NE':{fill:`rgb(${gun_con_NE[0]},${gun_con_NE[1]},${gun_con_NE[2]})`},
		  'NH':{fill:`rgb(${gun_con_NH[0]},${gun_con_NH[1]},${gun_con_NH[2]})`},
		  'NJ':{fill:`rgb(${gun_con_NJ[0]},${gun_con_NJ[1]},${gun_con_NJ[2]})`},
		  'NM':{fill:`rgb(${gun_con_NM[0]},${gun_con_NM[1]},${gun_con_NM[2]})`},
		  'NV':{fill:`rgb(${gun_con_NV[0]},${gun_con_NV[1]},${gun_con_NV[2]})`},
		  'NY':{fill:`rgb(${gun_con_NY[0]},${gun_con_NY[1]},${gun_con_NY[2]})`},
		  'OH':{fill:`rgb(${gun_con_OH[0]},${gun_con_OH[1]},${gun_con_OH[2]})`},
		  'OK':{fill:`rgb(${gun_con_OK[0]},${gun_con_OK[1]},${gun_con_OK[2]})`},
		  'OR':{fill:`rgb(${gun_con_OR[0]},${gun_con_OR[1]},${gun_con_OR[2]})`},
		  'PA':{fill:`rgb(${gun_con_PA[0]},${gun_con_PA[1]},${gun_con_PA[2]})`},
		  'RI':{fill:`rgb(${gun_con_RI[0]},${gun_con_RI[1]},${gun_con_RI[2]})`},
		  'SC':{fill:`rgb(${gun_con_SC[0]},${gun_con_SC[1]},${gun_con_SC[2]})`},
		  'SD':{fill:`rgb(${gun_con_SD[0]},${gun_con_SD[1]},${gun_con_SD[2]})`},
		  'TN':{fill:`rgb(${gun_con_TN[0]},${gun_con_TN[1]},${gun_con_TN[2]})`},
		  'TX':{fill:`rgb(${gun_con_TX[0]},${gun_con_TX[1]},${gun_con_TX[2]})`},
		  'UT':{fill:`rgb(${gun_con_UT[0]},${gun_con_UT[1]},${gun_con_UT[2]})`},
		  'VA':{fill:`rgb(${gun_con_VA[0]},${gun_con_VA[1]},${gun_con_VA[2]})`},
		  'VT':{fill:`rgb(${gun_con_VT[0]},${gun_con_VT[1]},${gun_con_VT[2]})`},
		  'WA':{fill:`rgb(${gun_con_WA[0]},${gun_con_WA[1]},${gun_con_WA[2]})`},
		  'WI':{fill:`rgb(${gun_con_WI[0]},${gun_con_WI[1]},${gun_con_WI[2]})`},
		  'WY':{fill:`rgb(${gun_con_WY[0]},${gun_con_WY[1]},${gun_con_WY[2]})`},
		  'WV':{fill:`rgb(${gun_con_WV[0]},${gun_con_WV[1]},${gun_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#gun_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${gun_auth_AK[0]},${gun_auth_AK[1]},${gun_auth_AK[2]})`},
		  'AL':{fill:`rgb(${gun_auth_AL[0]},${gun_auth_AL[1]},${gun_auth_AL[2]})`},
		  'AR':{fill:`rgb(${gun_auth_AR[0]},${gun_auth_AR[1]},${gun_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${gun_auth_AZ[0]},${gun_auth_AZ[1]},${gun_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${gun_auth_CA[0]},${gun_auth_CA[1]},${gun_auth_CA[2]})`},
		  'CO':{fill:`rgb(${gun_auth_CO[0]},${gun_auth_CO[1]},${gun_auth_CO[2]})`},
		  'CT':{fill:`rgb(${gun_auth_CT[0]},${gun_auth_CT[1]},${gun_auth_CT[2]})`},
		  'DC':{fill:`rgb(${gun_auth_DC[0]},${gun_auth_DC[1]},${gun_auth_DC[2]})`},
		  'DE':{fill:`rgb(${gun_auth_DE[0]},${gun_auth_DE[1]},${gun_auth_DE[2]})`},
		  'FL':{fill:`rgb(${gun_auth_FL[0]},${gun_auth_FL[1]},${gun_auth_FL[2]})`},
		  'GA':{fill:`rgb(${gun_auth_GA[0]},${gun_auth_GA[1]},${gun_auth_GA[2]})`},
		  'HI':{fill:`rgb(${gun_auth_HI[0]},${gun_auth_HI[1]},${gun_auth_HI[2]})`},
		  'IA':{fill:`rgb(${gun_auth_IA[0]},${gun_auth_IA[1]},${gun_auth_IA[2]})`},
		  'ID':{fill:`rgb(${gun_auth_ID[0]},${gun_auth_ID[1]},${gun_auth_ID[2]})`},
		  'IL':{fill:`rgb(${gun_auth_IL[0]},${gun_auth_IL[1]},${gun_auth_IL[2]})`},
		  'IN':{fill:`rgb(${gun_auth_IN[0]},${gun_auth_IN[1]},${gun_auth_IN[2]})`},
		  'KS':{fill:`rgb(${gun_auth_KS[0]},${gun_auth_KS[1]},${gun_auth_KS[2]})`},
		  'KY':{fill:`rgb(${gun_auth_KY[0]},${gun_auth_KY[1]},${gun_auth_KY[2]})`},
		  'LA':{fill:`rgb(${gun_auth_LA[0]},${gun_auth_LA[1]},${gun_auth_LA[2]})`},
		  'MA':{fill:`rgb(${gun_auth_MA[0]},${gun_auth_MA[1]},${gun_auth_MA[2]})`},
		  'MD':{fill:`rgb(${gun_auth_MD[0]},${gun_auth_MD[1]},${gun_auth_MD[2]})`},
		  'ME':{fill:`rgb(${gun_auth_ME[0]},${gun_auth_ME[1]},${gun_auth_ME[2]})`},
		  'MI':{fill:`rgb(${gun_auth_MI[0]},${gun_auth_MI[1]},${gun_auth_MI[2]})`},
		  'MN':{fill:`rgb(${gun_auth_MN[0]},${gun_auth_MN[1]},${gun_auth_MN[2]})`},
		  'MO':{fill:`rgb(${gun_auth_MO[0]},${gun_auth_MO[1]},${gun_auth_MO[2]})`},
		  'MS':{fill:`rgb(${gun_auth_MS[0]},${gun_auth_MS[1]},${gun_auth_MS[2]})`},
		  'NC':{fill:`rgb(${gun_auth_NC[0]},${gun_auth_NC[1]},${gun_auth_NC[2]})`},
		  'ND':{fill:`rgb(${gun_auth_ND[0]},${gun_auth_ND[1]},${gun_auth_ND[2]})`},
		  'NE':{fill:`rgb(${gun_auth_NE[0]},${gun_auth_NE[1]},${gun_auth_NE[2]})`},
		  'NH':{fill:`rgb(${gun_auth_NH[0]},${gun_auth_NH[1]},${gun_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${gun_auth_NJ[0]},${gun_auth_NJ[1]},${gun_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${gun_auth_NM[0]},${gun_auth_NM[1]},${gun_auth_NM[2]})`},
		  'NV':{fill:`rgb(${gun_auth_NV[0]},${gun_auth_NV[1]},${gun_auth_NV[2]})`},
		  'NY':{fill:`rgb(${gun_auth_NY[0]},${gun_auth_NY[1]},${gun_auth_NY[2]})`},
		  'OH':{fill:`rgb(${gun_auth_OH[0]},${gun_auth_OH[1]},${gun_auth_OH[2]})`},
		  'OK':{fill:`rgb(${gun_auth_OK[0]},${gun_auth_OK[1]},${gun_auth_OK[2]})`},
		  'OR':{fill:`rgb(${gun_auth_OR[0]},${gun_auth_OR[1]},${gun_auth_OR[2]})`},
		  'PA':{fill:`rgb(${gun_auth_PA[0]},${gun_auth_PA[1]},${gun_auth_PA[2]})`},
		  'RI':{fill:`rgb(${gun_auth_RI[0]},${gun_auth_RI[1]},${gun_auth_RI[2]})`},
		  'SC':{fill:`rgb(${gun_auth_SC[0]},${gun_auth_SC[1]},${gun_auth_SC[2]})`},
		  'SD':{fill:`rgb(${gun_auth_SD[0]},${gun_auth_SD[1]},${gun_auth_SD[2]})`},
		  'TN':{fill:`rgb(${gun_auth_TN[0]},${gun_auth_TN[1]},${gun_auth_TN[2]})`},
		  'TX':{fill:`rgb(${gun_auth_TX[0]},${gun_auth_TX[1]},${gun_auth_TX[2]})`},
		  'UT':{fill:`rgb(${gun_auth_UT[0]},${gun_auth_UT[1]},${gun_auth_UT[2]})`},
		  'VA':{fill:`rgb(${gun_auth_VA[0]},${gun_auth_VA[1]},${gun_auth_VA[2]})`},
		  'VT':{fill:`rgb(${gun_auth_VT[0]},${gun_auth_VT[1]},${gun_auth_VT[2]})`},
		  'WA':{fill:`rgb(${gun_auth_WA[0]},${gun_auth_WA[1]},${gun_auth_WA[2]})`},
		  'WI':{fill:`rgb(${gun_auth_WI[0]},${gun_auth_WI[1]},${gun_auth_WI[2]})`},
		  'WY':{fill:`rgb(${gun_auth_WY[0]},${gun_auth_WY[1]},${gun_auth_WY[2]})`},
		  'WV':{fill:`rgb(${gun_auth_WV[0]},${gun_auth_WV[1]},${gun_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#soc_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${soc_con_AK[0]},${soc_con_AK[1]},${soc_con_AK[2]})`},
		  'AL':{fill:`rgb(${soc_con_AL[0]},${soc_con_AL[1]},${soc_con_AL[2]})`},
		  'AR':{fill:`rgb(${soc_con_AR[0]},${soc_con_AR[1]},${soc_con_AR[2]})`},
		  'AZ':{fill:`rgb(${soc_con_AZ[0]},${soc_con_AZ[1]},${soc_con_AZ[2]})`},
		  'CA':{fill:`rgb(${soc_con_CA[0]},${soc_con_CA[1]},${soc_con_CA[2]})`},
		  'CO':{fill:`rgb(${soc_con_CO[0]},${soc_con_CO[1]},${soc_con_CO[2]})`},
		  'CT':{fill:`rgb(${soc_con_CT[0]},${soc_con_CT[1]},${soc_con_CT[2]})`},
		  'DC':{fill:`rgb(${soc_con_DC[0]},${soc_con_DC[1]},${soc_con_DC[2]})`},
		  'DE':{fill:`rgb(${soc_con_DE[0]},${soc_con_DE[1]},${soc_con_DE[2]})`},
		  'FL':{fill:`rgb(${soc_con_FL[0]},${soc_con_FL[1]},${soc_con_FL[2]})`},
		  'GA':{fill:`rgb(${soc_con_GA[0]},${soc_con_GA[1]},${soc_con_GA[2]})`},
		  'HI':{fill:`rgb(${soc_con_HI[0]},${soc_con_HI[1]},${soc_con_HI[2]})`},
		  'IA':{fill:`rgb(${soc_con_IA[0]},${soc_con_IA[1]},${soc_con_IA[2]})`},
		  'ID':{fill:`rgb(${soc_con_ID[0]},${soc_con_ID[1]},${soc_con_ID[2]})`},
		  'IL':{fill:`rgb(${soc_con_IL[0]},${soc_con_IL[1]},${soc_con_IL[2]})`},
		  'IN':{fill:`rgb(${soc_con_IN[0]},${soc_con_IN[1]},${soc_con_IN[2]})`},
		  'KS':{fill:`rgb(${soc_con_KS[0]},${soc_con_KS[1]},${soc_con_KS[2]})`},
		  'KY':{fill:`rgb(${soc_con_KY[0]},${soc_con_KY[1]},${soc_con_KY[2]})`},
		  'LA':{fill:`rgb(${soc_con_LA[0]},${soc_con_LA[1]},${soc_con_LA[2]})`},
		  'MA':{fill:`rgb(${soc_con_MA[0]},${soc_con_MA[1]},${soc_con_MA[2]})`},
		  'MD':{fill:`rgb(${soc_con_MD[0]},${soc_con_MD[1]},${soc_con_MD[2]})`},
		  'ME':{fill:`rgb(${soc_con_ME[0]},${soc_con_ME[1]},${soc_con_ME[2]})`},
		  'MI':{fill:`rgb(${soc_con_MI[0]},${soc_con_MI[1]},${soc_con_MI[2]})`},
		  'MN':{fill:`rgb(${soc_con_MN[0]},${soc_con_MN[1]},${soc_con_MN[2]})`},
		  'MO':{fill:`rgb(${soc_con_MO[0]},${soc_con_MO[1]},${soc_con_MO[2]})`},
		  'MS':{fill:`rgb(${soc_con_MS[0]},${soc_con_MS[1]},${soc_con_MS[2]})`},
		  'NC':{fill:`rgb(${soc_con_NC[0]},${soc_con_NC[1]},${soc_con_NC[2]})`},
		  'ND':{fill:`rgb(${soc_con_ND[0]},${soc_con_ND[1]},${soc_con_ND[2]})`},
		  'NE':{fill:`rgb(${soc_con_NE[0]},${soc_con_NE[1]},${soc_con_NE[2]})`},
		  'NH':{fill:`rgb(${soc_con_NH[0]},${soc_con_NH[1]},${soc_con_NH[2]})`},
		  'NJ':{fill:`rgb(${soc_con_NJ[0]},${soc_con_NJ[1]},${soc_con_NJ[2]})`},
		  'NM':{fill:`rgb(${soc_con_NM[0]},${soc_con_NM[1]},${soc_con_NM[2]})`},
		  'NV':{fill:`rgb(${soc_con_NV[0]},${soc_con_NV[1]},${soc_con_NV[2]})`},
		  'NY':{fill:`rgb(${soc_con_NY[0]},${soc_con_NY[1]},${soc_con_NY[2]})`},
		  'OH':{fill:`rgb(${soc_con_OH[0]},${soc_con_OH[1]},${soc_con_OH[2]})`},
		  'OK':{fill:`rgb(${soc_con_OK[0]},${soc_con_OK[1]},${soc_con_OK[2]})`},
		  'OR':{fill:`rgb(${soc_con_OR[0]},${soc_con_OR[1]},${soc_con_OR[2]})`},
		  'PA':{fill:`rgb(${soc_con_PA[0]},${soc_con_PA[1]},${soc_con_PA[2]})`},
		  'RI':{fill:`rgb(${soc_con_RI[0]},${soc_con_RI[1]},${soc_con_RI[2]})`},
		  'SC':{fill:`rgb(${soc_con_SC[0]},${soc_con_SC[1]},${soc_con_SC[2]})`},
		  'SD':{fill:`rgb(${soc_con_SD[0]},${soc_con_SD[1]},${soc_con_SD[2]})`},
		  'TN':{fill:`rgb(${soc_con_TN[0]},${soc_con_TN[1]},${soc_con_TN[2]})`},
		  'TX':{fill:`rgb(${soc_con_TX[0]},${soc_con_TX[1]},${soc_con_TX[2]})`},
		  'UT':{fill:`rgb(${soc_con_UT[0]},${soc_con_UT[1]},${soc_con_UT[2]})`},
		  'VA':{fill:`rgb(${soc_con_VA[0]},${soc_con_VA[1]},${soc_con_VA[2]})`},
		  'VT':{fill:`rgb(${soc_con_VT[0]},${soc_con_VT[1]},${soc_con_VT[2]})`},
		  'WA':{fill:`rgb(${soc_con_WA[0]},${soc_con_WA[1]},${soc_con_WA[2]})`},
		  'WI':{fill:`rgb(${soc_con_WI[0]},${soc_con_WI[1]},${soc_con_WI[2]})`},
		  'WY':{fill:`rgb(${soc_con_WY[0]},${soc_con_WY[1]},${soc_con_WY[2]})`},
		  'WV':{fill:`rgb(${soc_con_WV[0]},${soc_con_WV[1]},${soc_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#soc_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${soc_auth_AK[0]},${soc_auth_AK[1]},${soc_auth_AK[2]})`},
		  'AL':{fill:`rgb(${soc_auth_AL[0]},${soc_auth_AL[1]},${soc_auth_AL[2]})`},
		  'AR':{fill:`rgb(${soc_auth_AR[0]},${soc_auth_AR[1]},${soc_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${soc_auth_AZ[0]},${soc_auth_AZ[1]},${soc_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${soc_auth_CA[0]},${soc_auth_CA[1]},${soc_auth_CA[2]})`},
		  'CO':{fill:`rgb(${soc_auth_CO[0]},${soc_auth_CO[1]},${soc_auth_CO[2]})`},
		  'CT':{fill:`rgb(${soc_auth_CT[0]},${soc_auth_CT[1]},${soc_auth_CT[2]})`},
		  'DC':{fill:`rgb(${soc_auth_DC[0]},${soc_auth_DC[1]},${soc_auth_DC[2]})`},
		  'DE':{fill:`rgb(${soc_auth_DE[0]},${soc_auth_DE[1]},${soc_auth_DE[2]})`},
		  'FL':{fill:`rgb(${soc_auth_FL[0]},${soc_auth_FL[1]},${soc_auth_FL[2]})`},
		  'GA':{fill:`rgb(${soc_auth_GA[0]},${soc_auth_GA[1]},${soc_auth_GA[2]})`},
		  'HI':{fill:`rgb(${soc_auth_HI[0]},${soc_auth_HI[1]},${soc_auth_HI[2]})`},
		  'IA':{fill:`rgb(${soc_auth_IA[0]},${soc_auth_IA[1]},${soc_auth_IA[2]})`},
		  'ID':{fill:`rgb(${soc_auth_ID[0]},${soc_auth_ID[1]},${soc_auth_ID[2]})`},
		  'IL':{fill:`rgb(${soc_auth_IL[0]},${soc_auth_IL[1]},${soc_auth_IL[2]})`},
		  'IN':{fill:`rgb(${soc_auth_IN[0]},${soc_auth_IN[1]},${soc_auth_IN[2]})`},
		  'KS':{fill:`rgb(${soc_auth_KS[0]},${soc_auth_KS[1]},${soc_auth_KS[2]})`},
		  'KY':{fill:`rgb(${soc_auth_KY[0]},${soc_auth_KY[1]},${soc_auth_KY[2]})`},
		  'LA':{fill:`rgb(${soc_auth_LA[0]},${soc_auth_LA[1]},${soc_auth_LA[2]})`},
		  'MA':{fill:`rgb(${soc_auth_MA[0]},${soc_auth_MA[1]},${soc_auth_MA[2]})`},
		  'MD':{fill:`rgb(${soc_auth_MD[0]},${soc_auth_MD[1]},${soc_auth_MD[2]})`},
		  'ME':{fill:`rgb(${soc_auth_ME[0]},${soc_auth_ME[1]},${soc_auth_ME[2]})`},
		  'MI':{fill:`rgb(${soc_auth_MI[0]},${soc_auth_MI[1]},${soc_auth_MI[2]})`},
		  'MN':{fill:`rgb(${soc_auth_MN[0]},${soc_auth_MN[1]},${soc_auth_MN[2]})`},
		  'MO':{fill:`rgb(${soc_auth_MO[0]},${soc_auth_MO[1]},${soc_auth_MO[2]})`},
		  'MS':{fill:`rgb(${soc_auth_MS[0]},${soc_auth_MS[1]},${soc_auth_MS[2]})`},
		  'NC':{fill:`rgb(${soc_auth_NC[0]},${soc_auth_NC[1]},${soc_auth_NC[2]})`},
		  'ND':{fill:`rgb(${soc_auth_ND[0]},${soc_auth_ND[1]},${soc_auth_ND[2]})`},
		  'NE':{fill:`rgb(${soc_auth_NE[0]},${soc_auth_NE[1]},${soc_auth_NE[2]})`},
		  'NH':{fill:`rgb(${soc_auth_NH[0]},${soc_auth_NH[1]},${soc_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${soc_auth_NJ[0]},${soc_auth_NJ[1]},${soc_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${soc_auth_NM[0]},${soc_auth_NM[1]},${soc_auth_NM[2]})`},
		  'NV':{fill:`rgb(${soc_auth_NV[0]},${soc_auth_NV[1]},${soc_auth_NV[2]})`},
		  'NY':{fill:`rgb(${soc_auth_NY[0]},${soc_auth_NY[1]},${soc_auth_NY[2]})`},
		  'OH':{fill:`rgb(${soc_auth_OH[0]},${soc_auth_OH[1]},${soc_auth_OH[2]})`},
		  'OK':{fill:`rgb(${soc_auth_OK[0]},${soc_auth_OK[1]},${soc_auth_OK[2]})`},
		  'OR':{fill:`rgb(${soc_auth_OR[0]},${soc_auth_OR[1]},${soc_auth_OR[2]})`},
		  'PA':{fill:`rgb(${soc_auth_PA[0]},${soc_auth_PA[1]},${soc_auth_PA[2]})`},
		  'RI':{fill:`rgb(${soc_auth_RI[0]},${soc_auth_RI[1]},${soc_auth_RI[2]})`},
		  'SC':{fill:`rgb(${soc_auth_SC[0]},${soc_auth_SC[1]},${soc_auth_SC[2]})`},
		  'SD':{fill:`rgb(${soc_auth_SD[0]},${soc_auth_SD[1]},${soc_auth_SD[2]})`},
		  'TN':{fill:`rgb(${soc_auth_TN[0]},${soc_auth_TN[1]},${soc_auth_TN[2]})`},
		  'TX':{fill:`rgb(${soc_auth_TX[0]},${soc_auth_TX[1]},${soc_auth_TX[2]})`},
		  'UT':{fill:`rgb(${soc_auth_UT[0]},${soc_auth_UT[1]},${soc_auth_UT[2]})`},
		  'VA':{fill:`rgb(${soc_auth_VA[0]},${soc_auth_VA[1]},${soc_auth_VA[2]})`},
		  'VT':{fill:`rgb(${soc_auth_VT[0]},${soc_auth_VT[1]},${soc_auth_VT[2]})`},
		  'WA':{fill:`rgb(${soc_auth_WA[0]},${soc_auth_WA[1]},${soc_auth_WA[2]})`},
		  'WI':{fill:`rgb(${soc_auth_WI[0]},${soc_auth_WI[1]},${soc_auth_WI[2]})`},
		  'WY':{fill:`rgb(${soc_auth_WY[0]},${soc_auth_WY[1]},${soc_auth_WY[2]})`},
		  'WV':{fill:`rgb(${soc_auth_WV[0]},${soc_auth_WV[1]},${soc_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#imm_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${imm_con_AK[0]},${imm_con_AK[1]},${imm_con_AK[2]})`},
		  'AL':{fill:`rgb(${imm_con_AL[0]},${imm_con_AL[1]},${imm_con_AL[2]})`},
		  'AR':{fill:`rgb(${imm_con_AR[0]},${imm_con_AR[1]},${imm_con_AR[2]})`},
		  'AZ':{fill:`rgb(${imm_con_AZ[0]},${imm_con_AZ[1]},${imm_con_AZ[2]})`},
		  'CA':{fill:`rgb(${imm_con_CA[0]},${imm_con_CA[1]},${imm_con_CA[2]})`},
		  'CO':{fill:`rgb(${imm_con_CO[0]},${imm_con_CO[1]},${imm_con_CO[2]})`},
		  'CT':{fill:`rgb(${imm_con_CT[0]},${imm_con_CT[1]},${imm_con_CT[2]})`},
		  'DC':{fill:`rgb(${imm_con_DC[0]},${imm_con_DC[1]},${imm_con_DC[2]})`},
		  'DE':{fill:`rgb(${imm_con_DE[0]},${imm_con_DE[1]},${imm_con_DE[2]})`},
		  'FL':{fill:`rgb(${imm_con_FL[0]},${imm_con_FL[1]},${imm_con_FL[2]})`},
		  'GA':{fill:`rgb(${imm_con_GA[0]},${imm_con_GA[1]},${imm_con_GA[2]})`},
		  'HI':{fill:`rgb(${imm_con_HI[0]},${imm_con_HI[1]},${imm_con_HI[2]})`},
		  'IA':{fill:`rgb(${imm_con_IA[0]},${imm_con_IA[1]},${imm_con_IA[2]})`},
		  'ID':{fill:`rgb(${imm_con_ID[0]},${imm_con_ID[1]},${imm_con_ID[2]})`},
		  'IL':{fill:`rgb(${imm_con_IL[0]},${imm_con_IL[1]},${imm_con_IL[2]})`},
		  'IN':{fill:`rgb(${imm_con_IN[0]},${imm_con_IN[1]},${imm_con_IN[2]})`},
		  'KS':{fill:`rgb(${imm_con_KS[0]},${imm_con_KS[1]},${imm_con_KS[2]})`},
		  'KY':{fill:`rgb(${imm_con_KY[0]},${imm_con_KY[1]},${imm_con_KY[2]})`},
		  'LA':{fill:`rgb(${imm_con_LA[0]},${imm_con_LA[1]},${imm_con_LA[2]})`},
		  'MA':{fill:`rgb(${imm_con_MA[0]},${imm_con_MA[1]},${imm_con_MA[2]})`},
		  'MD':{fill:`rgb(${imm_con_MD[0]},${imm_con_MD[1]},${imm_con_MD[2]})`},
		  'ME':{fill:`rgb(${imm_con_ME[0]},${imm_con_ME[1]},${imm_con_ME[2]})`},
		  'MI':{fill:`rgb(${imm_con_MI[0]},${imm_con_MI[1]},${imm_con_MI[2]})`},
		  'MN':{fill:`rgb(${imm_con_MN[0]},${imm_con_MN[1]},${imm_con_MN[2]})`},
		  'MO':{fill:`rgb(${imm_con_MO[0]},${imm_con_MO[1]},${imm_con_MO[2]})`},
		  'MS':{fill:`rgb(${imm_con_MS[0]},${imm_con_MS[1]},${imm_con_MS[2]})`},
		  'NC':{fill:`rgb(${imm_con_NC[0]},${imm_con_NC[1]},${imm_con_NC[2]})`},
		  'ND':{fill:`rgb(${imm_con_ND[0]},${imm_con_ND[1]},${imm_con_ND[2]})`},
		  'NE':{fill:`rgb(${imm_con_NE[0]},${imm_con_NE[1]},${imm_con_NE[2]})`},
		  'NH':{fill:`rgb(${imm_con_NH[0]},${imm_con_NH[1]},${imm_con_NH[2]})`},
		  'NJ':{fill:`rgb(${imm_con_NJ[0]},${imm_con_NJ[1]},${imm_con_NJ[2]})`},
		  'NM':{fill:`rgb(${imm_con_NM[0]},${imm_con_NM[1]},${imm_con_NM[2]})`},
		  'NV':{fill:`rgb(${imm_con_NV[0]},${imm_con_NV[1]},${imm_con_NV[2]})`},
		  'NY':{fill:`rgb(${imm_con_NY[0]},${imm_con_NY[1]},${imm_con_NY[2]})`},
		  'OH':{fill:`rgb(${imm_con_OH[0]},${imm_con_OH[1]},${imm_con_OH[2]})`},
		  'OK':{fill:`rgb(${imm_con_OK[0]},${imm_con_OK[1]},${imm_con_OK[2]})`},
		  'OR':{fill:`rgb(${imm_con_OR[0]},${imm_con_OR[1]},${imm_con_OR[2]})`},
		  'PA':{fill:`rgb(${imm_con_PA[0]},${imm_con_PA[1]},${imm_con_PA[2]})`},
		  'RI':{fill:`rgb(${imm_con_RI[0]},${imm_con_RI[1]},${imm_con_RI[2]})`},
		  'SC':{fill:`rgb(${imm_con_SC[0]},${imm_con_SC[1]},${imm_con_SC[2]})`},
		  'SD':{fill:`rgb(${imm_con_SD[0]},${imm_con_SD[1]},${imm_con_SD[2]})`},
		  'TN':{fill:`rgb(${imm_con_TN[0]},${imm_con_TN[1]},${imm_con_TN[2]})`},
		  'TX':{fill:`rgb(${imm_con_TX[0]},${imm_con_TX[1]},${imm_con_TX[2]})`},
		  'UT':{fill:`rgb(${imm_con_UT[0]},${imm_con_UT[1]},${imm_con_UT[2]})`},
		  'VA':{fill:`rgb(${imm_con_VA[0]},${imm_con_VA[1]},${imm_con_VA[2]})`},
		  'VT':{fill:`rgb(${imm_con_VT[0]},${imm_con_VT[1]},${imm_con_VT[2]})`},
		  'WA':{fill:`rgb(${imm_con_WA[0]},${imm_con_WA[1]},${imm_con_WA[2]})`},
		  'WI':{fill:`rgb(${imm_con_WI[0]},${imm_con_WI[1]},${imm_con_WI[2]})`},
		  'WY':{fill:`rgb(${imm_con_WY[0]},${imm_con_WY[1]},${imm_con_WY[2]})`},
		  'WV':{fill:`rgb(${imm_con_WV[0]},${imm_con_WV[1]},${imm_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#imm_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${imm_auth_AK[0]},${imm_auth_AK[1]},${imm_auth_AK[2]})`},
		  'AL':{fill:`rgb(${imm_auth_AL[0]},${imm_auth_AL[1]},${imm_auth_AL[2]})`},
		  'AR':{fill:`rgb(${imm_auth_AR[0]},${imm_auth_AR[1]},${imm_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${imm_auth_AZ[0]},${imm_auth_AZ[1]},${imm_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${imm_auth_CA[0]},${imm_auth_CA[1]},${imm_auth_CA[2]})`},
		  'CO':{fill:`rgb(${imm_auth_CO[0]},${imm_auth_CO[1]},${imm_auth_CO[2]})`},
		  'CT':{fill:`rgb(${imm_auth_CT[0]},${imm_auth_CT[1]},${imm_auth_CT[2]})`},
		  'DC':{fill:`rgb(${imm_auth_DC[0]},${imm_auth_DC[1]},${imm_auth_DC[2]})`},
		  'DE':{fill:`rgb(${imm_auth_DE[0]},${imm_auth_DE[1]},${imm_auth_DE[2]})`},
		  'FL':{fill:`rgb(${imm_auth_FL[0]},${imm_auth_FL[1]},${imm_auth_FL[2]})`},
		  'GA':{fill:`rgb(${imm_auth_GA[0]},${imm_auth_GA[1]},${imm_auth_GA[2]})`},
		  'HI':{fill:`rgb(${imm_auth_HI[0]},${imm_auth_HI[1]},${imm_auth_HI[2]})`},
		  'IA':{fill:`rgb(${imm_auth_IA[0]},${imm_auth_IA[1]},${imm_auth_IA[2]})`},
		  'ID':{fill:`rgb(${imm_auth_ID[0]},${imm_auth_ID[1]},${imm_auth_ID[2]})`},
		  'IL':{fill:`rgb(${imm_auth_IL[0]},${imm_auth_IL[1]},${imm_auth_IL[2]})`},
		  'IN':{fill:`rgb(${imm_auth_IN[0]},${imm_auth_IN[1]},${imm_auth_IN[2]})`},
		  'KS':{fill:`rgb(${imm_auth_KS[0]},${imm_auth_KS[1]},${imm_auth_KS[2]})`},
		  'KY':{fill:`rgb(${imm_auth_KY[0]},${imm_auth_KY[1]},${imm_auth_KY[2]})`},
		  'LA':{fill:`rgb(${imm_auth_LA[0]},${imm_auth_LA[1]},${imm_auth_LA[2]})`},
		  'MA':{fill:`rgb(${imm_auth_MA[0]},${imm_auth_MA[1]},${imm_auth_MA[2]})`},
		  'MD':{fill:`rgb(${imm_auth_MD[0]},${imm_auth_MD[1]},${imm_auth_MD[2]})`},
		  'ME':{fill:`rgb(${imm_auth_ME[0]},${imm_auth_ME[1]},${imm_auth_ME[2]})`},
		  'MI':{fill:`rgb(${imm_auth_MI[0]},${imm_auth_MI[1]},${imm_auth_MI[2]})`},
		  'MN':{fill:`rgb(${imm_auth_MN[0]},${imm_auth_MN[1]},${imm_auth_MN[2]})`},
		  'MO':{fill:`rgb(${imm_auth_MO[0]},${imm_auth_MO[1]},${imm_auth_MO[2]})`},
		  'MS':{fill:`rgb(${imm_auth_MS[0]},${imm_auth_MS[1]},${imm_auth_MS[2]})`},
		  'NC':{fill:`rgb(${imm_auth_NC[0]},${imm_auth_NC[1]},${imm_auth_NC[2]})`},
		  'ND':{fill:`rgb(${imm_auth_ND[0]},${imm_auth_ND[1]},${imm_auth_ND[2]})`},
		  'NE':{fill:`rgb(${imm_auth_NE[0]},${imm_auth_NE[1]},${imm_auth_NE[2]})`},
		  'NH':{fill:`rgb(${imm_auth_NH[0]},${imm_auth_NH[1]},${imm_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${imm_auth_NJ[0]},${imm_auth_NJ[1]},${imm_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${imm_auth_NM[0]},${imm_auth_NM[1]},${imm_auth_NM[2]})`},
		  'NV':{fill:`rgb(${imm_auth_NV[0]},${imm_auth_NV[1]},${imm_auth_NV[2]})`},
		  'NY':{fill:`rgb(${imm_auth_NY[0]},${imm_auth_NY[1]},${imm_auth_NY[2]})`},
		  'OH':{fill:`rgb(${imm_auth_OH[0]},${imm_auth_OH[1]},${imm_auth_OH[2]})`},
		  'OK':{fill:`rgb(${imm_auth_OK[0]},${imm_auth_OK[1]},${imm_auth_OK[2]})`},
		  'OR':{fill:`rgb(${imm_auth_OR[0]},${imm_auth_OR[1]},${imm_auth_OR[2]})`},
		  'PA':{fill:`rgb(${imm_auth_PA[0]},${imm_auth_PA[1]},${imm_auth_PA[2]})`},
		  'RI':{fill:`rgb(${imm_auth_RI[0]},${imm_auth_RI[1]},${imm_auth_RI[2]})`},
		  'SC':{fill:`rgb(${imm_auth_SC[0]},${imm_auth_SC[1]},${imm_auth_SC[2]})`},
		  'SD':{fill:`rgb(${imm_auth_SD[0]},${imm_auth_SD[1]},${imm_auth_SD[2]})`},
		  'TN':{fill:`rgb(${imm_auth_TN[0]},${imm_auth_TN[1]},${imm_auth_TN[2]})`},
		  'TX':{fill:`rgb(${imm_auth_TX[0]},${imm_auth_TX[1]},${imm_auth_TX[2]})`},
		  'UT':{fill:`rgb(${imm_auth_UT[0]},${imm_auth_UT[1]},${imm_auth_UT[2]})`},
		  'VA':{fill:`rgb(${imm_auth_VA[0]},${imm_auth_VA[1]},${imm_auth_VA[2]})`},
		  'VT':{fill:`rgb(${imm_auth_VT[0]},${imm_auth_VT[1]},${imm_auth_VT[2]})`},
		  'WA':{fill:`rgb(${imm_auth_WA[0]},${imm_auth_WA[1]},${imm_auth_WA[2]})`},
		  'WI':{fill:`rgb(${imm_auth_WI[0]},${imm_auth_WI[1]},${imm_auth_WI[2]})`},
		  'WY':{fill:`rgb(${imm_auth_WY[0]},${imm_auth_WY[1]},${imm_auth_WY[2]})`},
		  'WV':{fill:`rgb(${imm_auth_WV[0]},${imm_auth_WV[1]},${imm_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#cor_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${cor_con_AK[0]},${cor_con_AK[1]},${cor_con_AK[2]})`},
		  'AL':{fill:`rgb(${cor_con_AL[0]},${cor_con_AL[1]},${cor_con_AL[2]})`},
		  'AR':{fill:`rgb(${cor_con_AR[0]},${cor_con_AR[1]},${cor_con_AR[2]})`},
		  'AZ':{fill:`rgb(${cor_con_AZ[0]},${cor_con_AZ[1]},${cor_con_AZ[2]})`},
		  'CA':{fill:`rgb(${cor_con_CA[0]},${cor_con_CA[1]},${cor_con_CA[2]})`},
		  'CO':{fill:`rgb(${cor_con_CO[0]},${cor_con_CO[1]},${cor_con_CO[2]})`},
		  'CT':{fill:`rgb(${cor_con_CT[0]},${cor_con_CT[1]},${cor_con_CT[2]})`},
		  'DC':{fill:`rgb(${cor_con_DC[0]},${cor_con_DC[1]},${cor_con_DC[2]})`},
		  'DE':{fill:`rgb(${cor_con_DE[0]},${cor_con_DE[1]},${cor_con_DE[2]})`},
		  'FL':{fill:`rgb(${cor_con_FL[0]},${cor_con_FL[1]},${cor_con_FL[2]})`},
		  'GA':{fill:`rgb(${cor_con_GA[0]},${cor_con_GA[1]},${cor_con_GA[2]})`},
		  'HI':{fill:`rgb(${cor_con_HI[0]},${cor_con_HI[1]},${cor_con_HI[2]})`},
		  'IA':{fill:`rgb(${cor_con_IA[0]},${cor_con_IA[1]},${cor_con_IA[2]})`},
		  'ID':{fill:`rgb(${cor_con_ID[0]},${cor_con_ID[1]},${cor_con_ID[2]})`},
		  'IL':{fill:`rgb(${cor_con_IL[0]},${cor_con_IL[1]},${cor_con_IL[2]})`},
		  'IN':{fill:`rgb(${cor_con_IN[0]},${cor_con_IN[1]},${cor_con_IN[2]})`},
		  'KS':{fill:`rgb(${cor_con_KS[0]},${cor_con_KS[1]},${cor_con_KS[2]})`},
		  'KY':{fill:`rgb(${cor_con_KY[0]},${cor_con_KY[1]},${cor_con_KY[2]})`},
		  'LA':{fill:`rgb(${cor_con_LA[0]},${cor_con_LA[1]},${cor_con_LA[2]})`},
		  'MA':{fill:`rgb(${cor_con_MA[0]},${cor_con_MA[1]},${cor_con_MA[2]})`},
		  'MD':{fill:`rgb(${cor_con_MD[0]},${cor_con_MD[1]},${cor_con_MD[2]})`},
		  'ME':{fill:`rgb(${cor_con_ME[0]},${cor_con_ME[1]},${cor_con_ME[2]})`},
		  'MI':{fill:`rgb(${cor_con_MI[0]},${cor_con_MI[1]},${cor_con_MI[2]})`},
		  'MN':{fill:`rgb(${cor_con_MN[0]},${cor_con_MN[1]},${cor_con_MN[2]})`},
		  'MO':{fill:`rgb(${cor_con_MO[0]},${cor_con_MO[1]},${cor_con_MO[2]})`},
		  'MS':{fill:`rgb(${cor_con_MS[0]},${cor_con_MS[1]},${cor_con_MS[2]})`},
		  'NC':{fill:`rgb(${cor_con_NC[0]},${cor_con_NC[1]},${cor_con_NC[2]})`},
		  'ND':{fill:`rgb(${cor_con_ND[0]},${cor_con_ND[1]},${cor_con_ND[2]})`},
		  'NE':{fill:`rgb(${cor_con_NE[0]},${cor_con_NE[1]},${cor_con_NE[2]})`},
		  'NH':{fill:`rgb(${cor_con_NH[0]},${cor_con_NH[1]},${cor_con_NH[2]})`},
		  'NJ':{fill:`rgb(${cor_con_NJ[0]},${cor_con_NJ[1]},${cor_con_NJ[2]})`},
		  'NM':{fill:`rgb(${cor_con_NM[0]},${cor_con_NM[1]},${cor_con_NM[2]})`},
		  'NV':{fill:`rgb(${cor_con_NV[0]},${cor_con_NV[1]},${cor_con_NV[2]})`},
		  'NY':{fill:`rgb(${cor_con_NY[0]},${cor_con_NY[1]},${cor_con_NY[2]})`},
		  'OH':{fill:`rgb(${cor_con_OH[0]},${cor_con_OH[1]},${cor_con_OH[2]})`},
		  'OK':{fill:`rgb(${cor_con_OK[0]},${cor_con_OK[1]},${cor_con_OK[2]})`},
		  'OR':{fill:`rgb(${cor_con_OR[0]},${cor_con_OR[1]},${cor_con_OR[2]})`},
		  'PA':{fill:`rgb(${cor_con_PA[0]},${cor_con_PA[1]},${cor_con_PA[2]})`},
		  'RI':{fill:`rgb(${cor_con_RI[0]},${cor_con_RI[1]},${cor_con_RI[2]})`},
		  'SC':{fill:`rgb(${cor_con_SC[0]},${cor_con_SC[1]},${cor_con_SC[2]})`},
		  'SD':{fill:`rgb(${cor_con_SD[0]},${cor_con_SD[1]},${cor_con_SD[2]})`},
		  'TN':{fill:`rgb(${cor_con_TN[0]},${cor_con_TN[1]},${cor_con_TN[2]})`},
		  'TX':{fill:`rgb(${cor_con_TX[0]},${cor_con_TX[1]},${cor_con_TX[2]})`},
		  'UT':{fill:`rgb(${cor_con_UT[0]},${cor_con_UT[1]},${cor_con_UT[2]})`},
		  'VA':{fill:`rgb(${cor_con_VA[0]},${cor_con_VA[1]},${cor_con_VA[2]})`},
		  'VT':{fill:`rgb(${cor_con_VT[0]},${cor_con_VT[1]},${cor_con_VT[2]})`},
		  'WA':{fill:`rgb(${cor_con_WA[0]},${cor_con_WA[1]},${cor_con_WA[2]})`},
		  'WI':{fill:`rgb(${cor_con_WI[0]},${cor_con_WI[1]},${cor_con_WI[2]})`},
		  'WY':{fill:`rgb(${cor_con_WY[0]},${cor_con_WY[1]},${cor_con_WY[2]})`},
		  'WV':{fill:`rgb(${cor_con_WV[0]},${cor_con_WV[1]},${cor_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#cor_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${cor_auth_AK[0]},${cor_auth_AK[1]},${cor_auth_AK[2]})`},
		  'AL':{fill:`rgb(${cor_auth_AL[0]},${cor_auth_AL[1]},${cor_auth_AL[2]})`},
		  'AR':{fill:`rgb(${cor_auth_AR[0]},${cor_auth_AR[1]},${cor_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${cor_auth_AZ[0]},${cor_auth_AZ[1]},${cor_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${cor_auth_CA[0]},${cor_auth_CA[1]},${cor_auth_CA[2]})`},
		  'CO':{fill:`rgb(${cor_auth_CO[0]},${cor_auth_CO[1]},${cor_auth_CO[2]})`},
		  'CT':{fill:`rgb(${cor_auth_CT[0]},${cor_auth_CT[1]},${cor_auth_CT[2]})`},
		  'DC':{fill:`rgb(${cor_auth_DC[0]},${cor_auth_DC[1]},${cor_auth_DC[2]})`},
		  'DE':{fill:`rgb(${cor_auth_DE[0]},${cor_auth_DE[1]},${cor_auth_DE[2]})`},
		  'FL':{fill:`rgb(${cor_auth_FL[0]},${cor_auth_FL[1]},${cor_auth_FL[2]})`},
		  'GA':{fill:`rgb(${cor_auth_GA[0]},${cor_auth_GA[1]},${cor_auth_GA[2]})`},
		  'HI':{fill:`rgb(${cor_auth_HI[0]},${cor_auth_HI[1]},${cor_auth_HI[2]})`},
		  'IA':{fill:`rgb(${cor_auth_IA[0]},${cor_auth_IA[1]},${cor_auth_IA[2]})`},
		  'ID':{fill:`rgb(${cor_auth_ID[0]},${cor_auth_ID[1]},${cor_auth_ID[2]})`},
		  'IL':{fill:`rgb(${cor_auth_IL[0]},${cor_auth_IL[1]},${cor_auth_IL[2]})`},
		  'IN':{fill:`rgb(${cor_auth_IN[0]},${cor_auth_IN[1]},${cor_auth_IN[2]})`},
		  'KS':{fill:`rgb(${cor_auth_KS[0]},${cor_auth_KS[1]},${cor_auth_KS[2]})`},
		  'KY':{fill:`rgb(${cor_auth_KY[0]},${cor_auth_KY[1]},${cor_auth_KY[2]})`},
		  'LA':{fill:`rgb(${cor_auth_LA[0]},${cor_auth_LA[1]},${cor_auth_LA[2]})`},
		  'MA':{fill:`rgb(${cor_auth_MA[0]},${cor_auth_MA[1]},${cor_auth_MA[2]})`},
		  'MD':{fill:`rgb(${cor_auth_MD[0]},${cor_auth_MD[1]},${cor_auth_MD[2]})`},
		  'ME':{fill:`rgb(${cor_auth_ME[0]},${cor_auth_ME[1]},${cor_auth_ME[2]})`},
		  'MI':{fill:`rgb(${cor_auth_MI[0]},${cor_auth_MI[1]},${cor_auth_MI[2]})`},
		  'MN':{fill:`rgb(${cor_auth_MN[0]},${cor_auth_MN[1]},${cor_auth_MN[2]})`},
		  'MO':{fill:`rgb(${cor_auth_MO[0]},${cor_auth_MO[1]},${cor_auth_MO[2]})`},
		  'MS':{fill:`rgb(${cor_auth_MS[0]},${cor_auth_MS[1]},${cor_auth_MS[2]})`},
		  'NC':{fill:`rgb(${cor_auth_NC[0]},${cor_auth_NC[1]},${cor_auth_NC[2]})`},
		  'ND':{fill:`rgb(${cor_auth_ND[0]},${cor_auth_ND[1]},${cor_auth_ND[2]})`},
		  'NE':{fill:`rgb(${cor_auth_NE[0]},${cor_auth_NE[1]},${cor_auth_NE[2]})`},
		  'NH':{fill:`rgb(${cor_auth_NH[0]},${cor_auth_NH[1]},${cor_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${cor_auth_NJ[0]},${cor_auth_NJ[1]},${cor_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${cor_auth_NM[0]},${cor_auth_NM[1]},${cor_auth_NM[2]})`},
		  'NV':{fill:`rgb(${cor_auth_NV[0]},${cor_auth_NV[1]},${cor_auth_NV[2]})`},
		  'NY':{fill:`rgb(${cor_auth_NY[0]},${cor_auth_NY[1]},${cor_auth_NY[2]})`},
		  'OH':{fill:`rgb(${cor_auth_OH[0]},${cor_auth_OH[1]},${cor_auth_OH[2]})`},
		  'OK':{fill:`rgb(${cor_auth_OK[0]},${cor_auth_OK[1]},${cor_auth_OK[2]})`},
		  'OR':{fill:`rgb(${cor_auth_OR[0]},${cor_auth_OR[1]},${cor_auth_OR[2]})`},
		  'PA':{fill:`rgb(${cor_auth_PA[0]},${cor_auth_PA[1]},${cor_auth_PA[2]})`},
		  'RI':{fill:`rgb(${cor_auth_RI[0]},${cor_auth_RI[1]},${cor_auth_RI[2]})`},
		  'SC':{fill:`rgb(${cor_auth_SC[0]},${cor_auth_SC[1]},${cor_auth_SC[2]})`},
		  'SD':{fill:`rgb(${cor_auth_SD[0]},${cor_auth_SD[1]},${cor_auth_SD[2]})`},
		  'TN':{fill:`rgb(${cor_auth_TN[0]},${cor_auth_TN[1]},${cor_auth_TN[2]})`},
		  'TX':{fill:`rgb(${cor_auth_TX[0]},${cor_auth_TX[1]},${cor_auth_TX[2]})`},
		  'UT':{fill:`rgb(${cor_auth_UT[0]},${cor_auth_UT[1]},${cor_auth_UT[2]})`},
		  'VA':{fill:`rgb(${cor_auth_VA[0]},${cor_auth_VA[1]},${cor_auth_VA[2]})`},
		  'VT':{fill:`rgb(${cor_auth_VT[0]},${cor_auth_VT[1]},${cor_auth_VT[2]})`},
		  'WA':{fill:`rgb(${cor_auth_WA[0]},${cor_auth_WA[1]},${cor_auth_WA[2]})`},
		  'WI':{fill:`rgb(${cor_auth_WI[0]},${cor_auth_WI[1]},${cor_auth_WI[2]})`},
		  'WY':{fill:`rgb(${cor_auth_WY[0]},${cor_auth_WY[1]},${cor_auth_WY[2]})`},
		  'WV':{fill:`rgb(${cor_auth_WV[0]},${cor_auth_WV[1]},${cor_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#bud_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${bud_con_AK[0]},${bud_con_AK[1]},${bud_con_AK[2]})`},
		  'AL':{fill:`rgb(${bud_con_AL[0]},${bud_con_AL[1]},${bud_con_AL[2]})`},
		  'AR':{fill:`rgb(${bud_con_AR[0]},${bud_con_AR[1]},${bud_con_AR[2]})`},
		  'AZ':{fill:`rgb(${bud_con_AZ[0]},${bud_con_AZ[1]},${bud_con_AZ[2]})`},
		  'CA':{fill:`rgb(${bud_con_CA[0]},${bud_con_CA[1]},${bud_con_CA[2]})`},
		  'CO':{fill:`rgb(${bud_con_CO[0]},${bud_con_CO[1]},${bud_con_CO[2]})`},
		  'CT':{fill:`rgb(${bud_con_CT[0]},${bud_con_CT[1]},${bud_con_CT[2]})`},
		  'DC':{fill:`rgb(${bud_con_DC[0]},${bud_con_DC[1]},${bud_con_DC[2]})`},
		  'DE':{fill:`rgb(${bud_con_DE[0]},${bud_con_DE[1]},${bud_con_DE[2]})`},
		  'FL':{fill:`rgb(${bud_con_FL[0]},${bud_con_FL[1]},${bud_con_FL[2]})`},
		  'GA':{fill:`rgb(${bud_con_GA[0]},${bud_con_GA[1]},${bud_con_GA[2]})`},
		  'HI':{fill:`rgb(${bud_con_HI[0]},${bud_con_HI[1]},${bud_con_HI[2]})`},
		  'IA':{fill:`rgb(${bud_con_IA[0]},${bud_con_IA[1]},${bud_con_IA[2]})`},
		  'ID':{fill:`rgb(${bud_con_ID[0]},${bud_con_ID[1]},${bud_con_ID[2]})`},
		  'IL':{fill:`rgb(${bud_con_IL[0]},${bud_con_IL[1]},${bud_con_IL[2]})`},
		  'IN':{fill:`rgb(${bud_con_IN[0]},${bud_con_IN[1]},${bud_con_IN[2]})`},
		  'KS':{fill:`rgb(${bud_con_KS[0]},${bud_con_KS[1]},${bud_con_KS[2]})`},
		  'KY':{fill:`rgb(${bud_con_KY[0]},${bud_con_KY[1]},${bud_con_KY[2]})`},
		  'LA':{fill:`rgb(${bud_con_LA[0]},${bud_con_LA[1]},${bud_con_LA[2]})`},
		  'MA':{fill:`rgb(${bud_con_MA[0]},${bud_con_MA[1]},${bud_con_MA[2]})`},
		  'MD':{fill:`rgb(${bud_con_MD[0]},${bud_con_MD[1]},${bud_con_MD[2]})`},
		  'ME':{fill:`rgb(${bud_con_ME[0]},${bud_con_ME[1]},${bud_con_ME[2]})`},
		  'MI':{fill:`rgb(${bud_con_MI[0]},${bud_con_MI[1]},${bud_con_MI[2]})`},
		  'MN':{fill:`rgb(${bud_con_MN[0]},${bud_con_MN[1]},${bud_con_MN[2]})`},
		  'MO':{fill:`rgb(${bud_con_MO[0]},${bud_con_MO[1]},${bud_con_MO[2]})`},
		  'MS':{fill:`rgb(${bud_con_MS[0]},${bud_con_MS[1]},${bud_con_MS[2]})`},
		  'NC':{fill:`rgb(${bud_con_NC[0]},${bud_con_NC[1]},${bud_con_NC[2]})`},
		  'ND':{fill:`rgb(${bud_con_ND[0]},${bud_con_ND[1]},${bud_con_ND[2]})`},
		  'NE':{fill:`rgb(${bud_con_NE[0]},${bud_con_NE[1]},${bud_con_NE[2]})`},
		  'NH':{fill:`rgb(${bud_con_NH[0]},${bud_con_NH[1]},${bud_con_NH[2]})`},
		  'NJ':{fill:`rgb(${bud_con_NJ[0]},${bud_con_NJ[1]},${bud_con_NJ[2]})`},
		  'NM':{fill:`rgb(${bud_con_NM[0]},${bud_con_NM[1]},${bud_con_NM[2]})`},
		  'NV':{fill:`rgb(${bud_con_NV[0]},${bud_con_NV[1]},${bud_con_NV[2]})`},
		  'NY':{fill:`rgb(${bud_con_NY[0]},${bud_con_NY[1]},${bud_con_NY[2]})`},
		  'OH':{fill:`rgb(${bud_con_OH[0]},${bud_con_OH[1]},${bud_con_OH[2]})`},
		  'OK':{fill:`rgb(${bud_con_OK[0]},${bud_con_OK[1]},${bud_con_OK[2]})`},
		  'OR':{fill:`rgb(${bud_con_OR[0]},${bud_con_OR[1]},${bud_con_OR[2]})`},
		  'PA':{fill:`rgb(${bud_con_PA[0]},${bud_con_PA[1]},${bud_con_PA[2]})`},
		  'RI':{fill:`rgb(${bud_con_RI[0]},${bud_con_RI[1]},${bud_con_RI[2]})`},
		  'SC':{fill:`rgb(${bud_con_SC[0]},${bud_con_SC[1]},${bud_con_SC[2]})`},
		  'SD':{fill:`rgb(${bud_con_SD[0]},${bud_con_SD[1]},${bud_con_SD[2]})`},
		  'TN':{fill:`rgb(${bud_con_TN[0]},${bud_con_TN[1]},${bud_con_TN[2]})`},
		  'TX':{fill:`rgb(${bud_con_TX[0]},${bud_con_TX[1]},${bud_con_TX[2]})`},
		  'UT':{fill:`rgb(${bud_con_UT[0]},${bud_con_UT[1]},${bud_con_UT[2]})`},
		  'VA':{fill:`rgb(${bud_con_VA[0]},${bud_con_VA[1]},${bud_con_VA[2]})`},
		  'VT':{fill:`rgb(${bud_con_VT[0]},${bud_con_VT[1]},${bud_con_VT[2]})`},
		  'WA':{fill:`rgb(${bud_con_WA[0]},${bud_con_WA[1]},${bud_con_WA[2]})`},
		  'WI':{fill:`rgb(${bud_con_WI[0]},${bud_con_WI[1]},${bud_con_WI[2]})`},
		  'WY':{fill:`rgb(${bud_con_WY[0]},${bud_con_WY[1]},${bud_con_WY[2]})`},
		  'WV':{fill:`rgb(${bud_con_WV[0]},${bud_con_WV[1]},${bud_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#bud_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${bud_auth_AK[0]},${bud_auth_AK[1]},${bud_auth_AK[2]})`},
		  'AL':{fill:`rgb(${bud_auth_AL[0]},${bud_auth_AL[1]},${bud_auth_AL[2]})`},
		  'AR':{fill:`rgb(${bud_auth_AR[0]},${bud_auth_AR[1]},${bud_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${bud_auth_AZ[0]},${bud_auth_AZ[1]},${bud_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${bud_auth_CA[0]},${bud_auth_CA[1]},${bud_auth_CA[2]})`},
		  'CO':{fill:`rgb(${bud_auth_CO[0]},${bud_auth_CO[1]},${bud_auth_CO[2]})`},
		  'CT':{fill:`rgb(${bud_auth_CT[0]},${bud_auth_CT[1]},${bud_auth_CT[2]})`},
		  'DC':{fill:`rgb(${bud_auth_DC[0]},${bud_auth_DC[1]},${bud_auth_DC[2]})`},
		  'DE':{fill:`rgb(${bud_auth_DE[0]},${bud_auth_DE[1]},${bud_auth_DE[2]})`},
		  'FL':{fill:`rgb(${bud_auth_FL[0]},${bud_auth_FL[1]},${bud_auth_FL[2]})`},
		  'GA':{fill:`rgb(${bud_auth_GA[0]},${bud_auth_GA[1]},${bud_auth_GA[2]})`},
		  'HI':{fill:`rgb(${bud_auth_HI[0]},${bud_auth_HI[1]},${bud_auth_HI[2]})`},
		  'IA':{fill:`rgb(${bud_auth_IA[0]},${bud_auth_IA[1]},${bud_auth_IA[2]})`},
		  'ID':{fill:`rgb(${bud_auth_ID[0]},${bud_auth_ID[1]},${bud_auth_ID[2]})`},
		  'IL':{fill:`rgb(${bud_auth_IL[0]},${bud_auth_IL[1]},${bud_auth_IL[2]})`},
		  'IN':{fill:`rgb(${bud_auth_IN[0]},${bud_auth_IN[1]},${bud_auth_IN[2]})`},
		  'KS':{fill:`rgb(${bud_auth_KS[0]},${bud_auth_KS[1]},${bud_auth_KS[2]})`},
		  'KY':{fill:`rgb(${bud_auth_KY[0]},${bud_auth_KY[1]},${bud_auth_KY[2]})`},
		  'LA':{fill:`rgb(${bud_auth_LA[0]},${bud_auth_LA[1]},${bud_auth_LA[2]})`},
		  'MA':{fill:`rgb(${bud_auth_MA[0]},${bud_auth_MA[1]},${bud_auth_MA[2]})`},
		  'MD':{fill:`rgb(${bud_auth_MD[0]},${bud_auth_MD[1]},${bud_auth_MD[2]})`},
		  'ME':{fill:`rgb(${bud_auth_ME[0]},${bud_auth_ME[1]},${bud_auth_ME[2]})`},
		  'MI':{fill:`rgb(${bud_auth_MI[0]},${bud_auth_MI[1]},${bud_auth_MI[2]})`},
		  'MN':{fill:`rgb(${bud_auth_MN[0]},${bud_auth_MN[1]},${bud_auth_MN[2]})`},
		  'MO':{fill:`rgb(${bud_auth_MO[0]},${bud_auth_MO[1]},${bud_auth_MO[2]})`},
		  'MS':{fill:`rgb(${bud_auth_MS[0]},${bud_auth_MS[1]},${bud_auth_MS[2]})`},
		  'NC':{fill:`rgb(${bud_auth_NC[0]},${bud_auth_NC[1]},${bud_auth_NC[2]})`},
		  'ND':{fill:`rgb(${bud_auth_ND[0]},${bud_auth_ND[1]},${bud_auth_ND[2]})`},
		  'NE':{fill:`rgb(${bud_auth_NE[0]},${bud_auth_NE[1]},${bud_auth_NE[2]})`},
		  'NH':{fill:`rgb(${bud_auth_NH[0]},${bud_auth_NH[1]},${bud_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${bud_auth_NJ[0]},${bud_auth_NJ[1]},${bud_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${bud_auth_NM[0]},${bud_auth_NM[1]},${bud_auth_NM[2]})`},
		  'NV':{fill:`rgb(${bud_auth_NV[0]},${bud_auth_NV[1]},${bud_auth_NV[2]})`},
		  'NY':{fill:`rgb(${bud_auth_NY[0]},${bud_auth_NY[1]},${bud_auth_NY[2]})`},
		  'OH':{fill:`rgb(${bud_auth_OH[0]},${bud_auth_OH[1]},${bud_auth_OH[2]})`},
		  'OK':{fill:`rgb(${bud_auth_OK[0]},${bud_auth_OK[1]},${bud_auth_OK[2]})`},
		  'OR':{fill:`rgb(${bud_auth_OR[0]},${bud_auth_OR[1]},${bud_auth_OR[2]})`},
		  'PA':{fill:`rgb(${bud_auth_PA[0]},${bud_auth_PA[1]},${bud_auth_PA[2]})`},
		  'RI':{fill:`rgb(${bud_auth_RI[0]},${bud_auth_RI[1]},${bud_auth_RI[2]})`},
		  'SC':{fill:`rgb(${bud_auth_SC[0]},${bud_auth_SC[1]},${bud_auth_SC[2]})`},
		  'SD':{fill:`rgb(${bud_auth_SD[0]},${bud_auth_SD[1]},${bud_auth_SD[2]})`},
		  'TN':{fill:`rgb(${bud_auth_TN[0]},${bud_auth_TN[1]},${bud_auth_TN[2]})`},
		  'TX':{fill:`rgb(${bud_auth_TX[0]},${bud_auth_TX[1]},${bud_auth_TX[2]})`},
		  'UT':{fill:`rgb(${bud_auth_UT[0]},${bud_auth_UT[1]},${bud_auth_UT[2]})`},
		  'VA':{fill:`rgb(${bud_auth_VA[0]},${bud_auth_VA[1]},${bud_auth_VA[2]})`},
		  'VT':{fill:`rgb(${bud_auth_VT[0]},${bud_auth_VT[1]},${bud_auth_VT[2]})`},
		  'WA':{fill:`rgb(${bud_auth_WA[0]},${bud_auth_WA[1]},${bud_auth_WA[2]})`},
		  'WI':{fill:`rgb(${bud_auth_WI[0]},${bud_auth_WI[1]},${bud_auth_WI[2]})`},
		  'WY':{fill:`rgb(${bud_auth_WY[0]},${bud_auth_WY[1]},${bud_auth_WY[2]})`},
		  'WV':{fill:`rgb(${bud_auth_WV[0]},${bud_auth_WV[1]},${bud_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#dru_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${dru_con_AK[0]},${dru_con_AK[1]},${dru_con_AK[2]})`},
		  'AL':{fill:`rgb(${dru_con_AL[0]},${dru_con_AL[1]},${dru_con_AL[2]})`},
		  'AR':{fill:`rgb(${dru_con_AR[0]},${dru_con_AR[1]},${dru_con_AR[2]})`},
		  'AZ':{fill:`rgb(${dru_con_AZ[0]},${dru_con_AZ[1]},${dru_con_AZ[2]})`},
		  'CA':{fill:`rgb(${dru_con_CA[0]},${dru_con_CA[1]},${dru_con_CA[2]})`},
		  'CO':{fill:`rgb(${dru_con_CO[0]},${dru_con_CO[1]},${dru_con_CO[2]})`},
		  'CT':{fill:`rgb(${dru_con_CT[0]},${dru_con_CT[1]},${dru_con_CT[2]})`},
		  'DC':{fill:`rgb(${dru_con_DC[0]},${dru_con_DC[1]},${dru_con_DC[2]})`},
		  'DE':{fill:`rgb(${dru_con_DE[0]},${dru_con_DE[1]},${dru_con_DE[2]})`},
		  'FL':{fill:`rgb(${dru_con_FL[0]},${dru_con_FL[1]},${dru_con_FL[2]})`},
		  'GA':{fill:`rgb(${dru_con_GA[0]},${dru_con_GA[1]},${dru_con_GA[2]})`},
		  'HI':{fill:`rgb(${dru_con_HI[0]},${dru_con_HI[1]},${dru_con_HI[2]})`},
		  'IA':{fill:`rgb(${dru_con_IA[0]},${dru_con_IA[1]},${dru_con_IA[2]})`},
		  'ID':{fill:`rgb(${dru_con_ID[0]},${dru_con_ID[1]},${dru_con_ID[2]})`},
		  'IL':{fill:`rgb(${dru_con_IL[0]},${dru_con_IL[1]},${dru_con_IL[2]})`},
		  'IN':{fill:`rgb(${dru_con_IN[0]},${dru_con_IN[1]},${dru_con_IN[2]})`},
		  'KS':{fill:`rgb(${dru_con_KS[0]},${dru_con_KS[1]},${dru_con_KS[2]})`},
		  'KY':{fill:`rgb(${dru_con_KY[0]},${dru_con_KY[1]},${dru_con_KY[2]})`},
		  'LA':{fill:`rgb(${dru_con_LA[0]},${dru_con_LA[1]},${dru_con_LA[2]})`},
		  'MA':{fill:`rgb(${dru_con_MA[0]},${dru_con_MA[1]},${dru_con_MA[2]})`},
		  'MD':{fill:`rgb(${dru_con_MD[0]},${dru_con_MD[1]},${dru_con_MD[2]})`},
		  'ME':{fill:`rgb(${dru_con_ME[0]},${dru_con_ME[1]},${dru_con_ME[2]})`},
		  'MI':{fill:`rgb(${dru_con_MI[0]},${dru_con_MI[1]},${dru_con_MI[2]})`},
		  'MN':{fill:`rgb(${dru_con_MN[0]},${dru_con_MN[1]},${dru_con_MN[2]})`},
		  'MO':{fill:`rgb(${dru_con_MO[0]},${dru_con_MO[1]},${dru_con_MO[2]})`},
		  'MS':{fill:`rgb(${dru_con_MS[0]},${dru_con_MS[1]},${dru_con_MS[2]})`},
		  'NC':{fill:`rgb(${dru_con_NC[0]},${dru_con_NC[1]},${dru_con_NC[2]})`},
		  'ND':{fill:`rgb(${dru_con_ND[0]},${dru_con_ND[1]},${dru_con_ND[2]})`},
		  'NE':{fill:`rgb(${dru_con_NE[0]},${dru_con_NE[1]},${dru_con_NE[2]})`},
		  'NH':{fill:`rgb(${dru_con_NH[0]},${dru_con_NH[1]},${dru_con_NH[2]})`},
		  'NJ':{fill:`rgb(${dru_con_NJ[0]},${dru_con_NJ[1]},${dru_con_NJ[2]})`},
		  'NM':{fill:`rgb(${dru_con_NM[0]},${dru_con_NM[1]},${dru_con_NM[2]})`},
		  'NV':{fill:`rgb(${dru_con_NV[0]},${dru_con_NV[1]},${dru_con_NV[2]})`},
		  'NY':{fill:`rgb(${dru_con_NY[0]},${dru_con_NY[1]},${dru_con_NY[2]})`},
		  'OH':{fill:`rgb(${dru_con_OH[0]},${dru_con_OH[1]},${dru_con_OH[2]})`},
		  'OK':{fill:`rgb(${dru_con_OK[0]},${dru_con_OK[1]},${dru_con_OK[2]})`},
		  'OR':{fill:`rgb(${dru_con_OR[0]},${dru_con_OR[1]},${dru_con_OR[2]})`},
		  'PA':{fill:`rgb(${dru_con_PA[0]},${dru_con_PA[1]},${dru_con_PA[2]})`},
		  'RI':{fill:`rgb(${dru_con_RI[0]},${dru_con_RI[1]},${dru_con_RI[2]})`},
		  'SC':{fill:`rgb(${dru_con_SC[0]},${dru_con_SC[1]},${dru_con_SC[2]})`},
		  'SD':{fill:`rgb(${dru_con_SD[0]},${dru_con_SD[1]},${dru_con_SD[2]})`},
		  'TN':{fill:`rgb(${dru_con_TN[0]},${dru_con_TN[1]},${dru_con_TN[2]})`},
		  'TX':{fill:`rgb(${dru_con_TX[0]},${dru_con_TX[1]},${dru_con_TX[2]})`},
		  'UT':{fill:`rgb(${dru_con_UT[0]},${dru_con_UT[1]},${dru_con_UT[2]})`},
		  'VA':{fill:`rgb(${dru_con_VA[0]},${dru_con_VA[1]},${dru_con_VA[2]})`},
		  'VT':{fill:`rgb(${dru_con_VT[0]},${dru_con_VT[1]},${dru_con_VT[2]})`},
		  'WA':{fill:`rgb(${dru_con_WA[0]},${dru_con_WA[1]},${dru_con_WA[2]})`},
		  'WI':{fill:`rgb(${dru_con_WI[0]},${dru_con_WI[1]},${dru_con_WI[2]})`},
		  'WY':{fill:`rgb(${dru_con_WY[0]},${dru_con_WY[1]},${dru_con_WY[2]})`},
		  'WV':{fill:`rgb(${dru_con_WV[0]},${dru_con_WV[1]},${dru_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#dru_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${dru_auth_AK[0]},${dru_auth_AK[1]},${dru_auth_AK[2]})`},
		  'AL':{fill:`rgb(${dru_auth_AL[0]},${dru_auth_AL[1]},${dru_auth_AL[2]})`},
		  'AR':{fill:`rgb(${dru_auth_AR[0]},${dru_auth_AR[1]},${dru_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${dru_auth_AZ[0]},${dru_auth_AZ[1]},${dru_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${dru_auth_CA[0]},${dru_auth_CA[1]},${dru_auth_CA[2]})`},
		  'CO':{fill:`rgb(${dru_auth_CO[0]},${dru_auth_CO[1]},${dru_auth_CO[2]})`},
		  'CT':{fill:`rgb(${dru_auth_CT[0]},${dru_auth_CT[1]},${dru_auth_CT[2]})`},
		  'DC':{fill:`rgb(${dru_auth_DC[0]},${dru_auth_DC[1]},${dru_auth_DC[2]})`},
		  'DE':{fill:`rgb(${dru_auth_DE[0]},${dru_auth_DE[1]},${dru_auth_DE[2]})`},
		  'FL':{fill:`rgb(${dru_auth_FL[0]},${dru_auth_FL[1]},${dru_auth_FL[2]})`},
		  'GA':{fill:`rgb(${dru_auth_GA[0]},${dru_auth_GA[1]},${dru_auth_GA[2]})`},
		  'HI':{fill:`rgb(${dru_auth_HI[0]},${dru_auth_HI[1]},${dru_auth_HI[2]})`},
		  'IA':{fill:`rgb(${dru_auth_IA[0]},${dru_auth_IA[1]},${dru_auth_IA[2]})`},
		  'ID':{fill:`rgb(${dru_auth_ID[0]},${dru_auth_ID[1]},${dru_auth_ID[2]})`},
		  'IL':{fill:`rgb(${dru_auth_IL[0]},${dru_auth_IL[1]},${dru_auth_IL[2]})`},
		  'IN':{fill:`rgb(${dru_auth_IN[0]},${dru_auth_IN[1]},${dru_auth_IN[2]})`},
		  'KS':{fill:`rgb(${dru_auth_KS[0]},${dru_auth_KS[1]},${dru_auth_KS[2]})`},
		  'KY':{fill:`rgb(${dru_auth_KY[0]},${dru_auth_KY[1]},${dru_auth_KY[2]})`},
		  'LA':{fill:`rgb(${dru_auth_LA[0]},${dru_auth_LA[1]},${dru_auth_LA[2]})`},
		  'MA':{fill:`rgb(${dru_auth_MA[0]},${dru_auth_MA[1]},${dru_auth_MA[2]})`},
		  'MD':{fill:`rgb(${dru_auth_MD[0]},${dru_auth_MD[1]},${dru_auth_MD[2]})`},
		  'ME':{fill:`rgb(${dru_auth_ME[0]},${dru_auth_ME[1]},${dru_auth_ME[2]})`},
		  'MI':{fill:`rgb(${dru_auth_MI[0]},${dru_auth_MI[1]},${dru_auth_MI[2]})`},
		  'MN':{fill:`rgb(${dru_auth_MN[0]},${dru_auth_MN[1]},${dru_auth_MN[2]})`},
		  'MO':{fill:`rgb(${dru_auth_MO[0]},${dru_auth_MO[1]},${dru_auth_MO[2]})`},
		  'MS':{fill:`rgb(${dru_auth_MS[0]},${dru_auth_MS[1]},${dru_auth_MS[2]})`},
		  'NC':{fill:`rgb(${dru_auth_NC[0]},${dru_auth_NC[1]},${dru_auth_NC[2]})`},
		  'ND':{fill:`rgb(${dru_auth_ND[0]},${dru_auth_ND[1]},${dru_auth_ND[2]})`},
		  'NE':{fill:`rgb(${dru_auth_NE[0]},${dru_auth_NE[1]},${dru_auth_NE[2]})`},
		  'NH':{fill:`rgb(${dru_auth_NH[0]},${dru_auth_NH[1]},${dru_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${dru_auth_NJ[0]},${dru_auth_NJ[1]},${dru_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${dru_auth_NM[0]},${dru_auth_NM[1]},${dru_auth_NM[2]})`},
		  'NV':{fill:`rgb(${dru_auth_NV[0]},${dru_auth_NV[1]},${dru_auth_NV[2]})`},
		  'NY':{fill:`rgb(${dru_auth_NY[0]},${dru_auth_NY[1]},${dru_auth_NY[2]})`},
		  'OH':{fill:`rgb(${dru_auth_OH[0]},${dru_auth_OH[1]},${dru_auth_OH[2]})`},
		  'OK':{fill:`rgb(${dru_auth_OK[0]},${dru_auth_OK[1]},${dru_auth_OK[2]})`},
		  'OR':{fill:`rgb(${dru_auth_OR[0]},${dru_auth_OR[1]},${dru_auth_OR[2]})`},
		  'PA':{fill:`rgb(${dru_auth_PA[0]},${dru_auth_PA[1]},${dru_auth_PA[2]})`},
		  'RI':{fill:`rgb(${dru_auth_RI[0]},${dru_auth_RI[1]},${dru_auth_RI[2]})`},
		  'SC':{fill:`rgb(${dru_auth_SC[0]},${dru_auth_SC[1]},${dru_auth_SC[2]})`},
		  'SD':{fill:`rgb(${dru_auth_SD[0]},${dru_auth_SD[1]},${dru_auth_SD[2]})`},
		  'TN':{fill:`rgb(${dru_auth_TN[0]},${dru_auth_TN[1]},${dru_auth_TN[2]})`},
		  'TX':{fill:`rgb(${dru_auth_TX[0]},${dru_auth_TX[1]},${dru_auth_TX[2]})`},
		  'UT':{fill:`rgb(${dru_auth_UT[0]},${dru_auth_UT[1]},${dru_auth_UT[2]})`},
		  'VA':{fill:`rgb(${dru_auth_VA[0]},${dru_auth_VA[1]},${dru_auth_VA[2]})`},
		  'VT':{fill:`rgb(${dru_auth_VT[0]},${dru_auth_VT[1]},${dru_auth_VT[2]})`},
		  'WA':{fill:`rgb(${dru_auth_WA[0]},${dru_auth_WA[1]},${dru_auth_WA[2]})`},
		  'WI':{fill:`rgb(${dru_auth_WI[0]},${dru_auth_WI[1]},${dru_auth_WI[2]})`},
		  'WY':{fill:`rgb(${dru_auth_WY[0]},${dru_auth_WY[1]},${dru_auth_WY[2]})`},
		  'WV':{fill:`rgb(${dru_auth_WV[0]},${dru_auth_WV[1]},${dru_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#tax_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${tax_con_AK[0]},${tax_con_AK[1]},${tax_con_AK[2]})`},
		  'AL':{fill:`rgb(${tax_con_AL[0]},${tax_con_AL[1]},${tax_con_AL[2]})`},
		  'AR':{fill:`rgb(${tax_con_AR[0]},${tax_con_AR[1]},${tax_con_AR[2]})`},
		  'AZ':{fill:`rgb(${tax_con_AZ[0]},${tax_con_AZ[1]},${tax_con_AZ[2]})`},
		  'CA':{fill:`rgb(${tax_con_CA[0]},${tax_con_CA[1]},${tax_con_CA[2]})`},
		  'CO':{fill:`rgb(${tax_con_CO[0]},${tax_con_CO[1]},${tax_con_CO[2]})`},
		  'CT':{fill:`rgb(${tax_con_CT[0]},${tax_con_CT[1]},${tax_con_CT[2]})`},
		  'DC':{fill:`rgb(${tax_con_DC[0]},${tax_con_DC[1]},${tax_con_DC[2]})`},
		  'DE':{fill:`rgb(${tax_con_DE[0]},${tax_con_DE[1]},${tax_con_DE[2]})`},
		  'FL':{fill:`rgb(${tax_con_FL[0]},${tax_con_FL[1]},${tax_con_FL[2]})`},
		  'GA':{fill:`rgb(${tax_con_GA[0]},${tax_con_GA[1]},${tax_con_GA[2]})`},
		  'HI':{fill:`rgb(${tax_con_HI[0]},${tax_con_HI[1]},${tax_con_HI[2]})`},
		  'IA':{fill:`rgb(${tax_con_IA[0]},${tax_con_IA[1]},${tax_con_IA[2]})`},
		  'ID':{fill:`rgb(${tax_con_ID[0]},${tax_con_ID[1]},${tax_con_ID[2]})`},
		  'IL':{fill:`rgb(${tax_con_IL[0]},${tax_con_IL[1]},${tax_con_IL[2]})`},
		  'IN':{fill:`rgb(${tax_con_IN[0]},${tax_con_IN[1]},${tax_con_IN[2]})`},
		  'KS':{fill:`rgb(${tax_con_KS[0]},${tax_con_KS[1]},${tax_con_KS[2]})`},
		  'KY':{fill:`rgb(${tax_con_KY[0]},${tax_con_KY[1]},${tax_con_KY[2]})`},
		  'LA':{fill:`rgb(${tax_con_LA[0]},${tax_con_LA[1]},${tax_con_LA[2]})`},
		  'MA':{fill:`rgb(${tax_con_MA[0]},${tax_con_MA[1]},${tax_con_MA[2]})`},
		  'MD':{fill:`rgb(${tax_con_MD[0]},${tax_con_MD[1]},${tax_con_MD[2]})`},
		  'ME':{fill:`rgb(${tax_con_ME[0]},${tax_con_ME[1]},${tax_con_ME[2]})`},
		  'MI':{fill:`rgb(${tax_con_MI[0]},${tax_con_MI[1]},${tax_con_MI[2]})`},
		  'MN':{fill:`rgb(${tax_con_MN[0]},${tax_con_MN[1]},${tax_con_MN[2]})`},
		  'MO':{fill:`rgb(${tax_con_MO[0]},${tax_con_MO[1]},${tax_con_MO[2]})`},
		  'MS':{fill:`rgb(${tax_con_MS[0]},${tax_con_MS[1]},${tax_con_MS[2]})`},
		  'NC':{fill:`rgb(${tax_con_NC[0]},${tax_con_NC[1]},${tax_con_NC[2]})`},
		  'ND':{fill:`rgb(${tax_con_ND[0]},${tax_con_ND[1]},${tax_con_ND[2]})`},
		  'NE':{fill:`rgb(${tax_con_NE[0]},${tax_con_NE[1]},${tax_con_NE[2]})`},
		  'NH':{fill:`rgb(${tax_con_NH[0]},${tax_con_NH[1]},${tax_con_NH[2]})`},
		  'NJ':{fill:`rgb(${tax_con_NJ[0]},${tax_con_NJ[1]},${tax_con_NJ[2]})`},
		  'NM':{fill:`rgb(${tax_con_NM[0]},${tax_con_NM[1]},${tax_con_NM[2]})`},
		  'NV':{fill:`rgb(${tax_con_NV[0]},${tax_con_NV[1]},${tax_con_NV[2]})`},
		  'NY':{fill:`rgb(${tax_con_NY[0]},${tax_con_NY[1]},${tax_con_NY[2]})`},
		  'OH':{fill:`rgb(${tax_con_OH[0]},${tax_con_OH[1]},${tax_con_OH[2]})`},
		  'OK':{fill:`rgb(${tax_con_OK[0]},${tax_con_OK[1]},${tax_con_OK[2]})`},
		  'OR':{fill:`rgb(${tax_con_OR[0]},${tax_con_OR[1]},${tax_con_OR[2]})`},
		  'PA':{fill:`rgb(${tax_con_PA[0]},${tax_con_PA[1]},${tax_con_PA[2]})`},
		  'RI':{fill:`rgb(${tax_con_RI[0]},${tax_con_RI[1]},${tax_con_RI[2]})`},
		  'SC':{fill:`rgb(${tax_con_SC[0]},${tax_con_SC[1]},${tax_con_SC[2]})`},
		  'SD':{fill:`rgb(${tax_con_SD[0]},${tax_con_SD[1]},${tax_con_SD[2]})`},
		  'TN':{fill:`rgb(${tax_con_TN[0]},${tax_con_TN[1]},${tax_con_TN[2]})`},
		  'TX':{fill:`rgb(${tax_con_TX[0]},${tax_con_TX[1]},${tax_con_TX[2]})`},
		  'UT':{fill:`rgb(${tax_con_UT[0]},${tax_con_UT[1]},${tax_con_UT[2]})`},
		  'VA':{fill:`rgb(${tax_con_VA[0]},${tax_con_VA[1]},${tax_con_VA[2]})`},
		  'VT':{fill:`rgb(${tax_con_VT[0]},${tax_con_VT[1]},${tax_con_VT[2]})`},
		  'WA':{fill:`rgb(${tax_con_WA[0]},${tax_con_WA[1]},${tax_con_WA[2]})`},
		  'WI':{fill:`rgb(${tax_con_WI[0]},${tax_con_WI[1]},${tax_con_WI[2]})`},
		  'WY':{fill:`rgb(${tax_con_WY[0]},${tax_con_WY[1]},${tax_con_WY[2]})`},
		  'WV':{fill:`rgb(${tax_con_WV[0]},${tax_con_WV[1]},${tax_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#tax_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${tax_auth_AK[0]},${tax_auth_AK[1]},${tax_auth_AK[2]})`},
		  'AL':{fill:`rgb(${tax_auth_AL[0]},${tax_auth_AL[1]},${tax_auth_AL[2]})`},
		  'AR':{fill:`rgb(${tax_auth_AR[0]},${tax_auth_AR[1]},${tax_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${tax_auth_AZ[0]},${tax_auth_AZ[1]},${tax_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${tax_auth_CA[0]},${tax_auth_CA[1]},${tax_auth_CA[2]})`},
		  'CO':{fill:`rgb(${tax_auth_CO[0]},${tax_auth_CO[1]},${tax_auth_CO[2]})`},
		  'CT':{fill:`rgb(${tax_auth_CT[0]},${tax_auth_CT[1]},${tax_auth_CT[2]})`},
		  'DC':{fill:`rgb(${tax_auth_DC[0]},${tax_auth_DC[1]},${tax_auth_DC[2]})`},
		  'DE':{fill:`rgb(${tax_auth_DE[0]},${tax_auth_DE[1]},${tax_auth_DE[2]})`},
		  'FL':{fill:`rgb(${tax_auth_FL[0]},${tax_auth_FL[1]},${tax_auth_FL[2]})`},
		  'GA':{fill:`rgb(${tax_auth_GA[0]},${tax_auth_GA[1]},${tax_auth_GA[2]})`},
		  'HI':{fill:`rgb(${tax_auth_HI[0]},${tax_auth_HI[1]},${tax_auth_HI[2]})`},
		  'IA':{fill:`rgb(${tax_auth_IA[0]},${tax_auth_IA[1]},${tax_auth_IA[2]})`},
		  'ID':{fill:`rgb(${tax_auth_ID[0]},${tax_auth_ID[1]},${tax_auth_ID[2]})`},
		  'IL':{fill:`rgb(${tax_auth_IL[0]},${tax_auth_IL[1]},${tax_auth_IL[2]})`},
		  'IN':{fill:`rgb(${tax_auth_IN[0]},${tax_auth_IN[1]},${tax_auth_IN[2]})`},
		  'KS':{fill:`rgb(${tax_auth_KS[0]},${tax_auth_KS[1]},${tax_auth_KS[2]})`},
		  'KY':{fill:`rgb(${tax_auth_KY[0]},${tax_auth_KY[1]},${tax_auth_KY[2]})`},
		  'LA':{fill:`rgb(${tax_auth_LA[0]},${tax_auth_LA[1]},${tax_auth_LA[2]})`},
		  'MA':{fill:`rgb(${tax_auth_MA[0]},${tax_auth_MA[1]},${tax_auth_MA[2]})`},
		  'MD':{fill:`rgb(${tax_auth_MD[0]},${tax_auth_MD[1]},${tax_auth_MD[2]})`},
		  'ME':{fill:`rgb(${tax_auth_ME[0]},${tax_auth_ME[1]},${tax_auth_ME[2]})`},
		  'MI':{fill:`rgb(${tax_auth_MI[0]},${tax_auth_MI[1]},${tax_auth_MI[2]})`},
		  'MN':{fill:`rgb(${tax_auth_MN[0]},${tax_auth_MN[1]},${tax_auth_MN[2]})`},
		  'MO':{fill:`rgb(${tax_auth_MO[0]},${tax_auth_MO[1]},${tax_auth_MO[2]})`},
		  'MS':{fill:`rgb(${tax_auth_MS[0]},${tax_auth_MS[1]},${tax_auth_MS[2]})`},
		  'NC':{fill:`rgb(${tax_auth_NC[0]},${tax_auth_NC[1]},${tax_auth_NC[2]})`},
		  'ND':{fill:`rgb(${tax_auth_ND[0]},${tax_auth_ND[1]},${tax_auth_ND[2]})`},
		  'NE':{fill:`rgb(${tax_auth_NE[0]},${tax_auth_NE[1]},${tax_auth_NE[2]})`},
		  'NH':{fill:`rgb(${tax_auth_NH[0]},${tax_auth_NH[1]},${tax_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${tax_auth_NJ[0]},${tax_auth_NJ[1]},${tax_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${tax_auth_NM[0]},${tax_auth_NM[1]},${tax_auth_NM[2]})`},
		  'NV':{fill:`rgb(${tax_auth_NV[0]},${tax_auth_NV[1]},${tax_auth_NV[2]})`},
		  'NY':{fill:`rgb(${tax_auth_NY[0]},${tax_auth_NY[1]},${tax_auth_NY[2]})`},
		  'OH':{fill:`rgb(${tax_auth_OH[0]},${tax_auth_OH[1]},${tax_auth_OH[2]})`},
		  'OK':{fill:`rgb(${tax_auth_OK[0]},${tax_auth_OK[1]},${tax_auth_OK[2]})`},
		  'OR':{fill:`rgb(${tax_auth_OR[0]},${tax_auth_OR[1]},${tax_auth_OR[2]})`},
		  'PA':{fill:`rgb(${tax_auth_PA[0]},${tax_auth_PA[1]},${tax_auth_PA[2]})`},
		  'RI':{fill:`rgb(${tax_auth_RI[0]},${tax_auth_RI[1]},${tax_auth_RI[2]})`},
		  'SC':{fill:`rgb(${tax_auth_SC[0]},${tax_auth_SC[1]},${tax_auth_SC[2]})`},
		  'SD':{fill:`rgb(${tax_auth_SD[0]},${tax_auth_SD[1]},${tax_auth_SD[2]})`},
		  'TN':{fill:`rgb(${tax_auth_TN[0]},${tax_auth_TN[1]},${tax_auth_TN[2]})`},
		  'TX':{fill:`rgb(${tax_auth_TX[0]},${tax_auth_TX[1]},${tax_auth_TX[2]})`},
		  'UT':{fill:`rgb(${tax_auth_UT[0]},${tax_auth_UT[1]},${tax_auth_UT[2]})`},
		  'VA':{fill:`rgb(${tax_auth_VA[0]},${tax_auth_VA[1]},${tax_auth_VA[2]})`},
		  'VT':{fill:`rgb(${tax_auth_VT[0]},${tax_auth_VT[1]},${tax_auth_VT[2]})`},
		  'WA':{fill:`rgb(${tax_auth_WA[0]},${tax_auth_WA[1]},${tax_auth_WA[2]})`},
		  'WI':{fill:`rgb(${tax_auth_WI[0]},${tax_auth_WI[1]},${tax_auth_WI[2]})`},
		  'WY':{fill:`rgb(${tax_auth_WY[0]},${tax_auth_WY[1]},${tax_auth_WY[2]})`},
		  'WV':{fill:`rgb(${tax_auth_WV[0]},${tax_auth_WV[1]},${tax_auth_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#edu_con').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${edu_con_AK[0]},${edu_con_AK[1]},${edu_con_AK[2]})`},
		  'AL':{fill:`rgb(${edu_con_AL[0]},${edu_con_AL[1]},${edu_con_AL[2]})`},
		  'AR':{fill:`rgb(${edu_con_AR[0]},${edu_con_AR[1]},${edu_con_AR[2]})`},
		  'AZ':{fill:`rgb(${edu_con_AZ[0]},${edu_con_AZ[1]},${edu_con_AZ[2]})`},
		  'CA':{fill:`rgb(${edu_con_CA[0]},${edu_con_CA[1]},${edu_con_CA[2]})`},
		  'CO':{fill:`rgb(${edu_con_CO[0]},${edu_con_CO[1]},${edu_con_CO[2]})`},
		  'CT':{fill:`rgb(${edu_con_CT[0]},${edu_con_CT[1]},${edu_con_CT[2]})`},
		  'DC':{fill:`rgb(${edu_con_DC[0]},${edu_con_DC[1]},${edu_con_DC[2]})`},
		  'DE':{fill:`rgb(${edu_con_DE[0]},${edu_con_DE[1]},${edu_con_DE[2]})`},
		  'FL':{fill:`rgb(${edu_con_FL[0]},${edu_con_FL[1]},${edu_con_FL[2]})`},
		  'GA':{fill:`rgb(${edu_con_GA[0]},${edu_con_GA[1]},${edu_con_GA[2]})`},
		  'HI':{fill:`rgb(${edu_con_HI[0]},${edu_con_HI[1]},${edu_con_HI[2]})`},
		  'IA':{fill:`rgb(${edu_con_IA[0]},${edu_con_IA[1]},${edu_con_IA[2]})`},
		  'ID':{fill:`rgb(${edu_con_ID[0]},${edu_con_ID[1]},${edu_con_ID[2]})`},
		  'IL':{fill:`rgb(${edu_con_IL[0]},${edu_con_IL[1]},${edu_con_IL[2]})`},
		  'IN':{fill:`rgb(${edu_con_IN[0]},${edu_con_IN[1]},${edu_con_IN[2]})`},
		  'KS':{fill:`rgb(${edu_con_KS[0]},${edu_con_KS[1]},${edu_con_KS[2]})`},
		  'KY':{fill:`rgb(${edu_con_KY[0]},${edu_con_KY[1]},${edu_con_KY[2]})`},
		  'LA':{fill:`rgb(${edu_con_LA[0]},${edu_con_LA[1]},${edu_con_LA[2]})`},
		  'MA':{fill:`rgb(${edu_con_MA[0]},${edu_con_MA[1]},${edu_con_MA[2]})`},
		  'MD':{fill:`rgb(${edu_con_MD[0]},${edu_con_MD[1]},${edu_con_MD[2]})`},
		  'ME':{fill:`rgb(${edu_con_ME[0]},${edu_con_ME[1]},${edu_con_ME[2]})`},
		  'MI':{fill:`rgb(${edu_con_MI[0]},${edu_con_MI[1]},${edu_con_MI[2]})`},
		  'MN':{fill:`rgb(${edu_con_MN[0]},${edu_con_MN[1]},${edu_con_MN[2]})`},
		  'MO':{fill:`rgb(${edu_con_MO[0]},${edu_con_MO[1]},${edu_con_MO[2]})`},
		  'MS':{fill:`rgb(${edu_con_MS[0]},${edu_con_MS[1]},${edu_con_MS[2]})`},
		  'NC':{fill:`rgb(${edu_con_NC[0]},${edu_con_NC[1]},${edu_con_NC[2]})`},
		  'ND':{fill:`rgb(${edu_con_ND[0]},${edu_con_ND[1]},${edu_con_ND[2]})`},
		  'NE':{fill:`rgb(${edu_con_NE[0]},${edu_con_NE[1]},${edu_con_NE[2]})`},
		  'NH':{fill:`rgb(${edu_con_NH[0]},${edu_con_NH[1]},${edu_con_NH[2]})`},
		  'NJ':{fill:`rgb(${edu_con_NJ[0]},${edu_con_NJ[1]},${edu_con_NJ[2]})`},
		  'NM':{fill:`rgb(${edu_con_NM[0]},${edu_con_NM[1]},${edu_con_NM[2]})`},
		  'NV':{fill:`rgb(${edu_con_NV[0]},${edu_con_NV[1]},${edu_con_NV[2]})`},
		  'NY':{fill:`rgb(${edu_con_NY[0]},${edu_con_NY[1]},${edu_con_NY[2]})`},
		  'OH':{fill:`rgb(${edu_con_OH[0]},${edu_con_OH[1]},${edu_con_OH[2]})`},
		  'OK':{fill:`rgb(${edu_con_OK[0]},${edu_con_OK[1]},${edu_con_OK[2]})`},
		  'OR':{fill:`rgb(${edu_con_OR[0]},${edu_con_OR[1]},${edu_con_OR[2]})`},
		  'PA':{fill:`rgb(${edu_con_PA[0]},${edu_con_PA[1]},${edu_con_PA[2]})`},
		  'RI':{fill:`rgb(${edu_con_RI[0]},${edu_con_RI[1]},${edu_con_RI[2]})`},
		  'SC':{fill:`rgb(${edu_con_SC[0]},${edu_con_SC[1]},${edu_con_SC[2]})`},
		  'SD':{fill:`rgb(${edu_con_SD[0]},${edu_con_SD[1]},${edu_con_SD[2]})`},
		  'TN':{fill:`rgb(${edu_con_TN[0]},${edu_con_TN[1]},${edu_con_TN[2]})`},
		  'TX':{fill:`rgb(${edu_con_TX[0]},${edu_con_TX[1]},${edu_con_TX[2]})`},
		  'UT':{fill:`rgb(${edu_con_UT[0]},${edu_con_UT[1]},${edu_con_UT[2]})`},
		  'VA':{fill:`rgb(${edu_con_VA[0]},${edu_con_VA[1]},${edu_con_VA[2]})`},
		  'VT':{fill:`rgb(${edu_con_VT[0]},${edu_con_VT[1]},${edu_con_VT[2]})`},
		  'WA':{fill:`rgb(${edu_con_WA[0]},${edu_con_WA[1]},${edu_con_WA[2]})`},
		  'WI':{fill:`rgb(${edu_con_WI[0]},${edu_con_WI[1]},${edu_con_WI[2]})`},
		  'WY':{fill:`rgb(${edu_con_WY[0]},${edu_con_WY[1]},${edu_con_WY[2]})`},
		  'WV':{fill:`rgb(${edu_con_WV[0]},${edu_con_WV[1]},${edu_con_WV[2]})`},

		  },
		  stateHoverStyles: {fill: 'orange'},
		  click: function(event, data) {
		      window.location = "PoliticiansByState.php?State=" + data.name;
		  }
		});
		$('#edu_auth').usmap({
		  // The click action
		  stateSpecificStyles:{

		  'AK':{fill:`rgb(${edu_auth_AK[0]},${edu_auth_AK[1]},${edu_auth_AK[2]})`},
		  'AL':{fill:`rgb(${edu_auth_AL[0]},${edu_auth_AL[1]},${edu_auth_AL[2]})`},
		  'AR':{fill:`rgb(${edu_auth_AR[0]},${edu_auth_AR[1]},${edu_auth_AR[2]})`},
		  'AZ':{fill:`rgb(${edu_auth_AZ[0]},${edu_auth_AZ[1]},${edu_auth_AZ[2]})`},
		  'CA':{fill:`rgb(${edu_auth_CA[0]},${edu_auth_CA[1]},${edu_auth_CA[2]})`},
		  'CO':{fill:`rgb(${edu_auth_CO[0]},${edu_auth_CO[1]},${edu_auth_CO[2]})`},
		  'CT':{fill:`rgb(${edu_auth_CT[0]},${edu_auth_CT[1]},${edu_auth_CT[2]})`},
		  'DC':{fill:`rgb(${edu_auth_DC[0]},${edu_auth_DC[1]},${edu_auth_DC[2]})`},
		  'DE':{fill:`rgb(${edu_auth_DE[0]},${edu_auth_DE[1]},${edu_auth_DE[2]})`},
		  'FL':{fill:`rgb(${edu_auth_FL[0]},${edu_auth_FL[1]},${edu_auth_FL[2]})`},
		  'GA':{fill:`rgb(${edu_auth_GA[0]},${edu_auth_GA[1]},${edu_auth_GA[2]})`},
		  'HI':{fill:`rgb(${edu_auth_HI[0]},${edu_auth_HI[1]},${edu_auth_HI[2]})`},
		  'IA':{fill:`rgb(${edu_auth_IA[0]},${edu_auth_IA[1]},${edu_auth_IA[2]})`},
		  'ID':{fill:`rgb(${edu_auth_ID[0]},${edu_auth_ID[1]},${edu_auth_ID[2]})`},
		  'IL':{fill:`rgb(${edu_auth_IL[0]},${edu_auth_IL[1]},${edu_auth_IL[2]})`},
		  'IN':{fill:`rgb(${edu_auth_IN[0]},${edu_auth_IN[1]},${edu_auth_IN[2]})`},
		  'KS':{fill:`rgb(${edu_auth_KS[0]},${edu_auth_KS[1]},${edu_auth_KS[2]})`},
		  'KY':{fill:`rgb(${edu_auth_KY[0]},${edu_auth_KY[1]},${edu_auth_KY[2]})`},
		  'LA':{fill:`rgb(${edu_auth_LA[0]},${edu_auth_LA[1]},${edu_auth_LA[2]})`},
		  'MA':{fill:`rgb(${edu_auth_MA[0]},${edu_auth_MA[1]},${edu_auth_MA[2]})`},
		  'MD':{fill:`rgb(${edu_auth_MD[0]},${edu_auth_MD[1]},${edu_auth_MD[2]})`},
		  'ME':{fill:`rgb(${edu_auth_ME[0]},${edu_auth_ME[1]},${edu_auth_ME[2]})`},
		  'MI':{fill:`rgb(${edu_auth_MI[0]},${edu_auth_MI[1]},${edu_auth_MI[2]})`},
		  'MN':{fill:`rgb(${edu_auth_MN[0]},${edu_auth_MN[1]},${edu_auth_MN[2]})`},
		  'MO':{fill:`rgb(${edu_auth_MO[0]},${edu_auth_MO[1]},${edu_auth_MO[2]})`},
		  'MS':{fill:`rgb(${edu_auth_MS[0]},${edu_auth_MS[1]},${edu_auth_MS[2]})`},
		  'NC':{fill:`rgb(${edu_auth_NC[0]},${edu_auth_NC[1]},${edu_auth_NC[2]})`},
		  'ND':{fill:`rgb(${edu_auth_ND[0]},${edu_auth_ND[1]},${edu_auth_ND[2]})`},
		  'NE':{fill:`rgb(${edu_auth_NE[0]},${edu_auth_NE[1]},${edu_auth_NE[2]})`},
		  'NH':{fill:`rgb(${edu_auth_NH[0]},${edu_auth_NH[1]},${edu_auth_NH[2]})`},
		  'NJ':{fill:`rgb(${edu_auth_NJ[0]},${edu_auth_NJ[1]},${edu_auth_NJ[2]})`},
		  'NM':{fill:`rgb(${edu_auth_NM[0]},${edu_auth_NM[1]},${edu_auth_NM[2]})`},
		  'NV':{fill:`rgb(${edu_auth_NV[0]},${edu_auth_NV[1]},${edu_auth_NV[2]})`},
		  'NY':{fill:`rgb(${edu_auth_NY[0]},${edu_auth_NY[1]},${edu_auth_NY[2]})`},
		  'OH':{fill:`rgb(${edu_auth_OH[0]},${edu_auth_OH[1]},${edu_auth_OH[2]})`},
		  'OK':{fill:`rgb(${edu_auth_OK[0]},${edu_auth_OK[1]},${edu_auth_OK[2]})`},
		  'OR':{fill:`rgb(${edu_auth_OR[0]},${edu_auth_OR[1]},${edu_auth_OR[2]})`},
		  'PA':{fill:`rgb(${edu_auth_PA[0]},${edu_auth_PA[1]},${edu_auth_PA[2]})`},
		  'RI':{fill:`rgb(${edu_auth_RI[0]},${edu_auth_RI[1]},${edu_auth_RI[2]})`},
		  'SC':{fill:`rgb(${edu_auth_SC[0]},${edu_auth_SC[1]},${edu_auth_SC[2]})`},
		  'SD':{fill:`rgb(${edu_auth_SD[0]},${edu_auth_SD[1]},${edu_auth_SD[2]})`},
		  'TN':{fill:`rgb(${edu_auth_TN[0]},${edu_auth_TN[1]},${edu_auth_TN[2]})`},
		  'TX':{fill:`rgb(${edu_auth_TX[0]},${edu_auth_TX[1]},${edu_auth_TX[2]})`},
		  'UT':{fill:`rgb(${edu_auth_UT[0]},${edu_auth_UT[1]},${edu_auth_UT[2]})`},
		  'VA':{fill:`rgb(${edu_auth_VA[0]},${edu_auth_VA[1]},${edu_auth_VA[2]})`},
		  'VT':{fill:`rgb(${edu_auth_VT[0]},${edu_auth_VT[1]},${edu_auth_VT[2]})`},
		  'WA':{fill:`rgb(${edu_auth_WA[0]},${edu_auth_WA[1]},${edu_auth_WA[2]})`},
		  'WI':{fill:`rgb(${edu_auth_WI[0]},${edu_auth_WI[1]},${edu_auth_WI[2]})`},
		  'WY':{fill:`rgb(${edu_auth_WY[0]},${edu_auth_WY[1]},${edu_auth_WY[2]})`},
		  'WV':{fill:`rgb(${edu_auth_WV[0]},${edu_auth_WV[1]},${edu_auth_WV[2]})`},

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


