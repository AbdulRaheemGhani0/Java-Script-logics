

// Q.no.01
//  write a program to display "hello world " five times in your browser.


// const h1= document.querySelector("#head")
// for (let i = 1; i <= 5; i++) {
//    let stg =("Hello World")
//     h1.innerHTML +=(`<li>${stg}</li>`)    
// }
 // ----------------------------------------------------
// Q.NO.02
//  write a program to print numaric counting 1-10.


// const h1= document.querySelector("#head")
//  for (let i = 1; i <= 5; i++) {
   
//    h1.innerHTML +=(`<li>${i}</li>`)   
//  }

//--------------------------------------------------------

//Q.NO.03
//  write a program to print Manuplation table of any number using for loop .table number and lenght should be given by user ..

//  let num1 =+prompt("");
//  let num2 =+prompt ("");
// for (let i = 1; i <=num2 ; i++) {
//     // console.log(`${nm1} * ${i} = ${num1*i}`);
//     console.log(` ${num1} * ${i} = ${num1*i}`)
// }


//---------------------------------------------------------
// Q.no.04
//   Write each element on the new line with help of for loop

// let array =[`Nokia `, `Sumsung`,`apple `, `Sony` ,`Huawei`]


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }

//----------------------------------------------------------

// Q.No.05
//write a program to write the element of the following elements for loop;

//  let array =[`Apple  `, `Banana`,`Mango`, `Orange` ,`Strawberry`]
//  for (let i = 0; i < array.length; i++) {
//      console.log(array[i]);
//  }    
//  for (let i = 0; i < array.length; i++) {
//   console.log(`Element of index ${i} is ${array[i]}`)
// }  

// ----------------------------------------------------------
//Q.no.06
// write  a program to innitialize a array of N items by using prompt .Where  N is a number of items as entered  by user ;

// let numN = +prompt("enter number of items ");
//  let array =[``] ;
// console.log(`number of items is ==>${numN}`);
// for (let i = 1; i <= numN; i++) {
//   let num1 = prompt(`enter value of index ${i}`);
// array.push(num1);
// console.log(array[i]);
// };



//------------------------------------------------------------

// Q.no.07
// Generate the following series in your browser . 



// document.write(`<li>counting:</li>`);
// for (let i = 1; i <= 15 ; i++) {
//     document.write(`${i},`)
// }



// document.write(`<li>Reverse-counting:</li>`);
// for (let i = 15; i >= 1 ; i--) {
//     document.write(`${i},`)
// }
// document.write(`<li>Even
// :</li>`);
// for (let i = 0; i <= 15; i += 2) {
//    document.write(`${i},`)

// }


// document.write(`<li>Odd:</li>`);
// for (let i = 0; i <= 15; i += 3) {
//    document.write(`${i},`)

// }

// document.write(`<li>series:</li>`);
// for (let i = 2; i <= 15; i += 2 ) {
//    document.write(`${i}k,`)

// }


//-------------------------------------------------------
// Q.no.08
//  write a program to enable "search by user input " in an array .


// let array=["cake", "apple pie","cookie","chips","patties"]
// function search(item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return true;  } }
//     return false;
// }
// let items = prompt("Enter an item to search:");
// if (items) {
//     if (search(items.toLowerCase())) {
//         console.log(items + ` is available.`);
//     } else {
//         console.log(items + ` is not available.`);
//     }
// } 


// -----------------------------------------------------------------

// Q.no.09
//Write a program to identify the highest number in the given
//  //array.
// A = [24, 53, 78, 91, 12]
// const A = [24, 53, 78, 91, 12];
// function HighestNumber(A) {
//     if (A.length === 0) {
//         return "Array is empty";
//     }
// let highest = numbers[0]; 
//     for (let i = 1; i < A.length; i++) {
//         if (A[i] > highest) {
//             highest = A[i];
//         }
//     }
//     return highest;
// }

// console.log("Highest number is:",HighestNumber(A));
// -----------------------------------------------------------------------

// Q.no.= 10
//Write a program to identify the smallest number in the given
//  array.
// A = [24, 53, 78, 91, 12]

//  const A = [24, 53, 78, 91, 12];
//  function SmallestNumber(A) {
//      if (A.length === 0) {
//         return "Array is empty";
//     }
//     let smallest = A[0]; 
//    for (let i = 1; i < A.length; i++) {
//         if (A[i] < smallest) {
//             smallest = A[i];
//         }
//     }
// return smallest;
// }
// console.log("Smallest number:", SmallestNumber(A));


