function twoSum(nums, target) {
    //  to store numbers and their indices
    const numIndices = {};

    // through the array nums
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement (needed value to reach target) exists in numIndices
        if (numIndices.hasOwnProperty(complement)) {
            // Return the indices of currentNum and its complement
            return [numIndices[complement], i];
        }

        // Store the current number and its index in the hashmap
        numIndices[currentNum] = i;
    }

    // If no solution is found, return an empty array or handle error as needed
    return [];
}

// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 
