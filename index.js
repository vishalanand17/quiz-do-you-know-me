var readlineSync = require ('readline-sync');
var score =0;
function welcomeUser() 
{
var userName = readlineSync.question("What is your name ?");
console.log ("Welcome " + userName + "!" + " Lets Play a quiz!! ");
console.log("Lets see how well you know Vishal..");
}

var questions = [
  {
    question : "Where do I live ? :: " ,
    answer : "Patna"
  } ,

 {
  question : "My favourite sports ?:: ",
  answer : "Cricket"
 } ,
 {
 question : "My favourite IPL team ?:: ",
  answer : "csk"
 } ,
 {
  question : "My dream country to visit ?:: ",
  answer : "Maldives"
 } ,
{
  question : "My favourite fruit ?::" ,
  answer : "Mango"
}
]

var highScores =
  {
    name : "Raj",
    score : 4
  } 

function quizPlay(question , answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log ("Right answer !");
    score = score + 1 ;
    console.log ("Score :" + score);
    console.log ("------------");
    
}

else {
  console.log("Oops! wrong answer..");
  console.log ("Score :" + score);
  console.log ("------------");

}
}

function game (){
  for(var i =0 ; i < questions.length ; i ++)
  {
    var currentquestion = questions[i];
    quizPlay(currentquestion.question , currentquestion.answer)
    
  }
}



function scoreCard(){
  console.log ("Your Final score =" + score + " ");
  console.log("**************");
 
}


function topScorer(){
  if (score > highScores.score){
  console.log("Congrats ! You made a high score for this quiz");
 
  }
  else {
    console.log (highScores.name + " " +"is currently leading this quiz with score :"+ highScores.score);
  }
}
welcomeUser();
game();
scoreCard();
topScorer();