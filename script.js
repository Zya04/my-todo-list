window.onload = function() {
    board = document.querySelector('#board');
    addCategory = document.querySelector('#addCategory');
    newTaskButton = document.querySelector('.addTask');
    

    function newCategory() {
        //Crée le bouton pour supprimer la catégorie
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
        
        return task;
    };

    addCategory.onclick = function() {
        board.insertBefore(newCategory(), this);
    };
};