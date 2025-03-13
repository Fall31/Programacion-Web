const btn = document.querySelector('[data-form-btn]')
console.log(btn);
const createTask=(evento)=>{
    evento.preventDefault();
    const input =document.querySelector('[data-form-input]');
    console.log(input.value); //funcion para recuperar informacion de input
    const value=input.value;
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
    contTask.appendChild(checkComplete());//agrega check al div
    const titleTask=document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText=value;
    contTask.appendChild(titleTask);
    const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`

    task.appendChild(contTask);
    //task.innerHTML=contenido;//(Parte de const contenido=`<div>)
    list.appendChild(task);
    console.log(contenido);
}
btn.addEventListener('click', createTask);
const checkComplete=()=>{
    const i=document.createElement('i')//Creacion de un icono
    i.classList.add("far", "fa-check-square", "icon")//Agregando estilos a icono
    i.addEventListener("click", color);
    return i;
}
const color =(evento)=>{
    const element=evento.target
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');
};