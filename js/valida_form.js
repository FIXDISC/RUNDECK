// Creación del objeto XMLHttpRequest.

function valida_ingreso(formulario,fila,accion){
	cont = document.getElementById('loading');cont.className ='cursor';
	cont = document.getElementById('loading1');cont.className ='cursor1';
	
    contenedor = document.getElementById(formulario);
	if(contenedor.elements['usuario'+fila].value==""){alert("Debe ingresar un usuario");contenedor.elements['usuario'+fila].focus();return};
	if(contenedor.elements['clave'+fila].value==""){alert("Debe ingresar una clave");contenedor.elements['clave'+fila].focus();return};
	if(accion==1){
		enviarFormulario('valida_usuario.php','loading1','form1');
		setTimeout(function(){			
			cont = document.getElementById('loading');cont.className ='cursor_';
			cont = document.getElementById('loading1');cont.className ='cursor1_';},4000); 
		setTimeout(function(){			
			cont = document.getElementById('loading'); cont.style.display='none';
			cont = document.getElementById('loading1'); cont.style.display='none';},4200); 

		setTimeout(function(){
			chek = document.getElementById('chek').innerHTML;
			if (chek=="0"){window.location.href=window.location.href;}
			id = document.getElementById('id').innerHTML;
			u = document.getElementById('u').innerHTML;
			e = document.getElementById('e').innerHTML;
			t = document.getElementById('t').innerHTML;	
			if (chek=="1" && (t==21 || t==22 || t==23)){window.location.href="solicitud.php?u="+id+"&e="+e+"&t="+t;}
			if (chek=="1" && (t==1 || t==2 || t==10 || t==11 || t==12 || t==13)){window.location.href="admin/dashboard?id="+id+"&t="+t;}
		},4500);		
	}
}

function valida_solicitud(formulario,fila,accion){
	u = document.getElementById('u');
	e = document.getElementById('e');
	t = document.getElementById('t');
    contenedor = document.getElementById(formulario);
//VALIDA CAUSA
	zona = document.getElementById('causa');
	cont = document.getElementById('mail');
	if(contenedor.elements['mail'+fila].value==""){alert("Debe ingresar un mail");contenedor.elements['mail'+fila].focus();return};
	if(validaMail(contenedor.elements['mail'+fila].value)!=true){alert("El mail es incorrecto");contenedor.elements['mail'+fila].focus();return};
	
	if(contenedor.elements['division'+fila].value=="" || contenedor.elements['division'+fila].value==0){alert("Debe seleccionar una corte");contenedor.elements['division'+fila].focus();return};
	if(contenedor.elements['juzgado'+fila].value=="" || contenedor.elements['juzgado'+fila].value==0){alert("Debe seleccionar un juzgado");contenedor.elements['juzgado'+fila].focus();return};	
	if(contenedor.elements['ruc'+fila].value==""){alert("Debe ingresar un RUC");contenedor.elements['ruc'+fila].focus();return};	
	if(contenedor.elements['rit'+fila].value==""){alert("Debe ingresar un RIT");contenedor.elements['rit'+fila].focus();return};
	if(contenedor.elements['delito'+fila].value==""){alert("Debe ingresar un delito");contenedor.elements['delito'+fila].focus();return};
	if(contenedor.elements['imp_run'+fila].value==""){alert("Debe ingresar un RUN para el imputado\nEjemplo: 11111111-1");contenedor.elements['imp_run'+fila].focus();return};	
//VALIDA IMPUTADO
	if (validaRut(contenedor.elements['imp_run'+fila].value.split('.').join(''))!=true){alert("Debe ingresar un RUN v\u00E1lido.\nEjemplo: 11111111-1");contenedor.elements['imp_run'+fila].focus();return};
//VALIDA ZONA_INCLUSION
	if (contenedor.elements['zin_region'+fila].value==0){alert("Debe ingresar una regi\xF3n de inclusi\xF3n");contenedor.elements['zin_region'+fila].focus();return};	
	if (contenedor.elements['zin_comuna'+fila].value==""){alert("Debe ingresar una comuna de inclusi\xF3n");contenedor.elements['zin_comuna'+fila].focus();return};	
	if (contenedor.elements['zin_calle'+fila].value==""){alert("Debe ingresar una calle de inclusi\xF3n");contenedor.elements['zin_calle'+fila].focus();return};
	if (contenedor.elements['zin_numero'+fila].value=="" && contenedor.elements['zin_km'+fila].value==""){alert("Debe ingresar un n\xFAmero o kil\xF3metro de inclusi\xF3n");contenedor.elements['zin_numero'+fila].focus();return};	
	loading();
	if(accion==1){enviarFormulario2('envia_solicitud.php','loading1','form1');}
	setTimeout(function(){cargarContenido('listado_solicitudes_inner.php?u='+u+'&e='+e+'&t='+t,'contenido');},500);
	//if(accion==2){enviarFormulario2('modifica_empresa.php','a_empresa','form2'); alert("EMPRESA MODIFICADA"); cargarContenido1('usuarios.php?id=0','contenido');}
}


