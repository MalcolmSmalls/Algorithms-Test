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

function sumRange(x){
    if(x===1){
        console.log(x)
        return x
    }else{
        console.log(x)
        return x + sumRange(x-1)
    }
}

console.log(sumRange(3))

/* 
Step 1: sumRange(3) is called, 3 as the argument and checks first conditional, is x === to 1? This is a no... so
Step 2: Does else, which is console.log(x) so it console logs 3, then
Step 3: hits return which now calls SumRange(2) or SumRange(3-1), goes through conditional again
Step 4: 2 !== 1 so, goes to else and console logs (x) which is 2
Step 5: hits return which now calls SumRange(1) or SumRange(2-1)
Step 6: now x === 1, so runs if
Step 7: Console.logs 1
Step 8: returns 1, this is the beginning x value for inside as it executes
Step 9: Reverses, adding x as the returned value 1, so now it's 1 + sumRange(2)
Step 10: It needs to get BACK to sumRange(3) so it runs again, this time plugging 3 in as x (the sum from the last process) 3 + sumRange(3)


*/

// function collatz(n, total = 0){
// 	if(n==1){
//         console.log(n)
// 		return total
// 	}else if(n % 2 === 0){
//         console.log(n)
// 		return collatz(n/2, total + 1)
// 	}else{
//         console.log(n)
// 		return collatz(3*n+1, total + 1)
// 	}

// }

// console.log(collatz(7))

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function printList(list){
//     console.log(list.value)
//     if(list.next !== null){
//         return printList(list.next)
//     }
//   }

//   console.log(printList(list))




// function power(x, n){
//   if(n===1){
//     return x
//   }else{
//     return x * power(x, n-1)
//   }
// }
// console.log(power(2, 4))

/* 

Starts off power(2,4)
power(2, 3)
power(2, 2)
now n === 1 so do if, return x which is 2 and reverse now using 2 as inner x and the x remaining static in the argument since its already been called with it
2 x power(2, 2) === 4
4 x power(2, 3) === 8
8 x power (2,4) === 16


*/





// function factorial(x){
//   if(x==1){
//     return x
//   }else{
//     return x * factorial(x-1)
//   }

// }

// console.log(factorial(5))

/* 

Starts off factorial(5)
5 !== 1, so runs else
factorial(4)
factorial(3)
factorial(2) 
returns 1 1 is now the value inside as it goes back up so now it's 
1 * factorial 2
2 x factorial 3
6 x factorial 4
24 x factorial 5



*/