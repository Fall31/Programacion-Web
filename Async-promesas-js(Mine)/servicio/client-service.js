/*const crear_nueva_fila=(nombre,email)=>{//Recepciono datos
    const fila=document.createElement('tr');//Creo una nueva fila en la tabala
    //guardo html en una variable y tambien llamo a mis variable de entrada
    const contenido = `
            <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `
        fila.innerHTML=contenido;
        return fila;
};

const table = document.querySelector("[data-table]");

const lista_clientes=()=>{ /metodo antiguo
    const promesa=new Promise((resolve,reject)=>{
        const http= new XMLHttpRequest();//variable con request y xml
        http.open("GET","http://localhost:5501/perfil");
        http.send;
        http.onload=()=>{
            const response = JSON.parse(http.response);//convierto mi respuesta http en xml
            if (http.response >= 400){
                reject(response)
            } else{
                resolve(response)
            }
        };
    });
    return promesa;
}
const listaclientes=()=> fetch("http://localhost:5000/perfil").then((respuesta)=>respuesta.json());

lista_clientes()
    .this((data)=>{
        data.forEach((perfil) => {
            const nuevafila= crear_nueva_fila(perfil.nombre,perfil.email);
            table.appendChild(nuevafila)
        })
    })
    .catch((error) => alert("No existe conexion"));


const crearCliente=(nombre,email)=>{
  return fetch ("http://localhost:5000/perfil",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({nombre,email, id: uuid.v4()})
  });
};
const eliminarCliente=(id)=>{
  return fetch(`http://localhost:5000/perfil/${id}`,{
    method:"DELETE"
  });
};

const clientes=(id)=>{
  return fetch(`http://localhost:5000/perfil/${id}`).then((respuesta)=>respuesta.json())
}

const actualizarCliente=(nombre,email,id)=>{
  return fetch(`http://localhost:5000/perfil/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({nombre,email})
  }).then(respuesta=>console.log(respuesta)).catch((err)=>console.log(err));
}
export const clientService={
  listaclientes, crearCliente, eliminarCliente,clientes,actualizarCliente
};
*/
const API_BASE_URL='http://localhost/api/conexion.php';
const listaclientes=()=>{
  return fetch(API_BASE_URL)
  .then(response=>{
    if(!response.ok)throw new Error('error clientes');
    return response.json();
  })
};
const crearCliente=(Nombre,E_mail )=>{
  return fetch(API_BASE_URL,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Nombre,E_mail,id:uuid.v4()
    })
  }).then(response=>{
    if(!response.ok)throw new Error('error crear clientes');
    return response.json();
  })
}
const eliminarCliente=(id)=>{
  return fetch(`${API_BASE_URL}?id=${id}`, {
    method: 'DELETE'
}).then(response => {
    if (!response.ok) throw new Error('Error al eliminar cliente');
    return response.json();
});
};
const clientes=(id)=>{
  return fetch(`${API_BASE_URL}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Error al obtener cliente');
            return response.json();
        });
}
const actualizarCliente=(Nombre,E_mail,id)=>{
  return fetch(API_BASE_URL,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({Nombre,E_mail, id})
  }).then(response => {
    if (!response.ok) throw new Error('Error al actualizar cliente');
    return response.json();
});
}
export const clientService={
  listaclientes, crearCliente, eliminarCliente,clientes,actualizarCliente
};