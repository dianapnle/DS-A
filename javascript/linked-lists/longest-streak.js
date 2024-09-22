// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
    let maxstreak = 0;
    let currentstreak = 0
    let prevVal = null;
    let current = head;

    while (current !== null) {

      if (current.val === prevVal) {
        //if current val is equal to prev val, increase current streak
        currentstreak += 1
      } else {
        //when u break the streak you reset it to 1 including the node on currently
        currentstreak = 1
      }

      if (currentstreak > maxstreak) {
      maxstreak = currentstreak;
      }

      prevVal = current.val
      current = current.next
    }
    return maxstreak
  };

  //Time: O(n) Space: O(1)
