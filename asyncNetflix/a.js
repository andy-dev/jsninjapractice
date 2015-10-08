var myForFunct = function(){
  var names = ["andy", "john", "cayden", "paul"], counter;

  for(counter=0; counter < names.length; counter++){
    console.log(names[counter]);
  }
}

myForFunct();

var myForEachFunct = function(){
  var names = ["andy", "john", "cayden", "paul"]

  names.forEach(function(name){
    console.log(name);
  });
}

myForEachFunct();

//my own map
// how map works
var myMap = function(projectionFunction){
  var results = [];
  this.forEach(function(itemInArray){
    results.push(projectionFunction(itemInArray));
  })
  return results;
}

