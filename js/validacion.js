 

function validacion(formulario) {
   var Placa     = document.getElementById("placa");
    var Color     = document.getElementById("color");
    var Ano       = document.getElementById("ano");
    var Capacidad = document.getElementById("capacidad");
    var Cilindraje= document.getElementById("cilindraje");
    var Chasis    = document.getElementById("chasis");
    var Zona      = document.getElementById("zona");
    var Valor     = document.getElementById("valor");
    var Fecha     = document.getElementById("fecha");
    var Email     = document.getElementById("email");
    var Tel       = document.getElementById("tel");
    var Direccion = document.getElementById("direccion");
    var Bus       = document.getElementById("termino");

//Validando que no se encuentren vacios
	if (Placa.value == null || Placa.value.length == 0 || /^\s+$/.test(Placa.value)) {		  
  	  alert('POR FAVOR DIGITE LA PLACA DEL VEHICULO');
	  Placa.focus();
	  verificar=false;
	  return false;		 
	}
	else if (Color.value == null || Color.value.length == 0 || /^\s+$/.test(Color.value)) {
	  alert('POR FAVOR DIGITA EL COLOR DEL VEHICULO');
	  Color.focus();
	verificar=false;
	   return false;		  
	}
	else if (Ano.value == null || Ano.value.length == 0 || /^\s+$/.test(Ano.value)) {
	  alert('POR FAVOR DIGITA EL AÑO  DEL MODELO');
	   Ano.focus();
	verificar=false;
	   return false;		  
	}
	else if (Capacidad.value == null || Capacidad.value.length == 0 || /^\s+$/.test(Capacidad.value)) {
	  alert('POR FAVOR DIGITA LA CAPACIDAD MAXIMA');
	   Capacidad.focus();
	verificar=false;
	   return false;		  
	}
    else if (Cilindraje.value == null || Cilindraje.value.length == 0 || /^\s+$/.test(Cilindraje.value)) {
	  alert('POR FAVOR DIGITA EL NUMERO DE CILINDRAJE');
	   Cilindraje.focus();
	verificar=false;
	   return false;		  
	}
     else if (Chasis.value == null || Chasis.value.length == 0 || /^\s+$/.test(Chasis.value)) {
	  alert('POR FAVOR DIGITA EL NUMERO DE CHASIS');
	   Chasis.focus();
	verificar=false;
	   return false;		  
	}
	else if (Zona.value == null || Zona.value.length == 0 || /^\s+$/.test(Zona.value)) {
	  alert('POR FAVOR seleccione una zona de circulación');
	   Zona.focus();
	verificar=false;
	   return false;		  
	}
	else if (Valor.value == null || Valor.value.length == 0 || /^\s+$/.test(Valor.value)) {
	  alert('POR FAVOR DIGITA EL VALOR DEL VEHICULO');
	   Valor.focus();
	verificar=false;
	   return false;		  
	}
	else if (Fecha.value == null || Fecha.value.length == 0 || /^\s+$/.test(Fecha.value)) {
	  alert('POR FAVOR. DIGITA FECHA DE VENCIMIENTO DEL SEGURO');
	   Fecha.focus();
		verificar=false;
	   return false;		  
	}	
	else if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Email.value)) ) {
	  alert('POR FAVOR. DIGITA TU EMAIL');
	  Email.focus();
		verificar=false;
	  return false;	
	}
	else if (Tel.value == null || Tel.value.length == 0 || /^\s+$/.test(Tel.value)) {
	  alert('POR FAVOR. DIGITA TU TELEFONO');
	   Tel.focus();
		verificar=false;
	  return false;		  
	}
	else if (Direccion.value == null || Direccion.value.length == 0 || /^\s+$/.test(Direccion.value)) {		  
	  alert('POR FAVOR. DIGITA TU DIRECCION');
	  Direccion.focus();
		verificar=false;
	  return false;	
	}
	
