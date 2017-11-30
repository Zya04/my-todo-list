window.onload = function() {
    var board = document.querySelector('#board');

    function newCategory() {
        var addTask = document.createElement('div');
        addTask.className='addTask';
        addTask.appendChild(document.createElement('p'));
        addTask.querySelector('p').innerHTML = 'New Task';
        addTask.appendChild(document.createElement('i'));
        addTask.querySelector('i').className = 'fa fa-plus';
        var newCategory = document.createElement('div');
        newCategory.className = 'category';
        newCategory.appendChild(addTask);
        return newCategory;
    }

    function newTask() {
        var newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.appendChild(document.createElement('h3'));
        newTask.querySelector('h3').innerHTML = 'Task title';
        newTask.appendChild(document.createElement('p'));
        newTask.querySelector('p').innerHTML = 'Add description';
        return newTask;
    }

    document.querySelector('#addCategory').onclick = function() {
        board.insertBefore(newCategory(), this);
    };

    document.querySelector('.addTask').onclick = function() {
        this.parentElement.appendChild(newTask());
    };
};
