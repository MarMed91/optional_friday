function boxGenHB(rnd) {

  var left = $(".left");
  var right = $(".right");
  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < 30; i++) {

    var data = {

      data: rnd
    }
console.log(rnd);
    var finalHtml = compiled(data);

      if (rnd%2 == 0) {
  console.log(right , left);
        right.append(finalHtml);
      } else {

        left.append(finalHtml)
      }
  }

}


function ajaxRndNum() {

  $.ajax({

    url: "https://www.boolean.careers/api/random/int",
    method: "GET",
    success: function(data, state) {

          if (data.success) {

            var num = data.response;
            console.log(num);
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

  ajaxRndNum();
  console.log("ciao");
}




$(document).ready(init);
