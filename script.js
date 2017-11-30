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
        newCategory.appendChild(newTask);
        return newCategory;
    }

    document.querySelector('#addCategory').onclick = function() {
        board.insertBefore(newCategory(), this);
    };
};
