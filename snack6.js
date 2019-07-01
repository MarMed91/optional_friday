function printPhrase(data) {

  var container = $(".container");

  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  var finalHTML = compiled({

    Testo:data
  });

  container.append(finalHTML);
}

function ajaxRndWords(input) {

  var outData = {

    text: input
  }

  $.ajax({
    url:"www.boolean.careers/api/random/word",
    data: outData,
    method:"GET",
    success: function(data, state) {
      
         var phrases = data.response;
         printPhrase(phrases);
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
