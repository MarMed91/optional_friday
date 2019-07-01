function boxGenHB(rnd) {

  var left = $(".left");
  var right = $(".right");
  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  var data = {

    data: rnd
  }

  var finalHtml = compiled(data);

      if (rnd % 2 == 0) {

        right.append(finalHtml);
      } else {

        left.append(finalHtml);
      }
}

function ajaxRndNum() {

  $.ajax({

    url: "https://www.boolean.careers/api/random/int",
    method: "GET",
    success: function(data, state) {

          if (data.success) {

            var num = data.response;
            boxGenHB(num)
          }
    },
    error: function(request,state,error) {

      console.log("request", request)
      console.log("state", state)
      console.log("error", error)
    },
  });
}

function init() {

  var button = $("input");
  button.click(ajaxRndNum);
}

$(document).ready(init);
