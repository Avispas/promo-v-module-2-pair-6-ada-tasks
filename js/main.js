const btnAdd = document.querySelector('.js-btnAdd');
const inputAdd = document.querySelector('.js-inputAdd');
const inpuSearch = document.querySelector('.js-searchTask');
const btnSearch = document.querySelector('.js-btnSearch');
const inputTask = document.querySelector('.js-inputTask');
const task = document.querySelector('.js-task');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];