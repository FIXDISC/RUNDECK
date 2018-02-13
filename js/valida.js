// JavaScript Document
var nombre_u = "";
function valida_form(u, nombre, mail){
	mensaje="";
	mensaje_mensaje = document.getElementById("mensaje_mensaje");
	comentarios = document.getElementById("comentarios");
	formulario = document.getElementById("cont_form");
	bot_env = document.getElementById("bot_env");
	enviando = document.getElementById("enviando");
	
	if (comentarios.value==""){comentarios.style.borderColor="#F00"; mensaje_mensaje.style.visibility = "visible"; mensaje_mensaje.innerHTML="Debe ingresar un mensaje"; comentarios.focus(); return;}

	pag="data.php?u="+u+"&nombre="+nombre+"&mail="+mail+"&comentarios="+comentarios.value;
	formulario.style.visibility = "hidden";
	bot_env.style.visibility = "hidden";
	
	comentarios.value="";
	enviando.style.visibility = "visible";
	
	//alert(pag);
	setTimeout(function(){cargarContenido(pag,"enviando"); }, 3000);
setTimeout(function(){ 	
	enviando.style.visibility = "hidden";
	chat = document.getElementById("chat");
	chat.src = "chat.php?u="+nombre_u;
	chat.style.display = "block";
	},5500);
//	pag = "chat.php";

	//setTimeout(function(){ close_form(); }, 5000);

}


function validaRut(rut){
//	 if(rut == "11111111-1"){return "El rut es incorrecto";}
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
   return "El mail es incorrecto";
  }
}

function color_borde(obj){
	cont = document.getElementById(obj);
	cont.style.borderColor = "#CCC";
}

function oculta_mensaje(obj){
	cont = document.getElementById(obj);
	cont.style.visibility = "hidden";
}