// Variables utiles
var input = document.getElementById("task-input");
var btn = document.getElementById("task-btn-add");

var input2 = document.getElementById("task-input2");
var btn2 = document.getElementById("task-btn-add2");

// Tableaux
var stock = [];
var stock2 = [];
var index = 0;
var index2 = 0;

// Variables des listes
var list = document.getElementById('task-list');
var list2 = document.getElementById('task-list2');

// Fonction pour ajouter une tâche
function AddItemTask(args) {
    if (args == 1) {
        if (input.value.trim() === "") {
            alert("Impossible, vous n'avez rien écris.");
            return;
        };

        stock.push(input.value);

        var list_item = document.createElement('li');
        list_item.classList.add("task-item");
        list.appendChild(list_item);
        list_item.innerHTML = '<span><i class="fas fa-flag"></i>' + stock[index] + '</span> <button role="button" id="task-btn-remove" class="fas fa-times"></button>';

        input.value = "";
        input.focus();
        index++;
    } else if (args == 2) {
        if (input2.value.trim() === "") {
            alert("Impossible, vous n'avez rien écris.");
            return;
        };

        stock2.push(input2.value);

        var list_item = document.createElement('li');
        list_item.classList.add("task-item");
        list2.appendChild(list_item);
        list_item.innerHTML = '<span><i class="fas fa-flag"></i>' + stock2[index2] + '</span> <button role="button" id="task-btn-remove" class="fas fa-times"></button>';

        input2.value = "";
        input2.focus();
        index2++;

    } else {
        return;
    }
    
}

function RemoveItemTask(element) {
    if (element.parentNode.id == "task-list") {
        var pos = stock.indexOf(element.innerText);
        stock.splice(pos, 1);

        element.remove();

        index--;
    } else if (element.parentNode.id == "task-list2") {
        var pos = stock2.indexOf(element.innerText);
        stock2.splice(pos, 1);

        element.remove();

        index2--;
    };
};

btn.addEventListener("click", function() {
    AddItemTask(1);
});

input.onkeyup = function(args) {
    if (args.key == "Enter") {
        AddItemTask(1);
    };
};

btn2.addEventListener("click", function() {
    AddItemTask(2);
});

input2.onkeyup = function(args) {
    if (args.key == "Enter") {
        AddItemTask(2);
    };
};        

list.addEventListener("click", function(evenement) {
    if (evenement.target.localName == 'button') {
        RemoveItemTask(evenement.target.parentNode);
    } 
});

list2.addEventListener("click", function(evenement) {
    if (evenement.target.localName == 'button') {
        RemoveItemTask(evenement.target.parentNode);
    } 
});
