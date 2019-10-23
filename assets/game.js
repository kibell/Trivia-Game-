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
let numQuestions = 9;
let myTimer = 30
let intervalId;
let clockRunning = false;

//an Array of Questions and answers
let questionsAnswer = [


    {
       question: "Who Lives in a pineapple under the sea?",
       imgPic :"./images/spongebob.gif ",
       a: "Nemo",
       b: "Franklin the Turtle",
       c: "Spongebob Squarepants",
       d: "Eugene Krabs",
       correctAnswer: 'c',
       newTimer: 30
       
 
   },

   {
       question: "What was the name of Dexter's Rival? (Dexter's Laboratory)",
       imgPic :"./images/Dexter.gif",
       a: "Krunk",
       b: "Val halen",
       c: "Major Glory",
       d: "Mandark",
       correctAnswer: 'd',
       newTimer: 30
   },


   {
       question: "Which of the following was NOT a powerpuff girl?",
       imgPic :"./images/powerpuff.gif",
       a: "Blessing",
       b: "Blossom",
       c: "Buttercup",
       d: "Bubbles",
       correctAnswer: 'a',
       newTimer: 30
   },

   {
    question: "Who had a huge crush on the cartoon Hey Arnold?",
    imgPic :"./images/helga.gif",
    a: "Helga",
    b: "Rhonda",
    c: "Phobe",
    d: "Patty",
    correctAnswer: 'a',
    newTimer: 30
},

{
    question: "What was Bugs Bunny's famous Phrase?",
    imgPic :"./images/bugs.gif",
    a: "I like my diamonds, how I like my food",
    b: "Where is the carrots?",
    c: "What's up Doc?",
    d: "Wooozaaaa",
    correctAnswer: 'c',
    newTimer: 30
},


{
    question: "Which Veggie made Popeye Strong!",
    imgPic :"./images/popeye.gif",
    a: "Green beans",
    b: "Spinach",
    c: "Asparagas",
    d: "Brocolli",
    correctAnswer: 'b',
    newTimer: 30
},

{
    question: "What color was Dino from the flinstones?",
    imgPic :"./images/dino.gif",
    a: "Purple",
    b: "Green",
    c: "Blue",
    d: "Who is Dino?",
    correctAnswer: 'a',
    newTimer: 30
},

{
    question: "Which of the following was NOT a member of the Mystery Gang ",
    imgPic :"./images/doo.gif",
    a: "Maggie",
    b: "Daphne",
    c: "Velma",
    d: "Fred",
    correctAnswer: 'a',
    newTimer: 30
},


{
    question: "Which scientific term is used to describe the condition that Elmer Fudd has?",
    imgPic :"./images/helga.gif",
    a: "Helga",
    b: "Rhonda",
    c: "Phobe",
    d: "Rhotacism",
    correctAnswer: 'd',
    newTimer: 30
},

]


//Create a timer that will countdown as soon as the game starts
$( document ).ready(function(){
   
$('#mainPage').hide()




    $('#start').click(function(){
        $('#mainPage').show()
        $('#start').hide()
    $('#endScreen').hide()
    
        if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        
      }
    
      function count() {
    
    
    myTimer --;
    
    
    if (myTimer < 0){
        $('#mainPage').hide();
        $('#question').html("TIMES UP!!");
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
    question.html(q.question);
    choiceA.text(q.a);
    choiceB.text(q.b)
    choiceC.text(q.c)
    choiceD.text(q.d);
    images.attr = q.imgPic;


}

renderQuestion();
// // a function that calls the array of questions and adds a point when you get the answer wrong


function checkAnswer(correctAnswer){
    if(questionsAnswer[runningQuestion].correctAnswer === correctAnswer){
    
        $('#question').hide();
        $('.btn').hide();
        
        
    
        document.getElementById("picture").src = questionsAnswer[runningQuestion].imgPic
        $('#picture').show()
         
        setTimeout(function(){$('#picture').hide(), $('#question').show(),$('.btn').show(), $('#display').show(), reset() }, 3000)
       
    //    $('#picture').hide()
    
    correctScore ++;
    runningQuestion ++;
    reset();
    console.log('ok');
    
        if(runningQuestion > numQuestions){
            $('#question').hide();
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
    
        } else{
            reset();
            renderQuestion();
        }
    
    
    
    
    
    } else {
        incorrectScore ++
        runningQuestion ++;
        reset();
        if(runningQuestion > numQuestions){
         $('#question').hide();
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

    

