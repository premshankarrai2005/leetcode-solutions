const addTwoPromises = (p1, p2) => {
    return Promise.all([p1, p2]).then(([val1, val2]) => val1 + val2);
}
let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then(console.log)
// addTwoPromises(promise1, promise2).then((result) => console.log(result))