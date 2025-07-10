// Problem No:-2626. Array Reduce Transformation
function ArrayReduceTransformation(nums,fn,init){
    return nums.reduce(fn,init)
}

let num1 = [1,2,3,4]
let num2 = [1,2,3,4]
let num3 = []

fn1 =(accum,curr)=>accum+curr
fn2 =(accum,curr)=>accum + curr * curr
fn3 =(accum,curr)=>0

let init1 = 0
let init2 = 100
let init3 = 25

console.log(ArrayReduceTransformation(num1,fn1,init1)) //10
console.log(ArrayReduceTransformation(num2,fn2,init2)) //130
console.log(ArrayReduceTransformation(num3,fn3,init3)) //25