// ------------------------------------------------------------------

// Q.no.= 11
// Write a program to identify the largest & the smallest
// // number in the given array.
// A = [24, 53, 78, 91, 12]
//  function HighestNumber(A) {
//     if (A.length === 0) {
//          return "Array is empty";
//      }
//  let highest = A[0]; 
//      for (let i = 1; i < A.length; i++) {
//          if (A[i] > highest) {
//              highest = A[i];
//          }
//      }
//      return highest;
//  }
//  console.log("Highest number is:",HighestNumber(A));
//   function SmallestNumber(A) {
//      if (A.length === 0) {
//          return "Array is empty";
//      }
//      let smallest = A[0]; 
//     for (let i = 1; i < A.length; i++) {
//          if (A[i] < smallest) {
//              smallest = A[i];
//          }
//      }
// return smallest;
//  }
//  console.log("Smallest number:", SmallestNumber(A));


// -----------------------------------------------------------------------


// Q.no.= 12
//  Write a program to print multiples of 5 ranging 1 to 100


// const A = 5
// for (let i = 0; i <=100 ; i++) {
  
   
//     console.log (`5*${i} = ${A*i}`);
// }

// -------------------------------------------------------------------------

// Q.no.= 13
// Write a program to generate the following HTML table in your
//browser using JS.

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
//   const div = document.querySelector(`#table`);

//    div.innerHTML=(`
   
// <table>
// <thead>
//     <tr>
//         <th>student</th>
//         <th>Score</th>
        
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>${students[0]}</td>
//         <td>${scores[0]}</td>

//     </tr>
//     <tr>
//         <td>${students[1]}</td>
//         <td>${scores[1]}</td>
//     </tr>
//     <tr>
//     <td>${students[2]}</td>
//     <td>${scores[2]}</td>
// </tr>
// <tr>
//     <td>${students[3]}</td>
//     <td>${scores[3]}</td>
// </tr>
// </tbody>
// </table>

   
  // `)
//  -------------------------------------------------------------------
// Q.no.= 14
//  Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34




// var scores = [12, 45, 3, 22, 34, 50];
// const num1 = +prompt(`enter stop number`)
// for (let i = 0; i< scores.length; i++) {
//     if(scores[i]===num1)
//  break;
//  console.log(scores[i]);
// }

//  -------------------------------------------------------------------------

// Q.no.= 15
//  You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops


// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]

// for (let i = 0; i < A.length; i++) {
//     console.log(A[i]);
           
//     }


// -------------------------------------------------------------------

// Q.no.= 16
//  Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive







// function printDecreasing(num) {
//     while (num > 0) {
//         console.log(num);
//         num -= 0.5;
//     }
// }


// function getInput() {
//     let input = prompt("Enter a number:");
//     let num = parseFloat(input);

//     if (isNaN(num)) {
//         console.log("Invalid input. Please enter a valid number.");
//         getInput(); 
//     } else {
//         printDecreasing(num); 
//     }
// }
// getInput();


// --------------------------------------------------------------------



// Q.no.= 17
// //The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").




// for (let i = 1; i <= 20; i++) {
//   if (i%2 == 0) {console.log(  `${i}  is even number `)
//   }
//   else { 
//     console.log( ` ${i} is odd number`)
//   }
    
// }


// -------------------------------------------------------------


// Q.no.= 18
//Write a program to calculate the product of the odd integers
// from 1 to 7
// let product = 1;

//
// for (let i = 1; i <= 7; i++) {
    
//     if (i % 2 !== 0) {
    
//         product *= i;
//     }
// }
// console.log("Product of odd integers from 1 to 7:", product);

//-----------------------------------------------------------------------
// Q.no.= 19
//Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7



// function generateWedge(initialStars) {
//       for (let i = initialStars; i > 0; i--) {
//         let line = '';
        
//         for (let j = 0; j < i; j++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// }


// const initialStars = parseInt(prompt("Enter the initial number of stars:"));


// if (!isNaN(initialStars) && initialStars > 0) {
//     generateWedge(initialStars); 
// } else {
//     console.log("Invalid input. Please enter a positive number.");
// }
// ---------------------------------------------------------------------

// Q.NO. 20.a
// Write a program to create the following patterns in your
// browser. Take number of lines as an input.



// num1 = +prompt(`enter number of lines`)
// num2 = `*****`
// for (let i = 0; i <= num1; i++) {
//     let line = '****';
    
    
//     console.log(num2);
// }



