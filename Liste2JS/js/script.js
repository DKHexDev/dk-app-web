var input = document.getElementById("task-input");
var btn = document.getElementById("task-btn");
var btn_remove = document.getElementById("task-btn-remove");
var stock = [];
var index = 0;
var list = document.getElementById('task-list');
var select = document.getElementById('task-select');

function AddItemTask() {
    if (input.value.trim() === "") {
        alert("Impossible, vous n'avez rien écris.");
        return;
    };

    stock.push(input.value);

    var list_item = document.createElement('li');
    list_item.classList.add("card-task-item");
    list.appendChild(list_item);
    list_item.textContent = stock[index];

    var select_item = document.createElement('option')
    select.appendChild(select_item)
    select_item.textContent = stock[index];

    input.value = "";
    input.focus();
    index++;
}

function RemoveItemTask() {
    if (select.value === "") {
        alert("Impossible, vous n'avez rien sélectionner.");
        return;
    };

    var pos = stock.indexOf(select.value);
    stock.splice(pos, 1);

    list.removeChild(list.childNodes[pos]);
    select.removeChild(select.childNodes[pos]);

    index--;
}

btn.addEventListener("click", function() {
    AddItemTask();
});

input.onkeyup = function(args) {
    if (args.key == "Enter") {
        AddItemTask();
    }
}

btn_remove.addEventListener("click", function() {
    RemoveItemTask();
});