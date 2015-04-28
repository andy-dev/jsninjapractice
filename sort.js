function bubbleSort(array){
  var myArrayLength = array.length;
  var i = 0;
  for (i;i<myArrayLength;i++) {
    var n = 0;
    for (n;n<myArrayLength; n++) {
      if (array[n+1] < array[n]) {
        var switchedNumber = array[n];
        array[n] = array[n+1];
        array[n+1] = switchedNumber;
      }
    }
  }
  console.log(array);
  return array
}

var myArray = [1,5,2]
bubbleSort(myArray);