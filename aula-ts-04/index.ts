function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1: string | null = "1a"//prompt("First Number");
    const num2: string | null = "2"//prompt("Second Number");
    let parsedNum1: number, parsedNum2: number;
    try{
        parsedNum1 = parseInt(num1)
        parsedNum2 = parseInt(num2)
    }   catch(err){
        console.error("Não é possível executar com tal entrada.")
    }
    let result = sum(parsedNum1,parsedNum2);
    result += multiply(1,2);
    showResult(result);
})();
