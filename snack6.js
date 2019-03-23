function ajaxRndWords() {

  $.ajax({
    url:"",
    method:"GET",
    success: function(data, state) {


    },
    error: function(request, state, error) {

      console.log("request", request)
      console.log("state", state)
      console.log("error", error)
    },
  });
}


function init() {

  ajaxRndWords();
}




$(document).ready(init);
