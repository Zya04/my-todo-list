window.onload = function() {
    var board = document.querySelector('#board');
    var model = document.querySelectorAll('#model');
    

    document.querySelector('#addCategory').onclick = function() {
        board.appendChild(model[0].cloneNode(true));
        model = document.querySelectorAll('#model');
        model[1].classList.remove('hidden');
        model[1].removeAttribute("id");
    };
};
