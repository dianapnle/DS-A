var canPlaceFlowers = function(flowerbed, n) {
    //loop through the flowerbed
    for (let i = 0; i < flowerbed.length; i++) {
        //check if left plot is equal to 0, if it doesnt exist then set to 0
        let left = (i === 0 || flowerbed[i- 1] === 0);
        //check if right plot is equal to 0, if it doesnt exist then set to 0
        let right = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        if ( left && right && flowerbed[i] === 0) {
            //change the current i to a 1 and reduce n by 1
            flowerbed[i] = 1;
            n--;
        }
    }
    //check whether or not n <= 0
    return n <= 0
}

//time is O(n)
