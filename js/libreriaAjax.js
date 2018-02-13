// Creación del objeto XMLHttpRequest.
us_val=0;
cont_inicial="";
menu_sel=0;

function foco(){
    contenedor = document.getElementById('usuario');
	contenedor.focus();
}

function nuevoAjax(xmlhttp){
     try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP.5.0");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
 
function cargarLogin(pagina,destino){
    var contenedor;
    var ajax;
    contenedor = document.getElementById(destino);
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, true);
	
    ajax.onreadystatechange=function() {

        if (ajax.readyState==4) {
			if (ajax.responseText=="X"){
				contenedor = document.getElementById('head_login');
				contenedor.style.backgroundColor = "#B8492D";
				contenedor = document.getElementById('aviso');
				contenedor.innerHTML = "USUARIO Y/O CLAVE INCORRECTOS";
			}else{
				cargarContenido0(ajax.responseText,'data');	
			}
        }
    }
    ajax.send(null);
}


function cargarContenido0(pagina,destino,par){ // EVITA CACHE
    var contenedor;
    var ajax;
	contenedor = parent.window.document.getElementById(destino);
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, false);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send(null);
}

function cargarContenido(pagina,destino){ //PAGINA CONTENIDO
    var contenedor;
    var ajax;
	contenedor = parent.window.document.getElementById(destino);
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, false);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send(null);
}

function cierra_det(obj){
contenedor = document.getElementById(obj);
contenedor.innerHTML = "";
	}

function cargarContenido1(pagina,destino){
    var contenedor;
    var ajax;
	contenedor = parent.document.getElementById(destino);
		code = displayTime();
		pagina = pagina + "&code="+code;	
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, true);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
			if (ajax.responseText == "X"){	
			
			}		
			contenedor.innerHTML = ajax.responseText;			
        }
    }
    ajax.send(null);
}

function cargarContenido2(pagina,destino){
		tabla=document.getElementById('tabla'); filtro = tabla.contentWindow;
		tipo1 = filtro.document.getElementById('tipo1').value;
		area1 = filtro.document.getElementById('area1').value;		
		zona1 = filtro.document.getElementById('zona1').value;
		item1 = filtro.document.getElementById('item1').value;
		usuario1 = filtro.document.getElementById('usuario1').value;
		cargo1 = filtro.document.getElementById('cargo1').value;
		activo1 = filtro.document.getElementById('activo1').value;		
		serie1 = filtro.document.getElementById('serie1').value;
		campo1 = filtro.document.getElementById('campo').value;
		comp1 = filtro.document.getElementById('comp').value;
		txt1 = filtro.document.getElementById('txt').value;
		campo2 = filtro.document.getElementById('campo1').value;
		comp2 = filtro.document.getElementById('comp1').value;
		txt2 = filtro.document.getElementById('txt1').value;
		
		
		tit_filtro = filtro.document.getElementById('filt');tit_busq = filtro.document.getElementById('busq');

		if (tipo1!=0 || area1!=0 || zona1!=0 || item1!=0){tit_filtro.style.backgroundColor = "#597014"; tit_filtro.style.color="#FFF"}else{tit_filtro.style.backgroundColor = "#454344"; tit_filtro.style.color="#CCC";}
		if (usuario1!="" || cargo1!="" || activo1!="" || serie1!=""){tit_busq.style.backgroundColor = "#597014"; tit_busq.style.color="#FFF"}else{tit_busq.style.backgroundColor = "#454344"; tit_busq.style.color="#CCC";}				
		
		pagina = pagina+"?tipo="+tipo1+"&area="+area1+"&zona="+zona1+"&item="+item1+"&usuario="+usuario1+"&cargo="+cargo1+"&activo="+activo1+"&serie="+serie1+"&campo="+campo1+"&comp="+comp1+"&txt="+txt1+"&campo1="+campo2+"&comp1="+comp2+"&txt1="+txt2;	
	
    var contenedor;
    var ajax;
	contenedor = parent.document.getElementById(destino);
		code = displayTime();
		pagina = pagina + "&code="+code;	
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, true);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {	
			contenedor.innerHTML = ajax.responseText;			
        }
    }
    ajax.send(null);
}



function cargarInformes(pagina,destino,par){
    var contenedor;
    var ajax;
	//alert(pagina);
	contenedor = document.getElementById(destino);
	if (pagina=="reporte_dia_x_proyecto.php" || pagina=="reporte_semana_x_proyecto.php" || pagina=="reporte_diario_semana_x_proyecto.php" || pagina=="reporte_dia_x_turno.php"){
		contenedor1 = document.getElementById('cont_extra');
		
			if (pagina=="reporte_semana_x_proyecto.php" || pagina=="reporte_diario_semana_x_proyecto.php"){
				str = activa_fecha1(pagina);
			}else{
				str = activa_fecha(pagina);	
			}
		contenedor1.innerHTML =  str;
		desde = document.getElementById("desde1").value;
		hasta= document.getElementById("hasta1").value;
		if (desde==""){desde=fecha_esp;hasta=fecha_esp;}
		pagina = pagina + "?desde="+desde+"&hasta="+hasta;
	}else{
		contenedor1 = document.getElementById('cont_extra');
		str = activa_agno(pagina);		
		contenedor1.innerHTML =  str;
		contenedor4 = document.getElementById("agno");			
		pagina = pagina + "?agno="+contenedor4.value;				
	}
	//alert(pagina);	
    ajax = nuevoAjax(ajax);
    ajax.open("POST", pagina, true);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send(null);
}


