
/// Day 04 //////////////////////////////

// In js Everything is an object?
 
const p1 = {
    xp1: "I am inside P1",
 };


const p2 = {
    xp2: "I am inside P2",
    __proto__: p1,
 };

 
const p3 = {
    xp3: "I am inside P3",
    __proto__: p2,
 };

 console.log(p1, p2, p3);
 
/// Day 04 //////////////////////////////