const selectedPlayers = [];


function playerSelected(element) {
    const playerName = element.parentNode.children[1].innerText;
    const button = element.parentNode.children[2];
    if (selectedPlayers.length == 5) {
        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = element.parentNode.children[2];

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    else {
        selectedPlayers.push(playerName);
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        button.style.cursor = 'default';
        button.innerText = 'SELECTED';
        const ul = document.getElementById('selectedPlayers').children[1];
        const createList = document.createElement('li');
        createList.innerText = selectedPlayers.length + '.' + ' ' + playerName;
        ul.appendChild(createList);
    }

}
const cost = [];
let calculation = 0;

document.getElementById('playerCostButton').addEventListener('click', function () {
    const playerCostField = document.getElementById('playerCostField');
    const perPlayerCost = playerCostField.value;
    document.getElementById('playerCostValue').innerText = perPlayerCost * selectedPlayers.length;
    cost[0] = parseInt(perPlayerCost * selectedPlayers.length);

})

document.getElementById('totalCostButton').addEventListener('click', function () {
    const managerCostField = document.getElementById('managerCostField');
    const managerCost = managerCostField.value;
    cost[1] = parseInt(managerCost);
    const coachCostField = document.getElementById('coachCostField');
    const coachCost = coachCostField.value;
    cost[2] = parseInt(coachCost);

    for (let i = 0; i < 3; i++) {
        calculation = calculation + cost[i];
    }
    document.getElementById('finalCost').innerText = calculation;
    calculation = 0

})