// function removeDups(array) {
//     let idx = 0;
//     let newArr = [];
//     let temp = {}
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(!temp[element]){
//             temp[element] = 1;
//             newArr[idx] = element;
//             idx++;
//         }
//     }
//     temp={};
//     return newArr;
// }
// console.log(removeDups([1,2,1,3,5,2,45,6,23,575,243,343,243,243,243,243,243,243,243,243]));

// function thirdLargest(array) {
//     let first = array[0];
//     let second= -100000,third = -1000000;
//     for (let i = 1; i < array.length; i++) {
//         // [1,5,7,34,67,32]
//         console.log("Before",i," ; ", array[i], first, second, third);
//         if (array[i] > first)
//         {
//             third = second;
//             second = first;
//             first = array[i];
//         }
//         else if (array[i] > second)
//         {
//             third = second;
//             second = array[i];
//         }
//         else if (array[i] > third)
//             third = array[i];
//         console.log("After",i, " ; ", array[i], first, second, third);
//         console.log("----------------------------------");
//     }
//     return third;
// }

// console.log(thirdLargest([1,5,7,34,67,32]));


// // function abc(x){
// //     console.log(typeof x, arguments.length);
// // }

// // abc();
// // abc(5);
// // abc("1","2","3");


// function reverseString(string) {
//     let arr = [];
//     let length = string.length;
//     let rev = '';
//     let isPalindrom = 'String is not palindrom';
//     for (let index = length-1; index >= 0; index--) {
//         const element = string[index];
//         rev += element;
//     }

//     if(string === rev){
//         isPalindrom = 'String is Palindrom'
//     }

//     return isPalindrom;
// }

// console.log(reverseString('123321'))


const async_hooks = require('async_hooks');

// Create a map to store the async context details
const asyncContextMap = new Map();

// Create a hook to monitor async operations
const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const parentContext = asyncContextMap.get(triggerAsyncId);
    if (parentContext) {
      // Create a new context for the async operation
      const asyncContext = { id: asyncId, parent: parentContext };
      asyncContextMap.set(asyncId, asyncContext);
    }
  },
  destroy(asyncId) {
    asyncContextMap.delete(asyncId);
  },
});

// Enable the async hook
asyncHook.enable();

// Perform an asynchronous operation
function performAsyncOperation() {
  const asyncId = async_hooks.executionAsyncId();
  console.log(asyncId);
  const asyncContext = asyncContextMap.get(asyncId);

  console.log('Performing async operation in context:', asyncContext);
  
  // Simulating an asynchronous delay
  setTimeout(() => {
    console.log('Async operation completed in context:', asyncContext);
  }, 2000);
}

// Call the async operation
performAsyncOperation();
