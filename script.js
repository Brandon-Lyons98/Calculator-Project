const grid = document.querySelector('#calc-grid');

function createGrid() {
    for (let i = 1; i < 20; i++) {
        const div = document.createElement('div');
        div.classList.add('buttons');

        if (i === 17) {
            div.classList.add('lower-buttons')
        } else if (i === 18) {
            div.classList.add('lower-buttons')
        } else if (i === 19) {
            div.classList.add('lower-buttons')
        }

        if (i === 17) {
            div.textContent = '0';
            div.classList.add('button-zero');
        } else if (i === 13) {
            div.textContent = '1';
        } else if (i === 14) {
            div.textContent = '2';
        } else if (i === 15) {
            div.textContent = '3';
        } else if (i === 9) {
            div.textContent = '4';
        } else if (i === 10) {
            div.textContent = '5';
        } else if (i === 11) {
            div.textContent = '6';
        } else if (i === 5) {
            div.textContent = '7';
        } else if (i === 6) {
            div.textContent = '8';
        } else if (i === 7) {
            div.textContent = '9';
        } else if (i === 1) {
            div.textContent = 'AC';
        } else if (i === 2) {
            div.textContent = '+/-';
        } else if (i === 3) {
            div.textContent = '%';
        } else if (i === 4) {
            div.textContent = '/';
        } else if (i === 8) {
            div.textContent = '*';
        } else if (i === 12) {
            div.textContent = '-';
        } else if (i === 16) {
            div.textContent = '+';
        } else if (i === 18) {
            div.textContent = '.';
        } else if (i === 19) {
            div.textContent = '=';
        }
        grid.appendChild(div);
    }
}



createGrid();