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

// es6 new and old forms
  allVideoIdsInMovieLists = [];

// the old way
  movieLists.forEach(function(movieList) {
    movieList.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

// ES6
  movieLists.forEach(movieList => {
    movieList.video.forEach(video => {
      allVideoIdsInMovieLists.push(video.id);
      });
  });


// implementing a reduce function

// Array.prototype.reduce = function(combiner, initialValue) {
//   var counter,
//     accumulatedValue;

//   // If the array is empty, do nothing
//   if (this.length === 0) {
//     return this;
//   }
//   else {
//     // If the user didn't pass an initial value, use the first item.
//     if (arguments.length === 1) {
//       counter = 1;
//       accumulatedValue = this[0];
//     }
//     else if (arguments.length >= 2) {
//       counter = 0;
//       accumulatedValue = initialValue;
//     }
//     else {
//       throw "Invalid arguments.";
//     }

//     // Loop through the array, feeding the current value and the result of
//     // the previous computation back into the combiner function until
//     // we've exhausted the entire array and are left with only one value.
//     while(counter < this.length) {
//       accumulatedValue = combiner(accumulatedValue, this[counter])
//       counter++;
//     }

//     return [accumulatedValue];
//   }
// };