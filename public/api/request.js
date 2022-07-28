const API_URL = "https://trella-65809-default-rtdb.firebaseio.com";
// "https://my-json-server.typicode.com/mariafernandamonroy/M3U2TrelloApp-mafemonroy";

axios
  .get(`${API_URL}/tasks.json`)
  .then((response) => showAllTask(response.data))
  .catch((error) => console.error(error));

const showAllTask = (data) => {
  for (const idObject in data) {
    task = data[idObject];
    createTask(task);
  }
};

const createTask = (task) => {
  console.log(task.person);

  let newTask = document.createElement("article");
  newTask.classList.add("card-task");

  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("card-task__title");
  taskTitle.innerText = `${task.title}`;

  let taskResponsible = document.createElement("p");
  taskResponsible.classList.add("card-task__responsible");
  taskResponsible.innerHTML = `<span class= "card-task__responsible">Responsable:</span> ${task.person}`;

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerHTML = `<span class= "card-task__details">Descripción:</span> ${task.details}`;

  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerHTML = `<span class= "card-task__date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  let taskCreateDate = document.createElement("p");
  taskCreateDate.classList.add("card-task__createDate");
  taskCreateDate.innerHTML = `<span class= "card-task__date">Creación:</span> ${dateFormat(
    task.created
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreateDate);

  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#inProgressTask");
  let columnDone = document.querySelector("#doneTasks");

  if (task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "inProgress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};
