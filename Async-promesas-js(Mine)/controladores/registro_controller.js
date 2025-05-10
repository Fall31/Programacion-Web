import { clientService } from "../servicio/client-service.js";
const formulario=document.querySelector("[data-form]")
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const Nombre=document.querySelector("[data-nombre]").value;
    const E_mail=document.querySelector("[data-email]").value;
    clientService.crearCliente(Nombre,E_mail).then((respuesta)=>{
        window.location.href="/Async-promesas-js/screens/registro_completado.html"
    }).catch(error => console.log(error))
});