function valida_archivo(formulario,fila,accion){
    contenedor = document.getElementById(formulario);
	if(contenedor.elements['test'+fila].value==""){alert("Debe ingresar un archivo");contenedor.elements['test'+fila].focus();return};
	if(accion==1){document.f.submit();}
}

function valida_excel(formulario,fila,accion){	
    contenedor = document.getElementById(formulario);
	if(contenedor.elements['userfile'+fila].value==""){alert("Debe ingresar un archivo");contenedor.elements['userfile'+fila].focus();return};
	if(accion==1){document.f.submit();}
}

function isNumberKey(evt){
          var charCode = (evt.which) ? evt.which : event.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
}

function valida_clave(usuario,clave){
	if (usuario=='admin' && clave=='info'){
		cargarContenido('login.php?val=1','cont');
	}else{
		alert("USUARIO Y/O CLAVE INCORRECTO(S)");	
	}
}
	   
function carga_filtro(){
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
		
		
		pagina = "listado_inventario.php?tipo="+tipo1+"&area="+area1+"&zona="+zona1+"&item="+item1+"&usuario="+usuario1+"&cargo="+cargo1+"&activo="+activo1+"&serie="+serie1+"&campo="+campo1+"&comp="+comp1+"&txt="+txt1+"&campo1="+campo2+"&comp1="+comp2+"&txt1="+txt2;
		return pagina;	
}

function validaRut(rut){
	 //if(rut == "11111111-1"){return "El rut es incorrecto";}
	 var rexp = new RegExp(/^([0-9])+\-([kK0-9])+$/);
	 if(rut.match(rexp)){
		 var RUT = rut.split("-");
		 var elRut = RUT[0];
		 var factor = 2;
		 var suma = 0;
		 var dv;
		 for(i=(elRut.length-1); i>=0; i--){
			 factor = factor > 7 ? 2 : factor;
			 suma += parseInt(elRut[i])*parseInt(factor++);
		 }
		 dv = 11 -(suma % 11);
		 if(dv == 11){
			 dv = 0;
		 }else if (dv == 10){
			 dv = "k";
		 }
	
		 if(dv == RUT[1].toLowerCase()){
			 return true;
		 }else{         
			 return "El rut es incorrecto";
		 }
	 }else{     
		 return "Formato incorrecto (Ej: 12345678-9)";
	 }
}

function validaMail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)){
   return true;
  } else {
   return "El mail está incorrecto";
  }
}

function verifica_estado(val,ide,agenda,t){
	setTimeout(function (){
		cont = document.getElementById('ventana_motivo');
		if (val==2 || val==5){
			cont.style.display = "block";
			cargarContenido('motivo_rechazo.php?id='+ide+'&estado='+val+'&t='+t,'ventana_motivo');
		}
		if (val==6){
			cargarContenido('envia_mail1.php?id='+ide+'&estado='+val+"&t="+t,'ventana_motivo');
			fecha = fec_now();
			valida_motivo(fecha,ide,val);
		}
		
		
		cont = document.getElementById('cont_agenda'+ide);
		agenda1 = document.getElementById('agenda');
		if (val==7){
			if (agenda=='0000-00-00'){cargarContenido('agenda.php?id='+ide+"&t="+t,'agenda');muestra(agenda1);return;}	
		}
},250);
}

function valida_motivo(fecha, ide, estado){
	u = document.getElementById("u").value;
	t = document.getElementById('t').value;	
	
	if (estado!=6){motivo = document.getElementById('txt_motivo').value;}else{motivo="EXISTE FACTIBILIDAD T\xC9CNICA";}
	
	cargarContenido('guarda_motivo.php?id='+ide+"&motivo="+motivo,'ventana_motivo');
	alert("MOTIVO INGRESADO...");
	if (estado==2){
		cargarContenido('envia_mail.php?id='+ide+'&usuario='+u+'&estado='+estado,'ventana_motivo');
	}
	if (estado==5 || estado==6){
		cargarContenido('genera_pdf.php?id='+ide+'&usuario='+u+'&estado='+estado,'ventana_motivo');
		muestra(ventana_motivo);
		alert("SE GENER\xD3 EL CERTIFICADO");	
		carga_pdf(ide, 'cert',0);
		//cargarContenido('envia_mail.php?id='+ide+'&usuario='+u+'&estado='+estado,'ventana_motivo');
	}
	cargarContenido('listado_solicitudes_inner.php?id='+u+'&t='+t,'contenido');
}

function carga_pdf(ide, dest, origen){
 	txt="";
	if(origen==1){fold="admin/"}else{fold=""}
	setTimeout(function (){
		cont = document.getElementById(dest);
		txt = txt +"<object data='"+fold+"Informes/Cerificado_SIFT"+ide+".pdf' type='application/pdf' width='100%' height='500' onBlur=document.getElementById('ventana_motivo').style.display='none'>";
		txt = txt +"        alt : <a href='Informes/Cerificado_SIFT"+ide+".pdf'>test.pdf</a>";
		txt = txt +"    </object>";
		cont.innerHTML = txt;
		cont.focus();
	},1000);
}


