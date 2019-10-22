// Declare the variables need for the game
const choiceA = $('#a');
const choiceB = $('#b');
const choiceC = $('#c');
const choiceD = $('#d');
const timer = $('#timer');
const question = $('#question');
const images = $('#picture');
let runningQuestion = 0;
let correctScore = 0;
let incorrectScore = 0;
let numQuestions = 2;
let myTimer = 30
let intervalId;
let clockRunning = false;

//an Array of Questions and answers
let questionsAnswer = [


    {
       question: "What year did Nintendo first?",
       imgPic :"./images/MarioTrivia.jpeg",
       a: "1994",
       b: "1984",
       c: "1974",
       d: "1645",
       correctAnswer: 'c',
       newTimer: 30
       
 
   },

   {
       question: "What year did sonic first?",
       imgPic :"./images/nintendoStart.png",
       a: "bb",
       b: "1bb",
       c: "19rrg",
       d: "1vv",
       correctAnswer: 'd',
       newTimer: 30
   },


   {
       question: "What year did Nintendo first?",
       a: "1994",
       b: "1984",
       c: "1974",
       d: "1645",
       correctAnswer: 'a',
       newTimer: 30
   }


]


//Create a timer that will countdown as soon as the game starts
$( document ).ready(function(){
    $('#endScreen').hide()
    
        if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        
      }
    
      function count() {
    
    
    myTimer --;
    
    
    if (myTimer < 0){
        $('#mainPage').hide();
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
        
    }
    
    const converted = timeConverter(myTimer);
    console.log(converted);
    
    $("#display").text(converted);
    }
    
    function timeConverter(t) {
    
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
    
    
    return  seconds;
    }
    
    
    });
    


// what should  happen when the timer runs out



//reset
function reset(){
    $("#display").text("30");
    myTimer = 30;
    
    
    }
    
//a function that will run through the questions after each selection
function renderQuestion(){
    let q = questionsAnswer[runningQuestion];
    question.text(q.question);
    choiceA.text = q.a;
    choiceB.text = q.b;
    choiceC.text = q.c;
    choiceD.text = q.d;
    images.attr = q.imgPic;


}

renderQuestion();
// a function that calls the array of questions and adds a point when you get the answer wrong


function checkAnswer(correctAnswer){
    if(questionsAnswer[runningQuestion].correctAnswer === correctAnswer){
    
        $('#question').hide();
        $('.btn').hide();
        $('#display').hide()
    
        document.getElementById("picture").src = questionsAnswer[runningQuestion].imgPic
     
         
        setTimeout(function(){$('#picture').hide(), $('#question').show(),$('.btn').show(), $('#display').show(), reset() }, 3000)
       
    //    $('#picture').hide()
    
    correctScore ++;
    runningQuestion ++;
    reset();
    console.log('ok');
    
        if(runningQuestion > numQuestions){
            alert("HEY")
    
        } else{
            reset();
            renderQuestion();
        }
    
    
    
    
    
    } else {
        incorrectScore ++
        runningQuestion ++;
        reset();
        if(runningQuestion > numQuestions){
        $('#mainPage').hide();
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
    
        } else{
            reset();
            renderQuestion();
        }
    
    
        
        
        console.log('no');
    
    }
    
    
    
    
    
    }
    

