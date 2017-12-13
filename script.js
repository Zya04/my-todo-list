window.onload = function() {
    if (typeof localStorage.work != 'undefined') {
        document.querySelector('#board').innerHTML = localStorage.work;
    }
    /* * * * * * * * * * * * * * * * * *
     * Fetch previously created items  *
     * * * * * * * * * * * * * * * * * */
    oldPopups = document.querySelectorAll('.popup');
    oldOverlays = document.querySelectorAll('.overlay');
    oldTasks = document.querySelectorAll('.task');
    oldRemoveCategory = document.querySelectorAll('.removeCategory');
    oldNewTaskBtn = document.querySelectorAll('.addTask');
    oldCategoryTitle = document.querySelectorAll('.category-title');
    oldRemoveTaskBtn = document.querySelectorAll('.task span');
    oldSaveButtons = document.querySelectorAll('.btn-task');    
    oldClosePopupBtn = document.querySelectorAll('.close-popup');

    for (var i in oldPopups) {
        oldPopups[i].className = 'popup hidden';
    }
    for (var i in oldOverlays) {
        oldOverlays[i].className = 'overlay hidden';
    }

    for (var i in oldRemoveTaskBtn) {
        oldRemoveTaskBtn[i].onclick = function() {
            removeTask.call(this);
        };
    }

    for (var i in oldCategoryTitle) {
        oldCategoryTitle[i].onblur = function() {
            saveWork();
        };
    }

    for (var i in oldNewTaskBtn) {
        oldNewTaskBtn[i].onclick = function() {
            addTask.call(this)
        };
     }

    for (var i in oldTasks) {
        oldTasks[i].onclick = function(event) {
            if (event.target == this.querySelector('.popup').querySelector('.close-popup') || 
                event.target == this.querySelector('.popup').querySelector('.btn-task') || 
                event.target == this.querySelector('span')) {
                return false;
                }
            this.querySelector('.popup').querySelector('input[name="task-title"').value = this.querySelector('h3').innerHTML;
            this.querySelector('.popup').querySelector('textarea').value = this.querySelector('p').innerHTML;
            this.querySelector('.popup').querySelector('h2').innerHTML = this.parentElement.querySelector('h3').innerHTML;
            this.querySelector('.popup').className = 'popup';
            this.querySelector('.overlay').className = 'overlay';
            saveWork();
        };
    }
    for (var i in oldRemoveCategory) {
        oldRemoveCategory[i].onclick = function() {
            removeCategory.call(this);
        };
    }
    for (var i in oldClosePopupBtn) {
        oldClosePopupBtn[i].onclick = function(event) {
            closePopup.call(this);
        };
    }
    for (var i in oldSaveButtons) {
        oldSaveButtons[i].onclick = function(){
            saveButton.call(this);
        }
    }
    /* * * * * * * * * * * *
     * * * * * * * * * * * *
     * * * * * * * * * * * */

    newStyle = document.createElement("style");
    newStyle.type = "text/css"; 
    document.head.insertBefore(newStyle, null);
    styleSheet = newStyle.sheet;
    styleSheet.insertRule(".category{background-color: #DED9E2;}");

    board = document.querySelector('#board');
    addCategory = document.querySelector('#addCategory');
    newTaskButton = document.querySelector('.addTask');
    backgroundColorButton = document.querySelector('#background-color');
    categoriesColorButton = document.querySelector('#category-color');

    backgroundColorButton.onchange = function() {
        document.body.style.backgroundColor = this.value;
    };

    categoriesColorButton.onchange = function() {
        styleSheet.deleteRule(0);
        styleSheet.insertRule(".category{background-color: "+this.value+";}");
    };
    
    addCategory.onclick = function() {
        board.insertBefore(newCategory(), this);
        saveWork();
    };
};

function newCategory() {
    categoryTitle = document.createElement('h3');
    categoryTitle.innerHTML = 'Category title';
    categoryTitle.className = 'category-title';
    categoryTitle.setAttribute('contenteditable','true');

    removeCategoryBtn = document.createElement('div');
    removeCategoryBtn.className = 'removeCategory';
    removeCategoryBtn.appendChild(document.createElement('i'));
    removeCategoryBtn.querySelector('i').className = 'fa fa-times';

    addTaskBtn = document.createElement('div');
    addTaskBtn.className='addTask';
    addTaskBtn.appendChild(document.createElement('p'));
    addTaskBtn.querySelector('p').innerHTML = 'New Task';
    addTaskBtn.appendChild(document.createElement('i'));
    addTaskBtn.querySelector('i').className = 'fa fa-plus';

    categoryActions = document.createElement('div');
    categoryActions.className = 'actions';
    categoryActions.appendChild(removeCategoryBtn);
    categoryActions.appendChild(addTaskBtn);

    category = document.createElement('div');
    category.className = 'category';
    category.appendChild(categoryActions);
    category.appendChild(categoryTitle);
    // category.ondragover = function(event) {
    //     dragover_handler(event)
    // };
    // category.ondrop = function(event) {
    //     drop_handler(event)
    // };

    categoryTitle.onblur = function() {
        saveWork();
    }

    removeCategoryBtn.onclick = function() {
        removeCategory.call(this);
    };

    addTaskBtn.onclick = function() {
        addTask.call(this);
    };
    return category;
};