function grafica(pagina,destino,par){
    var contenedor;
    var ajax;
	contenedor = document.getElementById('plantilla');
	pagina= "gr_"+contenedor.value;
	//alert(pagina);
	if(pagina=="gr_blank.php?proyecto="){alert("Debe seleccionar un Informe de la lista"); return;}
	if(pagina=='gr_reporte_dia_x_proyecto.php' || pagina=='gr_reporte_semana_x_proyecto.php' || pagina=='gr_reporte_diario_semana_x_proyecto.php' || pagina=="gr_reporte_dia_x_turno.php"){
		desde = document.getElementById('desde1').value;
		hasta = document.getElementById('hasta1').value;
		pagina=pagina+"?desde="+desde+"&hasta="+hasta;	
		}else{
		agno = document.getElementById('agno').value;
		pagina=pagina+"?agno="+agno;		
	}
	contenedor = document.getElementById('cont_graf');
	//alert(pagina);
	//contenedor1 = document.getElementById('temp');
	//contenedor1.innerHTML = pagina;
	contenedor.innerHTML = "<iframe id='graf' src='"+pagina+"' style='width:100%;height:550px;' seamless></iframe>";	
}

function grafica_det(pagina,destino,par){
    var contenedor;
    var ajax;
	obj = "serie_"+par;
	contenedor = document.getElementById(obj);
	agno = document.getElementById('agno').value;
	pagina = pagina + "?serie="+contenedor.value+"&mes="+par+"&agno="+agno;
	//alert(pagina);
	contenedor = document.getElementById('cont_graf');
	//alert(pagina);
	//contenedor1 = document.getElementById('temp');
	//contenedor1.innerHTML = pagina;
	contenedor.innerHTML = "<iframe id='graf' src='"+pagina+"' style='width:100%;height:450px;' seamless></iframe>";	
}


function activa_fecha(pagina1){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd};
		if(mm<10){mm='0'+mm};		
		fecha = yyyy+"-"+mm+"-"+dd;
		desde = dd+"-"+mm+"-"+yyyy;		
		hasta = dd+"-"+mm+"-"+yyyy;				
	html_fecha="<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td width='60' bgcolor='#333333' class='tit_grey'>Desde</td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'><span class='tit_grey'>Hasta</span></td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'><input type='text' id='desde1' size='10' maxlength='12' onClick='datepicker_desde()' value='"+desde+"'/></td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'><input type='text' size='10' maxlength='12' id='hasta1' onClick='datepicker_hasta()' value='"+hasta+"'/></td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td width='20' bgcolor='#333333'><img src='img/bot_informe.jpg' style='cursor:pointer' width='20' height='17' onClick=cargarContenido('"+pagina1+"','reporte',0) /></td>";
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"</table>";
	return html_fecha;
}

function activa_fecha1(pagina1){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd};
		if(mm<10){mm='0'+mm};		
		fecha = yyyy+"-"+mm+"-"+dd;
		desde = dd+"-"+mm+"-"+yyyy;		
		hasta = dd+"-"+mm+"-"+yyyy;				
	html_fecha="<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td width='60' bgcolor='#333333' class='tit_grey'>Desde</td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	if (pagina1!="reporte_semana_x_proyecto.php" && pagina1!="reporte_diario_semana_x_proyecto.php"){
	html_fecha=html_fecha+"    <td bgcolor='#333333'><span class='tit_grey'>Hasta</span></td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	}
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'><input type='text' id='desde1' size='10' maxlength='12' onClick='datepicker_desde()' value='"+desde+"'/></td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'><input type='hidden' size='10' maxlength='12' id='hasta1' onClick='datepicker_hasta()' value='"+hasta+"'/></td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td width='20' bgcolor='#333333'><img src='img/bot_informe.jpg' style='cursor:pointer' width='20' height='17' onClick=cargarContenido('"+pagina1+"','reporte',0) /></td>";
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"</table>";
	return html_fecha;
}

