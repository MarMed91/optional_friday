function generateMsg(sent, input) {

  var data = {

    text: input
  }

  if (sent) {

    data.class = "sent";
  } else {

    data.class = "received";
  }
  var template = $("#text-template").html();
  var compiled = Handlebars.compile(template);
  var finalHTML = compiled(data);

   var messageContainer = $(".message-container");
   messageContainer.append(finalHTML);
}


function  messagePrinter(e) {

  var me = $(this);


  if (e.which == 13) {

    var input = me.val();
    me.val("");

    generateMsg(true, input)

    setTimeout(generateAjaxMsg, 3000);
  }
}


function generateAjaxMsg() {

  $.ajax({
    url:"https://www.boolean.careers/api/random/sentence",
    method: "GET",
    success: function(data, state) {

      if (data.success) {

        generateMsg(false, data.response);
      }
    },
    error: function (request, state, error) {

      console.log("request" , date);
      console.log("state" , state);
      console.log("date" , error);
    }
  });
}

function init() {

  var input = $("#txt");
  input.keyup(messagePrinter);
}

$(document).ready(init);
