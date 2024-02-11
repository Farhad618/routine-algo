let week = ['mon', 'tue', 'wed', 'ths', 'fri']
let depts = 4 // number of departments
let teachers = ['a', 'b', 'c', 'd'] // number of teachers

let tMatrix = [
    [ // mon
        [ // dep 1
            [ // tec
                'a','b','c','d'
            ]
        ],
        [],
        [],
        []
    ],
    [],
    [],
    [],
    []
]

let Matrix = []

for (const w of week) {
    // console.log(w)
    let i = Matrix.push([]) // insert week
    // console.log(i)
    for (let d = 0; d < depts; d++) {
        Matrix[i-1].push([]) // insert dept
        if (d==0) {
            Matrix[i-1][d] = teachers
        } else {
            Matrix[i-1][d].push([])
        }
        
    }
}

console.log(Matrix)