// function pow(x,n) {
//     if(n==1){
//         console.log(`${x} * pow(${x}, ${n} - 1`)
//       return x
//     } else {
//       let results = x * pow(x, n-1)
//       console.log(`${x} * pow(${x}, ${n} - 1`)
//     //   console.log(results)
//       return results
//     }
//   }

//   pow(2,4)



// function factorial(x){
//     if(x === 1){
//       return x
//     }else{
//       return x * factorial(x-1)
  
//     }
// }

//   console.log(factorial(4))

  //4 x 3

  //3 x 2

  //2 x 1

  //4

// function sumToOne(x){
//     let total = 0
//     for(let i = 1; i <= x; i++){
//         total = total + i
//     }
//     return total
// }


// 0 + 1 = 1 (new Total)
// 1 + 2 = 3 (new Total)
// 3 + 3 = 6 (new Total)
// 6 + 4 = 10 (new Total)
// returns 10


// function sumTo(x) {
//     if(x === 1){
//         return x
//     }else{
//         return x + sumTo(x-1)
//     }
// }

// console.log(sumToOne(4))

function newFactorial(x){
    let n = x
    if(n == 1 ){
        return x
    }else{
        return x * newFactorial(n-1)
    }
}

console.log(newFactorial(5))