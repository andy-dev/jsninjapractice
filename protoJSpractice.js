
// ------ NOTES on prototypes --------
// there are no classes in JS
// every single object is built by a constructor function
// JS and Lua are the only lang you can create an object wo a class
// Java other lang should be called class oriented
// the beauty of prototype linkage we can delegate to different object of method call
// only one cope of function, two objects can use the same object
// this keyword is really nice in the prototype model

// Contructor -- Function that has the new keyword
// [[Prototype]] -- linkage from one object to another object
// It delegates up the prototype chain


// ------ Behavior Delegation --------
// OLOO Objects Linked to Other Objects


// --- Closures Examples -----

function foo (){

  var bar = "bar";

  return function(){
    console.log(bar);
  };
}

function bam(){
  foo()(); // "bar"
}

bam();

for (var i =1; i<=5; i ++) {
     setTimeout(function(){
          console.log("i:" + i);
     }, i * 1000);
}