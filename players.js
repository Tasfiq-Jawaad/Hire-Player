const selectedPlayers = [];

function display(name) {

}

function playerSelected(element) {
    const playerName = element.parentNode.children[1].innerText;
    const button = element.parentNode.children[2];
    selectedPlayers.push(playerName);
    if (selectedPlayers.length > 5) {
        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = element.parentNode.children[2];

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

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
        button.disabled = true;
        button.style.backgroundColor = 'gray';
        button.style.cursor = 'default';
        button.innerText = 'SELECTED';
        display(selectedPlayers);
        const ul = document.getElementById('selectedPlayers').children[1];
        const createList = document.createElement('li');
        createList.innerText = selectedPlayers.length + '.' + ' ' + playerName;
        ul.appendChild(createList);
    }

}