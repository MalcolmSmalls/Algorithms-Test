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
//         return x 
//     } else {
//         console.log(x)
//         return countDown(x-1) 
//     }
// }

// console.log(countDown(3))


/* 
Starts with countDown(3)
3 !== 1 so it goes to else statement
console.logs x which is 3 then
hits return which calls countDown(2)
2 !== 1 so it goes to else statement
console logs x which is 2 at the time
hits return which calls countDown(1)
1 === 1 so it returns 1 this remains the value of x because nothing ever happens for it to change as in no multiplication or addition
so it goes back to countDown(2) then countDown(3) now it console logs the value of x which hasn't changed so it console logs 1

*/


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
//         console.log(x)
//         return x
//     }else{
//         console.log(x)
//         return x + sumRange(x-1)
//     }
// }

// console.log(sumRange(3))

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

// function fibs(n) {
//     if(n<=1){
//         return n
//     } else {
//         return fibs(n-1) + fibs(n-2)
//     }
// }

// console.log(fibs(5))



// Question 4: Check all values in an array


// function all(arr, callback){
//     const copy = arr.map(item => item)

//     if(copy.length === 0){
//         return true
//     }else if(callback(copy[0]) === true){
//         copy.shift()
//         return all(copy, callback)
//     }else{
//         return false
//     }
// }

// var allAreLessThanSeven = all([1,10,5], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven);


// Question 5: Product of an array

// function productOfArray(arr, product = 1, index = arr.length-1){
//     const copy = arr.map(item => item)
    
//     if(index === 0){
//         return product
//     }else{
//         product = product * copy[index]
//         index--
//         return productOfArray(copy, product, index)
//     }
// }

// function productOfArray(array){
// 	if(array.length === 0) return 1;

// 	return array.shift() * productOfArray(array);
// }


// console.log(productOfArray([1,2,3,10]))





// Question 6: Search JS object


// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }




// function contains(obj, item){

//     for(const property in obj){
//         if(typeof obj[property] === 'object'){
//             return contains(obj[property], item)
//         }

//         if(obj[property] === item){
//             return true
//         }
//     }
//     return false

// }

// console.log(contains(nestedObject, 'foo2'))

// const nestedObject = [44, 'foo2']

// function contains(obj, item){
//     const newObj = obj.map(x => x)
//     if(newObj.length === 0){
//         return false
//     }else if(newObj[0] !== item){
//         newObj.shift()
//         return contains(newObj, item)
//     }else{
//         return true
//     }
// }


function merge(left, right){
    const newArr = []
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            newArr.push(left.shift())
        }else{
        newArr.push(right.shift())
        }
    }
    return [...newArr, ...left, ...right]
}


function mergeSort(arr){
    let middle = Math.round(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    if(arr.length < 2){
        return arr
    }
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}


console.log(mergeSort([4,3,6, 2]))    