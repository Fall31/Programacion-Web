import { clientServiceProd } from "../service/producto-service.js";
const formularioProd = document.querySelector("[data-formProd]")
const obtenerInfoProd= async()=>{//estructura async
    const url=new URL(window.location);// nueva url
    const id= (url.searchParams.get("id"));// url con identificador
    if(id==null){
        window.location.href="../screen/error.html"// si no recupera el id pues error 
    }
    const nombre = document.querySelector("[data-nombreProd]")//recuperamos datos
    const precio = document.querySelector("[data-precio]")
    const descripcion = document.querySelector("[data-descripcion]")
try{
    const perfil = await  clientServiceProd.clientes(id)// await que se mantiene en espera mientras almacena el id 
if(perfil.nombre && perfil.precio && perfil.descripcion){
    nombre.value=perfil.nombre;
    precio.value=perfil.precio;
    descripcion.value=descripcion.precio;
}else{
    throw new Error();
}   
}catch(error){
    console.log("Catch error",error);
    window.location.href="../screens/error.html"
}
};
obtenerInfoProd();

formularioProd.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url = new URL(window.location)
    const id =(url.searchParams.get("id"));

    const nombre= document.querySelector('[data-nombreProd]').value;
    const precio= document.querySelector('[data-precio]').value;
    const descripcion= document.querySelector('[data-descripcion]').value;
    clientServiceProd.actualizarCliente(nombre,precio,descripcion,id).then(()=>{
        window.location.href="../screens/edicionprod_concluida.html";
    });
})