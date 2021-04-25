
/* 
    Aula especial - Aula de exercícios
*/

//1.
    let weight

//2.
    // Resposta: undefined.
    console.log(typeof weight)

//3.
    let name =  `John`
    let age =  25
    let stars =  4.9
    let isSubscribed = true

//4.
    // 4.1
        // Object

    // 4.2
        let student = {
            name: `John`,
            age: 25,
            stars: 4.9,
            isSubscribed: true
        }

    // 4.1
        console.log(typeof student)

    // 4.3
        console.log(`${student.name}, de ${student.age} anos, tem ${student.stars} estrelas.`)

//5.
    let students = []
    console.log(students)

//6.
    students[0] = student
    console.log(students)

//7.
    console.log(students[0])

//8.
    student = {
        name: `Mike`,
        age: 18,
        stars: 2.2,
        isSubscribed: false
    }
    students[1] = student
    console.log(students)

//9.
    // undefined, pelo motivo explicado no arquivo hoisting.js
    console.log(a)
    var a = 1