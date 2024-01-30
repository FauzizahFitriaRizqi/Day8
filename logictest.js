function containsDuplicate(nums){
    const seenSet = new Set();

    for (let num of nums) {
        if (seenSet.has(num)){
            return true;
        }
        seenSet.add(num);
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])) //output true
console.log(containsDuplicate([1, 2, 3, 4])) //output false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) //output true