/*aquí va tu código*/

function init(){
	var guardado= document.getElementById("guardar");
	guardado.addEventListener("click", guardarDatos);
}

function guardarDatos(){
	var dato1 = document.getElementById("clave").value;
	var dato2 = document.getElementById("valor").value;

	localStorage.setItem(dato1, dato2);

	var contenedor
}