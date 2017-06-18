/*aquí va tu código*/

function init(){
	var guardado= document.getElementById("guardar");
	guardado.addEventListener("click", guardarDatos);
	guardarDatos();
};

function guardarDatos(){
	var dato1 = document.getElementById("clave").value;//Obtengo valores de los input de nombre y comentario.
	var dato2 = document.getElementById("valor").value;

	localStorage.setItem(dato1, dato2);

	var contenedor = document.getElementById("contenedor");
	    contenedor.innerHTML= ""; //Limpio contenedor.

	for( var i= 0; i < localStorage.length; i++){
		 var clav= localStorage.key(i); //Obtengo la clave(dato1) al cual le tomare su valor(comentario).
		 var value = localStorage.getItem(clav);
         
         var nombre = document.createElement("h2");
         var valor1= document.createTextNode(clav);

         var comentario= document.createElement("p");
         var valor2 = document.createTextNode(value);

         nombre.appendChild(valor1);//Se creo más arriba un h2(var nombre),al cual le asigno un valor(var valor1), que este caso sera el nombre ingresado por el usuario.
         comentario.appendChild(valor2);//Se creo más arriba un p(var comentario),al cual le asigno un valor(var valor2), que este caso sera el comentario ingresado por el usuario.

         contenedor.appendChild(nombre);//Agrego los valores de nombre y comentario al contenedor.
         contenedor.appendChild(comentario);

         document.getElementById("clave").value= "";//Limpio campos de los input de nombre y comentario.
         document.getElementById("valor").value= "";
     };
};    

var limpiarDatos = document.getElementById("limpiar"); //Esta funcion limpia el contenedor y retira todos los comentarios(dejan de ser visibles). Pero los datos siguen guardados.
    limpiarDatos.addEventListener("click", function(){ 

    	contenedor.innerHTML= "";
    });


init();