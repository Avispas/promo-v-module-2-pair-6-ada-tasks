const btnAdd = document.querySelector('.js-btnAdd');
const inputAdd = document.querySelector('.js-inputAdd');
const inpuSearch = document.querySelector('.js-searchTask');
const btnSearch = document.querySelector('.js-btnSearch');
const inputTask = document.querySelector('.js-inputTask');
const task = document.querySelector('.js-task');
const ul = document.querySelector('.js-ul');
const li = `<li class="fieldsetTwo__div js-li">
<input type="checkbox" class="fieldsetTwo__div--check js-inputTask">
<span class="fieldsetTwo__div--parrag js-task">${arrayInputs}.</span>
</li>`;
const arrayInputs = [];


const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];
  // Pintar una tarea:
  // 1.- clase = lineThrough
  // 2.- crear una funcion
  // 3.- if completed: true te devuelte la tarea con lineThrough
  // función para pintar en el html
  // Recogemos el input.value , y lo pegamos en ul

function printTask () {
  ul.innerHTML = tasks[1];
}
btnAdd.addEventListener('click', printTask);

function handlePrint() {
  ul.innerHTML = tasks[1];
}