//Validando campos 	
	if(soloLetrasYNum(Placa) == false){	
		Placa.focus();
		return false;
	}
	if(!numeric(Capacidad)){
		Capacidad.focus();
		return false;
	}
	if(!numeric(Cilindraje)){
		Cilindraje.focus();
		return false;
	}
	if(!numeric(Chasis)){
		Chasis.focus();
		return false;
	}
	if(!numeric(Valor)){
		Valor.focus();
		return false;
	}
	if(!numeric(Tel)){
		Tel.focus();
		return false;
	}
	if(Tel.value.length > 10){
		alert('El campo telefono debe tener 10 digitos');
		Tel.focus();
		return false;
	}
	if(!soloLetrasYNum(Direccion)){
		Direccion.focus();
		return false;
	}
	if(!numeric(ano)){
		Ano.focus();
		return false;
	}else if(Ano.value.length>4){
		alert('El numero maximo de digitos es 4 el año');
		Ano.focus();
		return false;
	}

	nuevo(Placa.value,Color.value,Ano.value,Capacidad.value,Cilindraje.value,Chasis.value,Zona.value,
		Valor.value,Fecha.value, Email.value, Tel.value, Direccion.value);

	    document.getElementById("formulario").reset();
	    
	    
	
	mostrar_tabla();
	
	return true;
}

//vector
var vec=[];

//Funcion para llenar uno nuevo
function nuevo(p,color,a,cap,cilin,num,zona,val,fecha,email,tel,direc){

	var nuevo_vehiculo = {placa: p, color:color, Anyo:a,capacidad:cap,
	cilindraje:cilin,chasis:num,zona:zona,valor:val,fecha:fecha,correo:email,tele:tel,dir:direc};
	vec.push(nuevo_vehiculo);
}

//Funcion para mostrar en la tabla
function mostrar_tabla(){
	var tabla      = document.getElementById("contenido_tabla");
	var fila_tabla = "";
	if(vec.length!=0){
	for(var i = 0; i < vec.length; i++){
		fila_tabla += "<tr><td>"+ vec[i].placa +"</td><td> "+vec[i].color+"</td><td> "+vec[i].Anyo+"</td><td> "+
		vec[i].capacidad+"</td><td> "+vec[i].cilindraje+"</td><td>"+vec[i].chasis+"</td><td> "+vec[i].zona+
		"</td><td> "+vec[i].valor+"</td><td> "+vec[i].fecha+"</td><td> "+vec[i].correo+"</td><td> "+vec[i].tele+
		"</td><td> "+vec[i].dir+"</td><td><input type='button' id='editar' value='Editar' onclick='Editar("+i+");'></td>"+
		"<td><input type='button' id='eliminar' value='Eliminar' onclick='Eliminar("+i+");''></td></tr>";
		tabla.innerHTML = fila_tabla;
	}
	}else{
		fila_tabla ="<tr></tr>"
		tabla.innerHTML = fila_tabla;
	}

	
}

//Buscar
function Buscar(){
	var term = document.getElementById("termino");
	var select = document.getElementById("buscar_por");
	console.log(term);
	if(term.value != ""){
	if(select.value != "1"){
	 if(select.value == "placa"){
		buscar_placa(term.value);
	 }else{
		buscar_(term.value);

		}
	}else{
		alert("selecciona una opcion por favor");
		select.focus();
	}
	}else{
		alert("Por favor ingrese un termino a buscar.");
		term.focus();
	}
	return false;
}

