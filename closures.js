
//---------------------------
//  Simple Closure Example
//---------------------------
function foo(){

  var bar = "bar";

  function baz(){
    console.log(bar);
  }

  bam(baz);
}

function bam(baz){
     baz(); // “bar"
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