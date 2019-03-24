function boxRandomNum(me) {

   $.ajax({

    url: "https://www.boolean.careers/api/random/boolean",
    method: "GET",
    success : function(data,state) {

    console.log("data" , data),
    console.log("state" , state)

      if (data.success) {

        var bool = data.response

         me.append(bool);

         if (bool) {

           me.addClass("green");
         } else {

           me.addClass("red")
         }
       }

  },
    error : function(request, state, error) {

      console.log("request" , request),
      console.log("state" , state)
      console.log("error" , error)
    }

  });
  
}


function init() {

  var box = $(".box");

  $(document).on("click", ".box", function() {

  var me =  $(this);
  boxRandomNum(me);

  // alternative $(document).on("click", ".box", boxRandomNum);

  //function boxRandomNum() {

  //  var me = $(this);

  //  /////
  //}
  })
}




$(document).ready(init)
