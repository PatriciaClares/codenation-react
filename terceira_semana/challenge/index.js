'use strict'

const fibonacci = () => {
    let listFinonacci = [0, 1, 2];
    for (let index = 2; listFinonacci.slice(-1) <= 350; index++) {
        listFinonacci[index] = listFinonacci[index - 1] + listFinonacci[index -2];
    }
    return listFinonacci;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
