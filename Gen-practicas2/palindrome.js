function isPalindrome() {

    let input = prompt("Hola mundo");

    let cleanedInput = input.replace(/[\W_]/g, '').toLowerCase();

    let reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        alert(`${input} is a palindrome.`);
    } else {
        alert(`${input} is not a palindrome.`);
    }
}

isPalindrome();
