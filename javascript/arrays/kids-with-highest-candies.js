var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    //find the max number in the array to be compared to
    let max = Math.max(...candies)
    //loop through the candies array adding the extra candies and compare to max
    //if its bigger, return true, if not, return false
    for (let candy of candies) {
        if (candy + extraCandies >= max) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res;
};


//time complexity is O(n)
