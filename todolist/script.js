document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour ajouter une tâche à une section spécifique
    function addTask(sectionId, taskText) {
        const section = document.getElementById(sectionId);
        const taskList = section.querySelector(".task-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Supprimer</button>
        `;
        taskList.appendChild(li);
    }

    // Écouteurs d'événements pour ajouter des tâches
    document.getElementById("courses").addEventListener("click", function () {
        const taskText = prompt("Ajouter une tâche pour les courses :");
        if (taskText) {
            addTask("courses", taskText);
        }
    });

    document.getElementById("menage").addEventListener("click", function () {
        const taskText = prompt("Ajouter une tâche pour le ménage :");
        if (taskText) {
            addTask("menage", taskText);
        }
    });

    document.getElementById("jardin").addEventListener("click", function () {
        const taskText = prompt("Ajouter une tâche pour le jardin :");
        if (taskText) {
            addTask("jardin", taskText);
        }
    });

    document.getElementById("plantes").addEventListener("click", function () {
        const taskText = prompt("Ajouter une tâche pour les plantes maison :");
        if (taskText) {
            addTask("plantes", taskText);
        }
    });

    document.getElementById("documents").addEventListener("click", function () {
        const taskText = prompt("Ajouter une tâche pour les documents :");
        if (taskText) {
            addTask("documents", taskText);
        }
    });

    // Écouteur d'événement pour supprimer une tâche
    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-task")) {
            e.target.parentElement.remove();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // ...

    

    
});
