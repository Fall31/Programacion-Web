import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";
(()=>{
const btn = document.querySelector('[data-form-btn]')


const createTask=(evento)=>{
    evento.preventDefault();
    const input =document.querySelector('[data-form-input]');
    const value=input.value;//funcion para recuperar informacion de input
    const list=document.querySelector('[data-list]')
    const task=document.createElement('li')
    task.classList.add('card');
    input.value='';
    /*const contenido=`<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `*/ //(Esto ayuda a realizar una lista en la interface)
    const contTask=document.createElement('div');
  
    const titleTask=document.createElement('span');
    titleTask.classList.add('task');

    titleTask.innerText=value;

    contTask.appendChild(titleTask);
    //const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`
    contTask.appendChild(checkComplete());//agrega check al div
    task.appendChild(contTask);
    //task.innerHTML=contenido;//(Parte de const contenido=`<div>)
    task.appendChild(deleteIcon());
    list.appendChild(task);
}
/*btn.addEventListener('click', createTask);
const checkComplete=()=>{
    const i=document.createElement('i')//Creacion de un icono
    i.classList.add("far", "fa-check-square", "icon")//Agregando estilos a icono
    i.addEventListener("click", color);
    return i;
}*/
/*const color =(evento)=>{
    const element=evento.target
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');
};*/
/*const deleteIcon = ()=>{
    const i= document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon')
    i.addEventListener('click', eliminarTarea);
    return i;
}*/
/*const eliminarTarea=(evento)=>{
    const parent =evento.target.parentElement;
    parent.remove();
}*/
btn.addEventListener('click', createTask);
});