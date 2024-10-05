class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //set to check each row/column Num and see if any already exist in the set
        let colSet = new Set();
        let rowSet = new Set();
        let boxSet = new Set();
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            //another for loop to loop through each item in the array
            for (let j = 0; j < row.length; j++) {
                const rowNum = row[j];
                const colNum = board[j][i];

                //push row down once after iterating over 3 items, to iterate over columns 3 items at a time, modulo j % 3 keeping the number between 0-2
                //i * 3  % 9 shifts everything over by 3
                //to push item scanning down floor i / 3 to get the (0, 1 or 3) and then multiple by 3
                const boxCharacter = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]

                //since there are blanks in the column, only add cells that have numbers
                if (rowNum !== ".") {
                    //check if the row num already exists in the set, if it does return false
                    if (rowSet.has(rowNum)) return false
                    //else add the number to the set
                    rowSet.add(rowNum)
                }
                //since there are blanks in the column, only add cells that have numbers
                if (colNum !== ".") {
                    if (colSet.has(colNum)) return false;
                    //else add to the set if doesn't exist
                    colSet.add(colNum)
                }

                if (boxCharacter !== ".") {
                    if (boxSet.has(boxCharacter)) return false
                    boxSet.add(boxCharacter)
                }
            }
            //if no duplicates is found in one row, reset for next row
            rowSet.clear();
            colSet.clear();
            boxSet.clear();
        }
        return true;
    }
}
