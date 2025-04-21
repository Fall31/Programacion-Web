import { clientService } from "../servicio/client-service.js"
const crear_nueva_fila=(nombre,email,id)=>{//Recepciono datos
    const fila=document.createElement('tr');//Creo una nueva fila en la tabala
    //guardo html en una variable y tambien llamo a mis variable de entrada
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td>${email}</td>
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
            clientService.eliminarCliente(id).then(respuesta=>{
                alert("eliminado")
            }).catch((error)=>alert("error"))
        })

        return fila;
};
const table = document.querySelector("[data-table]");
clientService.listaclientes().then((data)=>{
    data.forEach(perfil=>{
        const nuevafila=crear_nueva_fila(perfil.nombre,perfil.email)
        table.appendChild(nuevafila)
    });
}).catch((error) => alert("error"));