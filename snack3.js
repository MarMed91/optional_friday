function generateMsg(sent, text) {

  var data = {

    text: text
  }


  if (sent) {

    data.class = "sent";
  } else {

    data.class = "received";
  }
  var template = $("#text-template").html();
  var compiled = Handlebars.compile(template);
  var finalHTML = compiled(data);



  return finalHTML;
}


function  messagePrinter(e) {

  var me = $(this);
  var messageContainer = $(".message-container");

  if (e.which == 13) {

    var input = me.val();
    me.val("");

    var message = generateMsg(true, input)
    
    messageContainer.append(message);


    setTimeout(generateAjaxMsg, 3000);
  }
}


function generateAjaxMsg() {

  $.ajax({
    url:"https://www.boolean.careers/api/random/sentence",
    method: "GET",
    success: function(data, state) {

      if (data.success) {

        ajaxMsg(data.response);
      }
    },
    error: function (request, state, error) {

      console.log("request" , date);
      console.log("state" , state);
      console.log("date" , error);
    }
  });
}


function ajaxMsg(rndSentence) {

  var message = getMessage(false, rndSentence);
  var messageContainer = $(".message-container");
  messageContainer.append(message);
}


function init() {

  var input = $("#txt");
  input.keyup(generateMsg);
}

$(document).ready(init);