function activa_agno(pagina){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd};
		if(mm<10){mm='0'+mm};		
		fecha = yyyy+"-"+mm+"-"+dd;
		desde = dd+"-"+mm+"-"+yyyy;		
		hasta = dd+"-"+mm+"-"+yyyy;	
		agno_act = yyyy;
		agno_ini = '2010';
		agno_fin = agno_act + 10;
		
		sel_agno="<select name='agno' id='agno' onchange=cargarContenido('"+pagina+"','reporte',0)>";
		for(v=2010;v<agno_fin;v++){
			if (v==agno_act){sel="selected";}else{sel="";}
			sel_agno = sel_agno+"<option value='"+v+"' "+sel+">"+v+"</option>";
			}
		sel_agno = sel_agno+"</select>";
	
	html_fecha="<table width='100%' border='0' cellpadding='0' cellspacing='0'>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td width='60' bgcolor='#333333' class='tit_grey'>A&ntilde;o</td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"  <tr>";
	html_fecha=html_fecha+"    <td bgcolor='#333333'>"+sel_agno+"</td>";
	html_fecha=html_fecha+"    <td width='10' bgcolor='#333333'>&nbsp;</td>";
	html_fecha=html_fecha+"    <td width='20' bgcolor='#333333'></td>";
	html_fecha=html_fecha+"  </tr>";
	html_fecha=html_fecha+"</table>";
	return html_fecha;
}

function enviarFormulario(url, destino, formid){
		 loading();
		 var Formulario = document.getElementById(formid);
         var longitudFormulario = Formulario.elements.length;
         var cadena = "";
         var sepCampos;
         sepCampos = "";
	
         for (var i=0; i <= Formulario.elements.length-1;i++) {
         cadena += sepCampos+Formulario.elements[i].name+'='+Formulario.elements[i].value;
         sepCampos="&";} 
		 pagina = url+"?"+cadena;
		 code = displayTime();
		 //alert(pagina);
		 //pagina = pagina + "&code="+code;	 
		 setTimeout(function (){cargarContenido(pagina, destino)},1500);
		 //setTimeout(function (){c_loading()},8000);			
}


function enviarFormulario2(url, destino, formid, fila){
		 //loading(); 
		 alert(formid);
		 var Formulario = document.getElementById(formid);
         var longitudFormulario = Formulario.elements.length;
		 //alert (Formulario.elements[0].id);return;
         var cadena = "";
         var sepCampos;
         sepCampos = "";
         for (var i=0; i <= Formulario.elements.length-1;i++) {
			 cadena += sepCampos+Formulario.elements[i].id+'='+encodeURI(Formulario.elements[i].value);
			 sepCampos="&";}
		 pagina = url+"?"+cadena;
		 code = displayTime();
		 pagina = pagina + "&code="+code;
		 alert (pagina);
		 cargarContenido1(pagina, destino);
		 //c_loading();	 
}

function displayTime()
    {
        var localTime = new Date();
        var year= localTime.getYear();
        var month= localTime.getMonth() +1;
        var date = localTime.getDate();
        var hours = localTime .getHours();
        var minutes = localTime .getMinutes();
        var seconds = localTime .getSeconds();  
		var ran = Math.floor(Math.random()*110000000);
        var code = seconds+""+hours+""+minutes+""+year+""+date+""+month+""+ran;
		return code;
    } 
	
function oculta_menu(){
	contenedor = document.getElementById('menu');
	contenedor.style.visibility = "hidden";
}

function muestra_menu(){
	contenedor = document.getElementById('menu');
	contenedor.style.visibility = "visible";
}

function muestra_a_parametro(){
	contenedor=document.getElementById('con_nombre');
	contenedor.innerHTML="<input name='nombre' type='text' id='nombre' size='30' maxlength='30'>";
	contenedor=document.getElementById('con_entidad');
	cargarContenido('carga_sel_entidades1.php',contenedor.id);
	contenedor=document.getElementById('con_area');
	cargarContenido('carga_sel_areas.php',contenedor.id);
	contenedor=document.getElementById('con_elemento');
	cargarContenido('carga_sel_elementos.php',contenedor.id);
	contenedor=document.getElementById('con_unidad');
	cargarContenido('carga_sel_umedidas.php',contenedor.id);
	contenedor=document.getElementById('con_comp');		
	contenedor.innerHTML="<select id='comp'><option value='1'>-</option><option value='2'>&gt;</option><option value='3'>&lt;</option><option value='4'>=</option></select>";
	contenedor=document.getElementById('con_rango_i');		
	contenedor.innerHTML="<input name='rango_i' type='text' id='rango_i' size='2' maxlength='3' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;' >";
	contenedor=document.getElementById('con_rango_f');		
	contenedor.innerHTML="<input name='rango_f' type='text' id='rango_f' size='2' maxlength='3' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;' >";
	contenedor=document.getElementById('con_repeticion');		
	contenedor.innerHTML="<input name='repeticion' type='text' id='repeticion' size='2' maxlength='3' value='1' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;'>";	
	contenedor=document.getElementById('con_periodo');
	cargarContenido('carga_sel_periodos.php',contenedor.id);	
	contenedor=document.getElementById('con_monto');
	contenedor.innerHTML="<input name='monto' type='text' id='monto' size='8' maxlength='12' onkeypress='return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode==46)'>";	
	contenedor=document.getElementById('con_acciones');	
	contenedor.innerHTML="<table border='0' width='100%' cellpadding='0' cellspacing='0'><tr><td style='text-align:center'><img src='img/mas.png' id='mas' width='24' height='24' border='0' onMouseOver=flip_img(this.id,'img/mas1.png') onMouseOut=flip_img(this.id,'img/mas.png') onclick=valida_parametro('form1','',1); style='cursor:pointer'></td><td><img id='cancelar' src='img/avoid.png' width='24' height='24' border='0' onMouseOver=flip_img(this.id,'img/avoid1.png') onMouseOut=flip_img(this.id,'img/avoid.png') onclick=cargarContenido('multas.php?id=0','contenido'); style='cursor:pointer'></td></tr></table>";	
}

