// JavaScript Document
function on_ove(obj){
	cont = document.getElementById(obj);
	cont.style.backgroundColor = "#003542";
}

function on_out(obj){
	cont = document.getElementById(obj);
	cont.style.backgroundColor = "#333333";
}

function muestra(obj){
	elem = document.getElementById(obj);
	if(elem.style.visibility=="hidden"){ 
		elem.style.left = ((event.clientX)+160+"px");
		elem.style.top = ((event.clientY)-10+"px");	
	}
	elem.style.visibility="visible";
}

function oculta(obj){
	elem = document.getElementById(obj);
	elem.style.visibility="hidden";
}