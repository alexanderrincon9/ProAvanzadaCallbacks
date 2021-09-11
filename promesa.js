
// datos del usuario

let datosUsuario={
    usuario:"alexanderr",
    password:"12345"
}


function conectarNetflix(datos){
        console.log("Procesando la peticion...")

        let promesa = new Promise(function(resolve,reject ){
            setTimeout(function(){
                if(datos.usuario==="alexanderr"&& datos.password==="12345"){
        
                    resolve(200,"Bienvenido a Netflix")
        
                }else{
        
                    reject(204,"NO estas registrado, suscribete...")
        
                }
        
            },5000)
        })

        return promesa;
}


conectarNetflix(datosUsuario)
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})