function muestra_a_anexos(fecha,hora){
	contenedor=document.getElementById('con_nombre');
	contenedor.innerHTML="<input name='nombre' type='text' id='nombre' size='10' onkeypress='auto_usuario()' >";
	contenedor=document.getElementById('con_apellidop');
	contenedor.innerHTML="<input name='apellidop' type='text' id='apellidop' size='10' onkeypress='auto_usuario()' >";
	contenedor=document.getElementById('con_apellidom');
	contenedor.innerHTML="<input name='apellidom' type='text' id='apellidom' size='10' onkeypress='auto_usuario()' >";
	contenedor=document.getElementById('con_campus');
	contenedor.innerHTML="<select name='campus' id='campus'></select>";
	contenedor=document.getElementById('con_sede');
	contenedor.innerHTML="<select name='sede' id='sede'></select>";
	contenedor=document.getElementById('con_area');
	contenedor.innerHTML="<select name='area' id='area'></select>";
	contenedor=document.getElementById('con_carrera');
	contenedor.innerHTML="<select name='carrera' id='carrera'></select>";
	contenedor=document.getElementById('con_cargo');
	contenedor.innerHTML="<select name='cargo' id='cargo'></select>";
	contenedor=document.getElementById('con_accion');
	contenedor.innerHTML="<input name='accion' type='text' id='accion' size='10' onkeypress=auto_accion('') >";	
	contenedor=document.getElementById('con_guardar');
	contenedor.innerHTML="<table><tr><td style='text-align:center'><img src='img/mas.jpg' width='26' height='26' onclick=valida_incidente('form1','',1) style='cursor:pointer'></td><td><img src='img/cancelar.jpg' width='26' height='26' onclick=cargarContenido('incidentes.php?id=0','contenido'); style='cursor:pointer'></td></tr></table>";	
}

function muestra_a_contrato(fecha){
	contenedor=document.getElementById('a_contrato');
	contenedor.style.height='40';
	contenedor=document.getElementById('con_ide');
	contenedor.innerHTML="";
	contenedor=document.getElementById('con_contrato');
	contenedor.innerHTML="&nbsp;<input id='contrato' type='text' size='10' maxlength='30' />";
	contenedor=document.getElementById('con_empresa');
	contenedor.innerHTML="&nbsp;<select id='empresa'><option><option></select><br>&nbsp;<br>";
	contenedor=document.getElementById('con_tarifas');
	contenedor.innerHTML="";
	contenedor=document.getElementById('con_documento');
	//contenedor.innerHTML="<img src='img/upload_files.jpg' style='cursor:pointer;width:30px;height:30px' onclick=window.open('a_file_contrato.php','','location=no,width=400,height=360'); />";
	contenedor=document.getElementById('con_fecha');
	contenedor.innerHTML="<input id='desde1' type='text' size='6' maxlength='10' value='"+fecha+"' onClick='datepicker_desde()' />";
	contenedor=document.getElementById('con_inicio');
	contenedor.innerHTML="<input id='hasta1' type='text' size='6' maxlength='10' value='"+fecha+"' onClick='datepicker_hasta()' />";
	contenedor=document.getElementById('con_fin');
	contenedor.innerHTML="<input id='fin1' type='text' size='6' maxlength='10' value='"+fecha+"' onClick='datepicker_fin()' />";
	contenedor=document.getElementById('con_metros');
	contenedor.innerHTML="<input id='metros' type='text' size='4' maxlength='6' onkeypress='return isNumberKey(event);' />";
	
	contenedor=document.getElementById('con_agregar');
	contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#678916' style = 'text-align:center; cursor:pointer;' onclick=valida_contrato('form2','','1');>GUARDAR</td><td width='20' style='text-align:center;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center; cursor:pointer;' onclick=oculta_a_contrato(); cargarContenido('contratos.php?id=0','contenido');>CANCELAR</td><td width='10'>&nbsp;</td></tr></table>";
}

