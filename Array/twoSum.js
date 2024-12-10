function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
}

const ans1 = twoSum([1, 2, 5, 2, 8, 9], 17);
const ans2 = twoSum([1, 2, 5, 9], 7);
console.log(ans1);
console.log(ans2);
