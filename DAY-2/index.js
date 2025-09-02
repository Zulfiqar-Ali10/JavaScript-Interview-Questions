
/// Day 02 ////////////////////////////
// First, JavaScript creates the global execution context,
// then pushes it onto the call stack. If there is any Web API task,
//  it goes to the Web API environment. Once its time is completed, 
// it moves to the task queue. The event loop then checks the task queue,
//  and pushes it to the call stack only when the call stack is empty,
//  and finally, the result is returned. ///


// console.log("Start of script");

// setTimeout(() => {
//     console.log("A");
// }, 0);


// setTimeout(() => {
//     console.log("B");
// }, 0);

// setTimeout(() => {
//     console.log("C");
// }, 2 * 1000);

// console.log("End of script");
// console.log("Bye Bye");


/// Day 02 ////////////////////////////

//  In JavaScript, starvation occurs when lower-priority tasks (like macrotasks) never get executed because higher-priority tasks (like continuous microtasks) keep blocking the event loop


console.log("Start of script 3");

setTimeout(() => {
    console.log("This is from the Task"); 
}, 0);

Promise.resolve().then(() =>{
    console.log("This is from the Microtask Queue (Promises)");
})

console.log("End of script");


/// Day 02 ////////////////////////////