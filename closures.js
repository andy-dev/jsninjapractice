
//---------------------------
//  Simple Closure Example
//---------------------------
function foo(){

  var bar = "bar";

  function baz(){
    console.log(bar);
  }

  bam(baz); // here we pass baz, functions 1st class objects
            // can be passed around
}

function bam(baz){
     baz(); // “bar"
            // when we execute baz over here, it still remembers
            // its lexical scope (this is closure)
}

foo();


//---------------------------
//  Simple Callback Example
//---------------------------

//asuming our html has a <p>

$(document).ready(function(){
  $("p").hide("slow", function(){
    alert("cb executed")
  });
});

//---------------------------
//  With out using the CB
//---------------------------

$(document).ready(function(){
  $("p").hide("slow")
  alert("cb executed")
});

// With cb the alert will fire after the it hides

//---------------------------
//  Simple Closure Example # 2
//---------------------------


function foo(){
  var bam = "bam"

  return function(){
    console.log(bam)
  }
}

function bar(){
  foo()();
}

bar();