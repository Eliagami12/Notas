let alert = localStorage.getItem("datosAlert") || ""

let producto = ""

function guardarProducto(){
    producto = document.getElementById("producto").value;
    console.log(producto)
    let coloresAlert = ["alert-primary", "alert-info" , "alert-warning" ,
    "alert-danger" , "alert-success" , "alert-secondary" , "alert-danger" ,
    "alert-success" , "alert-secondary" , "alert-primary" , "alert-info"]
    let numeroAleatorio = Math.floor(Math.random()*10)
    console.log("el numero aleatorio es ", numeroAleatorio)
    let app = document.getElementById("app")
    alert = alert +  ` 
    <div class="alert ${coloresAlert[numeroAleatorio]} " role="alert ">
        ${producto}
    </div>
    `;

    app.innerHTML=alert;
    //el localStore.setItem es para guardar datos de texto y el datosalert es el key y el value es el alert
    localStorage.setItem("datosAlert", alert)
}

function mostrarModal(){
    producto = document.getElementById("producto")
    producto.value = ""
}

function inicializarPagina(){
    let datosAlert =  localStorage.getItem("datosAlert")
    app = document.getElementById("app")
    app.innerHTML = datosAlert
}
inicializarPagina()



