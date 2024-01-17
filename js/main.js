const btnAdd = document.querySelector('.js-btnAdd');
const inputAdd = document.querySelector('.js-inputAdd');
const inputSearch = document.querySelector('.js-searchTask');
const btnSearch = document.querySelector('.js-btnSearch');
const inputTask = document.querySelector('.js-inputTask');
const task = document.querySelector('.js-task');
const ul = document.querySelector('.js-ul');
const checkBox = document.querySelector('.js-inputTask');
/*
const tasksTest = [
    { name: 'Recoger setas en el campo', completed: false },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
];*/

let tasks = [];

const url = 'https://dev.adalab.es/api/todo';

function askToServer () {
  fetch (url)
  .then ((response)=> response.json())
  .then ((data) => {
    console.log(data);
    tasks = data.results;
    renderTasks(tasks);
  })
}

askToServer();
function handleFilter(event) {
  event.preventDefault();
  const valueInput = inputSearch.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}
btnSearch.addEventListener('click', handleFilter);

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-inputTask');
  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck);
  }
};

const renderTasks = (tasks)=>{
  ul.innerHTML = '';
  for (let i = 0; i < tasks.length; i++){
    if(tasks[i].completed){
      ul.innerHTML += `<li class="fieldsetTwo__div js-li lineThrough">
      <input type="checkbox" class="fieldsetTwo__div--check js-inputTask"  id="${i}" checked>
      <span class="fieldsetTwo__div--parrag js-task">${tasks[i].name}.</span>
      </li>`;
    }
    else{
      ul.innerHTML += `<li class="fieldsetTwo__div js-li">
      <input type="checkbox" class="fieldsetTwo__div--check js-inputTask"  id="${i}">
      <span class="fieldsetTwo__div--parrag js-task">${tasks[i].name}.</span>
      </li>`;
    }
  }
  listenCheck();
};

function handleCheck(event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}
renderTasks(tasks);