function newTask() {
    task = document.createElement('div');
    task.className = 'task';
    //task.setAttribute('draggable', 'true');
    task.appendChild(document.createElement('span'));
    task.querySelector('span').innerHTML = "&times;";
    task.appendChild(document.createElement('h3'));
    task.querySelector('h3').innerHTML = 'Task title';
    task.appendChild(document.createElement('p'));
    task.querySelector('p').innerHTML = 'Add description';
    task.appendChild(newPopup());
    task.appendChild(newOverlay());
    task.querySelector('span').onclick = function() {
        removeTask.call(this);
    };

    task.onclick = function(event) {
        if (event.target == this.querySelector('.popup').querySelector('.close-popup') || 
            event.target == this.querySelector('.popup').querySelector('.btn-task') || 
            event.target == this.querySelector('span')) {
            return false;
        }

        this.querySelector('.popup').querySelector('input[name="task-title"').value = this.querySelector('h3').innerHTML;
        this.querySelector('.popup').querySelector('textarea').value = this.querySelector('p').innerHTML;

        this.querySelector('.popup').querySelector('h2').innerHTML = this.parentElement.querySelector('h3').innerHTML;
        this.querySelector('.popup').className = 'popup';
        this.querySelector('.overlay').className = 'overlay';
        saveWork();
    };
    popup.querySelector('.close-popup').onclick = function() {
        closePopup.call(this);
    };
    saveWork();
    // task.ondragstart = function(event) {
    //     dragstart_handler(event);
    // };

    return task;
};

function newPopup() {
    popup = document.createElement('div');
    popup.className = 'popup hidden';
    popup.appendChild(document.createElement('i'));
    popup.querySelector('i').className = 'fa fa-times close-popup';

    categoryName = document.createElement('h2');

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

    confirmBtn = document.createElement('button');
    confirmBtn.className = 'btn-task';
    confirmBtn.innerHTML = 'Save';

    popup.appendChild(categoryName);
    popup.appendChild(taskTitle);
    popup.appendChild(inputTaskTitle);
    popup.appendChild(description);
    popup.appendChild(textDescription);
    popup.appendChild(confirmBtn);

    confirmBtn.onclick = function() {
        saveButton.call(this);
    };

    return popup;
}

function newOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'overlay hidden';
    return overlay;

}

function saveWork() {
    localStorage.clear();
    toSave = document.querySelector('#board');
    localStorage.work = toSave.innerHTML;
}

function saveButton() {
    this.parentElement.parentElement.querySelector('h3').innerHTML = this.parentElement.querySelector('input[name="task-title"]').value;
    this.parentElement.parentElement.querySelector('p').innerHTML = this.parentElement.querySelector('textarea').value;
    this.parentElement.parentElement.querySelector('.popup').className = 'popup hidden';
    this.parentElement.parentElement.querySelector('.overlay').className = 'overlay hidden';
    saveWork();
}

function removeTask() {
    this.parentElement.parentElement.removeChild(this.parentElement);
    saveWork();
}

function openPopup() {
    if (event.target == this.querySelector('.popup').querySelector('.close-popup') || 
        event.target == this.querySelector('.popup').querySelector('.btn-task') || 
        event.target == this.querySelector('span')) {
        return false;
    }
    this.querySelector('.popup').querySelector('h2').innerHTML = this.parentElement.querySelector('h3').innerHTML;
    this.querySelector('.popup').className = 'popup';
    this.querySelector('.overlay').className = 'overlay';
    saveWork();
}

function removeCategory() {
    this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    saveWork();
}

function saveButton() {
    this.parentElement.parentElement.querySelector('h3').innerHTML = this.parentElement.querySelector('input[name="task-title"]').value;
    this.parentElement.parentElement.querySelector('p').innerHTML = this.parentElement.querySelector('textarea').value;
    this.parentElement.parentElement.querySelector('.popup').className = 'popup hidden';
    this.parentElement.parentElement.querySelector('.overlay').className = 'overlay hidden';
    saveWork();
}

function addTask() {
    this.parentElement.parentElement.appendChild(newTask());
    saveWork();
}

function closePopup() {
    this.parentElement.parentElement.querySelector('.popup').className = 'popup hidden';
    this.parentElement.parentElement.querySelector('.overlay').className = 'overlay hidden';
    saveWork();
}

function deleteTask() {
    this.parentElement.parentElement.removeChild(this.parentElement);
    saveWork();
}


/* function dragstart_handler(event) {
 *     // Add the target element's id to the data transfer object
 *     event.dataTransfer.setData("text/html", event.target);
 *    }
 * 
 * function dragover_handler(event) {
 *     event.preventDefault();
 *     // Set the dropEffect to move
 *     event.dataTransfer.dropEffect = "move"
 * }
 * function drop_handler(event) {
 *     event.preventDefault();
 *     // Get the id of the target and add the moved element to the target's DOM
 *     var data = event.dataTransfer.getData("text");
 *     console.log(data);
 *     debugger;
 * }
 *     event.target.appendChild(data); */