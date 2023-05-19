document.getElementById("choice-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var choice = document.getElementById("choice-input").value;
    processChoice(choice);
});

function processChoice(choice) {
    var storyElement = document.getElementById("story");
    var partes = document.getElementsByClassName("parte");
    var gameContainer = document.getElementById("game-container");

    for (var i = 0; i < partes.length; i++) {
        var parte = partes[i];

        if (parte.id === "parte" + choice) {
            parte.style.display = "block";
            gameContainer.style.display = "none";
            storyElement.style.display = "block";
        } else {
            parte.style.display = "none";
        }
    }

    var output = "";

    if (choice === "1") {
        output = "Você escolheu a opção 1. Algo acontece...";
    } else if (choice === "2") {
        output = "Você escolheu a opção 2. Algo diferente acontece...";
    } else if (choice === "0") {
        output = "...";
    } else {
        output = "Escolha inválida. Tente novamente.";
    }

    storyElement.textContent = output;
    document.getElementById("choice-input").value = "";
}
