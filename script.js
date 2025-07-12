function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const taskText = taskInput.value.trim();
  const timeValue = taskTime.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  const taskDetails = document.createElement("span");
  taskDetails.innerHTML = `${taskText} <br>🕒 ${timeValue ? new Date(timeValue).toLocaleString() : ''}`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask !== null) {
      taskDetails.innerHTML = `${newTask} <br>🕒 ${timeValue ? new Date(timeValue).toLocaleString() : ''}`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  actions.append(doneBtn, editBtn, deleteBtn);
  li.append(taskDetails, actions);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}
