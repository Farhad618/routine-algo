// teacher < periods problem 
let depts = 6
let periods = 5
let classesInWeek = 5
let teachers =5 // teachers <= periods
let COL = depts
let ROW = classesInWeek * periods

/*let Matrix = [ // Matrix[row][col]
[ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ]
]*/
let Matrix = Array(ROW).fill().map(()=>Array(COL).fill(0))
// initMatrix(Matrix)
// console.log(Matrix)
plot(Matrix);
printMatrix(Matrix);

function initMatrix(Matrix){
    let temp = []
    for (let c = 0; c < COL; c++) {
        temp.push(0)
    }
    console.log(temp)
    for (let r = 0; r < ROW; r++) {
        Matrix.push(temp)
    }
}

function printMatrix(Matrix){
    for (let r = 0; r < ROW; r++) {
        /*for (let c = 0; c < COL; c++) {

        }*/
        if (r%periods==0 && r!=0) {
            console.log("_________________________________")
        } 
        console.log(Matrix[r])
    } 
}

function isValid(Matrix, row, col, value) {
    // row check
    for (let i = 0; i < depts; i++) {
        if (col==i) {
            continue
        }
        if (Matrix[row][i]==value) {
            return false
        }
    }

    // col check
    let startFrom = row - (row % periods)
    for (let i = startFrom; i < startFrom + periods; i++) {
        if (row==i) {
            continue
        }
        if (Matrix[i][col]==value) {
            return false
        }
    }

    return true
}


function plot(Matrix){
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            if (Matrix[r][c] == 0) {
                for (let k = 1; k <= (Math.max(depts, periods, teachers)); k++) { // 4 teachers // if teacher < periods teachers<periods?periods:teachers
                    if (isValid(Matrix, r, c, k)) {
                        // if (k>teachers) {
                        //     Matrix[r][c] = -1;
                        // } else {
                            Matrix[r][c] = k;
                        // }
                        
                        if (plot(Matrix)) {
                          return true;
                        } else {
                          Matrix[r][c] = 0;
                        }
                    }
                }
                return false
            }             
        }
        
    }
    return true
}