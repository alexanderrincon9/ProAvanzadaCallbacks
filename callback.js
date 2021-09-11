// datos del usuario

let datosUsuario={
    usuario:"alexanderr",
    password:"12345"
}


function conectarNetflix(datos,generarRespuestaCallback){
        console.log("Procesando la peticion...")
    setTimeout(function(){
        if(datos.usuario==="alexanderr"&& datos.password==="12345"){

            generarRespuestaCallback(200)

        }else{

            generarRespuestaCallback(204)

        }

    },5000)

}

//utilizo la funcion principal
//declaro lo que hace el callback
conectarNetflix(datosUsuario,function(codigo){
    if(codigo==200){

        console.log("Bienvenido a Netflix")
        console.log("Cargando Peliculas")
    }else{
        console.log("NO estas registrado, suscribete...")
    }
})

