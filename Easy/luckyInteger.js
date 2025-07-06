// Problem No:-1394. Find Lucky Integer in an Array
function findLucky(arr) {
  const map = new Map();

  // Count frequencies
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = -1;

  // Check lucky numbers
  for (let [num, freq] of map) {
    if (num === freq) {
      result = Math.max(result, num); // it return which is greater result or num    
    }
  }

  return result;

}

console.log(findLucky([1, 2, 2, 3, 3, 3])); //3
console.log(findLucky([2,2,2,3,3])); //-1
console.log(findLucky([2,2,3,4])); //2







