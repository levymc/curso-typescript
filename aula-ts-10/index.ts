
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(11));       // 11
console.log(identity<string>("Ola mundo"));  // Ola Mundo
console.log(identity<number[]>([1, 2, 3])); // [1, 2, 3]
