window.onload = function() {
    var board = document.querySelector('#board');
    var model = document.querySelectorAll('#model');

    //creating the block, didn't use .cloneNode()
    function newCategory() {
        var newTask = document.createElement('div');
        newTask.className='newTask';
        newTask.appendChild(document.createElement('p'));
        newTask.querySelector('p').innerHTML = 'New Task';
        newTask.appendChild(document.createElement('i'));
        newTask.querySelector('i').className = 'fa fa-plus';
        var newCategory = document.createElement('div');
        newCategory.className = 'category';
        newCategory.appendChild(newTask);
        return newCategory;
    }

    document.querySelector('#addCategory').onclick = function() {
        board.insertBefore(newCategory(), addCategory);
    };
};
