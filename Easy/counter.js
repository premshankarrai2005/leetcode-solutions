// Problem No:-2620 Counter
let counter = function (n) {
    let count = n;
    return function () {
        return count++;
    }
}
const count = counter(10);
console.log(count()); //10
console.log(count()); //11
console.log(count()); //12
console.log(count()); //13