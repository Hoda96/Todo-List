"strict mode";

const toggleMode = document.querySelector(".toggle-mode");
const mainBg = document.querySelector(".bg-img");
const input = document.querySelectorAll(".add-task-input")[0];
const tasksControlRow = document.querySelector(".tasks-control");
const addNewTask = document.querySelector(".add-new-task");
const tasksList = document.querySelectorAll("li.tasks-wrapper p");
const newTaskTitle = document.querySelector(".new-task-title");
const todoContainer = document.querySelector("input");
const task = document.querySelector(".task");
const taskList = document.querySelector(".todo-container");
const totalActiveTasks = document.querySelector(".total-active-tasks");

let darkMode = false;

toggleMode.addEventListener(
  "click",
  function (e) {
    if ((e.target.nodeName = "img")) {
      // document.body.style.backgroundColor = 'var(--Very-Dark-Blue)';
      // toggleMode.src = './images/icon-sun.svg';
      // e.target.classList.toggle('dark');
      if (darkMode == true) {
        document.body.classList.remove("dark");
        toggleMode.src = "./images/icon-moon.svg";
      } else {
        document.body.classList.add("dark");
        toggleMode.src = "./images/icon-sun.svg";

        for (let i = 0; i < tasksList.length; i++) {
          tasksList[i].style.backgroundColor = "var( --Very-Dark-Grayish-Blue)";
          tasksList[i].style.color = "#fff";
        }
      }
      darkMode = !darkMode;
      console.log("!dark");
    }
  },
  false
);

// ["keydown", "click"].forEach((event) => {
//   input.addEventListener;(event, addNewTasks)
// });

// Add eventListeners to both input and ADD btn for addin a new todo...
input.addEventListener("keydown", addNewTasks);
addNewTask.addEventListener("click", addNewTasks);

// create new rows of todo
function addNewTasks(e) {
  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();
    const newTask = input.value;
    if (newTask === " ") alert("Add a task first.");
    else {
      clear();

      // console.log(newTask);

      const markup = `
    <li class="task-done shadow-sm py-3 px-2">
      <input class="form-check-input ms-2 " type="checkbox" value="" id="accept">
      <label class=" form-check-label  ps-3" for="accept">${newTask}</label>
    </li>
 
    `;
      taskList.insertAdjacentHTML("afterbegin", markup);
    }

    // count total undone tasks
    const undonetasks = taskList.getElementsByTagName("li").length;
    totalActiveTasks.textContent = undonetasks;

    console.log(undonetasks);

    // Add a "checked" symbol when clicking on a list item
    const taskDone = document.querySelector(".task-done");
    const checkbox = document.querySelector("#accept");

    console.log(checkbox);
    checkbox.addEventListener("click", function () {
      if (checkbox.checked == true) {
        console.log("checked");
        // var checkboxes = document.querySelectorAll(
        //   'input[type="checkbox"]:checked'
        // );
        // console.log(checkboxes);
        taskDone.classList.toggle("checked");
        // taskDone.style.color = "var(--Light-Grayish-Blue)";

        totalActiveTasks.textContent--;
      }
    });
  }
}

// Clear input field after adding task
const clear = function () {
  input.value = " ";
};
