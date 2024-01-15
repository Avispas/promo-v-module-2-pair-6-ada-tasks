const btnAdd = document.querySelector('.js-btnAdd');
const inputAdd = document.querySelector('.js-inputAdd');
const inpuSearch = document.querySelector('.js-searchTask');
const btnSearch = document.querySelector('.js-btnSearch');
const inputTask = document.querySelector('.js-inputTask');
const task = document.querySelector('.js-task');
const ul = document.querySelector('.js-ul');
const arrayInputs = [];
const inputVale = inputAdd.value;

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
// Pintar una tarea:
// 1.- clase = lineThrough
// 2.- crear una funcion
// 3.- if completed: true te devuelte la tarea con lineThrough
// función para pintar en el html
// Recogemos el input.value , y lo pegamos en ul

function takeValue() {
  let newTask = document.getElementById('js-newTask').value;
  let newObject = { name: newTask, completed: false };
  tasks.push(newObject);
}

for (const eachName of tasks) {
  ul.innerHTML += `<li class="fieldsetTwo__div js-li">
    <input type="checkbox" onclick="crossed()" class="fieldsetTwo__div--check js-inputTask">
    <span class="fieldsetTwo__div--parrag js-task"> ${eachName.name}.</span>
    </li>`;
}

function crossed(event) {
  event.preventDefault();
  task.classList.add('lineThrough');
}
inputTask.addEventListener('click', takeValue);

// primero cojo el input value y lo pego en
