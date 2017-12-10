window.onload = function() {
    board = document.querySelector('#board');
    addCategory = document.querySelector('#addCategory');
    newTaskButton = document.querySelector('.addTask');

    addCategory.onclick = function() {
        board.insertBefore(newCategory(), this);
    };
};

function newCategory() {
    //Crée le bouton pour supprimer la catégorie
    categoryTitle = document.createElement('h3');
    categoryTitle.innerHTML = 'Category title';
    categoryTitle.className = 'category-title';
    categoryTitle.setAttribute('contenteditable','true');
    removeCategory = document.createElement('div');
    removeCategory.className = 'removeCategory';
    removeCategory.appendChild(document.createElement('i'));
    removeCategory.querySelector('i').className = 'fa fa-times';

    //Crée le bouton pour ajouter une tâche
    addTaskButton = document.createElement('div');
    addTaskButton.className='addTask';
    addTaskButton.appendChild(document.createElement('p'));
    addTaskButton.querySelector('p').innerHTML = 'New Task';
    addTaskButton.appendChild(document.createElement('i'));
    addTaskButton.querySelector('i').className = 'fa fa-plus';

    //rassemble les deux boutons
    categoryActions = document.createElement('div');
    categoryActions.className = 'actions';
    categoryActions.appendChild(removeCategory);
    categoryActions.appendChild(addTaskButton);

    //Crée la catégorie
    category = document.createElement('div');
    category.className = 'category';
    //On ajoute à la catégorie les boutons d'actions supprimer / nouvelle tâche
    
    category.appendChild(categoryActions);
    category.appendChild(categoryTitle);

    removeCategory.onclick = function() {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    };

    addTaskButton.onclick = function() {
        this.parentElement.parentElement.appendChild(newTask());
    };
    return category;
};

function newTask() {
    task = document.createElement('div');
    task.className = 'task';
    task.appendChild(document.createElement('h3'));
    task.querySelector('h3').innerHTML = 'Task title';
    task.appendChild(document.createElement('p'));
    task.querySelector('p').innerHTML = 'Add description';
    task.appendChild(newPopup());
    task.appendChild(newOverlay());
    task.onclick = function(event) {
        if (event.target == this.querySelector('.popup').querySelector('.close-popup') || event.target == this.querySelector('.popup').querySelector('.btn-task')) {
            return false;
        }
        this.querySelector('.popup').className = 'popup';
        this.querySelector('.overlay').className = 'overlay';
    };
    popup.querySelector('.close-popup').onclick = function() {
        this.parentElement.parentElement.querySelector('.popup').className = 'popup hidden';
        this.parentElement.parentElement.querySelector('.overlay').className = 'overlay hidden';
    };

    return task;
};

function newPopup() {
    popup = document.createElement('div');
    popup.className = 'popup hidden';
    popup.appendChild(document.createElement('i'));
    popup.querySelector('i').className = 'fa fa-times close-popup';
    //categoryName = document.createElement('h2');
    //categoryName.innerHTML = 'Category name: '
    //inputCategoryName = document.createElement('input');
    //inputCategoryName.setAttribute('type', 'text');
    //inputCategoryName.setAttribute('name', 'category-name');
    taskTitle = document.createElement('h3');
    taskTitle.innerHTML = 'Task title: '
    inputTaskTitle = document.createElement('input');
    inputTaskTitle.setAttribute('type', 'text');
    inputTaskTitle.setAttribute('name', 'task-title');
    description = document.createElement('h3');
    description.innerHTML = 'Description';
    textDescription = document.createElement('textarea');
    textDescription.setAttribute('cols', '35');
    textDescription.setAttribute('rows', '5');
    deleteTask = document.createElement('button');
    deleteTask.className = 'delete-task';
    deleteTask.innerHTML = 'Delete task';
    confirmButton = document.createElement('button');
    confirmButton.className = 'btn-task';
    confirmButton.innerHTML = 'Save';
    //********************************************/
    // popup.appendChild(categoryName);
    // popup.appendChild(inputCategoryName);
    popup.appendChild(taskTitle);
    popup.appendChild(inputTaskTitle);
    popup.appendChild(description);
    popup.appendChild(textDescription);
    popup.appendChild(deleteTask);
    popup.appendChild(confirmButton);

    confirmButton.onclick = function() {
        this.parentElement.parentElement.querySelector('h3').innerHTML = this.parentElement.querySelector('input[name="task-title"]').value;
        this.parentElement.parentElement.querySelector('p').innerHTML = this.parentElement.querySelector('textarea').value;
        this.parentElement.parentElement.querySelector('.popup').className = 'popup hidden';
        this.parentElement.parentElement.querySelector('.overlay').className = 'overlay hidden';
    };

    deleteTask.onclick = function() {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    };

    return popup;
}
function newOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'overlay hidden';
    return overlay;
}