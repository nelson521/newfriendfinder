
  $('#submit').on("click", function(event) {
    event.preventDefault();
    console.log("form submitted");

    // if form is empty it wont work
    function validateForm() {
      let isValid = true;
      $(".form-control").each(function() {
        if($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {
        if($(this).val() === "") {
          isValid = false;
        }
      })
      return isValid; 
    }

    if(validateForm()) {
      let userData = {

        name: $('#name').val(),
        phote: $('#photo').val(),
        score: [
          $("#ques1").val(),
          $("#ques2").val(),
          $("#ques3").val(),
          $("#ques4").val(),
          $("#ques5").val(),
          $("#ques6").val(),
          $("#ques7").val(),
          $("#ques8").val(),
          $("#ques9").val(),
          $("#ques10").val()

        ]
      
      }
      console.log(userData);

      $.post("/api/friends", userData, function(data) {
        console.log(data);
        // $("#match-name").text(data.name);

        // $("match-img").attr("src", data.photo);

        // $("results-modal").modal("toggle");
      });

    } else {
      alert("Fill out fields please");
    }
    




  })


// end of doc ready
