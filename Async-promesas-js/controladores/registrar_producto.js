import { clientService } from "../servicio/client-service.js";
const formul=document.querySelector("[data-formProduct]")
formul.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const name=document.querySelector("[data-name]").value;
    const precio=document.querySelector("[data-precio]").value;
    const descripcion=document.querySelector("[data-descripcion]").value;
    clientService.crearProducto(name,precio,descripcion).then((respuesta)=>{
        window.location.href="/Async-promesas-js/screens/registro_completado.html"
    }).catch(error => console.log(error))
});