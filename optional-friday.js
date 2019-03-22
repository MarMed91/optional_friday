function boxGenHB(data) {

  var left = $(".left");
  var right = $(".right");
  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  for (var i = 0; i < 30; i++) {

    var data = {

      data: data
    }

    var finalHtml = compiled(data);

      if (data % 2 == 0) {

        right.append(finalHtml);
      } else {

        left.append(finalHtml)
      }
  }

}

function ajaxRndNum() {

  $.ajax({

    url: "https://www.boolean.careers/api/array/integers?min=1&max=100&items=10",
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

}




$(document).ready(init);
