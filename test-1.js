
let col = 4
let row = 20

let Matrix = [ // Matrix[row][col]
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
plot(Matrix);
printMatrix(Matrix);


function printMatrix(Matrix){
    for (let r = 0; r < row; r++) {
        /*for (let c = 0; c < col; c++) {

        }*/
        if (r%4==0 && r!=0) {
            console.log("_________________________________")
        } 
        console.log(Matrix[r])
    } 
}

function isValid(Matrix, row, col, value) {
    // row check
    for (let i = 0; i < 4; i++) {
        if (col==i) {
            continue
        }
        if (Matrix[row][i]==value) {
            return false
        }
    }

    // col check
    let startFrom = row - (row%4)
    for (let i = startFrom; i < startFrom + 4; i++) {
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
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (Matrix[r][c] == 0) {
                for (let k = 1; k <= 4; k++) { // 4 teachers
                    if (isValid(Matrix, r, c, k)) {
                        Matrix[r][c] = k;
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