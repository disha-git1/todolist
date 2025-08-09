
window.onload = function () {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span class="delete-btn" onclick="deleteTask(this)">🗑️</span>`;
  document.getElementById("taskList").appendChild(li);

  saveTasks(); 
  input.value = ""; // clear input
}

function deleteTask(elem) {
  elem.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <span class="delete-btn" onclick="deleteTask(this)">🗑️</span>`;
    document.getElementById("taskList").appendChild(li);
  });
}
