document.getElementById('convert-btn').addEventListener('click', () => {
    const inputNumber = document.getElementById('input-number').value.trim();
    const inputBase = parseInt(document.getElementById('input-base').value);

    try {
        if (!inputNumber) throw new Error("Please enter a number.");
        if (!isValidNumber(inputNumber, inputBase)) {
            throw new Error(`Invalid number for base ${inputBase}.`);
        }

        const decimalValue = parseInt(inputNumber, inputBase);
        if (isNaN(decimalValue)) throw new Error("Unable to convert the number.");

        // updating the results
        document.getElementById('binary-output').textContent = decimalValue.toString(2);
        document.getElementById('decimal-output').textContent = decimalValue.toString(10);
        document.getElementById('octal-output').textContent = decimalValue.toString(8);
        document.getElementById('hexadecimal-output').textContent = decimalValue.toString(16).toUpperCase();
    } catch (error) {
        alert(error.message);
        clearResults();
    }
});

function isValidNumber(number, base) {
    
    const validChars = {
        2: ['0', '1'],                         // Binary
        10: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Decimal
        8: ['0', '1', '2', '3', '4', '5', '6', '7'], // Octal
        16: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
             'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'] // Hexadecimal
    };

    const allowedChars = validChars[base];

    // checking whether the input number is valid or not according to the base selected
    for (let char of number) {
        if (!allowedChars.includes(char)) {
            return false; // invalid char found
        }
    }

    return true;
}

function clearResults() {
    document.getElementById('binary-output').textContent = '';
    document.getElementById('decimal-output').textContent = '';
    document.getElementById('octal-output').textContent = '';
    document.getElementById('hexadecimal-output').textContent = '';
}
