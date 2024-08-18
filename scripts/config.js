function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}