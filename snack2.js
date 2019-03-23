function isPresent(elem, arr) {

  var finded = false;
  for (var i = 0; i < arr.length; i++) {

    if (elem == arr[i]) {

      finded = true
    }
  }
  return finded;
}


function checkName(arr) {

var name = prompt("Dimmi il tuo nome");

  if (isPresent(name, arr)) {

     console.log("benvenuto");
  } else {

    console.log("Errore");
  }
}

function ajaxNames() {

var myArr = [];

for (var i = 0; i < 10; i++) {

  $.ajax({

    url: "https://www.boolean.careers/api/random/word",
    method: "GET",
    success: function(data, state) {

          if (data.success) {

            myArr.push(data.response);

            if (myArr.length == 10) {
            checkName(myArr);
            }
          }

    },
    error: function(request, state, error) {

      alert("Error");
    }

  });

 }
 console.log(myArr);
}


function init() {

var myArr = ajaxNames();
console.log(myArr);


}

$(document).ready(init);
