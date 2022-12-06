var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("May I know your name? ");
console.log("Welcome " + userName + " to BTS quiz?");

console.log("------------------------");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score++;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("------------");
}

var questions = [
  {
    question: "How many members make the group?",
    answer: "7",
  },
  {
    question: "Who is the leader of the BTS group? ",
    answer: "RM",
  },
  {
    question: "Who is the youngest member in the group?",
    answer: "JK",
  },
  {
    question: "what is the country of BTS? ",
    answer: "South Korea",
  },
  {
    question: "What are BTS fans called as? ",
    answer: "ARMY",
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

score == 5
  ? console.log("You are a true ARMY !")
  : console.log("Your Total Score is : ", score);

console.log("Thank you for playing !");
