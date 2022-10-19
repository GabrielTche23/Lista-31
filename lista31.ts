// Ex 1
// let array: number [] = [1,2,3,4,5,6,7,8,9,10]
// let arrayPar: number[] = []
// let arrayImpar: number[] = []
// let index: number = 0
// for (let index = 0; index < array.length; index++) {
//     if(array[index]%2 == 0){
//     arrayPar.push(array[index])
//     }
//     else{
//         arrayImpar.push(array[index])
//     }
// }
// console.log(arrayPar,arrayImpar)

// Ex 2
let array1: number [] = [1,5,6,8,9,10]
let array2: number [] = [1,2,3,6,9,10]
let array3: number [] = []
for (let index = 0; index < array1.length; index++) {
    if(array1[index] == array2[index] || array1[index] > 5){
        array3.push(array1[index])
    }
}