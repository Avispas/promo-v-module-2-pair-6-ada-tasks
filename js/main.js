const btnAdd = document.querySelector('.js-btnAdd');
const inputAdd = document.querySelector('.js-inputAdd');
const inpuSearch = document.querySelector('.js-searchTask');
const btnSearch = document.querySelector('.js-btnSearch');
const inputTask = document.querySelector('.js-inputTask');
const task = document.querySelector('.js-task');
const ul = document.querySelector('.js-ul');
const checkBox = document.querySelector('.js-inputTask');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false, },
];
const taskCompleted = (event)=>{
  //Función que se encarga de coger el valor del cheeckbox y modificar su propiedad en el objeto
  console.log(checkBox);
  const targetInput = event.target;
  console.log(targetInput);
}


const getLineThrough = ()=>{
  for (const eachName of tasks) {
    if(eachName.completed === true){
      ul.innerHTML += `<li class="fieldsetTwo__div js-li lineThrough">
      <input type="checkbox" class="fieldsetTwo__div--check js-inputTask" checked>
      <span class="fieldsetTwo__div--parrag js-task">${eachName.name}.</span>
      </li>`;

    }else{
      ul.innerHTML += `<li class="fieldsetTwo__div js-li">
      <input type="checkbox" class="fieldsetTwo__div--check js-inputTask">
      <span class="fieldsetTwo__div--parrag js-task">${eachName.name}</span>
      </li>`;         
    }
   }
  
};

getLineThrough();

