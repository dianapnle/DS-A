class Solution {
    checkInclusion = function(s1, s2) {
       if (s1.length > s2.length) return false;

       //// Fill with 0 from position 2 until position 4
       // console.log(array1.fill(0, 2, 4));
       let s1Count= Array(26).fill(0);
       let s2Count = Array(26).fill(0);

       // Populate the arrays with the counts of characters from each string into their respective arrays
       for (let i = 0; i < s1.length; i++) {
           s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
           s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
       }
       //slide the window over s2, remove frequency count of char thats leaving the window and add frequency count of new char entering the window
       for (let i = 0; i < s2.length - s1.length; i++) {
           if (this.matches(s1Count, s2Count)) return true;
           s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)] --;
           s2Count[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)] ++
       }
       return this.matches(s1Count, s2Count)
   };

    matches(s1Count, s2Count) {
       for (let i = 0; i < 26; i++) {
           if (s1Count[i] !== s2Count[i]) return false;
       }
       return true;

   }
   }
