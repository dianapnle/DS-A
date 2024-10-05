var twoSum = function(numbers, target) {
    //use left and right pointers
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] > target) {
            //move the right pointer down
            r--;
        } else if (numbers[l] + numbers[r] < target) {
            l++;
        } else if (numbers[l] + numbers[r] === target) {
            //else it equals the target
            return [l + 1, r + 1]
        }
    }
}
//time is O(n) space is O(1)