function muestra_a_tarifa(id){
	contenedor=document.getElementById('a_tarifa'+id);
	contenedor.style.height='40';
	contenedor=document.getElementById('con_ide_t'+id);
	contenedor.innerHTML="&nbsp;<input type='hidden' name='id_contrato' id='id_contrato' value='"+id+"' />";
	contenedor=document.getElementById('con_tipo'+id);
	contenedor.innerHTML="&nbsp;<select id='tipo'"+id+"><option><option></select>";
	contenedor=document.getElementById('con_rango'+id);
	contenedor.innerHTML="&nbsp;<input id='rango1"+id+"' type='text' size='3' maxlength='4' onkeypress='return isNumberKey(event);'/>-<input id='rango2"+id+"' type='text' size='3' maxlength='4' onkeypress='return isNumberKey(event);'/>";
	contenedor=document.getElementById('con_angulo'+id);
	contenedor.innerHTML="&nbsp;-<input id='angulo1"+id+"' type='text' size='1' maxlength='2' value='60' onkeypress='return isNumberKey(event);'/>&deg;&nbsp;&nbsp; -<input id='angulo2"+id+"' type='text' size='1' maxlength='2' value='90' onkeypress='return isNumberKey(event);'/>&deg;";
	contenedor=document.getElementById('con_estimado'+id);
	contenedor.innerHTML="&nbsp;<input id='estimado"+id+"' type='text' size='3' maxlength='4' onkeypress='return isNumberKey(event);'/>";
	contenedor=document.getElementById('con_precio'+id);
	contenedor.innerHTML="&nbsp;<input id='precio"+id+"' type='text' size='8' maxlength='10' onkeypress='return isNumberKey(event);'/>";
	
	contenedor=document.getElementById('con_agregar_t'+id);
	contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' width='200px' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#678916' style = 'text-align:center; cursor:pointer;' onclick=valida_tarifa('form2','"+id+"','1');>GUARDAR</td><td width='20' style='text-align:center;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center; cursor:pointer;' onclick=oculta_a_tarifa('"+id+"'); cargarContenido1('contratos.php?id=0','contenido');>CANCELAR</td><td width='10'>&nbsp;</td></tr></table>";
}

function muestra_a_blanco(id){
	contenedor=document.getElementById('a_blanco'+id);
	contenedor.style.height='40';
	contenedor=document.getElementById('con_ide_c'+id);
	contenedor.innerHTML="&nbsp;<input type='hidden' name='id_contrato' id='id_contrato' value='"+id+"' />";
	contenedor=document.getElementById('con_proyecto'+id);
	contenedor.innerHTML="&nbsp;<select id='proyecto'"+id+"><option><option></select>";
	contenedor=document.getElementById('con_blanco'+id);
	contenedor.innerHTML="&nbsp;<select id='blanco'"+id+"><option><option></select>";
	contenedor=document.getElementById('con_pozo'+id);
	contenedor.innerHTML="&nbsp;<select id='pozo'"+id+"><option><option></select>";
	contenedor=document.getElementById('con_metro'+id);
	contenedor.innerHTML="&nbsp;<input id='metro"+id+"' type='text' size='3' maxlength='4' onkeypress='return isNumberKey(event);'/>";	
	
	contenedor=document.getElementById('con_agregar_b'+id);
	contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' width='200px' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#678916' style = 'text-align:center; cursor:pointer;' onclick=valida_pozo_proyecto('form2','"+id+"','1');>GUARDAR</td><td width='20' style='text-align:center;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center; cursor:pointer;' onclick=oculta_a_blanco('"+id+"'); cargarContenido1('contratos.php?id=0','contenido');>CANCELAR</td><td width='10'>&nbsp;</td></tr></table>";
}

function oculta_a_usuario(){
contenedor=document.getElementById('con_ide'); contenedor.innerHTML="";
contenedor=document.getElementById('con_usuario'); contenedor.innerHTML="";
contenedor=document.getElementById('con_nombre'); contenedor.innerHTML="";
contenedor=document.getElementById('con_apellidop'); contenedor.innerHTML="";
contenedor=document.getElementById('con_apellidom'); contenedor.innerHTML="";
contenedor=document.getElementById('con_clave'); contenedor.innerHTML="";
contenedor=document.getElementById('con_agregar'); contenedor.innerHTML="";
contenedor=document.getElementById('con_tipou'); contenedor.innerHTML="";
contenedor=document.getElementById('a_usuario'); contenedor.style.height='0';
//cargarUsuarios('listado_usuarios.php','data1','A','tipo','desc');
}

function oculta_a_contrato(){
contenedor=document.getElementById('con_ide'); contenedor.innerHTML="";
contenedor=document.getElementById('con_contrato'); contenedor.innerHTML="";
contenedor=document.getElementById('con_empresa'); contenedor.innerHTML="";
contenedor=document.getElementById('con_documento'); contenedor.innerHTML="";
contenedor=document.getElementById('con_tarifas'); contenedor.innerHTML="";
contenedor=document.getElementById('con_fecha'); contenedor.innerHTML="";
contenedor=document.getElementById('con_inicio'); contenedor.innerHTML="";
contenedor=document.getElementById('con_fin'); contenedor.innerHTML="";
contenedor=document.getElementById('con_metros'); contenedor.innerHTML="";
contenedor=document.getElementById('con_agregar'); contenedor.innerHTML="";
contenedor=document.getElementById('a_contrato'); contenedor.style.height='0';
cargarContenido1('contratos.php?id=0','contenido');
}

