console.log("Halaman berhasil dimuat!");

function generatePassword(
    passwordLength,
    useCapitalAToZ,
    useLowerAToZ,
    useNumeric
) {
    if (passwordLength < 3) {
        return '(invalid)'
    }
    if (!useCapitalAToZ && !useLowerAToZ && !useNumeric) {
        return '(invalid)';
    }
    let result = '';
    for (let x = 0; x < passwordLength; x++) {
        const method = randomizeUntil(3);
        if (method === 0 && useCapitalAToZ) {
            const randomNumber = randomizeUntil(26);
            const sumWithLetterA = 'A'.charCodeAt() + randomNumber;
            const newCharacter = String.fromCharCode(sumWithLetterA);
            result += newCharacter;
            continue;
        }
        if (method === 1 && useLowerAToZ) {
            const randomNumber = randomizeUntil(26);
            const sumWithLowerA = 'a'.charCodeAt() + randomNumber;
            const newCharacter = String.fromCharCode(sumWithLowerA);
            result += newCharacter;
            continue;
        }
        if (method === 2 && useNumeric) {
            const randomNumber = randomizeUntil(10);
            const sumWithLetterZero = '0'.charCodeAt() + randomNumber;
            const newCharacter = String.fromCharCode(sumWithLetterZero);
            result += newCharacter;
            continue;
        }
        x--;
    }
    return result;
}

function randomizeUntil(untilNumber) {
    return Math.floor(Math.random() * untilNumber);
}
const generatePasswordButton = document.getElementById('generate_password');
generatePasswordButton.addEventListener('click', function () {
    const passwordLength = document.getElementById('password_length').value;
    const useCapitalAToZ = document.getElementById('capital_az_char').checked;
    const useLowerAToZ = document.getElementById('small_az_char').checked;
    const useNumeric = document.getElementById('numeric').checked;
    const passwordResult = generatePassword(passwordLength, useCapitalAToZ, useLowerAToZ, useNumeric);
    document.getElementById('result_password').innerText = passwordResult;
});