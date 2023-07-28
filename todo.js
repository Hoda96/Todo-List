'strict mode'

const toggleMode = document.querySelector('.toggle-mode');
const mainBg = document.querySelector('.bg-img');
const tasksWrapper = document.querySelectorAll('.tasks-wrapper');
const tasksControlRow = document.querySelector('.tasks-control');
const todoInput = document.querySelector('.todo-input');
const tasksList = document.querySelectorAll('li.tasks-wrapper p');
const newTaskTitle = document.querySelector('.new-task-title');
const todoContainer = document.querySelector('.todo-container');
const task = document.querySelector('.task');

let darkMode = false;

toggleMode.addEventListener('click', function(e) {

    if (e.target.nodeName = 'img') {
        // document.body.style.backgroundColor = 'var(--Very-Dark-Blue)';
        // toggleMode.src = './images/icon-sun.svg';
        // e.target.classList.toggle('dark');
        if (darkMode == true) {
            document.body.classList.remove("dark");
            toggleMode.src = './images/icon-moon.svg';
        } else {
            document.body.classList.add("dark");
            toggleMode.src = './images/icon-sun.svg';
        }
        darkMode = !darkMode;
    }


}, false);


// toggleMode.addEventListener('click', function() {

//     // if (toggleMode.src.includes('./images/icon-moon.svg')) {
//     document.body.style.backgroundColor = 'var(--Very-Dark-Blue)';

//     task.innerHTML = "hi";
//     toggleMode.src = './images/icon-sun.svg';
//     mainBg.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';


//     for (let i = 0; i < tasksWrapper.length; i++) {
//         tasksWrapper[i].style.backgroundColor = 'var( --Very-Dark-Grayish-Blue)';

//     }

//     for (let i = 0; i < tasksList.length; i++) {
//         tasksList[i].style.color = '#fff';

//         // if (li.classList.contains('checked')) {
//         //     tasksList.style.color = 'var(--Dark-Grayish-Blue)';
//         // }
//     }


//     tasksControlRow.style.backgroundColor = 'var( --Very-Dark-Grayish-Blue)';


//     todoInput.style.backgroundColor = 'var( --Very-Dark-Grayish-Blue)';
//     todoInput.style.color = 'fff';


//     newTaskTitle.style.color = 'var(--Dark-Grayish-Blue)';



//     // }

// })

// todoInput.addEventListener('keypress', function() {
//     if (todoInput.value === '') {
//         alert('Please add a to do.')
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = todoInput.value;
//         tasksList.appendChild(li);
//     }

// })