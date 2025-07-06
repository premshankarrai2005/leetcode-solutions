// Problem No:-1. Two Sum
var twoSum = function (num, target) {
    let map = new Map();
    for (let i = 0; i < num.length; i++) {
        let compliment = target - num[i]
        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }
        map.set(num[i], i)
        
    }return null
}
let arr1 =[2,7,11,15]
let arr2 =[3,2,4]
let arr3 =[3,3]
console.log(twoSum(arr1,9));
console.log(twoSum(arr2,6));
console.log(twoSum(arr3,6));