//---------------------------
//  Simple Async performance
//---------------------------

// function now(){
//   return 4;
// }
// function later(){
//   answer = answer * 2
//   console.log("the meaning of life:", answer)
// }
// var answer = now();
// setTimeout(later,1000)

//---------------------------
//  Simple unit test
//---------------------------
var Bob = require('./bob.js');
describe("Bob", function() {
  var bob = new Bob();
  it("stating something", function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });
});


//---------------------------
//  Simple callback
//---------------------------

var simpleOne = function(cb){
  console.log("here")

  setTimeout(function(){
    cb();
  }, 1000)
}

simpleOne(function(){
  console.log("your simple cb!")
})


//---------------------------
//  Simple Async performance 2
//---------------------------

var doSomething = function(callback){
  console.log("1");

  setTimeout(function(){
    callback();
  }, Math.floor((Math.random() *10 ) + 1) * 1000);
};

var doSomething2 = function(callback){
  console.log("2");

  setTimeout(function(){
    callback();
  }, Math.floor((Math.random() *10 ) + 1) * 1000);
};

var doSomething3 = function(){
  console.log("3");
};

// // in ruby world we would do this
// // doSomething();
// // doSomething2();
// // doSomething3();


// // one way to solve this is callback hell

doSomething(function(){
  doSomething2(function(){
   doSomething3();
  });
});

// to solve this we will get into the deferred
// consits of two constructs deferred and promise
// deferred manages the ability to resolve/reject a step

//promise will manage our array of calllbacks
// allows to chain methods together (using.then)


//---------------------------
//  Promises 2 as of es6
//---------------------------

function getData(d){
  return new Promise(function(resolve,reject){
    setTimeout(function(){resolve(d); },1000)
  });
}

var x;

getData(10)
.then(function(num1){
  x = 1 + num1;
  return getData(30);
})
.then(function(num2){
  var y = 1 + num2;
  return getData("meaning of life" + (x+y));
})
.then(function(answer){
  console.log(answer)
});