const API_URL =
  "https://my-json-server.typicode.com/mariafernandamonroy/M3U2TrelloApp-mafemonroy";

axios
  .get(`${API_URL}/task`)
  .then((response) => showAllTask(response.data))
  .catch((error) => console.error(error));

const showAllTask = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("card-task");

  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("card-task__title");
  taskTitle.innerText = task.title;

  let taskResponsible = document.createElement("p");
  taskResponsible.classList.add("card-task__responsible");
  taskResponsible.innerText = `<span class= "card-task__responsible>Responsable:</span> ${task.person}`;

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerText = `<span class= "card-task__details>Descripción:</span> ${task.details}`;

  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerText = `<span class= "card-task__date>Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);

  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#inProgressTask");
  let columnDone = document.querySelector("#doneTasks");

  if(task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if(task.state === "inProgress") {
    columnInProgress.appendChild(newTask);
  }
  if(task.state === "done") {
    columnDone.appendChild(newTask);
  }
};
