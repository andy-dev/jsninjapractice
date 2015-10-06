//---------------------------
//  a simple callback
//---------------------------

function foo (){
  console.log("hi")
}

setTimeout(foo, 1000)

//---------------------------
// organize js
//---------------------------

var Details = (function (){

    function loadPerson(ID){

      $.ajax("details/" + ID + ".html",{dataType: "text"})
      .then(function(contents){
        $content.html(contents);
      });

    }

  function init(){

  	$content = $("[rel=js-details]");
    EVT.on("person-selected", loadPerson);
    //better to not have modules call on each other

  }

  var $content;

  EVT.on("init", init);

  return {
    init:init,
    loadPerson: loadPerson
  }

})();
