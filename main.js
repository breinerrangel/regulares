/* let producto =document.getElementById("procuto")
let agregar=document.getElementById("agregar")

agregar.addEventListener("click",()=>{
    producto.innerHTML+=` <div class="card">
<button id="agregar">agregar</button>
<h3 id="titulo">sddsa</h3>
<p class="descripcion">dsad</p>
<p class="precio">sadasd</p>
<img src="" alt="">
<button id="procuto">eliminar</button>
</div>`

})
let tarjeta=document.createElement("div")
tarjeta.className="produc_card"
let tarjetaT=document.createElement("div")
tarjetaT.className="tituloxd"
tarjeta.textContent="titulo"

let image=document.createElement("div")
image.className="img"
image.textContent="img"
tarjeta.appendChild(tarjetaT)
producto.appendChild(tarjeta)
tarjeta,appendChild(image) */


let num=" amo"
const patron=/..mo/gi
if(patron.test(num)){
    console.log("xd")
    
}
const expresiones = {

	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /3\d{9}$/g ,// 10 num
    fecha: /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(d{4})$/
}


let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let telefono=document.getElementById("telefono")
let naciomoento=document.getElementById("nacimiento")
let contraseña=document.getElementById("contraseña")
let sub_contraseña=document.getElementById("confi_contraseña")
let correo=document.getElementById("correo")
let aceptar=document.getElementById("aceptar")
let cancelar=document.getElementById("cancelar")
let veri=false

function validar(){
    
    if(expresiones.nombre.test(nombre.value) && expresiones.nombre.test(apellido.value)){
        veri=true
       
    }
   
    if(expresiones.telefono.test(telefono.value)){
        veri=true
        
    }

    if(expresiones.correo.test(correo.value)){
        veri=true
       

    }
    if(expresiones.fecha.test(naciomoento.value)){
    
    }
  

    if(contraseña.value==sub_contraseña.value){
        veri=true
        
        

    }
    if(veri==true){
        location.href="https://es.javascript.info/regexp-methods"
    }
    else{
        alert("revise el formolario")
    }
}
aceptar.addEventListener("click",validar)



