function findFactorialRecursive(number) {
    if (number == 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;

    while (!number == 0) {
        answer = answer * number;
        number--;
    }
    return answer, console.log(answer);
}

console.log(findFactorialRecursive(5));