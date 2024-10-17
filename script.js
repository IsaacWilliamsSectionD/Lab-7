document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskCategory = document.getElementById("taskCategory");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  const addTask = () => {
    const taskText = taskInput.value.trim();
    const category = taskCategory.value;
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.classList.add(category);
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";

    taskCheckbox.addEventListener("change", () => {
      if (taskCheckbox.checked) {
        taskItem.classList.add("completed");
      } else {
        taskItem.classList.remove("completed");
      }
    });

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
  };

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });
});
