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

function sumTo(x) {
    if(x === 1){
        return x
    }else{
        return x + sumTo(x-1)
    }
}

console.log(sumTo(4))