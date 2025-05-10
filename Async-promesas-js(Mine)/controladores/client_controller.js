import { clientService } from "../servicio/client-service.js";
const crear_nueva_fila=(Nombre,E_mail,id)=>{//Recepciono datos
    const fila=document.createElement('tr');//Creo una nueva fila en la tabala
    //guardo html en una variable y tambien llamo a mis variable de entrada
    const contenido = `
            <td class="td" data-td>
            ${Nombre}
            </td>
            <td>${E_mail}</td>
            <td>
            <ul class="table__button-control">
                <li>
                    <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}">
                    Eliminar
                    </button>
                </li>
                </ul>
            </td>
            `
        fila.innerHTML=contenido;

        const btn = fila.querySelector("button")
        btn.addEventListener("click",()=>{
            const id=btn.id;
            clientService.eliminarCliente(id).then((respuesta)=>{
                alert("eliminado")
                window.location.reload();
            }).catch(error=>alert("error"))
        });

        return fila;
};
const table = document.querySelector("[data-table]");
clientService
.listaclientes()
    .then((data)=>{
    data.forEach(({id, Nombre,E_mail}) => {
                const nuevaLinea= crear_nueva_fila(id, Nombre,E_mail)// llamo a 3 referencias
                table.appendChild(nuevaLinea)
                
                });
        

    console.log(data);// verifico datos 
}).catch((error)=>alert("ocurrio un error"));