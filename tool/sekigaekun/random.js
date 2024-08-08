function generateUniqueRandomNumbers(min, max, count) {
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers.slice(0, count);
}

function createRandomTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const totalCells = rows * cols;
    const table = document.getElementById('randomTable');
    table.innerHTML = ''; // Clear previous table

    if (totalCells > maxValue) {
        alert('席の数が生徒の人数を超えています！');
        return;
    }

    const randomNumbers = generateUniqueRandomNumbers(1, maxValue, totalCells);

    let index = 0;
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.textContent = randomNumbers[index++];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Initial table generation
createRandomTable();