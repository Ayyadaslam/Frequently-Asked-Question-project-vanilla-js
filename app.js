const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(question);

  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      // here we are using if
      if (item !== question) {
        item.classList.remove("show-text");
      }
      // close  if statement here
    });

    question.classList.toggle("show-text");
  });
});