//Buscar por año
function buscar_(term){
	var tabla      = document.getElementById("contenido_tabla");
	var fila_tabla = "";

	for(var i = 0; i < vec.length; i++){
		if(term===vec[i].Anyo){
			fila_tabla = "<tr><td>"+ vec[i].placa +"</td><td> "+vec[i].color+"</td><td> "+vec[i].Anyo+"</td><td> "+
		vec[i].capacidad+"</td><td> "+vec[i].cilindraje+"</td><td>"+vec[i].chasis+"</td><td> "+vec[i].zona+
		"</td><td> "+vec[i].valor+"</td><td> "+vec[i].fecha+"</td><td> "+vec[i].correo+"</td><td> "+vec[i].tele+
		"</td><td> "+vec[i].dir+"</td></td><td><input type='button' id='editar' value='Editar' onclick='Editar("+i+");'></td>"+
		"<td><input type='button' id='eliminar' value='Eliminar' onclick='Eliminar("+i+");''></td></tr>";
		tabla.innerHTML = fila_tabla;
		}else{
			fila_tabla = "<tr></tr>";
		tabla.innerHTML = fila_tabla;
		}
	}
}

//Buscar por placa
function buscar_placa(term){
	var tabla      = document.getElementById("contenido_tabla");
	var fila_tabla = "";

	for(var i = 0; i < vec.length; i++){
		if(term===vec[i].placa){
		fila_tabla = "<tr><td>"+ vec[i].placa +"</td><td> "+vec[i].color+"</td><td> "+vec[i].Anyo+"</td><td> "+
		vec[i].capacidad+"</td><td> "+vec[i].cilindraje+"</td><td>"+vec[i].chasis+"</td><td> "+vec[i].zona+
		"</td><td> "+vec[i].valor+"</td><td> "+vec[i].fecha+"</td><td> "+vec[i].correo+"</td><td> "+vec[i].tele+
		"</td><td> "+vec[i].dir+"</td><td><input type='button' id='editar' value='Editar' onclick='Editar("+i+");'></td>"+
		"<td><input type='button' id='eliminar' value='Eliminar' onclick='Eliminar("+i+");''></td></tr>";
		tabla.innerHTML = fila_tabla;
		}else{
			fila_tabla = "<tr></tr>";
		tabla.innerHTML = fila_tabla;

		}
	}
}
//Editar
function Editar(pos){
	var Placa     = document.getElementById("placa");
    var Color     = document.getElementById("color");
    var Ano       = document.getElementById("ano");
    var Capacidad = document.getElementById("capacidad");
    var Cilindraje= document.getElementById("cilindraje");
    var Chasis    = document.getElementById("chasis");
    var Zona      = document.getElementById("zona");
    var Valor     = document.getElementById("valor");
    var Fecha     = document.getElementById("fecha");
    var Email     = document.getElementById("email");
    var Tel       = document.getElementById("tel");
    var Direccion = document.getElementById("direccion");
    var Bus       = document.getElementById("termino");
    var Boton      = document.getElementById("btn");
    
	Placa.value      = vec[pos].placa;
	Color.value      = vec[pos].color;
	Ano.value        = vec[pos].Anyo;
	Capacidad.value  = vec[pos].capacidad;
	Cilindraje.value = vec[pos].cilindraje;
	Chasis.value 	 = vec[pos].chasis;
	Zona.value   	 = vec[pos].zona;
	Valor.value  	 = vec[pos].valor;
	Fecha.value      = vec[pos].fecha;
	Email.value      = vec[pos].correo;
	Tel.value	     = vec[pos].tele;
	Direccion.value  = vec[pos].dir;
	Boton.value      = "Editar";
}

//Eliminar
function Eliminar(pos){
	for(var z=0;z<vec.length;z++){
		if(z===pos){
			vec.splice(z,1);
		}
	}
	mostrar_tabla();
}


//Validar que sea alfanumerico
function soloLetrasYNum(campo) {
	var validos = " abcdefghijklmnopqrstuvwxyz0123456789";
       var letra;
       var bien = true;
       for (var i=0; i<campo.value.length; i++) {
        letra=campo.value.charAt(i).toLowerCase()
        if (validos.indexOf(letra) == -1){bien=false;};
       }
       return bien;
       
    }
//Que sea un numero
function numeric(campo){
    if (isNaN(parseInt(campo.value))) {
            alert('Este campo debe ser un número');
            return false;
          }else{
          	return true;
          }

}

