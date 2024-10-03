class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //mapping  charCount to list of anagrams
        let res = {}
        //loop through the list of strings
        for (let str of strs) {
            let count = this.charCount(str);
            let key = this.toStringKey(count);
            //if string key doesn't already exist, initialize it
            if (!(res[key])) {
                res[key] = [];
            }
            //push string into the reskey that matches
            res[key].push(str)
        }
        return Object.values(res)
    }

    //a character count
    charCount(string) {
        //create a char count
        let res = {};
        for (let char of string) {
            //if it doesn't already exist, initialize it
            if (!(res[char])) {
                res[char] = 0
            }
            //increase by 1
            res[char] += 1
        }
        return res
    }


    //a char count to string key function so {"e": 1", "a": 1, "t": 1} -> "a1 e1 t1"
    toStringKey(obj) {
        let resString=""
        //sort the object first
        const sortedKeys = Object.keys(obj).sort();
        //loop through each key and make a key value string
        for (let key of sortedKeys) {
            let val = obj[key]
            resString += `${key.toString()}${val.toString()}`
        }
        return resString
    }
}
//Time O(num_strs) * nlogn space is O(n)



//better solution
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //mapping  charCount to list of anagrams
        let res = {}
        //loop through the list of strings
        for (let str of strs) {
            let key = this.toStringKey(str);
            //if string key doesn't already exist, initialize it
            if (!(res[key])) {
                res[key] = [];
            }
            //push string into the reskey that matches
            res[key].push(str)
        }
        return Object.values(res)
    }


    //helper function to sort the string and put back together
    toStringKey(str) {
        let resString=str
        console.log(resString.split("").sort().join(""))
        return resString.split("").sort().join("")
    }
}
