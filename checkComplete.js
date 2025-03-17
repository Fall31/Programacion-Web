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
export default checkComplete;