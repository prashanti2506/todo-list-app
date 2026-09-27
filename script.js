let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

let currentFilter = "all";

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    filteredTasks.forEach((task) => {
        const index = tasks.indexOf(task);

        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <div class="task-left">
                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="completeTask(${index})"
                >

                <span class="${task.completed ? "completed" : ""}">
                    ${task.text}
                </span>
            </div>

            <button
                class="delete-btn"
                onclick="deleteTask(${index})"
            >
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function showAll() {
    currentFilter = "all";
    displayTasks();
}

function showActive() {
    currentFilter = "active";
    displayTasks();
}

function showCompleted() {
    currentFilter = "completed";
    displayTasks();
}

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

displayTasks();