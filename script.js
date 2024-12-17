document.getElementById('convert-btn').addEventListener('click', () => {
    const inputNumber = document.getElementById('input-number').value.trim();
    const inputBase = parseInt(document.getElementById('input-base').value);

    try {
        if (!inputNumber) throw new Error("Please enter a number.");

        const valu = parseInt(inputNumber, inputBase);
        if (isNaN(valu)) throw new Error(`Invalid number for base ${inputBase}.`);

        // updating the results
        document.getElementById('binary-output').textContent = valu.toString(2);
        document.getElementById('decimal-output').textContent = valu.toString(10);
        document.getElementById('octal-output').textContent = valu.toString(8);
        document.getElementById('hexadecimal-output').textContent = valu.toString(16).toUpperCase();
    } catch (error) {
        alert(error.message);
        clearResults();
    }
});


function clearResults() {
    document.getElementById('binary-output').textContent = '';
    document.getElementById('decimal-output').textContent = '';
    document.getElementById('octal-output').textContent = '';
    document.getElementById('hexadecimal-output').textContent = '';
}
