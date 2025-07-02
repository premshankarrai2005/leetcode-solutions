const timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args)
                .then(resolve)
                .catch(reject)
            setTimeout(() => {
                reject("Time Limit Exceeded");
            },t);
        });
    };
};

let x=5
let slowFunction = async (x) => {
    await new Promise(res=>setTimeout(res,1000));
    return x*2;
 }
 
 
 let limitfun=timeLimit(slowFunction,2000)
 limitfun(5).then(console.log).catch(console.error);