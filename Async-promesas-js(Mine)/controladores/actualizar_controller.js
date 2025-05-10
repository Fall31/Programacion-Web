import { clientService } from "../servicio/client-service.js";
const formulario =document.querySelector("[data-form]")

const obtenerInfo=async()=>{
    const url= new URL(window.location);
    const id= (url.searchParams.get('id'));
    if(id==null){
        window.location.href="../screens/error.html"
    }
    const Nombre = document.querySelector("[data-nombre]")
    const E_mail = document.querySelector("[data-email]")

    try{
        const perfil = await  clientService.clientes(id)// await que se mantiene en espera mientras almacena el id 
    if(perfil.Nombre && perfil.E_mail){
        Nombre.value=perfil.nombre;
        E_mail.value=perfil.email;
    }else{
        throw new Error();
    }   
    }catch(error){
        console.log("Catch error",error);
        window.location.href="../screens/error.html"
    }
    };
obtenerInfo();
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url=new URL(window.location)
    const id=url.searchParams.get('id');

    const Nombre=document.querySelector('[data-nombre]').value;
    const E_mail=document.querySelector('[data-email]').value;
    clientService.actualizarCliente(Nombre,E_mail,id).then(()=>{
        window.location.href="../screens/edicion_concluida.html";
    })
})