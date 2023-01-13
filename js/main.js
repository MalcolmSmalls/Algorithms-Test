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

// function newFactorial(x){
//     let n = x
//     if(n == 1 ){
//         return x
//     }else{
//         return x * newFactorial(n-1)
//     }
// }

// console.log(newFactorial(5))

// function countDown(x){
//     if(x === 1){
//         return x // this returns x which would be 1 at this case,
//     } else {
//         console.log(x)
//         return countDown(x-1) // i guess this goes all the way down to 1-1, which means x is 1 for some reason then it hits the base
//     }
// }

// console.log(countDown(10))


// function fib(n){
//     if(n == 1){
//         return n
//     }else{
//         return n + fib(n-1)
//     }
// }

// console.log(fib(5))

/* first time around 
x === 3
so 3 + (2)
then
2 + 1
then return 1

*/

// function sumRange(x){
//     if(x===1){
//         return x
//     }else{
//         return x + sumRange(x-1)
//     }
// }

// console.log(sumRange(3))


function collatz(n, total = 0){
	if(n==1){
        console.log(n)
		return total
	}else if(n % 2 === 0){
        console.log(n)
		return collatz(n/2, total + 1)
	}else{
        console.log(n)
		return collatz(3*n+1, total + 1)
	}

}

console.log(collatz(7))