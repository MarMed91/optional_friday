function getSum(arr) {

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function ajaxArray() {

  var quantity = Number(prompt("Quanti elementi vuoi includere nell'array"));

    $.ajax({

    url:"https://www.boolean.careers/api/array/integers",
    data: {min:1, max:100, items: quantity},
    method: "GET",
    success: function(data, state) {

         var sum = getSum(data.response);
          console.log(sum);
      },
    error: function(request, state, error) {

      console.log("request", request);
      console.log("state", state);
      console.log("error", error);
    }
   });
 }

function init() {
  ajaxArray();
}

$(document).ready(init);
