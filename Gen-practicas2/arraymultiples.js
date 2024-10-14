function arrayMultiples(number, length) {
    const result = [];
    for (let i = 1; i <= length; i++) {
        result.push(number * i);
    }
    return result;
}

console.log(arrayMultiples(2, 10)); 
console.log(arrayMultiples(5, 10)); 