function valida_agenda(fecha_actual,ide,lugar){
	u = document.getElementById('u').value;
	e = document.getElementById('e').value;	
	t = document.getElementById('t').value;
	l = document.getElementById('crs').value;
	tipo = document.getElementById('agenda_tipo').value; 
	hora = document.getElementById('agenda_h1').value+":"+document.getElementById('agenda_h2').value+":"+"00";
	fecha = document.getElementById('agenda_fecha_h').value;
	if (fecha==""){alert("Debe ingresar una fecha");return;}	
	fecha_hora = fecha+" "+hora;
	
	fecha0 = fecha.replace(/\//g,'-');
	fecha00 = fecha0.split("-");
	fecha000 = fecha00[2]+"-"+fecha00[1]+"-"+fecha00[0]+" "+hora;
	
	fecha_ing = new Date(fecha000);
	if (fecha_ing=="Invalid Date"){alert("Debe ingresar una fecha v\xE1lida");return;}	
	fecha_actual = new Date();
	fecha_48 = new Date(fecha_actual);
	fecha_48.setHours (fecha_actual.getHours() + 48 );
	
//	alert(fecha_ing);
//	alert(fecha_48);
	
	if (fecha_ing < fecha_48){alert("La fecha debe ser 48 horas mayor que la fecha actual.");return;}	
	
	cont = document.getElementById('crs');
	if (cont.value==0){alert("Debe seleccionar un CRS."); return;}	
			
	cargarContenido('guarda_agenda.php?u='+u+'&entidad='+e+'&lugar='+l+'&id='+ide+"&tipo="+tipo+"&fecha="+fecha000+"&hora="+hora,'agenda');
	cargarContenido('listado_solicitudes_inner.php?id='+u+'&t='+t,'contenido');
}

function valida_parametro(formulario,fila,accion){
	nombre = document.getElementById('nombre'+fila);
	entidad = document.getElementById('entidades1'+fila);
	area = document.getElementById('areas'+fila);	
	elemento = document.getElementById('elementos'+fila);
	unidad = document.getElementById('umedidas'+fila);
	comp = document.getElementById('comp'+fila);
	rango_i = document.getElementById('rango_i'+fila);
	rango_f = document.getElementById('rango_f'+fila);
	repeticion = document.getElementById('repeticion'+fila);
	periodo = document.getElementById('periodos'+fila);
	monto = document.getElementById('monto'+fila);	
	
	if (nombre.value==""){alert("Debe ingresar un nombre para el par\341metro."); nombre.focus(); return;}
	if (entidad.value==0){alert("Debe seleccionar una entidad."); entidad.focus(); return;}
	if (area.value==0){alert("Debe seleccionar un \341rea."); area.focus(); return;}
	if (elemento.value==0){alert("Debe seleccionar un elemento."); elemento.focus(); return;}	
	if (unidad.value==0){alert("Debe seleccionar una unidad."); unidad.focus(); return;}
	if (rango_i.value==""){alert("Debe ingresar un rango inicial."); rango_i.focus(); return;}
	if (repeticion.value<1){alert("Debe ingresar una repeticion superior a 1."); repeticion.focus(); return;}
	if (periodo.value==0){alert("Debe seleccionar un periodo."); periodo.focus(); return;}
	if (monto.value==""){alert("Debe ingresar un monto."); monto.focus(); return;}		
	
	if(accion==1){cargarContenido('agrega_parametro.php?nombre='+nombre.value+'&entidad='+entidad.value+"&area="+area.value+"&elemento="+elemento.value+"&unidad="+unidad.value+"&comp="+comp.value+"&rango_i="+rango_i.value+"&rango_f="+rango_f.value+"&repeticion="+repeticion.value+"&periodo="+periodo.value+"&monto="+monto.value,'ta_agregar','form1'); cargarContenido('parametros.php','contenido');}
	if(accion==2){cargarContenido('modifica_parametro.php?id='+fila+'&nombre='+nombre.value+'&entidad='+entidad.value+"&area="+area.value+"&elemento="+elemento.value+"&unidad="+unidad.value+"&comp="+comp.value+"&rango_i="+rango_i.value+"&rango_f="+rango_f.value+"&repeticion="+repeticion.value+"&periodo="+periodo.value+"&monto="+monto.value,'ta_agregar'); cargarContenido('parametros.php?id=0','contenido');}
	
	return;	
		
	hora = document.getElementById('agenda_h1').value+":"+document.getElementById('agenda_h2').value+":"+"00";
	fecha = document.getElementById('agenda_fecha').value;
	if (fecha==""){alert("Debe ingresar una fecha");return;}	
	fecha_hora = fecha+" "+hora;
		
	cargarContenido('guarda_agenda.php?id='+ide+"&tipo="+tipo+"&fecha="+fecha000+"&hora="+hora,'agenda');
	cargarContenido('listado_solicitudes_inner.php?u='+u+'&c='+c+'&t='+t,'contenido');
}