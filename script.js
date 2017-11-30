window.onload = function() {
    var board = document.querySelector('#board');
    var selectAddTask = document.querySelectorAll('.addTask');
    selectAddTask[0].onclick = function() {
        this.parentElement.appendChild(newTask());
    };

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
        newTask.querySelector('h3').setAttribute('contenteditable', 'true');
        newTask.appendChild(document.createElement('p'));
        newTask.querySelector('p').innerHTML = 'Add description';
        newTask.querySelector('p').setAttribute('contenteditable', 'true');
        return newTask;
    }

    document.querySelector('#addCategory').onclick = function() {
        board.insertBefore(newCategory(), this);
        selectAddTask = document.querySelectorAll('.addTask');
        for (i = 0; i < selectAddTask.length; i++) {
            selectAddTask[i].onclick = function() {
                this.parentElement.appendChild(newTask());
            };
        }
    };
};
