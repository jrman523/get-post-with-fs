console.log("hello");
$("#send").on("click", function () {
  var info = {
    player: "one",
    choice: "rock",
  };

  //send profile values to database
  $.post("/api/test", info) // 200 ok
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });
});

// $.ajax({
//   method: "POST",
//   url: "/api/test",
//   data: profile,
// });

// $.get("/api/result").then(function () {
//   console.log(data);
// });

// $.ajax({
//   method: "GET",
//   url: "/api/result"
// }).then(function(data){
// console.log(data);
//});
