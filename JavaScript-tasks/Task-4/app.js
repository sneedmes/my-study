const arrayNum = [3,10,-5,1,4,6]
const num = 10
let checkFunction = (nums, target) => {
    for (let i=0; i<nums.length; i++){
        const first = nums[i]
        for (let j=i+1; j<nums.length; j++){
            const second = nums[j]
            if (first + second === target){
                return [first, second]
            }
        }
    }
    return []
}
console.log(checkFunction(arrayNum, num))