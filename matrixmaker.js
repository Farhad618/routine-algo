let depts = 4
let periods =5
let classesInWeek = 5
let teachers = 4
let COL = depts
let ROW = classesInWeek * periods

let Matrix = []

initMatrix(Matrix)
console.log(Matrix)
// plot(Matrix);
// printMatrix(Matrix);

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