function oculta_a_tarifa(id){
contenedor=document.getElementById('con_ide_t'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_tipo'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_rango'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_angulo'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_estimado'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_precio'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_total'+id); contenedor.innerHTML="";
contenedor=document.getElementById('a_tarifa'+id); contenedor.style.height='0';
cargarContenido1('tarifas.php?id_contrato='+id,'tarifas'+id);
}

function oculta_a_blanco(id){
contenedor=document.getElementById('con_ide_c'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_proyecto'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_blanco'+id); contenedor.innerHTML="";
contenedor=document.getElementById('con_pozo'+id); contenedor.innerHTML="";
contenedor=document.getElementById('a_blanco'+id); contenedor.style.height='0';
cargarContenido1('blancos.php?id_contrato='+id,'blancos'+id);
}

function oculta_tarifa(id){
contenedor=document.getElementById('tarifas'+id);
contenedor.innerHTML="";
contenedor=document.getElementById('blancos'+id);
contenedor.innerHTML="";
}

function EditaFila_parametro(fila){
		contenedor=document.getElementById('con_nombre'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", "");contenedor.innerHTML="&nbsp;<input id='nombre"+fila+"' type='text' size='30' maxlength='30' value='"+val1+"'/>";
		contenedor=document.getElementById('con_entidad'+fila); val=document.getElementById('id_entidad'+fila).value;cargarContenido('carga_sel_entidades1.php?id='+fila+"&entidad="+val,contenedor.id);
		contenedor=document.getElementById('con_area'+fila); val=document.getElementById('id_area'+fila).value;cargarContenido('carga_sel_areas.php?id='+fila+"&area="+val,contenedor.id);
		contenedor=document.getElementById('con_elemento'+fila); val=document.getElementById('id_elemento'+fila).value;cargarContenido('carga_sel_elementos.php?id='+fila+"&elemento="+val,contenedor.id);
		contenedor=document.getElementById('con_unidad'+fila); val=document.getElementById('id_unidad'+fila).value;cargarContenido('carga_sel_umedidas.php?id='+fila+"&umedida="+val,contenedor.id);
		contenedor=document.getElementById('con_comp'+fila); val=document.getElementById('id_comp'+fila).value;contenedor.innerHTML="<select id='comp"+fila+"'><option value='1'>-</option><option value='2'>&gt;</option><option value='3'>&lt;</option><option value='4'>=</option></select>";
		contenedor=document.getElementById('con_rango_i'+fila); val1=contenedor.innerHTML; contenedor.innerHTML="&nbsp;<input id='rango_i"+fila+"' type='text' size='2' maxlength='3' value='"+val1+"' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;'/>";
		contenedor=document.getElementById('con_rango_f'+fila); val1=contenedor.innerHTML; contenedor.innerHTML="&nbsp;<input id='rango_f"+fila+"' type='text' size='2' maxlength='3' value='"+val1+"' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;'/>";		
		contenedor=document.getElementById('con_repeticion'+fila); val1=contenedor.innerHTML; contenedor.innerHTML="&nbsp;<input id='repeticion"+fila+"' type='text' size='1' maxlength='3' value='"+val1+"' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:center;'/>";
		contenedor=document.getElementById('con_periodo'+fila); val=document.getElementById('id_periodo'+fila).value;cargarContenido('carga_sel_periodos.php?id='+fila+"&periodo="+val,contenedor.id);
		contenedor=document.getElementById('con_monto'+fila); val=contenedor.innerHTML; val1=val.replace('$ ',''); val2 = val1.replace(/\./g,''); contenedor.innerHTML="<input id='monto"+fila+"' type='text' size='8' maxlength='12' value='"+val2+"' onkeypress='return (event.charCode >= 48 && event.charCode <= 57)' style='text-align:right;'/>";
		contenedor=document.getElementById('con_acciones'+fila);	
		contenedor.innerHTML="<table border='0' width='100%' cellpadding='0' cellspacing='0'><tr><td style='text-align:center'><img src='img/mas.png' id='mas"+fila+"' width='24' height='24' border='0' onMouseOver=flip_img(this.id,'img/mas1.png') onMouseOut=flip_img(this.id,'img/mas.png') onclick=valida_parametro('form1','"+fila+"',2); style='cursor:pointer'></td><td><img id='cancelar"+fila+"' src='img/avoid.png' width='24' height='24' border='0' onMouseOver=flip_img(this.id,'img/avoid1.png') onMouseOut=flip_img(this.id,'img/avoid.png') onclick=cargarContenido('multas.php?id=0','contenido'); style='cursor:pointer'></td></tr></table>";	
}

function EditaFila_contrato(fila){
		contenedor=document.getElementById('con_ide'+fila); contenedor.innerHTML="<input type='hidden' name='id_contrato' id='id_contrato' value='"+fila+"' />";
		contenedor=document.getElementById('con_contrato'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", "");contenedor.innerHTML="&nbsp;<input id='contrato"+fila+"' type='text' size='10' maxlength='30' value='"+val1+"'/>";
		contenedor=document.getElementById('con_empresa'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", "");contenedor.innerHTML="&nbsp;<input id='empresa"+fila+"' type='text' size='10' maxlength='30' value='"+val1+"'/>";
		contenedor=document.getElementById('con_documento'+fila); contenedor.innerHTML="";
		contenedor=document.getElementById('con_fecha'+fila); val=contenedor.innerHTML; val1=val.replace("&nbsp;", ""); contenedor.innerHTML="<input id='desde1"+fila+"' type='text' size='6' maxlength='10' value='"+val1+"'/>";		
		contenedor=document.getElementById('con_inicio'+fila); val=contenedor.innerHTML; val1=val.replace("&nbsp;", ""); contenedor.innerHTML="<input id='hasta1"+fila+"' type='text' size='6' maxlength='10' value='"+val1+"'/>";		
		contenedor=document.getElementById('con_fin'+fila); val=contenedor.innerHTML; val1=val.replace("&nbsp;", ""); contenedor.innerHTML="<input id='fin1"+fila+"' type='text' size='6' maxlength='10' value='"+val1+"'/>";				
		contenedor=document.getElementById('con_metros'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", ""); contenedor.innerHTML="<input id='metros"+fila+"' type='text' size='4' maxlength='6' value='"+val1+"' onkeypress='return isNumberKey(event);' />";				
		contenedor=document.getElementById('con_modificar'+fila);
		contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0'  style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#FF9900' style = 'text-align:center; cursor:pointer;' onclick=valida_contrato('form2','"+fila+"','2')>MODIFICAR</td><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td></tr></table>";
		contenedor=document.getElementById('con_eliminar'+fila);
		contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' height='25' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center; cursor:pointer;' onclick=cargarContenido1('contratos.php?id=0','contenido'); >CANCELAR</td><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td></tr></table>";		
}

function muestra_a_programa(){
contenedor=document.getElementById('a_programa');
contenedor.style.height='40';
contenedor=document.getElementById('con_ide');
contenedor.innerHTML="&nbsp;";
contenedor=document.getElementById('con_proyecto');
contenedor.innerHTML="<select name='proyecto' id='proyecto' onchange=cargarContenido2('carga_sel_pozos.php?proyecto='+this.value,'pozo',0)><option selected='selected'>Todos</option></select>";
contenedor=document.getElementById('con_pozo');
contenedor.innerHTML="<select name='pozo' id='pozo' ><option selected='selected' value='0'>Todos</option></select><br>";
contenedor=document.getElementById('con_tipo');
contenedor.innerHTML="<select name='tipo' id='tipo' ><option value='DDH'>DDH</option><option value='AR'>AR</option><br></select>";
contenedor=document.getElementById('con_profundidad');
contenedor.innerHTML="<br><input id='profundidad' type='text' size='8' maxlength='20' /><br><br>";
contenedor=document.getElementById('con_costo');
contenedor.innerHTML="<br><input id='costo' type='text' size='8' maxlength='20' /><br><br>";
contenedor=document.getElementById('con_esperado');
contenedor.innerHTML="<br><input id='esperado' type='text' size='8' maxlength='20' /><br><br>";
contenedor=document.getElementById('con_agregar');
contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#678916' style = 'text-align:center; cursor:pointer;' onclick=valida_programa('form2','','1'); >GUARDAR</td><td width='20' style='text-align:center;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center; cursor:pointer;' onclick='oculta_a_programa();'>CANCELAR</td><td width='10'>&nbsp;</td></tr></table>";
}

function oculta_a_programa(){
contenedor=document.getElementById('con_ide'); contenedor.innerHTML="";
contenedor=document.getElementById('con_proyecto'); contenedor.innerHTML="";
contenedor=document.getElementById('con_pozo'); contenedor.innerHTML="";
contenedor=document.getElementById('con_profundidad'); contenedor.innerHTML="";
contenedor=document.getElementById('con_costo'); contenedor.innerHTML="";
contenedor=document.getElementById('con_avance'); contenedor.innerHTML="";
contenedor=document.getElementById('con_agregar'); contenedor.innerHTML="";
contenedor=document.getElementById('a_programa'); contenedor.style.height='0';
//cargarUsuarios('listado_usuarios.php','data1','A','tipo','desc');
}

function EditaFila_programa(fila){	
		contenedor=document.getElementById('con_ide'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", "");contenedor.innerHTML="&nbsp;"+val1+"<input id='id' type='hidden' value='"+val1+"'/>";
			val=document.getElementById('con_tipo'+fila).innerHTML;
			if (val=='DDH'){sel1='selected'}else{sel1=''};
			if (val=='AR'){sel2='selected'}else{sel2=''};
		contenedor=document.getElementById('con_tipo'+fila);val=contenedor.innerHTML;val1=val.replace("&nbsp;", ""); contenedor.innerHTML="<select name='tipo"+fila+"' id='tipo"+fila+"'><option value='DDH' "+sel1+">DDH</option><option value='AR' "+sel2+">AR</option><br></select>";
		contenedor=document.getElementById('con_profundidad'+fila);val=contenedor.innerHTML;val1=val.replace("&nbsp;", ""); val2=val1.replace(" Mtrs.", ""); contenedor.innerHTML="<input id='profundidad"+fila+"' type='text' size='10' maxlength='15' value='"+val2+"'/>";
		contenedor=document.getElementById('con_costo'+fila); val=contenedor.innerHTML; val1=val.replace("&nbsp;&nbsp;", "");contenedor.innerHTML="<input id='costo"+fila+"' type='text' size='8' maxlength='10' value='"+val1+"'/>";
		contenedor=document.getElementById('con_esperado'+fila); val=contenedor.innerHTML; val1=val.replace("&nbsp;&nbsp;", "");contenedor.innerHTML="<input id='esperado"+fila+"' type='text' size='8' maxlength='10' value='"+val1+"'/>";		
		contenedor=document.getElementById('con_observaciones'+fila); 
			val=contenedor.innerHTML; val1=val.replace("&nbsp;", "");
		contenedor1=document.getElementById('observaciones'+fila);
			val=contenedor1.innerHTML; val1=val.replace("&nbsp;", "");
			contenedor.innerHTML="<textarea id='observaciones"+fila+"' name='observaciones"+fila+"' cols='25' rows='1'>"+val1+"</textarea>";			
		contenedor=document.getElementById('con_modificar'+fila);
		contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#FF9900' style = 'text-align:center; cursor:pointer' onclick=valida_programa('form2','"+fila+"',2) >MODIFICAR</td><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td></tr></table>";
		//contenedor=document.getElementById('con_eliminar'+fila);
		//contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' height='25' style='text-align:center;cursor:pointer;'>&nbsp;</td><td width='160' bgcolor='#E32402' style='text-align:center;cursor:pointer' onclick=cargarContenido1('programas.php?id=0','contenido') >CANCELAR</td><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td></tr></table>";		
}

function EditaFila_reporte(fila){
		contenedor="";
		contenedor=document.getElementById('con_ide'+fila); val=contenedor.innerHTML.substr(6,contenedor.innerHTML.length); val1=val.replace("&nbsp;", "");contenedor.innerHTML="&nbsp;"+val1+"<input id='id' type='hidden' value='"+val1+"'/>";
		contenedor=document.getElementById('con_turnoa'+fila);val=contenedor.innerHTML;val1=val.replace("&nbsp;&nbsp;", "");contenedor.innerHTML="<input id='turnoa"+fila+"' type='text' size='5' maxlength='10' value='"+val1+"'/>";
		contenedor=document.getElementById('con_turnob'+fila);val=contenedor.innerHTML;val1=val.replace("&nbsp;&nbsp;", "");contenedor.innerHTML="<input id='turnob"+fila+"' type='text' size='5' maxlength='10' value='"+val1+"'/>";
		contenedor=document.getElementById('con_mod'+fila);
		contenedor.innerHTML="<table border='0' cellpadding='0' cellspacing='0' style='color:#FFF'><tr><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td><td width='160' height='25' bgcolor='#FF9900' style = 'text-align:center; cursor:pointer' onclick=valida_reporte('form2','"+fila+"',2) >MODIFICAR</td><td width='10' style='text-align:center; cursor:pointer;'>&nbsp;</td></tr></table>";		
}

function flecha(id){
cont = document.getElementById('flecha'+id);
cont.innerHTML = "<img src='img/bot_up_flecha1.jpg' width='28' height='26' style='cursor:pointer;' onclick=javascript:oculta_tarifa('"+id+"');flecha1('"+id+"') />";
}

function flecha1(id){
cont = document.getElementById('flecha'+id);
cont.innerHTML = "<img src='img/bot_up_flecha.jpg' width='28' height='26' style='cursor:pointer;' onclick=javascript:cargarContenido2('tarifas.php?id_contrato="+id+"','tarifas"+id+"',0);cargarContenido2('blancos.php?id_contrato="+id+"','blancos"+id+"',0);flecha('"+id+"') />";
}

function datepicker_desde(){
	new JsDatePick({
		useMode:2,
		target:"desde1",
		dateFormat:"%d-%m-%Y"
	});
}

function datepicker_hasta(){
	new JsDatePick({
		useMode:2,
		target:"hasta1",
		dateFormat:"%d-%m-%Y"
	});
}

function datepicker_fin(){
	new JsDatePick({
		useMode:2,
		target:"fin1",
		dateFormat:"%d-%m-%Y"
	});
}

function llena_desde(){
	contenedor1 = document.getElementById('fondo_ant');
	contenedor2 = document.getElementById("desde");
	val = contenedor1.value;
	contenedor2.value = val;
}

function activa_map(){
	map = document.getElementById('map');
	map.style.opacity = '1';
	map.style.MozOpacity = '1';
}

function apaga_map(){
	map = document.getElementById('map');
	map.style.opacity = '.5';
	map.style.MozOpacity = '0.1';	
}

function datepicker_agenda(){
	new JsDatePick({
		useMode:2,
		target:"agenda_fecha",
		dateFormat:"%d-%m-%Y"
	});
}