// JavaScript Document
function filter_factory(factory){
	var elem = factory;
	var result = data.filter(function(field) {
	  return elem.indexOf(field.factory) > -1
	})
	return result;
}

function filter_time(number,unit,res){
	//Convert to minutes depending on units
	if(unit==1){f_num=number}else{f_num=number*60};
	var elem = f_num.toString();
	var result1 = res.filter(function(field) {
		if(parseInt(field.minutes_ago) > parseInt(f_num)){
		 return elem.indexOf(field.minutes_ago);			
		}
	})
	return result1;
}

function filter_col(){
	cols=[];
	document.getElementById('sel_col').style.visibility='visible';
	if(document.getElementById('TIME').checked==true){cols.push("time");}
	if(document.getElementById('HOURS_AGO').checked==true){cols.push("hours_ago");}
	if(document.getElementById('MINUTES_AGO').checked==true){cols.push("minutes_ago");}
	if(document.getElementById('FACTORY').checked==true){cols.push("factory");}
	load_res(cols);
}

// Loads the results in the DIV
function load_res(cols){
	//Linking HTML elements
	var div = document.getElementById("lista");
	var factory = document.getElementById('factory').value;
	var number = document.getElementById('number').value;
	var units = document.getElementById('units').value;
	var lista = document.getElementById('lista').value;	

	var res = filter_factory(factory);	
	var res1 = filter_time(number,units,res,cols);

		//Building the table
		var table = document.createElement("TABLE");			
		n_fil=res1.length;  //rows number
		n_elem = 0; //Getting max elements number from results
		
		n_col = cols.length;  //columns number
		
			// Build the header
			row0 = document.createElement("tr");
			row0.setAttribute("onClick", "muestra('sel_col')");
			row0.setAttribute("style", "cursor:pointer; width:100px;");
			var txt_cel1=[];
			for (v=0;v<n_col;v++){
				var cel0 = document.createElement("td");
				row0.setAttribute("style", "cursor:pointer; width:100px;");				
				var txt_cel0 = document.createTextNode(cols[v].toUpperCase());
				txt_cel1[v] = document.createTextNode(cols[v]).toString();
				cel0.appendChild(txt_cel0);
				row0.appendChild(cel0);
			}
			var cel0 = document.createElement("td");
			var txt_cel0 = document.createTextNode('WIDGETS');
			cel0.appendChild(txt_cel0);
			row0.appendChild(cel0);
			// Build the table body
				var tblBody = document.createElement("TBODY");
				for (var i = 0; i < n_fil; i++) {
					var row = document.createElement("tr");
					
					for (var j = 0; j < n_col; j++) {
					  var cel = document.createElement("td");
					  cel.setAttribute("style", "width:100px;");
					  var keys = Object.keys(res1[i]);
					  var vals = Object.values(res1[i]);
					  
					  name_col = cols[j];
					  indice = keys.indexOf(name_col);
					  console.log(vals[indice]);
					  if (cols.indexOf(name_col)>-1){
					  //alert(key[0]);return;
						  var txt_cel = document.createTextNode(vals[indice]);
						  cel.appendChild(txt_cel);
						  row.appendChild(cel);
						  row.className="l_tr";
					  }
					}
					
					
					
					row.className="l_tr";
					var table1 = document.createElement("TABLE");
					table1.setAttribute("style", "width:100%;border:1px solid #000");
					var tblBody1 = document.createElement("TBODY");
					var row1 = document.createElement("tr");
					wid=res1[i].widgets;
					n_wid=Object.keys(wid).length;
					for(v=0;v<n_wid;v++){
						var val = Object.values(wid);
						var key = Object.keys(wid);
						//console.log(val[v]);
						var cel1 = document.createElement("td");
						var color="";
						if(key[v]=='blue' && val[v]!=0){var color="#1F44A7"}
						if(key[v]=='red' && val[v]!=0){var color="#bb230a"}
						if(key[v]=='green' && val[v]!=0){var color="#6B941F"}
						if(key[v]=='yellow' && val[v]!=0){var color="#A4990F"}
						cel1.setAttribute('style','text-align:center; color:#FFF; background-color:'+color);
						var txt_cel1 = document.createTextNode(val[v]);
						cel1.appendChild(txt_cel1);
					  	row1.appendChild(cel1);
					}
					table1.appendChild(row1);
					row.appendChild(table1);
					//console.log(row);
					tblBody.appendChild(row);
				 }
  div.innerHTML = "";
  table.appendChild(row0);
  table.appendChild(tblBody);
  div.appendChild(table);
  table.className = "body1";
}