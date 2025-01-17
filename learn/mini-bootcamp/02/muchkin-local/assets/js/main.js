document.addEventListener('DOMContentLoaded', function () {
    loadPlayers();
    const diceIcon = document.getElementById('dice-icon');
    const diceResult = document.getElementById('dice-result');

    diceIcon.addEventListener('click', function () {
        let counter = 0;
        const interval = setInterval(() => {
            const randomDice = Math.floor(Math.random() * 6) + 1;
            diceResult.textContent = `${randomDice}`;
            counter++;
            if (counter >= 10) {
                clearInterval(interval);
                const finalDice = Math.floor(Math.random() * 6) + 1;
                diceResult.textContent = `${finalDice}`;
            }
        }, 80);
    });
});

class Player {
    constructor(name, gender, color) {
        this.name = name;
        this.level = 1;
        this.gear = 0;
        this.power = this.level + this.gear;
        this.gender = gender;
        this.color = color;
        this.wins = 0;
    }

    updatePower() {
        this.power = this.level + this.gear;
    }
}

const playerForm = document.getElementById('player-form');
const playersContainer = document.getElementById('players-container');
let players = [];

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color').value;

    const newPlayer = new Player(name, gender, color);
    players.push(newPlayer);
    renderPlayers();
    playerForm.reset();
});

function renderPlayers() {
    const tbody = playersContainer.querySelector('tbody');
    tbody.innerHTML = '';
    players.forEach((player, index) => {
        const row = document.createElement('tr');
        row.setAttribute('draggable', true);
        row.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
        });

        const nameCell = document.createElement('td');
        nameCell.textContent = player.name;
        nameCell.style.color = player.color;
        nameCell.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        nameCell.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedIndex = e.dataTransfer.getData('text/plain');
            const targetIndex = index;
            const draggedPlayer = players.splice(draggedIndex, 1)[0];
            players.splice(targetIndex, 0, draggedPlayer);
            renderPlayers();
        });

        const genderCell = document.createElement('td');
        genderCell.textContent = player.gender;
        genderCell.style.color = player.gender === 'Male' ? '#68EBFD' : '#FFC0CB';
        genderCell.addEventListener('click', () => {
            player.gender = player.gender === 'Male' ? 'Female' : 'Male';
            genderCell.textContent = player.gender;
            genderCell.style.color = player.gender === 'Male' ? '#68EBFD' : '#FFC0CB';
        });

        const createNumberInput = (min, max, value, onChange) => {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = min;
            input.max = max;
            input.value = value;
            input.style.color = 'azure';
            input.style.backgroundColor = 'rgb(21, 21, 21)';
            input.style.padding = '0';
            input.style.border = 'none';
            input.addEventListener('change', (event) => {
                const newValue = parseInt(event.target.value);
                if (newValue >= min && newValue <= max) {
                    onChange(newValue);
                } else {
                    alert(`Value must be between ${min} and ${max}.`);
                    input.value = value;
                }
            });
            return input;
        };

        const levelCell = document.createElement('td');
        levelCell.textContent = player.level;
        levelCell.style.color = 'azure';
        levelCell.addEventListener('click', () => {
            const levelInput = createNumberInput(1, 10, player.level, (newLevel) => {
                player.level = newLevel;
                levelCell.textContent = player.level;
                player.updatePower();
                powerCell.textContent = player.power;
            });
            levelCell.innerHTML = '';
            levelCell.appendChild(levelInput);
        });

        const gearCell = document.createElement('td');
        gearCell.textContent = player.gear;
        gearCell.style.color = 'azure';
        gearCell.addEventListener('click', () => {
            const gearInput = createNumberInput(0, 30, player.gear, (newGear) => {
                player.gear = newGear;
                gearCell.textContent = player.gear;
                player.updatePower();
                powerCell.textContent = player.power;
            });
            gearCell.innerHTML = '';
            gearCell.appendChild(gearInput);
        });

        const powerCell = document.createElement('td');
        powerCell.textContent = player.power;
        powerCell.style.color = 'azure';
        powerCell.addEventListener('click', () => {
            players.splice(index, 1);
            renderPlayers();
        });

        const winsCell = document.createElement('td');
        winsCell.textContent = player.wins;
        winsCell.style.color = 'azure';
        winsCell.addEventListener('click', () => {
            player.wins++;
            winsCell.textContent = player.wins;
        });

        row.appendChild(nameCell);
        row.appendChild(genderCell);
        row.appendChild(levelCell);
        row.appendChild(gearCell);
        row.appendChild(powerCell);
        row.appendChild(winsCell);

        tbody.appendChild(row);
    });
}

function loadPlayers() {
    fetch('assets/js/players.json')
        .then(response => response.json())
        .then(data => {
            players = data.map(playerData => {
                const player = new Player(playerData.name, playerData.gender, playerData.color);
                player.level = playerData.level;
                player.gear = playerData.gear;
                player.power = playerData.power;
                player.wins = playerData.wins;
                return player;
            });
            renderPlayers();
        })
        .catch(error => console.error('Error loading players:', error));
}